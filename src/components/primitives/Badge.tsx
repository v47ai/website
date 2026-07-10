import { cn } from "@/lib/utils";

export type BadgeStatus = "delivered" | "in-progress" | "concept" | "live-demo";

const STATUS_CONFIG: Record<BadgeStatus, { label: string; className: string }> = {
  delivered: { label: "Delivered", className: "text-success border-success/40" },
  "in-progress": { label: "In progress", className: "text-warning border-warning/40" },
  concept: { label: "Concept", className: "text-fg-subtle border-border-strong" },
  "live-demo": { label: "Live demo", className: "text-azure-500 border-azure-500/40" },
};

interface BadgeProps {
  status: BadgeStatus;
  className?: string;
}

export function Badge({ status, className }: BadgeProps) {
  const config = STATUS_CONFIG[status];
  return (
    <span
      className={cn(
        "t-caption inline-flex items-center gap-1.5 rounded-full border px-3 py-1",
        config.className,
        className
      )}
    >
      <span className="size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true" />
      {config.label}
    </span>
  );
}
