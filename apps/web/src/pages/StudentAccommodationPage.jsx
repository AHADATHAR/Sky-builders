import { useState } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────
const CheckCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const HomeIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const CameraIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const UserGroupIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const XCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────
const accommodationOptions = [
  {
    num: 1,
    title: "On-Campus Housing",
    desc: "Many universities offer convenient on-campus rooms and student lodges, though availability is limited. It's best to apply as soon as you accept your university offer.",
    tags: ["Furnished student rooms", "Access to campus facilities", "A safe and structured environment", "Options for catered or self-catered living"],
    note: "Some universities also offer managed apartments near campus, ideal for students who want more independence while staying within a student community.",
    costLabel: "$150 – $350",
    costType: "WEEKLY COST",
  },
  {
    num: 2,
    title: "Residential Colleges",
    desc: "Residential colleges offer a premium style of living with additional services, including meals and cleaning.",
    tags: ["Accommodation", "All meals", "Academic and social support", "Cleaning and utilities"],
    note: "This option is ideal for students who prefer a supportive environment with everything included.",
    costLabel: "$350 – $750",
    costType: "WEEKLY COST",
  },
  {
    num: 3,
    title: "Hostels & Student Guest Houses",
    desc: "A budget-friendly option with shared facilities, suitable for students who want independence at a lower cost.",
    tags: ["Shared kitchens", "Shared bathrooms", "A social environment", "Flexible short-term or long-term stays"],
    note: "",
    costLabel: "$100 – $220",
    costType: "WEEKLY COST",
  },
  {
    num: 4,
    title: "Homestay",
    desc: "Homestay allows you to live with an Australian family. This option is ideal for students who want a warm, home-like environment.",
    tags: ["A private or shared room", "Meals (depending on the package)", "A safe, family environment", "A great way to adapt to Australian culture"],
    note: "All families are screened and approved by the institution or third-party providers.",
    costLabel: "$270 – $400",
    costType: "WEEKLY COST",
  },
  {
    num: 5,
    title: "Rental Properties (Shared or Private)",
    desc: "Many students opt for off-campus rentals for greater flexibility and convenience.",
    tags: ["Most rentals are unfurnished", "You'll pay a bond (usually 4-6 weeks rent)", "Bills may or may not be included", "You get maximum independence and privacy"],
    note: "Renting is ideal for students who want full control over their living space.",
    costLabel: "SHARED\n$180 – $300",
    costLabel2: "PRIVATE\n$350 – $650",
    costType: "WEEKLY COST",
    isDouble: true,
  },
];

const helpPoints = [
  "Guide you through every available accommodation option",
  "Help you compare prices and living styles",
  "Ensure your accommodation is close to your university",
  "Recommend trusted housing platforms and providers",
  "Support you before and after you arrive in Australia",
];

// ── Section 1: Hero ────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="w-[96%] mx-auto relative overflow-hidden" style={{ minHeight: 420,marginTop:"81px", borderRadius:"20px" }}>
      {/* Dark overlay background */}
