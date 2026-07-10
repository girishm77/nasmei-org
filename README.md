# NASMEI Website

This repository is a GitHub-ready static snapshot of the live `nasmei.org` website, designed for DigitalOcean App Platform.

## Structure

- `public/` - mirrored static website files served by DigitalOcean.
- `.do/app.yaml` - DigitalOcean App Platform specification template.
- `docs/deployment-runbook.md` - setup, DNS, and maintenance notes.
- `docs/live-site-mirror-manifest.tsv` - source URL manifest from the live-site crawl.
- `docs/live-site-mirror-errors.tsv` - crawl errors from the live-site mirror, if any.

## Local Preview

From this folder:

```bash
python3 -m http.server 8080 --directory public
```

Then open `http://localhost:8080`.

## GitHub Setup

Create an empty GitHub repository, then run:

```bash
git remote add origin git@github.com:girishm77/nasmei-org.git
git push -u origin main
```

If using HTTPS instead of SSH:

```bash
git remote add origin https://github.com/girishm77/nasmei-org.git
git push -u origin main
```

## DigitalOcean Setup

Use DigitalOcean App Platform and select this GitHub repository as the source.

Recommended settings:

- Resource type: Static Site
- Branch: `main`
- Source directory: `/`
- Output directory: `public`
- Autodeploy: enabled

If using the `.do/app.yaml` spec, confirm DigitalOcean has access to `girishm77/nasmei-org` before applying it.

## Live Site Snapshot

The first version of this repository was mirrored from `https://nasmei.org/` on July 10, 2026. It includes same-domain HTML pages, images, PDFs, CSS, and JavaScript reachable from the live site. External CDN scripts and styles remain externally linked.
