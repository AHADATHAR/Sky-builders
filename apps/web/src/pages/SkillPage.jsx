import React, { memo } from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardCheck, FileText, Briefcase, CreditCard, BookOpen,
  FolderOpen, CheckCircle2, Search, FileStack, PenLine, Languages,
  Send, Lightbulb, HeadphonesIcon, ArrowRight, PhoneCall,
  BadgeCheck, TrendingUp, MapPin, Home, Users, Star,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────
const whyChecks = [
  { Icon: BadgeCheck,     text: 'Recognition of your qualifications and skills by Australian standards' },
  { Icon: FileText,       text: 'Eligibility to apply for skilled migration visas (subclass 189, 190, 491)' },
  { Icon: TrendingUp,     text: 'Higher points score in the SkillSelect Expression of Interest' },
  { Icon: Home,           text: 'Pathway to permanent residency in Australia' },
  { Icon: ClipboardCheck, text: 'Compliance with occupational licensing requirements' },
  { Icon: Briefcase,      text: 'Improved employability in the Australian job market' },
  { Icon: MapPin,         text: 'Access to state and territory nomination opportunities' },
];

const documents = [
  { Icon: BookOpen,   title: 'Educational Certificates and Transcripts',       desc: 'All academic qualifications including degrees, diplomas, and certified transcripts from recognised institutions.' },
  { Icon: Briefcase,  title: 'Employment Records and References',              desc: 'Detailed employment history with reference letters, pay slips, and job descriptions from past employers.' },
  { Icon: CreditCard, title: 'Passport and Identity Documents',                desc: 'Valid passport copies and government-issued identity documents required for identity verification.' },
  { Icon: FileText,   title: 'CV or Resume',                                   desc: 'A comprehensive resume outlining your educational background, work history, and relevant skills.' },
  { Icon: Languages,  title: 'English Proficiency Assessment (if applicable)', desc: 'IELTS, PTE, or TOEFL results demonstrating English language proficiency where required by the assessing body.' },
  { Icon: FolderOpen, title: 'Additional Occupation-Specific Documents',       desc: 'Licensing, registration, portfolios, or technical reports specific to your nominated occupation.' },
];

const supportPoints = [
  { Icon: Search,         text: 'Identifying the right skills assessing authority for your occupation and situation' },
  { Icon: FileStack,      text: 'Reviewing and organising all required documentation before submission' },
  { Icon: PenLine,        text: 'Preparing a detailed and accurate employment history statement' },
  { Icon: Languages,      text: 'Translating and certifying documents where necessary for compliance' },
  { Icon: Send,           text: 'Submitting your application correctly and tracking its progress throughout' },
  { Icon: Lightbulb,      text: 'Advising on the next steps following the skills assessment outcome' },
  { Icon: ArrowRight,     text: 'Connecting your skills assessment result to your visa pathway planning' },
  { Icon: HeadphonesIcon, text: 'Providing ongoing support and advice if additional information is requested' },
];

// ─── Atoms ────────────────────────────────────────────────────────────────────

const SectionTag = memo(({ Icon, label, dark = false }) => (
  <span className={`inline-flex items-center gap-1.5 border text-[10px] font-semibold tracking-[0.09em] px-3 py-1 rounded-full uppercase mb-3 ${
    dark ? 'border-white/40 text-white/80' : 'border-[#000073] text-[#000073]'
  }`}>
    <Icon size={10} />
    {label}
  </span>
));
SectionTag.displayName = 'SectionTag';

const CheckRow = memo(({ Icon, text }) => (
  <div className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0 text-sm text-gray-700 leading-snug">
    <CheckCircle2 size={17} className="text-[#c0392b] flex-shrink-0 mt-0.5" strokeWidth={2} />
    {text}
  </div>
));
CheckRow.displayName = 'CheckRow';

const DocCard = memo(({ Icon, title, desc, delay = 0 }) => (
  <motion.div
    className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-2.5 cursor-default transition-all duration-200 hover:border-[#c0392b] hover:shadow-[0_6px_22px_rgba(192,57,43,0.08)] hover:-translate-y-0.5"
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
  >
    <div className="w-11 h-11 rounded-xl bg-[#fdf2f2] flex items-center justify-center text-[#c0392b] flex-shrink-0">
      <Icon size={21} />
    </div>
    <h4 className="text-[13px] font-semibold text-[#000073] leading-snug">{title}</h4>
    <p className="text-[12px] text-gray-500 leading-[1.65]">{desc}</p>
  </motion.div>
));
DocCard.displayName = 'DocCard';

const BulletItem = memo(({ Icon, text, delay = 0 }) => (
  <motion.div
    className="flex items-start gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg transition-all duration-200 hover:border-[#c0392b] hover:shadow-[0_3px_14px_rgba(192,57,43,0.07)]"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay }}
  >
    <Icon size={15} className="text-[#c0392b] flex-shrink-0 mt-0.5" />
    <p className="text-[12.5px] text-gray-600 leading-[1.6]">{text}</p>
  </motion.div>
));
BulletItem.displayName = 'BulletItem';

