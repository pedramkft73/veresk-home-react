# Veresk React homepage: WordPress integration

This directory contains the deployment bridge for a GeneratePress child theme.
It does not deploy or change WordPress by itself.

## Production layout

The integration expects the following server layout:

```text
wp-content/themes/YOUR_CHILD_THEME/
├── page-templates/
│   └── template-veresk-react-home.php
└── veresk-home/                         # Contents of this project's dist/
```

The React build and PHP template must use the same active child-theme directory
name. Copy `.env.production.example` to `.env.production`, then replace
`YOUR_CHILD_THEME` with the actual directory name under `wp-content/themes/`.

## Build and staging steps

1. Copy `.env.production.example` to `.env.production` and set the active child-theme directory name.
2. Run `npm run build` in the React project.
3. Copy the **contents** of `dist/` to
   `wp-content/themes/YOUR_CHILD_THEME/veresk-home/`.
4. Copy
   `generatepress-child/page-templates/template-veresk-react-home.php` into
   the same `page-templates/` path in the active GeneratePress child theme.
5. Assign the **Veresk React Homepage** template to any WordPress page that
   should render the React homepage content.

Do not copy `dist/index.html` into the child theme and do not iframe it.
WordPress supplies the document, header and footer. The template supplies only
the `#root` mount container between `get_header()` and `get_footer()`.

## Asset loading behavior

The production build emits `assets/veresk-react-home.css`, which contains the
Slick, Bootstrap, Bootstrap Icons, and Solutek selectors scoped beneath
`#veresk-react-home`. The page template enqueues that isolated stylesheet and
the manifest's hashed JavaScript entry only when the Veresk React Homepage
template is assigned.

No React asset is enqueued globally. If the manifest, scoped stylesheet, or
entry is missing, the template still renders the WordPress page safely but
does not enqueue the React application.

WordPress does not use the generated `dist/index.html`; it reads the manifest
and loads the entry assets into the mount container instead.
