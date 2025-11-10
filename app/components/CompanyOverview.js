import Image from "next/image";
import Link from "next/link";

const processes = [
  {
    name: "Cutting",
    image: "/images/cutting.png",
  },
  {
    name: "Stitching",
    image: "/images/stitching.png",
  },
  {
    name: "Quality",
    image: "/images/quality.png",
  },
  {
    name: "Packing",
    image: "/images/packing.png",
  },
  {
    name: "Shipping",
    image: "/images/shipping.png",
  },
];

export default function CompanyOverview() {
  return (
    <section className="py-20">
      {" "}
      {/* Dark background like your image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Company Overview
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>{" "}
          {/* Accent line */}
        </div>

        {/* Process Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {" "}
          {/* gap-0.5 for thin lines */}
          {processes.map((process) => (
            <div key={process.name} className="group relative h-64">
              {/* Image */}
              <Image
                src={process.image}
                alt={process.name}
                fill
                style={{ objectFit: "cover" }}
                className="w-full h-full"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity"></div>
              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-extrabold text-white uppercase tracking-wider">
                  {process.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
