"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products } from "@/lib/products";
import { CartLine } from "@/lib/types";

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "marjoki-cart-v1";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [lines, setLines] = useState<CartLine[]>(() => {
    if (typeof window === "undefined") return [];
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw) as CartLine[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const addToCart = useCallback((productId: string, quantity = 1) => {
    const product = products.find((item) => item.id === productId);
    if (!product) return;

    setLines((previous) => {
      const existing = previous.find((line) => line.productId === productId);
      if (existing) {
        return previous.map((line) =>
          line.productId === productId
            ? { ...line, quantity: Math.min(line.quantity + quantity, 20) }
            : line,
        );
      }

      return [
        ...previous,
        {
          productId: product.id,
          slug: product.slug,
          name: product.shortName,
          image: product.image,
          size: product.size,
          unitPriceGbp: product.priceGbp,
          quantity,
        },
      ];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setLines((previous) => previous.filter((line) => line.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      setLines((previous) => previous.filter((line) => line.productId !== productId));
      return;
    }

    setLines((previous) =>
      previous.map((line) =>
        line.productId === productId ? { ...line, quantity: Math.min(quantity, 20) } : line,
      ),
    );
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const itemCount = useMemo(
    () => lines.reduce((total, line) => total + line.quantity, 0),
    [lines],
  );
  const subtotal = useMemo(
    () => lines.reduce((total, line) => total + line.quantity * line.unitPriceGbp, 0),
    [lines],
  );

  const value = useMemo(
    () => ({ lines, itemCount, subtotal, addToCart, removeFromCart, updateQuantity, clearCart }),
    [lines, itemCount, subtotal, addToCart, removeFromCart, updateQuantity, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
