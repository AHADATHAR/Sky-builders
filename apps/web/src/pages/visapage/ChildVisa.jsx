import { useState, useEffect, useRef } from "react";

// ── Lucide icon helper ─────────────────────────────────────────────────────────
function Icon({ name, size = 24, color = "white" }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!document.getElementById("lucide-cv")) {
      const s = document.createElement("script");
      s.id = "lucide-cv";
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
      className="inline-block bg-[#c0392b] hover:bg-[#a93226] text-white font-bold font-sans text-[13px] tracking-[0.5px] uppercase py-[13px] px-[26px] border-none rounded cursor-pointer transition-all duration-200 hover:-translate-y-px"
    >
      {children}
    </button>
  );
}

// ── Section 1 – Hero ───────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative min-h-[220px] flex items-center overflow-hidden w-[90%] mx-auto my-[90px] rounded-[20px]"
      style={{ background: "linear-gradient(135deg,#0d1b3e 0%,#1a2a55 50%,#0d2060 100%)" }}
    >
      {/* background photo */}
      <div
        className="absolute inset-0 z-0 opacity-[0.18] bg-center bg-cover"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=60')" }}
      />
      {/* dark gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(to right, rgba(10,20,60,0.92) 55%, rgba(10,20,60,0.6) 100%)" }}
      />
      <div className="relative z-[2] w-[90%] mx-auto py-[80px]">
        <span className="inline-block border border-white/50 text-white text-[10px] font-bold tracking-[1.5px] uppercase py-[5px] px-[14px] rounded-[20px] mb-[22px]">
          Child Visa
        </span>
        <h1 className="font-sans text-[clamp(32px,5vw,54px)] font-bold text-white leading-[1.15] mb-5 max-w-[600px]">
          Child Visa Subclass 101
        </h1>
        <p className="font-sans text-[clamp(15px,2vw,18px)] text-white/85 leading-[1.6] max-w-[520px] mb-9">
          Do you want your child to join you in Australia and enjoy the security of permanent residency?
        </p>
        <Btn>Schedule Your Consultation</Btn>
      </div>
    </section>
  );
}

// ── Section 2 – About ──────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section className="bg-white py-[70px] px-[5%]">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_280px] gap-9 md:gap-[60px] items-center">
        <div>
          <p className="font-sans text-[clamp(15px,2.2vw,19px)] font-semibold text-[#0d1b3e] leading-[1.55] mb-[22px] border-l-4 border-[#c0392b] pl-[18px]">
            The Child Visa (Subclass 101) allows eligible children living outside Australia to migrate
            permanently and live with their parent(s) in Australia.
          </p>
          {[
            "This visa is ideal for parents who are Australian citizens, permanent residents, or eligible New Zealand citizens and wish to reunite their family in Australia. With the Child Visa, your child can settle in Australia permanently, access education, and enjoy Australia's public healthcare system.",
            "At Sky Consultant, we understand how important family unity is, and our experienced migration professionals are here to guide you through every step of the visa process with care and clarity.",
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

// ── Section 3 – Eligibility ────────────────────────────────────────────────────
const ELIGIBILITY_COLS = [
  {
    title: "Child Requirements",
    items: [
      "Be the biological, adopted, or stepchild of an eligible parent.",
      "Be under 18 years of age, or over 18 and unable to work due to a disability, or a full-time student aged between 18 and 25 who is financially dependent on the parent.",
      "Be single and dependent on the sponsoring parent. Meet health and character requirements.",
    ],
  },
  {
    title: "Parent Requirements",
    items: [
      "An Australian citizen, or",
      "An Australian permanent resident, or",
      "An eligible New Zealand citizen",
    ],
  },
  {
    title: "Adopted Children",
    items: [
      "The adoption must have been arranged by a parent who was not an Australian citizen, permanent resident, or eligible New Zealand citizen at the time of adoption.",
      "The child must have been adopted before turning 18.",
    ],
  },
];

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

function EligibilitySection() {
  return (
    <section className="bg-[#0d1b3e] py-[70px] px-[5%]">
      <div className="w-[90%] mx-auto">
        <h2 className="font-sans text-[clamp(20px,3.2vw,28px)] font-bold text-white mb-9">
          Eligibility Requirements for Child Visa (Subclass 101)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ELIGIBILITY_COLS.map((col, i) => (
            <EligCard key={i} title={col.title} items={col.items} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 4 – Cost ───────────────────────────────────────────────────────────
const COST_ITEMS = [
  {
    label: "Base Application Cost",
    amount: "AUD $3,235",
    desc: "Additional costs may apply for health checks and police clearances.",
  },
  {
    label: "Estimated Processing Time",
    amount: "17 to 30 months",
    desc: "Times vary based on document completion and departmental load.",
  },
];

function CostSection() {
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
                <p className="font-serif text-[22px] font-bold text-[#c0392b] mb-[6px]">{item.amount}</p>
                <p className="text-[13.5px] text-[#5a6478] leading-[1.65]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 5 – Why Choose ─────────────────────────────────────────────────────
const WHY_ITEMS = [
  "Expert advice tailored to your family situation",
  "Assistance with preparing and lodging a complete application",
  "Guidance on health, character, and documentation requirements",
  "End-to-end support until a visa decision is made",
];

function WhyChooseSection() {
  return (
    <section className="bg-[#f5f6f8] py-[70px] px-[5%]">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_320px] gap-9 md:gap-[60px] items-center">
        <div>
          <h2 className="font-sans text-[clamp(20px,3.2vw,28px)] font-bold text-[#0d1b3e] mb-3">
            Why Choose Sky Consultant?
          </h2>
          <p className="text-[14px] text-[#5a6478] leading-[1.7] mb-7 max-w-[480px]">
            Child visa applications require careful preparation and accurate documentation. At Sky Consultant, we offer:
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

// ── Section 6 – CTA ────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="bg-white py-[60px] px-[5%]">
  <div className="max-w-[1400px] mx-auto">
    
    <div className="bg-[#0d1b3e] rounded-2xl px-6 py-[44px] md:px-10 md:py-[60px] text-center">
      
      <h2 className="font-sans text-[clamp(20px,3.2vw,30px)] font-bold text-white mb-[14px] leading-[1.3]">
        Bring Your Family Together in Australia
      </h2>

      <p className="text-[14px] text-white/75 leading-[1.7] max-w-[520px] mx-auto mb-8">
        If you want your child to live with you in Australia as a permanent
        resident, Sky Consultant is here to guide you in reuniting your
        family with confidence.
      </p>

      <Btn>Get Started Today</Btn>

    </div>

  </div>
</section> );
}

// ── Root component ─────────────────────────────────────────────────────────────
export default function ChildVisaPage() {
  return (
    <div className="font-sans text-[#1a1a2e] bg-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <EligibilitySection />
      <CostSection />
      <WhyChooseSection />
      <CTASection />
    </div>
  );
}