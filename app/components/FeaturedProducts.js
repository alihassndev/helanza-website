import Link from "next/link";
import Image from "next/image";
// We NO LONGER import { featuredProducts } from '@/data/products';

// Notice we now accept "products" as a parameter here
export default function FeaturedProducts({ products }) {
  // If for some reason no products are found, we show a message
  if (!products || products.length === 0) {
    return (
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg text-gray-500">
            Could not load featured products. Please check back later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Products For Your Region
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            A look at our most popular, in-demand items for your weather.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="group cursor-pointer">
                <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-base text-gray-500">
                  From {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
