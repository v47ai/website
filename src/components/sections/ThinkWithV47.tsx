"use client";

import { useState } from "react";
import NextLink from "next/link";

import {
  CHALLENGE_OPTIONS,
  CONSTRAINT_OPTIONS,
  ORG_TYPE_OPTIONS,
  type Blueprint,
  type ChallengeValue,
  type ConstraintValue,
  type OrgTypeValue,
} from "@/lib/think-with-v47";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";
import { buttonVariants } from "@/components/primitives/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "error" | "done" | "unconfigured";

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly { value: string; label: string }[];
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="t-small text-fg-muted">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-11 rounded-sm border border-border bg-surface px-3 text-fg"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function ThinkWithV47() {
  const [challenge, setChallenge] = useState<ChallengeValue>(CHALLENGE_OPTIONS[0].value);
  const [orgType, setOrgType] = useState<OrgTypeValue>(ORG_TYPE_OPTIONS[0].value);
  const [constraint, setConstraint] = useState<ConstraintValue>(CONSTRAINT_OPTIONS[0].value);
  const [status, setStatus] = useState<Status>("idle");
  const [blueprint, setBlueprint] = useState<Blueprint | null>(null);

  async function onGenerate() {
    setStatus("loading");
    setBlueprint(null);
    try {
      const response = await fetch("/api/think", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ challenge, orgType, constraint }),
      });
      if (response.status === 503) {
        setStatus("unconfigured");
        return;
      }
      if (!response.ok) {
        setStatus("error");
        return;
      }
      const data: Blueprint = await response.json();
      setBlueprint(data);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
        <Reveal>
          <Eyebrow>Think with V47</Eyebrow>
          <h2 className="t-h2 mt-2 text-fg">See how we&apos;d approach your problem.</h2>
          <p className="t-body mt-2 max-w-prose text-fg-muted">
            A live, scoped preview of our discovery thinking — not a quote, not a
            commitment. Pick the closest fit and generate an illustrative starting point.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Select label="Challenge" value={challenge} onChange={(v) => setChallenge(v as ChallengeValue)} options={CHALLENGE_OPTIONS} />
            <Select label="Organization type" value={orgType} onChange={(v) => setOrgType(v as OrgTypeValue)} options={ORG_TYPE_OPTIONS} />
            <Select label="Primary constraint" value={constraint} onChange={(v) => setConstraint(v as ConstraintValue)} options={CONSTRAINT_OPTIONS} />
          </div>

          <button
            type="button"
            onClick={onGenerate}
            disabled={status === "loading"}
            className={cn(buttonVariants({ variant: "primary" }), "mt-6")}
          >
            {status === "loading" ? "Generating…" : "Generate a blueprint"}
          </button>
        </Reveal>

        {status === "unconfigured" && (
          <p className="t-caption mt-6 max-w-prose rounded-sm border border-border bg-surface px-4 py-3 text-fg-subtle">
            This feature is built but not yet switched on — it needs an API key
            configured. Check back soon, or{" "}
            <NextLink href="/contact" className="text-interactive underline underline-offset-[3px]">
              book a session
            </NextLink>{" "}
            in the meantime.
          </p>
        )}

        {status === "error" && (
          <p className="t-caption mt-6 max-w-prose rounded-sm border border-danger/40 bg-surface px-4 py-3 text-danger">
            Couldn&apos;t generate a blueprint right now. Try again in a moment.
          </p>
        )}

        {blueprint && (
          <Reveal delay={0.05}>
            <Card className="mt-8 flex flex-col gap-6">
              <p className="t-caption rounded-sm border border-border bg-bg px-4 py-3 text-fg-subtle">
                Illustrative starting point, not a quote or a commitment. Scoped
                detail only follows a real discovery session.
              </p>

              <div>
                <h3 className="t-h4 text-fg">Executive summary</h3>
                <p className="t-body mt-2 text-fg-muted">{blueprint.executiveSummary}</p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="t-h4 text-fg">Suggested architecture</h3>
                  <ul className="t-small mt-2 list-disc space-y-1 pl-5 text-fg-muted">
                    {blueprint.suggestedArchitecture.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="t-h4 text-fg">Technology options</h3>
                  <ul className="t-small mt-2 list-disc space-y-1 pl-5 text-fg-muted">
                    {blueprint.technologyOptions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="t-h4 text-fg">Roadmap</h3>
                <ol className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {blueprint.roadmap.map((step, index) => (
                    <li key={step.stage} className="border-t-2 border-border pt-3">
                      <span className="t-caption text-fg-subtle">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="t-small mt-1 text-fg">{step.stage}</p>
                      <p className="t-caption mt-1 text-fg-subtle">{step.description}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="t-h4 text-fg">Delivery risks</h3>
                  <ul className="t-small mt-2 list-disc space-y-1 pl-5 text-fg-muted">
                    {blueprint.deliveryRisks.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="t-h4 text-fg">Procurement considerations</h3>
                  <ul className="t-small mt-2 list-disc space-y-1 pl-5 text-fg-muted">
                    {blueprint.procurementConsiderations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <NextLink href="/contact" className={buttonVariants({ variant: "primary", className: "self-start" })}>
                Book a discovery session
              </NextLink>
            </Card>
          </Reveal>
        )}
      </div>
    </section>
  );
}
