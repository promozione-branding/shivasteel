import {
  Factory,
  HardHat,
  BriefcaseBusiness,
  Award,
} from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Factory className="h-10 w-10 sm:h-16 sm:w-16 text-sky-500" />,
      number: "745+",
      title: "Chain Of Factories",
      description:
        "Around the globe we have more than 750 factories running now.",
    },
    {
      icon: <HardHat className="h-10 w-10 sm:h-16 sm:w-16 text-amber-500" />,
      number: "268+",
      title: "Expert Workers",
      description:
        "More than 500 expert workers are working in the industry.",
    },
    {
      icon: <BriefcaseBusiness className="h-10 w-10 sm:h-16 sm:w-16 text-red-500" />,
      number: "500+",
      title: "Our Running Projects",
      description:
        "Around the world more than 900 projects are running successfully.",
    },
    {
      icon: <Award className="h-10 w-10 sm:h-16 sm:w-16 text-emerald-500" />,
      number: "25+",
      title: "Years Experience",
      description:
        "Delivering trusted industrial solutions with proven expertise and commitment.",
    },
  ];

  return (
    <section className="bg-white py-6 sm:py-10">
      <div className="mx-auto w-full px-4 sm:px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-0">

          {stats.map((item, index) => (
            <div
              key={index}
              className={`relative px-4 sm:px-8 py-6 sm:py-6 border-b sm:border-b-0 sm:pb-0
              ${
                index !== stats.length - 1
                  ? "sm:border-r border-slate-200"
                  : ""
              }`}
            >

              {/* TOP */}
              <div className="flex items-center gap-4 sm:gap-6">

                {/* ICON */}
                <div className="flex h-16 w-16 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-slate-50 shadow-sm">
                  {item.icon}
                </div>

                {/* NUMBER + TITLE */}
                <div>
                  <h3 className="text-3xl sm:text-5xl font-bold leading-none text-slate-900">
                    {item.number}
                  </h3>

                  <p className="mt-2 sm:mt-3 text-base sm:text-xl text-slate-700">
                    {item.title}
                  </p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-4 sm:mt-10 text-sm sm:text-lg leading-6 sm:leading-9 text-slate-600">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}