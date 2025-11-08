"use client"; // This is very important. It tells Next.js this is an interactive component.

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// We define our slides here
const slides = [
  {
    image: "/images/hero-slide-1.png", // We'll add these placeholder images soon
    headline: "Your Premier Partner in Custom Apparel",
    subtext:
      "High-quality manufacturing exporter from Sialkot, Pakistan. We bring your designs to life.",
    cta: "Start Your Project",
    link: "/contact",
  },
  {
    image: "/images/hero-slide-2.png",
    headline: "Custom Tracksuits & Sweatsuits",
    subtext:
      "Full OEM/ODM service for premium fleece, polyester, and cut-and-sew designs.",
    cta: "See Tracksuit Options",
    link: "/products/tracksuits",
  },
  {
    image: "/images/hero-slide-3.png",
    headline: "Sublimated Team Uniforms",
    subtext:
      "Vibrant, custom-designed kits for soccer, basketball, baseball, and more. Exported globally.",
    cta: "Inquire About Uniforms",
    link: "/products/uniforms",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  // Auto-play feature
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 6000); // Change slide every 6 seconds
    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, [currentSlide]);

  return (
    <section className="relative h-[80vh] overflow-hidden bg-gray-900">
      <div className="relative h-full">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.headline}
              fill // <-- This replaces 'layout="fill"'
              style={{ objectFit: "cover" }} // <-- This replaces 'objectFit="cover"'
              className="z-0"
              priority={index === 0} // Load the first image faster
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {slide.headline}
                </h1>
                <p className="mt-6 text-xl text-gray-200">{slide.subtext}</p>
                <div className="mt-10">
                  <Link href={slide.link}>
                    <span className="inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 cursor-pointer">
                      {slide.cta}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 z-30 -translate-y-1/2 bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-50"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 z-30 -translate-y-1/2 bg-black bg-opacity-30 p-4 text-white hover:bg-opacity-50"
      >
        &#10095;
      </button>
    </section>
  );
}
