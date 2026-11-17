import { ArrowUpRight, Mail, PackageCheck, Phone, Truck } from "lucide-react";

export const metadata = {
  title: "Shipping Policy | Shiva Steel Fabricator",
  description:
    "Learn about order processing, delivery timelines, shipping charges, and delivery guidelines at Shiva Steel Fabricator.",
};

const shippingSections = [
  {
    id: "order-processing",
    number: "01",
    title: "Order Processing",
    points: [
      "All orders are processed after confirmation of payment and order details.",
      "Standard processing time is 2–5 business days, depending on product availability and customization requirements.",
      "Processing time for bulk or customized product orders may vary and will be communicated in advance.",
    ],
  },
  {
    id: "shipping-delivery-time",
    number: "02",
    title: "Shipping & Delivery Time",
    description:
      "Delivery timelines depend on your location and the type of product ordered.",
    deliveryTimes: [
      { location: "Metro cities", time: "5–7 days" },
      { location: "Other locations", time: "7–14 days" },
    ],
    note: "Remote or rural areas may require additional delivery time.",
  },
  {
    id: "shipping-charges",
    number: "03",
    title: "Shipping Charges",
    description: "Shipping charges are calculated based on:",
    points: [
      "Product weight and packaging.",
      "Delivery location.",
      "Mode of transport.",
    ],
    note: "Final shipping charges will be shared during order confirmation.",
  },
  {
    id: "delivery-method",
    number: "04",
    title: "Delivery Method",
    points: [
      "We work with trusted logistics partners for safe and reliable delivery.",
      "Heavy products may be transported using specialized carriers.",
    ],
  },
  {
    id: "order-tracking",
    number: "05",
    title: "Order Tracking",
    description:
      "Once your order is dispatched, tracking details or transport information will be shared via phone or email.",
  },
  {
    id: "delivery-guidelines",
    number: "06",
    title: "Delivery Guidelines",
    points: [
      "The customer or an authorized representative must be available at the delivery location.",
      "Customers should arrange unloading equipment such as cranes or forklifts if required.",
      "Please inspect the product carefully upon delivery for any visible damage.",
    ],
  },
  {
    id: "damaged-delayed-shipments",
    number: "07",
    title: "Damaged or Delayed Shipments",
    points: [
      "Report damaged products within 24 hours along with photos or videos for verification.",
      "Delivery delays caused by weather conditions, transportation issues, strikes, or other unforeseen events may occur.",
    ],
  },
  {
    id: "service-availability",
    number: "08",
    title: "Service Availability",
    description:
      "We currently ship across India. For international orders, please contact us directly to discuss availability and shipping options.",
  },
];

