import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface IconProps {
  icon: LucideIcon;
  size?: 20 | 24;
  className?: string;
}

export function Icon({ icon: LucideIconComponent, size = 20, className }: IconProps) {
  return (
    <LucideIconComponent
      size={size}
      strokeWidth={1.5}
      className={cn("shrink-0", className)}
      aria-hidden="true"
    />
  );
}
