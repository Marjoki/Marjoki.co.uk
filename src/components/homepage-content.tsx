"use client";

import { AddToCartButton } from "@/components/add-to-cart-button";
import { DiscoveryOrbit } from "@/components/motion/discovery-orbit";
import { FloatingPouch } from "@/components/motion/floating-pouch";
import { MotionReveal } from "@/components/motion/reveal";
import { ProductCard } from "@/components/product-card";
import { Container } from "@/components/ui/container";
import { discoveryPack, flavourProducts } from "@/lib/products";
import {
  ArrowRight,
  BadgeCheck,
  Leaf,
  MilkOff,
  ShieldCheck,
  Sparkles,
  Truck,
  WheatOff,
} from "lucide-react";
import Link from "next/link";

const trustItems = [
  { text: "Made in Finland", icon: ShieldCheck },
  { text: "92% xylitol", icon: Sparkles },
  { text: "Calcium phosphate", icon: Sparkles },
  { text: "Sugar-free", icon: ShieldCheck },
  { text: "Secure checkout", icon: ShieldCheck },
  { text: "Fast UK delivery", icon: Truck },
];

const benefits = [
  {
    label: "Made in Finland",
    body: "Every pouch is produced by Narskuttelu in Kitee, Finland — a family-owned manufacturer registered with the Finnish Food Authority.",
  },
  {
    label: "92% xylitol",
    body: "Core launch flavours contain 92% xylitol (Blueberry: 88%).",
  },
  {
    label: "With calcium phosphate",
    body: "Each pastille includes calcium phosphate, an ingredient found in many professional oral-care products.",
  },
  {
    label: "Designed for after-meal use",
    body: "1-2 pastilles after main meals, up to 6 per day. No preparation, no refrigeration — open and enjoy.",
  },
];

const dietaryBadges = [
  { label: "Vegan", icon: Leaf },
  { label: "Gluten free", icon: WheatOff },
  { label: "Soy free", icon: BadgeCheck },
  { label: "Lactose free", icon: MilkOff },
  { label: "Good shelf life", icon: ShieldCheck },
];

