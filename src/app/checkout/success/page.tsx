import { Container } from "@/components/ui/container";
import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <Container className="py-14">
      <section className="section-card mx-auto max-w-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-[#1b2943]">Order confirmed</h1>
        <p className="mt-3 text-[#5a667b]">
          Thank you for your order. We&apos;ve received your checkout successfully and will send an
          email confirmation shortly.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/shop"
            className="rounded-full bg-[#223457] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Continue shopping
          </Link>
          <Link
            href="/how-it-works"
            className="rounded-full border border-[#cad6e7] px-5 py-2.5 text-sm font-semibold text-[#2f446b]"
          >
            Usage guidance
          </Link>
        </div>
      </section>
    </Container>
  );
}
