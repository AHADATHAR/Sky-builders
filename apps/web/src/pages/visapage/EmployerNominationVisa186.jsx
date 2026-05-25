import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Quote,
} from "lucide-react";

/* ─── STYLES ─────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .env {
    font-family: 'Inter', sans-serif;
    color: #0d1b3e;
    background: #fff;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* ════════ HERO ════════ */
  .env-hero {
    position: relative;
    min-height: 420px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 90px 20px 0;
  }
  .env-hero-bg {
    position: absolute; inset: 0; z-index: 0;
    background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80');
    background-size: cover;
    background-position: center 35%;
  }
  .env-hero-overlay {
    position: absolute; inset: 0; z-index: 1;
    background: linear-gradient(
      to right,
      rgba(10,18,52,0.96) 38%,
      rgba(10,18,52,0.80) 62%,
      rgba(10,18,52,0.50) 100%
    );
  }
  .env-hero-inner {
    position: relative; z-index: 2;
    max-width: 1160px; margin: 0 auto;
    padding: 80px 48px 72px; width: 100%;
  }
  .env-badge {
    display: inline-block;
    border: 1px solid rgba(255,255,255,0.38);
    color: rgba(255,255,255,0.78);
    font-size: 10px; font-weight: 600;
    letter-spacing: 1.8px; text-transform: uppercase;
    padding: 5px 16px; border-radius: 20px; margin-bottom: 28px;
  }
  .env-hero h1 {
    font-size: clamp(30px, 5vw, 52px);
    font-weight: 800; color: #fff;
    line-height: 1.1; max-width: 520px; margin-bottom: 22px;
  }
  .env-hero-sub {
    font-size: clamp(14px, 1.8vw, 16px);
    color: rgba(255,255,255,0.72);
    max-width: 440px; line-height: 1.8; margin-bottom: 36px;
  }
  .env-btn-red {
    display: inline-flex; align-items: center; gap: 8px;
    background: #c0392b; color: #fff;
    padding: 14px 28px; border-radius: 5px;
    font-size: 13px; font-weight: 700;
    border: none; cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: background 0.2s, transform 0.15s;
  }
  .env-btn-red:hover { background: #a93226; transform: translateY(-1px); }

  /* ════════ SHARED ════════ */
  .env-wrap  { max-width: 1160px; margin: 0 auto; padding: 0 48px; }
  .env-sec   { padding: 72px 0; }
  .env-sec-gray { background: #f5f6fa; }
  .env-sec-navy { background: #0d1b3e; }

  .env-h2 {
    font-size: clamp(20px, 2.8vw, 28px);
    font-weight: 800; color: #0d1b3e; line-height: 1.2; margin-bottom: 10px;
  }
  .env-body {
    font-size: 14.5px; color: #444;
    line-height: 1.85; margin-bottom: 20px;
  }
  .env-body:last-child { margin-bottom: 0; }

  /* ════════ SECTION 2: WHAT IT OFFERS ════════ */
  .env-offers-list { display: flex; flex-direction: column; gap: 8px; margin-top: 24px; }
  .env-offer-item {
    display: flex; align-items: center; gap: 16px;
    background: #f5f6fa; border-radius: 8px;
    padding: 18px 22px;
    font-size: 14.5px; color: #2c2c2c; font-weight: 500;
  }
  .env-offer-icon { color: #c0392b; flex-shrink: 0; }

  /* ════════ SECTION 3: STREAMS INTRO ════════ */
  .env-streams-intro { padding: 56px 0 32px; }

  /* ════════ STREAM BLOCKS ════════ */
  /* Stream layout: left text | right card (or reversed) */
  .env-stream-block {
    padding: 48px 0;
    border-top: 1px solid #eaedf4;
  }
  .env-stream-block:first-child { border-top: none; }

  .env-stream-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;
  }
  .env-stream-grid-rev {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;
  }

  .env-stream-num {
    font-size: clamp(20px, 2.5vw, 26px);
    font-weight: 800; color: #0d1b3e; margin-bottom: 12px;
  }
  .env-stream-desc {
    font-size: 14px; color: #555; line-height: 1.78; margin-bottom: 28px;
  }
  .env-stream-sub {
    font-size: 18px; font-weight: 800; color: #0d1b3e; margin-bottom: 14px;
  }

  /* Key Features list */
  .env-features-list { display: flex; flex-direction: column; gap: 10px; }
  .env-feature-item {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: 14px; color: #2c2c2c; line-height: 1.65;
  }
  .env-feat-arrow { color: #c0392b; flex-shrink: 0; margin-top: 2px; }
  .env-feat-quote { color: #c0392b; flex-shrink: 0; margin-top: 1px; }
  .env-feat-trend { color: #c0392b; flex-shrink: 0; margin-top: 1px; }

  /* Eligibility criteria card */
  .env-elig-card {
    background: #f5f6fa;
    border-radius: 10px;
    padding: 32px 28px;
  }
  .env-elig-card h3 {
    font-size: 20px; font-weight: 800; color: #0d1b3e; margin-bottom: 18px;
  }
  .env-elig-item {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: 14px; color: #2c2c2c; line-height: 1.65;
    margin-bottom: 12px;
  }
  .env-elig-item:last-child { margin-bottom: 0; }
  .env-elig-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #c0392b; flex-shrink: 0; margin-top: 8px;
  }

  /* ════════ SECTION 7: APPLICATION PROCESS ════════ */
  .env-proc-intro {
    font-size: 14px; color: #666; margin-bottom: 32px; line-height: 1.7;
  }
  .env-steps { display: flex; flex-direction: column; gap: 12px; }
  .env-step {
    display: flex; align-items: flex-start; gap: 20px;
    background: #f5f6fa;
    border-radius: 8px;
    padding: 24px 24px;
    border: 1px solid #eaedf4;
  }
  .env-step-num {
    width: 36px; height: 36px; flex-shrink: 0;
    background: #0d1b3e; border-radius: 7px;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; font-weight: 700; color: #fff;
  }
  .env-step-title {
    font-size: 14.5px; font-weight: 700; color: #0d1b3e; margin-bottom: 6px;
  }
  .env-step-desc {
    font-size: 13.5px; color: #555; line-height: 1.7;
  }

  /* ════════ SECTION 8: CTA ════════ */
  .env-cta-wrap {
    padding: 72px 48px;
  }
  .env-cta-card {
    background: #c0392b;
    border-radius: 10px;
    padding: 60px 48px;
    text-align: center;
  }
  .env-cta-title {
    font-size: clamp(20px, 3vw, 26px);
    font-weight: 800; color: #fff;
    margin-bottom: 18px; line-height: 1.3;
  }
  .env-cta-sub {
    font-size: 14.5px; color: rgba(255,255,255,0.80);
    line-height: 1.8; margin-bottom: 32px;
    max-width: 520px; margin-left: auto; margin-right: auto;
  }
  .env-btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: #fff;
    border: 2px solid rgba(255,255,255,0.85);
    padding: 14px 34px; border-radius: 5px;
    font-size: 13px; font-weight: 700;
    cursor: pointer; letter-spacing: 0.5px;
    font-family: 'Inter', sans-serif;
    transition: background 0.2s;
  }
  .env-btn-outline:hover { background: rgba(255,255,255,0.14); }

  /* ════════ RESPONSIVE ════════ */
  @media (max-width: 900px) {
    .env-hero { margin: 12px 12px 0; }
    .env-stream-grid,
    .env-stream-grid-rev { grid-template-columns: 1fr; gap: 32px; }
  }
  @media (max-width: 640px) {
    .env-hero { margin: 8px 8px 0; border-radius: 10px; }
    .env-hero-inner { padding: 56px 24px 48px; }
    .env-wrap { padding: 0 20px; }
    .env-sec { padding: 52px 0; }
    .env-cta-wrap { padding: 52px 20px; }
    .env-cta-card { padding: 40px 24px; }
  }
`;

/* ─── DATA ───────────────────────────────────────────────────── */
const offerItems = [
  "Stay in Australia indefinitely as a permanent resident.",
  "Work and study anywhere in Australia without restriction.",
  "Enrol in Medicare, Australia's comprehensive public healthcare scheme.",
  "Sponsor eligible relatives for permanent residency.",
  "Apply for Australian citizenship once eligibility requirements are met.",
];

const directFeatures = [
  "Permanent residency from the outset.",
  "Available for workers outside or inside Australia.",
  "Requires a positive skills assessment.",
  "Employer nomination is essential.",
  "Occupation must be on the relevant list.",
  "No need for prior Australian work history.",
];
const directElig = [
  "Be under 45 years of age (exemptions apply).",
  "Have at least 3 years of relevant work experience.",
  "Possess a positive skills assessment.",
  "Demonstrate Competent English proficiency.",
  "Meet health and character requirements.",
  "Nominated by an approved Australian employer.",
  "Occupation must be on the Skilled Occupation List.",
];

const labourElig = [
  "Nominated by an employer under a specific agreement.",
  "Meet the age, skill, and English requirements in the agreement.",
  "Demonstrate work experience as specified in the agreement.",
  "Meet health and character requirements.",
  "Be currently working for the nominating employer.",
];
const labourFeatures = [
  "Tailored to specific industry or regional needs.",
  "Possible concessions on age, English, or skills.",
  "Permanent residency pathway.",
  "Used when standard streams are not applicable.",
  "Subject to the terms of the individual agreement.",
];

const trtFeatures = [
  "Smooth transition from temporary to permanent residency.",
  "No positive skills assessment required for many applicants.",
  "Employer-sponsored path.",
  "Recognises existing Australian work history.",
  "Faster processing compared to Direct Entry for some.",
];
const trtElig = [
  "Hold a Subclass 457 or 482 (TSS) visa.",
  "Worked for the employer for 2 or 3 years (depending on visa).",
  "Be under 45 years of age (exemptions apply).",
  "Demonstrate Competent English.",
  "Nominated by the same employer who sponsored the temporary visa.",
  "Meet health and character requirements.",
];

const appSteps = [
  {
    title: "Employer Nomination",
    desc: "The employer must apply to the Department of Home Affairs to nominate you for a specific position in their business. This involves demonstrating that the position is genuine, full-time, and that they have the capacity to employ you for at least two years.",
  },
  {
    title: "Visa Application",
    desc: "Once the nomination is approved (or lodged simultaneously), you must submit your visa application. You will need to provide extensive documentation to prove you meet all personal eligibility criteria, including skills, work experience, English proficiency, and health and character standards.",
  },
  {
    title: "Document Preparation",
    desc: "Gathering accurate documents is crucial. This includes identity papers, skills assessments, employment records, English test results, and police clearances. Ensuring all documents are in order helps prevent delays or refusals.",
  },
  {
    title: "Assessment and Processing",
    desc: "The Department of Home Affairs will assess both the employer's nomination and your visa application. They may request additional information or clarification during this period. Processing times can vary depending on the stream and complexity of the case.",
  },
  {
    title: "Visa Grant",
    desc: "If both the nomination and visa applications are successful, you will be granted the Subclass 186 visa. You will then be a permanent resident of Australia, enjoying all the associated rights and responsibilities.",
  },
];

/* ─── COMPONENTS ─────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="env-hero">
      <div className="env-hero-bg" />
      <div className="env-hero-overlay" />
      <div className="env-hero-inner">
        <div className="env-badge">Employer Nomination</div>
        <h1>Employer Nomination Visa Subclass 186</h1>
        <p className="env-hero-sub">
          The Employer Nomination Scheme (ENS) visa (Subclass 186) is a permanent residency visa
          for skilled workers who are nominated by an Australian employer.
        </p>
        <button className="env-btn-red">Schedule Your Consultation</button>
      </div>
    </section>
  );
}

function WhatItOffers() {
  return (
    <section className="env-sec">
      <div className="env-wrap">
        <h2 className="env-h2">What the Subclass 186 Visa Offers</h2>
        <p className="env-body">
          This visa provides a clear pathway to permanent residency and comes with several benefits:
        </p>
        <div className="env-offers-list">
          {offerItems.map((item, i) => (
            <div className="env-offer-item" key={i}>
              <CheckCircle2 size={18} className="env-offer-icon" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StreamsIntro() {
  return (
    <section className="env-sec env-sec-gray env-streams-intro">
      <div className="env-wrap">
        <h2 className="env-h2">Streams Under the Employer Nomination Visa Subclass 186</h2>
        <p className="env-body">
          There are three distinct streams under the Subclass 186 visa, each catering to different
          circumstances of skilled workers and employers.
        </p>
      </div>
    </section>
  );
}

function EligCard({ items }) {
  return (
    <div className="env-elig-card">
      <h3>Eligibility Criteria</h3>
      {items.map((item, i) => (
        <div className="env-elig-item" key={i}>
          <div className="env-elig-dot" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

/* Icon variants per stream */
function ArrowItem({ text }) {
  return (
    <div className="env-feature-item">
      <ArrowRight size={15} className="env-feat-arrow" />
      <span>{text}</span>
    </div>
  );
}
function QuoteItem({ text }) {
  return (
    <div className="env-feature-item">
      <ChevronRight size={15} className="env-feat-quote" style={{ color: "#c0392b" }} />
      <ChevronRight size={15} style={{ color: "#c0392b", marginLeft: -10, flexShrink: 0, marginTop: 2 }} />
      <span style={{ marginLeft: 2 }}>{text}</span>
    </div>
  );
}
function TrendItem({ text }) {
  return (
    <div className="env-feature-item">
      <TrendingUp size={15} className="env-feat-trend" />
      <span>{text}</span>
    </div>
  );
}

function DirectEntryStream() {
  return (
    <section className="env-sec">
      <div className="env-wrap">
        <div className="env-stream-grid">
          {/* LEFT: text */}
          <div>
            <div className="env-stream-num">1. Direct Entry Stream</div>
            <p className="env-stream-desc">
              This stream is for skilled workers who are nominated by an employer for a permanent
              position and do not meet the requirements for the other two streams.
            </p>
            <div className="env-stream-sub">Key Features</div>
            <div className="env-features-list">
              {directFeatures.map((f, i) => <ArrowItem key={i} text={f} />)}
            </div>
          </div>
          {/* RIGHT: elig card */}
          <EligCard items={directElig} />
        </div>
      </div>
    </section>
  );
}

function LabourAgreementStream() {
  return (
    <section className="env-sec env-sec-gray">
      <div className="env-wrap">
        <div className="env-stream-grid-rev">
          {/* LEFT: elig card */}
          <EligCard items={labourElig} />
          {/* RIGHT: text */}
          <div>
            <div className="env-stream-num">2. Labour Agreement Stream</div>
            <p className="env-stream-desc">
              This stream is for workers nominated by an employer who has entered into a specific
              Labour Agreement with the Australian Government.
            </p>
            <div className="env-stream-sub">Key Features</div>
            <div className="env-features-list">
              {labourFeatures.map((f, i) => <QuoteItem key={i} text={f} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TRTStream() {
  return (
    <section className="env-sec">
      <div className="env-wrap">
        <div className="env-stream-grid">
          {/* LEFT: text */}
          <div>
            <div className="env-stream-num">3. Temporary Residence Transition Stream</div>
            <p className="env-stream-desc">
              This stream is for workers who already hold a Subclass 482 or 457 visa and have worked
              for their nominating employer for a specified period.
            </p>
            <div className="env-stream-sub">Key Features</div>
            <div className="env-features-list">
              {trtFeatures.map((f, i) => <TrendItem key={i} text={f} />)}
            </div>
          </div>
          {/* RIGHT: elig card */}
          <EligCard items={trtElig} />
        </div>
      </div>
    </section>
  );
}

function ApplicationProcess() {
  return (
    <section className="env-sec env-sec-gray">
      <div className="env-wrap">
        <h2 className="env-h2">Application Process for the Subclass 186 Visa</h2>
        <p className="env-proc-intro">Applying for the Subclass 186 visa involves a two-stage process:</p>
        <div className="env-steps">
          {appSteps.map((step, i) => (
            <div className="env-step" key={i}>
              <div className="env-step-num">{i + 1}</div>
              <div>
                <div className="env-step-title">{step.title}</div>
                <div className="env-step-desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <div className="env-cta-wrap">
      <div className="env-cta-card">
        <div className="env-cta-title">
          Looking for Expert Support to Secure an Employer Nomination Visa?
        </div>
        <p className="env-cta-sub">
          The Subclass 186 visa application process can be complex and demands meticulous attention
          to detail. At Sky Consultant, we provide expert guidance to both employers and skilled
          workers, ensuring every requirement is met for a successful outcome.
        </p>
        <button className="env-btn-outline">Get Started with Sky Consultant</button>
      </div>
    </div>
  );
}

/* ─── ROOT ───────────────────────────────────────────────────── */
export default function EmployerNominationVisa186() {
  return (
    <>
      <style>{css}</style>
      <div className="env">
        <Hero />
        <WhatItOffers />
        <StreamsIntro />
        <DirectEntryStream />
        <LabourAgreementStream />
        <TRTStream />
        <ApplicationProcess />
        <CtaBanner />
      </div>
    </>
  );
}