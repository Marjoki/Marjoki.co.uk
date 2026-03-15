"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type MotionRevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export const MotionReveal = ({ children, delay = 0, y = 20, className }: MotionRevealProps) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
