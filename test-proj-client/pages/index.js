// pages/index.js
import React from "react";
import ArticleCard from "../components/ArticleCard";
import Link from "next/link";

const Home = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 font-mono">
      <Link href="./article" as="articles">
        <h1 className="text-3xl font-bold pl-4 tracking-tightest hover:text-sky-600 hover:cursor-pointer">
          Latest News
        </h1>
      </Link>

      <div className="flex items-start mb-16">
        <ArticleCard
          id={1}
          image={`/istockphoto-chess-kids.jpg`}
          tag={`Local Events`}
          headline={`SA Junior Chess Championships Kicks Off!!`}
          textContent={`Today marks the day as the beginning of the SAJCC ....`}
        />
        {/* Add more ArticleCard components or other content here */}
      </div>

      <Link href="./tournaments" as="tournaments">
        <h1 className="text-3xl font-bold px-4 tracking-tightest hover:text-sky-600 hover:cursor-pointer">
          Recent Tournaments
        </h1>
      </Link>

      <div className="mb-16">
        <ul className="my-4 pl-4">
          <li className="cursor-pointer bg-gray-400 hover:bg-sky-500 hover:text-gray-600 font-semibold text-gray-900 p-2 mb-1">
            <Link href="/tournaments/1">Polokwane Open 2024</Link>
          </li>
          <li className="cursor-pointer bg-gray-400 hover:bg-sky-500 hover:text-gray-600 font-semibold text-gray-900 p-2 mb-1">
            <Link href="/tournaments/2">Machaba Chess Tournament</Link>
          </li>
          <li className="cursor-pointer bg-gray-400 hover:bg-sky-500 hover:text-gray-600 font-semibold text-gray-900 p-2">
            <Link href="/tournaments/3">Tshakhuma Chess Open 2024</Link>
          </li>
        </ul>
      </div>

      <Link href="./clubs" as="clubs">
        <h1 className="text-3xl font-bold px-4 tracking-tightest hover:text-sky-600 hover:cursor-pointer">
          Clubs
        </h1>
      </Link>

      <div>
        <ul role="list" className="divide-y divide-gray-100 pl-4">
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src="/club-logo1.jpg"
                alt="C"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900 hover:text-sky-600">
                  <Link legacyBehavior href="/clubs/1" as="/clubs/1">Polokwane Chess Club</Link>
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  pcc@gmail.com
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                Flora Park, Polokwane
              </p>
            </div>
          </li>
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src="/club-logo2.jpg"
                alt="C"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900 hover:text-sky-600">
                  <Link legacyBehavior href="/clubs/2" as="/clubs/2">Extension 44 Chess Club</Link>
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  @x44chess (instagram)
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900 ">
                Nkowankowa, Limpopo
              </p>
            </div>
          </li>
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src="/club-logo3.jpg"
                alt="C"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900 hover:text-sky-600">
                  <Link legacyBehavior href="/clubs/3" as="/clubs/3">UL Chess Club</Link>
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  @ulchess (facebook)
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                University of Limpopo Sports Center, Mankweng
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
