import { ArrowUpRight, FileText, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Shiva Steel Fabricator",
  description:
    "Review the terms and conditions for using the Shiva Steel Fabricator website, products, and services.",
};

const termsSections = [
  {
    id: "use-of-website",
    number: "01",
    title: "Use of Website",
    points: [
      "You agree to use this website for lawful purposes only.",
      "You must not misuse, disrupt, or attempt unauthorized access.",
      "All content is for informational and commercial use only.",
    ],
  },
  {
    id: "product-information",
    number: "02",
    title: "Product Information",
    points: [
      "We strive to ensure accurate product details and pricing.",
      "Minor variations may occur due to manufacturing or display.",
      "We reserve the right to update product details at any time.",
    ],
  },
  {
    id: "orders-payments",
    number: "03",
    title: "Orders & Payments",
    points: [
      "Orders are confirmed only after successful payment.",
      "We reserve the right to cancel or refuse any order.",
      "Pricing and availability are subject to change without notice.",
    ],
  },
  {
    id: "shipping-delivery",
    number: "04",
    title: "Shipping & Delivery",
    points: [
      "Delivery timelines are estimates and may vary.",
      "Delays due to external factors are not under our control.",
      "Refer to our Shipping Policy for detailed information.",
    ],
  },
  {
    id: "returns-refunds",
    number: "05",
    title: "Returns & Refunds",
    points: [
      "Returns are subject to our Return & Refund Policy.",
      "Certain items may not be eligible for return.",
      "Refunds are processed after inspection and approval.",
    ],
  },
  {
    id: "limitation-of-liability",
    number: "06",
    title: "Limitation of Liability",
    description:
      "Shiva Steel Fabricator shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.",
  },
  {
    id: "intellectual-property",
    number: "07",
    title: "Intellectual Property",
    description:
      "All content on this website, including text, images, and logos, is the property of Shiva Steel Fabricator and may not be used without permission.",
  },
  {
    id: "policy-updates",
    number: "08",
    title: "Policy Updates",
    description:
      "We reserve the right to update these terms at any time. Changes will be effective once posted on this page.",
  },
];

export default function TermsConditionsPage() {
  return (
    <main className="bg-[#f5f7fb] text-slate-800">
      <section className="relative isolate overflow-hidden bg-[#101c37] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_10%,rgba(37,99,235,0.42),transparent_38%),linear-gradient(115deg,#101c37_0%,#142a50_58%,#0b172e_100%)]" />
        <div className="absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-16 -z-10 h-64 w-64 rounded-full border border-white/10" />

        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-20 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-blue-300/10 px-4 py-2 text-sm font-medium tracking-wide text-blue-100">
              <FileText size={17} aria-hidden="true" />
              THE DETAILS THAT GUIDE US
            </div>
            <h1 className="font-poppins text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Terms &amp; Conditions<span className="text-blue-400">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              These terms govern your use of Shiva Steel Fabricator&apos;s
              website and services. By accessing or purchasing from us, you
              agree to comply with the following terms and conditions.
            </p>
            <div className="mt-9 flex items-center gap-3 text-sm text-slate-300">
              <span className="h-px w-10 bg-blue-400" />
              Please read these terms carefully before proceeding.
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
          <nav aria-label="Terms and conditions sections">
            <ol className="grid list-none grid-cols-2 gap-2 p-0 sm:grid-cols-3 lg:grid-cols-1">
              {termsSections.map((section) => (
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
            <FileText className="mb-3 text-blue-800" size={23} aria-hidden="true" />
            <p className="text-sm font-semibold text-slate-900">
              Using our website?
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Your continued use means you agree to these terms.
            </p>
          </div>
        </aside>

        <div className="min-w-0">
          <section className="mb-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_12px_35px_rgba(15,35,70,0.05)] sm:p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-800">
              Welcome
            </p>
            <h2 className="font-poppins text-2xl font-semibold text-slate-950 sm:text-3xl">
              Thank you for choosing Shiva Steel Fabricator.
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-600">
              By using our website, purchasing our products, or engaging with
              our services, you agree to the following terms and conditions.
              Please read them carefully before proceeding.
            </p>
          </section>

          <div className="mb-5 flex items-end justify-between gap-4 px-1">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-800">
                Terms of service
              </p>
              <h2 className="mt-2 font-poppins text-2xl font-semibold text-slate-950 sm:text-3xl">
                How we work together
              </h2>
            </div>
            <span className="hidden text-sm text-slate-500 sm:block">
              9 important points
            </span>
          </div>

          <div className="space-y-4">
            {termsSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_24px_rgba(15,35,70,0.035)] sm:p-8"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf0fb] font-poppins text-sm font-bold text-blue-800">
                    {section.number}
                  </span>
                  <div className="min-w-0 pt-1">
                    <h3 className="font-poppins text-lg font-semibold text-slate-950 sm:text-xl">
                      {section.title}
                    </h3>
                    {section.description && (
                      <p className="mt-3 text-[15px] leading-7 text-slate-600">
                        {section.description}
                      </p>
                    )}
                    {section.points && (
                      <ul className="mt-3 space-y-3 pl-0">
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
                  Questions about these terms?
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                  For any questions regarding these terms, please contact our
                  team.
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
