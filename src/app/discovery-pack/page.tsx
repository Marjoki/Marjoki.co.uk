import { AddToCartButton } from "@/components/add-to-cart-button";
import { DiscoveryOrbit } from "@/components/motion/discovery-orbit";
import { FloatingPouch } from "@/components/motion/floating-pouch";
import { MotionReveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { discoveryPack, flavourProducts } from "@/lib/products";
import { formatGbp } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Discovery Pack",
  description: "Try all five Marjoki xylitol flavours in one mixed Discovery Pack — perfect for first-time buyers.",
};

export default function DiscoveryPackPage() {
  if (!discoveryPack) return null;

  return (
    <Container className="py-12">
      <div className="grid gap-10 md:grid-cols-2">
        <MotionReveal>
          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-[#cdd9eb] bg-[linear-gradient(142deg,#eef4ff_0%,#e8f0ff_40%,#fff5e8_80%,#fff8ef_100%)] md:min-h-[520px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_22%_18%,rgba(185,215,255,0.30),transparent_50%),radial-gradient(ellipse_60%_55%_at_80%_80%,rgba(248,224,190,0.32),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_25%_30%,rgba(200,220,255,0.4),_transparent_55%),radial-gradient(ellipse_50%_60%_at_75%_70%,rgba(255,230,200,0.35),_transparent_55%)]" />
            <DiscoveryOrbit className="absolute left-1/2 top-1/2 z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 md:h-72 md:w-72" />
            <FloatingPouch
              src={discoveryPack.image}
              alt="Marjoki Discovery Pack — all five flavours"
              width={380}
              height={520}
              className="absolute left-1/2 top-1/2 z-20 w-[72%] -translate-x-1/2 -translate-y-1/2 md:w-[65%]"
              priority
            />
          </div>
        </MotionReveal>
        <MotionReveal delay={0.06}>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#55697f]">First-time buyer format</p>
            <h1 className="font-display mt-2 text-4xl text-[#111820]">Discovery Pack</h1>
            <p className="mt-4 text-[16px] leading-relaxed text-[#566070]">
              All five Marjoki launch flavours in one mixed 20g pack. The simplest way to find your
              after-meal flavour before committing to a full 100g pouch.
            </p>
            <p className="mt-5 text-3xl font-semibold text-[#111820]">{formatGbp(discoveryPack.priceGbp)}</p>
            <p className="mt-1 text-sm text-[#6d7e94]">{discoveryPack.size} · Mixed flavours</p>
            <div className="mt-7">
              <AddToCartButton productId={discoveryPack.id} className="px-7 py-3 text-sm" />
            </div>
            <ul className="mt-7 space-y-1.5 text-sm text-[#566070]">
              <li>All five launch flavours: Strawberry, Mango, Raspberry, Blueberry, Passionfruit</li>
              <li>Sugar-free xylitol pastilles</li>
              <li>Made in Finland — Narskuttelu, Kitee</li>
              <li>Great starting point for the whole family</li>
              <li>Secure checkout via Stripe</li>
            </ul>
            <Link href="/shop" className="mt-6 inline-flex text-sm font-semibold text-[#2b4572] hover:underline">
              Browse full 100g pouches
            </Link>
          </div>
        </MotionReveal>
      </div>

      <MotionReveal className="mt-14">
        <section className="section-card rounded-2xl border-[#d0dceb] bg-[linear-gradient(158deg,#f4f8ff_0%,#fff8f0_100%)] p-8">
          <h2 className="font-display text-2xl text-[#0f1a2b]">Which flavour will be yours?</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {flavourProducts.map((p) => (
              <Link
                key={p.id}
                href={"/products/" + p.slug}
                className="rounded-2xl border border-[#d0dceb] bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#b8cce2] hover:shadow-[0_12px_24px_rgba(18,26,45,0.08)]"
              >
                <p className="font-display text-base text-[#1b2d46]">{p.shortName}</p>
                {p.xylitolPercent ? <p className="mt-1 text-[11px] text-[#5e7090]">{p.xylitolPercent}% xylitol</p> : null}
              </Link>
            ))}
          </div>
        </section>
      </MotionReveal>
    </Container>
  );
}