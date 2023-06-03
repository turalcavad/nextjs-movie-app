'use client';
import React, { useRef, useState } from 'react';
import { Movie } from '../../typing';
import Thumbnail from 'src/components/Thumbnail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface CategoryRowProps {
  movies: Movie[];
  title: string;
}

const CategoryRow = ({ movies, title }: CategoryRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: string) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (!movies) return <div>Loading</div>;

  return (
    <div className="px-4 lg:px-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="group relative">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
          onClick={() => handleClick('left')}
        />

        <div ref={rowRef} className="group flex gap-1 overflow-x-scroll overflow-y-hidden scrollbar-none space-x-2">
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};

export default CategoryRow;
