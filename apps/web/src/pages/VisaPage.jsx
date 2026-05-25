import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileText, Briefcase, MapPin, Award, Globe, Plane,
  ClipboardCheck, UserCheck, ShieldCheck, Clock,
  MessageSquare, ArrowRight, CalendarCheck, BadgeCheck, PhoneCall,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────
const visaTypes = [
  { Icon: FileText,        title: 'Student Visa — Subclass 500',                      desc: 'The most commonly used visa for international students wishing to study full-time in Australia. It covers a wide range of courses from schools to universities.' },
  { Icon: Briefcase,       title: 'Post-Study Work Visa — Subclass 485',               desc: 'A post-study visa that provides the opportunity to live and work in Australia after completing your degree, helping gain local work experience.' },
  { Icon: Award,           title: 'Skilled Independent Visa — Subclass 189',           desc: 'A permanent visa for skilled workers who are not sponsored by an employer or family member, allowing you to live and work anywhere in Australia.' },
  { Icon: BadgeCheck,      title: 'Skilled Nominated Visa — Subclass 190',             desc: 'This permanent visa is for skilled workers who are nominated by an Australian state or territory government, granting permanent residency.' },
  { Icon: MapPin,          title: 'Skilled Regional Visa — Subclass 491',              desc: 'For skilled workers who want to live and work in regional Australia. Nomination from a state or territory government or sponsorship is required.' },
  { Icon: Globe,           title: 'Skilled Work Regional (Provisional) — Subclass 494',desc: 'This visa allows you to live, study and work in specified regional areas for up to five years with opportunities to transition to permanent residency.' },
  { Icon: ClipboardCheck,  title: 'Training Visa — Subclass 407',                      desc: 'This visa allows individuals to undertake occupational training in Australia to improve work-related skills, supporting professional development in targeted roles.' },
  { Icon: UserCheck,       title: 'Employer Nomination Visa — Subclass 186',           desc: 'Permanent residence for skilled workers who are nominated by an Australian employer, with streams for direct entry and temporary residence transition.' },
  { Icon: Plane,           title: 'Tourist Visa — Subclass 600',                       desc: 'Allows visitors to travel to Australia for tourism, family visits, or business purposes. Short or long-term stays are available depending on your circumstances.' },
];

