import { Container } from "@/components/ui/container";
import Link from "next/link";

export default function CheckoutCanceledPage() {
  return (
    <Container className="py-14">
      <section className="section-card mx-auto max-w-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-[#1b2943]">Checkout canceled</h1>
        <p className="mt-3 text-[#5a667b]">
          No worries, your cart is still waiting. You can continue any time.
        </p>
        <Link
          href="/cart"
          className="mt-6 inline-flex rounded-full bg-[#223457] px-5 py-2.5 text-sm font-semibold text-white"
        >
          Return to cart
        </Link>
      </section>
    </Container>
  );
}
