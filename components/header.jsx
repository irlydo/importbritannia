import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <span className="text-white font-bold text-xl cursor-pointer">Import Britannia</span>
          </Link>
          <div className="hidden md:flex">
            <ul className="flex space-x-4">
              <li>
                <Link href="/browse">
                  <span className="text-white hover:text-gray-300 cursor-pointer">Request</span>
                </Link>
              </li>
              <li>
                <Link href="/customize">
                  <span className="text-white hover:text-gray-300 cursor-pointer">About</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-white hover:text-gray-300 cursor-pointer">Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <span className="text-white hover:text-gray-300 cursor-pointer">Login / Register</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="/browse">
                  <span className="text-white hover:text-gray-300 cursor-pointer">Browse</span>
                </Link>
              </li>
              <li>
                <Link href="/customize">
                  <span className="text-white hover:text-gray-300 cursor-pointer">Customize</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-white hover:text-gray-300 cursor-pointer">Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <span className="text-white hover:text-gray-300 cursor-pointer">Login / Register</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;