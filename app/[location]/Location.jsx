"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

import Services from "@/components/City/Services";
import WhychooseCity from "@/components/City/WhychooseCity";
import StatsSection from "@/components/Landingpage/Countup";
import ProductCity from "@/components/City/ProductCity";
import ApplicationsCity from "@/components/City/ApplicationsCity";
import CityCta from "@/components/City/CityCta";
import IndustriesWeServe from "@/components/Landingpage/Industries";
import Faq from "@/components/City/Faq";
import ConstructionCTA from "@/components/Landingpage/Cta";

const cities = [
  "Delhi",
  "Gurugram",
  "Faridabad",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Sonipat",
  "Panipat",
  "Bahadurgarh",
  "Bhiwadi",
  "Neemrana",
  "Dharuhera",
  "Manesar",
  "Kundli",
  "Rai",
  "Murthal",
  "Rohtak",
  "Rewari",
  "Palwal",
  "Hapur",
  "Bulandshahr",
  "Meerut",
  "Modinagar",
  "Khurja",
  "Aligarh",
  "Muzaffarnagar",
  "Shamli",
  "Karnal",
  "Yamunanagar",
  "Ambala",
  "Hisar",
  "Jind",
  "Kaithal",
  "Bawal",
  "Jewar",
  "Dadri",
  "Sikandrabad",
  "Loni",
  "Sahibabad",
  "Tronica City",
  "Surajpur",
  "Kasna",
  "Okhla",
  "Naraina",
  "Mayapuri",
  "Sahibabad Industrial Area",
  "Ecotech",
  "Ganaur",
  "Samalkha",
  "Narela",
];

const Location = () => {
  const params = useParams();
  const router = useRouter();

  const locationParam = Array.isArray(params?.location)
    ? params.location[0]
    : params?.location;

  // Convert URL slug into city name
  const city = locationParam?.includes("-in-")
    ? locationParam
        .split("-in-")[1]
        .split("-")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ")
    : null;

  // Check whether city exists
  const isValidCity = cities.some(
    (item) => item.toLowerCase() === city?.toLowerCase()
  );

  useEffect(() => {
    if (locationParam && !isValidCity) {
      router.replace("/");
    }
  }, [locationParam, isValidCity, router]);

  // Don't render invalid city content
  if (!city || !isValidCity) {
    return null;
  }

  // Get exact city name from array
  const matchedCity = cities.find(
    (item) => item.toLowerCase() === city.toLowerCase()
  );

  return (
    <>
      {/* Hero */}
      <div className="mt-24">
        <section
          style={{
            backgroundImage: "url('/contactbg.jfif')",
          }}
          className="relative z-10 py-20"
        >
          <div className="absolute inset-0 bg-gray-900/60" />

          <h1 className="relative px-5 text-center font-serif text-2xl font-bold leading-snug capitalize text-white md:py-20 md:text-6xl">
            Shiva Steel Fabricator in {matchedCity}
          </h1>
        </section>
      </div>

      <Services city={matchedCity} />

      <WhychooseCity city={matchedCity} />

      <StatsSection />

      <ProductCity city={matchedCity} />

      <ApplicationsCity city={matchedCity} />

      <CityCta city={matchedCity} />

      <IndustriesWeServe />

      <Faq city={matchedCity} />

      <ConstructionCTA />
    </>
  );
};

export default Location;