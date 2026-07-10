import Anthropic from "@anthropic-ai/sdk";

export const CHALLENGE_OPTIONS = [
  { value: "citizen-services", label: "Automating citizen or public service requests" },
  { value: "internal-ops", label: "Modernizing an internal operations process" },
  { value: "customer-support", label: "Reducing customer/citizen support load with AI" },
  { value: "data-fragmentation", label: "Unifying fragmented data for reporting or decisions" },
  { value: "procurement", label: "Streamlining a procurement or approval workflow" },
] as const;

export const ORG_TYPE_OPTIONS = [
  { value: "government", label: "Government / public sector" },
  { value: "financial-services", label: "Financial services" },
  { value: "healthcare", label: "Healthcare" },
  { value: "real-estate", label: "Real estate" },
  { value: "enterprise", label: "Large enterprise (other)" },
] as const;

export const CONSTRAINT_OPTIONS = [
  { value: "data-privacy", label: "Strict data privacy / residency requirements" },
  { value: "legacy-systems", label: "Heavy reliance on legacy systems" },
  { value: "procurement-timeline", label: "Slow procurement / long approval timelines" },
  { value: "limited-ai-maturity", label: "Limited in-house AI maturity" },
] as const;

export type ChallengeValue = (typeof CHALLENGE_OPTIONS)[number]["value"];
export type OrgTypeValue = (typeof ORG_TYPE_OPTIONS)[number]["value"];
export type ConstraintValue = (typeof CONSTRAINT_OPTIONS)[number]["value"];

export interface BlueprintInput {
  challenge: ChallengeValue;
  orgType: OrgTypeValue;
  constraint: ConstraintValue;
}

export interface RoadmapStep {
  stage: string;
  description: string;
}

export interface Blueprint {
  executiveSummary: string;
  suggestedArchitecture: string[];
  technologyOptions: string[];
  roadmap: RoadmapStep[];
  deliveryRisks: string[];
  procurementConsiderations: string[];
}

const BLUEPRINT_SCHEMA = {
  type: "object",
  properties: {
    executiveSummary: { type: "string" },
    suggestedArchitecture: { type: "array", items: { type: "string" } },
    technologyOptions: { type: "array", items: { type: "string" } },
    roadmap: {
      type: "array",
      items: {
        type: "object",
        properties: {
          stage: { type: "string" },
          description: { type: "string" },
        },
        required: ["stage", "description"],
        additionalProperties: false,
      },
    },
    deliveryRisks: { type: "array", items: { type: "string" } },
    procurementConsiderations: { type: "array", items: { type: "string" } },
  },
  required: [
    "executiveSummary",
    "suggestedArchitecture",
    "technologyOptions",
    "roadmap",
    "deliveryRisks",
    "procurementConsiderations",
  ],
  additionalProperties: false,
} as const;

function findLabel<T extends { value: string; label: string }>(options: readonly T[], value: string) {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function isConfigured() {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

export async function generateBlueprint(input: BlueprintInput): Promise<Blueprint> {
  const client = new Anthropic();

  const challengeLabel = findLabel(CHALLENGE_OPTIONS, input.challenge);
  const orgTypeLabel = findLabel(ORG_TYPE_OPTIONS, input.orgType);
  const constraintLabel = findLabel(CONSTRAINT_OPTIONS, input.constraint);

  const response = await client.messages.parse({
    model: "claude-opus-4-8",
    max_tokens: 4096,
    output_config: {
      effort: "medium",
      format: { type: "json_schema", schema: BLUEPRINT_SCHEMA },
    },
    system:
      "You are V47, a boutique AI consulting practice for GCC governments and enterprises. " +
      "Draft a short, honest, illustrative AI architecture blueprint for a prospective client, in V47's voice: " +
      "precise, candid, no hype, no banned buzzwords (leading, cutting-edge, revolutionary, world-class, " +
      "game-changing, next-gen, seamless, synergy, unlock, empower, robust, leverage, solutions-as-catch-all). " +
      "This is a starting point for a discovery conversation, not a delivered proposal or a quote — " +
      "never state or imply specific costs, timelines in exact weeks/months, team sizes, or guaranteed outcomes. " +
      "Keep the roadmap to V47's real six-stage method: Discover, Prioritize, Prototype, Validate, Deploy, Scale.",
    messages: [
      {
        role: "user",
        content:
          `Draft an illustrative blueprint for: "${challengeLabel}" ` +
          `at a "${orgTypeLabel}" organization, with the constraint "${constraintLabel}". ` +
          "Keep every list to 3-5 concise items. No cost figures, no exact timelines, no fabricated client names.",
      },
    ],
  });

  if (!response.parsed_output) {
    throw new Error("Blueprint generation did not return structured output");
  }

  return response.parsed_output as Blueprint;
}
