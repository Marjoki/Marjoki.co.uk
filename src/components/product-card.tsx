"use client";

import Link from "next/link";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { FlavourAccent } from "@/components/motion/flavour-accent";
import { PackArt } from "@/components/pack-art";
import { Product } from "@/lib/types";
import { formatGbp } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const flavourColours: Record<Product["accent"], { bg: string; text: string; border: string }> = {
  strawberry:   { bg: "#fde8e8", text: "#882828", border: "#f5c4c4" },
  mango:        { bg: "#fdecd1", text: "#7a3e0a", border: "#f5d4a0" },
  raspberry:    { bg: "#fde0ee", text: "#7a1d48", border: "#f5bcd8" },
  blueberry:    { bg: "#deeafe", text: "#1e3e7a", border: "#b8d2f8" },
  passionfruit: { bg: "#fef3d0", text: "#6b4c08", border: "#f5de8c" },
};

export const ProductCard = ({ product }: { product: Product }) => {
  const reduceMotion = useReducedMotion();
  const col = flavourColours[product.accent];

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.38, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.02 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#d2deec] bg-white shadow-[0_8px_28px_rgba(18,26,45,0.06)] transition-shadow duration-300 hover:border-[#c2d2e5] hover:shadow-[0_20px_44px_rgba(18,26,45,0.12)]"
    >
      {/* Product image zone */}
      <Link
        href={product.category === "flavour" ? `/products/${product.slug}` : "/discovery-pack"}
        className="relative block"
      >
        <div className="relative h-[250px] overflow-hidden rounded-t-[27px] md:h-[270px]">
          <PackArt
            src={product.image}
            alt={`${product.shortName} 100g pouch`}
            className="h-full rounded-none border-0"
            imageClassName="p-4 transition duration-400 group-hover:scale-[1.08]"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {/* Flavour accent – spinning fruit + static pastille, no white ring */}
          <FlavourAccent accent={product.accent} />
        </div>
      </Link>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-3 p-4 pt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg text-[#111820]">{product.shortName}</h3>
          <span className="shrink-0 text-base font-semibold text-[#1b2d46]">{formatGbp(product.priceGbp)}</span>
        </div>

        <p className="text-xs text-[#5e6e82]">{product.size}</p>

        {/* Flavour chip row */}
        <div className="flex flex-wrap gap-1.5">
          <span
            className="rounded-full px-3 py-1 text-[11px] font-semibold"
            style={{ background: col.bg, color: col.text, border: `1px solid ${col.border}` }}
          >
            {product.flavour}
          </span>
          {product.xylitolPercent ? (
            <span className="rounded-full border border-[#cddff7] bg-[#e8f1fe] px-3 py-1 text-[11px] font-semibold text-[#1f3f76]">
              {product.xylitolPercent}% xylitol
            </span>
          ) : (
            <span className="rounded-full border border-[#d8e0ea] bg-[#eef1f6] px-3 py-1 text-[11px] font-semibold text-[#3c4e65]">
              Mixed flavours
            </span>
          )}
        </div>

        {/* CTA row */}
        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          <p className="text-[11px] leading-tight text-[#74849a]">
            Sugar-free<br />With calcium phosphate
          </p>
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </motion.article>
  );
};
