"use client";

import AboutPageWhyChoose from "@/components/Landingpage/AboutPageWhyChoose";
import Reveal from "@/components/Landingpage/Reveal";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{ backgroundImage: "url('/bg1.webp')" }}
        className="w-full  bg-cover bg-center h-[50vh] md:h-[90vh] relative"
      >
        <div className="px-5 mt-20 absolute inset-0 text-center flex items-center justify-center ">
          <h2 className=" text-black bg-white p-2 text-2xl md:text-6xl font-bold z-10">
            About Us
          </h2>
        </div>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-6 md:py-15 bg-[#F8FAFC]">
        <div className=" mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className=" text-black">
            <Reveal>
              {" "}
              <h2 className="text-4xl leading-snug font-semibold mb-5">
                Your Trusted Partner for Quality Steel Products & Fabrication
                Solutions
              </h2>
            </Reveal>

            <div className="text-justify text-lg">
              <Reveal>
                <p>
                  Welcome to Shiva Steel Fabricator, a trusted name in the steel
                  industry, dedicated to supplying premium-quality steel
                  products and delivering reliable fabrication solutions for
                  construction, engineering, industrial, and infrastructure
                  projects. With a strong commitment to quality, integrity, and
                  customer satisfaction, we have established ourselves as a
                  preferred supplier for businesses seeking dependable steel
                  materials at competitive prices.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-2">
                  Our extensive product portfolio includes MS Pipes, MS Plates,
                  MS Angles, MS Beams, MS Channels, MS GP Sheets, MS GI Sheets,
                  Chequered Plates, Heavy Plates, Boiler Plates, Cable Trays,
                  and Perforated Cable Trays. Every product we offer is sourced
                  and supplied in accordance with industry standards to ensure
                  exceptional strength, durability, and long-lasting
                  performance.
                </p>
              </Reveal>

              {/* <Reveal delay={0.4}>
                <p>
                  As a reputed Disposable Bio Dustbin Bag Manufacturer, we focus
                  on producing high-quality bags that ensure hygiene, strength,
                  and environmental responsibility. Our bio dustbin bags are
                  widely used in households, offices, hotels, and institutions,
                  helping maintain cleanliness while supporting sustainable
                  waste practices.
                </p>
              </Reveal> */}

              {/* <Reveal delay={0.6}>
                <p>
                  At Sangam Plastic Industries, customer satisfaction,
                  consistent quality, and long-term reliability remain at the
                  core of everything we do. We are committed to being your
                  trusted partner for all waste management and garbage bag
                  manufacturing needs.
                </p>
              </Reveal> */}
            </div>
          </div>

          <Reveal>
            <img src="/bg1.avif" className="w-full h-full" />
          </Reveal>
        </div>
      </section>

      {/* VISION */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 relative  grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <Reveal>
              <h2 className="text-4xl font-semibold mb-5 md:mb-10">
                Our Vision
              </h2>
            </Reveal>

            <div className="border-l-4 text-lg border-blue-600 pl-8 space-y-5 text-gray-600">
              <Reveal>
                <p>
                  Our vision is to establish Shiva Steel Fabricator as a trusted
                  and recognized leader in the steel supply and fabrication
                  industry. We aspire to be known for our commitment to quality,
                  innovation, and excellence while consistently meeting the
                  evolving needs of our customers and industry. We envision
                  contributing to the growth of the construction, engineering,
                  and industrial sectors by supplying reliable steel products
                  and delivering outstanding service. Through continuous
                  improvement, sustainable business practices, and
                  customer-focused solutions, we aim to create long-term value
                  for our clients and business partners.
                </p>
              </Reveal>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <Reveal delay={0.3}>
            <img
              src="/check.jpg"
              className="w-full h-[450px] object-cover bg-emerald-50 rounded-3xl shadow-xl"
            />
          </Reveal>

          {/* <img
            src="/bag/trash.png"
            className="hidden md:block absolute w-60 h-40 right-90 top-0  object-cover "
          /> */}
        </div>
      </section>

      {/* MISSION */}
      <section className="relative py-8 md:py-12 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-200 rounded-full blur-[160px] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 md:mb-12 text-center">
              Our Mission
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            {/* CARD 1 */}
            <Reveal>
              <div className="group relative overflow-hidden bg-white/70 backdrop-blur-md p-10 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-[350px]">
                {/* SLIDING OVERLAY */}
                <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out bg-gradient-to-b from-green-100/40 via-green-50/30 to-transparent backdrop-blur-sm rounded-3xl"></div>

                <span className="absolute top-0 left-0 w-full h-1 bg-blue-600 rounded-t-3xl"></span>

                <div className="relative z-10 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 text-xl font-bold">
                  01
                </div>

                <p className="relative z-10 text-black leading-relaxed text-lg">
                  At Shiva Steel Fabricator, our mission is to provide
                  premium-quality steel products and reliable fabrication
                  solutions that meet the diverse requirements of construction,
                  engineering, manufacturing, and infrastructure projects. We
                  are dedicated to delivering products that combine strength,
                  durability, and value, ensuring every customer receives the
                  highest standard of quality.
                </p>
              </div>
            </Reveal>

            {/* CARD 2 */}
            <Reveal delay={0.2}>
              <div className="group relative overflow-hidden bg-white/70 backdrop-blur-md p-10 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-[350px]">
                {/* SLIDING OVERLAY */}
                <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out bg-gradient-to-b from-green-100/40 via-green-50/30 to-transparent backdrop-blur-sm rounded-3xl"></div>

                <span className="absolute top-0 left-0 w-full h-1 bg-blue-600 rounded-t-3xl"></span>

                <div className="relative z-10 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 text-xl font-bold">
                  02
                </div>

                <p className="relative z-10 text-black leading-relaxed text-lg">
                  We strive to build lasting relationships through exceptional
                  customer service, competitive pricing, and timely delivery. By
                  maintaining professionalism, transparency, and integrity in
                  every aspect of our business, we aim to become the preferred
                  partner for businesses seeking dependable steel solutions.
                </p>
              </div>
            </Reveal>

            {/* CARD 3 */}
            {/* <Reveal delay={0.4}>
              <div className="group relative overflow-hidden bg-white/70 backdrop-blur-md p-10 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-[350px]">
                {/* SLIDING OVERLAY */}
            {/* <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out bg-gradient-to-b from-green-100/40 via-green-50/30 to-transparent backdrop-blur-sm rounded-3xl"></div>

                <span className="absolute top-0 left-0 w-full h-1 bg-green-600 rounded-t-3xl"></span>

                <div className="relative z-10 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600 text-xl font-bold">
                  03
                </div> */}

            {/* <p className="relative z-10 text-black leading-relaxed text-sm">
                  Promoting Sustainability and Innovation: We are committed to
                  environmentally responsible manufacturing by using recyclable
                  materials and sustainable production practices. Through
                  continuous innovation in product design and manufacturing
                  processes, we strive to deliver advanced waste management
                  solutions that support a cleaner, safer, and healthier
                  environment.
                </p> */}
            {/* </div> */}
            {/* </Reveal> */}
          </div>
        </div>
      </section>

     <AboutPageWhyChoose/>

       <section className="relative bg-white py-16 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-slate-200 blur-3xl opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">

         

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            Our Commitment to <span className="text-blue-600">Quality</span>
          </h2>

        </div>

        {/* Content Box */}
        {/* <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-10 border border-slate-100">

          {/* <p className="text-base sm:text-lg leading-7 sm:leading-9 text-slate-600">
            Quality is at the core of everything we do. From sourcing premium-grade materials
            to ensuring timely delivery, we strive to maintain the highest standards in every
            aspect of our business. Our steel products are known for their durability, strength,
            corrosion resistance, and consistent performance, making them suitable for demanding
            industrial and construction applications.
          </p> */}

        {/* </div> */} 

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

          <div className="p-6 rounded-2xl bg-slate-50 text-center">
            <h3 className="text-xl font-bold text-blue-700">Premium Materials</h3>
            <p className="text-slate-600 mt-2 text-sm">
              We source only high-grade steel for long-lasting performance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 text-center">
            <h3 className="text-xl font-bold text-blue-700">Strict Quality Control</h3>
            <p className="text-slate-600 mt-2 text-sm">
              Every product undergoes multiple quality checks before dispatch.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 text-center">
            <h3 className="text-xl font-bold text-blue-700">Reliable Delivery</h3>
            <p className="text-slate-600 mt-2 text-sm">
              Timely and safe delivery across PAN India network.
            </p>
          </div>

        </div>

      </div>
    </section>

      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/bag/cta.jpg"
            alt="Garbage Bags"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />
        </div>

        <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-600/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-[120px]" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 md:mb-6 leading-tight">
                Ready to Build with Quality Steel?
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-white max-w-3xl mx-auto leading-relaxed mb-8 text-md md:text-xl">
                Partner with{" "}
                <span className="text-blue-400 font-medium">
                  Shiva Steel Fabricator
                </span>
                , or premium-quality steel products, competitive pricing, and
                dependable service. Whether you need MS Pipes, MS Plates, GI
                Sheets, GP Sheets, Cable Trays, or other steel products, we're
                here to support your project with timely delivery and trusted
                solutions.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-full font-medium shadow-lg hover:scale-105 duration-300"
                >
                  Request a Quote
                </a>

                <a
                  href="/products"
                  className="px-8 py-4 border border-white/30 hover:border-blue-400 hover:text-blue-400 transition rounded-full font-medium backdrop-blur-md"
                >
                  Explore Our Products
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
