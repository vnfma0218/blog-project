import { getPosts } from '@/services/post';
import dynamic from 'next/dynamic';

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const ImportedMdx = dynamic(
    () => import(`../../../../data/mds/${params.slug}.mdx`),
    {
      ssr: false,
    }
  );
  return (
    <div className="prose">
      <ImportedMdx />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts({ onlyFeatured: false });

  return posts.map((post) => ({
    slug: post.path,
  }));
}
