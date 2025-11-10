"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// This is a "skeleton" component to show while loading
function LoadingSkeleton() {
  return (
    <div className="w-full aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
  );
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Call our new API route
    fetch("/api/get-products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch featured products:", err);
        setIsLoading(false);
      });
  }, []); // Runs once on load

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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {isLoading ? (
            // If loading, show 4 skeletons
            <>
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
            </>
          ) : (
            // Otherwise, show the products
            products.map((product) => (
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
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
