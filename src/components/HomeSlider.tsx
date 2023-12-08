'use client';

import { Post } from '@/services/post';
import Image from 'next/image';
import React, { useCallback, useRef } from 'react';
import Slider from 'react-slick';
import PostItem from './PostItem';

interface IHomeSliderProps {
  posts: Post[];
}

const settings = {
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  cssEase: 'linear',
};
export default function HomeSlider({ posts }: IHomeSliderProps) {
  const slickRef = useRef<Slider | null>(null);

  const previous = useCallback(() => slickRef.current!.slickPrev(), []);
  const next = useCallback(() => slickRef.current!.slickNext(), []);

  return (
    <div className="relative">
      <Slider {...settings} ref={slickRef}>
        {posts.map((p) => (
          <div key={p.path} className="mt-2 pr-5">
            <PostItem post={p} />
          </div>
        ))}
      </Slider>
      <div>
        <div
          className="absolute cursor-pointer left-5 top-[140px]"
          onClick={previous}
        >
          <Image
            width={50}
            height={50}
            src={'/previous-arrow.svg'}
            alt={'pre-arrow'}
          />
        </div>
        <div
          className="absolute cursor-pointer right-8 top-[140px]"
          onClick={next}
        >
          <Image
            width={50}
            height={50}
            src={'/next-arrow.svg'}
            alt={'next-arrow'}
          />
        </div>
      </div>
    </div>
  );
}
