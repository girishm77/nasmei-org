# Deployment Runbook

## Goal

Host this static website from a GitHub repository using DigitalOcean App Platform.

## One-Time Setup

1. Create a GitHub repository under `girishm77`.
2. Push this local repository to GitHub.
3. In DigitalOcean, go to App Platform and create a new app from GitHub.
4. Authorize DigitalOcean to read the selected GitHub repository.
5. Configure the app as a Static Site.
6. Set the output directory to `public`.
7. Enable autodeploy from the `main` branch.
8. Deploy.

## Domain Mapping

After the app deploys:

1. Open the app in DigitalOcean.
2. Go to Networking.
3. Add the custom domain.
4. Follow the DNS records DigitalOcean provides.
5. Wait for DNS and certificate validation.

If DigitalOcean manages DNS for the domain, add the domain to the DigitalOcean account first and use the records it recommends. If another registrar or DNS provider manages the domain, add the records there.

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

- `REPOSITORY_NAME` in `.do/app.yaml`
- Site title and copy in `public/index.html`
- Domain notes after you choose the live domain
