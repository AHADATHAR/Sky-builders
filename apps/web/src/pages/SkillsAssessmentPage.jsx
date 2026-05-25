import { useState } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────
const XCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckCircleFilledIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.707 7.293a1 1 0 00-1.414 0L11 13.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l5-5a1 1 0 000-1.414z" />
  </svg>
);

const DocumentIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const BriefcaseIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CashIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

const UserIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const AcademicIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const BadgeIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const IdentificationIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
  </svg>
);

const PlusDocIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────
const visaSubclasses = [
  "Subclass 189 – Employer Nomination Scheme",
  "Subclass 190 – Employer Nomination Scheme",
  "Subclass 491 – Regional Sponsored Migration Scheme",
  "Subclass 189 – Skilled Independent (Points-tested)",
  "Subclass 190 – Skilled Nominated",
  "Subclass 489 – Skilled Regional (Provisional)",
  "Subclass 491 – Skilled Work Regional (Provisional)",
  "Subclass 494 – Employer-Sponsored Regional (Provisional)",
  "Subclass 482 – Temporary Skill Shortage",
];

const docCards = [
  { icon: <AcademicIcon className="w-8 h-8 text-red-500" />, label: "Educational Certificates and Transcripts" },
  { icon: <BriefcaseIcon className="w-8 h-8 text-red-500" />, label: "Employment Reference Letters" },
  { icon: <CashIcon className="w-8 h-8 text-red-500" />, label: "Payslips or Contracts as Proof of Employment" },
  { icon: <UserIcon className="w-8 h-8 text-red-500" />, label: "CV or Resume" },
  { icon: <DocumentIcon className="w-8 h-8 text-red-500" />, label: "English Proficiency Evidence (if required)" },
  { icon: <BadgeIcon className="w-8 h-8 text-red-500" />, label: "Professional Licenses or Registrations" },
  { icon: <IdentificationIcon className="w-8 h-8 text-red-500" />, label: "Identification Documents" },
  { icon: <PlusDocIcon className="w-8 h-8 text-red-500" />, label: "Additional Documents as Requested" },
];

const supportSteps = [
  "Identify the correct assessing body for your occupation",
  "Review your qualifications and employment history",
  "Explain requirements and eligibility clearly",
  "Assist you in collecting all required documents",
  "Prepare and lodge your application correctly",
  "Track your progress and keep you updated",
  "Help address additional requests from the assessing authority",
];

