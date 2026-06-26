import Image from "next/image";
import {
  CheckCircle2,
  BadgeCheck,
  Truck,
  PackageCheck,
  Handshake,
  Briefcase,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: BadgeCheck,
      title: "Quality Assured Products",
      description:
        "Supplying premium-grade steel products that meet industry standards for strength, durability, and performance.",
    },
    {
      icon: CheckCircle2,
      title: "Competitive Pricing",
      description:
        "Providing cost-effective solutions without compromising on product quality.",
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description:
        "Ensuring prompt and reliable delivery to keep your projects running smoothly.",
    },
    {
      icon: PackageCheck,
      title: "Bulk Supply Capability",
      description:
        "Equipped to fulfill both small and large-volume requirements efficiently.",
    },
    {
      icon: Handshake,
      title: "Customer Satisfaction",
      description:
        "Focused on building trust through responsive support and dependable service.",
    },
    {
      icon: Briefcase,
      title: "Industry Experience",
      description:
        "Leveraging years of expertise to understand and meet the unique needs of various industries.",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-16">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Content Side */}
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl leading-tight">
              Why Businesses Trust Shiva Steel Fabricator
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-slate-800">
              At Shiva Steel Fabricator, we are committed to delivering quality
              steel products and exceptional service that businesses can rely on.
              Our dedication to product quality, customer satisfaction, and
              timely delivery has helped us build long-lasting relationships
              with contractors, fabricators, builders, and industrial clients.
            </p>

            <div className="mt-6 space-y-5">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
          <div className="overflow-hidden ">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="h-full w-full object-contain"
  >
    <source src="/map-animation_3.mp4" type="video/mp4" />
  </video>
</div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl border border-slate-100">
              <h4 className="text-3xl font-bold text-blue-600">
                25+
              </h4>
              <p className="text-slate-600">
                Years of Industry Experience
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}