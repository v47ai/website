import { Eyebrow } from "@/components/primitives/Eyebrow";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-container flex-1 flex-col items-start justify-center gap-4 px-5 py-32 sm:px-10">
      <Eyebrow>Foundation milestone</Eyebrow>
      <h1 className="t-h1 text-fg">V47</h1>
      <p className="t-body max-w-prose text-fg-muted">
        The design system, layout, and navigation are in place. Homepage
        content ships in the next milestone.
      </p>
    </main>
  );
}
