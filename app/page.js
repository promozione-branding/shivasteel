import Image from "next/image";
import Hero from "@/components/Landingpage/Hero";
import About from "@/components/Landingpage/About";
import Products from "@/components/Landingpage/Products.jsx"
import Countup from "@/components/Landingpage/Countup";
import Cta from "@/components/Landingpage/Cta";
import Whoweare from "@/components/Landingpage/Whoweare";
import Whychoose from "@/components/Landingpage/Whychoose";

import Faq from "@/components/Landingpage/Faq";
import TestimonialSlider from "@/components/Landingpage/Testimonials";

import Popup from "@/components/Popup";
// import CityPage from "../components/City";
import Dedicated from "@/components/Landingpage/Dedicated";
import Otherproduct from "@/components/Landingpage/Otherpro";
import Clients from "@/components/Landingpage/Clients";
import Loactions from "@/components/Locations";
import ProductCards from "@/components/Landingpage/Categories";

import IndustriesWeServe from "@/components/Landingpage/Industries";
import CertificateSection from "@/components/Landingpage/Certificate";
export default function Home() {
  return (
    <>
      <Popup></Popup>
      <Hero />
      <Clients/>

      <About />
         <Otherproduct></Otherproduct>
            
   
      <Whychoose></Whychoose>
      <Cta></Cta>
  <Products/>
      <Countup></Countup>
      
      <IndustriesWeServe/>
      <Dedicated></Dedicated>
    
      
         <TestimonialSlider></TestimonialSlider>
      <CertificateSection/>

      {/* <Formsection></Formsection>
      <Process></Process>
      <Whychoose />


      <Faq></Faq> */}
      {/* <Loactions /> */}

      {/* <CityPage /> */}
    </>
  );
}
