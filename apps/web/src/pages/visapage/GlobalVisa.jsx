import {
  Zap, Mountain, Building2, Monitor, GraduationCap, Wheat,
  Shield, Factory, Rocket, RefreshCw, Landmark, DollarSign,
  CheckCircle2, Users, FileText, Trophy, BookOpen, UserCheck,
  Award, ChevronRight, ClipboardList, Target, Handshake,
  TrendingUp, Globe, Lightbulb, MapPin,
} from "lucide-react";

/* ─── DATA ───────────────────────────────────────────────────── */
const sectors = [
  { icon: <Zap size={16} />, label: "Energy" },
  { icon: <Mountain size={16} />, label: "Resources" },
  { icon: <Building2 size={16} />, label: "Health Industries" },
  { icon: <Monitor size={16} />, label: "DigiTech" },
  { icon: <GraduationCap size={16} />, label: "Education" },
  { icon: <Wheat size={16} />, label: "Agri-Food & AgriTech" },
  { icon: <Shield size={16} />, label: "Defence" },
  { icon: <Factory size={16} />, label: "Advanced Manufacturing" },
  { icon: <Rocket size={16} />, label: "Space" },
  { icon: <RefreshCw size={16} />, label: "Circular Economy" },
  { icon: <Landmark size={16} />, label: "Infrastructure & Tourism" },
  { icon: <DollarSign size={16} />, label: "Financial Services" },
];

const eligCriteria = [
  "Be recognised with a record of outstanding achievements",
  "Demonstrate current prominence in their field of expertise",
  "Show evidence of being an asset to Australia in their industry",
  "Have the ability to secure employment or become established in Australia",
  "Be nominated by a recognised Australian individual or organisation with a national reputation in the same field",
  "Demonstrate the ability to attract a salary at or above AUD 175,000 (indexed annually on 1 July)",
];

const trackRecord = [
  { icon: <Users size={16} />, label: "Senior or leadership roles" },
  { icon: <FileText size={16} />, label: "Patents or innovative contributions" },
  { icon: <Trophy size={16} />, label: "Professional or industry awards" },
  { icon: <BookOpen size={16} />, label: "International publications" },
  { icon: <UserCheck size={16} />, label: "Professional memberships" },
  { icon: <Award size={16} />, label: "PhD qualifications with exceptional and recognised achievements" },
];

const keyFeatures = [
  "Two streams available: Established Businesses and Startups.",
  "Flexibility to negotiate variations to standard TSS requirements",
  "Priority processing of GTES agreements",
  "Access to highly skilled and niche talent globally.",
  "Visa validity of up to 4 years with a pathway to permanent residency",
  "Higher earning thresholds reflecting senior and specialised roles",
  "Ability to negotiate age requirements for permanent residency",
];

const sisaBenefits = [
  { icon: <TrendingUp size={15} />, text: "Provides access to mentorship, networking, and innovation ecosystems" },
  { icon: <Globe size={15} />, text: "Complements existing business innovation and investment visas" },
  { icon: <Lightbulb size={15} />, text: "Encourages entrepreneurship and job creation in South Australia" },
  { icon: <MapPin size={15} />, text: "Strengthens Australia's ability to attract global innovators and founders" },
];

const helpItems = [
  { icon: <ClipboardList size={17} />, text: "Professional eligibility assessments" },
  { icon: <Target size={17} />, text: "Strategic guidance for nominations and sponsorship" },
  { icon: <FileText size={17} />, text: "Assistance with Expressions of Interest (EOI)" },
  { icon: <Handshake size={17} />, text: "End-to-end support for visa applications" },
];

/* ─── BUTTON ─────────────────────────────────────────────────── */
function Btn({ children }) {
  return (
    <button className="inline-flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-sans font-semibold text-[13px] tracking-[0.2px] py-[13px] px-[26px] rounded border-none cursor-pointer transition-all duration-200 hover:-translate-y-px">
      {children}
    </button>
  );
}

