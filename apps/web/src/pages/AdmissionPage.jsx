import React, { memo } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap, ClipboardList, BadgeDollarSign, FileText,
  BookOpen, HeartPulse, PlaneTakeoff, House, Stethoscope,
  CheckCircle2, Users, Building2, ShieldCheck, PhoneCall,
} from 'lucide-react';

// ─── Static data ──────────────────────────────────────────────────────────────

const steps = [
  { Icon: Users,       title: 'Initial Consultation', desc: 'We evaluate your profile, goals, and preferences to identify the best pathway for your Australian study journey.' },
  { Icon: Building2,   title: 'University Selection',  desc: 'Finding the right institution based on your academic background, desired course, and budget requirements.' },
  { Icon: ShieldCheck, title: 'Visa Processing',        desc: 'Thorough preparation and lodgement of your student visa application to maximize approval chances.' },
];

const documents = [
  'Your Personal details',
  'Course details and preferences',
  'Academic transcripts and certificates',
  'Confirmation of Enrolment (COE)',
  'Proof of English proficiency (IELTS/PTE etc.)',
  'Financial capacity (15 months)',
];

const services = [
  { Icon: GraduationCap,   title: 'Course guidance and course selection assistance',      desc: 'Expert advice to help you choose the right course and institution aligned with your career goals and academic background.' },
  { Icon: ClipboardList,   title: 'Application preparation and enrolment support',        desc: 'End-to-end assistance with preparing and submitting complete, accurate applications to Australian institutions.' },
  { Icon: BadgeDollarSign, title: 'Scholarship guidance where applicable',                desc: 'Identifying and applying for relevant scholarships to help reduce the financial burden of your studies.' },
  { Icon: FileText,        title: 'Visa documentation and application assistance',        desc: 'Comprehensive support in gathering all necessary documents and lodging your student visa application correctly.' },
  { Icon: BookOpen,        title: 'English test preparation advice',                      desc: 'Guidance on IELTS, PTE, TOEFL preparation strategies and recommended resources to meet entry requirements.' },
  { Icon: HeartPulse,      title: 'Overseas Student Health Cover (OSHC/OVHC) support',   desc: 'Assistance in selecting and arranging the required health insurance cover for the duration of your stay.' },
  { Icon: PlaneTakeoff,    title: 'Pre-departure briefing and travel preparation',         desc: 'Comprehensive orientation on life in Australia, packing essentials, cultural norms and travel tips.' },
  { Icon: House,           title: 'Assistance in finding accommodation in Australia',      desc: 'Connecting you with reliable on-campus and off-campus accommodation options suited to your budget.' },
  { Icon: Stethoscope,     title: 'Help with medical appointments for visa procedures',   desc: 'Coordinating required medical examinations and health checks for the visa application process.' },
];

// ─── Memoized atoms ───────────────────────────────────────────────────────────

