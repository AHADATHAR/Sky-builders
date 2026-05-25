import { useState, useEffect, useRef } from "react";

// ── Lucide icon helper ─────────────────────────────────────────────────────────
function Icon({ name, size = 24, color = "white" }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!document.getElementById("lucide-pv")) {
      const s = document.createElement("script");
      s.id = "lucide-pv";
      s.src = "https://unpkg.com/lucide@latest/dist/umd/lucide.js";
      document.head.appendChild(s);
    }
    const paint = () => {
      if (!ref.current || !window.lucide) return;
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      el.style.cssText = `width:${size}px;height:${size}px;color:${color}`;
      ref.current.appendChild(el);
      window.lucide.createIcons({ nodes: [el] });
    };
    if (window.lucide) paint();
    else {
      const id = setInterval(() => {
        if (window.lucide) { paint(); clearInterval(id); }
      }, 100);
      return () => clearInterval(id);
    }
  }, [name, size, color]);
  return <span ref={ref} className="flex items-center justify-center" />;
}

// ── Button ─────────────────────────────────────────────────────────────────────
function Btn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        inline-block bg-[#c0392b] hover:bg-[#a93226]
        text-white font-bold font-sans text-[13px] tracking-[0.5px]
        py-[13px] px-[26px] border-none rounded cursor-pointer
        transition-all duration-200 hover:-translate-y-px
      "
    >
      {children}
    </button>
  );
}

// ── Section 1 – Hero ───────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-[520px] flex items-center py-[60px] px-[5%] overflow-hidden w-[90%] mx-auto my-[90px] rounded-[20px]"
      style={{ background: "linear-gradient(135deg,#0d1b3e 0%,#1a2a55 50%,#0d2060 100%)" }}
    >
      {/* background photo */}
      <div
        className="absolute inset-0 z-0 opacity-[0.18] bg-center bg-cover"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=60')" }}
      />
      <div className="relative z-[1] max-w-[600px]">
        <span className="inline-block bg-white/15 border border-white/30 text-white text-[10px] font-bold tracking-[1.5px] uppercase py-[5px] px-[14px] rounded-[20px] mb-[22px]">
          Employer Sponsored Visa
        </span>
        <h1 className="font-sans text-[clamp(24px,5vw,40px)] font-bold text-white leading-[1.2] mb-4">
          Parent Visa – Subclass 103
        </h1>
        <p className="text-[clamp(13px,2vw,16px)] text-white/85 leading-[1.65] mb-[30px] max-w-[440px]">
          Securing your family's future through permanent residency and dedicated support.
        </p>
        <Btn>Schedule Your Consultation</Btn>
      </div>
    </section>
  );
}

// ── Section 2 – Intro ──────────────────────────────────────────────────────────
function Intro() {
  return (
    <section className="bg-white py-[70px] px-[5%]">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_280px] gap-9 md:gap-[60px] items-center">
        <div>
          <p className="font-sans text-[clamp(15px,2.2vw,19px)] font-semibold text-[#0d1b3e] leading-[1.55] mb-[22px] border-l-4 border-[#c0392b] pl-[18px]">
            The Parent Visa (Subclass 103) is a pathway designed to allow parents of Australian citizens,
            permanent residents, or eligible New Zealand citizens to move to Australia permanently.
          </p>
          {[
            "This visa category prioritises the reunification of families, acknowledging the vital role parents play in the domestic and emotional stability of Australian households. It provides a permanent residency status, granting holders the right to live, work, and study in the country indefinitely.",
            "Managed with a high level of institutional rigor, the application process ensures that all sponsors and applicants meet the stringent health, character, and financial requirements necessary to maintain the integrity of the Australian migration system.",
          ].map((t, i) => (
            <p key={i} className="text-[14px] text-[#5a6478] leading-[1.8] mb-4">{t}</p>
          ))}
        </div>

        {/* visual cards */}
        <div className="grid grid-rows-2 gap-3 h-[160px] md:h-[220px]">
          <div
            className="rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#0d1b3e,#1e3a7a)" }}
          >
            <div className="w-14 h-14 bg-[#c0392b] rounded-full flex items-center justify-center">
              <Icon name="users" size={26} color="white" />
            </div>
          </div>
          <div className="bg-[#f5f6f8] rounded-lg border-2 border-[#e2e6ef]" />
        </div>
      </div>
    </section>
  );
}

