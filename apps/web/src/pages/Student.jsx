import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft, ChevronRight,
  Check, CheckCircle,
  Shield, Clock, Phone,
  Star, Users, Award, HeartPulse,
} from "lucide-react";

/* ─────────────────────────────────────────────
   COLOUR TOKENS  (navy + red accent, white bg)
───────────────────────────────────────────── */
const C = {
  navy:    "#022279",
  navyDk:  "#011555",
  red:     "#B11212",
  redHov:  "#8f0f0f",
  white:   "#ffffff",
  offWhite:"#f5f7fc",
  gray:    "#64748b",
  grayLt:  "#e2e8f0",
  text:    "#1e293b",
};

/* ─── shared wrapper ───────────────────────── */
const Wrap = ({ children, style = {}, className = "" }) => (
  <div
    className={className}
    style={{
      width: "100%",
      maxWidth: "100%",
      paddingLeft:  "clamp(16px, 5vw, 80px)",
      paddingRight: "clamp(16px, 5vw, 80px)",
      marginLeft: "auto",
      marginRight: "auto",
      ...style,
    }}
  >
    {children}
  </div>
);

/* ─── pill badge ───────────────────────────── */
const Pill = ({ children }) => (
  <span
    style={{
      display: "inline-block",
      background: "rgba(177,18,18,0.12)",
      color: C.red,
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      padding: "4px 14px",
      borderRadius: "999px",
      marginBottom: "14px",
    }}
  >
    {children}
  </span>
);

