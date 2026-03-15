import { Container } from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Dentists",
  description: "Professional enquiries for dentists and clinics interested in Marjoki xylitol pastilles.",
};

export default function ForDentistsPage() {
  return (
    <Container className="py-14">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#4e6280]">Professional</p>
        <h1 className="font-display text-4xl text-[#0f1a2b]">For dentists and clinics</h1>
        <p className="mt-5 text-[16px] leading-relaxed text-[#4d5e72]">
          We welcome professional enquiries from dental practices and clinics interested in reception
          display or patient-facing positioning of our Finnish xylitol pastilles.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-6">
        <section className="section-card rounded-2xl p-8">
          <h2 className="font-display text-2xl text-[#1a2d46]">Why clinics consider Marjoki</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#566070]">
            <li>Clean, family-safe brand suitable for waiting room display.</li>
            <li>Sugar-free xylitol pastilles with straightforward after-meal usage guidance.</li>
            <li>Made in Finland by Narskuttelu, a family-owned manufacturer registered with the Finnish Food Authority.</li>
            <li>Products manufactured in accordance with EU food legislation.</li>
            <li>Calm, modern brand identity suitable for reception and patient-facing retail display.</li>
          </ul>
        </section>

        <section className="section-card rounded-2xl p-8">
          <h2 className="font-display text-2xl text-[#1a2d46]">Product facts for practices</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#566070]">
            <li>Core launch flavours contain 92% xylitol (Blueberry: 88%).</li>
            <li>Each pastille includes calcium phosphate.</li>
            <li>After-meal guidance: 1-2 pastilles, up to 6 per day.</li>
            <li>Vegan, gluten-free, soy-free, lactose-free.</li>
            <li>Available in 100g retail pouches and mixed Discovery Pack (20g x 5).</li>
          </ul>
        </section>

        <section className="section-card rounded-2xl p-8">
          <h2 className="font-display text-2xl text-[#1a2d46]">Professional enquiry</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#4d5e72]">
            Tell us about your practice and what you need. We respond to all professional enquiries directly.
          </p>
          <form action="/api/enquiry" method="post" className="mt-7 grid gap-4 md:grid-cols-2">
            <input required name="name" aria-label="Full name" placeholder="Full name" className="h-12 rounded-2xl border border-[#c2d2e5] bg-white px-5 text-sm text-[#1a2d46] shadow-sm focus:border-[#6b9ad4] focus:outline-none focus:ring-2 focus:ring-[#6b9ad4]/20" />
            <input required name="clinic" aria-label="Clinic or practice name" placeholder="Clinic or practice name" className="h-12 rounded-2xl border border-[#c2d2e5] bg-white px-5 text-sm text-[#1a2d46] shadow-sm focus:border-[#6b9ad4] focus:outline-none focus:ring-2 focus:ring-[#6b9ad4]/20" />
            <input required type="email" name="email" aria-label="Work email" placeholder="Work email" className="h-12 rounded-2xl border border-[#c2d2e5] bg-white px-5 text-sm text-[#1a2d46] shadow-sm focus:border-[#6b9ad4] focus:outline-none focus:ring-2 focus:ring-[#6b9ad4]/20" />
            <input name="phone" aria-label="Phone number" placeholder="Phone (optional)" className="h-12 rounded-2xl border border-[#c2d2e5] bg-white px-5 text-sm text-[#1a2d46] shadow-sm focus:border-[#6b9ad4] focus:outline-none focus:ring-2 focus:ring-[#6b9ad4]/20" />
            <textarea required name="message" aria-label="Message" rows={5} placeholder="Tell us about your practice and what you are looking for" className="rounded-2xl border border-[#c2d2e5] bg-white p-5 text-sm text-[#1a2d46] shadow-sm md:col-span-2 focus:border-[#6b9ad4] focus:outline-none focus:ring-2 focus:ring-[#6b9ad4]/20" />
            <button type="submit" className="h-12 rounded-2xl bg-[linear-gradient(112deg,#1a2948_0%,#2d4778_100%)] text-sm font-semibold text-white shadow-[0_10px_24px_rgba(26,40,68,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(26,40,68,0.34)] md:col-span-2">
              Send enquiry
            </button>
          </form>
        </section>
      </div>
    </Container>
  );
}