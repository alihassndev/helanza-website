"use client"; // <--- 1. We MUST make this a client component to handle opening/closing

import { useState } from "react"; // <--- 2. Import useState to track if menu is open
import Link from "next/link";
import Image from "next/image";

// --- 3. We define our complex navigation structure here ---
const navigation = {
  categories: [
    {
      name: "Shortset",
      href: "/products/shortset",
      subItems: [
        { name: "T-Shirts", href: "/products/t-shirts" },
        { name: "Shorts", href: "/products/shorts" },
      ],
    },
    {
      name: "Tracksuit/Sweatsuit",
      href: "/products/tracksuits",
      subItems: [
        { name: "Hoodie", href: "/products/hoodies" },
        { name: "Bottom/Pant", href: "/products/pants" },
      ],
    },
    {
      name: "Jackets",
      href: "/products/jackets",
      subItems: [
        { name: "Puffer/Bubble", href: "/products/puffer-jackets" },
        { name: "Versity/Letterman", href: "/products/varsity-jackets" },
        { name: "WindBracker", href: "/products/windbreakers" },
      ],
    },
    {
      name: "Ladies Outfit",
      href: "/products/ladies",
      subItems: [
        { name: "Leggyset (Leggy, Braw)", href: "/products/leggysets" },
        { name: "Bikini set/Swimsuit", href: "/products/swimsuits" },
        { name: "Stack Bottom", href: "/products/stack-bottoms" },
        { name: "Crop top", href: "/products/croptops" },
      ],
    },
    {
      name: "Uniform",
      href: "/products/uniforms",
      subItems: [
        { name: "American Football", href: "/products/american-football" },
        { name: "Ice-Hockey", href: "/products/ice-hockey" },
        { name: "BaseBall", href: "/products/baseball" },
        { name: "BasketBall", href: "/products/basketball" },
        { name: "Soccer", href: "/products/soccer" },
        { name: "Rugby", href: "/products/rugby" },
      ],
    },
    {
      name: "Accessories",
      href: "/products/accessories",
      subItems: [
        { name: "Socks", href: "/products/socks" },
        { name: "Caps", href: "/products/caps" },
        { name: "Bennies", href: "/products/bennies" },
        { name: "Bags", href: "/products/bags" },
      ],
    },
  ],
  pages: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export default function Header() {
  // --- 4. State to manage the mobile menu open/close ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                src="/Helanza-pic.png"
                alt="Helanza Ind. Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <span className="font-extrabold text-2xl tracking-tight text-gray-900">
                Helanza Ind.
              </span>
            </div>
          </Link>

          {/* --- 5. Desktop Menu (Hidden on mobile) --- */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                Home
              </span>
            </Link>

            {/* --- 6. Products Megamenu (Desktop) --- */}
            <div className="relative group">
              <Link href="/products">
                <span className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer flex items-center">
                  Products
                  {/* Dropdown Arrow */}
                  <svg
                    className="ml-1 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>

              {/* This is the hidden megamenu panel */}
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-4xl px-4
                              hidden group-hover:block z-50 transition-opacity duration-300"
              >
                <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                  <div className="grid grid-cols-3 gap-y-8 gap-x-6 p-8">
                    {/* We map over our 6 categories and split them into 3 columns */}
                    {navigation.categories.slice(0, 3).map((category) => (
                      <div key={category.name}>
                        <Link
                          href={category.href}
                          className="text-base font-bold text-gray-900 hover:text-yellow-500 block"
                        >
                          {category.name}
                        </Link>
                        <ul className="mt-3 space-y-2">
                          {category.subItems.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="text-sm text-gray-500 hover:text-gray-900"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {navigation.categories.slice(3, 6).map((category) => (
                      <div key={category.name}>
                        <Link
                          href={category.href}
                          className="text-base font-bold text-gray-900 hover:text-yellow-500 block"
                        >
                          {category.name}
                        </Link>
                        <ul className="mt-3 space-y-2">
                          {category.subItems.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="text-sm text-gray-500 hover:text-gray-900"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about">
              <span className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                About Us
              </span>
            </Link>
            <Link href="/#contact-us">
              <span className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                Contact Us
              </span>
            </Link>
          </div>

          {/* --- 7. Mobile Menu Button (Hamburger) --- */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* --- 8. Mobile Menu (Fullscreen) --- */}
      {/* This section is hidden by default and only shows when 'isMobileMenuOpen' is true */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-4 md:hidden">
          <div className="flex justify-between items-center h-20 border-b border-gray-200">
            {/* Logo in mobile menu */}
            <Link href="/">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image
                  src="/Helanza-logo-1.png"
                  alt="Helanza Ind. Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="font-extrabold text-2xl tracking-tight text-gray-900">
                  Helanza Ind.
                </span>
              </div>
            </Link>
            {/* Close Button (X) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Close menu</span>
              {/* Close Icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile navigation links */}
          <div className="mt-6 space-y-4">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium text-gray-900 hover:text-yellow-500"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium text-gray-900 hover:text-yellow-500"
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium text-gray-900 hover:text-yellow-500"
            >
              Contact Us
            </Link>

            {/* Product categories in mobile menu */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-base font-semibold text-gray-500 uppercase tracking-wider">
                Products
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {navigation.categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-gray-900 hover:text-yellow-500"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
