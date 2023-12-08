import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: (props) => <h1 {...props} className="mb-4 text-4xl font-bold" />,
    // h2: (props) => <h1 {...props} className="mb-4 text-3xl font-bold" />,
    // li: (props) => <li {...props} className="mb-4 list-disc" />,

    // p: (props) => <p {...props} className="mb-4" />,
    // pre: (props) => (
    //   <pre {...props} className="rounded-lg border-2 border-zinc-500 p-4" />
    // ),
    ...components,
  };
}
