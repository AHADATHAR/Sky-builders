import { useState } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────
const XCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const InfoIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const AlertIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const DocumentIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const SearchIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const AcademicCapIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const PencilIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const CurrencyIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckShieldIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ClipboardIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

// ── Section 1: Hero ────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="w-[96%] mx-auto mt-[81px] relative overflow-hidden" style={{ minHeight: 380, borderRadius:'20px', }}>
    <div
  className="absolute inset-0 z-0"
  style={{
    backgroundImage: `
      linear-gradient(120deg, rgba(10,20,50,0.88) 55%, rgba(30,50,100,0.60) 100%),
      url('https://i.ibb.co/bgP3GW3s/5def3b38eb26b4b699c15a8525cfe41a622494ae.png')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center right",
    backgroundRepeat: "no-repeat"
  }}
/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-14 sm:py-20">
        <div className="inline-flex items-center border border-gray-400 rounded-full px-4 py-1 mb-6">
          <span className="text-gray-300 text-xs tracking-widest uppercase font-medium">Individual Tax Return</span>
        </div>
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3 max-w-lg">
          Individual Tax Return
        </h1>
        <p className="text-gray-200 text-base sm:text-lg font-semibold mb-8 max-w-lg leading-snug">
          Your Guide to Understanding Tax Responsibilities as an International Student in Australia
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-6 py-3 rounded transition-colors">
          Contact for Consultation
        </button>
      </div>
    </section>
  );
}

// ── Section 2: Intro ───────────────────────────────────────────────────────
function IntroSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1 space-y-5">
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Filing a tax return is one of the most common financial responsibilities for international students studying in Australia. As a student visa holder, you are likely required to lodge a tax return if you have earned any income during your time in Australia, regardless of how much you earned.
              </p>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              If your employer has been withholding tax from your salary, you may actually be entitled to a refund. However, many students are unsure about which income they need to declare, what deductions they can claim, and how to correctly file their return to avoid any penalties.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              At Sky Consultant, we partner with trusted registered tax agents who specialise in helping international students lodge accurate, compliant tax returns. From understanding your tax residency status to identifying eligible deductions, we guide you through every step of the process.
            </p>
          </div>

          {/* Dark placeholder card */}
          <div className="w-full lg:w-64 xl:w-72 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden relative flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#1e3a6e 0%,#2d1b4e 100%)", minHeight: 200 }}>
              <DocumentIcon className="w-20 h-20 text-white opacity-20" />
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-red-500 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 3: Tax Residency ───────────────────────────────────────────────
function TaxResidencySection() {
  const points = [
    "You pay tax on any income earned in Australia",
    "You may be eligible for the tax-free threshold",
    "Your tax rate is similar to that of residents",
    "You may qualify for tax offsets or refunds depending on your situation",
  ];

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          How Tax Residency Affects You
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
          If you're considered an Australian resident for tax purposes, here's what that usually means:
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left: bullet points */}
          <div className="flex-1 space-y-4">
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <XCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          {/* Right: Important box */}
         <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
  <div className="bg-white rounded-xl border-l-4 border-red-500 p-5 shadow-sm">
    <div className="flex items-center gap-2 mb-3">
      <InfoIcon className="w-5 h-5 text-orange-500" />
      <span className="font-bold text-gray-900 text-sm">Important!</span>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">
      This is very different from "foreign resident" tax rates, which are usually higher. Knowing your correct tax status ensures you don't overpay or underpay.
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}

// ── Section 4: Income You Must Declare ────────────────────────────────────
function IncomeDeclareSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Tag */}
        <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 mb-5">
          <span className="text-gray-500 text-xs tracking-widest uppercase font-medium">Income</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-tight">
          Income You Must Declare
        </h2>
        <div className="w-10 h-1 bg-red-600 mb-6" />

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 space-y-5">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                As an international student in Australia, you must lodge a tax return if you earned any form of income during your stay. This includes part-time or casual job wages, full-time salary (if applicable), delivery work, freelancing, or contract jobs, and any income earned from overseas sources while you were physically in Australia.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                However, if you are classified as a temporary resident, you generally do not need to declare foreign income such as savings, investment returns, financial support from family, or earnings received before arriving in Australia.
              </p>
            </div>
          </div>

          {/* Right: Compliance Alert */}
<div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
  <div className="bg-white rounded-xl border-l-4 border-red-500 p-5 shadow-sm">
    <div className="flex items-center gap-2 mb-3">
      <AlertIcon className="w-5 h-5 text-orange-500" />
      <span className="font-bold text-gray-900 text-sm">Compliance Alert</span>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">
      If you're unsure about what needs to be reported, Sky Consultant can guide you through the requirements and help ensure your tax return is accurate and compliant.
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}

// ── Section 5: Claiming Deductions ────────────────────────────────────────
function DeductionsSection() {
  const deductions = [
    "Work-related uniforms or protective clothing",
    "Tools, equipment, or devices used for work",
    "Work-related phone and internet usage",
    "Travel required for work visits",
    "Union or professional membership fees",
  ];

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Claiming Deductions and Reducing Your Tax
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Many students don't realise they can claim deductions, which may increase their tax refund. Some common deductible expenses include:
            </p>
            <div className="space-y-3 mb-6">
              {deductions.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team reviews all your receipts and documents to help you claim everything you're entitled to.
              </p>
            </div>
          </div>

          {/* Right: Expert card */}
<div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
  <div className="rounded-2xl overflow-hidden border">
    
    {/* Image */}
    <img
      src="https://i.ibb.co/MDTWs4qR/AB6-AXu-Cfj8wz-Ck-RGjj-QJA-AJirvmat-HBAIEjuy-Saa-VB09-BN-Fo-LKZMD3-BWs-PMTLOTal-OTJG9d-EHb-Hb0l1kt-N82d.png"
      alt="Tax Experts"
      className="w-full h-58 object-cover"
    />

    {/* Content */}
    <div className="p-4 bg-[#011646]">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#FC6451] text-center">
        Maximized Refunds
      </p>
      <p className="text-sm text-white mt-1 text-center">
Expert Deduction Analysis </p>
    </div>

  </div>
</div>
        </div>
      </div>
    </section>
  );
}

// ── Section 6: How Sky Consultant Makes Tax Lodgement Easier ──────────────
function TaxLodgementSection() {
  const services = [
    { icon: <DocumentIcon className="w-8 h-8 text-red-500" />, label: "Determining your correct tax residency" },
    { icon: <SearchIcon className="w-8 h-8 text-red-500" />, label: "Reviewing your income documents (payslips, payment summaries, etc.)" },
    { icon: <AcademicCapIcon className="w-8 h-8 text-red-500" />, label: "Identifying eligible deductions" },
    { icon: <PencilIcon className="w-8 h-8 text-red-500" />, label: "Preparing and lodging your tax return with the ATO" },
    { icon: <CurrencyIcon className="w-8 h-8 text-red-500" />, label: "Explaining whether you'll receive a refund or need to pay an adjustment" },
    { icon: <CheckShieldIcon className="w-8 h-8 text-red-500" />, label: "Your application is handled by a registered and experienced tax agent who signs before you, so that everything is accurate and compliant." },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Tag */}
        <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 mb-6">
          <span className="text-gray-500 text-xs tracking-widest uppercase font-medium">Our Support</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          How Sky Consultant Makes Tax Lodgement Easier
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-10 max-w-3xl">
          Filing a tax return for the first time can feel overwhelming, especially when you're balancing study, work, and adjusting to a new lifestyle. With Sky Consultant, you don't have to figure it out alone. Our support includes:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 5).map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex flex-col items-start gap-3 hover:shadow-sm transition-shadow">
              <div>{item.icon}</div>
              <p className="text-gray-700 text-sm leading-relaxed">{item.label}</p>
            </div>
          ))}
          {/* Last full-width card */}
          <div className="bg-red-50 rounded-2xl p-5 border border-red-100 flex items-start gap-3 hover:shadow-sm transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="flex-shrink-0"><CheckShieldIcon className="w-8 h-8 text-red-500" /></div>
            <p className="text-gray-700 text-sm leading-relaxed">{services[5].label}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 7: CTA Banner ──────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="w-[96%] mx-auto py-14 sm:py-20"
      style={{ background: "linear-gradient(120deg,#0f1b3d 0%,#1a2a5e 55%,#2d1b4e 100%)", borderRadius:'20px', marginBottom:'20px', }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
          Need Help Filing Your Individual Tax Return?
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mb-10 leading-relaxed max-w-xl mx-auto">
          Contact us to Sky Consultant's qualified, experienced, and knowledgeable team to maximise your potential refund with expert guidance.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-10 py-3 rounded uppercase tracking-widest transition-colors">
          Contact Sky Consultant
        </button>
      </div>
    </section>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function TaxReturnPage() {
  return (
    <div className="w-full min-h-screen font-sans">
      <HeroSection />
      <IntroSection />
      <TaxResidencySection />
      <IncomeDeclareSection />
      <DeductionsSection />
      <TaxLodgementSection />
      <CTASection />
    </div>
  );
}