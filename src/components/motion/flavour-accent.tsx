"use client";

import { Product } from "@/lib/types";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const assets: Record<Product["accent"], { fruit: string; pastille: string }> = {
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

export const FlavourAccent = ({ accent }: { accent: Product["accent"] }) => {
  const reduceMotion = useReducedMotion();
  const src = assets[accent];

  return (
    <div className="pointer-events-none absolute bottom-2 left-2 z-20 h-16 w-16">
      <motion.div
        className="absolute -left-6 bottom-0 h-7 w-7"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={reduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "linear" }}
      >
        <Image src={src.fruit} alt="" fill className="object-contain" sizes="28px" />
      </motion.div>
      <div className="absolute left-8 top-0 h-8 w-8">
        <Image src={src.pastille} alt="" fill className="object-contain" sizes="32px" />
      </div>
    </div>
  );
};
