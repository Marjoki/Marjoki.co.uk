import { Container } from "@/components/ui/container";

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-10">
      <h1 className="text-4xl font-bold text-[#1a2740]">Privacy Policy</h1>
      <div className="mt-5 max-w-3xl space-y-3 text-[#5a667b]">
        <p>We collect only the data needed to process orders and provide customer support.</p>
        <p>Payment details are handled securely by Stripe and are not stored on our servers.</p>
        <p>For data enquiries, contact hello@marjoki.co.uk.</p>
      </div>
    </Container>
  );
}
