import { ArrowUpRight, Mail, Phone, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Shiva Steel Fabricator",
  description:
    "Learn how Shiva Steel Fabricator collects, uses, and protects your personal information when you use our website and services.",
};

const policySections = [
  {
    id: "information-we-collect",
    number: "01",
    title: "Information We Collect",
    intro:
      "We may collect the following information when you interact with our website or services:",
    points: [
      "Name, phone number, and email address.",
      "Billing and shipping address.",
      "Order and transaction details.",
      "Website usage data, including cookies, IP address, and browser information.",
    ],
  },
  {
    id: "how-we-use-information",
    number: "02",
    title: "How We Use Your Information",
    intro:
      "We use your information to provide better services and improve your experience.",
    points: [
      "To process and deliver your orders.",
      "To communicate order updates and provide customer support.",
      "To improve our website and services.",
      "To send important notifications or promotional offers, if you have opted in.",
    ],
  },
  {
    id: "data-protection",
    number: "03",
    title: "Data Protection",
    intro:
      "We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, misuse, alteration, or disclosure. However, no method of online transmission or electronic storage can be guaranteed completely secure.",
  },
  {
    id: "sharing-information",
    number: "04",
    title: "Sharing of Information",
    intro:
      "We respect your privacy and do not sell or rent your personal information to third parties.",
    points: [
      "Information may be shared with trusted service providers, including logistics partners and payment gateways, for order fulfillment.",
      "Information may be shared when necessary to provide requested services.",
      "We may disclose information when required by law or legal authorities.",
    ],
  },
  {
    id: "cookies",
    number: "05",
    title: "Cookies",
    intro:
      "Our website may use cookies to enhance your browsing experience, analyze website traffic, and improve functionality. You can choose to disable cookies through your browser settings. Please note that disabling cookies may affect certain website features.",
  },
  {
    id: "your-rights",
    number: "06",
    title: "Your Rights",
    intro: "Depending on applicable laws, you may have the right to:",
    points: [
      "Request access to your personal information.",
      "Request correction of inaccurate information.",
      "Request deletion of your personal information, where applicable.",
      "Opt out of marketing communications.",
    ],
  },
  {
    id: "policy-updates",
    number: "07",
    title: "Policy Updates",
    intro:
      "We may update this Privacy Policy from time to time. Any changes will be published on this page with the revised date. We encourage visitors to review this page periodically.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f5f7fb] text-slate-800">
      <section className="relative isolate overflow-hidden bg-[#101c37] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_10%,rgba(37,99,235,0.42),transparent_38%),linear-gradient(115deg,#101c37_0%,#142a50_58%,#0b172e_100%)]" />
        <div className="absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-16 -z-10 h-64 w-64 rounded-full border border-white/10" />

        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/20 bg-blue-300/10 px-4 py-2 text-sm font-medium tracking-wide text-blue-100">
              <ShieldCheck size={17} aria-hidden="true" />
              YOUR PRIVACY, OUR PRIORITY
            </div>
            <h1 className="font-poppins text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Privacy Policy<span className="text-blue-400">.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              At Shiva Steel Fabricator, your privacy matters to us. Learn how
              we collect, use, and protect your personal information when you
              interact with our website and services.
            </p>
            <div className="mt-9 flex items-center gap-3 text-sm text-slate-300">
              <span className="h-px w-10 bg-blue-400" />
              Clear information. Responsible handling. Trusted service.
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
          <nav aria-label="Privacy policy sections">
            <ol className="grid list-none grid-cols-2 gap-2 p-0 sm:grid-cols-3 lg:grid-cols-1">
              {policySections.map((section) => (
                <div key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex min-h-11 items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 transition hover:border-blue-200 hover:text-blue-800"
                  >
                    <span className="font-poppins text-xs font-semibold text-blue-700">
                      {section.number}
                    </span>
                    <span className="leading-5">{section.title}</span>
                  </a>
                </div>
              ))}
            </ol>
          </nav>

          <div className="mt-7 hidden rounded-2xl bg-[#eaf0fb] p-5 lg:block">
            <ShieldCheck className="mb-3 text-blue-800" size={23} aria-hidden="true" />
            <p className="text-sm font-semibold text-slate-900">
              Your information stays yours.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              We do not sell or rent your personal information.
            </p>
          </div>
        </aside>

        <div className="min-w-0">
          <section className="mb-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_12px_35px_rgba(15,35,70,0.05)] sm:p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-800">
              Introduction
            </p>
            <h2 className="font-poppins text-2xl font-semibold text-slate-950 sm:text-3xl">
              Your trust is important to us.
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-600">
              At <strong className="font-semibold text-slate-800">Shiva Steel Fabricator</strong>,
              we are committed to protecting your privacy and maintaining the
              confidentiality of your personal information. This Privacy Policy
              explains what information we collect, how we use it, and the
              measures we take to keep it secure when you use our website or
              services.
            </p>
          </section>

          <div className="mb-5 flex items-end justify-between gap-4 px-1">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-800">
                Privacy guidelines
              </p>
              <h2 className="mt-2 font-poppins text-2xl font-semibold text-slate-950 sm:text-3xl">
                Understanding our policy
              </h2>
            </div>
            <span className="hidden text-sm text-slate-500 sm:block">
              7 important points
            </span>
          </div>

          <div className="space-y-4">
            {policySections.map((section) => (
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
                    <p className="mt-3 text-[15px] leading-7 text-slate-600">
                      {section.intro}
                    </p>
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
                  </div>
                </div>
              </section>
            ))}
          </div>

          <section className="mt-8 overflow-hidden rounded-2xl bg-[#122447] text-white">
            <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                  Get in touch
                </p>
                <h2 className="mt-2 font-poppins text-2xl font-semibold sm:text-3xl">
                  Have questions about your privacy?
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy, feel free to contact our team.
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
