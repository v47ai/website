import type { Metadata } from "next";

import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/Analytics";
import { ThemeToggle } from "@/components/ThemeToggle";
import { display, body, mono, plexMono } from "@/lib/fonts";
import "./globals.css";

const SITE_URL = "https://v47ai.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "V47 — Boutique AI Consulting",
    template: "%s · V47",
  },
  description: "Boutique AI consulting — from AI strategy to production.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "V47",
    title: "V47 — Boutique AI Consulting",
    description: "Boutique AI consulting — from AI strategy to production.",
  },
  twitter: {
    card: "summary_large_image",
    title: "V47 — Boutique AI Consulting",
    description: "Boutique AI consulting — from AI strategy to production.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "V47",
  description: "Boutique AI consulting — from AI strategy to production.",
  areaServed: ["AE", "GCC"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abu Dhabi",
    addressCountry: "AE",
  },
  url: SITE_URL,
  sameAs: ["https://www.linkedin.com/company/v47"],
  founder: [
    { "@type": "Person", name: "Vignesh", jobTitle: "Founder & Principal Consultant" },
    { "@type": "Person", name: "Sharmili G", jobTitle: "Co-Founder & Head of Data Platform Engineering" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeToggle />
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-(--z-toast) focus-visible:rounded-sm focus-visible:bg-surface-raised focus-visible:px-4 focus-visible:py-2 focus-visible:text-fg"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
