import Image from 'next/image';
import React from 'react';
import { IMAGE_URL } from '../../config';
import { Movie } from '../../typing';

type ThumbnailProps = {
  movie: Movie;
};

const Thumbnail = ({ movie }: ThumbnailProps) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        alt={movie.name}
        src={`${IMAGE_URL}${movie.backdrop_path}`}
        className="rounded-sm object-cover md:rounded"
        fill
      />
    </div>
  );
};

export default Thumbnail;
