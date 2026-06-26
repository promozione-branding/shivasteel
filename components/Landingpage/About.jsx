"use client";

import { useEffect, useState } from "react";

const videos = [
  "/v1.mp4",
   "/v2.mp4",
   "/v3.mp4",
     "/v4.mp4",
       "/v5.mp4",
];

export default function AboutSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % videos.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

 const getPosition = (index) => {
  const pos = (index - active + videos.length) % videos.length;

  switch (pos) {
    case 0:
      // Front
      return {
        z: "z-40",
        scale: "scale-100",
        translate: "translate-x-0 translate-y-0",
        opacity: "opacity-100",
   
      };

    case 1:
      // Second
      return {
        z: "z-30",
        scale: "scale-95",
        translate: "translate-x-20 translate-y-8",
        opacity: "opacity-90",
      
      };

    case 2:
      // Third
      return {
        z: "z-20",
        scale: "scale-90",
        translate: "translate-x-40 translate-y-16",
        opacity: "opacity-75",
        
      };

    case 3:
      // Fourth
      return {
        z: "z-10",
        scale: "scale-[0.85]",
        translate: "translate-x-60 translate-y-24",
        opacity: "opacity-60",
      
      };

    default:
      return {};
  }
};

  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="w-full md:px-20 mx-auto ">

        <div className="grid lg:grid-cols-2 gap-5 items-center">

          {/* LEFT CONTENT */}

          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-[#ff5a1f] font-semibold text-sm">
              ABOUT SHIVA STEEL FABRICATOR
            </span>

            <h2 className="mt-4 text-4xl  font-bold text-slate-900 leading-tight">
              One-Stop Destination for
              <span className="text-[#ff5a1f]">
                {" "}Steel Products &
                Fabrication Solutions
              </span>
            </h2>

            <p className="mt-4 text-black text-lg leading-8 text-justify">
              Welcome to Shiva Steel Fabricator, a trusted name in the
              steel fabrication and supply industry. We specialize in
              providing premium-quality MS Pipe, MS Plate, MS Angle,
              MS Beam, MS Channel, MS GP Sheet, MS GI Sheet,
              Chequered Plates, Heavy Plates, Boiler Plates,
              Cable Tray and Perforated Cable Tray.
            </p>

            <p className="mt-4 text-black text-lg leading-8 text-justify">
              With years of industry experience, we are committed to
              delivering durable steel products, precision fabrication
              solutions and reliable customer service. Our products are
              sourced from reputed manufacturers and meet the highest
              industry standards to ensure strength, performance and
              longevity.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>
                <h4 className="text-4xl font-bold text-[#ff5a1f]">
                  15+
                </h4>
                <p className="text-gray-600">
                  Years Experience
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-[#ff5a1f]">
                  1000+
                </h4>
                <p className="text-gray-600">
                  Projects Delivered
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT VIDEOS */}

          <div className="relative h-[650px] flex items-center mr-13 justify-center">

            {videos.map((video, index) => {
              const pos = getPosition(index);

              return (
              <div
  className={`
    absolute
    w-[450px]
    h-[560px]
    rounded-3xl
    overflow-hidden
    shadow-2xl
    transition-all
    duration-1000
    ease-in-out
    ${pos.z}
    ${pos.scale}
    ${pos.translate}
    ${pos.opacity}
    ${pos.rotate}
  `}
>
                  <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}