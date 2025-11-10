import Image from "next/image";
import CompanyOverview from "../components/CompanyOverview"; // We still use this
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* 1. Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Helanza Ind.
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Your Direct Manufacturing Partner in Sialkot, Pakistan.
          </p>
        </div>
      </section>

      {/* 2. NEW: A Personal Message From the Founder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Founder Photo */}
            <div className="md:col-span-1 text-center">
              <Image
                src="/images/ali.png" // Placeholder for YOUR photo
                alt="Founder of Helanza Ind."
                width={400}
                height={400}
                className="w-64 h-64 mx-auto rounded-full object-cover shadow-lg"
              />
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Ali Hassan
              </h3>
              <p className="text-lg text-yellow-500 font-semibold">
                Founder & Proprietor
              </p>
            </div>

            {/* Founder's Story & Message */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-extrabold text-gray-900">
                A Partner, Not Just a Supplier
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                "Hello, I'm Ali Hassan, the founder of Helanza Ind. I started
                this company in Sialkot, Pakistan, with one mission: to give
                global brands a direct, honest, and high-quality manufacturing
                partner.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                In this industry, your biggest problem is being passed around to
                a big team or talking to someone who can't make decisions. **My
                business is different.**
              </p>
              <p className="mt-4 text-lg text-gray-500">
                When you partner with Helanza Ind., you work **directly with
                me.** From your first sample to your final shipment, I
                personally oversee your project. This means you get fast
                answers, direct accountability, and a partner who is 100%
                invested in your success."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Facility & Process (MERGED) */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Facility
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Where your designs come to life.
            </p>
          </div>
          {/* Factory Image */}
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden mt-16">
            <Image
              src="/images/placeholder.png" // Placeholder for your factory
              alt="Helanza Ind. Factory Floor"
              width={1200}
              height={600}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>
      {/* We put the dark "Overview" section right after */}
      <CompanyOverview />

      {/* 4. Our Partner Commitment */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Our Commitment to You
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            We work with a diverse range of global clients, from new startups to
            established brands. We maintain strict non-disclosure agreements
            (NDAs) to protect our clients' unique designs and confidentiality.
          </p>
        </div>
      </section>

      {/* 5. Final Call to Action (CTA) */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Ready to Work With a Direct Partner?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Let's discuss your project. I'm ready to become your long-term
            manufacturing partner.
          </p>
          <div className="mt-8">
            <Link href="/#contact-us">
              <span className="inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 cursor-pointer">
                Get a Quote Today
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
