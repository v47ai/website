import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NextLink from "next/link";

import { INDUSTRIES } from "@/lib/industries";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { buttonVariants } from "@/components/primitives/Button";
import { buildMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((item) => item.slug === slug);
  if (!industry) return {};

  return buildMetadata({
    title: industry.label,
    description: industry.context,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((item) => item.slug === slug);
  if (!industry) notFound();

  return (
    <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
      <nav aria-label="Breadcrumb" className="t-caption text-fg-subtle">
        <NextLink href="/industries" className="hover:text-fg">
          Industries
        </NextLink>
        <span className="mx-2">/</span>
        <span aria-current="page">{industry.label}</span>
      </nav>

      <div className="mt-6 max-w-prose">
        <Eyebrow>Industry</Eyebrow>
        <h1 className="t-h1 mt-3 text-fg">{industry.label}</h1>
        <p className="t-body-l mt-4 text-fg-muted">{industry.context}</p>
        <p className="t-body-l mt-4 text-fg">{industry.value}</p>
      </div>

      <div className="mt-12">
        <NextLink href="/contact" className={buttonVariants({ variant: "primary" })}>
          Book a session
        </NextLink>
      </div>
    </div>
  );
}