// ── Section 1: Hero ────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="w-[95%] mx-auto rounded-xl  mt-[90px] relative overflow-hidden" style={{ minHeight: 420 }}>
  
  {/* Background Image */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('https://i.ibb.co/Jj5qPByt/7751f0872e8727b619adbd2bbd00c911433d4fd6-2.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />

  {/* Dark overlay to keep text readable */}
  <div
    className="absolute inset-0 z-0"
    style={{ background: "linear-gradient(120deg,rgba(10,20,50,0.88) 55%,rgba(30,50,100,0.55) 100%)" }}
  />
  <div
    className="absolute inset-0 z-0"
    style={{ background: "linear-gradient(135deg,#1a2a5e 0%,#2d3e80 50%,#4a5fa0 100%)", opacity: 0.45 }}
  />
  <div
    className="absolute right-0 top-0 bottom-0 w-2/3 z-0"
    style={{ background: "linear-gradient(to left, rgba(70,90,140,0.35), transparent)" }}
  />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-14 sm:py-20">
    <div className="inline-flex items-center border border-gray-400 rounded-full px-4 py-1 mb-6">
      <span className="text-gray-300 text-xs tracking-widest uppercase font-medium">Skills Assessment</span>
    </div>
    <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3 max-w-xl">
      Skills Assessment
    </h1>
    <p className="text-gray-200 text-base sm:text-lg lg:text-xl font-semibold mb-8 max-w-lg leading-snug">
      Your First Step Toward Skilled Migration in Australia
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
                If you're planning to apply for a skilled migration visa in Australia, one of the most important requirements is a positive skills assessment. This assessment confirms that your qualifications and work experience match the standards needed for your nominated occupation in Australia.
              </p>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              At Sky Consultant, we simplify this process by helping you understand which assessing authority applies to you, what documents you need, and how to prepare a strong application. Whether you're new to the process or unsure where to begin, our team makes the journey clearer, faster, and far less stressful.
            </p>
          </div>

          {/* Dark card placeholder */}
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

// ── Section 3: Why Skills Assessment Matters ───────────────────────────────
function WhyMattersSection() {
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Tag */}
        <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 mb-6">
          <span className="text-gray-500 text-xs tracking-widest uppercase font-medium">Why It Matters</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 leading-tight">
              Why Skills Assessment Matters
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
              A skills assessment is mandatory for most skilled and employer-sponsored visa subclasses. It shows the Australian government that you are qualified to work in your chosen occupation.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
              In Australia, different professional bodies assess different occupations. Each authority has its own criteria, timelines, fees, and document requirements. For instance, if you want a skills assessment for your Accounting degree, a CA, CPA, or IPA can provide the assessment.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              A positive assessment increases your chances of receiving an invitation and strengthens your overall visa application.
            </p>
          </div>

          {/* Right: Visa subclasses */}
          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <p className="text-sm font-semibold text-gray-700 mb-4 leading-snug">
                Some of the most common visas that require a positive skills assessment include:
              </p>
              <div className="space-y-2">
                {visaSubclasses.map((visa, i) => (
                  <div key={i} className={`text-sm py-2 px-1 ${i === visaSubclasses.length - 1 ? "border-l-4 border-red-500 pl-3 text-red-600 font-medium" : "text-gray-600 border-b border-gray-100"}`}>
                    {visa}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 4: Documents Commonly Required ─────────────────────────────────
function DocumentsSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Tag */}
        <div className="flex justify-center mb-3">
          <span className="border border-gray-300 rounded-full px-4 py-1 text-xs text-gray-500 tracking-widest uppercase font-medium">Documents Required</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
          Documents Commonly Required
        </h2>
        <p className="text-gray-500 text-sm sm:text-base text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          While each assessing body has its own checklist, most skills assessments require the following documents:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {docCards.map((card, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-5 flex flex-col items-center text-center border border-gray-100 hover:shadow-sm transition-shadow">
              <div className="mb-3">{card.icon}</div>
              <p className="text-sm font-medium text-gray-800 leading-snug">{card.label}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-xs sm:text-sm text-center italic">
          Our team helps you prepare, format, and present these documents so they meet assessment expectations.
        </p>
      </div>
    </section>
  );
}

// ── Section 5: How Sky Consultant Supports ─────────────────────────────────
function HowWeHelpSection() {
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Tag */}
        <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 mb-6">
          <span className="text-gray-500 text-xs tracking-widest uppercase font-medium">How We Help</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left */}
          <div className="flex-1 max-w-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 leading-tight">
              How Sky Consultant Supports Your Skills Assessment
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Lodging a skills assessment for the first time can feel complicated. Our team makes the process much easier with personalised, step-by-step support. Here's how we help:
            </p>
          </div>

          {/* Right: Numbered steps */}
          <div className="flex-1">
            <div className="space-y-4">
              {supportSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs sm:text-sm italic mt-6 leading-relaxed">
              Our goal is to help you secure a positive outcome at smoothly as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 6: CTA Banner ──────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="w-[95%] mx-auto rounded-xl mb-[40px] py-14 sm:py-20"
      style={{ background: "linear-gradient(120deg,#0f1b3d 0%,#1a2a5e 55%,#2d1b4e 100%)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
          Ready to Secure Your Skills Assessment?
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mb-10 leading-relaxed max-w-xl mx-auto">
          Sky Consultant is here to guide you from preparation to submission, ensuring your application is accurate, complete, and ready for approval.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-10 py-3 rounded uppercase tracking-widest transition-colors">
          Connect With Us
        </button>
      </div>
    </section>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function SkillsAssessmentPage2() {
  return (
    <div className="w-full min-h-screen font-sans">
      <HeroSection />
      <IntroSection />
      <WhyMattersSection />
      <DocumentsSection />
      <HowWeHelpSection />
      <CTASection />
    </div>
  );
}