const StepItem = memo(({ Icon, title, desc, delay }) => (
  <motion.div
    className="flex gap-4 items-start"
    initial={{ opacity: 0, x: -14 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
  >
    <div className="w-10 h-10 min-w-[40px] rounded-full bg-[#000073] text-white flex items-center justify-center mt-0.5 shrink-0">
      <Icon size={17} />
    </div>
    <div>
      <h4 className="text-sm font-semibold text-[#000073] mb-1">{title}</h4>
      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
));
StepItem.displayName = 'StepItem';

const DocItem = memo(({ text }) => (
  <div className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0 text-sm text-gray-700">
    <CheckCircle2 size={17} className="text-green-600 shrink-0" strokeWidth={2} />
    {text}
  </div>
));
DocItem.displayName = 'DocItem';

const ServiceCard = memo(({ Icon, title, desc, delay }) => (
  <motion.div
    className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
  >
    <div className="w-11 h-11 rounded-xl bg-[#e8f0fb] flex items-center justify-center mb-4 text-[#000073]">
      <Icon size={22} />
    </div>
    <h4 className="text-sm font-semibold text-[#000073] mb-1.5 leading-snug">{title}</h4>
    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
  </motion.div>
));
ServiceCard.displayName = 'ServiceCard';

// ─── Section components ───────────────────────────────────────────────────────
const Hero = memo(() => (
  <section
    className="relative mt-[90px] min-h-[350px] flex items-center overflow-hidden mx-[20px] rounded-[30px] font-[Inter,sans-serif] h-[74vh]"
   style={{
  background: `
    linear-gradient(135deg, rgba(3, 30, 104, 0.7), rgba(159, 11, 11, 0.7)),
    url('https://i.ibb.co/6R1d7LML/236d4c922e0e45dd8cb7dd55bdd0386be90c928f-1.png')
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
  >
    <div
      className="absolute inset-0 z-10"
      style={{
        background: 'linear-gradient(90deg, rgba(3,30,104,0.60) 0%, rgba(3,30,104,0.30) 50%, rgba(159,11,11,0.20) 100%)',
      }}
    />

    <motion.div
      className="relative z-20 px-6 py-12 sm:px-10 sm:py-16 md:px-14 w-full max-w-[620px]"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <span className="inline-flex items-center gap-1.5 border border-white/60 text-white/90 text-[10px] font-semibold tracking-widest uppercase px-3.5 py-1 rounded-full mb-4">
        <GraduationCap size={11} />
        Student Admission
      </span>

      <h1
        className="font-['Inter',sans-serif] text-white font-bold leading-[1.3] mb-3.5
                   text-2xl
                   sm:text-3xl sm:mb-4
                   lg:text-[40px] lg:leading-[1.25] lg:mb-[18px]
                   xl:text-5xl xl:mb-5"
      >
        Student Admission in Australia
      </h1>

      <p className="text-[18.5px] text-white/80 leading-[1.7] max-w-[460px] mb-1 font-medium">
Expert Support for a Successful Study Abroad Journey to Australia.      </p>

      <div className="w-10 h-0.5 bg-white/40 my-4" />


      <button className="inline-flex items-center gap-2 bg-[#8B1A1A] hover:bg-[#6e1414] text-white text-[13px] font-semibold px-7 py-3 rounded-lg transition-all duration-200 hover:-translate-y-px active:scale-[0.98]">
        <PhoneCall size={14} />
        Connect for Consultation
      </button>
    </motion.div>
  </section>
));
Hero.displayName = 'Hero';

const Journey = memo(() => (
  <section className="py-14 sm:py-16 md:py-20 bg-white font-[Inter,sans-serif]">
    <div className="w-full px-5 sm:px-8 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex items-center gap-1.5 border border-[#000073] text-[#000073] text-[10px] font-semibold tracking-[0.08em] uppercase px-3 py-1 rounded-full mb-4">
            <GraduationCap size={10} />
            The Journey
          </span>

          <h2
            className="text-[clamp(20px,3vw,30px)] font-bold text-[#000073] leading-snug mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Applying to Study in Australia Made Simpler
          </h2>

          <p className="text-[12.5px] text-gray-500 leading-[1.75] mb-7">
            Australia's education system is one of the most renowned educational systems, with world-class universities, colleges, and institutions offering a wide range of programs. Our consultants are truly equipped with well-experienced professionals with the expertise needed to guide you through the most important steps.
            <br /><br />
            Our consultant assists you throughout the application process ensuring you have all accurate, complete and well-presented documentation to maximise your chances of success.
          </p>

          <div className="flex flex-col gap-5">
            {steps.map(({ Icon, title, desc }, i) => (
              <StepItem key={title} Icon={Icon} title={title} desc={desc} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Right — Documents card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_3px_20px_rgba(0,0,50,0.07)]">
            <h3
              className="text-base font-bold text-[#000073] mb-4 pb-3 border-b border-gray-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Typical Documents Required
            </h3>
            {documents.map((doc) => (
              <DocItem key={doc} text={doc} />
            ))}
            <p className="mt-4 text-[11.5px] text-gray-400 leading-relaxed italic">
              Additional documents may be required depending on individual circumstances, visa subclass, and the institution applied to.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
));
Journey.displayName = 'Journey';

const Support = memo(() => (
  <section className="py-14 sm:py-16 md:py-20 bg-gray-50 font-[Inter,sans-serif]">
    <div className="w-full px-5 sm:px-8 lg:px-10">

      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex items-center gap-1.5 border border-[#000073] text-[#000073] text-[10px] font-semibold tracking-[0.08em] uppercase px-3 py-1 rounded-full mb-3">
          <ShieldCheck size={10} />
          Our Services
        </span>
        <h2
          className="text-[clamp(20px,3vw,30px)] font-bold text-[#000073] mb-3"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Our Comprehensive Support Beyond Admission
        </h2>
        <p className="text-[13px] text-gray-500 max-w-[560px] mx-auto leading-[1.7]">
          We're committed to being your trusted partner throughout your Australian education journey. Our support extends well beyond admission to ensure a smooth transition.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ Icon, title, desc }, i) => (
          <ServiceCard key={title} Icon={Icon} title={title} desc={desc} delay={(i % 3) * 0.08} />
        ))}
      </div>

    </div>
  </section>
));
Support.displayName = 'Support';

const CTABanner = memo(() => (
  <motion.section
    className="mb-10 mx-4 sm:mx-8 bg-[#0D1B4B] py-16 px-6 sm:px-10 text-center rounded-2xl overflow-hidden font-[Inter,sans-serif]"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2
      className="text-[clamp(22px,3.5vw,36px)] font-bold text-white mb-4 leading-snug"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      Ready to begin your journey<br />toward studying in Australia?
    </h2>

    <p className="text-[13px] text-white/65 max-w-[480px] mx-auto mb-7 leading-[1.7]">
      Reach out to our expert team at Sky Consultants today. We'll guide you through every step of the admission process so you can move forward with clarity and confidence.
    </p>

    <button className="inline-flex items-center justify-center gap-2 bg-[#C0272D] hover:bg-[#a61f25] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-px active:scale-[0.98] mx-auto">
      <PhoneCall size={15} />
      Get Free Consultation Now
    </button>
  </motion.section>
));
CTABanner.displayName = 'CTABanner';

// ─── Page ─────────────────────────────────────────────────────────────────────

const AustraliaAdmissionPage = memo(() => (
  <>
    <Hero />
    <Journey />
    <Support />
    <CTABanner />
  </>
));
AustraliaAdmissionPage.displayName = 'AustraliaAdmissionPage';

export default AustraliaAdmissionPage;