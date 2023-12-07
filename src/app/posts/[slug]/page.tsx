import { getPostMD, getPosts } from '@/services/post';
import dynamic from 'next/dynamic';
import ReactMarkdown from 'react-markdown';
import Example from '@/app/example.mdx';
import rehypeHighlight from 'rehype-highlight';
const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const ImportedMdx = dynamic(() => import('../../../../data/mds/p1.mdx'), {
    ssr: false,
  });
  return (
    <>
      <ImportedMdx />
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.id,
  }));
}
