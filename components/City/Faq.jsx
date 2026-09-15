"use client";

import React from "react";

const Faq = ({city}) => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqsData = [
    {
      question: `What types of GI Sheets do you offer in ${city}?`,
      answer:
        `We offer a wide range of GI Sheets in ${city}, including plain GI sheets, corrugated GI sheets, and sheets in various thicknesses and sizes to suit construction, roofing, and fabrication applications.`,
    },
    {
      question: "Are your GI Sheets suitable for industrial and commercial projects?",
      answer:
        "Yes, our GI Sheets are widely used in industrial, commercial, residential, and infrastructure projects due to their durability, corrosion resistance, and long service life.",
    },
    {
      question: "Do you provide GI Sheets in bulk quantities?",
      answer:
        "Yes, we cater to both small and bulk orders, ensuring a reliable supply of GI Sheets for projects of all sizes.",
    },
    {
      question: "Can I get GI Sheets in different sizes and thicknesses?",
      answer:
        "Absolutely. Our GI Sheets are available in multiple thicknesses, widths, and dimensions to meet the specific requirements of your project.",
    },
    {
      question: `Why choose Shiva Steel Fabricator for GI Sheets in ${city}?`,
      answer:
        `Shiva Steel Fabricator is committed to delivering premium-quality GI Sheets in ${city}, competitive pricing, timely delivery, and reliable customer support, making us a trusted choice for construction, fabrication, and industrial needs.`,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <section className="flex flex-col items-center text-center text-slate-800 px-4 py-6 md:py-14 bg-[#F8FAFC]">
        
        {/* Header */}
        <p className="text-sm font-semibold text-[#1a327b] uppercase tracking-widest">
          FAQ
        </p>

        <h2 className="text-2xl md:text-4xl font-bold mt-2">
          Frequently Asked Questions – GI Sheet in {city}
        </h2>

        <p className="text-sm text-slate-500 mt-4 max-w-xl">
          Find answers to common queries about our GI Sheets, specifications,
          availability, and services in {city}.
        </p>

        {/* FAQ List */}
        <div className="max-w-6xl w-full mt-8 flex flex-col gap-4 text-left">
          {faqsData.map((faq, index) => (
            <div key={index} className="flex flex-col w-full">
              
              {/* Question */}
              <div
                className="flex items-center justify-between w-full cursor-pointer bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <h3 className="text-sm md:text-base font-medium">
                  {faq.question}
                </h3>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className={`${
                    openIndex === index ? "rotate-180" : ""
                  } transition-all duration-300`}
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#1D293D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Answer */}
              <p
                className={`text-sm text-gray-600 px-4 transition-all duration-300 ${
                  openIndex === index
                    ? "opacity-100 max-h-[300px] translate-y-0 pt-3"
                    : "opacity-0 max-h-0 -translate-y-2 overflow-hidden"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </section>
    </>
  );
};

export default Faq;