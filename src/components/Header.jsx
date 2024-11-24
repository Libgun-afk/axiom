/** @format */

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">Double Axiom</Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link href="/" className="hover:text-orange-500">
            Нүүр
          </Link>
          <Link href="/about" className="hover:text-orange-500">
            Тухай
          </Link>
          <Link href="/services" className="hover:text-orange-500">
            үйлчилгээ
          </Link>

          <Link href="/contact" className="hover:text-orange-500">
            Холбоо барих
          </Link>
        </nav>
        <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
          Бүртгүүлэх
        </button>
      </div>
    </header>
  );
};

export default Header;
