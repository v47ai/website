import type { Metadata } from "next";

import { Eyebrow } from "@/components/primitives/Eyebrow";
import { buttonVariants } from "@/components/primitives/Button";
import { Divider } from "@/components/primitives/Divider";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book an AI discovery session, or reach V47 by email or LinkedIn.",
  alternates: { canonical: "/contact" },
};

const EMAIL = "vignesh@v47ai.com";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
      <Eyebrow>Contact</Eyebrow>
      <h1 className="t-h1 mt-3 max-w-2xl text-fg">
        Have an AI problem worth solving properly?
      </h1>
      <p className="t-body-l mt-4 max-w-prose text-fg-muted">
        Three ways to reach us. No long qualification form.
      </p>

      <Divider className="my-10 max-w-prose" />

      <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap">
        <div>
          <h2 className="t-h4 text-fg">Book a discovery session</h2>
          <p className="t-small mt-2 max-w-sm text-fg-muted">
            Email directly to set up a session — a dedicated scheduling link
            is being finalized.
          </p>
          <a
            href={`mailto:${EMAIL}?subject=AI%20discovery%20session`}
            className={buttonVariants({ variant: "primary", className: "mt-4" })}
          >
            Book a session
          </a>
        </div>

        <div>
          <h2 className="t-h4 text-fg">Email</h2>
          <p className="t-small mt-2 text-fg-muted">For anything else.</p>
          <a
            href={`mailto:${EMAIL}`}
            className="t-body mt-4 inline-block text-interactive underline underline-offset-[3px] hover:text-azure-400"
          >
            {EMAIL}
          </a>
        </div>

        <div>
          <h2 className="t-h4 text-fg">LinkedIn</h2>
          <p className="t-small mt-2 text-fg-muted">Follow or message directly.</p>
          <a
            href="https://www.linkedin.com/company/v47"
            target="_blank"
            rel="noopener noreferrer"
            className="t-body mt-4 inline-block text-interactive underline underline-offset-[3px] hover:text-azure-400"
          >
            linkedin.com/company/v47
          </a>
        </div>
      </div>
    </div>
  );
}
