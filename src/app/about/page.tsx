import { Container } from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Marjoki",
  description: "The story behind Marjoki — Finnish xylitol pastilles made for a practical after-meal habit.",
};

export default function AboutPage() {
  return (
    <Container className="py-14">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#4e6280]">Our story</p>
        <h1 className="font-display text-4xl text-[#0f1a2b] md:text-5xl">About Marjoki</h1>
        <div className="mt-10 space-y-7 text-[16px] leading-relaxed text-[#4d5f72]">
          <p>
            <strong className="text-[#1a2d4a]">Marjoki</strong> is a UK direct-to-consumer brand that brings
            Finnish xylitol pastilles into everyday routines. We exist because the after-meal habit — long
            established in Finland — deserves a clear, trusted home in the UK.
          </p>
          <p>
            Every pouch is made in Finland by <strong className="text-[#1a2d4a]">Narskuttelu</strong>, a
            family-owned manufacturer in Kitee. The facility is registered with the Finnish Food Authority and
            operates under EU food legislation. Narskuttelu has refined its production over years, and we work
            directly with them to bring that standard to UK families.
          </p>
          <p>
            Our positioning is simple: <em>trusted oral-care habit first, fruit flavour second</em>. We are not
            a candy brand. We are not a clinical brand. We sit in between — practical, pleasant, and honest
            about what xylitol pastilles can and cannot do.
          </p>
          <p>
            The after-meal moment is where our product fits: 1–2 pastilles after main meals, up to 6 per day.
            No preparation, no refrigeration. A routine that families can keep.
          </p>
          <p>
            We are at launch stage, focused on direct-to-consumer sales in the UK. We build brand presence first,
            then expand into professional and marketplace channels in measured phases.
          </p>
          <p>
            Questions, feedback, or professional enquiries: <a href="mailto:hello@marjoki.co.uk" className="font-semibold text-[#2a4578] hover:underline">hello@marjoki.co.uk</a>.
          </p>
        </div>
      </div>
    </Container>
  );
}