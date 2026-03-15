# Deploying Marjoki to www.marjoki.co.uk (Cloudflare)

This guide walks you through getting your Marjoki site online on your domain. No prior experience needed.

> **Quick start:** Run `python scripts/generate_orbit_from_user_raw.py` first to regenerate fruit/pastille images (removes white halos). Then follow the steps below.

---

## Prerequisites

1. **A GitHub account** (free at github.com)
2. **marjoki.co.uk domain** added to Cloudflare (you manage DNS through Cloudflare)
3. **Node.js** installed on your PC ([nodejs.org](https://nodejs.org) — use the LTS version)

---

## Step 1: Push Your Code to GitHub

### 1a. Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in.
2. Click the **+** icon (top right) → **New repository**.
3. Name it something like `marjoki` or `marjoki-website`.
4. Choose **Private** if you prefer (or Public).
5. **Do not** add a README, .gitignore, or license — the project already has these.
6. Click **Create repository**.

### 1b. Push your code from your project folder

Open **PowerShell** or **Command Prompt**, then run:

```powershell
cd C:\Users\tahir\Desktop\MARJOKI

# Add all files (except those in .gitignore)
git add .

# Commit
git commit -m "Initial Marjoki ecommerce site"

# Add your GitHub repo as the remote (replace YOUR_USERNAME and YOUR_REPO with your actual GitHub username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

When prompted, sign in to GitHub (browser or Personal Access Token).

---

## Step 2: Set Up Cloudflare

### 2a. Add your domain to Cloudflare (if not already)

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) and sign in.
2. Click **Add a site**.
3. Enter `marjoki.co.uk` and follow the prompts.
4. Cloudflare will scan your existing DNS. Change your domain’s nameservers at your registrar to Cloudflare’s (they’ll show you exactly what to do).

### 2b. Create a Cloudflare account / Workers access

1. In Cloudflare Dashboard, go to **Workers & Pages** (left sidebar).
2. You may be asked to add a payment method for Workers (Workers free tier includes plenty for a small site).

---

## Step 3: Deploy Your Site to Cloudflare

### 3a. Log in to Cloudflare from your PC

In your project folder, run:

```powershell
cd C:\Users\tahir\Desktop\MARJOKI
npx wrangler login
```

A browser window opens. Sign in to Cloudflare and approve access.

### 3b. Add your secrets (for Stripe, etc.)

If you use Stripe or other APIs, set secrets so your live site can call them:

```powershell
npx wrangler secret put STRIPE_SECRET_KEY
```

Paste your Stripe secret key when prompted. Repeat for any other required env vars (check `.env.example`).

### 3c. Build and deploy

```powershell
npm run deploy
```

This builds your Next.js app and deploys it to Cloudflare Workers. When it finishes, you’ll see a Workers URL (e.g. `marjoki.xxx.workers.dev`).

---

## Step 4: Connect Your Domain (www.marjoki.co.uk)

### 4a. Custom domain in Cloudflare Workers

1. In Cloudflare Dashboard, go to **Workers & Pages**.
2. Click your **marjoki** worker.
3. Go to **Settings** → **Domains & Routes**.
4. Click **Add** under **Custom Domains**.
5. Add:
   - `marjoki.co.uk`
   - `www.marjoki.co.uk`

Cloudflare will set up the routing. Wait a few minutes for DNS to update.

### 4b. Optional: Redirect marjoki.co.uk → www.marjoki.co.uk

1. In Cloudflare Dashboard, go to **Rules** → **Redirect Rules** (or **Page Rules** in older UI).
2. Create a rule:
   - **If** URL matches `marjoki.co.uk`
   - **Then** Redirect to `https://www.marjoki.co.uk` (301, permanent)

---

## Step 5: Confirm It’s Working

1. Visit **https://www.marjoki.co.uk** in your browser.
2. Check that the site loads and key pages work (Shop, Discovery Pack, checkout flow).
3. If you use Stripe, do a small test purchase to confirm checkout works.

---

## Quick Reference: Common Commands

| Task              | Command                        |
|-------------------|--------------------------------|
| Run locally       | `npm run dev`                  |
| Build only        | `npm run build`                |
| Deploy to live    | `npm run deploy`               |
| Log in to CF      | `npx wrangler login`           |
| Add a secret      | `npx wrangler secret put NAME` |

---

## Troubleshooting

**Site shows “404” or old content**
- Wait 2–5 minutes after deploy; CDN can be slow to update.
- In Cloudflare Workers, confirm the custom domain is attached and active.

**Checkout / Stripe fails**
- Ensure `STRIPE_SECRET_KEY` (and `STRIPE_WEBHOOK_SECRET` if used) are set via `wrangler secret put`.
- Use Stripe test keys for testing and live keys only when ready for real payments.

**Build fails**
- Run `npm install` to refresh dependencies.
- Run `npm run typecheck` to catch TypeScript issues.

**Can’t push to GitHub**
- Confirm your GitHub username and repo name in the `git remote add` step.
- Use a Personal Access Token if your password doesn’t work: GitHub → Settings → Developer settings → Personal access tokens.

---

## Updating the Live Site Later

Whenever you make changes:

```powershell
cd C:\Users\tahir\Desktop\MARJOKI
git add .
git commit -m "Describe your changes"
git push
npm run deploy
```

Your live site will update within a few minutes.
