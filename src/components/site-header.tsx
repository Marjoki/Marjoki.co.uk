"use client";

import { useCart } from "@/context/cart-context";
import { siteConfig } from "@/lib/site";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const SiteHeader = () => {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setIsCompact(value > 14);
  });

  return (
    <motion.header
      animate={{
        backdropFilter: isCompact ? "blur(12px)" : "blur(6px)",
      }}
      className="sticky top-0 z-50 border-b border-[#e3e8f0] bg-[#f8f7f4]/80"
    >
      <motion.div
        animate={{ paddingTop: isCompact ? "10px" : "14px", paddingBottom: isCompact ? "10px" : "14px" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mx-auto flex max-w-6xl items-center gap-3 px-4 md:px-6"
      >
        <Link href="/" className="relative shrink-0 pr-5" aria-label="Go to MARJOKI home">
          <Image
            src="/brand/cutouts/logo-title.webp"
            alt="Marjoki logo"
            width={184}
            height={50}
            className="h-auto w-auto"
            priority
          />
          <span className="absolute right-0 top-0 text-[10px] font-bold text-[#1b2c4a]">TM</span>
        </Link>

        <nav className="ml-4 hidden flex-1 items-center gap-4 lg:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  active ? "bg-white text-[#1d2b45]" : "text-[#465163] hover:bg-white/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full border border-[#d7deea] bg-white px-3 py-1.5 text-xs font-semibold text-[#334361] md:inline-flex"
          >
            Help / Contact
          </Link>
          <button
            type="button"
            onClick={() => setSearchOpen((value) => !value)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-[#d7deea] bg-white text-[#334361] transition hover:bg-[#f3f7fd]"
            aria-label="Open search field"
          >
            <Search className="size-4" />
          </button>
          <Link
            href="/cart"
            className="relative inline-flex size-9 items-center justify-center rounded-full border border-[#d7deea] bg-white text-[#334361] transition hover:bg-[#f3f7fd]"
            aria-label={`Open cart with ${itemCount} items`}
          >
            <ShoppingBag className="size-4" />
            <span className="absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-[#243458] px-1 text-[10px] font-semibold text-white">
              {itemCount}
            </span>
          </Link>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-[#d7deea] bg-white text-[#334361] lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </motion.div>

      {searchOpen ? (
        <div className="mx-auto max-w-6xl px-4 pb-3 md:px-6">
          <form action="/shop" className="w-full">
            <label htmlFor="q" className="sr-only">
              Search flavours
            </label>
            <input
              id="q"
              name="q"
              placeholder="Search strawberry, mango, discovery..."
              className="w-full rounded-2xl border border-[#d6dfeb] bg-white px-4 py-2.5 text-sm text-[#24324b] outline-none transition focus:border-[#8aacdf]"
            />
          </form>
        </div>
      ) : null}

      {mobileOpen ? (
        <div className="border-t border-[#e3e8f0] bg-[#f8f7f4] px-4 pb-4 pt-2 lg:hidden">
          <nav className="flex flex-col gap-2">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl bg-white px-3 py-2 text-sm text-[#334361]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="rounded-xl bg-white px-3 py-2 text-sm text-[#334361]">
              Help / Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
};
