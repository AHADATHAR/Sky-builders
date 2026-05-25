import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .visa-page {
    font-family: 'Inter', sans-serif;
    color: #0d1b3e;
    background: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* HERO SECTION BACKGROUND */
  .hero-section {
    position: relative;
    overflow: hidden;
    border-radius: 24px;
    min-height: 74vh;
    width: 95%;
    margin: 90px auto;
    background-image:
      linear-gradient(
        90deg,
        rgba(10, 22, 40, 0.95) 20%,
        rgba(10, 22, 40, 0.7) 45%,
        rgba(10, 22, 40, 0.2) 100%
      ),
      url("https://i.ibb.co/bjM1769Z/7751f0872e8727b619adbd2bbd00c911433d4fd6-1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 40px;
    width: 100%;
  }
  .hero-badge {
    display: inline-block;
    border: 1px solid rgba(255,255,255,0.4);
    color: rgba(255,255,255,0.85);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 20px;
    margin-bottom: 24px;
  }
  .hero-section h1 {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 800;
    color: #ffffff;
    line-height: 1.15;
    margin-bottom: 20px;
    max-width: 520px;
  }
  .hero-subtitle {
    font-size: 16px;
    color: rgba(255,255,255,0.75);
    max-width: 420px;
    margin-bottom: 36px;
    font-weight: 400;
  }
  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #c0392b;
    color: white;
    padding: 14px 28px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    font-family: 'Inter', sans-serif;
  }
  .btn-primary:hover { background: #e74c3c; transform: translateY(-1px); }

  /* ── INTRO ── */
  .intro-section {
    width: 100%;
    padding: 40px 0;
  }
  .intro-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }
  .intro-text {
    border-left: 4px solid #c0392b;
    padding-left: 28px;
  }
  .intro-text p {
    font-size: 15px;
    color: #444;
    line-height: 1.8;
    margin-bottom: 16px;
  }
  .intro-text p:last-child { margin-bottom: 0; }
  .intro-visual {
    background: #0d1b3e;
    border-radius: 12px;
    aspect-ratio: 4/3;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .intro-visual::before {
    content: '';
    position: absolute;
    top: -30px; right: -30px;
    width: 120px; height: 120px;
    background: #c0392b;
    border-radius: 50%;
    opacity: 0.2;
  }

  /* ── OFFERS ── */
  .offers-section {
    width: 100%;
    padding: 80px 0;
  }
  .offers-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }
  .section-title {
    font-size: clamp(22px, 3vw, 30px);
    font-weight: 800;
    color: #0d1b3e;
    margin-bottom: 48px;
  }
  .offers-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border: 1px solid rgba(13,27,62,0.1);
    border-radius: 8px;
    overflow: hidden;
  }
  .offer-item {
    padding: 32px 28px;
    border-right: 1px solid rgba(13,27,62,0.1);
    border-bottom: 1px solid rgba(13,27,62,0.1);
    display: flex;
    gap: 16px;
  }
  .offer-item:nth-child(2n) { border-right: none; }
  .offer-item:last-child { border-bottom: none; }
  .offer-bullet {
    flex-shrink: 0;
    width: 8px; height: 8px;
    background: #c0392b;
    border-radius: 50%;
    margin-top: 7px;
  }
  .offer-text {
    font-size: 14px;
    color: #333;
    line-height: 1.7;
  }

  /* ── ELIGIBILITY ── */
  .eligibility-section {
    background: #0d1b3e;
    width: 100%;
    padding: 80px 0;
  }
  .eligibility-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 80px;
    align-items: start;
  }
  .eligibility-sidebar h2 {
    font-size: clamp(22px, 3vw, 30px);
    font-weight: 800;
    color: white;
    margin-bottom: 16px;
    line-height: 1.2;
  }
  .eligibility-sidebar p {
    font-size: 14px;
    color: rgba(255,255,255,0.6);
    line-height: 1.7;
  }
  .eligibility-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .eligibility-item {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }
  .eligibility-num {
    flex-shrink: 0;
    width: 36px; height: 36px;
    background: #c0392b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    color: white;
  }
  .eligibility-content h3 {
    font-size: 16px;
    font-weight: 700;
    color: white;
    margin-bottom: 6px;
  }
  .eligibility-content p {
    font-size: 13px;
    color: rgba(255,255,255,0.6);
    line-height: 1.6;
  }

  /* ── PROCESS ── */
  .process-section {
    width: 100%;
    padding: 80px 0;
  }
  .process-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
  }
  .process-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .process-card {
    border: 1px solid rgba(13,27,62,0.1);
    border-radius: 8px;
    padding: 28px 24px;
    background: #ffffff;
  }
  .process-card.nomination {
    background: #f8f9fc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-row: span 2;
  }
  .process-card.full { grid-column: span 2; }
  .process-card-icon {
    width: 40px; height: 40px;
    background: #edf0f7;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }
  .process-card h3 {
    font-size: 15px;
    font-weight: 700;
    color: #0d1b3e;
    margin-bottom: 8px;
  }
  .process-card p {
    font-size: 13px;
    color: #6b7a99;
    line-height: 1.7;
  }

  /* ── FEES ── */
  .fees-section {
    width: 100%;
    padding: 80px 0;
  }
  .fees-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }
  .fees-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 16px;
  }
  .fee-card {
    border-top: 3px solid #c0392b;
    padding: 28px 24px;
    background: #ffffff;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }
  .fee-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #6b7a99;
    margin-bottom: 10px;
  }
  .fee-amount {
    font-size: 32px;
    font-weight: 800;
    color: #0d1b3e;
    margin-bottom: 10px;
  }
  .fee-desc {
    font-size: 13px;
    color: #6b7a99;
    line-height: 1.6;
  }
  .fee-note {
    font-size: 12px;
    color: #6b7a99;
    text-align: center;
    font-style: italic;
    margin-bottom: 60px;
  }
  .cta-banner {
    background: #c0392b;
    border-radius: 12px;
    padding: 56px 40px;
    text-align: center;
  }
  .cta-banner h2 {
    font-size: clamp(20px, 3vw, 28px);
    font-weight: 800;
    color: white;
    line-height: 1.3;
    margin-bottom: 28px;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }
  .btn-white {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: white;
    color: #c0392b;
    padding: 14px 32px;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    border: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: opacity 0.2s, transform 0.15s;
  }
  .btn-white:hover { opacity: 0.92; transform: translateY(-1px); }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .intro-inner { grid-template-columns: 1fr; gap: 40px; }
    .eligibility-inner { grid-template-columns: 1fr; gap: 40px; }
    .process-grid { grid-template-columns: 1fr 1fr; }
    .process-card.nomination { grid-column: span 2; grid-row: auto; }
    .process-card.full { grid-column: span 2; }
    .fees-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px) {
    .hero-content { padding: 60px 20px; }
    .intro-inner,
    .offers-inner,
    .process-inner,
    .fees-inner,
    .eligibility-inner { padding: 0 20px; }
    .intro-section,
    .offers-section,
    .process-section,
    .fees-section { padding: 60px 0; }
    .eligibility-section { padding: 60px 0; }
    .offers-grid { grid-template-columns: 1fr; }
    .offer-item { border-right: none; }
    .process-grid { grid-template-columns: 1fr; }
    .process-card.nomination, .process-card.full { grid-column: span 1; grid-row: auto; }
    .fees-grid { grid-template-columns: 1fr; }
    .cta-banner { padding: 40px 20px; }
  }
