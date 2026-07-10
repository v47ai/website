import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  muted?: boolean;
}

export function Eyebrow({ muted, className, children, ...props }: EyebrowProps) {
  return (
    <span
      className={cn("t-eyebrow", muted ? "text-fg-subtle" : "text-brass-500", className)}
      {...props}
    >
      {children}
    </span>
  );
}
