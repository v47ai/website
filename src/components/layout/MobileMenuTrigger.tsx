import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/primitives/Icon";

interface MobileMenuTriggerProps {
  open: boolean;
  onClick: () => void;
  className?: string;
}

export function MobileMenuTrigger({ open, onClick, className }: MobileMenuTriggerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls="mobile-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      className={cn(
        "flex size-11 items-center justify-center rounded-sm text-fg",
        className
      )}
    >
      <Icon icon={open ? X : Menu} size={24} />
    </button>
  );
}
