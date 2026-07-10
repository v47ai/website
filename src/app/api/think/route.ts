import { NextResponse } from "next/server";

import {
  CHALLENGE_OPTIONS,
  CONSTRAINT_OPTIONS,
  ORG_TYPE_OPTIONS,
  generateBlueprint,
  isConfigured,
  type BlueprintInput,
} from "@/lib/think-with-v47";

const CHALLENGE_VALUES = new Set(CHALLENGE_OPTIONS.map((option) => option.value));
const ORG_TYPE_VALUES = new Set(ORG_TYPE_OPTIONS.map((option) => option.value));
const CONSTRAINT_VALUES = new Set(CONSTRAINT_OPTIONS.map((option) => option.value));

// Minimal in-memory rate limit: this feature costs real money per request.
// Best-effort only — resets on cold start / across serverless instances.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(key, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: Request) {
  if (!isConfigured()) {
    return NextResponse.json(
      { error: "Think With V47 is not configured yet." },
      { status: 503 }
    );
  }

  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Try again shortly." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { challenge, orgType, constraint } = (body ?? {}) as Partial<BlueprintInput>;

  if (
    typeof challenge !== "string" ||
    typeof orgType !== "string" ||
    typeof constraint !== "string" ||
    !CHALLENGE_VALUES.has(challenge as never) ||
    !ORG_TYPE_VALUES.has(orgType as never) ||
    !CONSTRAINT_VALUES.has(constraint as never)
  ) {
    return NextResponse.json({ error: "Invalid selection." }, { status: 400 });
  }

  try {
    const blueprint = await generateBlueprint({
      challenge: challenge as BlueprintInput["challenge"],
      orgType: orgType as BlueprintInput["orgType"],
      constraint: constraint as BlueprintInput["constraint"],
    });
    return NextResponse.json(blueprint);
  } catch (error) {
    console.error("Think With V47 generation failed", error);
    return NextResponse.json({ error: "Could not generate a blueprint right now." }, { status: 502 });
  }
}
