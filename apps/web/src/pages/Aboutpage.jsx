import { memo, useState } from "react";
import { motion } from "framer-motion";

// ─── Icons ───────────────────────────────────────────────────────────────────
const GlobeIcon = memo(({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
));
GlobeIcon.displayName = "GlobeIcon";

const ChartIcon = memo(({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
  </svg>
));
ChartIcon.displayName = "ChartIcon";

const StarIcon = memo(({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
));
StarIcon.displayName = "StarIcon";

const MortarIcon = memo(({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
));
MortarIcon.displayName = "MortarIcon";

const ArrowRightIcon = memo(({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
));
ArrowRightIcon.displayName = "ArrowRightIcon";

const ArrowLeftIcon = memo(({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
  </svg>
));
ArrowLeftIcon.displayName = "ArrowLeftIcon";

const EnvelopeIcon = memo(() => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
));
EnvelopeIcon.displayName = "EnvelopeIcon";

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  { Icon: GlobeIcon, title: "Career Counseling", description: "Expert guidance to help students choose the right course and university aligned with their goals.", dark: true },
  { Icon: ChartIcon, title: "Visa Assistance", description: "End-to-end support for student visa applications, documentation, and compliance.", dark: false },
  { Icon: StarIcon, title: "Test Preparation", description: "Structured coaching for IELTS, PTE, TOEFL and other standardized English tests.", dark: false },
  { Icon: MortarIcon, title: "University Admissions", description: "Direct liaison with top Australian and international universities for enrollment.", dark: false },
];

const team = [
  { name: "Kanwal Ehsan", role: "Accounts Manager", initials: "KE", color: "#5d88a3", image: "/team/kanwal-ehsan-optimized.jpg" },
  { name: "Madiha", role: "Student Counsellor", initials: "M", color: "#d7c5a8", image: "/team/madiha-optimized.jpg" },
  { name: "Pakiza", role: "Admission Officer", initials: "P", color: "#3f4a2c", image: "/team/pakiza-optimized.jpg" },
];

const coreValues = [
  { title: "95%+ Document Readiness Target", desc: "Every admission and visa file is reviewed against a structured checklist before submission to reduce avoidable gaps." },
  { title: "1:1 Pathway Planning", desc: "Students, families, and skilled migrants receive tailored education, migration, and travel guidance based on their profile." },
  { title: "24-48 Hour Response Window", desc: "Our team keeps applicants updated quickly so deadlines, missing documents, and travel steps stay under control." },
];

const achievements = [
  { title: "2,500+ Applications Guided", desc: "Demo figure covering student admissions, visitor visas, skilled pathways, and family migration support." },
  { title: "60+ Institution Pathways", desc: "Demo figure representing university, college, English test, accommodation, and travel support partners." },
  { title: "15+ Visa & Study Categories", desc: "Student visas, visitor visas, skills assessments, employer pathways, family visas, PTE, NAATI, and settlement services." },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = memo(() => (
  <section
    className="relative mx-3 sm:mx-6 lg:mx-12 mt-24 sm:mt-28 rounded-2xl overflow-hidden flex items-center justify-center h-[74vh]"
    style={{
      background: `
        linear-gradient(135deg, rgba(3, 30, 104, 0.7), rgba(159, 11, 11, 0.7)),
        url('https://i.ibb.co/Nn3mFc79/93c2af7f970299361f0d6a576f774ed56b14e56b.jpg')
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* Depth overlay */}
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(90deg, rgba(3,30,104,0.60) 0%, rgba(3,30,104,0.30) 50%, rgba(159,11,11,0.20) 100%)',
      }}
    />

    <div className="relative z-10 text-center max-w-xl px-5 py-14 sm:py-20 mx-auto">
      <motion.span
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="inline-block bg-white/15 text-white/90 text-[12px] px-4 py-1.5 rounded-full mb-4 border border-white/25 tracking-[0.5px]"
      >
        About Us
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="font-['Inter',sans-serif] text-white font-bold leading-[1.3] mb-3.5
                   text-2xl
                   sm:text-3xl sm:mb-4
                   lg:text-[40px] lg:leading-[1.25] lg:mb-[18px]
                   xl:text-5xl xl:mb-5"
      >
        Learn More About Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="text-white/70 text-[14px] sm:text-[15px] leading-[1.8] max-w-[500px] mx-auto"
      >
        Your trusted partner in migration, education, and career guidance. We walk with you every step of the way toward your Australian dream.
      </motion.p>
    </div>
  </section>
));
Hero.displayName = "Hero";

// ─── Service Card ─────────────────────────────────────────────────────────────
const ServiceCard = memo(({ service, index }) => {
  const [hovered, setHovered] = useState(false);
  const { Icon, title, description, dark } = service;
  const active = dark || hovered;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-300"
      style={{
        background: active ? "#000073" : "white",
        boxShadow: active ? "0 8px 32px rgba(0,0,115,0.18)" : "0 2px 8px rgba(0,0,0,0.06)",
        transform: hovered && !dark ? "translateY(-4px)" : "translateY(0)",
        border: active ? "none" : "1px solid #e5e7eb",
      }}
    >
      <div className="mb-4 transition-colors duration-300" style={{ color: active ? "white" : "#000073" }}>
        <Icon size={28} />
      </div>
      <h3
        className="text-[15px] sm:text-[16px] font-bold mb-2.5 leading-snug transition-colors duration-300"
        style={{ fontFamily: "Inter, sans-serif", color: active ? "white" : "#1f2937" }}
      >
        {title}
      </h3>
      <p
        className="text-[13px] leading-[1.7] m-0 transition-colors duration-300"
        style={{ color: active ? "rgba(200,210,255,0.9)" : "#6b7280" }}
      >
        {description}
      </p>
    </motion.div>
  );
});
ServiceCard.displayName = "ServiceCard";

// ─── About / Services Section ─────────────────────────────────────────────────
const AboutSection = memo(() => (
  <section className="py-14 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#f8f9fc] font-[Inter,sans-serif] w-full">
    <div className="mb-3">
      <span className="bg-white border border-gray-200 text-gray-500 text-[12px] px-3.5 py-1 rounded-full inline-block mb-4">
        Services
      </span>
      <h2
        className="text-[#000073] font-bold mb-4 text-2xl sm:text-[30px]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Explore our Signature Services
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start flex-wrap">
        <p className="flex-1 min-w-[200px] text-[14px] text-gray-500 leading-[1.7] m-0">
          Looking to settle in Australia or preparing for exams? We provide comprehensive support every step of the way with expert consultants.
        </p>
        <p className="flex-1 min-w-[200px] text-[14px] text-gray-500 leading-[1.7] m-0">
          Our team of certified migration agents and education consultants offer personalized services tailored to your unique situation and aspirations.
        </p>
      </div>
    </div>

    <div
      className="mt-8 rounded-2xl p-5 sm:p-7"
      style={{
        background: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(0,0,115,0.08)",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <ServiceCard key={s.title} service={s} index={i} />
        ))}
      </div>
    </div>
  </section>
));
AboutSection.displayName = "AboutSection";

// ─── Numbered Row ─────────────────────────────────────────────────────────────
const NumberedRow = memo(({ index, title, desc }) => (
  <div className="flex gap-4 mb-7">
    <div className="w-9 h-9 min-w-[36px] rounded-full bg-[#e0e7ff] text-[#000073] flex items-center justify-center font-semibold flex-shrink-0 text-sm">
      {index + 1}
    </div>
    <div>
      <div className="text-[15px] font-semibold text-[#000073] mb-1">{title}</div>
      <div className="text-[13px] text-gray-500 leading-[1.6]">{desc}</div>
    </div>
  </div>
));
NumberedRow.displayName = "NumberedRow";

// ─── Values & Achievements Section ───────────────────────────────────────────
const ValuesSection = memo(() => (
  <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-[#f9fafb] font-[Inter,sans-serif] w-full">

    {/* Values */}
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16 sm:mb-20">
      <div className="flex-1">
        <span className="bg-[#D9D9EC] text-[#130658] text-[12px] px-4 py-1.5 rounded-full inline-block mb-5">
          Our Values
        </span>
        <h2
          className="text-[#000073] font-bold mb-4 leading-snug text-2xl sm:text-[30px]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Numbers that define how we support your journey
        </h2>
        <p className="text-[14px] text-gray-500 leading-[1.8] max-w-[480px]">
          Sky Consultant combines certified education guidance, migration planning, and travel support into one practical pathway. These demo numbers show the level of structure, responsiveness, and care clients should expect from a specialist consultancy.
        </p>
      </div>
      <div className="flex-1">
        {coreValues.map((item, i) => (
          <NumberedRow key={i} index={i} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>

    {/* Achievements */}
    <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16">
      <div className="flex-1">
        {achievements.map((item, i) => (
          <NumberedRow key={i} index={i} title={item.title} desc={item.desc} />
        ))}
      </div>
      <div className="flex-1">
        <span className="bg-[#D9D9EC] text-[#130658] text-[12px] px-4 py-1.5 rounded-full inline-block mb-5">
          Our Achievement
        </span>
        <h2
          className="text-[#000073] font-bold mb-4 leading-snug text-2xl sm:text-[30px]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Consultancy impact across education, migration, and travel
        </h2>
        <p className="text-[14px] text-gray-500 leading-[1.8] max-w-[480px]">
          From course selection and admission files to visa documentation and arrival planning, our process is built around clear steps, measurable preparation, and confident decisions.
        </p>
      </div>
    </div>

  </section>
));
ValuesSection.displayName = "ValuesSection";

// ─── Team Card ────────────────────────────────────────────────────────────────
const TeamCard = memo(({ member, index }) => {
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        boxShadow: hovered ? "0 12px 36px rgba(0,0,0,0.15)" : "0 2px 8px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
    >
      <div className="h-64 sm:h-72 lg:h-80 relative flex items-center justify-center overflow-hidden bg-gray-100">
        {member.image && !imageError ? (
          <img
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
            style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${member.color}aa, ${member.color}44)` }}
          >
            <div
              className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center text-white text-xl sm:text-[22px] font-bold border-[3px] border-white/50"
              style={{ background: member.color, fontFamily: "Inter, sans-serif" }}
            >
              {member.initials}
            </div>
          </div>
        )}
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-[#000073]/35 via-transparent to-white/10"
          />
        )}
      </div>
      <div className="px-4 py-3.5 bg-white">
        <div className="text-[14px] font-bold text-gray-800 mb-0.5">{member.name}</div>
        <div className="text-[12px] text-gray-500">{member.role}</div>
      </div>
    </motion.div>
  );
});
TeamCard.displayName = "TeamCard";

// ─── Team Section ─────────────────────────────────────────────────────────────
const TeamSection = memo(() => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(team.length / 4);

  return (
    <section className="py-14 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#f8f9fc] font-[Inter,sans-serif] w-full">
      <div className="flex justify-between items-end mb-8 flex-wrap gap-3">
        <div>
          <span className="bg-white border border-gray-200 text-gray-500 text-[12px] px-3.5 py-1 rounded-full inline-block mb-3">
            Our Team
          </span>
          <h2
            className="text-[#000073] font-bold text-2xl sm:text-[28px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Meet Our Team
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center cursor-pointer hover:border-[#000073] transition-colors"
          >
            <ArrowLeftIcon size={14} />
          </button>
          <button
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            className="w-9 h-9 rounded-full bg-[#000073] text-white flex items-center justify-center cursor-pointer hover:bg-[#000090] transition-colors"
          >
            <ArrowRightIcon size={14} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {team.slice(page * 4, page * 4 + 4).map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
      </div>
    </section>
  );
});
TeamSection.displayName = "TeamSection";

// ─── Subscribe Banner ─────────────────────────────────────────────────────────
const SubscribeBanner = memo(() => (
  <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-16 bg-[#f4f4f4] w-full">
    <div className="relative rounded-2xl overflow-hidden h-[260px] sm:h-[300px]">
      <img
        src="https://i.ibb.co/XkSnX5Z6/71be37ed7d6abbe916aaf19e951baa48756f0be3.jpg"
        alt="Airplane wing view"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/52" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[540px] flex flex-col items-center gap-3"
        >
          <h2 className="text-2xl sm:text-[28px] font-[Inter',sans-serif] font-semibold text-white m-0">
            Subscribe Now
          </h2>
          <p className="text-gray-300 text-[13px] sm:text-[14px] leading-[1.7] m-0">
            Get practical updates on admissions, visa planning, travel preparation, and settlement guidance from certified education and migration consultants.
          </p>
          <div className="flex items-center bg-white rounded-lg overflow-hidden w-full max-w-[420px] h-11 mt-2">
            <div className="flex items-center gap-2 px-3.5 flex-1">
              <EnvelopeIcon />
              <input
                type="email"
                placeholder="Enter your email"
                className="border-none outline-none text-[14px] text-gray-700 bg-transparent w-full"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 h-full text-[13px] sm:text-[14px] font-medium transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
));
SubscribeBanner.displayName = "SubscribeBanner";

// ─── Main Page ────────────────────────────────────────────────────────────────
const SkyPage = memo(() => (
  <div className="min-h-screen font-[Inter,sans-serif]">
    <Hero />
    <AboutSection />
    <ValuesSection />
    <TeamSection />
    <SubscribeBanner />
  </div>
));
SkyPage.displayName = "SkyPage";

export default SkyPage;
