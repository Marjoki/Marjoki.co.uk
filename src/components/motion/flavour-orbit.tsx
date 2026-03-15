"use client";

import { Product } from "@/lib/types";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const orbitAssets: Record<Product["accent"], { fruit: string; pastille: string }> = {
  strawberry: {
    fruit: "/brand/orbit/fruit-strawberry.webp",
    pastille: "/brand/orbit/pastille-strawberry.webp",
  },
  mango: {
    fruit: "/brand/orbit/fruit-mango.webp",
    pastille: "/brand/orbit/pastille-mango.webp",
  },
  raspberry: {
    fruit: "/brand/orbit/fruit-raspberry.webp",
    pastille: "/brand/orbit/pastille-raspberry.webp",
  },
  blueberry: {
    fruit: "/brand/orbit/fruit-blueberry.webp",
    pastille: "/brand/orbit/pastille-blueberry.webp",
  },
  passionfruit: {
    fruit: "/brand/orbit/fruit-passionfruit.webp",
    pastille: "/brand/orbit/pastille-passionfruit.webp",
  },
};

export const FlavourOrbit = ({
  accent,
  className,
}: {
  accent: Product["accent"];
  className?: string;
}) => {
  const reduceMotion = useReducedMotion();
  const assets = orbitAssets[accent];

  return (
    <div className={className}>
      <motion.div
        className="absolute inset-0"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={reduceMotion ? undefined : { duration: 18, ease: "linear", repeat: Infinity }}
      >
        <div className="absolute left-1/2 top-[8%] h-11 w-11 -translate-x-1/2 rounded-full bg-white/85 p-1 shadow-[0_8px_18px_rgba(28,40,62,0.18)]">
          <Image src={assets.fruit} alt="" fill className="object-contain p-1" sizes="44px" />
        </div>
        <div className="absolute left-1/2 top-[78%] h-11 w-11 -translate-x-1/2 rounded-full bg-white/85 p-1 shadow-[0_8px_18px_rgba(28,40,62,0.18)]">
          <Image src={assets.pastille} alt="" fill className="object-contain p-1" sizes="44px" />
        </div>
      </motion.div>
    </div>
  );
};
