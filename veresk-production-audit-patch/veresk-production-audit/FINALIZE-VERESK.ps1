$ErrorActionPreference = 'Stop'

Write-Host "Veresk production finalizer" -ForegroundColor Cyan

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Get-Location

if (-not (Test-Path (Join-Path $ProjectRoot 'package.json'))) {
    throw "Run this script from the solutek-react project root (the folder containing package.json)."
}

$PatchRoot = Join-Path $ScriptDir 'patch'
if (-not (Test-Path $PatchRoot)) {
    throw "Patch folder not found next to this script."
}

$timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$backupRoot = Join-Path $ProjectRoot ".veresk-backup-$timestamp"
New-Item -ItemType Directory -Force -Path $backupRoot | Out-Null

$patchFiles = Get-ChildItem -Path $PatchRoot -Recurse -File
foreach ($file in $patchFiles) {
    $relative = $file.FullName.Substring($PatchRoot.Length).TrimStart('\','/')
    $target = Join-Path $ProjectRoot $relative
    if (Test-Path $target) {
        $backup = Join-Path $backupRoot $relative
        New-Item -ItemType Directory -Force -Path (Split-Path -Parent $backup) | Out-Null
        Copy-Item $target $backup -Force
    }
    New-Item -ItemType Directory -Force -Path (Split-Path -Parent $target) | Out-Null
    Copy-Item $file.FullName $target -Force
}

# Preserve Solutek visuals while allowing semantic H2/P elements on Home 1.
$cssFiles = @(
    'src/assets/main.css',
    'src/assets/responsive.css',
    'src/assets/wordpress-compatibility.css'
)
foreach ($relativeCss in $cssFiles) {
    $cssPath = Join-Path $ProjectRoot $relativeCss
    if (-not (Test-Path $cssPath)) { continue }
    $css = Get-Content $cssPath -Raw
    $css = $css.Replace('h1.section-main-title', ':is(h1,h2).section-main-title')
    $css = $css.Replace('h5.section-sub-title', ':is(h5,p).section-sub-title')
    Set-Content -Path $cssPath -Value $css -Encoding UTF8
}

Write-Host "Running production build..." -ForegroundColor Cyan
& npm.cmd run build
if ($LASTEXITCODE -ne 0) { throw "npm build failed." }

$dist = Join-Path $ProjectRoot 'dist'
$manifest = Join-Path $dist '.vite/manifest.json'
$scopedCss = Join-Path $dist 'assets/veresk-react-home.css'
if (-not (Test-Path $manifest)) { throw "Build finished but .vite/manifest.json is missing." }
if (-not (Test-Path $scopedCss)) { throw "Build finished but assets/veresk-react-home.css is missing." }

# Basic safety checks for deployment artefacts.
$manifestText = Get-Content $manifest -Raw
if ($manifestText -notmatch 'index.html') { throw "Vite manifest does not contain the index.html entry." }

$stage = Join-Path $ProjectRoot 'veresk-upload-package'
if (Test-Path $stage) { Remove-Item $stage -Recurse -Force }
New-Item -ItemType Directory -Force -Path (Join-Path $stage 'veresk-home') | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $stage 'page-templates') | Out-Null
Copy-Item (Join-Path $dist '*') (Join-Path $stage 'veresk-home') -Recurse -Force
Copy-Item (Join-Path $ProjectRoot 'wordpress-integration/generatepress-child/page-templates/template-veresk-react-home.php') (Join-Path $stage 'page-templates/template-veresk-react-home.php') -Force

$zipPath = Join-Path $ProjectRoot 'veresk-homepage-upload.zip'
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
Compress-Archive -Path (Join-Path $stage '*') -DestinationPath $zipPath -CompressionLevel Optimal

Write-Host "" 
Write-Host "SUCCESS" -ForegroundColor Green
Write-Host "Upload package: $zipPath" -ForegroundColor Green
Write-Host "Backup of replaced source files: $backupRoot" -ForegroundColor DarkGray
Write-Host "ZIP contents are intended to merge into: wp-content/themes/generatepress_child/"
