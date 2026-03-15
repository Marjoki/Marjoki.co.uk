"use client";

import { Container } from "@/components/ui/container";
import { useCart } from "@/context/cart-context";
import { formatGbp } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { lines, subtotal, updateQuantity, removeFromCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const goToCheckout = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: lines.map((line) => ({ productId: line.productId, quantity: line.quantity })),
        }),
      });

      if (!res.ok) {
        throw new Error("Checkout session creation failed.");
      }

      const data = (await res.json()) as { checkoutUrl: string };
      window.location.href = data.checkoutUrl;
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : "Unknown checkout error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-10">
      <h1 className="text-4xl font-bold text-[#1a2740]">Cart</h1>

      {lines.length === 0 ? (
        <div className="section-card mt-6 p-6">
          <p className="text-[#5a667b]">Your cart is currently empty.</p>
          <Link href="/shop" className="mt-3 inline-flex text-sm font-semibold text-[#365186]">
            Shop flavours →
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <section className="space-y-3">
            {lines.map((line) => (
              <article key={line.productId} className="section-card flex gap-4 p-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-[#dce4ef]">
                  <Image src={line.image} alt={`${line.name} image`} fill className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <h2 className="text-lg font-semibold text-[#1d2d49]">{line.name}</h2>
                  <p className="text-sm text-[#617089]">{line.size}</p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(line.productId, line.quantity - 1)}
                      className="size-8 rounded-full border border-[#cfdae9] bg-white"
                      aria-label={`Decrease quantity for ${line.name}`}
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{line.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(line.productId, line.quantity + 1)}
                      className="size-8 rounded-full border border-[#cfdae9] bg-white"
                      aria-label={`Increase quantity for ${line.name}`}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removeFromCart(line.productId)}
                      className="ml-2 text-xs font-semibold text-[#6f7e95]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="text-base font-semibold text-[#1f2f4f]">
                  {formatGbp(line.unitPriceGbp * line.quantity)}
                </p>
              </article>
            ))}
          </section>

          <aside className="section-card h-fit p-5">
            <h2 className="text-xl font-semibold text-[#1f2e4a]">Order summary</h2>
            <div className="mt-4 flex items-center justify-between text-sm text-[#5e6a80]">
              <span>Subtotal</span>
              <span className="font-semibold text-[#1f2f4f]">{formatGbp(subtotal)}</span>
            </div>
            <p className="mt-3 text-xs text-[#6b778d]">Shipping and taxes calculated at checkout.</p>
            <button
              type="button"
              disabled={loading}
              onClick={goToCheckout}
              className="mt-5 h-11 w-full rounded-xl bg-[#223457] text-sm font-semibold text-white transition hover:bg-[#2f4470] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Redirecting..." : "Secure checkout"}
            </button>
            {error ? <p className="mt-2 text-sm text-[#8b2f2f]">{error}</p> : null}
          </aside>
        </div>
      )}
    </Container>
  );
}
