"use client";

import { useCart } from "@/context/cart-context";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export const AddToCartButton = ({
  productId,
  className,
}: {
  productId: string;
  className?: string;
}) => {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => {
        addToCart(productId, 1);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1400);
      }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,#1a2947_0%,#2a416f_100%)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_14px_rgba(26,41,71,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_18px_rgba(26,41,71,0.30)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#344d87]",
        className,
      )}
      aria-label="Add item to cart"
    >
      <ShoppingCart className="size-4" />
      {added ? "Added" : "Add"}
    </button>
  );
};
