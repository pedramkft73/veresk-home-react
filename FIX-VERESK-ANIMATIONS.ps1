$ErrorActionPreference = 'Stop'

Write-Host "Veresk animation hotfix" -ForegroundColor Cyan
$ProjectRoot = Get-Location

if (-not (Test-Path (Join-Path $ProjectRoot 'package.json'))) {
    throw "Run this script from the solutek-react project root (the folder containing package.json)."
}

$cssPath = Join-Path $ProjectRoot 'src/assets/production-audit.css'
if (-not (Test-Path $cssPath)) {
    throw "src/assets/production-audit.css was not found."
}

$timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$backup = "$cssPath.backup-$timestamp"
Copy-Item $cssPath $backup -Force

# Keep accessibility focus styles, but remove the global reduced-motion override that
# can collapse all transitions/animations to 0.01ms on systems reporting reduced motion.
$css = @'
/* Final production accessibility/performance safeguards. Visual design intentionally unchanged. */
#veresk-react-home .home-page :focus-visible {
  outline: 3px solid #a85f16;
  outline-offset: 3px;
}

#veresk-react-home .home-page .hero-eyebrow {
  margin: 0;
}

#veresk-react-home .home-page .cs_slider_arrow[role="button"] {
  cursor: pointer;
}

#veresk-react-home .home-page img {
  height: auto;
}
'@

Set-Content -Path $cssPath -Value $css -Encoding UTF8

Write-Host "Rebuilding production assets..." -ForegroundColor Cyan
& npm.cmd run build
if ($LASTEXITCODE -ne 0) { throw "npm build failed." }

$dist = Join-Path $ProjectRoot 'dist'
$manifest = Join-Path $dist '.vite/manifest.json'
$scopedCss = Join-Path $dist 'assets/veresk-react-home.css'
if (-not (Test-Path $manifest)) { throw "Build finished but .vite/manifest.json is missing." }
if (-not (Test-Path $scopedCss)) { throw "Build finished but assets/veresk-react-home.css is missing." }

$stage = Join-Path $ProjectRoot 'veresk-upload-package-hotfix'
if (Test-Path $stage) { Remove-Item $stage -Recurse -Force }
New-Item -ItemType Directory -Force -Path (Join-Path $stage 'veresk-home') | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $stage 'page-templates') | Out-Null
Copy-Item (Join-Path $dist '*') (Join-Path $stage 'veresk-home') -Recurse -Force
Copy-Item (Join-Path $ProjectRoot 'wordpress-integration/generatepress-child/page-templates/template-veresk-react-home.php') (Join-Path $stage 'page-templates/template-veresk-react-home.php') -Force

$zipPath = Join-Path $ProjectRoot 'veresk-homepage-upload-hotfix.zip'
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
Compress-Archive -Path (Join-Path $stage '*') -DestinationPath $zipPath -CompressionLevel Optimal

Write-Host "" 
Write-Host "SUCCESS" -ForegroundColor Green
Write-Host "Removed the global reduced-motion animation override." -ForegroundColor Green
Write-Host "Upload package: $zipPath" -ForegroundColor Green
Write-Host "Backup: $backup" -ForegroundColor DarkGray
