import type { Metadata } from "next";

import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Badge } from "@/components/primitives/Badge";

export const metadata: Metadata = {
  title: "Company profile",
  description: "A downloadable, procurement-ready overview of V47.",
  alternates: { canonical: "/company-profile" },
};

export default function CompanyProfilePage() {
  return (
    <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
      <Eyebrow>Firm</Eyebrow>
      <h1 className="t-h1 mt-3 text-fg">Company profile</h1>

      <div className="mt-6">
        <Badge status="in-progress" />
      </div>

      <p className="t-body-l mt-6 max-w-prose text-fg-muted">
        A downloadable, procurement-ready PDF is in production — built from
        the same design system as this site, so it reads as one document
        family, not a separate marketing artefact.
      </p>
      <p className="t-body mt-4 max-w-prose text-fg-muted">
        In the meantime, everything the profile will summarize — work,
        methods, and how to reach us — is already on this site.
      </p>
    </div>
  );
}
