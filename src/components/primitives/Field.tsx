import type { InputHTMLAttributes } from "react";
import { useId } from "react";

import { cn } from "@/lib/utils";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  error?: string;
}

export function Field({ label, helperText, error, id, className, ...props }: FieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const helperId = helperText ? `${inputId}-helper` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="t-small text-fg-muted">
        {label}
      </label>
      <input
        id={inputId}
        aria-describedby={cn(helperId, errorId) || undefined}
        aria-invalid={Boolean(error)}
        className={cn(
          "min-h-11 rounded-sm border border-border bg-surface px-3 text-fg placeholder:text-fg-subtle",
          error && "border-danger",
          className
        )}
        {...props}
      />
      {helperText && !error && (
        <p id={helperId} className="t-caption text-fg-subtle">
          {helperText}
        </p>
      )}
      {error && (
        <p id={errorId} className="t-caption flex items-center gap-1 text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
