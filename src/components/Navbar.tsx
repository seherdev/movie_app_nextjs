// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          🎬 Movie Explorer
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Links - Desktop */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/search" className="hover:text-gray-300">Search</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-lg">
          <Link href="/" className="block hover:text-gray-300">Home</Link>
          <Link href="/search" className="block hover:text-gray-300">Search</Link>
        </div>
      )}
    </nav>
  );
}
