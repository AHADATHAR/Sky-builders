import {
  Briefcase, Clock, Calendar,
  Handshake, Users
} from "lucide-react";

/* ─── DATA ───────────────────────────────────────────────────── */
const helpBullets = [
  "You can live and work in Australia for an approved sponsoring employer for the duration of your visa.",
  "Depending on the stream, you may stay in Australia for up to two, four, or five years.",
  "You can include eligible family members, such as your spouse or dependent children, who can live, work, and study in Australia.",
  "You are allowed to travel in and out of Australia freely while your visa remains valid.",
  "In certain cases, this visa provides a pathway to permanent residency through employer-sponsored permanent visas.",
];

const grayStreams = [
  {
    icon: <Handshake size={14} />,
    type: "Labour Agreement Stream",
    desc: "Utilized when an employer has entered into a formal labour agreement with the Australian Government. This allows for sponsorship of overseas workers in accordance with terms specified in the agreement, addressing unique market needs not covered by standard lists.",
  },
  {
    icon: <Users size={14} />,
    type: "Subsequent Entrant",
    desc: "For family members of primary TSS visa holders who are applying separately and wish to join the primary visa holder in Australia. This ensures family unity during the duration of the employment contract.",
  },
];

const appSteps = [
  { num: 1, title: "Standard Business Sponsorship", desc: "The employer applies for approval as a standard business sponsor." },
  { num: 2, title: "Nomination Application", desc: "The employer nominates a specific position to be filled by the overseas worker." },
  { num: 3, title: "Visa Application", desc: "The skilled worker applies for the Subclass 482 visa linked to the nomination." },
  { num: 4, title: "Health and Character Checks", desc: "Applicants undergo required health examinations and police clearances." },
  { num: 5, title: "Visa Grant", desc: "Upon approval, the visa is granted, and the worker can commence their role in Australia." },
];

