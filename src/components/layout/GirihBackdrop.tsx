/**
 * Low-opacity decorative network of hairlines behind the Hero, echoing the
 * girih motif (Brand Guidelines §6.3 / the real motif in public/brand).
 * Purely decorative — aria-hidden, no meaning conveyed.
 */
export function GirihBackdrop() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 size-full opacity-40"
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <g stroke="#262E3D" strokeWidth="1">
        <line x1="600" y1="200" x2="600" y2="50" />
        <line x1="600" y1="200" x2="729" y2="125" />
        <line x1="600" y1="200" x2="729" y2="275" />
        <line x1="600" y1="200" x2="600" y2="350" />
        <line x1="600" y1="200" x2="471" y2="275" />
        <line x1="600" y1="200" x2="471" y2="125" />
      </g>
      <path
        d="M600,50 L729,125 L729,275 L600,350 L471,275 L471,125 Z"
        stroke="#333C4E"
        strokeWidth="1.25"
        opacity="0.7"
      />
      <path
        d="M600,50 L729,275 L471,125 Z M600,350 L471,275 L729,125 Z"
        stroke="#C9A65C"
        strokeWidth="1.25"
        opacity="0.5"
      />
      <circle cx="600" cy="200" r="3" fill="#C9A65C" opacity="0.6" />
    </svg>
  );
}
