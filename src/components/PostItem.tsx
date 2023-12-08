import { Post } from '@/services/post';
import Image from 'next/image';
import Link from 'next/link';

export default function PostItem({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.path}`}>
      <li className="transition ease-in-out delay-75 hover:scale-105 flex basis-4/12 flex-col m-2 shadow-md cursor-pointer">
        <Image
          width={350}
          height={300}
          src={`/images/posts/${post.path}.png`}
          alt="profile"
        />
        <p className="mt-1 flex justify-end text-sm mr-2">{post.date}</p>
        <div className="flex flex-col items-center">
          <p className="font-bold">{post.title}</p>
          <p>{post.description}</p>
          <p className="mb-5">{post.category}</p>
        </div>
      </li>
    </Link>
  );
}
