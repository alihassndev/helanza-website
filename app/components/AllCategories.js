import Link from "next/link";
import Image from "next/image";

// This is the list of your main categories
const categories = [
  {
    name: "Tracksuits & Sweatsuits",
    href: "/products/tracksuits",
    image: "/images/tracksuit.png",
  },
  {
    name: "Team Uniforms",
    href: "/products/uniforms",
    image: "/images/uniform.png",
  },
  {
    name: "Jackets",
    href: "/products/jackets",
    image: "/images/jackets.png",
  },
  {
    name: "Ladies Outfits",
    href: "/products/ladies",
    image: "/images/ladies-outfit.png",
  },
  {
    name: "Shortsets & T-Shirts",
    href: "/products/shorts",
    image: "/images/shortset.png",
  },
  {
    name: "Accessories",
    href: "/products/accessories",
    image: "/images/accessories.png",
  },
];

export default function AllCategories() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Full Manufacturing Range
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Explore all the product categories we can produce for your brand.
          </p>
        </div>

        {/* Category Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link href={category.href} key={category.name}>
              <div className="group cursor-pointer relative">
                <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity"
                  />
                  {/* Dark overlay for text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                </div>
                {/* Text on bottom */}
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white z-10">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
