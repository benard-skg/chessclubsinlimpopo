// components/Navbar.js
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false || null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 font-mono">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link legacyBehavior href="/">
          <a
            href="/"
            className="text-white text-xl font-semibold tracking-tighter"
          >
            ChessClubsinLimpopo
          </a>
          </Link>
          
        </div>

        {/* Toggle button for small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation links */}
        <div className={`md:flex ${isMenuOpen ? "flex-col" : "hidden"}`}>
          <a href="/article" className="text-white md:ml-4 block md:inline-block">
            News
          </a>
          <a href="/tournaments" className="text-white md:ml-4 block md:inline-block">
            Tournaments
          </a>
          <a href="/clubs" className="text-white md:ml-4 block md:inline-block">
            Clubs
          </a>
          <a href="#" className="text-white md:ml-4 block md:inline-block">
            Games
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
