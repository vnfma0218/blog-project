import { getPosts } from '@/services/post';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const postList = await getPosts();

  return (
    <main>
      <article className="flex flex-col items-center">
        <div className="rounded-full overflow-hidden">
          <Image
            width={300}
            height={300}
            src={'/images/profile.jpg'}
            alt="profile"
          />
        </div>
        <p className="mt-4 font-bold text-xl">Hi, I'm Pooreum</p>
        <p>Front-end developer</p>
        <p>개발을 즐기는 사람</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-1">
          Contact Me
        </button>
      </article>
      <article>
        <p className="mt-10 text-xl font-bold">Featured Posts</p>
        <ul className="flex">
          {postList.map((post) => (
            <Link href={`/posts/${post.id}`}>
              <li className="transition ease-in-out delay-75 hover:scale-105 flex basis-1/3 flex-col m-2 shadow-md cursor-pointer">
                <Image
                  width={400}
                  height={300}
                  src={post.imagePath}
                  alt="profile"
                />
                <p className="mt-1 flex justify-end text-sm mr-2">
                  {' '}
                  {post.createdAt}
                </p>
                <div className="flex flex-col items-center">
                  <p className="font-bold">{post.title}</p>
                  <p>{post.content}</p>
                  <p className="mb-5">{post.category}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </article>
    </main>
  );
}
