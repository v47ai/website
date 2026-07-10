import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { IndustrySelector } from "@/components/sections/IndustrySelector";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { MethodTimeline } from "@/components/sections/MethodTimeline";
import { ThinkWithV47 } from "@/components/sections/ThinkWithV47";
import { LabStrip } from "@/components/sections/LabStrip";
import { InsightGrid } from "@/components/sections/InsightGrid";
import { ContactBand } from "@/components/sections/ContactBand";

export const metadata: Metadata = {
  title: "V47 — Boutique AI Consulting",
  description:
    "We help governments and enterprises move from AI strategy to production — through executive advisory, product thinking, and working AI systems.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServiceCards />
      <IndustrySelector />
      <WorkGrid />
      <MethodTimeline />
      <ThinkWithV47 />
      <LabStrip />
      <InsightGrid limit={3} />
      <ContactBand />
    </>
  );
}
