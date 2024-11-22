import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">XTRA.</Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link href="/about" className="hover:text-orange-500">
            About
          </Link>
          <Link href="/services" className="hover:text-orange-500">
            Services
          </Link>
          <div className="group relative">
            <span className="hover:text-orange-500 cursor-pointer">FAQ</span>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-md mt-2">
              <Link
                href="/submenu1"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Submenu 1
              </Link>
              <Link
                href="/submenu2"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Submenu 2
              </Link>
            </div>
          </div>
          <Link href="/blog" className="hover:text-orange-500">
            Blog
          </Link>
          <Link href="/shop" className="hover:text-orange-500">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-orange-500">
            Contact
          </Link>
        </nav>

        {/* Button */}
        <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
          Let&apos;s Talk
        </button>
      </div>
    </header>
  );
};

export default Header;