/* ══════════════════════════════════════════════
   1. HERO
══════════════════════════════════════════════ */
const Hero = () => (
  <section
    style={{
      background: "#011555",
      height: "74vh",
      display: "flex",
      alignItems: "center",
      paddingTop: "100px",
      paddingBottom: "100px",
      position: "relative",
      overflow: "hidden",
      marginTop: "81px",
      marginLeft: "20px",
      marginRight: "20px",
      borderRadius: "20px",
    }}
  >
    {/* Right-side doctor photo with dark overlay */}
    <div style={{ position: "absolute", top: 0, right: 0, width: "55%", height: "100%", zIndex: 0 }}>
      <img
        src="https://i.ibb.co/PGSCZ9hz/Professional-medical-consultation.png"
        alt="Doctor"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
      />
      <div
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, #011555 0%, rgba(1,21,85,0.82) 30%, rgba(1,21,85,0.45) 70%, rgba(1,21,85,0.35) 100%)",
        }}
      />
    </div>

    {/* Content */}
    <Wrap style={{ position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "520px" }}>

        {/* Pill badge */}
        <div
          style={{
            display: "inline-block",
            border: "1px solid rgba(255,255,255,0.45)",
            color: "rgba(255,255,255,0.85)",
            fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em",
            textTransform: "uppercase", padding: "5px 14px",
            borderRadius: "4px", marginBottom: "22px",
          }}
        >
          Health Insurance
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          style={{ fontSize: "32px", fontWeight: 800, color: "#ffffff", lineHeight: 1.12, marginBottom: "22px", fontFamily: "Inter, sans-serif" }}
        >
          Health Insurance (OSHC<br />&amp; OVHC)
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          style={{ color: "#ffffff", fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 700, lineHeight: 1.5, marginBottom: "36px", maxWidth: "440px" }}
        >
          Protecting Your Health While You Build Your Future in Australia
        </motion.p>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.28 }}>
          <a
            href="#contact"
            style={{
              display: "inline-block", background: "#B11212", color: "#ffffff",
              padding: "13px 28px", borderRadius: "6px", fontWeight: 600,
              fontSize: "15px", textDecoration: "none", letterSpacing: "0.01em", transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#8f0f0f")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#B11212")}
          >
            Contact for Consultation
          </a>
        </motion.div>
      </div>
    </Wrap>

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');
      @media (max-width: 768px) {
        .hero-photo-col { width: 100% !important; }
      }
    `}</style>
  </section>
);

/* ══════════════════════════════════════════════
   2. INFO SECTION
══════════════════════════════════════════════ */
const InfoSection = () => (
  <section style={{ background: C.white, paddingTop: "72px", paddingBottom: "72px", position: "relative", overflow: "hidden" }}>
    {/* Pink blobs */}
    <div style={{ position: "absolute", top: "-30px", right: "300px", width: "140px", height: "140px", background: "#f0b8c8", borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%", opacity: 0.55 }} />
    <div style={{ position: "absolute", bottom: "-20px", right: "280px", width: "90px", height: "90px", background: "#f0b8c8", borderRadius: "50% 60% 40% 70% / 60% 40% 60% 40%", opacity: 0.4 }} />

    <Wrap>
      <div style={{ display: "flex", alignItems: "center", gap: "48px" }} className="info-grid">
        {/* Left: text */}
        <div style={{ flex: 1, zIndex: 1 }}>
          <div style={{ borderLeft: `3px solid ${C.navy}`, paddingLeft: "20px", marginBottom: "24px" }}>
            <p style={{ fontSize: "15px", fontWeight: 700, color: C.text, lineHeight: 1.65, margin: 0 }}>
              When you travel to Australia to study or work, securing the right health insurance is essential. International students and most temporary visa holders are not covered by Medicare, which means having an approved health policy becomes a visa requirement.
            </p>
          </div>
          <p style={{ fontSize: "13px", color: C.gray, lineHeight: 1.75, margin: 0 }}>
            At Sky Consultant, we guide you through choosing the right OSHC (Overseas Student Health Cover) or OVHC (Overseas Visitor Health Cover) so you stay protected, meet visa conditions, and avoid unexpected medical expenses. Our team simplifies the process with clear guidance, trusted provider partnerships, and personalised support.
          </p>
        </div>

        {/* Right: navy card */}
        <div style={{ width: "240px", flexShrink: 0, position: "relative", zIndex: 1 }}>
          <div style={{ background: C.navy, borderRadius: "16px", padding: "32px 24px", position: "relative", minHeight: "220px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* top lines */}
            <div style={{ position: "absolute", top: "20px", left: "20px", right: "20px" }}>
              {[100, 70, 50].map((w, i) => (
                <div key={i} style={{ height: "2px", background: "rgba(255,255,255,0.12)", borderRadius: "2px", marginBottom: "8px", width: `${w}%` }} />
              ))}
            </div>
            {/* Shield icon */}
            <Shield size={52} color="rgba(255,255,255,0.6)" strokeWidth={1.5} />
            {/* Red FAB */}
            <div style={{ position: "absolute", bottom: "-14px", right: "-14px", width: "44px", height: "44px", background: C.red, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(177,18,18,0.35)" }}>
              <Phone size={20} color="#fff" />
            </div>
          </div>
        </div>
      </div>
    </Wrap>

    <style>{`@media (max-width: 640px) { .info-grid { flex-direction: column !important; } }`}</style>
  </section>
);

/* ══════════════════════════════════════════════
   3. WHAT IS OSHC
══════════════════════════════════════════════ */
const WhatIsOshc = () => (
  <section style={{ background: C.white, paddingTop: "64px", paddingBottom: "64px" }}>
    <Wrap>
      {/* Overline */}
      <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.red, marginBottom: "12px" }}>
        Overview
      </div>

      {/* Heading */}
      <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 400, color: C.text, margin: "0 0 10px" }}>
        Overseas Student Health Cover (OSHC)
      </h2>

      {/* Red rule */}
      <div style={{ width: "36px", height: "3px", background: C.red, borderRadius: "2px", marginBottom: "40px" }} />

      {/* Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
        {[
          { icon: <HeartPulse size={22} color={C.red} />, title: "Doctor Visits",            desc: "Coverage for General Practitioner consultations and medical advice." },
          { icon: <Shield size={22} color={C.red} />,     title: "Hospital Treatment",        desc: "Financial protection for stay and treatment in public or private hospitals." },
          { icon: <Phone size={22} color={C.red} />,      title: "Emergency Ambulance",       desc: "Full coverage for medically necessary emergency transport services." },
          { icon: <Clock size={22} color={C.red} />,      title: "Prescription Medications",  desc: "Benefits for a range of prescription medicines prescribed by doctors." },
        ].map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            style={{ background: "#f9f9f9", borderRadius: "10px", padding: "28px 20px 24px", border: `1px solid ${C.grayLt}` }}
          >
            <div style={{ width: "44px", height: "44px", background: "rgba(177,18,18,0.08)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              {c.icon}
            </div>
            <h3 style={{ fontWeight: 700, color: C.text, fontSize: "14px", marginBottom: "10px", lineHeight: 1.4 }}>{c.title}</h3>
            <p style={{ color: C.gray, fontSize: "13px", lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* OSHC info box */}
      <div style={{ marginTop: "40px" }}>
        <div
          style={{
            background: C.offWhite,
            border: `1px solid ${C.grayLt}`,
            borderRadius: "12px",
            padding: "28px 32px",
            marginBottom: "16px",
          }}
        >
          <p style={{ color: C.text, fontSize: "14px", lineHeight: 1.8, marginBottom: "16px" }}>
            OSHC ensures international students can access essential medical services while keeping study-related costs manageable.
          </p>
          <p style={{ color: C.text, fontSize: "14px", lineHeight: 1.8, margin: 0 }}>
            OSHC does not cover everyday health services such as dental, optical, or physiotherapy. To access these types of treatments, you may need to purchase an OSHC Extras policy, which is available through OSHC providers or Australian private health insurers.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: `rgba(2,34,121,0.05)`,
            border: `1px solid rgba(2,34,121,0.12)`,
            borderRadius: "10px",
            padding: "14px 20px",
          }}
        >
          <span
            style={{
              width: "24px", height: "24px",
              borderRadius: "50%",
              background: C.navy,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Check size={13} color="#fff" strokeWidth={2.5} />
          </span>
          <span style={{ color: C.navy, fontSize: "14px", fontWeight: 600 }}>
            Provides security and peace of mind throughout your studies
          </span>
        </div>
      </div>
    </Wrap>
  </section>
);

/* ══════════════════════════════════════════════
   4. WHO NEEDS OSHC
══════════════════════════════════════════════ */
const WhoNeedsOshc = () => {
  const whoNeeds = [
    "Applying for a Student Visa (Subclass 500)",
    "Bringing dependents (partner, spouse, or children) with you",
    "Enrolling in a course longer than three months",
  ];

  const whyMatters = [
    "Required for student visa approval",
    "Protects you from high medical costs in Australia",
    "Covers essential hospital and doctor services",
  ];

  return (
    <section style={{ background: C.offWhite, paddingTop: "64px", paddingBottom: "64px" }}>
      <Wrap>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}
          className="whoneeds-grid"
        >
          {/* Left: Text */}
          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.red, marginBottom: "12px" }}>
              Eligibility
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: C.text, margin: "0 0 10px" }}>
              Who Needs OSHC?
            </h2>
            <div style={{ width: "36px", height: "3px", background: C.red, borderRadius: "2px", marginBottom: "32px" }} />

            {/* Who needs list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "16px" }}>
              {whoNeeds.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: C.text }}>
                  <CheckCircle size={20} color={C.red} style={{ flexShrink: 0, marginTop: "1px" }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: "12px", color: C.gray, fontStyle: "italic", lineHeight: 1.7, marginBottom: "32px" }}>
              Short-term students (3 months or less) may opt for a Tourist Visa in conjunction with a private medical insurance policy.
            </p>

            {/* Why OSHC Matters */}
            <h3 style={{ fontSize: "15px", fontWeight: 700, color: C.text, marginBottom: "16px" }}>
              Why OSHC Matters
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {whyMatters.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: C.text }}>
                  <CheckCircle size={20} color={C.red} style={{ flexShrink: 0, marginTop: "1px" }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
              alt="Students studying together"
              style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "top", borderRadius: "16px", display: "block" }}
            />
            <div
              style={{
                position: "absolute", bottom: 0, left: 0,
                background: C.navy, color: C.white,
                borderBottomLeftRadius: "16px", borderTopRightRadius: "16px",
                padding: "16px 20px", maxWidth: "220px",
              }}
            >
              <p style={{ fontSize: "13px", fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
                Over 15,000 students insured through Sky Consultant.
              </p>
            </div>
          </div>
        </div>
      </Wrap>

      <style>{`@media (max-width: 768px) { .whoneeds-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};

/* ══════════════════════════════════════════════
   5. PLANS / PRICING TABLE
══════════════════════════════════════════════ */
const visaPills = [
  "Visitor Visas (Subclass 300, 580, 590, 600, 601)",
  "Bridging Visas",
  "Work Visas (Subclass 482, 485, 400, 401, 476, 489, etc.)",
  "Working Holiday Visas (Subclass 417 & 462)",
];
 
const coverCards = [
  {
    label: "Doctor visits",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    label: "Hospital admissions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    label: "Emergency ambulance services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Limited pharmaceutical benefits",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
];
 
const extras = [
  { label: "Dental Care" },
  { label: "Optical Services" },
  { label: "Physiotherapy" },
  { label: "Chiropractic treatments" },
];
 
const CheckIcon = () => (
  <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);
  function OVHCOverview() {
  return (
    <div className="p-8 max-w-7xl mx-auto font-sans">
      {/* Overview Label */}
      <p className="text-xs font-semibold tracking-widest text-red-600 uppercase mb-2">Overview</p>
 
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Overseas Visitor Health Cover (OVHC)
      </h1>
      <div className="w-10 h-0.5 bg-red-600 mb-6" />
 
      {/* Visa Pills */}
      <div className="flex flex-wrap gap-3 mb-8">
        {visaPills.map((pill) => (
          <span
            key={pill}
            className="bg-[#1a2340] text-white text-xs font-medium px-12 py-4 rounded-full leading-snug w-[290px] text-center"
          >
            {pill}
          </span>
        ))}
      </div>
 
      {/* Alert Box */}
      <div className="border border-gray-200 border-l-4 border-l-gray-300 rounded-md p-4 mb-10 bg-white">
        <p className="text-sm text-gray-700">
          If you're transitioning from a student visa to a Temporary Graduate Visa (Subclass 485),
          you must switch from OSHC to OVHC to stay compliant.
        </p>
      </div>
 
      {/* What OVHC Covers */}
      <h2 className="text-xl font-semibold text-center text-gray-900 mb-6">What OVHC Covers</h2>
 
      <div className="grid grid-cols-4 gap-4 mb-10">
        {coverCards.map(({ label, icon }) => (
          <div
            key={label}
            className="border border-gray-200 rounded-lg p-5 flex flex-col items-center text-center"
          >
            <div className="mb-3 text-red-500">{icon}</div>
            <p className="text-sm font-medium text-gray-800">{label}</p>
          </div>
        ))}
      </div>
 
      {/* Optional Extras */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-red-600">Optional Extras for Comprehensive Care</p>
        </div>
 
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 pl-7">
          {extras.map(({ label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckIcon />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
/* ══════════════════════════════════════════════
   6. COVERAGE TABLE
══════════════════════════════════════════════ */
const cards = [
  {
    label: "Visa-compliant health cover guidance",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Competitive comparison of top providers",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: "Fast and smooth policy processing",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "Support for singles, couples, and families",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    label: "Clear and personalised assistance",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
];
 
function Card({ label, icon }) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
        {icon}
      </div>
      <p className="text-sm font-semibold text-gray-900 leading-snug">{label}</p>
    </div>
  );
}
 
function WhyChooseSky() {
  const topRow = cards.slice(0, 3);
  const bottomRow = cards.slice(3);
 
  return (
    <div className="bg-[#f0f2f8] min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Why Choose Sky Consultant for Your Health Cover?
          </h2>
          <div className="w-8 h-0.5 bg-red-600 mx-auto" />
        </div>
 
        {/* Top Row — 3 cards */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {topRow.map((card) => (
            <Card key={card.label} {...card} />
          ))}
        </div>
 
        {/* Bottom Row — 2 centered cards */}
        <div className="flex justify-center gap-4">
          {bottomRow.map((card) => (
            <div key={card.label} className="w-[calc(33.333%-8px)]">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



/* ══════════════════════════════════════════════
   ROOT PAGE
══════════════════════════════════════════════ */
const Student = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: system-ui, -apple-system, sans-serif; }
    `}</style>

    <Hero />
    <InfoSection />
    <WhatIsOshc />
    <WhoNeedsOshc />
    <visaPills />
    <OVHCOverview />
    <WhyChooseSky/>
  </>
);

export default Student;