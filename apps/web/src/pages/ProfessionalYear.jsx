import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp, MapPin, BookOpen, FileText, Users, Award,
  Shield, Globe, Home, Stethoscope, BookMarked, ClipboardList,
  CheckCircle, ChevronRight, GraduationCap, Briefcase,
  MessageSquare, Star,
} from "lucide-react";

/* ── brand tokens ── */
const NAVY   = "#022279";
const NAVYDK = "#011555";
const RED    = "#B11212";
const WHITE  = "#ffffff";
const OFFWH  = "#f5f7fc";
const GRAY   = "#64748b";
const TEXT   = "#1e293b";
const GRAYLT = "#e2e8f0";

/* ── fade-in variants ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

/* ══════════════════════════════════════════
   SECTION 1 — HERO
══════════════════════════════════════════ */
const Hero = () => (
  <section
    className="relative w-[96%] mx-auto overflow-hidden"
    style={{ minHeight: "72vh", background: NAVYDK, marginTop: "81px", borderRadius:"20px", }}
  >
    {/* background photo */}
    <img
      src="https://i.ibb.co/tM10QJzr/Background-Image-Base-Young-professionals-in-Australian-office.png"
      alt="Professionals"
      className="absolute inset-0 w-full h-full object-cover object-right scale-105"
      style={{ opacity: 0.4 }}
    />

    {/* gradient overlay */}
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(to right, ${NAVYDK} 30%, rgba(1, 21, 85, 0.2) 100%)`
      }}
    />

    {/* content */}
    <div
      className="relative z-10 w-full px-5 md:px-16 lg:px-24 flex flex-col justify-center"
      style={{ minHeight: "72vh", paddingTop: "80px", paddingBottom: "64px" }}
    >
      {/* badge */}
      <div className="inline-block mb-6" style={{ width: "fit-content" }}>
        <span
          className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded"
          style={{
            border: `1px solid rgba(255,255,255,0.4)`,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.12em"
          }}
        >
          Professional Year Program
        </span>
      </div>

      {/* heading */}
      <motion.h1
        {...fadeUp(0.05)}
        className="font-bold text-white mb-6"
        style={{
          fontSize: "clamp(28px, 5vw, 56px)",
          lineHeight: 1.12,
          fontFamily: "'Inter',sans-serif",
          maxWidth: "560px"
        }}
      >
        Professional Year Program
      </motion.h1>

      {/* subheading */}
      <motion.p
        {...fadeUp(0.15)}
        className="font-semibold text-white"
        style={{
          fontSize: "clamp(18px, 2.5vw, 26px)",
          lineHeight: 1.4,
          maxWidth: "480px",
          opacity: 0.92
        }}
      >
        Learn How Workplaces in Australia Really Operate
      </motion.p>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   SECTION 2 — INTRO (text + navy card)
══════════════════════════════════════════ */
const Intro = () => (
  <section className="w-full bg-white py-16 relative overflow-hidden">
    {/* pink blobs */}
    <div className="absolute pointer-events-none" style={{ top: "-30px", right: "35%", width: 130, height: 130, background: "#f0b8c8", borderRadius: "60% 40% 70% 30%/50% 60% 40% 50%", opacity: 0.55 }} />
    <div className="absolute pointer-events-none" style={{ bottom: "-20px", right: "32%", width: 85, height: 85, background: "#f0b8c8", borderRadius: "50% 60% 40% 70%/60% 40% 60% 40%", opacity: 0.4 }} />

    <div className="w-full px-5 md:px-16 lg:px-24 relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* left: text */}
        <motion.div {...fadeUp(0)} className="flex-1">
          <div className="pl-5 mb-6" style={{ borderLeft: `3px solid ${NAVY}` }}>
            <p className="font-semibold text-sm md:text-base leading-relaxed" style={{ color: TEXT }}>
              Starting your career in Australia is exciting, but it can also feel unfamiliar. New routines, new expectations, and a work culture that might be different from what you're used to. That's where the Professional Year Course becomes incredibly helpful. It gives you the chance to learn about the real Australian work environment before your career officially begins.
            </p>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: GRAY }}>
            At Sky Consultant, we help graduates of IT, Engineering, and Accounting find the right Professional Year program so they can gain confidence, improve communication, and understand the work culture in Australia. With our trusted partners across the country, you'll receive clear guidance, ongoing support, and help choosing the training provider that matches your career goals.
          </p>
        </motion.div>

        {/* right: navy card */}
        <motion.div {...fadeUp(0.1)} className="flex-shrink-0" style={{ width: "220px" }}>
          <div className="relative rounded-2xl flex items-center justify-center" style={{ background: NAVY, minHeight: "210px", padding: "28px 20px" }}>
            {/* lines */}
            <div className="absolute top-5 left-5 right-5 space-y-2">
              {[100, 70, 50].map((w, i) => (
                <div key={i} style={{ height: 2, background: "rgba(255,255,255,0.12)", borderRadius: 2, width: `${w}%` }} />
              ))}
            </div>
            <GraduationCap size={52} color="rgba(255,255,255,0.55)" strokeWidth={1.4} />
            {/* red FAB */}
            <div className="absolute flex items-center justify-center rounded-xl shadow-lg"
              style={{ bottom: "-14px", right: "-14px", width: 44, height: 44, background: RED }}>
              <TrendingUp size={20} color={WHITE} />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   SECTION 3 — WHY CHOOSE (benefits + image grid)
══════════════════════════════════════════ */
const benefits = [
  "Five migration points toward your Permanent Residency (PR)",
  "Better job opportunities in Accounting, IT, and Engineering",
  "Real exposure to professional networks and potential employers",
  "Improved communication, teamwork, and problem-solving skills",
  "A smoother transition from student life to professional life",
];

const WhyChoose = () => (
  <section className="w-full py-16 bg-white">
    <div className="w-full px-5 md:px-16 lg:px-24">

      {/* overline */}
      <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: RED }}>Benefits</p>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* left */}
        <motion.div {...fadeUp(0)} className="flex-1">
          <h2 className="font-bold mb-2" style={{ fontSize: "clamp(22px, 3vw, 34px)", color: TEXT, fontFamily: "'Inter',sans-serif" }}>
            Why Choose the Professional Year Course?
          </h2>
          <div className="w-9 h-[3px] rounded mb-6" style={{ background: RED }} />

          <p className="text-sm leading-relaxed mb-8" style={{ color: GRAY }}>
            The PY course is a 44-week program, including 12 weeks of practical internship. It isn't just about learning workplace rules. It's about building your confidence and teaching you how to communicate, collaborate, and contribute in an Australian professional environment.
          </p>

          <div className="space-y-4">
            {benefits.map((b, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)} className="flex items-start gap-3">
                <CheckCircle size={18} color={RED} className="flex-shrink-0 mt-0.5" />
                <span className="text-sm" style={{ color: TEXT }}>{b}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* right: image grid */}
        <motion.div {...fadeUp(0.15)} className="flex-shrink-0 grid grid-cols-2 gap-3" style={{ width: "min(100%, 340px)" }}>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" alt="Team" className="rounded-xl object-cover w-full" style={{ height: 175 }} />
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Professional" className="rounded-xl object-cover w-full" style={{ height: 175 }} />
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80" alt="Office" className="rounded-xl object-cover w-full" style={{ height: 145 }} />
          <div className="rounded-xl flex items-center justify-center" style={{ height: 145, background: "#e8edf5" }}>
            <Briefcase size={36} color={NAVY} strokeWidth={1.3} />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   SECTION 4 — ELIGIBILITY (3 cards IT/ENG/ACC)
══════════════════════════════════════════ */
const eligibility = [
  {
    tag: "IT", label: "Information Technology (ACS)", color: "#e8edf5", tagColor: NAVY,
    items: [
      "Completion of a recognised IT degree in Australia",
      "Applied for or holding a 485 Graduate Visa with at least 23 months' validity",
      "IELTS 6.0 (no band below 5.0) or PTE-A 50 (no band below 36)",
    ],
  },
  {
    tag: "ENG", label: "Engineering (EEA)", color: "#f5f5f5", tagColor: "#6b7280",
    items: [
      "An engineering degree from Australia (Bachelor's or Master's); Engineering graduates from overseas may apply through the function, EV visa",
      "IELTS 6.0 (no band below 5.0) or PTE-A 50 (no band below 36)",
      "A Migration Skills Assessment from Engineers Australia",
    ],
  },
  {
    tag: "ACC", label: "Accounting (SNIPA)", color: "#f5f5f5", tagColor: "#6b7280",
    items: [
      "Completion of a recognised Accounting degree in Australia",
      "Applied for or holding a 485 Graduate Visa with at least 12 months' validity",
      "IELTS 6.0 (no band below 5.5) or IELTS 6.0 (no band below 6.0)",
    ],
  },
];

const Eligibility = () => (
  <section className="w-full py-16" style={{ background: OFFWH }}>
    <div className="w-full px-5 md:px-16 lg:px-24">
      <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: RED }}>Eligibility</p>
      <h2 className="font-bold mb-2" style={{ fontSize: "clamp(20px, 3vw, 32px)", color: TEXT, fontFamily: "'Inter',sans-serif" }}>
        Who Is Eligible for the Professional Year Course in Australia?
      </h2>
      <div className="w-9 h-[3px] rounded mb-10" style={{ background: RED }} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {eligibility.map((e, i) => (
          <motion.div key={i} {...fadeUp(i * 0.1)}
            className="rounded-2xl p-6 border"
            style={{ background: WHITE, borderColor: GRAYLT }}>
            <p className="text-2xl font-black mb-1" style={{ color: e.tagColor, opacity: 0.35, letterSpacing: "-0.02em" }}>{e.tag}</p>
            <h3 className="font-bold text-sm mb-4" style={{ color: TEXT }}>{e.label}</h3>
            <div className="space-y-3">
              {e.items.map((item, j) => (
                <div key={j} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: GRAY }}>
                  <CheckCircle size={14} color={RED} className="flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   SECTION 5 — APPLYING (checklist + image + quote)
══════════════════════════════════════════ */
const applyDocs = [
  "Personal details",
  "Your academic transcripts and certificates",
  "English language test results (IELTS, PTE, etc.)",
  "Evidence of your Graduate Visa application",
  "Skills assessment documents (in some cases)",
  "Updated resume or work history (if relevant)",
];

const Applying = () => (
  <section className="w-full py-16 bg-white">
    <div className="w-full px-5 md:px-16 lg:px-24">
      <h2 className="font-bold mb-2" style={{ fontSize: "clamp(20px, 3vw, 30px)", color: TEXT, fontFamily: "'Inter',sans-serif" }}>
        Applying for the Professional Year Course Made Simple
      </h2>
      <div className="w-9 h-[3px] rounded mb-10" style={{ background: RED }} />

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* left: checklist */}
        <motion.div {...fadeUp(0)} className="flex-1 space-y-4">
          {applyDocs.map((doc, i) => (
            <div key={i} className="flex items-center gap-3 text-sm" style={{ color: TEXT }}>
              <CheckCircle size={18} color={RED} className="flex-shrink-0" />
              {doc}
            </div>
          ))}
        </motion.div>

        {/* right: image + quote card */}
        <motion.div {...fadeUp(0.1)} className="flex-shrink-0 relative" style={{ width: "min(100%, 340px)" }}>
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
            alt="Signing documents"
            className="w-full rounded-2xl object-cover"
            style={{ height: 280, objectPosition: "top" }}
          />
          {/* quote overlay */}
          <div className="absolute rounded-xl p-4" style={{ bottom: "20px", left: "16px", right: "16px", background: NAVY, color: WHITE }}>
            <p className="text-xs italic leading-relaxed mb-2" style={{ opacity: 0.9 }}>
              "The process was incredibly smooth. Sky Consultant handled every detail."
            </p>
            <p className="text-xs font-bold tracking-wider uppercase" style={{ color: RED }}>Alex Chen, Accounting Graduate</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   SECTION 6 — COMPREHENSIVE SUPPORT (3×3 grid)
══════════════════════════════════════════ */
const supports = [
  { icon: <Users size={22} color={RED} />,         label: "Career counselling and course provider selection"        },
  { icon: <MapPin size={22} color={RED} />,         label: "Enrolment guidance and documentation support"           },
  { icon: <Award size={22} color={RED} />,          label: "Scholarship or discount updates (when available)"       },
  { icon: <FileText size={22} color={RED} />,       label: "Visa assistance and document preparation"               },
  { icon: <BookOpen size={22} color={RED} />,       label: "English test preparation tips"                          },
  { icon: <Shield size={22} color={RED} />,         label: "Help with OSHC/OVHC health cover"                      },
  { icon: <MessageSquare size={22} color={RED} />,  label: "Pre-course briefings to prepare you for what to expect" },
  { icon: <Home size={22} color={RED} />,           label: "Assistance in finding accommodation if needed"          },
  { icon: <Stethoscope size={22} color={RED} />,    label: "Guidance for medical checks required for visas"         },
];

const Support = () => (
  <section className="w-full py-16" style={{ background: OFFWH }}>
    <div className="w-full px-5 md:px-16 lg:px-24">
      {/* heading center */}
      <div className="text-center mb-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: RED }}>Our Support</p>
        <h2 className="font-bold mb-2" style={{ fontSize: "clamp(20px, 3vw, 32px)", color: TEXT, fontFamily: "'Inter',sans-serif" }}>
          Comprehensive Support Beyond Enrolment
        </h2>
        <div className="mx-auto w-9 h-[3px] rounded" style={{ background: RED }} />
      </div>

      {/* 3×3 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {supports.map((s, i) => (
          <motion.div key={i} {...fadeUp(i * 0.06)}
            className="bg-white rounded-2xl p-6 border flex flex-col gap-4"
            style={{ borderColor: GRAYLT }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(177,18,18,0.08)" }}>
              {s.icon}
            </div>
            <p className="text-sm font-semibold leading-snug" style={{ color: TEXT }}>{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA button */}
      <motion.div {...fadeUp(0.2)} className="mt-12 flex justify-center">
        <a
          href="/contact"
          className="inline-block font-semibold text-sm px-8 py-3 rounded-lg text-white transition-opacity hover:opacity-90"
          style={{ background: NAVY }}
        >
          Contact us to make your journey smoother and more achievable!
        </a>
      </motion.div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   SECTION 7 — READY TO BEGIN (dark CTA)
══════════════════════════════════════════ */
const ReadyBanner = () => (
  <section className="w-[96%] mx-auto py-10" style={{ background: NAVY,borderRadius:'20px', marginBottom:'20px',}}>
    <div className="w-full px-5 md:px-16 lg:px-24 text-center">
      <motion.h2 {...fadeUp(0)}
        className="font-bold text-white mb-5"
        style={{ fontSize: "clamp(24px, 4vw, 44px)", fontFamily: "'Inter',sans-serif", lineHeight: 1.2 }}>
        Ready to Begin Your Professional Year Course?
      </motion.h2>
      <motion.p {...fadeUp(0.1)} className="text-sm leading-relaxed mb-8 mx-auto" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "520px" }}>
        If you're hoping to strengthen your skills, understand Australian workplace culture, and increase your chances of landing a job in your field, we'll guide you through every stage of the Professional Year Course and help you move forward with clarity and confidence.
      </motion.p>
      <motion.div {...fadeUp(0.18)}>
        <a
          href="/contact"
          className="inline-block font-bold px-10 py-3 rounded-lg text-white text-sm transition-opacity hover:opacity-90"
          style={{ background: RED }}
        >
          Connect With Us Now
        </a>
      </motion.div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   ROOT PAGE
══════════════════════════════════════════ */
const ProfessionalYear = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: system-ui, -apple-system, sans-serif; }
    `}</style>

    <Hero />
    <Intro />
    <WhyChoose />
    <Eligibility />
    <Applying />
    <Support />
    <ReadyBanner />
  </>
);

export default ProfessionalYear;
