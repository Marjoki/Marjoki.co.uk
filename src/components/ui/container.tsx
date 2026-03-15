import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <div className={cn("mx-auto w-full max-w-6xl px-4 md:px-6", className)}>{children}</div>;