<div
  className="absolute inset-0 z-0"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(15,27,61,1) 35%, rgba(15,27,61,0.7) 55%, rgba(15,27,61,0.2) 75%, rgba(15,27,61,0) 100%),
      url('https://i.ibb.co/PvdQzvLz/7b1a0355f9d89f6d0b8cbdfe88d281e37d79e984.png')
    `,
    backgroundSize: "cover",
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat"
  }}
/>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-20">
        {/* Pill */}
        <div className="inline-flex items-center border border-gray-400 rounded-full px-4 py-1 mb-6">
          <span className="text-gray-300 text-xs tracking-widest uppercase font-medium">Student Accommodation</span>
        </div>
        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-xl">
          Student<br />Accommodation
        </h1>
        <p className="text-gray-300 text-base sm:text-lg lg:text-xl font-medium mb-8 max-w-lg leading-snug">
          Find the Right Place to Call<br className="hidden sm:block" /> Home While You Study in Australia
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-6 py-3 rounded transition-colors">
          Contact for Consultation
        </button>
      </div>
    </section>
  );
}

// ── Section 2: Intro text + image ──────────────────────────────────────────
function IntroSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Text */}
          <div className="flex-1 space-y-5">
            {/* Red left border accent */}
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Moving to Australia for your studies is exciting, but choosing where you'll live is just
                as important as choosing your course. Your accommodation impacts your daily
                routine, study experience, social life, comfort, and even your budget.
              </p>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              The good news is that Australia offers a range of options, including on-campus
              rooms, shared apartments, homestays, and more, allowing you to choose the
              accommodation that suits your lifestyle. However, with so many choices, it's easy
              to feel uncertain about which one to choose.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              That's where Sky Consultant comes in to guide you through each option. Our expert
              consultants explain the real costs and help you find a living arrangement that feels
              safe, convenient, and right for you. Whether you want a fully supported
              environment, a social setting, or independent living, we help you find a place where
              you feel safe and comfortable.
            </p>
          </div>
          {/* Image placeholder */}
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                background: "linear-gradient(135deg, #1e3a6e 0%, #2d1b4e 100%)",
                minHeight: 220,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <HomeIcon className="w-24 h-24 text-white" />
              </div>
              {/* Red circle decorative */}
              <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-red-500 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 3: Accommodation Options ──────────────────────────────────────
function AccommodationOptionsSection() {
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 mb-4">
            <span className="text-gray-500 text-xs tracking-widest uppercase font-medium">Accommodation Options</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Accommodation Options for Students in<br className="hidden sm:block" /> Australia
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Below are the most common and updated living options available to international students:
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-5">
          {accommodationOptions.map((opt) => (
            <div key={opt.num} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Number */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0f1b3d] text-white flex items-center justify-center font-bold text-base">
                  {opt.num}
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">{opt.title}</h3>
                    {/* Cost */}
                    {opt.isDouble ? (
                      <div className="flex gap-6 flex-shrink-0">
                        <div className="text-right">
                          <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider">{opt.costType}</p>
                          <p className="text-[10px] text-gray-500 font-semibold">SHARED</p>
                          <p className="text-red-600 font-bold text-sm whitespace-nowrap">$180 – $300</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider">{opt.costType}</p>
                          <p className="text-[10px] text-gray-500 font-semibold">PRIVATE</p>
                          <p className="text-red-600 font-bold text-sm whitespace-nowrap">$350 – $650</p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-right flex-shrink-0">
                        <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider">{opt.costType}</p>
                        <p className="text-red-600 font-bold text-base sm:text-lg whitespace-nowrap">{opt.costLabel}</p>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{opt.desc}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {opt.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {opt.note && (
                    <p className="text-gray-400 text-xs italic leading-relaxed">{opt.note}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 4: How We Help ─────────────────────────────────────────────────
function HowWeHelpSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Pill */}
        <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 mb-6">
          <span className="text-gray-500 text-xs tracking-widest uppercase font-medium">How We Help</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left: Text */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 leading-tight">
              How Sky Consultant Helps You<br className="hidden sm:block" /> Settle Smoothly
            </h2>
            <div className="space-y-4">
              {helpPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Stat 1 */}
              <div className="flex items-center gap-4 p-5 sm:p-6 border-b border-gray-100">
                <div className="flex-1">
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">5 Types</p>
                  <p className="text-gray-400 text-sm mt-0.5">Accommodation Categories</p>
                </div>
                <HomeIcon className="w-10 h-10 text-gray-200 flex-shrink-0" />
              </div>
              {/* Stat 2 */}
              <div className="flex items-center gap-4 p-5 sm:p-6 border-b border-gray-100">
                <div className="flex-1">
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">$100 Starting</p>
                  <p className="text-gray-400 text-sm mt-0.5">Affordable Weekly Options</p>
                </div>
                <CameraIcon className="w-10 h-10 text-gray-200 flex-shrink-0" />
              </div>
              {/* Stat 3 */}
              <div className="flex items-center gap-4 p-5 sm:p-6">
                <div className="flex-1">
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">100% Guidance</p>
                  <p className="text-gray-400 text-sm mt-0.5">Throughout Your Journey</p>
                </div>
                <UserGroupIcon className="w-10 h-10 text-gray-200 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 5: CTA Banner ──────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="w-[96%] mx-auto py-12 sm:py-16"
      style={{ background: "linear-gradient(120deg, #0f1b3d 0%, #1a2a5e 60%, #2d1b4e 100%)", borderRadius:"20px",marginBottom:"20px", }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
          Ready to Find the Perfect Place to Live in Australia?
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mb-8 leading-relaxed max-w-xl mx-auto">
          Let Sky Consultant help you secure accommodation that fits your lifestyle, budget, and study goals.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-8 py-3 rounded transition-colors">
          Start Your Accommodation Planning
        </button>
      </div>
    </section>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function StudentAccommodationPage() {
  return (
    <div className="w-full min-h-screen font-sans">
      <HeroSection />
      <IntroSection />
      <AccommodationOptionsSection />
      <HowWeHelpSection />
      <CTASection />
    </div>
  );
}