export const HomepageContent = () => {
  return (
    <div className="relative overflow-hidden pb-12">
      {/* ambient background blobs */}
      <div className="pointer-events-none absolute left-[-160px] top-[-60px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,200,220,0.50)_0%,transparent_65%)]" />
      <div className="pointer-events-none absolute bottom-[30%] right-[-140px] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(195,225,255,0.46)_0%,transparent_65%)]" />

      {/* ──────────── HERO ──────────── */}
      <Container className="pt-8 md:pt-12">
        <section
          aria-label="Hero"
          className="section-card relative overflow-hidden p-7 md:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_18%_22%,rgba(255,205,218,0.30),transparent_55%),radial-gradient(ellipse_60%_50%_at_85%_14%,rgba(255,235,190,0.28),transparent_50%),radial-gradient(ellipse_50%_50%_at_68%_80%,rgba(190,218,255,0.30),transparent_48%),linear-gradient(160deg,rgba(255,255,255,0.97),rgba(248,251,255,0.96))]" />
          <div className="relative grid items-center gap-10 md:grid-cols-[1fr_1.08fr]">
            <MotionReveal>
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#55697f]">
                  Finnish-made daily oral-care habit
                </p>
                <h1 className="font-display max-w-lg text-[2.7rem] leading-[1.12] text-[#14202e] md:text-[3.1rem]">
                  Trusted xylitol pastilles for the{" "}
                  <span className="gradient-text">after-meal moment</span>
                </h1>
                <p className="mt-5 max-w-md text-[17px] leading-relaxed text-[#566070]">
                  Sugar-free, Finnish-made xylitol pastilles designed for a practical
                  after-meal routine. Clean ingredients, real fruit flavours, and a
                  habit your family can keep.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/discovery-pack"
                    className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(112deg,#1a2948_0%,#2d4778_100%)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(26,40,68,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(26,40,68,0.38)]"
                  >
                    Start with Discovery Pack <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/shop"
                    className="rounded-full border-[1.5px] border-[#c6d6e8] bg-white/95 px-6 py-3 text-sm font-semibold text-[#1e334f] transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Shop all flavours
                  </Link>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.10}>
              <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-3xl border border-[#d5e1ef] bg-[linear-gradient(165deg,#ffffff_8%,#fafcff_80%)] md:min-h-[520px]">
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_70%_55%_at_28%_22%,rgba(255,220,232,0.28),transparent_55%),radial-gradient(ellipse_60%_50%_at_72%_78%,rgba(185,218,255,0.28),transparent_55%)]" />
                {/* Single dominant hero pack – Discovery Pack as easiest way to start */}
                <FloatingPouch
                  src="/brand/products/discovery-pack-20g.png"
                  alt="Marjoki Discovery Pack – all five flavours"
                  width={380}
                  height={520}
                  className="relative z-20 w-[55%] min-w-[240px] md:w-[50%] md:min-w-[320px]"
                  delay={0.1}
                  priority
                />
              </div>
            </MotionReveal>
          </div>
        </section>
      </Container>

      {/* ──────────── TRUST ROW ──────────── */}
      <Container className="pt-5">
        <MotionReveal>
          <nav aria-label="Trust indicators" className="flex flex-wrap justify-center gap-2 px-1">
            {trustItems.map(({ text, icon: Icon }) => (
              <span
                key={text}
                className="trust-pill-slim"
              >
                <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                {text}
              </span>
            ))}
          </nav>
        </MotionReveal>
      </Container>

      {/* ──────────── BENEFITS ──────────── */}
      <Container className="pt-10">
        <MotionReveal>
          <section className="section-card border-[#d1dceb] bg-[linear-gradient(158deg,#ffffff_0%,#f4f9ff_100%)] p-7 md:p-10">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#55687e]">
              Why Marjoki
            </div>
            <h2 className="font-display text-[1.9rem] text-[#14202e]">
              Finnish quality. Practical habits.
            </h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ label, body }) => (
                <article
                  key={label}
                  className="rounded-2xl border border-[#d4e0ee] bg-white p-6 shadow-[0_6px_18px_rgba(20,28,45,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(20,28,45,0.08)]"
                >
                  <h3 className="font-display text-[1.15rem] text-[#1b2d4a]">{label}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#566070]">{body}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
              {dietaryBadges.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-[#d4e0ee] bg-white py-5 px-3 transition hover:border-[#b3c8e2]"
                >
                  <Icon className="size-7 text-[#2f4878]" strokeWidth={1.6} />
                  <p className="text-xs font-semibold text-[#2d4060]">{label}</p>
                </div>
              ))}
            </div>
          </section>
        </MotionReveal>
      </Container>

      {/* ──────────── FLAVOUR LINEUP ──────────── */}
      <Container className="pt-12">
        <MotionReveal>
          <section>
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="font-display text-[1.9rem] text-[#14202e]">Flavour lineup</h2>
              <Link className="text-sm font-semibold text-[#2b4572] hover:underline" href="/shop">
                View all →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {flavourProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </MotionReveal>
      </Container>

      {/* ──────────── DISCOVERY PACK ──────────── */}
      <Container className="pt-16">
        <MotionReveal>
          <section className="section-card relative overflow-hidden border-[#cdd9eb] bg-[linear-gradient(142deg,#eef4ff_0%,#e8f0ff_35%,#fff5e8_70%,#fff8ef_100%)] p-8 md:grid md:grid-cols-[1fr_1.1fr] md:items-center md:gap-12 md:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_5%_50%,rgba(200,220,255,0.45),transparent_55%),radial-gradient(ellipse_50%_60%_at_95%_30%,rgba(255,230,200,0.40),transparent_55%)]" />
            <div className="absolute -left-16 -top-12 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(198,220,255,0.5)_0%,transparent_65%)]" />
            <div className="absolute -bottom-12 -right-12 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(255,235,210,0.5)_0%,transparent_65%)]" />
            <div className="relative z-10">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#4e6280]">
                First-time buyer
              </div>
              <h2 className="font-display text-[2.4rem] leading-[1.12] text-[#0f1a2b] md:text-[2.6rem]">
                The easiest way to start
              </h2>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-[#4d5e72]">
                All five flavours in one mixed pack. Find your favourite before committing to a full 100g pouch.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {discoveryPack ? (
                  <AddToCartButton
                    productId={discoveryPack.id}
                    className="px-8 py-3.5 text-sm font-semibold shadow-[0_10px_24px_rgba(26,40,68,0.28)]"
                  />
                ) : null}
                <Link
                  href="/discovery-pack"
                  className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#b8cce2] bg-white/95 px-6 py-3 text-sm font-semibold text-[#1a2f4e] transition hover:-translate-y-0.5 hover:border-[#9bb8d8] hover:bg-white"
                >
                  See all flavours
                </Link>
              </div>
            </div>
            <div className="relative mt-10 flex min-h-[360px] items-center justify-center md:mt-0 md:min-h-[420px]">
              <DiscoveryOrbit className="absolute left-1/2 top-1/2 z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 md:h-72 md:w-72" />
              <FloatingPouch
                src="/brand/products/discovery-pack-20g.png"
                alt="Marjoki Discovery Pack – all five flavours"
                width={400}
                height={540}
                className="absolute left-1/2 top-1/2 z-20 w-[78%] -translate-x-1/2 -translate-y-1/2 md:w-[72%]"
                delay={0.2}
              />
            </div>
          </section>
        </MotionReveal>
      </Container>

      {/* ──────────── HOW IT WORKS ──────────── */}
      <Container className="pt-16">
        <MotionReveal>
          <section className="section-card p-8 md:p-12">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#55687e]">
              The habit
            </div>
            <h2 className="font-display text-[2rem] text-[#14202e]">Simple after-meal routine</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                ["01", "After a meal", "Take 1-2 pastilles after breakfast, lunch, or dinner. Keep a pouch where you eat."],
                ["02", "Stay consistent", "Aim for up to 6 pastilles across the day. The routine builds naturally."],
                ["03", "No fuss", "Store at room temperature. No refrigeration, no preparation — just open and enjoy."],
              ].map(([num, title, body]) => (
                <article
                  key={title}
                  className="group rounded-2xl border border-[#d0dceb] bg-white p-7 shadow-[0_4px_16px_rgba(18,26,45,0.04)] transition hover:-translate-y-1 hover:border-[#b8cce2] hover:shadow-[0_14px_32px_rgba(18,26,45,0.08)]"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#e8f0ff_0%,#dfe8fa_100%)] text-sm font-bold text-[#2a4480]">
                    {num}
                  </div>
                  <h3 className="font-display text-[1.1rem] text-[#1b2d4a]">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#566070]">{body}</p>
                </article>
              ))}
            </div>
          </section>
        </MotionReveal>
      </Container>

      {/* ──────────── SOCIAL PROOF ──────────── */}
      <Container className="pt-16">
        <MotionReveal>
          <section className="section-card bg-[linear-gradient(168deg,#ffffff_0%,#fafbff_100%)] p-8 md:p-12">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#55687e]">
              Early feedback
            </div>
            <h2 className="font-display text-[2rem] text-[#14202e]">First tasters</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Parent, North Yorkshire",
                  quote: "Clean taste and easy to stick with. My kids actually ask for them.",
                },
                {
                  name: "First-time buyer",
                  quote: "The Discovery Pack made it simple — I knew which flavour I wanted before I'd finished it.",
                },
                {
                  name: "Health-conscious adult",
                  quote: "Finally a sugar-free option that doesn't taste artificial. The mango is my daily.",
                },
              ].map(({ name, quote }) => (
                <blockquote
                  key={name}
                  className="flex flex-col justify-between rounded-2xl border border-[#d2deec] bg-white p-7 shadow-[0_6px_20px_rgba(18,26,45,0.05)] transition hover:border-[#c2d2e5] hover:shadow-[0_12px_28px_rgba(18,26,45,0.07)]"
                >
                  <p className="text-[15px] leading-relaxed text-[#3d4d62]">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <footer className="mt-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6d8299]">
                    {name}
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        </MotionReveal>
      </Container>

      {/* ──────────── EMAIL CAPTURE ──────────── */}
      <Container className="pt-16">
        <MotionReveal>
          <section className="section-card relative overflow-hidden border-[#c8d8ea] bg-[linear-gradient(142deg,#e6f0ff_0%,#f8f4ec_50%,#fff8f0_100%)] p-8 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_90%_20%,rgba(215,235,255,0.5),_transparent_60%),radial-gradient(ellipse_50%_40%_at_10%_80%,rgba(255,230,210,0.4),_transparent_55%)]" />
            <div className="relative">
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#4e6280]">
                Stay in the loop
              </div>
              <h2 className="font-display text-[2rem] text-[#0f1a2b] md:text-[2.2rem]">
                New flavours. Early access.
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#4d5e72]">
                Be first to hear about flavour launches, bundles, and oral-habit advice from Finland.
              </p>
              <form className="mt-7 flex max-w-lg flex-col gap-3 sm:flex-row" action="/api/newsletter" method="post">
                <label htmlFor="email-capture" className="sr-only">Email address</label>
                <input
                  id="email-capture"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="h-12 flex-1 rounded-full sm:h-[52px] border-[1.5px] border-[#b8cce2] bg-white/95 px-6 text-[15px] text-[#1a2d4a] shadow-[0_4px_12px_rgba(18,30,50,0.04)] placeholder:text-[#8fa0b5] focus:border-[#6b9ad4] focus:outline-none focus:ring-2 focus:ring-[#6b9ad4]/20"
                />
                <button
                  type="submit"
                  className="h-12 shrink-0 rounded-full sm:h-[52px] bg-[linear-gradient(112deg,#1a2948_0%,#2d4778_100%)] px-8 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(26,40,68,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(26,40,68,0.36)]"
                >
                  Join the list
                </button>
              </form>
            </div>
          </section>
        </MotionReveal>
      </Container>

      {/* ──────────── FOR DENTISTS TEASER ──────────── */}
      <Container className="pt-14">
        <MotionReveal>
          <section className="section-card flex flex-col items-start justify-between gap-6 border-[#cfd8e9] bg-[linear-gradient(160deg,#f7f9ff_0%,#ffffff_100%)] p-7 md:flex-row md:items-center md:p-10">
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#55687e]">
                For professionals
              </div>
              <h2 className="font-display text-[1.7rem] text-[#14202e]">For dentists and clinics</h2>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#566070]">
                Interested in stocking or recommending Marjoki? We welcome professional enquiries
                for clinic display and patient-facing positioning.
              </p>
            </div>
            <Link
              href="/for-dentists"
              className="shrink-0 rounded-full border-[1.5px] border-[#c2d0e3] bg-white px-6 py-3 text-sm font-semibold text-[#1e334f] transition hover:-translate-y-0.5 hover:bg-[#f5f9ff]"
            >
              Enquire now
            </Link>
          </section>
        </MotionReveal>
      </Container>
    </div>
  );
};
