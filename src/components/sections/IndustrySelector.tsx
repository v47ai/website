"use client";

import { useState, type KeyboardEvent } from "react";
import NextLink from "next/link";

import { Reveal } from "@/components/primitives/Reveal";
import { cn } from "@/lib/utils";
import { INDUSTRIES } from "@/lib/industries";

export function IndustrySelector() {
  const [activeSlug, setActiveSlug] = useState(INDUSTRIES[0].slug);
  const activeIndex = INDUSTRIES.findIndex((industry) => industry.slug === activeSlug);
  const active = INDUSTRIES[activeIndex];

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (activeIndex + direction + INDUSTRIES.length) % INDUSTRIES.length;
    setActiveSlug(INDUSTRIES[nextIndex].slug);
    document.getElementById(`industry-tab-${INDUSTRIES[nextIndex].slug}`)?.focus();
  }

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
        <Reveal>
          <p className="t-eyebrow text-brass-500">Industries</p>
          <h2 className="t-h2 mt-2 text-fg">We understand your sector, not just AI in the abstract.</h2>
        </Reveal>

        <div
          role="tablist"
          aria-label="Industries"
          onKeyDown={onKeyDown}
          className="mt-8 flex flex-wrap gap-2 border-b border-border pb-4"
        >
          {INDUSTRIES.map((industry) => {
            const isActive = industry.slug === activeSlug;
            return (
              <button
                key={industry.slug}
                id={`industry-tab-${industry.slug}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`industry-panel-${industry.slug}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveSlug(industry.slug)}
                className={cn(
                  "t-small min-h-11 rounded-sm px-4 py-2 transition-colors duration-fast",
                  isActive ? "border-b-2 border-brass-500 text-fg" : "text-fg-muted hover:text-fg"
                )}
              >
                {industry.label}
              </button>
            );
          })}
        </div>

        <div
          id={`industry-panel-${active.slug}`}
          role="tabpanel"
          aria-labelledby={`industry-tab-${active.slug}`}
          tabIndex={0}
          className="mt-8 max-w-prose"
        >
          <p className="t-body text-fg-muted">{active.context}</p>
          <p className="t-body-l mt-3 text-fg">{active.value}</p>
          <NextLink
            href={`/industries/${active.slug}`}
            className="t-small mt-4 inline-block text-interactive underline underline-offset-[3px] hover:text-azure-400"
          >
            See our {active.label.toLowerCase()} work →
          </NextLink>
        </div>
      </div>
    </section>
  );
}