/* ─── SECTION COMPONENTS ─────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-[300px] mt-[90px] flex items-center rounded-2xl
 overflow-hidden mx-auto w-[95%]">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1524293581917-878a6d017c71?w=1600&q=80')",
          backgroundPosition: "center 40%",
        }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(10,18,52,0.97) 38%, rgba(10,18,52,0.82) 62%, rgba(10,18,52,0.50) 100%)",
        }}
      />
      {/* Content */}
      <div className="relative z-20 w-[90%] mx-auto py-20">
        <div className="inline-block border border-white/35 text-white/78 text-[10px] font-semibold tracking-[1.8px] uppercase px-4 py-1 rounded-full mb-6">
          Employer Nomination
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-[480px] mb-4">
          Temporary Skill Shortage Visa – Subclass 482
        </h1>
        <p className="text-sm md:text-[14.5px] text-white/70 max-w-[400px] leading-[1.78] mb-9">
          The Employer Nomination Scheme (ENS) visa (Subclass 186) is a permanent residency visa
          for skilled workers who are nominated by an Australian employer.
        </p>
        <button className="inline-flex items-center gap-2 bg-[#c0392b] hover:bg-[#e74c3c] text-white px-6 py-3 rounded-[5px] text-[13px] font-semibold transition-all hover:-translate-y-0.5 font-['']">
          Schedule Your Consultation
        </button>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="py-[72px]">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-16 items-center">
          {/* Left */}
          <div className="border-l-4 border-[#c0392b] pl-7">
            <p className="text-[14.5px] text-[#3c3c3c] leading-[1.85] mb-[18px]">
              If you are a skilled professional looking to work in Australia and have an employer
              willing to sponsor you, the Temporary Skill Shortage (TSS) visa can be an excellent
              pathway. This visa helps Australian employers address genuine skill shortages by hiring
              qualified overseas workers when suitable local candidates are not available.
            </p>
            <p className="text-[14.5px] text-[#3c3c3c] leading-[1.85]">
              With the Subclass 482 visa, you can live and work in Australia temporarily, gain
              valuable international experience, and in many cases, progress toward permanent
              residency. For such opportunities, Sky Consultant is here to support you at every
              stage of the process. We provide expert assistance from eligibility assessment to visa
              lodgement and ensure your application is accurate, compliant, and stress-free.
            </p>
          </div>
          {/* Right visual */}
          <div className="bg-[#0d1b3e] rounded-xl relative overflow-hidden flex items-center justify-center" style={{ aspectRatio: "3/4" }}>
            <div
              className="absolute -top-6 -right-6 w-[110px] h-[110px] bg-[#c0392b] rounded-full opacity-20"
            />
            <div
              className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <Briefcase size={64} style={{ color: "rgba(255,255,255,0.28)", position: "relative", zIndex: 1 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItHelps() {
  return (
    <section className="py-[72px] bg-[#f7f8fc]">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-[72px] items-center">
          <div>
            <h2 className="text-xl md:text-[26px] font-extrabold text-[#0d1b3e] leading-tight">
              How the Subclass 482 Visa Can Help You Work in Australia
            </h2>
          </div>
          <div className="flex flex-col">
            {helpBullets.map((b, i) => (
              <div
                key={i}
                className={`flex items-start gap-[14px] py-4 ${i < helpBullets.length - 1 ? "border-b border-[#eaecf4]" : ""}`}
              >
                <div className="w-2 h-2 bg-[#c0392b] rounded-sm flex-shrink-0 mt-[7px]" />
                <span className="text-[14px] text-[#2c2c2c] leading-[1.7]">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StreamTypes() {
  return (
    <section className="py-[72px]">
      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="text-center mb-11">
          <h2 className="text-lg md:text-2xl font-extrabold text-[#0d1b3e]">
            Types of Temporary Skill Shortage Visa (Subclass 482)
          </h2>
          <div className="w-11 h-[3px] bg-[#c0392b] rounded-sm mx-auto mt-2.5" />
        </div>

        {/* Short-Term — solo full-width card */}
        <div className="bg-white border border-[#e0e4ee] rounded-[10px] p-7 mb-5">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <div className="w-7 h-7 bg-[#fdecea] rounded-[6px] flex items-center justify-center text-[#c0392b] flex-shrink-0">
              <Clock size={14} />
            </div>
            <span className="text-[10px] font-bold tracking-[1.3px] uppercase text-[#c0392b]">
              Short-Term Stream
            </span>
          </div>
          <p className="text-[13.5px] text-[#555] leading-[1.72]">
            The Short-Term Stream is suitable for applicants whose occupations are listed on the
            Short-Term Skilled Occupation List (STSOL).
          </p>
        </div>

        {/* Medium-Term — left text + right image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
          <div className="bg-white border border-[#e0e4ee] rounded-[10px] p-7">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <div className="w-7 h-7 bg-[#fdecea] rounded-[6px] flex items-center justify-center text-[#c0392b] flex-shrink-0">
                <Calendar size={14} />
              </div>
              <span className="text-[10px] font-bold tracking-[1.3px] uppercase text-[#c0392b]">
                Medium-Term Stream
              </span>
            </div>
            <p className="text-[13.5px] text-[#555] leading-[1.72]">
              Specifically for occupations on the Medium and Long-term Strategic Skills List
              (MLTSSL) or the Regional Occupation List (ROL). This stream offers a stay of up to
              four years and provides a direct pathway to permanent residency.
            </p>
          </div>
          <div className="rounded-[10px] overflow-hidden bg-[#e8eaf0] min-h-[220px]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=75"
              alt="Professional at work"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>

        {/* Labour Agreement + Subsequent Entrant — gray cards */}
        {grayStreams.map((s, i) => (
          <div key={i} className="bg-[#f7f8fc] border border-[#e4e8f0] rounded-[10px] p-7 mb-5 last:mb-0">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <div className="w-7 h-7 bg-[#fdecea] rounded-[6px] flex items-center justify-center text-[#c0392b] flex-shrink-0">
                {s.icon}
              </div>
              <span className="text-[10px] font-bold tracking-[1.3px] uppercase text-[#c0392b]">
                {s.type}
              </span>
            </div>
            <p className="text-[13.5px] text-[#555] leading-[1.72]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ApplicationProcess() {
  return (
    <section className="py-[72px] bg-[#f7f8fc]">
      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-lg md:text-2xl font-extrabold text-[#0d1b3e]">
            Application Process for Subclass 482 Visa
          </h2>
          <div className="w-11 h-[3px] bg-[#c0392b] rounded-sm mx-auto mt-2.5" />
        </div>
        <div className="flex flex-col gap-3">
          {appSteps.map((step) => (
            <div
              key={step.num}
              className="flex items-start gap-5 bg-white border border-[#e4e8f0] rounded-[8px] p-5 md:p-6"
            >
              <div className="w-[34px] h-[34px] flex-shrink-0 bg-[#0d1b3e] rounded-[6px] flex items-center justify-center text-[13px] font-bold text-white">
                {step.num}
              </div>
              <div>
                <div className="text-[14.5px] font-bold text-[#0d1b3e] mb-1">{step.title}</div>
                <div className="text-[13.5px] text-[#555] leading-[1.65]">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-[72px]">
      <div className="w-[90%] mx-auto">
        <div className="bg-[#c0392b] py-[72px] px-10 text-center rounded-[10px]">
          <div className="text-xl md:text-[26px] font-extrabold text-white mb-3.5 leading-tight">
            Ready to Work in Australia?
          </div>
          <p className="text-[15px] text-white/80 leading-[1.7] mb-8 max-w-[520px] mx-auto">
            Speak with Our Migration Experts at Sky Consultant to Assess Your Eligibility and Move
            Forward with Confidence.
          </p>
          <button className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white/85 hover:border-white hover:bg-white/15 px-7 py-3 rounded-[5px] text-[13px] font-bold uppercase tracking-[0.8px] transition-all font-sans">
            Begin Assessment Now
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── ROOT ───────────────────────────────────────────────────── */
export default function TemporarySkillShortageVisa() {
  return (
    <div className="font-sans text-[#0d1b3e] bg-white leading-relaxed overflow-x-hidden">
      <Hero />
      <IntroSection />
      <HowItHelps />
      <StreamTypes />
      <ApplicationProcess />
      <CtaBanner />
    </div>
  );
}