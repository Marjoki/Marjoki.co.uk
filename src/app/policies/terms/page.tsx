import { Container } from "@/components/ui/container";

export default function TermsPolicyPage() {
  return (
    <Container className="py-10">
      <h1 className="text-4xl font-bold text-[#1a2740]">Terms & Conditions</h1>
      <div className="mt-5 max-w-3xl space-y-3 text-[#5a667b]">
        <p>By placing an order you agree to pricing, shipping, and returns terms shown at checkout.</p>
        <p>All product information is provided in good faith and should be read before use.</p>
        <p>For support with any order issue, contact hello@marjoki.co.uk.</p>
      </div>
    </Container>
  );
}
