import { Container } from "@/components/ui/container";

export default function ReturnsPolicyPage() {
  return (
    <Container className="py-10">
      <h1 className="text-4xl font-bold text-[#1a2740]">Returns Policy</h1>
      <div className="mt-5 max-w-3xl space-y-3 text-[#5a667b]">
        <p>Unopened products may be returned within 30 days of delivery.</p>
        <p>
          Contact support first with your order number. We will confirm next steps and return
          instructions.
        </p>
        <p>Refunds are issued to the original payment method once returned goods are checked.</p>
      </div>
    </Container>
  );
}
