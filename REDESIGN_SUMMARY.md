# Marjoki Flagship Redesign — Summary

## Visual Changes

### Hero
- **One dominant pack**: Replaced the scattered 5-pouch cluster with a single, large Discovery Pack as the hero product — cleaner, more art-directed, stronger "easiest way to start" message
- **Removed decorative fruit accents**: No spinning fruit/pastille floaters in hero; composition is focused and premium
- **Primary CTA**: "Start with Discovery Pack" is now the main CTA, with "Shop all flavours" as secondary

### Trust Row
- **Slimmer, premium styling**: New `.trust-pill-slim` class with smaller padding, refined typography, and softer borders
- **Simplified layout**: Removed trustFloat animation for a calmer, more integrated feel

### Benefits Section ("Why Marjoki")
- **Fourth benefit added**: "Designed for after-meal use" — 1–2 pastilles after main meals, up to 6 per day
- **Grid layout**: 4-column grid on large screens for the four benefits

### Product Cards
- **Larger image area**: Height increased from 230px to 250px (270px on desktop)
- **Stronger hover**: More pronounced lift (`y: -8`, `scale: 1.02`), refined shadows and border on hover
- **Image prominence**: Increased padding and scale-on-hover (`1.08`)

### Discovery Pack (Homepage Block)
- **Richer background**: Layered radial gradients and ambient blobs
- **Stronger hierarchy**: Larger headings, clearer CTA treatment, bigger orbit visual
- **More product drama**: Larger FloatingPouch, larger DiscoveryOrbit

### Discovery Pack Page
- **Larger imagery**: Taller container, larger orbit, larger pack
- **Improved gradients**: Ambient radial overlays
- **"Which flavour" cards**: Refined hover (lift, border, shadow)

### How It Works
- **Iconography**: Rounded-2xl step numbers instead of circles
- **Card polish**: Improved shadows, borders, hover states

### Social Proof
- **Card refinement**: Subtle hover borders and shadows
- **Typography**: Slightly refined footer styling

### Email Capture
- **Stronger section**: Richer gradient background, radial accents
- **Input/button polish**: Refined heights, focus states, shadow on input
- **Copy**: Shorter, more direct

### PDP (Product Detail Page)
- **Larger image container**: Min-height increased for more prominent product
- **Flavour chips**: Refined selected state (shadow), hover states on unselected
- **Accordions**: More padding, rounded-2xl, clearer hierarchy

### For Dentists
- **Form polish**: Taller inputs, focus rings, improved shadows
- **Section cards**: Consistent rounded-2xl, better spacing

### About
- **Stronger Finnish provenance**: Emphasised Narskuttelu, Kitee, Finnish Food Authority
- **Clearer brand story**: After-meal habit positioning, italic emphasis on key phrase

### FAQ
- **One new Q&A**: "What payment methods do you accept?"
- **Accordion polish**: Rounded-2xl, better padding, subtle background on expanded content

### Footer
- **Hierarchy**: Uppercase section labels with letter-spacing
- **Spacing**: Increased padding and gaps
- **Copy**: "MARJOKI" → "Marjoki" in copyright (avoid all-caps unless legally required)

---

## Copy Changes

- **Nordic → Finnish**: Already done; no remaining "Nordic" references
- **Hero CTAs**: "Start with Discovery Pack" (primary), "Shop all flavours" (secondary)
- **Benefits**: Added "Designed for after-meal use"
- **For Dentists**: Slightly tightened intro ("We welcome..." instead of "Marjoki welcomes...")
- **FAQ**: Minor tightening; added Ages 6+ mention in children Q; added payment methods Q

---

## Motion Changes

- **Hero**: Single FloatingPouch with subtle float and rotation (unchanged motion, simpler composition)
- **Product cards**: Stronger hover lift and scale
- **FlavourAccent**: Moved from bottom-right to bottom-left to avoid overlap with Ages 6+ badge
- **Trust row**: Removed trustFloat animation

---

## Image Asset System

### Current State
- **PackArt**: Adds Ages 6+ badge to bottom-right on product cards and PDP
- **FloatingPouch**: Has Ages 6+ badge built in (hero, Discovery Pack block, Discovery Pack page)
- **Product images**: `/brand/products/*.png` (strawberry, mango, raspberry, blueberry, passionfruit, discovery-pack-20g)
- **Orbit cutouts**: `/brand/orbit/*.webp` for fruit and pastille decorative elements

### What Was Not Changed (Asset Files)
- No new image files were created or replaced in this pass
- All pack renders continue to use existing assets

---

## Remaining Assets for Future Perfection

1. **Pack image consistency**: If you commission new pack photography/renders, aim for:
   - Same camera angle and crop
   - Same lighting and shadow logic
   - Same scale relative to frame
   - Ages 6+ can remain as UI overlay (current approach) or be baked into assets

2. **Fruit cutouts** (`/brand/orbit/*.webp`): Ensure they are:
   - Fruit cross-sections only (no whole fruit)
   - Transparent backgrounds (no white, no black halos)
   - Consistent art direction

3. **Logo**: Current logo is `/brand/cutouts/logo-title.webp` — use this consistently

---

## Files Modified

- `src/components/homepage-content.tsx` — Hero, trust row, benefits, Discovery Pack block, How It Works, social proof, email capture
- `src/components/product-card.tsx` — Card proportions, hover, image area
- `src/components/site-footer.tsx` — Hierarchy, spacing, copyright
- `src/components/pack-art.tsx` — (unchanged; already has Ages 6+)
- `src/components/motion/flavour-accent.tsx` — Position moved to avoid badge overlap
- `src/components/motion/floating-pouch.tsx` — (unchanged; already has Ages 6+)
- `src/app/globals.css` — `.trust-pill-slim`, minor section-card shadow
- `src/app/products/[slug]/page.tsx` — Image container, flavour chips, accordions, "New to Marjoki" block
- `src/app/discovery-pack/page.tsx` — Visual treatment, flavour cards
- `src/app/for-dentists/page.tsx` — Form and section polish
- `src/app/about/page.tsx` — Stronger provenance and brand story
- `src/app/faq/page.tsx` — Extra Q&A, accordion styling

---

## Quality Bar Met

- **Flagship feel**: Hero, Discovery Pack, and product cards read as premium DTC
- **Finnish focus**: Provenance and brand story emphasise Finland
- **Product-led**: Discovery Pack is the clear hero; flavours are prominent
- **Trust-first**: Trust row, benefits, and FAQ stay factual and restrained
- **Calm but alive**: Motion is subtle; no loud or gimmicky effects
