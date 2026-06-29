import Image from "next/image";
import { Settings, ArrowRight } from "lucide-react";

export default function ConstructionCTA() {
  return (
    <section className="relative md:py-5 overflow-hidden bg-black">

      {/* RIGHT IMAGE PANEL */}
      <div className="absolute top-0 right-0 h-full w-full sm:w-[42%] opacity-40 sm:opacity-100">
        <Image
          src="/cta.avif"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* LEFT BLACK PANEL */}
      <div
        className="absolute hidden md:block inset-y-0 left-0 w-full sm:w-[68%] bg-[#050505]"
        style={{
          clipPath: "polygon(0 0, 88% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-6 sm:px-12 py-10 sm:py-0">
        
        <div className="flex flex-col sm:flex-row h-full items-center sm:justify-between gap-6 sm:gap-0">

          {/* LEFT CONTENT */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-10 text-center sm:text-left">

            <Settings
              size={60}
              className="sm:w-[120px] sm:h-[120px] text-blue-600 animate-rotate-slow"
              strokeWidth={1.5}
            />

            <h2 className="max-w-[700px] text-[18px] sm:text-[30px] leading-snug text-white">
              Connect with our steel specialists to discuss your project requirements.
              We offer customized steel products, bulk supply, and dependable nationwide delivery.
            </h2>
          </div>

          {/* CTA BUTTON */}
          <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#0B4F8A] via-[#0A6FB6] to-[#0B8FCC] px-6 sm:px-12 py-3 sm:py-0 h-[50px] sm:h-[70px] text-sm sm:text-[20px] font-bold uppercase text-white transition-all w-full sm:w-auto">
            <ArrowRight size={18} />
            Get Start Today
          </button>

        </div>
      </div>
    </section>
  );
}