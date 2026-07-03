// components/Testimonials.tsx

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Construction Contractor",
    review:
      "Shiva Steel Fabricator has been our trusted supplier for MS Pipes and MS Plates. Their product quality is consistently excellent, and deliveries are always on time. Highly recommended for construction projects.",
  },
  {
    name: "Amit Sharma",
    role: "Project Manager",
    review:
      "We sourced GI Sheets and Structural Steel materials from Shiva Steel Fabricator for a commercial building project. The quality exceeded our expectations, and the team provided excellent support throughout the process.",
  },
  {
    name: "Vikram Singh",
    role: "Fabrication Business Owner",
    review:
      "The MS Angles, MS Channels, and MS Beams supplied by Shiva Steel Fabricator have always met our fabrication requirements. Their pricing is competitive, and service is professional.",
  },
  {
    name: "Rohit Mehta",
    role: "Electrical Contractor",
    review:
      "The Cable Trays and Perforated Cable Trays supplied by Shiva Steel Fabricator were of superior quality and perfectly suited for our electrical installation project. Great service and quick response times.",
  },
  {
    name: "Neha Gupta",
    role: "Infrastructure Developer",
    review:
      "Excellent experience working with Shiva Steel Fabricator. The products are durable, well-finished, and delivered as promised. Their team understands project requirements and provides suitable solutions.",
  },
  {
    name: "Sanjay Verma",
    role: "Industrial Procurement Head",
    review:
      "We have been purchasing Heavy Plates and Boiler Plates from Shiva Steel Fabricator for several years. Their commitment to quality and timely supply makes them a reliable business partner.",
  },
  {
    name: "Manoj Yadav",
    role: "Warehouse Construction Company",
    review:
      "We required bulk quantities of MS Pipes and GI Sheets for a warehouse project. Shiva Steel Fabricator handled the order efficiently and ensured timely delivery without any issues.",
  },
  {
    name: "Deepak Agarwal",
    role: "Engineering Consultant",
    review:
      "Professional service, quality materials, and competitive pricing. Shiva Steel Fabricator has become our preferred supplier for steel products across multiple engineering and industrial projects.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-10">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm uppercase">
            Client Testimonials
          </span>

          <h2 className="text-3xl mt-4 font-bold text-white md:text-5xl">
            Trusted by Industry Leaders
          </h2>

          <p className="md:mt-5 text-md text-white">
            Delivering premium steel products with reliability, quality, and
            long-term partnerships across construction, infrastructure, and
            industrial projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
            >
              {/* Quote Icon */}
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-amber-500 p-3 shadow-lg shadow-blue-500/20">
                  <Quote className="h-5 w-5 text-white" />
                </div>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>

              {/* Review */}
              <p className="mb-8 text-sm leading-relaxed text-slate-300">
                "{item.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-amber-500 font-bold text-white">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div>
                  <h4 className="font-semibold text-white">{item.name}</h4>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>

  
      </div>
    </section>
  );
}