import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import AllCategories from "./components/AllCategories"; // <--- 1. IMPORT IT
import ContactForm from "./components/ContactForm";
import { headers } from "next/headers";
import { products } from "@/data/products";

// --- Our 3 "Smart Packs" ---
const coldPack = [1, 2, 3, 4]; // Puffer, Tracksuit, Versity, Hoodie
const normalPack = [5, 6, 7, 8]; // Leggyset, WindBracker, Soccer, Polo
const hotPack = [9, 10, 11, 12]; // Shortset, Bikini, BasketBall, T-Shirt

function getProductById(id) {
  return products.find((p) => p.id === id);
}

async function getSmartProducts() {
  try {
    const host = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    const response = await fetch(`${host}/api/featured-products`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch smart products");
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.error(error);
    // FALLBACK: If API fails, send the "Normal" pack
    return normalPack.map(getProductById);
  }
}

export default async function Home() {
  const smartProducts = await getSmartProducts();

  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />
      {/* 2. Trust Section (Why Choose Us) */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The Helanza Ind. Advantage
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Your trusted partner for high-quality, custom apparel.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900">
                Genuine Sialkot Factory
              </h3>
              <p className="mt-2 text-base text-gray-500">
                We are a real OEM/ODM factory, not a middleman. We manage your
                entire project from tech pack to final shipment.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900">
                Export-Grade Quality
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Our multi-stage quality control process ensures every garment
                meets international standards, on time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="text-5xl mb-4">🌎</div>
              <h3 className="text-xl font-bold text-gray-900">
                Global Export Expertise
              </h3>
              <p className="mt-2 text-base text-gray-500">
                We handle all logistics and export documentation to get your
                bulk order from our factory to your door.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 3. "Smart" Featured Products Section */}
      <FeaturedProducts products={smartProducts} />
      {/* 4. "All Product Categories" Section */}
      <AllCategories /> {/* <--- 2. ADD IT HERE */}
      {/* 5. Quick Contact Form Section */}
      <ContactForm />
    </main>
  );
}
