import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .esv-page {
    font-family: 'Inter', sans-serif;
    color: #0d1b3e;
    background: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* ── HERO ── */
  .esv-hero {
    position: relative;
    min-height: 520px;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 90px auto 0;
    width: 95%;
    border-radius: 20px;
  }
  .esv-hero-bg {
    position: absolute;
    inset: 0;
    background-image: url('https://images.unsplash.com/photo-1524293581917-878a6d017c71?w=1600&q=75');
    background-size: cover;
    background-position: center top;
    z-index: 0;
  }
  .esv-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(13,27,62,0.96) 42%,
      rgba(13,27,62,0.72) 68%,
      rgba(13,27,62,0.40) 100%
    );
    z-index: 1;
  }
  .esv-hero-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 40px;
    width: 100%;
  }
  .esv-hero-badge {
    display: inline-block;
    border: 1px solid rgba(255,255,255,0.38);
    color: rgba(255,255,255,0.82);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    padding: 5px 14px;
    border-radius: 20px;
    margin-bottom: 22px;
  }
  .esv-hero h1 {
    font-size: clamp(26px, 4vw, 46px);
    font-weight: 800;
    color: #ffffff;
    line-height: 1.15;
    margin-bottom: 18px;
    max-width: 500px;
  }
  .esv-hero-subtitle {
    font-size: 15px;
    color: rgba(255,255,255,0.72);
    max-width: 400px;
    margin-bottom: 34px;
    font-weight: 400;
    line-height: 1.6;
  }
  .esv-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #c0392b;
    color: white;
    padding: 13px 26px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    font-family: 'Inter', sans-serif;
  }
  .esv-btn-primary:hover { background: #e74c3c; transform: translateY(-1px); }

  /* ── INTRO ── */
  .esv-intro-section {
    width: 100%;
    padding: 80px 0;
  }
  .esv-intro-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }
  .esv-intro-text {
    border-left: 4px solid #c0392b;
    padding-left: 28px;
  }
  .esv-intro-text p {
    font-size: 14.5px;
    color: #3a3a3a;
    line-height: 1.85;
    margin-bottom: 18px;
  }
  .esv-intro-text p:last-child { margin-bottom: 0; }
  .esv-intro-visual {
    background: #0d1b3e;
    border-radius: 14px;
    aspect-ratio: 4/3;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .esv-intro-visual::after {
    content: '';
    position: absolute;
    bottom: -20px; right: -20px;
    width: 100px; height: 100px;
    background: #c0392b;
    border-radius: 50%;
    opacity: 0.25;
  }
  .esv-handshake-icon { position: relative; z-index: 1; }

  /* ── VISA OPTIONS ── */
  .esv-options-section {
    width: 100%;
    padding: 80px 0;
    background: #f8f9fc;
  }
  .esv-options-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }
  .esv-section-title {
    font-size: clamp(22px, 3vw, 30px);
    font-weight: 800;
    color: #0d1b3e;
    margin-bottom: 40px;
    border-left: 4px solid #c0392b;
    padding-left: 16px;
  }
  .esv-options-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .esv-option-card {
    border: 1px solid rgba(13,27,62,0.12);
    border-radius: 10px;
    padding: 28px 22px;
    background: #fff;
    transition: box-shadow 0.2s;
  }
  .esv-option-card:hover { box-shadow: 0 6px 24px rgba(13,27,62,0.08); }
  .esv-option-subclass {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #c0392b;
    margin-bottom: 10px;
  }
  .esv-option-card h3 {
    font-size: 16px;
    font-weight: 800;
    color: #0d1b3e;
    margin-bottom: 12px;
    line-height: 1.25;
  }
  .esv-option-card p {
    font-size: 13px;
    color: #555;
    line-height: 1.75;
  }

  /* ── WHY SKY ── */
  .esv-why-section {
    width: 100%;
    background: #0d1b3e;
    padding: 80px 0;
  }
  .esv-why-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
  }
  .esv-why-left h2 {
    font-size: clamp(22px, 3vw, 28px);
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 20px;
    line-height: 1.25;
  }
  .esv-why-left p {
    font-size: 13.5px;
    color: rgba(255,255,255,0.6);
    line-height: 1.8;
    margin-bottom: 10px;
  }
  .esv-why-right {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .esv-why-item {
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  .esv-why-item:last-child { border-bottom: none; }
  .esv-why-num {
    flex-shrink: 0;
    width: 34px; height: 34px;
    background: #c0392b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700;
    color: white;
  }
  .esv-why-label {
    font-size: 14.5px;
    font-weight: 500;
    color: rgba(255,255,255,0.88);
    line-height: 1.4;
  }

  /* ── CTA BANNER ── */
  .esv-cta-section {
    width: 95%;
    background: #b03020;
    padding: 80px 0;
    margin: 40px auto;
    border-Radius:20px;
  }
  .esv-cta-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    text-align: center;
  }
  .esv-cta-inner p {
    font-size: clamp(17px, 2.5vw, 22px);
    font-weight: 700;
    color: white;
    line-height: 1.45;
    max-width: 560px;
    margin: 0 auto;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .esv-options-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 860px) {
    .esv-intro-inner { grid-template-columns: 1fr; gap: 40px; }
    .esv-why-inner { grid-template-columns: 1fr; gap: 40px; }
  }
  @media (max-width: 640px) {
    .esv-hero-content { padding: 60px 20px; }
    .esv-intro-inner,
    .esv-options-inner,
    .esv-why-inner,
    .esv-cta-inner { padding: 0 20px; }
    .esv-intro-section,
    .esv-options-section,
    .esv-why-section,
    .esv-cta-section { padding: 60px 0; }
    .esv-options-grid { grid-template-columns: 1fr; }
  }
`;

// ── SVG Icons ──
const HandshakeIcon = () => (
  <svg width="72" height="72" viewBox="0 0 24 24" fill="none"
    stroke="rgba(255,255,255,0.42)" strokeWidth="1.3"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.78L12 21l7.65-7.99.77-.78a5.4 5.4 0 0 0 0-7.65z"/>
    <path d="M8 12l4 4 4-4"/>
  </svg>
);

// ── Data ──
const visaOptions = [
  {
    subclass: "Subclass 186",
    title: "Employer Nomination Scheme",
    desc: "The Employer Nomination Scheme (Subclass 186) allows skilled workers to be nominated by an Australian employer for permanent residence. This visa enables eligible workers to live and work in Australia permanently under one of the available streams.",
  },
  {
    subclass: "Subclass 494",
    title: "Skilled Employer Sponsored",
    desc: "The Subclass 494 visa allows regional Australian employers to sponsor skilled overseas workers when they are unable to find qualified Australian workers. This is a temporary visa with a clear pathway to permanent residency for eligible applicants.",
  },
  {
    subclass: "Subclass 482",
    title: "Temporary Skill Shortage",
    desc: "The Temporary Skill Shortage Visa (Subclass 482) enables Australian employers to sponsor overseas workers to fill short-term or medium-term skill shortages. This visa helps Australian businesses address urgent labour gaps while maintaining compliance with immigration regulations.",
  },
  {
    subclass: "Subclass 407",
    title: "Training Visa",
    desc: "The Training Visa (Subclass 407) allows skilled professionals to participate in workplace-based occupational training in Australia. This visa is ideal for individuals seeking to enhance skills, gain professional experience, and build expertise in their occupation.",
  },
];

const whyItems = [
  "Eligibility assessment for employers and candidates",
  "Sponsorship and nomination guidance",
  "End-to-end visa application support",
  "Ongoing compliance advice",
];

// ── Section Components ──

function HeroSection() {
  return (
    <section className="esv-hero">
      <div className="esv-hero-bg" />
      <div className="esv-hero-overlay" />
      <div className="esv-hero-content">
        <div className="esv-hero-badge">Employer Sponsored Visa</div>
        <h1>Employer Sponsored Visa – Australia</h1>
        <p className="esv-hero-subtitle">
          Uniting Australian Employers and Global Talent Through Sponsorship
        </p>
        <button className="esv-btn-primary">Schedule Your Consultation</button>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="esv-intro-section">
      <div className="esv-intro-inner">
        <div className="esv-intro-text">
          <p>
            The Australian Employer Sponsored Visa program is a vital pathway for
            businesses to address skill shortages by recruiting highly skilled
            professionals from across the globe. This framework ensures that the
            Australian economy remains competitive while providing talented
            individuals with an opportunity to build a career in a world-class
            professional environment.
          </p>
          <p>
            Navigating the complexities of sponsorship requires meticulous attention
            to regulatory compliance and eligibility criteria. Our specialized
            consultants provide end-to-end support for both employers and nominees,
            ensuring a seamless transition and successful visa grant in alignment
            with current Department of Home Affairs standards.
          </p>
        </div>
        <div className="esv-intro-visual">
          <div className="esv-handshake-icon">
            <HandshakeIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

function VisaOptionsSection() {
  return (
    <section className="esv-options-section">
      <div className="esv-options-inner">
        <h2 className="esv-section-title">Employer Sponsored Visa Options</h2>
        <div className="esv-options-grid">
          {visaOptions.map((opt, i) => (
            <div className="esv-option-card" key={i}>
              <div className="esv-option-subclass">{opt.subclass}</div>
              <h3>{opt.title}</h3>
              <p>{opt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySkySection() {
  return (
    <section className="esv-why-section">
      <div className="esv-why-inner">
        <div className="esv-why-left">
          <h2>Why Apply with Sky Consultant?</h2>
          <p>
            Employer sponsored visas involve strict compliance requirements for both
            employers and applicants. Errors can lead to delays or refusal.
          </p>
          <p>At Sky Consultant, we provide:</p>
        </div>
        <div className="esv-why-right">
          {whyItems.map((item, i) => (
            <div className="esv-why-item" key={i}>
              <div className="esv-why-num">{i + 1}</div>
              <span className="esv-why-label">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="esv-cta-section">
      <div className="esv-cta-inner">
        <p>
          Contact our expert consultants today to discuss the most suitable Employer
          Sponsored Visa.
        </p>
      </div>
    </section>
  );
}

// ── Main Page ──
export default function EmployerSponsoredVisaPage() {
  return (
    <>
      <style>{styles}</style>
      <div className="esv-page">
        <HeroSection />
        <IntroSection />
        <VisaOptionsSection />
        <WhySkySection />
        <CtaBanner />
      </div>
    </>
  );
}