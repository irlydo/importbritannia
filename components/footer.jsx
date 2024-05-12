import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We build custom gaming PCs tailored to your needs and preferences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-400 hover:text-white cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/browse">
                  <span className="text-gray-400 hover:text-white cursor-pointer">Browse</span>
                </Link>
              </li>
              <li>
                <Link href="/customize">
                  <span className="text-gray-400 hover:text-white cursor-pointer">Customize</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-400 hover:text-white cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq">
                  <span className="text-gray-400 hover:text-white cursor-pointer">FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/shipping">
                  <span className="text-gray-400 hover:text-white cursor-pointer">Shipping</span>
                </Link>
              </li>
              <li>
                <Link href="/returns">
                  <span className="text-gray-400 hover:text-white cursor-pointer">Returns</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              123 Gaming Street<br />
              City, State 12345<br />
              Phone: (123) 456-7890<br />
              Email: info@customgamingpc.com
            </p>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Custom Gaming PC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;