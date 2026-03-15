"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const fruitItems = [
  "/brand/orbit/fruit-strawberry.webp",
  "/brand/orbit/fruit-mango.webp",
  "/brand/orbit/fruit-raspberry.webp",
  "/brand/orbit/fruit-blueberry.webp",
  "/brand/orbit/fruit-passionfruit.webp",
];

const pastilleItems = [
  "/brand/orbit/pastille-strawberry.webp",
  "/brand/orbit/pastille-mango.webp",
  "/brand/orbit/pastille-raspberry.webp",
  "/brand/orbit/pastille-blueberry.webp",
  "/brand/orbit/pastille-passionfruit.webp",
];

export const DiscoveryOrbit = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className}>
        {fruitItems.map((src, index) => {
          const angle = (index / fruitItems.length) * Math.PI * 2;
          const x = Math.cos(angle) * 100;
          const y = Math.sin(angle) * 100;
          const size = 36;
          return (
            <div
              key={`still-fruit-${src}`}
              className="absolute left-1/2 top-1/2"
              style={{
                width: size,
                height: size,
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <Image src={src} alt="" fill className="object-contain" sizes={`${size}px`} />
            </div>
          );
        })}
        {pastilleItems.map((src, index) => {
          const angle = (index / pastilleItems.length) * Math.PI * 2 + 0.4;
          const x = Math.cos(angle) * 68;
          const y = Math.sin(angle) * 68;
          const size = 28;
          return (
            <div
              key={`still-pastille-${src}`}
              className="absolute left-1/2 top-1/2"
              style={{
                width: size,
                height: size,
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <Image src={src} alt="" fill className="object-contain" sizes={`${size}px`} />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 28, ease: "linear", repeat: Infinity }}
    >
      {fruitItems.map((src, index) => {
        const angle = (index / fruitItems.length) * Math.PI * 2;
        const x = Math.cos(angle) * 100;
        const y = Math.sin(angle) * 100;
        const size = 36;
        return (
          <div
            key={src}
            className="absolute left-1/2 top-1/2"
            style={{
              width: size,
              height: size,
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            }}
          >
            <Image src={src} alt="" fill className="object-contain" sizes={`${size}px`} />
          </div>
        );
      })}

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {pastilleItems.map((src, index) => {
          const angle = (index / pastilleItems.length) * Math.PI * 2 + 0.4;
          const x = Math.cos(angle) * 68;
          const y = Math.sin(angle) * 68;
          const size = 28;
          return (
            <div
              key={src}
              className="absolute left-1/2 top-1/2"
              style={{
                width: size,
                height: size,
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <Image src={src} alt="" fill className="object-contain" sizes={`${size}px`} />
            </div>
          );
        })}
      </motion.div>

    </motion.div>
  );
};
