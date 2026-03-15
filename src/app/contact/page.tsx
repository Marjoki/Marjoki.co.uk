import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help / Contact",
};

export default function ContactPage() {
  return (
    <Container className="py-10">
      <h1 className="text-4xl font-bold text-[#1a2740]">Help / Contact</h1>
      <p className="mt-3 text-[#5a667b]">
        We usually reply within 1 business day for product, order, and wholesale-enquiry questions.
      </p>
      <form action="/api/enquiry" method="post" className="section-card mt-6 grid gap-3 p-6 md:max-w-2xl">
        <input
          required
          name="name"
          aria-label="Your name"
          placeholder="Your name"
          className="h-11 rounded-xl border border-[#cfd9e8] bg-white px-3 text-sm"
        />
        <input
          required
          name="email"
          type="email"
          aria-label="Email address"
          placeholder="Email"
          className="h-11 rounded-xl border border-[#cfd9e8] bg-white px-3 text-sm"
        />
        <textarea
          required
          rows={5}
          name="message"
          aria-label="Message"
          placeholder="How can we help?"
          className="rounded-xl border border-[#cfd9e8] bg-white p-3 text-sm"
        />
        <button type="submit" className="h-11 rounded-xl bg-[#223457] text-sm font-semibold text-white">
          Send message
        </button>
      </form>
      <p className="mt-4 text-sm text-[#5a667b]">
        Prefer email?{" "}
        <a href={`mailto:${siteConfig.supportEmail}`} className="font-semibold text-[#2f4878]">
          {siteConfig.supportEmail}
        </a>
      </p>
    </Container>
  );
}
