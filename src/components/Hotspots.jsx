import React from "react";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const Hotspots = () => {
  const hotspots = [
    { name: "Lekki Phase 1", yield: "5-7%", risk: "Low", price: "₦180-250M" },
    { name: "Ikoyi", yield: "4-6%", risk: "Low", price: "₦300M+" },
    { name: "Victoria Island", yield: "6-8%", risk: "Medium", price: "₦200-400M" },
    { name: "Abuja CBD", yield: "8-10%", risk: "Medium", price: "₦150-300M" },
    { name: "Ikeja GRA", yield: "7-9%", risk: "Medium", price: "₦120-200M" },
    { name: "Port Harcourt GRA", yield: "10-12%", risk: "High", price: "₦80-150M" },
  ];

  return (
    <section id="hotspots" className="py-20 bg-gray-50">
      <div className="container-custom px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Nigerian Property <span className="text-green-600">Hotspots</span>
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Where to invest in Nigeria for maximum returns. Verified data from our portfolio.
          </p>
        </div>

        {/* Grid of hotspots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotspots.map((area, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    area.risk === "Low"
                      ? "bg-green-100 text-green-800"
                      : area.risk === "Medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {area.risk} Risk
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Annual Yield</span>
                  <span className="font-bold text-green-600">{area.yield}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Avg. Price (4-Bed)</span>
                  <span className="font-bold text-gray-900">{area.price}</span>
                </div>
              </div>

              <a
                href={`/listings?area=${encodeURIComponent(area.name)}`}
                className="mt-6 inline-flex items-center gap-2 text-green-700 font-semibold hover:underline"
              >
                View Available Properties <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hotspots;
