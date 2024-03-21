// components/ArticleCard.js
import React from 'react';
import Link from 'next/link';

const ArticleCard = ({ id, image, tag, headline, textContent }) => {
  return (
    <div className="font-mono max-w-md mx-4 bg-white rounded-sm shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <Link legacyBehavior href={`/article/${[id]}`} as={`/article/${[id]}`}>
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={image}
            alt="Article Image"
          />
        </div>
        </Link>
        
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {tag}
          </div>
          <Link legacyBehavior href={`/article/${[id]}`} as={`/article/${[id]}`}>
          <a
            href="#"
            className="hover:text-sky-600 block mt-1 text-lg leading-tight font-medium text-black "
          >
            {headline}
          </a>
          </Link>
          <p className="mt-2 text-gray-500">
            {textContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
