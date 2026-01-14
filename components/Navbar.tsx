"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white sticky top-0 z-50 shadow-l">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-3xl font-extrabold text-blue-50">
            CarHub
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex text-gray-400 items-center gap-8">
            <Link
              href="/about"
              className="hover:text-gray-100 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/community"
              className="hover:text-gray-100 transition-colors"
            >
              Community
            </Link>
            <Link
              href="/sell"
              className="hover:text-gray-100 transition-colors"
            >
              Sell a Car
            </Link>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="items-center hidden md:flex gap-6 borde min-w-xl">
          <div className="flex items-center bg-zinc-800 rounded-lg px-5 py-3 flex-1 mx8 gap-5 max-w-md w-full">
              <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search for cars (ex. BMW, Audi, Ford)"
              className="bg-zinc-800 text-white placeholder-gray-400 outline-none flex-1"
            />
          </div>
              <button className="btn-signup px-6 py-3 rounded-lg font-semibold transition-colors">
                Sign Up
              </button>

          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-3">
            {/* <button className="flex hidden items-center gap-2 hover:text-blue-500 transition-colors">
              <Search size={20} />
              </button> */}
          </div>

          {/* Mobile - Search and Signup always visible */}
          <div className="md:hidden flex items-center gap-4">
            <button className="p-2 hover:text-blue-500 transition-colors">
              <Search size={20} />
            </button>
            <button className="btn-signup px-2 py-1 text-gray-700 rounded-lg transition-colors text-sm">
              Sign Up
            </button>
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-95 top-16 z-40">
          <div className="flex flex-col items-center justify-start pt-16 space-y-8">
            <Link
              href="/about"
              className="text-2xl font-semibold hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/community"
              className="text-2xl font-semibold hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/sell"
              className="text-2xl font-semibold hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sell a Car
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
