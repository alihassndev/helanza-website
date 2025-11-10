import Link from "next/link";

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
                  href="/#contact-us"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base">
                <a
                  href="mailto:helanzaind@gmail.com"
                  className="text-gray-500 hover:text-gray-900"
                >
                  helanzaind@gmail.com
                </a>
              </li>
              <li className="text-base text-gray-500">Sialkot, Pakistan</li>
            </ul>

            {/* --- Socials Section --- */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-gray-500 tracking-wider uppercase">
                Follow Us
              </h4>
              <div className="flex items-center space-x-4 mt-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61582720753301"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/helanza_ind/"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.667 4.77-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.77-1.69-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.667-4.77 4.919-4.919 1.266-.058 1.646.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                  </svg>
                </a>

                {/* --- 1. NEW, CORRECTED TWITTER SVG --- */}
                <a
                  href="https://x.com/HelanzaInd"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.27 0 .34.04.67.11.98C7.6 9.09 4.03 7.13 1.63 4.16c-.37.64-.58 1.37-.58 2.15 0 1.48.75 2.79 1.9 3.55-.7-.02-1.37-.21-1.95-.54v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.15-1.14.15-.27 0-.54-.03-.8-.08.54 1.7 2.11 2.93 3.97 2.97-1.46 1.14-3.3 1.82-5.3 1.82-.34 0-.68-.02-1.01-.06 1.89 1.21 4.12 1.92 6.56 1.92 7.88 0 12.2-6.54 12.2-12.2 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                {/* --- END NEW SVG --- */}

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/109497124/admin/page-posts/published/"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
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