// ─── Sections ─────────────────────────────────────────────────────────────────

const Hero = memo(() => (
  <section
    className="relative mt-[90px] min-h-[420px] flex items-center overflow-hidden mx-[20px] rounded-2xl font-[Inter,sans-serif] h-[74vh]"
    style={{
  background: `
    linear-gradient(135deg, rgba(3, 30, 104, 0.7), rgba(159, 11, 11, 0.7)),
    url('https://i.ibb.co/spW2Mgb2/Background-Image-AB6-AXu-BQZEKal0o-K-1fw7q-V-O3k-LMa-X5-DBmx-Gyz-Iv2w-KQFKcs-4i-RBOu-GJz-KZ27-MOOF1z-Dt.png')
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
  >
    {/* Subtle overlay pattern for depth */}
    <div
      className="absolute inset-0 z-10"
      style={{
        background: 'linear-gradient(90deg, rgba(3,30,104,0.60) 0%, rgba(3,30,104,0.30) 50%, rgba(159,11,11,0.20) 100%)',
      }}
    />

    <div className="relative z-20 w-full px-6 sm:px-10 md:px-14 py-16 sm:py-20">
      <motion.div
        className="max-w-[520px]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <SectionTag Icon={ClipboardCheck} label="Skills Assessment" dark />

        <h1
          className="font-['Inter',sans-serif] text-white font-bold leading-[1.3] mb-3.5
                     text-2xl
                     sm:text-3xl sm:mb-4
                     lg:text-[40px] lg:leading-[1.25] lg:mb-[18px]
                     xl:text-5xl xl:mb-5"
        >
          Skills Assessment
        </h1>

        <p className="text-[14px] font-semibold text-white/85 mb-5 max-w-[480px]">
          Your First Step Toward Skilled Migration in Australia
        </p>

        <p className="text-[12.5px] text-white/65 leading-[1.80] mb-3 max-w-[480px]">
          If you're planning to apply for a skilled migration visa in Australia, one of the most important requirements is a positive skills assessment. This assessment confirms that your qualifications and work experience match the standards needed for your nominated occupation in Australia.
        </p>
        <p className="text-[12.5px] text-white/65 leading-[1.80] mb-8 max-w-[480px]">
          At Sky Consultant, we simplify this process by helping you understand which assessing authority applies to you, what documents you need, and how to prepare a strong application. Whether you're new to the process or unsure where to begin, our team makes the journey clearer, faster, and far less stressful.
        </p>

        <button className="inline-flex items-center gap-2 bg-[#c0392b] hover:bg-[#96281b] text-white px-7 py-3 rounded-lg text-[13px] font-bold tracking-[0.02em] transition-all duration-200 hover:-translate-y-px">
          <PhoneCall size={14} />
          Contact for Consultation
        </button>
      </motion.div>
    </div>
  </section>
));
Hero.displayName = 'Hero';

const WhyMatters = memo(() => (
  <section className="py-14 sm:py-16 md:py-20 bg-white font-[Inter,sans-serif]">
    <div className="w-full px-6 sm:px-10 md:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <SectionTag Icon={Star} label="Why It Matters" />
          <h2
            className="font-bold text-[#000073] leading-snug mb-4"
            style={{ fontFamily: "Inter, sans-serif", fontSize: 'clamp(20px, 2.8vw, 28px)' }}
          >
            Why Skills Assessment Matters
          </h2>
          <p className="text-[12.5px] text-gray-500 leading-[1.78] mb-3">
            A skills assessment is mandatory for most skilled migration visa applications, and it plays a critical role in determining your eligibility. It is conducted by a designated assessing authority relevant to your occupation and verifies that your qualifications and work experience are comparable to Australian standards.
          </p>
          <p className="text-[12.5px] text-gray-500 leading-[1.78] mb-3">
            Without a positive skills assessment, you may not be eligible to apply for points-tested visas or receive an invitation through SkillSelect. Getting this right from the start is essential to a successful migration outcome.
          </p>
          <p className="text-[12.5px] text-gray-500 leading-[1.78]">
            Our consultants are experienced in preparing assessment applications for a wide range of occupations and assessing bodies, ensuring every submission is thorough, accurate, and well-documented.
          </p>
        </motion.div>

        {/* Right — Checklist card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,50,0.07)]">
            <div className="flex items-center gap-2 text-[12px] font-semibold text-gray-400 uppercase tracking-[0.08em] mb-3 pb-3 border-b border-gray-200">
              <BadgeCheck size={14} className="text-gray-400" />
              A positive skills assessment enables you to
            </div>
            {whyChecks.map(({ Icon, text }, i) => (
              <CheckRow key={i} Icon={Icon} text={text} />
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  </section>
));
WhyMatters.displayName = 'WhyMatters';

const Documents = memo(() => (
  <section className="py-14 sm:py-16 md:py-20 bg-gray-50 font-[Inter,sans-serif]">
    <div className="w-full px-6 sm:px-10 md:px-14">

      <motion.div
        className="text-center mb-9"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div><SectionTag Icon={FolderOpen} label="Documents Required" /></div>
        <h2
          className="font-bold text-[#000073] mb-2.5"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 'clamp(20px, 2.8vw, 28px)' }}
        >
          Documents Commonly Required
        </h2>
        <p className="text-[13px] text-gray-500 max-w-[580px] mx-auto leading-[1.7]">
          Although requirements vary by occupation and assessing body, most skills assessment applications require the following documents to be lodged for assessment.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map(({ Icon, title, desc }, i) => (
          <DocCard key={i} Icon={Icon} title={title} desc={desc} delay={(i % 3) * 0.08} />
        ))}
      </div>

      <p className="text-center mt-5 text-[12px] text-gray-400 italic">
        Additional documents may be requested by the assessing authority depending on your specific occupation, country of qualification, and work history.
      </p>
    </div>
  </section>
));
Documents.displayName = 'Documents';

const HowWeSupport = memo(() => (
  <section className="py-14 sm:py-16 md:py-20 bg-white font-[Inter,sans-serif]">
    <div className="w-full px-6 sm:px-10 md:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <SectionTag Icon={Users} label="Our Support" />
          <h2
            className="font-bold text-[#000073] leading-snug mb-4"
            style={{ fontFamily: "Inter, sans-serif", fontSize: 'clamp(20px, 2.8vw, 28px)' }}
          >
            How Sky Consultant Supports Your Skills Assessment
          </h2>
          <p className="text-[12.5px] text-gray-500 leading-[1.78]">
            Our experienced consultants provide end-to-end assistance from start to finish of your skills assessment application. We work closely with you to understand your background, qualifications, and career history, and then build the strongest possible application for your nominated occupation and assessing body. Our deep familiarity with the requirements of major Australian assessing authorities means we know exactly what is needed to achieve a positive outcome.
          </p>
        </motion.div>

        {/* Right — Bullet list */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {supportPoints.map(({ Icon, text }, i) => (
            <BulletItem key={i} Icon={Icon} text={text} delay={i * 0.06} />
          ))}
        </motion.div>

      </div>
    </div>
  </section>
));
HowWeSupport.displayName = 'HowWeSupport';

const CTABanner = memo(() => (
  <motion.section
    className="relative mb-8 overflow-hidden text-center py-16 px-6 mx-[20px] rounded-2xl font-[Inter,sans-serif]"
    style={{
      background: 'linear-gradient(135deg, #040433 0%, #050543 50%, #041143 100%)',
    }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />
    <div className="relative z-10 max-w-[620px] mx-auto">
      <h2
        className="text-white font-bold leading-[1.3] mb-3.5"
        style={{ fontFamily: "Inter, sans-serif", fontSize: 'clamp(20px, 3vw, 32px)' }}
      >
        Ready to Secure Your Skills Assessment?
      </h2>
      <p className="text-[13px] text-white leading-[1.75] mb-7">
        Reach out to our expert team at Sky Consultants today. We'll guide you through every step of the skills assessment process so you can move forward with clarity and confidence.
      </p>
      <button className="inline-flex items-center gap-2.5 bg-[#c0392b] hover:bg-[#96281b] text-white px-8 py-3.5 rounded-lg text-[14px] font-semibold transition-all duration-200 hover:-translate-y-px">
        <PhoneCall size={15} />
        Connect With Us
      </button>
    </div>
  </motion.section>
));
CTABanner.displayName = 'CTABanner';

// ─── Page ─────────────────────────────────────────────────────────────────────
const SkillsAssessmentPage = memo(() => (
  <>
    <Hero />
    <WhyMatters />
    <Documents />
    <HowWeSupport />
    <CTABanner />
  </>
));
SkillsAssessmentPage.displayName = 'SkillsAssessmentPage';

export default SkillsAssessmentPage;