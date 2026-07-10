import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

/**
 * Simple low-opacity hairline. Stands in for the full girih-motif divider
 * (Brand Guidelines §6.3) until that generative geometry is resolved (OQ-6).
 */
export function Divider({ className }: DividerProps) {
  return (
    <hr
      className={cn("border-t border-border opacity-60", className)}
      aria-hidden="true"
    />
  );
}