export default function ShippingPolicyPage() {
  return (
    <main className="bg-[#f5f7fb] text-slate-800">
      <section className="relative isolate overflow-hidden bg-[#101c37] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_10%,rgba(37,99,235,0.42),transparent_38%),linear-gradient(115deg,#101c37_0%,#142a50_58%,#0b172e_100%)]" />
        <div className="absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-16 -z-10 h-64 w-64 rounded-full border border-white/10" />

        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-20 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-blue-300/10 px-4 py-2 text-sm font-medium tracking-wide text-blue-100">
              <Truck size={17} aria-hidden="true" />
              FROM OUR YARD TO YOUR SITE
            </div>
            <h1 className="font-poppins text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Shipping Policy<span className="text-blue-400">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              At Shiva Steel Fabricator, we are committed to ensuring safe and
              reliable delivery of our products. Our team carefully processes,
              packages, and dispatches every order with attention to quality.
            </p>
            <div className="mt-9 flex items-center gap-3 text-sm text-slate-300">
              <span className="h-px w-10 bg-blue-400" />
              Delivery guidance for every step of your order.
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-sky-400 to-blue-700" />
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-16 lg:px-12 lg:py-20">
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-blue-800">
            On this page
          </p>
          <nav aria-label="Shipping policy sections">
            <ol className="grid list-none grid-cols-2 gap-2 p-0 sm:grid-cols-3 lg:grid-cols-1">
              {shippingSections.map((section) => (
                <div key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex min-h-11 items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 transition hover:border-blue-200 hover:text-blue-800"
                  >
                    <span className="font-poppins text-xs font-semibold text-blue-700">
                      {section.number}
                    </span>
                    <span className="leading-5">{section.title}</span>
                  </a>
                </div>
              ))}
              <div>
                <a
                  href="#contact-us"
                  className="flex min-h-11 items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 transition hover:border-blue-200 hover:text-blue-800"
                >
                  <span className="font-poppins text-xs font-semibold text-blue-700">
                    09
                  </span>
                  <span className="leading-5">Contact Us</span>
                </a>
              </div>
            </ol>
          </nav>

          <div className="mt-7 hidden rounded-2xl bg-[#eaf0fb] p-5 lg:block">
            <PackageCheck className="mb-3 text-blue-800" size={23} aria-hidden="true" />
            <p className="text-sm font-semibold text-slate-900">
              Need delivery details?
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Our team shares transport information after your order is
              dispatched.
            </p>
          </div>
        </aside>

        <div className="min-w-0">
          <section className="mb-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_12px_35px_rgba(15,35,70,0.05)] sm:p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-800">
              Delivery overview
            </p>
            <h2 className="font-poppins text-2xl font-semibold text-slate-950 sm:text-3xl">
              Reliable delivery, clearly explained.
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-600">
              This policy covers order processing, estimated delivery windows,
              shipping charges, and what to expect when your order arrives.
              Timelines may vary based on product availability, customization,
              and delivery location.
            </p>
          </section>

          <div className="mb-5 flex items-end justify-between gap-4 px-1">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-800">
                Shipping guidelines
              </p>
              <h2 className="mt-2 font-poppins text-2xl font-semibold text-slate-950 sm:text-3xl">
                What to expect
              </h2>
            </div>
            <span className="hidden text-sm text-slate-500 sm:block">
              9 important points
            </span>
          </div>

          <div className="space-y-4">
            {shippingSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_24px_rgba(15,35,70,0.035)] sm:p-8"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf0fb] font-poppins text-sm font-bold text-blue-800">
                    {section.number}
                  </span>
                  <div className="min-w-0 flex-1 pt-1">
                    <h3 className="font-poppins text-lg font-semibold text-slate-950 sm:text-xl">
                      {section.title}
                    </h3>
                    {section.description && (
                      <p className="mt-3 text-[15px] leading-7 text-slate-600">
                        {section.description}
                      </p>
                    )}
                    {section.deliveryTimes && (
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {section.deliveryTimes.map((delivery) => (
                          <div
                            key={delivery.location}
                            className="rounded-xl border border-blue-100 bg-[#f7f9fd] p-4"
                          >
                            <p className="text-sm text-slate-600">
                              {delivery.location}
                            </p>
                            <p className="mt-1 font-poppins text-xl font-semibold text-blue-900">
                              {delivery.time}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    {section.points && (
                      <ul className="mt-4 space-y-3 pl-0">
                        {section.points.map((point) => (
                          <li
                            key={point}
                            className="flex list-none gap-3 text-[15px] leading-6 text-slate-600"
                          >
                            <span
                              className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.note && (
                      <p className="mt-4 rounded-lg bg-[#f2f5fa] px-4 py-3 text-sm leading-6 text-slate-600">
                        {section.note}
                      </p>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>

          <section
            id="contact-us"
            className="mt-8 scroll-mt-8 overflow-hidden rounded-2xl bg-[#122447] text-white"
          >
            <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                  Section 09 · Contact us
                </p>
                <h2 className="mt-2 font-poppins text-2xl font-semibold sm:text-3xl">
                  Need help with a delivery?
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                  Contact our team to discuss shipping availability or delivery
                  questions.
                </p>
              </div>
              <a
                href="mailto:shivasteel2019@gmail.com"
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#122447] transition hover:bg-blue-50"
              >
                Contact our team
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="grid gap-4 border-t border-white/10 px-6 py-5 text-sm sm:grid-cols-2 sm:px-8 md:grid-cols-3">
              <a
                href="mailto:shivasteel2019@gmail.com"
                className="flex min-w-0 items-center gap-3 text-slate-200 transition hover:text-white"
              >
                <Mail className="shrink-0 text-blue-300" size={18} aria-hidden="true" />
                <span className="break-all">shivasteel2019@gmail.com</span>
              </a>
              <a
                href="tel:+919873656785"
                className="flex items-center gap-3 text-slate-200 transition hover:text-white"
              >
                <Phone className="shrink-0 text-blue-300" size={18} aria-hidden="true" />
                +91-98736 56785
              </a>
              <a
                href="tel:+919716521402"
                className="flex items-center gap-3 text-slate-200 transition hover:text-white"
              >
                <Phone className="shrink-0 text-blue-300" size={18} aria-hidden="true" />
                +91-97165 21402
              </a>
              <a
                href="tel:+919069906984"
                className="flex items-center gap-3 text-slate-200 transition hover:text-white sm:col-span-2 md:col-span-1"
              >
                <Phone className="shrink-0 text-blue-300" size={18} aria-hidden="true" />
                +91-90699 06984
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
