import NextLink from "next/link";

import { buttonVariants } from "@/components/primitives/Button";
import { Divider } from "@/components/primitives/Divider";
import { Reveal } from "@/components/primitives/Reveal";

export function ContactBand() {
  return (
    <section>
      <div className="mx-auto max-w-container px-5 py-24 sm:px-10">
        <Reveal>
          <Divider className="mb-10" />
          <p className="t-h3 max-w-prose text-fg">
            Have an AI problem worth solving properly?
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <NextLink href="/contact" className={buttonVariants({ variant: "primary" })}>
              Book an AI discovery session
            </NextLink>
            <NextLink
              href="https://www.linkedin.com/company/v47"
              className="t-small text-fg-muted underline underline-offset-[3px] hover:text-fg"
            >
              LinkedIn
            </NextLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
