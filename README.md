# Mira Media — GITEX Global 2026 Outdoor Advertising

Proposal deck for outdoor media around GITEX Global at Expo City Dubai.

## Deploy to GitHub + Vercel

### One-time setup

1. Open PowerShell in this folder
2. Run: `powershell -ExecutionPolicy Bypass -File deploy.ps1`
3. Complete GitHub login in the browser when prompted
4. Import the repo on [vercel.com/new](https://vercel.com/new) → Deploy

No build step — Vercel serves the static files directly.

## Local preview

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
```

Open http://localhost:8080/

## Edit data

All figures and image paths: `config.js`
