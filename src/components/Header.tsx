'use client';

import Image from 'next/image';
import React from 'react';
import useScrollLimit from 'src/hooks/useScrollLimit';

const Header = () => {
  const isScrolled = useScrollLimit(80);

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="w-full flex justify-between">
        <div>
          <Image width={100} height={100} src={'/Netflix.svg'} alt="Logo" />
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
