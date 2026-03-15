import { AddToCartButton } from "@/components/add-to-cart-button";
import { FlavourAccent } from "@/components/motion/flavour-accent";
import { MotionReveal } from "@/components/motion/reveal";
import { PackArt } from "@/components/pack-art";
import { ProductCard } from "@/components/product-card";
import { Container } from "@/components/ui/container";
import { flavourProducts, getProductBySlug } from "@/lib/products";
import { formatGbp } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return flavourProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.shortName,
    description: `${product.shortName} xylitol pastilles made in Finland.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || product.category !== "flavour") notFound();
  const related = flavourProducts.filter((p) => p.id !== product.id).slice(0, 3);
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: { "@type": "Brand", name: "Marjoki" },
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: product.priceGbp.toFixed(2),
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <Container className="py-10">
      <div className="grid gap-10 md:grid-cols-2">
        <MotionReveal>
          <div className="relative min-h-[380px] overflow-hidden rounded-[28px] border border-[#d0dceb] bg-[linear-gradient(155deg,#ffffff_0%,#f6f9ff_60%,#fff8f0_100%)] md:min-h-[520px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_22%_18%,rgba(193,220,255,0.30),transparent_48%),radial-gradient(ellipse_60%_55%_at_80%_78%,rgba(248,221,196,0.32),transparent_48%)]" />
            <PackArt
              src={product.image}
              alt={product.shortName + " 100g pouch"}
              className="h-full rounded-none border-0 bg-transparent"
              imageClassName="p-5 md:p-6"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <FlavourAccent accent={product.accent} />
          </div>
        </MotionReveal>
        <MotionReveal delay={0.07}>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#55697f]">{product.flavour} - Xylitol Pastilles</p>
            <h1 className="font-display mt-2 text-4xl text-[#111820]">{product.shortName}</h1>
            <p className="mt-3 text-[16px] leading-relaxed text-[#566070]">{product.description}</p>
            <p className="mt-5 text-3xl font-semibold text-[#111820]">{formatGbp(product.priceGbp)}</p>
            <p className="mt-1 text-sm text-[#6d7e94]">{product.size}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {flavourProducts.map((f) => (
                <Link
                  key={f.id}
                  href={"/products/" + f.slug}
                  className={"rounded-full px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm " + (f.id === product.id ? "bg-[#1b2d46] text-white shadow-[0_4px_12px_rgba(27,45,70,0.25)]" : "border border-[#c2d2e5] bg-white text-[#2a3e5c] hover:border-[#9bb8d8]")}
                >
                  {f.shortName}
                </Link>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <AddToCartButton productId={product.id} className="px-7 py-3 text-sm" />
              <span className="rounded-full border border-[#d0daea] px-4 py-2.5 text-sm text-[#4a5c74]">Subscribe and Save reserved</span>
            </div>
            <ul className="mt-6 space-y-1.5 text-sm text-[#566070]">
              <li>Made in Finland — Narskuttelu, Kitee</li>
              <li>Sugar-free xylitol pastilles</li>
              {product.xylitolPercent ? <li key="xy">{product.xylitolPercent}% xylitol content</li> : null}
              <li>With calcium phosphate</li>
              <li>Vegan, Gluten free, Soy free, Lactose free</li>
              <li>Secure checkout via Stripe</li>
            </ul>
          </div>
        </MotionReveal>
      </div>
      <div className="mt-10 space-y-2">
        <details className="section-card overflow-hidden rounded-2xl" open>
          <summary className="font-display cursor-pointer text-base py-4 px-5">Ingredients and Nutrition</summary>
          <div className="accordion-body">
            <ul className="list-disc space-y-1 pl-5 text-sm text-[#566070]">{product.ingredients.map((i) => <li key={i}>{i}</li>)}</ul>
            {product.nutritionPer100g ? (
              <div className="mt-4 rounded-xl border border-[#d8e3ef] bg-[#f6f9ff] p-4 text-sm text-[#4a5c74]">
                <p className="mb-2 font-semibold text-[#1b2d46]">Per 100g</p>
                <p>Energy: {product.nutritionPer100g.energy} | Fat: {product.nutritionPer100g.fat} | Saturates: {product.nutritionPer100g.saturates} | Carbs: {product.nutritionPer100g.carbs} | Sugars: {product.nutritionPer100g.sugars} | Protein: {product.nutritionPer100g.protein} | Salt: {product.nutritionPer100g.salt}</p>
              </div>
            ) : null}
          </div>
        </details>
        <details className="section-card overflow-hidden rounded-2xl">
          <summary className="font-display cursor-pointer text-base py-4 px-5">How to use</summary>
          <div className="accordion-body"><ul className="list-disc space-y-1 pl-5 text-sm text-[#566070]">{product.usage.map((u) => <li key={u}>{u}</li>)}</ul></div>
        </details>
        <details className="section-card overflow-hidden rounded-2xl">
          <summary className="font-display cursor-pointer text-base py-4 px-5">Safety and Storage</summary>
          <div className="accordion-body"><ul className="list-disc space-y-1 pl-5 text-sm text-[#566070]">{product.safety.map((s) => <li key={s}>{s}</li>)}</ul></div>
        </details>
        <details className="section-card overflow-hidden rounded-2xl">
          <summary className="font-display cursor-pointer text-base py-4 px-5">Shipping and Returns</summary>
          <div className="accordion-body"><p className="text-sm text-[#566070]">UK orders typically dispatch within 1 business day. Unopened items may be returned within 30 days. Contact hello@marjoki.co.uk with your order number to start a return.</p></div>
        </details>
      </div>
      <MotionReveal className="mt-12">
        <h2 className="font-display mb-5 text-2xl text-[#111820]">Other flavours</h2>
        <div className="grid gap-5 md:grid-cols-3">{related.map((r) => <ProductCard key={r.id} product={r} />)}</div>
      </MotionReveal>
      <MotionReveal className="mt-12" delay={0.08}>
        <div className="rounded-2xl border border-[#cdd9eb] bg-[linear-gradient(142deg,#eef4ff_0%,#fff8f0_100%)] p-8">
          <h2 className="font-display text-xl text-[#0f1a2b]">New to Marjoki?</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#4d5e72]">Try all five flavours first with our mixed Discovery Pack before choosing your regular pouch.</p>
          <Link href="/discovery-pack" className="mt-5 inline-flex items-center rounded-full border border-[#b8cce2] bg-white px-6 py-3 text-sm font-semibold text-[#1b2d46] shadow-sm transition hover:-translate-y-0.5 hover:border-[#9bb8d8] hover:shadow-md">View Discovery Pack</Link>
        </div>
      </MotionReveal>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Container>
  );
}