// ── Section 3 – Overview ───────────────────────────────────────────────────────
const FEATURES = [
  "Live in Australia permanently",
  "Sponsor eligible family members in the future, subject to migration rules",
  "Travel to and from Australia for up to five years from the date of visa grant.",
  "Apply for Australian citizenship when eligible",
  "Access Medicare, Australia's public healthcare system",
];

function Overview() {
  return (
    <section className="bg-[#f5f6f8] py-[70px] px-[5%]">
      <div className="w-[90%] mx-auto">
        <h2 className="font-sans text-[clamp(20px,3.2vw,28px)] font-bold text-[#0d1b3e] mb-[18px]">
          Overview of the Parent Visa (Subclass 103)
        </h2>
        <p className="text-[14px] text-[#5a6478] leading-[1.8] max-w-[820px] mb-9">
          The Parent Visa (Subclass 103) is a permanent residence visa that enables parents to move to Australia and live with their eligible child on a long-term basis. This visa is part of Australia's family migration program and is suitable for parents who are prepared for longer processing times in exchange for a lower visa application charge compared to contributory parent visas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-[14px]">
          {FEATURES.map((f, i) => (
            <div key={i} className="flex items-start gap-3 text-[14px] text-[#1a1a2e] leading-[1.55] py-1">
              <span className="shrink-0 w-[10px] h-[10px] bg-[#c0392b] rounded-sm mt-[5px]" />
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 4 – Eligibility ────────────────────────────────────────────────────
function EligCard({ title, items }) {
  return (
    <div className="bg-white/[0.06] border border-white/[0.12] rounded-[10px] p-[28px_28px_30px]">
      <h3 className="font-sans text-[18px] font-semibold text-white mb-[22px] pb-[14px] border-b border-white/[0.15]">
        {title}
      </h3>
      <ul className="list-none flex flex-col gap-[14px]">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-[13.5px] text-white/[0.82] leading-[1.55]">
            <span className="shrink-0 w-2 h-2 bg-[#c0392b] rounded-sm mt-[6px]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Eligibility() {
  return (
    <section className="bg-[#0d1b3e] py-[70px] px-[5%]">
      <div className="w-[90%] mx-auto">
        <h2 className="font-sans text-[clamp(20px,3.2vw,28px)] font-bold text-white mb-9">
          Who Can Apply for Parent Visa (Subclass 103)?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EligCard
            title="Parent Eligibility"
            items={[
              "Have an eligible child who is an Australian citizen, Australian permanent resident, or eligible New Zealand citizen",
              "Meet health and character requirements",
              "Comply with all Australian laws and visa conditions",
              "Not hold or have applied for a Sponsored Parent at the time of application",
            ]}
          />
          <EligCard
            title="Sponsorship Requirements"
            items={[
              "Be settled in Australia",
              "Be an Australian citizen, permanent resident, or eligible New Zealand citizen.",
              "Agree to sponsor the parent and support them during their initial settlement period.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

// ── Section 5 – Cost ───────────────────────────────────────────────────────────
const COST_ITEMS = [
  { label: "Visa Charge", amount: "$7,345", desc: "The base application charge for the main applicant." },
  { label: "Additional Charges", amount: null, desc: "Fees apply for each additional family member included in the application, alongside costs for health checks and police certificates." },
  { label: "Processing Time", amount: null, desc: "Due to high demand and capping, processing can take significantly longer than other categories. Regular queue updates are provided." },
];

function Cost() {
  return (
    <section className="bg-white py-[70px] px-[5%]">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-9 md:gap-[60px] items-start">
        <h2 className="font-sans text-[clamp(20px,3.2vw,28px)] font-bold text-[#0d1b3e]">
          Visa Cost and Processing Time
        </h2>
        <div className="flex flex-col">
          {COST_ITEMS.map((item, i) => (
            <div key={i} className={`flex gap-5 ${i < COST_ITEMS.length - 1 ? "pb-8" : ""}`}>
              <div className="flex flex-col items-center shrink-0">
                <div className="w-[14px] h-[14px] border-[3px] border-[#c0392b] rounded-full bg-white shrink-0" />
                {i < COST_ITEMS.length - 1 && (
                  <div className="w-[2px] flex-1 bg-[#e2e6ef] mt-1" />
                )}
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#5a6478] mb-1">{item.label}</p>
                {item.amount && (
                  <p className="font-serif text-[22px] font-bold text-[#c0392b] mb-[6px]">{item.amount}</p>
                )}
                <p className="text-[13.5px] text-[#5a6478] leading-[1.65]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 6 – Why Choose ─────────────────────────────────────────────────────
const WHY_ITEMS = [
  "Honest advice on visa options and waiting times",
  "Assistance with sponsorship",
  "Assurance of support requirements",
  "End-to-end application support until a decision is made",
];

function Why() {
  return (
    <section className="bg-[#f5f6f8] py-[70px] px-[5%]">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_320px] gap-9 md:gap-[60px] items-center">
        <div>
          <h2 className="font-sans text-[clamp(20px,3.2vw,28px)] font-bold text-[#0d1b3e] mb-3">
            Why Choose Sky Consultant?
          </h2>
          <p className="text-[14px] text-[#5a6478] leading-[1.7] mb-7 max-w-[480px]">
            Parent visa applications are complex and require careful preparation, long-term planning, and accurate documentation. At our visa consultation firm, we offer:
          </p>
          <div className="flex flex-col gap-3">
            {WHY_ITEMS.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg py-4 px-5 flex items-center gap-[14px] text-[14px] font-semibold text-[#1a1a2e] shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
              >
                <span className="shrink-0 w-[10px] h-[10px] bg-[#c0392b] rounded-sm" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Red promo card */}
        <div className="bg-[#c0392b] rounded-xl p-[36px_30px] flex flex-col items-center justify-center text-center min-h-[220px] relative overflow-hidden">
          <div className="absolute -top-[30px] -right-[30px] w-[120px] h-[120px] rounded-full bg-white/[0.08]" />
          <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full bg-white/[0.06]" />
          <div className="w-16 h-16 bg-white/[0.18] rounded-full flex items-center justify-center mb-[18px] relative z-[1]">
            <Icon name="shield-check" size={30} color="white" />
          </div>
          <h4 className="font-serif text-[17px] font-bold text-white mb-[10px] relative z-[1]">
            Authorized Representation
          </h4>
          <p className="text-[13px] text-white/[0.88] leading-[1.6] relative z-[1]">
            MARA Registered Consultants overseeing every detail of your application.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Section 7 – CTA ────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="bg-white py-[60px] px-[5%]">
      <div className="w-[90%] mx-auto">
        <div className="max-w-[900px] mx-auto bg-[#0d1b3e] rounded-2xl px-6 py-[44px] md:px-10 md:py-[60px] text-center">
          <h2 className="font-sans text-[clamp(20px,3.2vw,30px)] font-bold text-white mb-[14px] leading-[1.3]">
            Reunite With Your Parents in Australia
          </h2>
          <p className="text-[14px] text-white/75 leading-[1.7] max-w-[520px] mx-auto mb-8">
            Connect with our migration professionals today and take the first step toward keeping your family together in Australia.
          </p>
          <Btn>Contact Sky Consultant Now</Btn>
        </div>
      </div>
    </section>
  );
}

// ── Root component ─────────────────────────────────────────────────────────────
export default function ParentVisa103() {
  return (
    <div className="font-sans text-[#1a1a2e] bg-white overflow-x-hidden">
      <Hero />
      <Intro />
      <Overview />
      <Eligibility />
      <Cost />
      <Why />
      <CTA />
    </div>
  );
}