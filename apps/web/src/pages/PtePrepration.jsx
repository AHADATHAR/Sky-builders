import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle, ChevronRight, Headphones, TrendingUp,
  Monitor, AlertTriangle, Clock, BookOpen, Users, Star,
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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

/* ══════════════════════════════════════════
   1. HERO
══════════════════════════════════════════ */
const Hero = () => (
  <section
    className="relative w-[96%] mx-auto overflow-hidden"
    style={{ minHeight: "68vh", background: NAVYDK, marginTop: "81px", borderRadius:"20px", }}
  >
    <img
      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&q=80"
      alt="PTE Study"
      className="absolute inset-0 w-full h-full object-cover object-center"
      style={{ opacity: 0.28 }}
    />
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(to right, ${NAVYDK} 40%, rgba(1,21,85,0.5) 100%)`,
      }}
    />

    <div
      className="relative z-10 w-full px-5 md:px-16 lg:px-24 flex flex-col justify-center"
      style={{ minHeight: "68vh", paddingTop: "72px", paddingBottom: "56px" }}
    >
      {/* badge */}
      <div className="mb-5">
        <span
          className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded"
          style={{
            border: "1px solid rgba(255,255,255,0.38)",
            color: "rgba(255,255,255,0.82)",
            letterSpacing: "0.13em",
          }}
        >
          PTE Preparation Classes
        </span>
      </div>

      <motion.h1
        {...fadeUp(0.05)}
        className="font-bold text-white mb-5"
        style={{
          fontSize: "clamp(28px, 5vw, 52px)",
          lineHeight: 1.13,
          fontFamily: "'Inter',sans-serif",
          maxWidth: "520px",
        }}
      >
        PTE Preparation Classes
      </motion.h1>

      <motion.p
        {...fadeUp(0.15)}
        className="font-semibold text-white mb-8"
        style={{
          fontSize: "clamp(16px, 2.2vw, 24px)",
          lineHeight: 1.42,
          maxWidth: "440px",
          opacity: 0.9,
        }}
      >
        Improve Your English Skills and Get the Score You Need
      </motion.p>

      <motion.div {...fadeUp(0.24)}>
        <a
          href="/contact"
          className="inline-block font-semibold text-sm px-7 py-3 rounded-lg text-white"
          style={{ background: RED }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Contact for Consultation!
        </a>
      </motion.div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   2. INTRO  (text left + navy card right)
══════════════════════════════════════════ */
const Intro = () => (
  <section className="w-full bg-white py-16 relative overflow-hidden">
    {/* pink blobs */}
    <div
      className="absolute pointer-events-none"
      style={{
        top: "-28px", right: "34%",
        width: 118, height: 118,
        background: "#f0b8c8",
        borderRadius: "60% 40% 70% 30%/50% 60% 40% 50%",
        opacity: 0.5,
      }}
    />
    <div
      className="absolute pointer-events-none"
      style={{
        bottom: "-18px", right: "31%",
        width: 78, height: 78,
        background: "#f0b8c8",
        borderRadius: "50% 60% 40% 70%/60% 40% 60% 40%",
        opacity: 0.37,
      }}
    />

    <div className="w-full px-5 md:px-16 lg:px-24 relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* left text */}
        <motion.div {...fadeUp(0)} className="flex-1 space-y-5">
          <p className="text-sm leading-relaxed" style={{ color: TEXT }}>
            If you're planning to study or work in an English-speaking country,
            taking an English proficiency test is usually one of the first steps.
            The PTE Academic (Pearson Test of English) is one of the most popular
            options because it is a computer-based assessment that quickly assesses
            your abilities to read, write, listen, and speak in English.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: GRAY }}>
            This test is marked using an automated system. That means your results
            are clear, consistent, and free from human bias. Hundreds of institutions
            across the world accept PTE scores to assess English proficiency.
            Therefore, you should find the right resources and get a high score to
            pursue your dreams.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: GRAY }}>
            At Sky Consultant, we offer PTE preparation classes designed to help you
            build confidence, sharpen your skills, and achieve the score you need for
            your study or migration plans.
          </p>
        </motion.div>

        {/* right navy card */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex-shrink-0"
          style={{ width: "min(100%, 235px)" }}
        >
          <div
            className="relative rounded-2xl flex flex-col items-center justify-center"
            style={{ background: NAVY, minHeight: "215px", padding: "28px 20px" }}
          >
            <div className="absolute top-5 left-5 right-5 space-y-2">
              {[100, 70, 50].map((w, i) => (
                <div
                  key={i}
                  style={{
                    height: 2,
                    background: "rgba(255,255,255,0.11)",
                    borderRadius: 2,
                    width: `${w}%`,
                  }}
                />
              ))}
            </div>
            <Headphones size={52} color="rgba(255,255,255,0.52)" strokeWidth={1.3} />
            {/* red FAB */}
            <div
              className="absolute flex items-center justify-center rounded-xl shadow-lg"
              style={{
                bottom: "-14px", right: "-14px",
                width: 44, height: 44,
                background: RED,
              }}
            >
              <ChevronRight size={20} color={WHITE} />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   3. WHY PTE  (checklist left + image right)
══════════════════════════════════════════ */
const whyPte = [
  "The exam is taken entirely on a computer",
  "Test dates are available frequently",
  "Results come out quickly",
  "The marking system is transparent and predictable",
];

const WhyPte = () => (
  <section className="w-full py-16 bg-white">
    <div className="w-full px-5 md:px-16 lg:px-24">

      <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: RED }}>
        Why PTE
      </p>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

        {/* left */}
        <motion.div {...fadeUp(0)} className="flex-1">
          <h2
            className="font-bold mb-2"
            style={{
              fontSize: "clamp(20px, 3vw, 32px)",
              color: TEXT,
              fontFamily: "'Inter',sans-serif",
            }}
          >
            Why Students Choose the PTE Test
          </h2>
          <div className="w-9 h-[3px] rounded mb-8" style={{ background: RED }} />

          <div className="space-y-5 mb-8">
            {whyPte.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="flex items-start gap-3 text-sm"
                style={{ color: TEXT }}
              >
                <CheckCircle size={17} color={RED} className="flex-shrink-0 mt-0.5" />
                {item}
              </motion.div>
            ))}
          </div>

          <p className="text-xs italic" style={{ color: GRAY }}>
            * PTE Academic is the leading computer-based English test for study abroad and immigration.
          </p>
        </motion.div>

        {/* right image */}
        <motion.div
          {...fadeUp(0.12)}
          className="flex-shrink-0"
          style={{ width: "min(100%, 380px)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80"
            alt="Computer desk"
            className="w-full rounded-2xl object-cover"
            style={{ height: 280, objectPosition: "top" }}
          />
        </motion.div>

      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   4. FOCUSED CLASSES  (2 side-by-side cards)
══════════════════════════════════════════ */
const reliableItems = [
  "Experienced and friendly instructors who guide you step by step",
  "Unlimited practice materials and mock tests",
  "Interactive sessions to improve speaking, writing, listening, and reading",
  "Instant feedback so you know exactly where to improve",
  "Flexible study plans that fit your schedule",
];

const noticeItems = [
  "Test focus and time management",
  "Accuracy in answering computer-based questions",
  "Confidence in speaking and writing tasks",
  "Overall familiarity with the PTE test format",
];

const FocusedClasses = () => (
  <section className="w-full py-16" style={{ background: OFFWH }}>
    <div className="w-full px-5 md:px-16 lg:px-24">

      <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: RED }}>
        Our Classes
      </p>
      <h2
        className="font-bold mb-2"
        style={{
          fontSize: "clamp(20px, 3vw, 30px)",
          color: TEXT,
          fontFamily: "'Inter',sans-serif",
        }}
      >
        Focused PTE Preparation Classes with Sky Consultant
      </h2>
      <div className="w-9 h-[3px] rounded mb-10" style={{ background: RED }} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* card 1 */}
        <motion.div
          {...fadeUp(0)}
          className="bg-white rounded-2xl p-7 border"
          style={{ borderColor: GRAYLT }}
        >
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
            style={{ background: "rgba(2,34,121,0.07)" }}
          >
            <BookOpen size={22} color={NAVY} />
          </div>
          <h3 className="font-bold text-sm mb-4" style={{ color: TEXT }}>
            What makes our PTE classes reliable:
          </h3>
          <div className="space-y-3">
            {reliableItems.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: GRAY }}>
                <CheckCircle size={14} color={RED} className="flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* card 2 */}
        <motion.div
          {...fadeUp(0.1)}
          className="bg-white rounded-2xl p-7 border"
          style={{ borderColor: GRAYLT }}
        >
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
            style={{ background: "rgba(177,18,18,0.08)" }}
          >
            <TrendingUp size={22} color={RED} />
          </div>
          <h3 className="font-bold text-sm mb-4" style={{ color: TEXT }}>
            With the right training, most students notice improvements in:
          </h3>
          <div className="space-y-3">
            {noticeItems.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: GRAY }}>
                <CheckCircle size={14} color={RED} className="flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   5. EXAM DAY  (3 columns: During / Check-in / Important)
══════════════════════════════════════════ */
const duringExam = [
  "The test assesses two skills simultaneously, such as speaking and reading, or listening and writing",
  "The exam is administered on a computer at an official Pearson test centre",
  "Each room will include only 10–15 candidates for better assessment",
  "Continuous runtime 30 minutes early to ensure sufficient time for check-in",
];

const checkIn = [
  "Verify your ID (passport or other accepted ID)",
  "Take a digital photo, signature, and palm scan",
  "Explain the rules and procedures",
  "Assign you a locker for your belongings",
];

const ExamDay = () => (
  <section className="w-full py-16 bg-white">
    <div className="w-full px-5 md:px-16 lg:px-24">

      <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: RED }}>
        Exam Day
      </p>
      <h2
        className="font-bold mb-2"
        style={{
          fontSize: "clamp(20px, 3vw, 30px)",
          color: TEXT,
          fontFamily: "'Inter',sans-serif",
        }}
      >
        What to Expect on PTE Exam Day
      </h2>
      <div className="w-9 h-[3px] rounded mb-10" style={{ background: RED }} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* During the Exam */}
        <motion.div {...fadeUp(0)} className="space-y-1">
          <div className="flex items-center gap-2 mb-4">
            <Monitor size={18} color={NAVY} />
            <h3 className="font-bold text-sm" style={{ color: TEXT }}>During the Exam</h3>
          </div>
          <div className="space-y-3">
            {duringExam.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: GRAY }}>
                <CheckCircle size={13} color={NAVY} className="flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Check-in Process */}
        <motion.div {...fadeUp(0.09)} className="space-y-1">
          <div className="flex items-center gap-2 mb-4">
            <Users size={18} color={RED} />
            <h3 className="font-bold text-sm" style={{ color: TEXT }}>Check-in Process</h3>
          </div>
          <div className="space-y-3">
            {checkIn.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: GRAY }}>
                <CheckCircle size={13} color={RED} className="flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Important Requirement */}
        <motion.div
          {...fadeUp(0.18)}
          className="rounded-2xl p-6 border"
          style={{ background: OFFWH, borderColor: GRAYLT }}
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={18} color={RED} />
            <h3 className="font-bold text-sm" style={{ color: TEXT }}>Important Requirement</h3>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: GRAY }}>
            Inside the exam room, you'll sit at a computer with headphones, a microphone, and a keyboard. Your practice and preparation will play a major role in how smoothly you move through each task. With the right strategy and persistent effort, you can easily secure a high score in the PTE exam.
          </p>
        </motion.div>

      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   6. READY TO START (dark navy CTA)
══════════════════════════════════════════ */
const ReadyBanner = () => (
  <section className="w-full py-20" style={{ background: NAVY }}>
    <div className="w-full px-5 md:px-16 lg:px-24 text-center">
      <motion.h2
        {...fadeUp(0)}
        className="font-bold text-white mb-5"
        style={{
          fontSize: "clamp(24px, 4vw, 42px)",
          fontFamily: "'Inter',sans-serif",
          lineHeight: 1.22,
        }}
      >
        Ready to Start Your PTE Preparation?
      </motion.h2>
      <motion.p
        {...fadeUp(0.1)}
        className="text-sm leading-relaxed mb-8 mx-auto"
        style={{ color: "rgba(255,255,255,0.7)", maxWidth: "480px" }}
      >
        If you're determined to achieve a strong PTE score, Sky Consultant is
        here to help you prepare the right way.
      </motion.p>
      <motion.div {...fadeUp(0.18)}>
        <a
          href="/contact"
          className="inline-block font-bold px-10 py-3 rounded-lg text-white text-sm"
          style={{ background: RED }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
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
const PTEPreparation = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: system-ui, -apple-system, sans-serif; }
    `}</style>

    <Hero />
    <Intro />
    <WhyPte />
    <FocusedClasses />
    <ExamDay />
    <ReadyBanner />
  </>
);

export default PTEPreparation;
