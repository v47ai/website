/**
 * "V + network" icon for the teal preview theme only (see globals.css
 * .logo-icon / [data-theme="teal"]). Not shown in the shipped default theme.
 */
export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M7 8 L20 30 L33 8"
        fill="none"
        stroke="var(--brass-500)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g stroke="var(--brass-500)" strokeWidth="1" opacity="0.7">
        <line x1="20" y1="30" x2="29" y2="20" />
        <line x1="29" y1="20" x2="34" y2="22" />
        <line x1="29" y1="20" x2="27" y2="12" />
      </g>
      <circle cx="20" cy="30" r="2.25" fill="var(--brass-500)" />
      <circle cx="29" cy="20" r="2" fill="var(--node-accent)" />
      <circle cx="34" cy="22" r="1.75" fill="var(--node-accent)" />
      <circle cx="27" cy="12" r="1.75" fill="var(--node-accent)" />
    </svg>
  );
}
