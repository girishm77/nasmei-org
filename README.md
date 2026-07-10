# NASMEI Website

This repository is a GitHub-ready static website scaffold for `nasmei.org`, designed for DigitalOcean App Platform.

## Structure

- `public/` - static website files served by DigitalOcean.
- `.do/app.yaml` - DigitalOcean App Platform specification template.
- `docs/deployment-runbook.md` - setup, DNS, and maintenance notes.

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
