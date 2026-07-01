"use client";
import React, { useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Link from "next/link";
import Enquiry from "@/components/Enquiry";

const Page = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Flatten all products from all categories
  const allProducts = categories.flatMap((cat) =>
    cat.products?.map((p) => ({ ...p, categoryId: cat.id })),
  );

  

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url('/contactbg.jfif')" }}
        className="w-full bg-cover bg-center h-[30vh]  md:h-[80vh] relative"
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-blue-800 bg-white p-2 text-4xl md:text-7xl font-bold z-10 mt-30 md:mt-20">
            All Products
          </h2>
        </div>
      </section>

      {/* Products Grid */}
      <div className="max-w-7xl px-10 py-10 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <Link
              key={product?.id}
              href={`/products/${product?.id}`}
              className="border w-40 md:w-full rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <Image
                src={product?.image[0]?.src || "/placeholder.png"} // ✅ Use first image or placeholder
                alt={product?.image[0]?.alt || product?.name}
                width={300}
                height={200}
                title={product?.name}
                className="w-full   object-cover"
              />
              <div className="p-3">
                <h2 className="text-lg text-center font-semibold">
                  {product?.name}
                </h2>
                {product?.price && (
                  <p className="text-gray-600">{product?.price}</p>
                )}
              </div>
              <div className="flex justify-center items-center mb-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsFormOpen(true)
                  }}
                  className="bg-blue-700  font-bold px-3 py-2 text-white rounded-2xl"
                >
                  Get a Qoute
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
      </div>
       {isFormOpen && (
              <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
            )}
    </div>
  );
};

export default Page;
