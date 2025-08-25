
# Click 2 Clean — One‑Page Site (Vite + React + Tailwind)

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Build output goes to `dist/` (Vercel auto-detects Vite).

## Deploy to Vercel (direct upload)
- Zip the folder and drag/drop into Vercel → New Project → Manual.
- Or connect a Git provider and import the repo.

## Domain on GoDaddy
- A record (root): `@ → 76.76.21.21`
- CNAME (www): `www → cname.vercel-dns.com`
