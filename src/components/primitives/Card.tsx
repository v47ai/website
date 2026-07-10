import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  featured?: boolean;
}

export function Card({ featured, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-border bg-surface p-6 transition-[border-color,transform] duration-base ease-out hover:-translate-y-0.5 hover:border-border-strong sm:p-8",
        featured && "border-t-2 border-t-brass-500",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
