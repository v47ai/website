import NextLink from "next/link";

import { Reveal } from "@/components/primitives/Reveal";

const STAGES = ["Discover", "Prioritize", "Prototype", "Validate", "Deploy", "Scale"];

export function MethodTimeline() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
        <Reveal>
          <p className="t-eyebrow text-brass-500">Our method</p>
          <h2 className="t-h2 mt-2 text-fg">
            A disciplined path from ambition to production.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {STAGES.map((stage, index) => (
              <li key={stage} className="border-t-2 border-border pt-4">
                <span className="t-caption text-fg-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="t-small mt-1 text-fg">{stage}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.15}>
          <NextLink
            href="/methods"
            className="t-small mt-8 inline-block text-interactive underline underline-offset-[3px] hover:text-azure-400"
          >
            See how we work →
          </NextLink>
        </Reveal>
      </div>
    </section>
  );
}