/* ─── HERO ───────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative min-h-[520px] flex items-center overflow-hidden w-[90%] mx-auto my-[90px] rounded-[20px]"
      style={{ background: "linear-gradient(135deg,#0d1b3e 0%,#1a2a55 50%,#0d2060 100%)" }}
    >
      <div
        className="absolute inset-0 z-0 opacity-[0.18] bg-center bg-cover"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80')" }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(to right, rgba(10,18,50,0.97) 38%, rgba(10,18,50,0.82) 60%, rgba(10,18,50,0.55) 100%)" }}
      />
      <div className="relative z-[2] w-[90%] mx-auto py-[88px]">
        <span className="inline-block border border-white/35 text-white text-[10px] font-semibold tracking-[1.8px] uppercase py-[5px] px-[15px] rounded-[20px] mb-6">
          Talent Program
        </span>
        <h1 className="font-sans text-[clamp(28px,4.1vw,40px)] font-bold text-white leading-[1.12] max-w-[500px] mb-5">
          Global Talent Independent Program
        </h1>
        <p className="font-sans text-[clamp(13px,1.6vw,15px)] text-white max-w-[440px] leading-[1.75] mb-9">
          Australia is committed to building a stronger economy by attracting the world's most talented and innovative individuals.
        </p>
        <Btn>Schedule Your Consultation</Btn>
      </div>
    </section>
  );
}

/* ─── GTI INTRO ──────────────────────────────────────────────── */
function GTIIntro() {
  return (
    <section className="bg-white py-[72px] px-[5%]">
      <div className="w-[90%] mx-auto">
        <p className="font-sans text-[clamp(18px,2.4vw,22px)] font-extrabold text-[#0d1b3e] mb-1">
          1. Global Talent Independent Program (GTI)
        </p>
        <div className="w-[44px] h-[3px] bg-[#c0392b] rounded mb-6" />
        <p className="text-[14.5px] text-[#3c3c3c] leading-[1.85] mb-4 max-w-[820px]">
          The Global Talent Independent (GTI) Program is a streamlined visa pathway that grants permanent residency to highly skilled professionals who can contribute to Australia's future-focused industries.
        </p>
        <p className="text-[14.5px] text-[#3c3c3c] leading-[1.85] max-w-[820px]">
          This program targets the world's best talent, offering the opportunity to live and work permanently in Australia while driving innovation, research, and economic growth across key sectors.
        </p>
      </div>
    </section>
  );
}