`;

// ── Icons ──
const MapPinIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClipboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d1b3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
  </svg>
);

const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d1b3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const FileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d1b3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
  </svg>
);

const UploadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d1b3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/>
    <line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d1b3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

// ── Data ──
const offerItems = [
  "You will be able to live and work in designated regional areas of Australia for up to five years.",
  "You will be permitted to travel in and out of Australia during the validity of your visa, which lasts for five years.",
  "After living in Australia for three years and meeting income and skills criteria, you can apply for permanent residency under the Skilled Regional (Permanent) Visa.",
  "You will be eligible for Australia's public health care system, Medicare, which covers health-related services during your stay.",
  "You can include eligible family members in your application, including your spouse or dependent children, who will be allowed to live, work, and study in Australia during your visa validity.",
];

const eligibilityItems = [
  { num: 1, title: "Be Nominated or Sponsored", desc: "You must be nominated by an Australian state or territory government or have an eligible relative who can sponsor you." },
  { num: 2, title: "Relevant Occupation", desc: "You must have a skills assessment for an occupation listed on the Skilled Occupation List (SOL), which indicates that your profession is needed in Australia." },
  { num: 3, title: "Medical Requirements", desc: "All applicants must meet health and character requirements. This includes undergoing a medical examination and providing a police clearance certificate." },
  { num: 4, title: "Points Test", desc: "The visa is points-tested, meaning you must score a minimum of 85 points on the SkillSelect system based on factors such as age, work experience, English proficiency, and qualifications." },
  { num: 5, title: "Age Requirement", desc: "Applicants must be under 45 years of age at the time of application." },
  { num: 6, title: "English Proficiency", desc: "You need to demonstrate a competent level of English, typically through tests like IELTS, TOEFL, or PTE. Exemptions apply to citizens of the UK, USA, Canada, and New Zealand." },
];

const feeItems = [
  { label: "Primary Applicant", amount: "AUD 4,640", desc: "The base application charge for the main skilled worker applicant." },
  { label: "Additional Applicant (18+)", amount: "AUD 2,455", desc: "The charge for each additional applicant aged 18 and over included in the application." },
  { label: "Additional Applicant (<18)", amount: "AUD 1,230", desc: "The charge for each additional applicant under the age of 18." },
];

// ── Section Components ──

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">Provisional Visa</div>
        <h1>Skilled Work (Provisional) Visa</h1>
        <p className="hero-subtitle">
          If you're interested in gaining permanent residency through regional contribution
        </p>
        <button className="btn-primary">Schedule Your Consultation</button>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="intro-section">
      <div className="intro-inner">
        <div className="intro-text">
          <p>
            If you're interested in gaining permanent residency while contributing to regional Australia's
            development, the Skilled Work Regional (Provisional) Visa (Subclass 491) could be the perfect
            solution. It helps skilled workers live, work, and study in Australia's regional areas.
          </p>
          <p>
            This visa offers a five-year provisional stay, with the opportunity to apply for permanent
            residency after three years, given that specific criteria are met. Sky Consultant is here to
            guide you through every step of the application process, ensuring your visa application is
            successful and efficient.
          </p>
        </div>
        <div className="intro-visual">
          <MapPinIcon />
        </div>
      </div>
    </section>
  );
}

function OffersSection() {
  return (
    <section className="offers-section">
      <div className="offers-inner">
        <h2 className="section-title">What the Subclass 491 Visa Offers</h2>
        <div className="offers-grid">
          {offerItems.map((text, i) => (
            <div className="offer-item" key={i}>
              <div className="offer-bullet" />
              <p className="offer-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EligibilitySection() {
  return (
    <section className="eligibility-section">
      <div className="eligibility-inner">
        <div className="eligibility-sidebar">
          <h2>Eligibility Criteria for Subclass 491 Visa</h2>
          <p>To qualify for the Skilled Work Regional (Provisional) Visa, you need to meet the following criteria:</p>
        </div>
        <div className="eligibility-list">
          {eligibilityItems.map((item) => (
            <div className="eligibility-item" key={item.num}>
              <div className="eligibility-num">{item.num}</div>
              <div className="eligibility-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="process-section">
      <div className="process-inner">
        <h2 className="section-title">Application Process for the Subclass 491 Visa</h2>
        <div className="process-grid">
          <div className="process-card">
            <div className="process-card-icon"><ClipboardIcon /></div>
            <h3>Occupation Assessment</h3>
            <p>Check if your occupation is included in the Skilled Occupation List and obtain a skills assessment from the relevant assessing authority.</p>
          </div>
          <div className="process-card">
            <div className="process-card-icon"><InfoIcon /></div>
            <h3>Submit Expression of Interest (EOI)</h3>
            <p>You need to submit an EOI via the SkillSelect portal, where your points score will be calculated.</p>
          </div>
          <div className="process-card nomination">
            <h3>State or Family Nomination</h3>
            <p>After submitting the EOI, you must be nominated by a state or territory government or sponsored by an eligible family member. Once you are nominated, you will be invited to apply for the visa.</p>
          </div>
          <div className="process-card">
            <div className="process-card-icon"><FileIcon /></div>
            <h3>Gather Required Documents</h3>
            <p>Required documents include your skills assessment, English proficiency test results, police clearances, and evidence of your family relationship (if applicable).</p>
          </div>
          <div className="process-card">
            <div className="process-card-icon"><UploadIcon /></div>
            <h3>Submit the Visa Application</h3>
            <p>After receiving the invitation, you can submit your visa application online through the Department of Home Affairs portal.</p>
          </div>
          <div className="process-card full">
            <div className="process-card-icon"><ClockIcon /></div>
            <h3>Wait for the Visa Decision</h3>
            <p>The processing time usually takes a few months, and once approved, you can start your journey to live and work in regional Australia.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeesSection() {
  return (
    <section className="fees-section">
      <div className="fees-inner">
        <h2 className="section-title">Visa Fees</h2>
        <div className="fees-grid">
          {feeItems.map((fee, i) => (
            <div className="fee-card" key={i}>
              <div className="fee-label">{fee.label}</div>
              <div className="fee-amount">{fee.amount}</div>
              <div className="fee-desc">{fee.desc}</div>
            </div>
          ))}
        </div>
        <p className="fee-note">
          Additional costs may include health checks, biometrics, and police clearance certificates.
        </p>
        <div className="cta-banner">
          <h2>Ready to Take the Next Step Toward Your Australian Dream? Connect with Sky Consultant Today!</h2>
          <button className="btn-white">Schedule Your Consultation</button>
        </div>
      </div>
    </section>
  );
}

// ── Main Page ──
export default function VisaLandingPage() {
  return (
    <>
      <style>{styles}</style>
      <div className="visa-page">
        <HeroSection />
        <IntroSection />
        <OffersSection />
        <EligibilitySection />
        <ProcessSection />
        <FeesSection />
      </div>
    </>
  );
}