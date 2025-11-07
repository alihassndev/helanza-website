import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                src="/Helanza-logo-1.png" // This is your logo in the 'public' folder
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

          {/* Menu Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/products">
              <span className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                Products
              </span>
            </Link>
            <Link href="/about">
              <span className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                About Us
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
