import {
  Factory,
  HardHat,
  BriefcaseBusiness,
  Award,
} from "lucide-react";

export default function StatsSection() {
const stats = [
  {
    icon: <Factory className="h-16 w-16 text-sky-500" />,
    number: "745+",
    title: "Chain Of Factories",
    description:
      "Around the globe we have more than 750 factories running now.",
  },
  {
    icon: <HardHat className="h-16 w-16 text-amber-500" />,
    number: "268+",
    title: "Expert Workers",
    description:
      "More than 500 expert workers are working in the industry.",
  },
  {
    icon: <BriefcaseBusiness className="h-16 w-16 text-red-500" />,
    number: "900+",
    title: "Our Running Projects",
    description:
      "Around the world more than 900 projects are running successfully.",
  },
  {
    icon: <Award className="h-16 w-16 text-emerald-500" />,
    number: "25+",
    title: "Years Experience",
    description:
      "Delivering trusted industrial solutions with proven expertise and commitment.",
  },
];

  return (
    <section className="bg-white py-6">
      <div className="mx-auto w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`relative px-8 py-6 ${
                index !== stats.length - 1
                  ? "md:border-r border-slate-200"
                  : ""
              }`}
            >
              {/* Top Content */}
              <div className="flex items-center gap-6">
                {/* Icon Circle */}
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-50 shadow-sm">
                  {item.icon}
                </div>

                {/* Number & Title */}
                <div>
                  <h3 className="text-5xl font-bold leading-none text-slate-900">
                    {item.number}
                  </h3>

                  <p className="mt-3 text-xl text-slate-700">
                    {item.title}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-10 text-lg leading-9 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}