import { useState } from "react";

// ── SVG Icons ──────────────────────────────────────────────────────────────
const XCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const NurseIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MedkitIcon = ({ className = "w-14 h-14" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
      d="M9 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2h-2M9 3a2 2 0 002 2h2a2 2 0 002-2M9 3h6M12 11v4m-2-2h4" />
  </svg>
);

const StarIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const GlobeIcon = ({ className = "w-7 h-7" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UserIcon = ({ className = "w-7 h-7" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const AcademicIcon = ({ className = "w-7 h-7" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

// ── Section 1: Hero ────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="w-[96%] mx-auto relative overflow-hidden" style={{ minHeight: 400, marginTop:"81px", borderRadius:"20px"}}>
      <div
  className="absolute inset-0 z-0"
  style={{
    backgroundImage: `
      linear-gradient(120deg, rgba(10,20,50,0.88) 55%, rgba(30,50,100,0.60) 100%),
      url('https://i.ibb.co/mnsdpch/97f377336d75f56db25fabbd1c84cf758ccab524.png')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center right",
    backgroundRepeat: "no-repeat"
  }}
/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-14 sm:py-20">
        <div className="inline-flex items-center border border-gray-400 rounded-full px-4 py-1 mb-6">
          <span className="text-gray-300 text-xs tracking-widest uppercase font-medium">OBA for International Nurses and Midwives</span>
        </div>
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3 max-w-xl">
          OBA for International<br />Nurses and Midwives
        </h1>
        <p className="text-gray-200 text-base sm:text-lg lg:text-xl font-semibold mb-8 max-w-lg leading-snug">
          Your Roadmap to Becoming a<br className="hidden sm:block" /> Registered Nurse in Australia
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-6 py-3 rounded transition-colors">
          Contact Our Consultant
        </button>
      </div>
    </section>
  );
}

// ── Section 2: Intro + AHPRA card ──────────────────────────────────────────
function IntroSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1 space-y-5">
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                For international nurses and midwives looking to practice in Australia, the Outcome Based Assessment (OBA) is a critical gateway. This process is designed to ensure that internationally qualified healthcare professionals possess the necessary skills and knowledge to meet the high standards of the Australian healthcare system.
              </p>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              The assessment consists of two major components: the NCLEX-RN for nurses (or NCLEX-PN for enrolled nurses) and the Objective Structured Clinical Examination (OSCE). Successfully navigating these requirements demands both clinical expertise and a deep understanding of Australian nursing protocols.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Our consultancy provides comprehensive guidance through every stage of this journey. From initial registration and eligibility checks with AHPRA to intensive preparation for clinical assessments, we ensure you are equipped with the confidence and competence to thrive in your new professional environment.
            </p>
          </div>

          {/* AHPRA card */}
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden relative flex flex-col items-center justify-center py-10 px-6"
              style={{ background: "linear-gradient(135deg,#1e3a6e 0%,#2d1b4e 100%)", minHeight: 240 }}>
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-white bg-opacity-10 rounded-full px-3 py-1">
                <StarIcon className="w-3 h-3 text-yellow-400" />
                <span className="text-white text-xs font-semibold">AHPRA COMPLIANT</span>
              </div>
              <MedkitIcon className="w-16 h-16 text-white opacity-30 mb-4" />
              <p className="text-white text-center font-bold text-lg leading-tight">Excellence in Clinical Care</p>
              <p className="text-gray-300 text-center text-xs mt-1 tracking-widest uppercase">Australian Standards</p>
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-red-500 opacity-80 flex items-center justify-center">
                <CheckCircleIcon className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 3: What Is OBA ─────────────────────────────────────────────────
function WhatIsOBASection() {
  const whoShouldTake = [
    { icon: <NurseIcon className="w-7 h-7 text-red-500" />, label: "Registered Nurses (RNs) who trained overseas" },
    { icon: <UserIcon className="w-7 h-7 text-red-500" />, label: "Enrolled Nurses (ENs) from outside Australia" },
    { icon: <AcademicIcon className="w-7 h-7 text-red-500" />, label: "Internationally qualified Midwives" },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 leading-tight">
              What Is OBA and Why Is It<br className="hidden sm:block" /> Required?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              The Outcome-Based Assessment (OBA) was introduced to ensure that all nurses and midwives practising in Australia meet the same standards of safety and professionalism. The assessment checks two things:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <XCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800 text-sm sm:text-base font-semibold">Your theoretical knowledge (through NCLEX)</p>
              </div>
              <div className="flex items-start gap-3">
                <XCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800 text-sm sm:text-base font-semibold">Your practical nursing ability (through OSCE)</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed italic">
              It is mainly a competency check to confirm that international applicants can work safely and confidently in the Australian healthcare system. If you already hold a nursing or midwifery registration overseas, the OBA becomes your main pathway to securing Australian nursing registration.
            </p>
          </div>

          {/* Right: Who Should Take */}
          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-base font-bold text-gray-900 mb-5">Who Should Take the OBA?</h3>
              <div className="space-y-5">
                {whoShouldTake.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-gray-700 text-sm leading-snug">{item.label}</p>
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

// ── Section 4: Step-by-Step OBA Process ────────────────────────────────────
function OBAProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Self-Check and Eligibility Assessment",
      desc: "Before applying, you must complete an online self-check through the Australian Health Practitioner Regulation Agency (AHPRA). AHPRA reviews your documents based on five NMBA criteria:",
      bullets: [
        "English language proficiency",
        "Criminal history check",
        "Continuing professional development",
        "Recent professional practice",
        "Professional indemnity insurance",
      ],
      note: "If you meet the criteria, AHPRA will refer you to the system which allows you to pay to access the system.",
    },
    {
      num: "02",
      title: "NCLEX (Multiple-Choice Exam)",
      desc: "After receiving your referral, you will take the NCLEX-RN or NCLEX-LN exam depending on your stream. This computer-based test evaluates your theoretical and clinical knowledge in nursing practice.",
      bullets: [],
      note: "",
    },
    {
      num: "03",
      title: "OSCE (Practical Exam)",
      desc: "Once you pass the NCLEX, you will complete an Objective Structured Clinical Examination (OSCE). This hands-on assessment requires you to demonstrate your clinical skills in a trusted clinical scenarios similar to those found in real hospital or community health settings.",
      bullets: [],
      note: "The OSCE ensures you can apply nursing standards, deliver safe care, and communicate effectively in the Australian healthcare environment.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">A Step-by-Step Look at the OBA Process</h2>
        <div className="w-24 h-1 bg-red-600 mb-3" />
        <p className="text-gray-500 text-sm mb-10">The complete OBA process includes three main steps:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-gray-50 rounded-2xl p-6 relative overflow-hidden border border-gray-100">
              {/* Large ghost number */}
              <span className="absolute top-2 right-4 text-7xl font-black text-gray-100 select-none leading-none">
                {step.num}
              </span>
              <span className="block text-red-600 font-black text-2xl mb-3">{step.num}</span>
              <h3 className="text-base font-bold text-gray-900 mb-3 relative z-10">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 relative z-10">{step.desc}</p>
              {step.bullets.length > 0 && (
                <ul className="space-y-1 mb-3">
                  {step.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-gray-400 mt-1">•</span> {b}
                    </li>
                  ))}
                </ul>
              )}
              {step.note && (
                <p className="text-gray-400 text-xs italic leading-relaxed relative z-10">{step.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 5: Why OBA Preparation Is Essential ───────────────────────────
function OBAPreparationSection() {
  const points = [
    "Build familiarity with the Australian style of clinical practice",
    "Strengthen critical thinking and decision-making",
    "Gain confidence in the exam structure and timing",
    "Refresh key nursing concepts and clinical foundations",
    "Improve communication skills for culturally diverse patients",
  ];

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Image placeholder */}
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden relative"
              style={{ background: "linear-gradient(135deg,#1e3a6e 0%,#4a5fa0 100%)", minHeight: 300 }}>
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <NurseIcon className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>
          {/* Right: Content */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Why OBA Preparation Is Essential
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              The OBA is a comprehensive evaluation of your nursing capabilities. Many internationally trained nurses find that the exam style, expectations, and terminology differ significantly from those in their home country. Proper preparation helps you:
            </p>
            <div className="w-10 h-1 bg-red-600 mb-6" />
            <div className="space-y-3 mb-6">
              {points.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm italic leading-relaxed">
              This preparation is especially important for the OSCE, which requires hands-on experience and knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 6: How Sky Consultant Helps ───────────────────────────────────
function SkyConsultantSection() {
  const module1 = [
    "Test-taking strategies",
    "Critical thinking practice",
    "Online classes and guided study",
    "Deep review of nursing concepts",
  ];
  const module2 = [
    "Practice with real OSCE-style scenarios",
    "Hands-on training for clinical stations",
    "Skill-building in assessments, communication, and clinical procedures",
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Tag */}
        <div className="flex justify-center mb-3">
          <span className="border border-gray-300 rounded-full px-4 py-1 text-xs text-gray-500 tracking-widest uppercase font-medium">Our Support</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4 leading-tight">
          How Sky Consultant Helps You Prepare and Succeed
        </h2>
        <p className="text-gray-600 text-sm sm:text-base text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          Preparing for the NCLEX and OSCE can be challenging, especially if you're managing the process from overseas. Sky Consultant connects you with trusted preparation providers who offer structured, high-quality coaching programs for both exams.
        </p>
        <p className="text-gray-800 text-sm font-semibold mb-6">Preparation Programs Include:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {/* Module 1 */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="text-base font-bold text-gray-900 mb-4">Module 1 – NCLEX-RN Preparation (Online)</h3>
            <div className="space-y-3">
              {module1.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Module 2 */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h3 className="text-base font-bold text-gray-900 mb-4">Module 2 – OSCE Preparation (Online + In-Person)</h3>
            <div className="space-y-3">
              {module2.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Red CTA note */}
        <div className="border-l-4 border-red-600 pl-4 py-2">
          <p className="text-red-600 font-semibold text-sm sm:text-base">
            Reach out to us today to learn about the course duration and fee!
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Section 7: What You'll Learn ───────────────────────────────────────────
function WhatYoullLearnSection() {
  const learnings = [
    "Understand how the Australian healthcare system works",
    "Recognise the responsibilities of nurses under NMBA standards",
    "Apply ethical and culturally safe care practices",
    "Review common medical conditions and develop nursing care plans",
    "Demonstrate core clinical procedures required for OSCE",
    "Communicate effectively with patients and healthcare teams",
  ];

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              What You'll Learn After<br className="hidden sm:block" /> Completing Your<br className="hidden sm:block" /> Preparation
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              These programs build your confidence, strengthen your clinical reasoning, and help you adapt to the expectations of Australian healthcare. By the end of your preparation, you'll be able to:
            </p>
            <div className="w-10 h-1 bg-red-600" />
          </div>
          {/* Right: 2-col grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {learnings.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 8: CTA Banner ──────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="w-[96%] mx-auto py-10 sm:py-20"
      style={{ background: "linear-gradient(120deg,#0f1b3d 0%,#1a2a5e 55%,#2d1b4e 100%)", borderRadius:"20px", marginBottom:"20px",}}>
      <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
          Start Your Nursing Journey in Australia With<br className="hidden sm:block" /> Confidence
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mb-8 leading-relaxed max-w-xl mx-auto">
          If you're ready to begin the OBA process or want support preparing for the exams, Sky Consultant is here to guide you.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-8 py-3 rounded transition-colors">
          Contact Us Today
        </button>
      </div>
    </section>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function OBANursesPage() {
  return (
    <div className="w-full min-h-screen font-sans">
      <HeroSection />
      <IntroSection />
      <WhatIsOBASection />
      <OBAProcessSection />
      <OBAPreparationSection />
      <SkyConsultantSection />
      <WhatYoullLearnSection />
      <CTASection />
    </div>
  );
}