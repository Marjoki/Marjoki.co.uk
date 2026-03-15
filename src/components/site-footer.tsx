import { siteConfig } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Shipping", href: "/policies/shipping" },
  { label: "Returns", href: "/policies/returns" },
  { label: "Privacy", href: "/policies/privacy" },
  { label: "Terms", href: "/policies/terms" },
];

export const SiteFooter = () => {
  return (
    <footer className="mt-20 border-t border-[#d8e0ec] bg-[linear-gradient(168deg,#ffffff_0%,#f8faff_100%)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <div className="relative inline-block pr-5">
            <Image
              src="/brand/cutouts/logo-title.webp"
              alt="Marjoki logo"
              width={156}
              height={42}
              className="h-auto w-auto"
            />
            <span className="absolute right-0 top-0 text-[10px] font-bold text-[#1b2c4a]">TM</span>
          </div>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-[#4d5e72]">
            Finnish-made xylitol pastilles for trusted after-meal habits in UK homes.
          </p>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.08em] text-[#2a3d5a]">Support</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#5d687b]">
            <li>
              <Link className="transition hover:text-[#1a2d4a]" href="/contact">
                Help / Contact
              </Link>
            </li>
            <li>
              <a className="transition hover:text-[#1a2d4a]" href={`mailto:${siteConfig.supportEmail}`}>
                {siteConfig.supportEmail}
              </a>
            </li>
            <li className="pt-1 text-[13px] text-[#6d7a8d]">Fast UK delivery · Secure checkout</li>
            <li className="flex gap-4 pt-1">
              <a className="transition hover:text-[#1a2d4a]" href={siteConfig.social.instagram}>
                Instagram
              </a>
              <a className="transition hover:text-[#1a2d4a]" href={siteConfig.social.tiktok}>
                TikTok
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.08em] text-[#2a3d5a]">Policies</h3>
          <ul className="mt-4 space-y-3 text-sm text-[#5d687b]">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-[#1a2d4a]" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[#e2e8f2] px-4 py-5 text-center text-[13px] text-[#6d7889]">
        © {new Date().getFullYear()} Marjoki. All rights reserved.
      </div>
    </footer>
  );
};
