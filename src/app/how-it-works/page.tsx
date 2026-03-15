import { MotionReveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Clock3, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
};

const steps = [
  { title: "Keep a pouch nearby", description: "At home, in your bag, or at your desk.", icon: ShoppingBag },
  { title: "After meals", description: "Take 1-2 pastilles after meals.", icon: UtensilsCrossed },
  { title: "Build the habit", description: "Use up to 6 pastilles daily.", icon: Clock3 },
] as const;

export default function HowItWorksPage() {
  return (
    <Container className="py-12">
      <MotionReveal>
        <section className="section-card p-7 md:p-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#55697f]">
            Practical routine
          </p>
          <h1 className="font-display text-4xl text-[#1a2740]">How It Works</h1>
          <p className="mt-3 max-w-2xl text-[#58657a]">
            Marjoki is designed for everyday use after meals. The goal is consistency: simple steps
            that fit home, work, and family routines.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-[#d8e2ef] bg-white p-5 shadow-[0_8px_18px_rgba(20,30,45,0.05)]"
              >
                <Icon className="size-7 text-[#2f4878]" />
                <h2 className="mt-3 font-display text-xl text-[#23385d]">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#5c6980]">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 text-sm text-[#58657a]">
            Excessive consumption may produce laxative effects. Store dry at room temperature.
          </p>
        </section>
      </MotionReveal>
    </Container>
  );
}
