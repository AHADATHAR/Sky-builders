import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle, ChevronRight, MessageSquare, BookOpen,
  ClipboardList, Clock, Volume2, FileText, Users, Star,
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
    className="relative w-[96%] overflow-hidden mx-auto"
  style={{
  minHeight: "68vh",
  background: NAVYDK,
  marginTop: "81px",
borderRadius:"20px",
}}
  >
    {/* bg photo */}
    <img
  src="https://i.ibb.co/XxtQsKBN/Base-Photo-Professional-multicultural-workplace-in-Australia.png"
  alt="Language"
  className="absolute right-0 top-0 h-full w-auto object-cover"
  style={{ opacity: 0.3 }}
/>
    {/* gradient */}
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(to right, ${NAVYDK} 38%, rgba(1, 21, 85, 0.23) 100%)`,
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
            background:"#E2E8F0E5",
            border: "1px solid rgba(255,255,255,0.38)",
            color: "rgba(14, 14, 82, 0.82)",
            letterSpacing: "0.13em",
            borderRadius:"10px",
          }}
        >
          NAATI CCL (Credentialed Community Language)
        </span>
      </div>

      <motion.h1
  {...fadeUp(0.05)}
  className="font-['Inter',sans-serif] text-white font-bold leading-[1.3] mb-3.5
             text-2xl
             sm:text-3xl sm:mb-4
             lg:text-[40px] lg:leading-[1.25] lg:mb-[18px]
             xl:text-5xl xl:mb-5"
>
  NAATI CCL (Credentialed Community Language)
</motion.h1>

      <motion.p
        {...fadeUp(0.15)}
        className="font-semibold text-white mb-8"
        style={{
          fontSize: "clamp(16px, 2.2vw, 24px)",
          lineHeight: 1.42,
          maxWidth: "460px",
          opacity: 0.9,
        }}
      >
        Making Language Skills Assessment Easier for Your PR Points
      </motion.p>

      <motion.div {...fadeUp(0.24)}>
        <a
          href="#contact"
          className="inline-block font-semibold text-sm px-7 py-3 rounded-lg text-white transition-opacity hover:opacity-88"
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
        top: "-28px", right: "33%",
        width: 120, height: 120,
        background: "#f0b8c8",
        borderRadius: "60% 40% 70% 30%/50% 60% 40% 50%",
        opacity: 0.52,
      }}
    />
    <div
      className="absolute pointer-events-none"
      style={{
        bottom: "-18px", right: "30%",
        width: 80, height: 80,
        background: "#f0b8c8",
        borderRadius: "50% 60% 40% 70%/60% 40% 60% 40%",
        opacity: 0.38,
      }}
    />

    <div className="w-full px-5 md:px-16 lg:px-24 relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* left */}
        <motion.div {...fadeUp(0)} className="flex-1 space-y-5">
          <p className="text-sm leading-relaxed" style={{ color: TEXT }}>
            If you speak a language other than English, you may already have an
            advantage in your Australian migration journey. The NAATI CCL test
            lets you use your bilingual skills to earn five points toward a
            points-based visa.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: GRAY }}>
            For many students and graduates, this test can make a big difference
            in their PR pathway and boost their eligibility. At Sky Consultant,
            we help you understand how the CCL test works, what you need to
            prepare, and how to choose the right preparation classes.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: GRAY }}>
            Our expert team guides you through the enrolment process for NAATI
            preparation courses to help you approach the test with confidence.
            We make the process clear so you can focus on performing well in the
            test and securing the five points that bring you closer to your PR
            goals.
          </p>
        </motion.div>

        {/* right: navy card */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex-shrink-0"
          style={{ width: "min(100%, 240px)" }}
        >
          <div
            className="relative rounded-2xl flex flex-col items-center justify-center"
            style={{ background: NAVY, minHeight: "220px", padding: "28px 20px" }}
          >
            {/* lines */}
            <div className="absolute top-5 left-5 right-5 space-y-2">
              {[100, 72, 52].map((w, i) => (
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

            <MessageSquare
              size={52}
              color="rgba(255,255,255,0.52)"
              strokeWidth={1.3}
            />
            <p
              className="text-xs font-semibold tracking-widest uppercase mt-4"
              style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em" }}
            >
              Interpretation & Language
            </p>

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
   3. UNDERSTANDING THE BASICS
══════════════════════════════════════════ */
const Basics = () => (
  <section className="w-full py-16 bg-white">
    <div className="w-full px-5 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* left */}
        <motion.div {...fadeUp(0)} className="flex-1">
          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(20px, 3vw, 30px)",
              color: TEXT,
              fontFamily: "'Inter',sans-serif ",
            }}
          >
            Understanding the Basics of the NAATI CCL Test
          </h2>

          <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT }}>
            The NAATI CCL test is a crucial step for many migrants looking to
            secure their future in Australia. It assesses your community language
            skills at a professional level, specifically evaluating your ability
            to interpret between English and your chosen language in a variety of
            community-based contexts.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: GRAY }}>
            Passing the test earns you five Credentialed Community Language (CCL)
            points, which can be added to your points-based visa application.
            Before you rely on these points, it's important to confirm your
            eligibility with the Department of Home Affairs or a registered
            migration agent.
          </p>
        </motion.div>

        {/* right */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex-1 space-y-6"
        >
          {/* What Does the Test Include */}
          <div
            className="rounded-2xl p-6 border"
            style={{ borderColor: GRAYLT, background: WHITE }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
                style={{ background: NAVY }}
              >
                2
              </div>
              <div>
                <h3 className="font-bold text-sm mb-2" style={{ color: TEXT }}>
                  What Does the Test Include?
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: GRAY }}>
                  The NAATI CCL test is delivered online, from Monday to Friday.
                  You can take it from anywhere, as long as you meet the
                  technical requirements. The test includes:
                </p>
              </div>
            </div>
          </div>

          {/* Test Format at a Glance */}
          <div>
            <h3 className="font-bold text-sm mb-4" style={{ color: TEXT }}>
              Test Format at a Glance
            </h3>
            <div className="space-y-4">
              {[
                "Two dialogue recordings: Each dialogue is a conversation between a native English speaker and a speaker of your LOTE (Language Other Than English).",
                "Topics often reflect real-life situations in Australia, such as health, housing, community services, finance, business, legal matters, consumer affairs, or other areas.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-xs leading-relaxed" style={{ color: GRAY }}>
                  <CheckCircle size={15} color={NAVY} className="flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   4. TIPS (4 numbered cards)
══════════════════════════════════════════ */
const tips = [
  {
    n: "1",
    title: "Note-Taking Mastery",
    desc: "Focus on meaning, not word-for-word translation. Capture the idea, tone, and intention.",
  },
  {
    n: "2",
    title: "Expand Vocabulary",
    desc: "Keep your tenses consistent while interpreting. Watch out for plurals, pronouns, and time references.",
  },
  {
    n: "3",
    title: "Mock Practices",
    desc: "Avoid skipping information. Even small details matter, so take notes to help you recall everything accurately.",
  },
  {
    n: "4",
    title: "Time Management",
    desc: "Stay calm and steady. The dialogues are meant to sound natural, so listen carefully and interpret at a smooth pace.",
  },
];

const Tips = () => (
  <section className="w-full py-16" style={{ background: OFFWH }}>
    <div className="w-full px-5 md:px-16 lg:px-24">
      <motion.h2
        {...fadeUp(0)}
        className="font-bold text-center mb-10"
        style={{
          fontSize: "clamp(20px, 3vw, 30px)",
          color: TEXT,
          fontFamily: "'Inter',sans-serif",
        }}
      >
        Tips to Perform Well in the NAATI CCL Test
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tips.map((t, i) => (
          <motion.div
            key={i}
            {...fadeUp(i * 0.09)}
            className="bg-white rounded-2xl p-6 border"
            style={{ borderColor: GRAYLT }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm"
                style={{ background: RED }}
              >
                {t.n}
              </div>
              <div>
                <h3 className="font-bold text-sm mb-2" style={{ color: TEXT }}>
                  {t.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: GRAY }}>
                  {t.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   5. HOW SKY CONSULTANTS HELPS
══════════════════════════════════════════ */
const supportItems = [
  "Choose the right preparation course based on your language and schedule",
  "Understand the test format and scoring",
  "Access practice materials and sample dialogues",
  "Prepare for the technical setup required for the online exam",
  "Stay on track with reminders, updates, and personalised support",
];

const HowHelps = () => (
  <section className="w-full py-16 bg-white">
    <div className="w-full px-5 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* left */}
        <motion.div {...fadeUp(0)} className="flex-1">
          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(20px, 3vw, 30px)",
              color: TEXT,
              fontFamily: "'Inter',sans-serif",
            }}
          >
            How Sky Consultants Helps
          </h2>
          <p className="text-sm leading-relaxed mb-5" style={{ color: GRAY }}>
            Sky Consultant works closely with trusted NAATI CCL preparation
            providers across Australia. When you reach out to us, we help you:
          </p>
          <p
            className="text-sm font-semibold italic leading-relaxed"
            style={{ color: TEXT }}
          >
            We want you to feel ready, confident, and supported from the very
            beginning.
          </p>
        </motion.div>

        {/* right: support box */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex-1 rounded-2xl p-7 border"
          style={{ borderColor: GRAYLT, background: OFFWH }}
        >
          <h3
            className="font-bold text-sm mb-5 text-center"
            style={{ color: TEXT }}
          >
            Our Support Includes
          </h3>
          <div className="space-y-4">
            {supportItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-sm leading-relaxed"
                style={{ color: TEXT }}
              >
                <ChevronRight
                  size={16}
                  color={RED}
                  className="flex-shrink-0 mt-0.5"
                />
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
   6. READY TO ENROLL (dark CTA banner)
══════════════════════════════════════════ */
const ReadyBanner = () => (
  <section className="w-[96%] mx-auto py-20" style={{ background: NAVY , borderRadius:"20px",marginBottom:"20px",}}>
    <div className="w-full px-5 md:px-16 lg:px-24 text-center">
      <motion.h2
        {...fadeUp(0)}
        className="font-bold text-white mb-5"
        style={{
          fontSize: "clamp(22px, 4vw, 42px)",
          fontFamily: "'Inter',sans-serif",
          lineHeight: 1.22,
        }}
      >
        Ready to Enroll in a NAATI CCL Preparation Course?
      </motion.h2>
      <motion.p
        {...fadeUp(0.1)}
        className="text-sm leading-relaxed mb-8 mx-auto"
        style={{ color: "rgba(255,255,255,0.7)", maxWidth: "500px" }}
      >
        If earning extra PR points is part of your plan, NAATI CCL can be a
        smart step forward. Let our team at Sky Consultant help you get started.
      </motion.p>
      <motion.div {...fadeUp(0.18)}>
        <a
          href="#contact"
          className="inline-block font-bold px-10 py-3 rounded-lg text-white text-sm"
          style={{ background: RED }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Contact Us Today
        </a>
      </motion.div>
    </div>
  </section>
);

/* ══════════════════════════════════════════
   ROOT PAGE
══════════════════════════════════════════ */
const NaatiCCL = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: system-ui, -apple-system, sans-serif; }
    `}</style>

    <Hero />
    <Intro />
    <Basics />
    <Tips />
    <HowHelps />
    <ReadyBanner />
  </>
);

export default NaatiCCL;