import path from 'path';
import { promises as fs, readFileSync } from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

type PostMatter = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  imagePath: string;
  category: string;
};

export type Post = {
  path: string;
  title: string;
  description: string;
  date: string;
  imagePath: string;
  category: string;
  featured: boolean;
};

export async function getPosts({ onlyFeatured = false }): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFile(filePath, 'utf-8');
  const parsedData: Post[] = JSON.parse(data);
  if (onlyFeatured) {
    return parsedData.filter((post) => post.featured);
  }
  return parsedData;
}

export async function getPostMD(id: string) {
  const filePath = path.join(process.cwd(), 'data', 'mds', 'p1.mdx');
  const data = await fs.readFile(filePath, 'utf-8');

  // const fileContents = readFileSync(filePath, 'utf8');
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(data);
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    matter: matterResult.data,
    content: matterResult.content,
  };
}
