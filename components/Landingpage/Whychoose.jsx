import React from 'react'
import Image from 'next/image'
const Whychoose = () => {
  return (
    <div>
      

<section className="py-8 md:py-24 bg-white">
  <div className="w-full mx-auto px-6 lg:px-15">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      
      {/* Left Content */}
      <div>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm uppercase">
         Trust Factor
        </span>

        <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-black leading-tight">
          Your Trusted Steel Supply Partner
        </h2>

        <p className="mt-3 md:mt-8 text-md md:text-xl text-gray-900 leading-relaxed">
          At Shiva Steel Fabricator, we combine quality products, industry
          expertise, and customer-focused service to deliver reliable steel
          solutions for projects of every scale. Whether you require structural
          steel materials for construction, fabrication, engineering, or
          industrial applications, we ensure superior quality, competitive
          pricing, and timely delivery to help keep your projects on track.
        </p>

        <Image className='mt-6' width={700} height={700} src="/whychoose.jpg"></Image>
      </div>

      {/* Right Features */}
      <div className="grid gap-4">
        {[
          {
            title: "Premium Quality Materials",
            description:
              "We supply high-grade steel products that meet industry standards for strength, durability, and performance.",
          },
          {
            title: "Competitive Pricing",
            description:
              "Get the best value for your investment with cost-effective steel solutions without compromising on quality.",
          },
          {
            title: "Extensive Product Range",
            description:
              "From MS Pipes and Plates to Structural Steel Sections, GI & GP Sheets, and Cable Trays, we offer complete steel solutions under one roof.",
          },
          {
            title: "Industry Expertise",
            description:
              "Backed by years of experience, we understand the unique requirements of construction, fabrication, and industrial projects.",
          },
          {
            title: "Customer-Centric Approach",
            description:
              "We prioritize customer satisfaction through responsive support, transparent communication, and dependable service.",
          },
          {
            title: "Trusted Partner for Businesses",
            description:
              "Contractors, fabricators, builders, and industries trust us for quality products and long-term business relationships.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group bg-[#f8f8f8] hover:bg-[#191617] border border-gray-200 rounded-2xl p-6 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
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

export default Whychoose
