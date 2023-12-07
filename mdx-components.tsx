import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  console.log('hello22');
  return {
    h1: (props) => <h1 {...props} className="mb-4 text-4xl font-bold" />,
    h2: (props) => <h1 {...props} className="mb-4 text-3xl font-bold" />,
    p: (props) => <p {...props} className="mb-4" />,
    pre: (props) => (
      <pre {...props} className="rounded-lg border-2 border-zinc-500 p-4" />
    ),
    ...components,
  };
}
