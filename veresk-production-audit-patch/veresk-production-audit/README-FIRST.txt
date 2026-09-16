VERESK FINAL PRODUCTION AUDIT PATCH
===================================

Why this patch exists
---------------------
The connected GitHub integration in this ChatGPT session can read your branch, but GitHub rejected write operations (403), and this environment cannot download npm packages from the internet. Your local VS Code project already has node_modules, so the safest path is a one-command local production build using the audited files in this package.

How to produce the final upload ZIP
-----------------------------------
1. Extract this package anywhere.
2. Copy the extracted folder (or keep it open).
3. Open PowerShell in your existing project folder:
   C:\Users\pedra\Documents\GitHub\Veresk Home Page\solutek-react
4. Run the finalizer using its full path, for example:
   powershell -ExecutionPolicy Bypass -File "C:\path\to\veresk-production-audit\FINALIZE-VERESK.ps1"

The script will:
- back up every source file it replaces;
- apply the audited SEO/accessibility/performance changes;
- preserve the existing Solutek visual selectors for the new semantic H2/P tags;
- run the Vite production build;
- validate the manifest and scoped WordPress CSS;
- create: veresk-homepage-upload.zip

Deployment
----------
The generated veresk-homepage-upload.zip contains:
- veresk-home/       -> production React build
- page-templates/template-veresk-react-home.php

Upload/extract it into:
wp-content/themes/generatepress_child/

Before replacing the live homepage, use staging or keep a backup of the current child theme.

Post-deployment checks
----------------------
- Purge WP Rocket/server/CDN cache.
- Open the homepage logged out in a private window.
- Submit one real test through the Inquiries form and confirm email delivery.
- Check mobile and desktop.
- In Rank Math, confirm the homepage remains Index and canonical points to the homepage.
- In robots.txt, make sure Googlebot and OAI-SearchBot are not blocked.
- Re-test the homepage in Google Search Console URL Inspection and Rich Results Test.
