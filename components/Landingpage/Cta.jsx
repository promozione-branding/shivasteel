import Image from "next/image";
import { Settings, ArrowRight } from "lucide-react";

export default function ConstructionCTA() {
  return (
    <section className="relative h-[250px] overflow-hidden bg-black">
      {/* RIGHT IMAGE PANEL */}
      <div className="absolute top-0 right-0 h-full w-[42%]">

        <Image
          src="/cta.avif"
          alt=""
          fill
          className="object-cover"
        />

      
      </div>

      {/* LEFT BLACK PANEL WITH DIAGONAL CUT */}
      <div
        className="absolute inset-y-0 left-0 w-[68%] bg-[#050505]"
        style={{
          clipPath: "polygon(0 0, 88% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-20 h-full max-w-[1600px] mx-auto px-12">
        <div className="flex h-full items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-10">
            <Settings
              size={120}
              
              className="text-blue-600 animate-rotate-slow"
              strokeWidth={1.5}
            />

            <h2 className="max-w-[700px] text-[30px] leading-[1.1]  text-white">
   Connect with our steel specialists to discuss your project requirements. We offer customized steel products, bulk supply, and dependable nationwide delivery.
            </h2>
          </div>

          {/* CTA */}
          <button className="mr-20 flex h-[70px] items-center gap-4 bg-gradient-to-r from-[#0B4F8A] via-[#0A6FB6] to-[#0B8FCC] px-12 text-[20px] font-bold uppercase text-white transition-all ">
            <ArrowRight size={22} />
            Get Start Today
          </button>
        </div>
      </div>
    </section>
  );
}