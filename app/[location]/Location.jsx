"use client";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Hospital } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Factory,
  Store,
  Hotel,
  Home,
  Leaf,
  Warehouse,
  Truck,
  Tags,
  Handshake,
} from "lucide-react";
import Services from "@/components/City/Services";
import WhychooseCity from "@/components/City/WhychooseCity";
import StatsSection from "@/components/Landingpage/Countup";
import ProductCity from "@/components/City/ProductCity";
import ApplicationsCity from "@/components/City/ApplicationsCity";
import CityCta from "@/components/City/CityCta";
import IndustriesWeServe from "@/components/Landingpage/Industries";
import Faq from "@/components/City/Faq";
import ConstructionCTA from "@/components/Landingpage/Cta";

const Location = () => {
  const params = useParams();

  const city = params?.location?.includes("-in-")
    ? params.location
        .split("-in-")[1]
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "India";



  return (
    <>
      {/* Hero */}
      <div className="mt-24">
        <section
                  style={{ backgroundImage: "url('/contactbg.jfif')" }}

          className="py-20 relative z-10"
        >
          <div className="absolute inset-0 bg-gray-900/60" />

          <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-20 capitalize md:text-6xl">
            Shiva Steel Fabricator in {city}
          </h1>
        </section>
      </div>

      <Services city={city}/>

      <WhychooseCity  city={city}/>

      <StatsSection />

      <ProductCity  city={city}/>
      <ApplicationsCity  city={city}/>

      <CityCta  city={city}/>

      <IndustriesWeServe  />

      <Faq  city={city}/>
      <ConstructionCTA/>

      
    </>
  );
};

export default Location;
