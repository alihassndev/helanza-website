import Link from "next/link"; // <--- STEP 1: IMPORT LINK

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Helanza Ind.
            </h3>
            <p className="mt-4 text-base text-gray-500">
              Manufacturing exporter from Sialkot, Pakistan. Your trusted
              partner for custom-made apparel and sportswear.
            </p>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Products
            </h3>
            {/* We will update these links when we build the product pages */}
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/products/tracksuits"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Tracksuits
                </Link>
              </li>
              <li>
                <Link
                  href="/products/uniforms"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Team Uniforms
                </Link>
              </li>
              <li>
                <Link
                  href="/products/jackets"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Jackets
                </Link>
              </li>
              <li>
                <Link
                  href="/products/accessories"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Quick Links
            </h3>
            {/* STEP 2: Changed all <a> tags to <Link> tags */}
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-4">
              {/* For EXTERNAL links (like mailto:), we still use <a> */}
              <li className="text-base text-gray-500">
                Email:{" "}
                <a
                  href="mailto:helanzaind@gmail.com"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  helanzaind@gmail.com
                </a>
              </li>
              <li className="text-base text-gray-500">Sialkot, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Helanza Ind. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
