import { Container } from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about Marjoki xylitol pastilles — ingredients, usage, delivery, and more.",
};

const faqs = [
  {
    q: "What are xylitol pastilles?",
    a: "Xylitol pastilles are small sugar-free tablets sweetened with xylitol, a naturally occurring sugar alcohol. Marjoki pastilles are produced in Finland and designed for the after-meal moment as part of a daily oral-care habit.",
  },
  {
    q: "How many pastilles should I take each day?",
    a: "Guidance: 1–2 pastilles after each main meal, up to 6 pastilles daily. Do not exceed this. Excessive xylitol consumption may produce laxative effects.",
  },
  {
    q: "Are Marjoki pastilles sugar-free?",
    a: "Yes. All Marjoki launch flavours are sugar-free with 0g sugars per 100g. They are sweetened with xylitol.",
  },
  {
    q: "Where are Marjoki pastilles made?",
    a: "All Marjoki products are made in Finland by Narskuttelu, a family-owned manufacturer in Kitee. The facility is registered with the Finnish Food Authority and operates under EU food legislation.",
  },
  {
    q: "What is the xylitol content per flavour?",
    a: "Strawberry, Mango, Raspberry, and Passionfruit contain 92% xylitol. Blueberry contains 88% xylitol due to berry juice powder used for colour.",
  },
  {
    q: "Are Marjoki pastilles vegan and allergen-friendly?",
    a: "The launch range is vegan, gluten-free, soy-free, lactose-free, and milk-free. Check the ingredient label on your pouch if you have specific allergies or dietary requirements.",
  },
  {
    q: "Are Marjoki pastilles suitable for children?",
    a: "Suitable from age 6+ under adult supervision. Follow the on-pack guidance and consult a dental or healthcare professional if you have concerns.",
  },
  {
    q: "Are Marjoki pastilles safe for dogs or pets?",
    a: "No. Xylitol is toxic to dogs and some other animals. Keep all Marjoki products out of reach of pets.",
  },
  {
    q: "How should I store my Marjoki pouch?",
    a: "Store in a cool, dry place at room temperature. Keep sealed when not in use. No refrigeration required.",
  },
  {
    q: "What is the shelf life?",
    a: "Up to approximately 2 years from production when stored correctly. Check the best-before date on your pouch.",
  },
  {
    q: "Can I return my order?",
    a: "Yes. Unopened products may be returned within 30 days of delivery. Contact hello@marjoki.co.uk with your order number to start the process.",
  },
  {
    q: "When will my order arrive?",
    a: "UK orders typically dispatch within 1 business day. Delivery depends on the shipping method selected at checkout.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We use Stripe for secure checkout. You can pay by card (Visa, Mastercard, Amex) or Apple Pay. All transactions are encrypted.",
  },
  {
    q: "I am a dentist or clinic — how do I enquire about stocking Marjoki?",
    a: "Visit our For Dentists page or email hello@marjoki.co.uk with your practice details. We welcome professional enquiries and respond directly.",
  },
];

export default function FaqPage() {
  return (
    <Container className="py-14">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#4e6280]">Questions answered</p>
        <h1 className="font-display text-4xl text-[#0f1a2b]">Frequently asked questions</h1>
        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => (
            <details key={item.q} className="section-card overflow-hidden rounded-2xl" open={i === 0}>
              <summary className="font-display cursor-pointer py-4 px-5 text-[0.98rem] font-medium text-[#1a2d4a] hover:text-[#2a4578]">
                {item.q}
              </summary>
              <div className="accordion-body bg-[#fafbff]">
                <p className="text-sm leading-relaxed text-[#4d5e72]">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </Container>
  );
}