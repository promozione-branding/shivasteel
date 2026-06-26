import Image from "next/image";
import Hero from "@/components/Landingpage/Hero";
import About from "@/components/Landingpage/About";
import Products from "@/components/Landingpage/Products.jsx"
import Countup from "@/components/Landingpage/Countup";
import Cta from "@/components/Landingpage/Cta";
import Whoweare from "@/components/Landingpage/Whoweare";
import Whychoose from "@/components/Landingpage/Whychoose";
import Process from "@/components/Landingpage/Process";
import Faq from "@/components/Landingpage/Faq";
import TestimonialSlider from "@/components/Landingpage/Testimonials";
import Formsection from "@/components/Landingpage/Formsection";
import Popup from "@/components/Popup";
// import CityPage from "../components/City";
import Dedicated from "@/components/Landingpage/Dedicated";
import Otherproduct from "@/components/Landingpage/Otherpro";
import Pointer from "@/components/Landingpage/Pointer";
import Loactions from "@/components/Locations";
import ProductCards from "@/components/Landingpage/Categories";

import IndustriesWeServe from "@/components/Landingpage/Industries";
export default function Home() {
  return (
    <>
      <Popup></Popup>
      <Hero />

      <About />
         <Otherproduct></Otherproduct>
            
   
      <Whychoose></Whychoose>
      <Cta></Cta>
  <Products/>
      <Countup></Countup>
      
      <IndustriesWeServe/>
      <Dedicated></Dedicated>
      {/* <Pointer></Pointer>
      <Categories />
      <Countup />
      <Whoweare /> */}
      
         <TestimonialSlider></TestimonialSlider>
      

      {/* <Formsection></Formsection>
      <Process></Process>
      <Whychoose />


      <Faq></Faq> */}
      {/* <Loactions /> */}

      {/* <CityPage /> */}
    </>
  );
}
