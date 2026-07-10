import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => <h2 className="t-h3 mt-12 text-fg" {...props} />,
  h3: (props) => <h3 className="t-h4 mt-8 text-fg" {...props} />,
  p: (props) => <p className="t-body mt-4 text-fg-muted" {...props} />,
  ul: (props) => <ul className="t-body mt-4 list-disc space-y-2 pl-5 text-fg-muted" {...props} />,
  ol: (props) => <ol className="t-body mt-4 list-decimal space-y-2 pl-5 text-fg-muted" {...props} />,
  a: (props) => (
    <a className="text-interactive underline underline-offset-[3px] hover:text-azure-400" {...props} />
  ),
  strong: (props) => <strong className="text-fg" {...props} />,
};
