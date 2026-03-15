"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type FloatingPouchProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  delay?: number;
  className?: string;
  priority?: boolean;
};

export const FloatingPouch = ({
  src,
  alt,
  width,
  height,
  delay = 0,
  className,
  priority = false,
}: FloatingPouchProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18, rotate: -0.7 }}
      animate={
        reduceMotion
          ? undefined
          : {
              opacity: 1,
              y: [0, -5, 0],
              rotate: [0, 0.7, 0, -0.7, 0],
            }
      }
      transition={
        reduceMotion
          ? undefined
          : {
              opacity: { duration: 0.65, delay },
              y: { repeat: Infinity, duration: 6.6, delay, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 7.8, delay, ease: "easeInOut" },
            }
      }
      whileHover={reduceMotion ? undefined : { y: -4, rotate: 0.9, scale: 1.02 }}
    >
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full object-contain drop-shadow-[0_18px_22px_rgba(26,34,53,0.18)]"
          priority={priority}
        />
        <span className="absolute bottom-1.5 right-1.5 rounded-full border border-[#d6deec] bg-white/92 px-2 py-0.5 text-[10px] font-semibold text-[#2f4268]">
          Ages 6+
        </span>
      </div>
    </motion.div>
  );
};
