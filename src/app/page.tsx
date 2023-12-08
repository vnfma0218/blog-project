import HomeSlider from '@/components/HomeSlider';
import PostItem from '@/components/PostItem';
import { Post, getPosts } from '@/services/post';
import Image from 'next/image';

export default async function Home() {
  const postList = await getPosts({ onlyFeatured: true });

  const filteredPosts = (posts: Post[], onlyFeatured: boolean) => {
    if (onlyFeatured) {
      return posts.filter((p) => p.featured);
    } else {
      return posts;
    }
  };

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
        <ul className="justify-center flex flex-wrap justify-start ">
          {postList &&
            filteredPosts(postList, true).map((post) => (
              <PostItem post={post} key={post.path} />
            ))}
        </ul>
      </article>
      <article>
        <p className="mt-10 text-xl font-bold">Featured Posts</p>
        <HomeSlider posts={filteredPosts(postList, false)} />
      </article>
    </main>
  );
}
