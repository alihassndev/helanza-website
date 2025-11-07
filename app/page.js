import Hero from "./components/Hero"; // Import our new Hero component

export default function Home() {
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
              <div className="text-5xl mb-4">🏭</div> {/* Icon */}
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
              <div className="text-5xl mb-4">✅</div> {/* Icon */}
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
              <div className="text-5xl mb-4">🌎</div> {/* Icon */}
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

      {/* We will add the "Smart Featured Products" section here next */}
    </main>
  );
}
