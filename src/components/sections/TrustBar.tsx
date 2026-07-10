import { Reveal } from "@/components/primitives/Reveal";

const ITEMS = [
  "11+ years product leadership",
  "Government & enterprise delivery",
  "AI strategy to production",
  "Abu Dhabi–licensed AI business",
];

export function TrustBar() {
  return (
    <section className="border-b border-border">
      <Reveal>
        <ul className="mx-auto grid max-w-container grid-cols-1 gap-6 px-5 py-10 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border">
          {ITEMS.map((item) => (
            <li key={item} className="t-caption text-fg-muted lg:px-6 lg:first:pl-0 lg:last:pr-0">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
