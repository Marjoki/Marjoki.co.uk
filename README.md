# MARJOKI Ecommerce Website

Production-ready Next.js ecommerce build for MARJOKI (UK), including seeded launch products, GBP Stripe checkout flow, persistent cart, full launch IA, and Vercel-ready deployment.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Stripe Checkout + webhook endpoint
- Structured product seed data
- Responsive component-based architecture

## Local install

1. Install dependencies:

```bash
npm install
```

2. Copy env template:

```bash
cp .env.example .env.local
```

3. Fill Stripe keys in `.env.local`.

4. Run dev:

```bash
npm run dev
```

5. Open `http://localhost:3000`.

## Environment variables

- `NEXT_PUBLIC_SITE_URL` - public base URL, e.g. `http://localhost:3000` locally, production URL on Vercel.
- `STRIPE_SECRET_KEY` - Stripe secret key for checkout session creation.
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook signing secret.

## Stripe setup (GBP)

1. Create a Stripe account and switch to test mode.
2. Add the above env vars.
3. Start local app and run Stripe CLI:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

4. Test checkout from `/cart`.
5. Confirm redirect routes:
   - success: `/checkout/success`
   - cancel: `/checkout/canceled`

## Asset locations

Brand assets are loaded from:

- `public/brand/logo-title.png` (raw source copy)
- `public/brand/logo-app.png` (raw source copy)
- `public/brand/cutouts/logo-title.webp`
- `public/brand/cutouts/logo-app.webp`
- `public/brand/cutouts/strawberry-100g.webp`
- `public/brand/cutouts/mango-100g.webp`
- `public/brand/cutouts/raspberry-100g.webp`
- `public/brand/cutouts/blueberry-100g.webp`
- `public/brand/cutouts/passionfruit-100g.webp`
- `public/brand/cutouts/discovery-pack-20g.webp`

To replace assets later, keep the same filenames or update paths in components.

## Folder structure (key paths)

- `src/app` - routes and API handlers
- `src/components` - reusable UI
- `src/context/cart-context.tsx` - persistent cart state
- `src/lib/products.ts` - launch product seed data
- `src/lib/stripe.ts` - Stripe client setup
- `src/styles/design-tokens.ts` - design token source

## Commands

- `npm run dev` - local development
- `npm run lint` - eslint checks
- `npm run typecheck` - TypeScript validation
- `npm run build` - production build

## Deploy to Vercel

1. Push repository.
2. Import project in Vercel.
3. Add environment variables in Vercel settings.
4. Deploy.

This project is App Router compatible and ready for Vercel out of the box.
