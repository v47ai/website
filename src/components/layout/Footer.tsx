import NextLink from "next/link";

import { Divider } from "@/components/primitives/Divider";
import { Logo } from "@/components/primitives/Logo";

const COLUMNS = [
  {
    heading: "Explore",
    links: [
      { label: "Work", href: "/work" },
      { label: "Methods", href: "/methods" },
      { label: "Lab", href: "/lab" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    heading: "Firm",
    links: [
      { label: "About", href: "/about" },
      { label: "Company profile", href: "/company-profile.pdf" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Book a session", href: "/contact" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/v47" },
      { label: "RSS", href: "/rss.xml" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-container px-5 py-16 sm:px-10">
        <div className="mb-12 flex flex-col gap-1.5">
          <Logo className="text-2xl" />
          <p className="t-caption text-fg-subtle">AI consulting · Abu Dhabi</p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h2 className="t-eyebrow text-fg-subtle">{column.heading}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <NextLink
                      href={link.href}
                      className="t-small text-fg-muted transition-colors duration-fast hover:text-fg"
                    >
                      {link.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider className="my-10" />

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-caption text-fg-subtle">
            V47 · Boutique AI Consulting · Licensed in Abu Dhabi, UAE
          </p>
          <p className="t-caption text-fg-subtle">© {year} V47.</p>
        </div>
      </div>
    </footer>
  );
}
