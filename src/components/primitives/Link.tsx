import NextLink, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PrimitiveLinkProps
  extends LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  children: ReactNode;
}

export function Link({ className, children, ...props }: PrimitiveLinkProps) {
  return (
    <NextLink
      className={cn(
        "text-interactive underline underline-offset-[3px] transition-colors duration-fast hover:text-azure-400",
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}
