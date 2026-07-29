import React from 'react'
import Image from 'next/image'
const WhychooseCity = ({city}) => {
  return (
    <div>
      

<section className="py-8  lg:py-12 xl:py-24 bg-white">
  <div className="w-full mx-auto px-6 lg:px-8 xl:px-15">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      
      {/* Left Content */}
      <div>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm uppercase">
         Trust Factor
        </span>

        <h2 className="mt-4 text-3xl xl:text-4xl font-bold text-black leading-tight">
          Why Choose Shiva Steel Fabricators?
        </h2>

        <p className="mt-3 lg:mt-5 xl:mt-8 text-md lg:text-lg xl:text-xl text-gray-900 xl:leading-relaxed">
          Shiva Steel Fabricators is known for offering premium-quality GI Sheets in {city} for construction, roofing, fabrication, and industrial applications. We are committed to providing durable products, competitive prices, and reliable service, making us a trusted choice for businesses and contractors across {city}.
        </p>

        <Image className='mt-6' width={700} height={700} src="/whychoose.jpg"></Image>
      </div>

      {/* Right Features */}
      <div className="grid gap-4">
        {[
          {
            title: "Premium Quality GI Sheets",
            description:
              `We provide high-quality GI Sheets in ${city} that are manufactured to industry standards, ensuring excellent strength, durability, and corrosion resistance.`,
          },
          {
            title: "Competitive Prices",
            description:
              "Our GI Sheets are available at competitive prices, offering cost-effective solutions for residential, commercial, and industrial projects.",
          },
          {
            title: "Bulk Supply",
            description:
              "We efficiently fulfill both small and bulk orders, ensuring a consistent supply of GI Sheets for projects of all sizes.",
          },
          {
            title: "Timely Delivery",
            description:
              `We ensure prompt delivery of GI Sheets in ${city}, helping customers complete their projects on schedule.`,
          },
          {
            title: "Trusted Partner for Businesses",
            description:
              "Contractors, fabricators, builders, and industries trust us for quality products and long-term business relationships.",
          }
          
        ].map((item, index) => (
          <div
            key={index}
            className="group bg-[#f8f8f8] hover:bg-blue-500 border border-gray-200 rounded-2xl p-4 md:p-6 lg:p-4 xl:p-6 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 group-hover:border group-hover:border-white text-white flex items-center justify-center font-bold flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 group-hover:text-gray-300 leading-relaxed lg:leading-6 xl:leading-relaxed transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default WhychooseCity
