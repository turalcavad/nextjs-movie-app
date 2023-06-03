'use client';

import { useEffect, useState } from 'react';
import { Movie } from '../../typing';
import Image from 'next/image';
import { IMAGE_URL } from '../../config';

interface BannerProps {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: BannerProps) => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
  }, [netflixOriginals]);

  if (!movie) return <div>Loading</div>;

  console.log(movie.backdrop_path);

  return (
    <div className="relative h-[95vh]">
      <div className="absolute top-0 left-0 -z-10 h-[92%] w-screen">
        <Image
          style={{
            objectFit: 'fill',
          }}
          className="mask-image"
          src={`${IMAGE_URL}${movie?.backdrop_path || movie?.poster_path}`}
          alt={'Banner'}
          fill={true}
        />

        {movie.title}
      </div>
      <div className="max-w-xs md:max-w-lg lg:max-w-2xl h-full flex flex-col gap-4 justify-center items-start px-4 lg:px-10">
        <h1 className="drop-shadow-lg text-2xl font-bold md:text-4xl lg:text-5xl">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="drop-shadow-lg text-xs text-shadow-md  md:text-lg  lg:text-2xl">{movie?.overview}</p>
        <button className="play-button">Play</button>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
    </div>
  );
};

export default Banner;