/* ─── TARGET SECTORS ─────────────────────────────────────────── */
function TargetSectors() {
  return (
    <section className="bg-[#f4f6fb] py-[72px] px-[5%]">
      <div className="w-[90%] mx-auto">
        <h2 className="font-sans text-[clamp(18px,2.6vw,24px)] font-extrabold text-[#0d1b3e] mb-1 leading-[1.25]">
          Target Sectors
        </h2>
        <div className="w-[44px] h-[3px] bg-[#c0392b] rounded mb-6" />
        <p className="text-[14.5px] text-[#3c3c3c] leading-[1.85] mb-7 max-w-[820px]">
          To be eligible, applicants must demonstrate expertise in one of the following priority sectors:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[10px]">
          {sectors.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-[10px] bg-white border border-[#e0e4ee] rounded-[6px] py-[13px] px-[16px] text-[13px] font-medium text-[#0d1b3e] transition-shadow duration-200 hover:shadow-[0_4px_14px_rgba(13,27,62,0.09)]"
            >
              <span className="text-[#c0392b] shrink-0">{s.icon}</span>
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ELIGIBILITY GTI ────────────────────────────────────────── */
function EligibilityGTI() {
  return (
    <section className="bg-[#0d1b3e] py-[72px] px-[5%]">
      <div className="w-[90%] mx-auto">
        <h2 className="font-sans text-[clamp(18px,2.6vw,24px)] font-extrabold text-white mb-1 leading-[1.25]">
          Eligibility Requirements
        </h2>
        <div className="w-[44px] h-[3px] bg-[#c0392b] rounded mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[56px]">
          {/* Left – criteria */}
          <div>
            <p className="text-[13.5px] text-white/60 leading-[1.75] mb-6 italic">
              To qualify and receive an invitation under the GTI Program, applicants must meet the following criteria:
            </p>
            <div className="flex flex-col gap-4">
              {eligCriteria.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="shrink-0 mt-[1px] text-[#c0392b]" />
                  <span className="text-[14px] text-white/85 leading-[1.65]">{c}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right – track record */}
          <div>
            <p className="text-[13.5px] text-white/60 leading-[1.75] mb-5">
              Applicants must also show an exceptional professional track record, which may include one or more of the following:
            </p>
            <div className="flex flex-col gap-[10px]">
              {trackRecord.map((t, i) => (
                <div key={i} className="flex items-center gap-[14px] bg-white/[0.06] border border-white/[0.12] rounded-[7px] py-[13px] px-[16px] text-[13.5px] text-white font-medium">
                  <div className="w-9 h-9 bg-white/[0.1] rounded-[7px] flex items-center justify-center shrink-0 text-white">
                    {t.icon}
                  </div>
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── GTES INTRO ─────────────────────────────────────────────── */
function GTESIntro() {
  return (
    <section className="bg-[#f4f6fb] py-[72px] px-[5%]">
      <div className="w-[90%] mx-auto">
        <p className="font-sans text-[clamp(18px,2.4vw,22px)] font-extrabold text-[#0d1b3e] mb-1">
          2. Global Talent Employer-Sponsored Program (GTES)
        </p>
        <div className="w-[44px] h-[3px] bg-[#c0392b] rounded mb-6" />
        {[
          "The Global Talent Employer-Sponsored (GTES) Program enables Australian employers to sponsor highly skilled overseas professionals for roles that cannot be filled locally or through standard visa programs.",
          "Under this program, employers can sponsor candidates through a Temporary Skill Shortage (TSS) visa, with greater flexibility than standard visa pathways.",
          "GTES attract highly specialised talent who act as job multipliers, supporting business growth, innovation, and the creation of new jobs for Australians.",
        ].map((t, i) => (
          <p key={i} className="text-[14.5px] text-[#3c3c3c] leading-[1.85] mb-4 max-w-[820px] last:mb-0">{t}</p>
        ))}
      </div>
    </section>
  );
}

/* ─── KEY FEATURES ───────────────────────────────────────────── */
function KeyFeatures() {
  return (
    <section className="bg-white py-[72px] px-[5%]">
      <div className="w-[90%] mx-auto">
        <h2 className="font-sans text-[clamp(18px,2.6vw,24px)] font-extrabold text-[#0d1b3e] mb-1 leading-[1.25]">
          Key Features of the GTES Program
        </h2>
        <div className="w-[44px] h-[3px] bg-[#c0392b] rounded mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {keyFeatures.map((f, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 py-[18px] pr-5 border-b border-[#e4e8f0] ${i >= keyFeatures.length - (keyFeatures.length % 3 || 3) ? "lg:border-b-0" : ""} ${i >= keyFeatures.length - 2 ? "md:border-b-0 lg:border-b" : ""} ${i === keyFeatures.length - 1 ? "border-b-0" : ""}`}
            >
              <ChevronRight size={16} className="text-[#c0392b] shrink-0 mt-[2px]" />
              <span className="text-[13.5px] text-[#2c2c2c] leading-[1.6]">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── STARTUPS ELIGIBILITY ───────────────────────────────────── */
function StartupsEligibility() {
  return (
    <section className="bg-[#f4f6fb] py-[72px] px-[5%]">
      <div className="w-[90%] mx-auto">
        <h2 className="font-sans text-[clamp(18px,2.6vw,24px)] font-extrabold text-[#0d1b3e] mb-1 leading-[1.25]">
          Eligibility for Startups
        </h2>
        <div className="w-[44px] h-[3px] bg-[#c0392b] rounded mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-7">
          {/* Employer */}
          <div className="bg-white border border-[#e0e4ee] rounded-[8px] p-[28px_26px]">
            <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#888] mb-[10px]">Employer Criteria</p>
            <p className="text-[13.5px] text-[#1a2a5e] font-semibold italic mb-[14px]">Startups must:</p>
            {[
              "Demonstrate job creation and benefit to Australia.",
              "Provide labour market testing for the position.",
              "Operate in STEM-related or other niche sectors.",
              "Be assessed and endorsed by an independent startup advisory panel.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 mb-[10px] text-[13.5px] text-[#2c2c2c] leading-[1.6]">
                <span className="w-[5px] h-[5px] rounded-full bg-[#c0392b] shrink-0 mt-[7px]" />
                {item}
              </div>
            ))}
          </div>
          {/* Candidate */}
          <div className="bg-white border border-[#e0e4ee] rounded-[8px] p-[28px_26px]">
            <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#888] mb-[10px]">Candidate Criteria</p>
            <p className="text-[13.5px] text-[#1a2a5e] font-semibold italic mb-[14px]">Applicants sponsored by startups must:</p>
            {[
              "Meet health, character, and security requirements.",
              "Have no familial relationship with startup directors.",
              "Hold qualifications relevant to the specialized role.",
              "Have at least 3 years of relevant professional experience.",
              "Be capable of fulfilling the specific technical requirements.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 mb-[10px] text-[13.5px] text-[#2c2c2c] leading-[1.6]">
                <span className="w-[5px] h-[5px] rounded-full bg-[#c0392b] shrink-0 mt-[7px]" />
                {item}
              </div>
            ))}
          </div>
        </div>
        {/* Extra banner */}
        <div className="bg-[#0d1b3e] rounded-[8px] p-[28px_32px]">
          <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/50 mb-3">Additional Startup Requirements</p>
          <p className="text-[14px] text-white/75 mb-[18px]">Startups must meet at least one of the following:</p>
          <div className="flex flex-wrap gap-y-[14px] gap-x-10">
            {[
              "Received an Accelerating Commercialisation Grant",
              "Received AUD 50,000 or more from an ESVCLP",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-[10px] text-[13.5px] text-white">
                <CheckCircle2 size={17} className="text-[#c0392b] shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SISA ───────────────────────────────────────────────────── */
function SISA() {
  return (
    <section className="bg-white py-[72px] px-[5%]">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[1fr_340px] gap-[56px] items-start">
        <div>
          <p className="font-sans text-[clamp(18px,2.4vw,22px)] font-extrabold text-[#0d1b3e] mb-1">
            3. Supporting Innovation in South Australia (SISA)
          </p>
          <div className="w-[44px] h-[3px] bg-[#c0392b] rounded mb-6" />
          <p className="text-[14.5px] text-[#3c3c3c] leading-[1.85] mb-4 max-w-[820px]">
            The Supporting Innovation in South Australia (SISA) program allows foreign entrepreneurs to establish seed-stage startups and develop innovative business ideas in South Australia.
          </p>
          <p className="text-[14.5px] text-[#3c3c3c] leading-[1.85] mb-7 max-w-[820px]">
            This pilot program helps attract entrepreneurial talent, encourage innovation, and strengthen the regional economy. Once fully established, it is expected to be rolled out nationally.
          </p>
          <h3 className="text-[16px] font-bold text-[#0d1b3e] mb-4">Benefits of SISA</h3>
          <div className="flex flex-col gap-[10px] mb-4">
            {sisaBenefits.map((b, i) => (
              <div key={i} className="flex items-start gap-[14px] bg-white border border-[#e4e8f0] rounded-[7px] py-[13px] px-[16px]">
                <div className="w-[34px] h-[34px] bg-[#f0f2f8] rounded-[6px] flex items-center justify-center shrink-0 text-[#c0392b]">
                  {b.icon}
                </div>
                <span className="text-[13.5px] text-[#2c2c2c] leading-[1.6] pt-1">{b.text}</span>
              </div>
            ))}
          </div>
          <p className="text-[12.5px] text-[#888] italic leading-[1.65] max-w-[560px]">
            The South Australian Government supported SISA initiatives for creating opportunities for entrepreneurs to collaborate, share ideas, and build innovative ventures together.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1559628233-100c798642d8?w=700&q=75"
          alt="South Australia aerial"
          className="w-full h-[280px] md:h-[280px] object-cover rounded-[8px]"
        />
      </div>
    </section>
  );
}

/* ─── HOW WE HELP ────────────────────────────────────────────── */
function HowWeHelp() {
  return (
   <section className="bg-white py-[60px] px-[5%] flex justify-center">
  <div className="w-full max-w-[1300px]">
    
    <div className="bg-[#0d1b3e] rounded-2xl py-[44px] px-6 md:px-10 md:py-[60px] mx-auto">
      
      <div className="text-center mb-10">
        <h2 className="font-sans text-[clamp(20px,3.2vw,30px)] font-bold text-white mb-[14px] leading-[1.3]">
          How Sky Consultant Can Help
        </h2>

        <div className="w-[44px] h-[3px] bg-[#c0392b] rounded mx-auto mb-5" />

        <p className="text-[14px] text-white/75 leading-[1.8] max-w-[560px] mx-auto">
          Global Talent programs are highly competitive and evidence-driven.
          Success depends on accurate eligibility assessment, strong
          documentation, and a clear strategy. That's why our experts provide:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-9">
        {helpItems.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-[14px] bg-white/[0.06] border border-white/[0.12] rounded-[8px] p-[18px]"
          >
            <div className="w-9 h-9 bg-white/[0.1] rounded-[7px] flex items-center justify-center shrink-0 text-white">
              {item.icon}
            </div>

            <span className="text-[13.5px] text-white font-medium leading-[1.55] pt-[6px]">
              {item.text}
            </span>
          </div>
        ))}
      </div>

      <p className="text-center text-[clamp(14px,2vw,16px)] text-white/80 font-semibold leading-[1.65] max-w-[540px] mx-auto">
        Contact Sky Consultant today to learn more about the Global Talent
        Independent Program and build your future in Australia.
      </p>
    </div>

  </div>
</section>
  );
}

/* ─── ROOT ───────────────────────────────────────────────────── */
export default function GlobalTalentProgram() {
  return (
    <div className="font-sans text-[#0d1b3e] bg-white leading-[1.6] overflow-x-hidden">
      <Hero />
      <GTIIntro />
      <TargetSectors />
      <EligibilityGTI />
      <GTESIntro />
      <KeyFeatures />
      <StartupsEligibility />
      <SISA />
      <HowWeHelp />
    </div>
  );
}