"use client";

import React from "react";

const ApplicationsCity = ({city}) => {
  const applications = [
    {
      title: "Roofing & Cladding",
      desc: "GI Sheets are extensively used for roofing and wall cladding in residential, commercial, and industrial buildings, providing excellent weather protection and durability.",
    },
    {
      title: "Industrial Sheds",
      desc: "Their high strength and corrosion resistance make GI Sheets an ideal material for manufacturing warehouses, factories, workshops, and industrial sheds.",
    },
    {
      title: "Fabrication Projects",
      desc: "GI Sheets are widely used in fabrication work for creating cabinets, enclosures, storage units, machinery components, and structural products.",
    },
    {
      title: "HVAC & Ventilation Systems",
      desc: "With their durability and easy workability, GI Sheets are commonly used in HVAC ducting, ventilation systems, and air-conditioning installations.",
    },
    {
      title: "Agricultural Structures",
      desc: "GI Sheets are suitable for poultry farms, storage sheds, fencing, and other agricultural applications due to their long service life and resistance to harsh weather conditions.",
    },
    {
      title: "Commercial & Infrastructure Projects",
      desc: "From shopping complexes and office buildings to public infrastructure projects, GI Sheets provide reliable performance for a wide range of construction applications.",
    },
  ];

  return (
    <section className="w-full px-4 md:px-6 py-6 md:py-14 bg-[#F8FAFC]">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Applications of GI Sheets
        </h2>

        <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
          GI Sheets are widely used across residential, commercial, and industrial sectors due to their exceptional strength, corrosion resistance, and long-lasting performance. At Shiva Steel Fabricator, our premium-quality GI Sheets in {city} are designed to meet the diverse requirements of construction, fabrication, and engineering projects.
        </p>
      </div>

      {/* Applications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-7xl mx-auto">
        
        {applications.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-3 md:p-5 shadow-sm hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-semibold text-[#1a327b] mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default ApplicationsCity;