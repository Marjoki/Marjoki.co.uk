import { Container } from "@/components/ui/container";

export default function ShippingPolicyPage() {
  return (
    <Container className="py-10">
      <h1 className="text-4xl font-bold text-[#1a2740]">Shipping Policy</h1>
      <div className="mt-5 max-w-3xl space-y-3 text-[#5a667b]">
        <p>We currently ship across the UK.</p>
        <p>Orders are typically dispatched within 1 business day.</p>
        <p>Delivery timelines and rates are shown at checkout before payment.</p>
      </div>
    </Container>
  );
}
