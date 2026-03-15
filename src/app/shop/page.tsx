import { MotionReveal } from "@/components/motion/reveal";
import { ProductCard } from "@/components/product-card";
import { Container } from "@/components/ui/container";
import { discoveryPack, flavourProducts } from "@/lib/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop all Marjoki flavours and the Discovery Pack.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const filtered = query
    ? flavourProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.shortName.toLowerCase().includes(query),
      )
    : flavourProducts;

  return (
    <div className="relative overflow-hidden py-10">
      <div className="pointer-events-none absolute left-[-80px] top-[10%] h-56 w-56 rounded-full bg-[radial-gradient(circle,#dce8ff_0%,transparent_70%)]" />
      <Container>
        <MotionReveal>
          <div className="section-card border-[#d7e2f0] bg-[linear-gradient(150deg,#ffffff_0%,#f8fbff_100%)] p-6 md:p-8">
            <h1 className="text-4xl font-bold text-[#192844]">Shop</h1>
            <p className="mt-3 max-w-2xl text-[#5b677a]">
              Best sellers first, all core launch flavours next, with Discovery Pack for first-time
              buyers and bundle architecture reserved for the next release.
            </p>
          </div>
        </MotionReveal>

        <MotionReveal className="mt-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#1f2e4a]">Best sellers</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filtered.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </MotionReveal>

        <MotionReveal className="mt-10" delay={0.05}>
          <section>
            <h2 className="text-2xl font-semibold text-[#1f2e4a]">All flavours</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </MotionReveal>

        {discoveryPack ? (
          <MotionReveal className="mt-10" delay={0.1}>
            <section>
              <h2 className="text-2xl font-semibold text-[#1f2e4a]">Discovery Pack</h2>
              <div className="mt-4 grid max-w-sm">
                <ProductCard product={discoveryPack} />
              </div>
            </section>
          </MotionReveal>
        ) : null}

        <MotionReveal className="mt-10" delay={0.14}>
          <section className="rounded-3xl border border-dashed border-[#c9d4e6] bg-[linear-gradient(140deg,#f2f7ff_0%,#fff7ef_100%)] p-6">
            <h2 className="text-xl font-semibold text-[#2b4068]">Bundles coming next</h2>
            <p className="mt-2 text-sm text-[#5b667a]">
              Multi-pack bundles are reserved in architecture and will launch after initial flavour
              traction.
            </p>
          </section>
        </MotionReveal>
      </Container>
    </div>
  );
}
