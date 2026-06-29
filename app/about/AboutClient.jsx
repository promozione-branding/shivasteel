"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Building2,
  Factory,
  HardHat,
  Wrench,
} from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import Otherpro from "@/components/Landingpage/Otherpro"
import { Target, Eye } from "lucide-react";
import Cta from "@/components/Landingpage/Cta"
export default function AboutHero() {







 const industries = [
    {
      icon: <HardHat size={30} />,
      title: "Residential Construction",
    },
    {
      icon: <Building2 size={30} />,
      title: "Commercial Building",
    },
    {
      icon: <Factory size={30} />,
      title: "Industrial Plant",
    },
    {
      icon: <Wrench size={30} />,
      title: "Infrastructure Development",
    },
  ];




  return (


<>



    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/contactbg.jfif" // Replace with your image
          alt="Shiva Steel Fabricator"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-red-950/60" />
      </div>

      {/* Decorative Blur */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-red-600/20 blur-[70px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-red-500/10 blur-[50px]" />

      <div className="relative mx-auto flex h-[100vh] max-w-7xl items-center px-6 py-24">

        <div className="max-w-4xl">

          <span className="inline-flex rounded-full border border-red-500/40 bg-red-600/20 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            About Shiva Steel Fabricator
          </span>

          <h1 className="mt-15 text-4xl font-black leading-tight text-white ">
            Your Trusted Partner for Quality Steel Products &amp; Fabrication
            Solutions
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-white">
            Welcome to Shiva Steel Fabricator, a trusted name in the steel
            industry, dedicated to supplying premium-quality steel products and
            delivering reliable fabrication solutions for construction,
            engineering, industrial, and infrastructure projects. With a strong
            commitment to quality, integrity, and customer satisfaction, we have
            established ourselves as a preferred supplier for businesses seeking
            dependable steel materials at competitive prices.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="rounded-full bg-cyan-700 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-red-700"
            >
              Get Free Quote
            </Link>

            <Link
              href="/products"
              className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>
    </section>



   <section className="relative overflow-hidden bg-white py-10">
      {/* Background Elements */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />

      <div className="relative mx-auto w-full px-24 ">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="overflow-hidden rounded-[35px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <Image
                src="/aboutimg.avif" // Replace with your image
                alt="Shiva Steel Fabricator"
                width={650}
                height={750}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 right-6 rounded-3xl border border-white/60 bg-white/95 p-8 shadow-2xl backdrop-blur-xl">
              <h3 className="text-5xl font-black text-blue-800">
                Premium
              </h3>

              <p className="mt-2 text-lg font-medium text-slate-600">
                Quality Steel Products
              </p>
            </div>

            {/* Decorative Shape */}
            <div className="absolute -left-10 top-12 -z-10 h-64 w-64 rounded-full bg-red-100 blur-3xl" />
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-900">
              About Shiva Steel Fabricator
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-900 ">
              Your Trusted Partner for Quality Steel Products &
              Fabrication Solutions
            </h2>

            {/* YOUR CONTENT - UNCHANGED */}
            <p className="mt-2 text-lg leading-9 text-black text-justify">
              Welcome to Shiva Steel Fabricator, a trusted name in the steel
              industry, dedicated to supplying premium-quality steel products
              and delivering reliable fabrication solutions for construction,
              engineering, industrial, and infrastructure projects. With a
              strong commitment to quality, integrity, and customer
              satisfaction, we have established ourselves as a preferred
              supplier for businesses seeking dependable steel materials at
              competitive prices.  Our extensive product portfolio includes MS Pipes, MS Plates, MS
              Angles, MS Beams, MS Channels, MS GP Sheets, MS GI Sheets,
              Chequered Plates, Heavy Plates, Boiler Plates, Cable Trays, and
              Perforated Cable Trays. Every product we offer is sourced and
              supplied in accordance with industry standards to ensure
              exceptional strength, durability, and long-lasting performance.
            </p>

            

            {/* Feature Cards */}
            <div className="mt-2 grid gap-5 sm:grid-cols-2">
              {[
                "Premium Quality Steel Products",
                "Reliable Fabrication Solutions",
                "Industry Standard Materials",
                "Long-Lasting Performance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-2 hover:border-red-200 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <CheckCircle2 className="text-blue-900" size={22} />
                  </div>

                  <p className="font-semibold leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>


<Otherpro/>

 <section className="relative overflow-hidden bg-slate-50 py-10">
      {/* Background */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-slate-200 blur-3xl" />

      <div className="relative mx-auto w-full px-22">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Content */}
          <div>

            <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-800">
              Who We Are
            </span>

            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-900 ">
              Building Strong Relationships Through Quality Steel
            </h2>

            {/* ===== ORIGINAL CONTENT (UNCHANGED) ===== */}

            <p className="mt-5 text-lg leading-9 text-black text-justify">
              At Shiva Steel Fabricator, we believe that quality materials are
              the foundation of every successful project. Our team works closely
              with contractors, builders, fabricators, engineers, and
              industrial clients to understand their requirements and provide
              the right steel products for every application.
              Whether you require materials for a residential construction
              project, a commercial building, an industrial plant, or
              large-scale infrastructure development, we are committed to
              delivering products that meet your expectations in quality,
              reliability, and value.
            </p>

          

            {/* Industries */}
            <div className="mt-6 grid gap-5 sm:grid-cols-2">

              {industries.map((item, index) => (

                <div
                  key={index}
                  className="group rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-800 transition group-hover:bg-blue-900 group-hover:text-white">
                    {item.icon}
                  </div>

                  <h3 className="mt-2 text-md font-bold text-slate-900">
                    {item.title}
                  </h3>

                </div>

              ))}

            </div>

          </div>

          {/* Image Side */}

          <div className="relative">

            {/* Main Image */}

            <div className="overflow-hidden rounded-[35px] shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

              <Image
                src="/tmt.jpg"
                alt="Who We Are"
                width={1000}
                height={750}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* Floating Card */}

         

            {/* Decorative Card */}

            <div className="absolute -top-6 -right-6 rounded-3xl bg-blue-800 p-8 text-white shadow-2xl">

              <Factory size={45} />

            </div>

          </div>

        </div>

      </div>
    </section>


  <section className="relative overflow-hidden bg-white py-10">
      {/* Background */}
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-60" />
      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-slate-100 blur-3xl opacity-70" />

      <div className="relative mx-auto w-full px-22">

        {/* Heading */}

        <div className="mx-auto mb-8 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-800">
            Our Foundation
          </span>

          <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
            Mission & Vision
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-800" />

        </div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Mission */}

          <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl transition duration-500 hover:-translate-y-3 hover:border-blue-200 hover:shadow-2xl">

            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-50 transition duration-500 group-hover:scale-125" />

            <div className="relative">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-800 text-white shadow-lg">
                <Target size={34} />
              </div>

              <h3 className="mt-5 text-3xl font-black text-slate-900">
                Our Mission
              </h3>

              <div className="mt-3  text-lg leading-9 text-black">

                <p>
                  At Shiva Steel Fabricator, our mission is to provide premium-quality steel products and reliable fabrication solutions that meet the diverse requirements of construction, engineering, manufacturing, and infrastructure projects. We are dedicated to delivering products that combine strength, durability, and value, ensuring every customer receives the highest standard of quality.  We strive to build lasting relationships through exceptional customer service, competitive pricing, and timely delivery. By maintaining professionalism, transparency, and integrity in every aspect of our business, we aim to become the preferred partner for businesses seeking dependable steel solutions.
                </p>

              

              </div>

            </div>

          </div>

          {/* Vision */}

          <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl transition duration-500 hover:-translate-y-3 hover:border-red-200 hover:shadow-2xl">

            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-blue-50 transition duration-500 group-hover:scale-125" />

            <div className="relative">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">
                <Eye size={34} />
              </div>

              <h3 className="mt-5 text-3xl font-black text-slate-900">
                Our Vision
              </h3>

              <div className="mt-4 space-y-6 text-lg leading-9 text-black">

                <p>
                  Our vision is to establish Shiva Steel Fabricator as a trusted and recognized leader in the steel supply and fabrication industry. We aspire to be known for our commitment to quality, innovation, and excellence while consistently meeting the evolving needs of our customers and industry.    We envision contributing to the growth of the construction, engineering, and industrial sectors by supplying reliable steel products and delivering outstanding service. Through continuous improvement, sustainable business practices, and customer-focused solutions, we aim to create long-term value for our clients and business partners.
                </p>

              

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

<Cta/>

</>











  );
}
