# Deployment Runbook

## Goal

Host `nasmei.org` from a GitHub repository using DigitalOcean App Platform.

## One-Time Setup

1. Create a GitHub repository under `girishm77` named `nasmei-org`.
2. Push this local repository to GitHub.
3. In DigitalOcean, go to App Platform and create a new app from GitHub.
4. Authorize DigitalOcean to read the selected GitHub repository.
5. Configure the app as a Static Site.
6. Set the output directory to `public`.
7. Enable autodeploy from the `main` branch.
8. Deploy.

## Domain Mapping

Primary domain:

- `nasmei.org`

Alias domain:

- `www.nasmei.org`

After the app deploys:

1. Open the app in DigitalOcean.
2. Go to Networking.
3. Add `nasmei.org` as the primary custom domain.
4. Add `www.nasmei.org` as an alias.
5. Follow the DNS records DigitalOcean provides.
6. Wait for DNS and certificate validation.

The DigitalOcean dashboard already shows one domain in the account. If that is `nasmei.org`, App Platform can use the `zone: nasmei.org` entries in `.do/app.yaml` to let DigitalOcean manage the app domain records. If DNS is managed outside DigitalOcean, add the records at the external DNS provider instead.

## Update Workflow

1. Edit files in `public/`.
2. Commit changes.
3. Push to `main`.
4. DigitalOcean autodeploys the update.

## Rollback Workflow

Use either option:

- Revert the bad commit and push to `main`.
- In DigitalOcean App Platform, redeploy a previous successful deployment if available.

## Operational Checks

After each deploy, check:

- Homepage loads.
- CSS and images load.
- Custom domain redirects correctly.
- HTTPS certificate is active.
- DigitalOcean deployment status is healthy.

## Placeholder Values To Replace

- Site title and copy in `public/index.html`
- Any final DNS records shown by DigitalOcean during domain verification