const reasons = [
  { Icon: UserCheck,    title: 'Personalised Visa Assessment', desc: 'We thoroughly assess your individual profile, goals, and eligibility before recommending the most suitable visa pathway.' },
  { Icon: ShieldCheck,  title: 'Documentation Guidance',       desc: 'Our experts guide you through every document required, ensuring each one meets strict immigration codes and requirements.' },
  { Icon: Clock,        title: 'Timely Application Submissions',desc: 'Missing deadlines can be costly. We monitor your timeline and submit every application within the required timeframes.' },
  { Icon: CalendarCheck,title: 'Ongoing Support',              desc: 'From the initial consultation through to visa grant and beyond, our team provides continuous guidance and communication throughout.' },
  { Icon: MessageSquare,title: 'Clear Communication',          desc: 'We keep you fully informed at every stage of the application, so you always know exactly what is happening with your case.' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const SectionTag = memo(({ Icon, label, dark = false }) => (
  <span
    className={`inline-flex items-center gap-1.5 border text-[10px] font-semibold tracking-[0.09em] px-3 py-1 rounded-full uppercase mb-3 ${
      dark ? 'border-white/40 text-white/80' : 'border-[#000073] text-[#000073]'
    }`}
  >
    <Icon size={10} />
    {label}
  </span>
));
SectionTag.displayName = 'SectionTag';

const Hero = memo(() => (
  <section
    className="relative mt-24 overflow-hidden min-h-[400px] flex items-center mx-[20px] rounded-2xl h-[74vh]"
   style={{
  background: `
    linear-gradient(135deg, rgba(3, 30, 104, 0.7), rgba(159, 11, 11, 0.7)),
    url('https://i.ibb.co/j97yhdGn/Sydney-Skyline-2x.png')
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
  >
    {/* Depth overlay */}
    <div
      className="absolute inset-0 z-10 pointer-events-none"
      style={{
        background: 'linear-gradient(90deg, rgba(3,30,104,0.60) 0%, rgba(3,30,104,0.30) 50%, rgba(159,11,11,0.20) 100%)',
      }}
    />

    <div className="relative z-20 w-full px-8 sm:px-12 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <SectionTag Icon={FileText} label="Visa Application" dark />

        <h1
          className="font-['Inter',sans-serif] text-white font-bold leading-[1.3] mb-3.5
                     text-2xl
                     sm:text-3xl sm:mb-4
                     lg:text-[40px] lg:leading-[1.25] lg:mb-[18px]
                     xl:text-5xl xl:mb-5"
        >
          Build Your Career in Australia <br /> with Trusted Visa Guidance
        </h1>

        <p className="text-white/70 text-[13px] leading-[1.80] mb-4 max-w-2xl">
          Australia provides multiple visa options for international students, skilled workers, and
          professionals seeking long-term opportunities. With one of the world's most adaptive
          immigration systems, navigating the visa process can feel overwhelming. That's where Sky
          Consultant comes in with complete support.
        </p>
        <p className="text-white/70 text-[13px] leading-[1.80] mb-4 max-w-2xl">
          Our team stays up to date with every regulatory change and provides reliable guidance to
          help you choose the right pathway. From document preparation to application submission, we
          support you through every step so you can move forward with confidence.
        </p>
        

        <button
          className="inline-flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white px-8 py-3.5 rounded-lg text-[13px] font-bold uppercase tracking-[0.04em] transition-all duration-200 hover:-translate-y-px"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          <PhoneCall size={14} />
          Schedule Your Consultation
        </button>
      </motion.div>
    </div>
  </section>
));
Hero.displayName = 'Hero';

// ─── VISA CARD ────────────────────────────────────────────────────────────────
const VisaCard = memo(({ Icon, title, desc, delay = 0 }) => (
  <motion.div
    className="group border border-gray-200 rounded-xl p-5 bg-white flex flex-col gap-2 cursor-pointer transition-all duration-200 hover:border-[#000073] hover:shadow-[0_6px_24px_rgba(0,0,115,0.09)] hover:-translate-y-1"
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
  >
    <div className="w-10 h-10 rounded-lg bg-[#e8f0fb] flex items-center justify-center text-[#000073] mb-1 flex-shrink-0">
      <Icon size={18} />
    </div>
    <h4 className="text-[13.5px] font-bold text-[#000073] leading-snug">{title}</h4>
    <p className="text-[12px] text-gray-500 leading-[1.65] flex-1">{desc}</p>
    <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-[#c0392b] uppercase tracking-[0.06em] mt-1 transition-all duration-200 group-hover:gap-3">
      Learn More <ArrowRight size={12} />
    </span>
  </motion.div>
));
VisaCard.displayName = 'VisaCard';

// ─── VISA TYPES SECTION ───────────────────────────────────────────────────────
const VisaTypes = memo(() => (
  <section className="py-16 bg-white">
    <div className="w-full px-6 sm:px-9">
      <motion.div
        className="text-center mb-9"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div><SectionTag Icon={Globe} label="Visa Types" /></div>
        <h2
          className="text-[#000073] font-bold mb-2.5 text-xl sm:text-2xl lg:text-3xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Australian Visa Options We Assist With
        </h2>
        <p className="text-[13px] text-gray-500 max-w-lg mx-auto leading-[1.7]">
          Our Consultants have the expertise to advise you on the right visa pathway and the
          documentation requirements. Here are some of the visas our experts can assist with.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visaTypes.map(({ Icon, title, desc }, i) => (
          <VisaCard key={title} Icon={Icon} title={title} desc={desc} delay={(i % 3) * 0.08} />
        ))}
      </div>
    </div>
  </section>
));
VisaTypes.displayName = 'VisaTypes';

// ─── REASON ITEM ─────────────────────────────────────────────────────────────
const ReasonItem = memo(({ Icon, title, desc, delay = 0 }) => (
  <motion.div
    className="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 items-start transition-all duration-200 hover:border-[#000073] hover:shadow-[0_4px_16px_rgba(0,0,115,0.07)]"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay }}
  >
    <div className="w-9 h-9 min-w-9 rounded-full bg-[#000073] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
      <Icon size={16} />
    </div>
    <div>
      <h4 className="text-[13.5px] font-semibold text-[#000073] mb-1">{title}</h4>
      <p className="text-[12px] text-gray-500 leading-[1.65]">{desc}</p>
    </div>
  </motion.div>
));
ReasonItem.displayName = 'ReasonItem';

// ─── WHY CHOOSE US ────────────────────────────────────────────────────────────
const WhyChooseUs = memo(() => (
  <section className="py-16 bg-[#f8f9fb]">
    <div className="w-full px-6 sm:px-9">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <SectionTag Icon={ShieldCheck} label="Why Choose Us" />
          <h2
            className="text-[#000073] font-bold leading-snug mb-4 text-xl sm:text-2xl lg:text-3xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Why Choose Us for Your Australian Visa Application?
          </h2>
          <p className="text-[12.5px] text-gray-500 leading-[1.75]">
            Backed by knowledge and expertise, we offer comprehensive support across every stage of
            the migration process. Our registered migration agents and consultants bring years of
            hands-on experience, ensuring your application is prepared with meticulous attention to
            detail, submitted correctly, and followed up professionally throughout.
          </p>
        </motion.div>

        {/* Right */}
        <motion.div
          className="flex flex-col gap-3.5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {reasons.map(({ Icon, title, desc }, i) => (
            <ReasonItem key={title} Icon={Icon} title={title} desc={desc} delay={i * 0.08} />
          ))}
        </motion.div>
      </div>
    </div>
  </section>
));
WhyChooseUs.displayName = 'WhyChooseUs';

// ─── CTA BANNER ───────────────────────────────────────────────────────────────
const CTABanner = memo(() => (
  <motion.section
    className="relative mb-8 overflow-hidden text-center py-16 px-6 mx-[20px] rounded-2xl"
    style={{
      background: 'linear-gradient(135deg, #00004d 0%, #000073 50%, #051a6e 100%)',
    }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {/* Grid overlay */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />

    <div className="relative z-10 max-w-xl mx-auto">
      <h2
        className="text-white font-bold leading-snug mb-3.5 text-xl sm:text-2xl lg:text-[28px]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Ready to make your Australian visa application a success?
      </h2>
      <p className="text-white/60 text-[13px] leading-[1.75] mb-8">
        Reach out to our experts today and take the first step toward studying, working, or building
        your future in Australia.
      </p>
      <button
        className="inline-flex items-center gap-2.5 bg-[#c0392b] hover:bg-[#a93226] text-white px-8 py-3.5 rounded-lg text-[14px] font-semibold transition-all duration-200 hover:-translate-y-px"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <PhoneCall size={15} />
        Complete Your Visa Application with Confidence
      </button>
    </div>
  </motion.section>
));
CTABanner.displayName = 'CTABanner';

// ─── PAGE ─────────────────────────────────────────────────────────────────────
const AustraliaVisaPage = memo(() => (
  <>
    <Hero />
    <VisaTypes />
    <WhyChooseUs />
    <CTABanner />
  </>
));
AustraliaVisaPage.displayName = 'AustraliaVisaPage';

export default AustraliaVisaPage;