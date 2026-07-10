import type { Metadata } from "next";
import NextLink from "next/link";

import { INDUSTRIES } from "@/lib/industries";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";

export const metadata: Metadata = {
  title: "Industries",
  description: "We understand your sector, not just AI in the abstract.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesIndexPage() {
  return (
    <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
      <Eyebrow>Industries</Eyebrow>
      <h1 className="t-h1 mt-3 text-fg">We understand your sector, not just AI in the abstract.</h1>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((industry, index) => (
          <Reveal key={industry.slug} delay={index * 0.05}>
            <NextLink href={`/industries/${industry.slug}`} className="block h-full">
              <Card className="flex h-full flex-col gap-3">
                <h2 className="t-h4 text-fg">{industry.label}</h2>
                <p className="t-small text-fg-muted">{industry.context}</p>
              </Card>
            </NextLink>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
