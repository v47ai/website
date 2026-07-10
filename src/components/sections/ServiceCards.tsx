import NextLink from "next/link";
import { Compass, Rocket, Landmark, RefreshCw, type LucideIcon } from "lucide-react";

import { Card } from "@/components/primitives/Card";
import { Icon } from "@/components/primitives/Icon";
import { Reveal } from "@/components/primitives/Reveal";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const SERVICES: Service[] = [
  {
    icon: Compass,
    title: "Enterprise AI strategy",
    description: "Executive interviews, opportunity assessment, governance, and operating model.",
    href: "/services/enterprise-ai-strategy",
  },
  {
    icon: Rocket,
    title: "AI product development",
    description: "From a scoped opportunity to a working prototype an executive can click.",
    href: "/services/ai-prototype-sprint",
  },
  {
    icon: Landmark,
    title: "Government technology",
    description: "AI delivery built for procurement, governance, and public-sector accountability.",
    href: "/industries/government",
  },
  {
    icon: RefreshCw,
    title: "Digital transformation",
    description: "Modernizing how an organization operates, not just what tools it uses.",
    href: "/services",
  },
];

export function ServiceCards() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
        <Reveal>
          <p className="t-body max-w-prose text-fg-muted">
            Most firms sell decks or sell hours. V47 owns the whole path —
            strategy, product, and working implementation.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <NextLink href={service.href} className="block h-full">
                <Card className="flex h-full flex-col gap-4">
                  <Icon icon={service.icon} size={24} className="text-brass-500" />
                  <div>
                    <h3 className="t-h4 text-fg">{service.title}</h3>
                    <p className="t-small mt-2 text-fg-muted">{service.description}</p>
                  </div>
                </Card>
              </NextLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
