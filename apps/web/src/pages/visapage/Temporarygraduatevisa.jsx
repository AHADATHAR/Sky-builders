import {
  Briefcase,
  GraduationCap,
  Users,
  Plane,
  CheckSquare,
  ShieldCheck,
  FileText,
  BookOpen,
  Globe,
  Award,
} from "lucide-react";

/* ─── STYLES ─────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .tgv {
    font-family: 'Inter', sans-serif;
    color: #0d1b3e;
    background: #fff;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* ════════════════════════════════
     HERO
  ════════════════════════════════ */
  .tgv-hero {
    position: relative;
    min-height: 420px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 90px 20px 0;
  }
  .tgv-hero-bg {
    position: absolute; inset: 0; z-index: 0;
    background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80');
    background-size: cover;
    background-position: center 35%;
  }
  .tgv-hero-overlay {
    position: absolute; inset: 0; z-index: 1;
    background: linear-gradient(
      to right,
      rgba(10,18,52,0.96) 38%,
      rgba(10,18,52,0.82) 62%,
      rgba(10,18,52,0.55) 100%
    );
  }
  .tgv-hero-inner {
    position: relative; z-index: 2;
    max-width: 1160px; margin: 0 auto;
    padding: 80px 48px 72px; width: 100%;
  }
  .tgv-badge {
    display: inline-block;
    border: 1px solid rgba(255,255,255,0.38);
    color: rgba(255,255,255,0.78);
    font-size: 10px; font-weight: 600;
    letter-spacing: 1.8px; text-transform: uppercase;
    padding: 5px 16px; border-radius: 20px; margin-bottom: 28px;
  }
  .tgv-hero h1 {
    font-size: clamp(30px, 5vw, 54px);
    font-weight: 800; color: #fff;
    line-height: 1.1; max-width: 500px; margin-bottom: 22px;
    font-family: 'Inter', sans-serif;
  }
  .tgv-hero-sub {
    font-size: clamp(14px, 1.8vw, 16px);
    color: rgba(255,255,255,0.75);
    max-width: 460px; line-height: 1.8; margin-bottom: 36px;
  }
  .tgv-btn-red {
    display: inline-flex; align-items: center; gap: 8px;
    background: #c0392b; color: #fff;
    padding: 14px 28px; border-radius: 5px;
    font-size: 13px; font-weight: 700;
    border: none; cursor: pointer;
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.3px;
    transition: background 0.2s, transform 0.15s;
  }
  .tgv-btn-red:hover { background: #a93226; transform: translateY(-1px); }

  /* ════════════════════════════════
     SHARED
  ════════════════════════════════ */
  .tgv-wrap { max-width: 1160px; margin: 0 auto; padding: 0 48px; }
  .tgv-sec  { padding: 72px 0; }
  .tgv-sec-gray { background: #f5f6fa; }
  .tgv-sec-navy { background: #0d1b3e; }

  .tgv-section-tag {
    font-size: 11px; font-weight: 800;
    letter-spacing: 2px; text-transform: uppercase;
    color: #0d1b3e; margin-bottom: 12px;
  }
  .tgv-h2 {
    font-size: clamp(20px, 2.8vw, 26px);
    font-weight: 800; color: #0d1b3e; line-height: 1.2; margin-bottom: 6px;
  }
  .tgv-divider {
    width: 48px; height: 3px; background: #c0392b;
    border-radius: 2px; margin-bottom: 24px;
  }
  .tgv-body {
    font-size: 15px; color: #3a3a3a;
    line-height: 1.88; margin-bottom: 20px;
  }
  .tgv-body:last-child { margin-bottom: 0; }

  /* ════════════════════════════════
     SECTION 2 — INTRO TEXT
  ════════════════════════════════ */
  .tgv-intro-sec { padding: 64px 0; }

  /* ════════════════════════════════
     SECTION 3 — WHAT DOES IT OFFER
  ════════════════════════════════ */
  .tgv-offer-tag {
    font-size: 11.5px; font-weight: 900;
    letter-spacing: 2.5px; text-transform: uppercase;
    color: #0d1b3e; margin-bottom: 14px;
  }
  .tgv-offer-divider {
    width: 100%; height: 2px; background: #c0392b;
    margin-bottom: 32px;
  }
  .tgv-offer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .tgv-offer-card {
    background: #fff;
    border: 1px solid #e2e6f0;
    border-radius: 10px;
    padding: 32px 28px;
    transition: box-shadow 0.2s;
  }
  .tgv-offer-card:hover { box-shadow: 0 6px 24px rgba(13,27,62,0.08); }
  .tgv-offer-card h3 {
    font-size: 17px; font-weight: 800;
    color: #0d1b3e; margin-bottom: 12px;
  }
  .tgv-offer-card p {
    font-size: 14px; color: #555; line-height: 1.78;
  }

  /* ════════════════════════════════
     SECTION 4 — KEY VISA BENEFITS
  ════════════════════════════════ */
  .tgv-benefits-tag {
    font-size: 11.5px; font-weight: 900;
    letter-spacing: 2.5px; text-transform: uppercase;
    color: #fff; margin-bottom: 36px;
  }
  .tgv-benefits-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
  }
  .tgv-benefit-cell {
    padding: 36px 32px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    position: relative;
  }
  .tgv-benefit-cell::after {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: #c0392b;
  }
  .tgv-benefit-cell:nth-child(odd)::after { display: block; }
  .tgv-benefit-cell:nth-child(even)::after { display: block; left: 0; }
  .tgv-benefit-icon {
    color: #c0392b; margin-bottom: 16px; display: block;
  }
  .tgv-benefit-cell h3 {
    font-size: 16px; font-weight: 700;
    color: #fff; margin-bottom: 10px;
  }
  .tgv-benefit-cell p {
    font-size: 13.5px; color: rgba(255,255,255,0.62); line-height: 1.72;
  }

  /* ════════════════════════════════
     SECTION 5 — ELIGIBILITY
  ════════════════════════════════ */
  .tgv-elig-tag {
    font-size: 11.5px; font-weight: 900;
    letter-spacing: 2.5px; text-transform: uppercase;
    color: #0d1b3e; margin-bottom: 14px;
  }
  .tgv-elig-divider {
    width: 100%; height: 2px; background: #c0392b;
    margin-bottom: 32px;
  }
  .tgv-elig-list { margin-bottom: 32px; }
  .tgv-elig-item {
    display: flex; align-items: flex-start; gap: 12px;
    margin-bottom: 16px;
  }
  .tgv-elig-sq {
    width: 8px; height: 8px;
    background: #c0392b; border-radius: 1px;
    flex-shrink: 0; margin-top: 7px;
  }
  .tgv-elig-text {
    font-size: 14.5px; color: #2c2c2c; line-height: 1.7;
  }
  .tgv-elig-note {
    background: #eef1f8;
    border-radius: 8px;
    padding: 22px 24px;
    font-size: 14px; color: #2c3e50; line-height: 1.75;
  }

  /* ════════════════════════════════
     SECTION 6 — HOW SKY CAN HELP
  ════════════════════════════════ */
  .tgv-help-inner {
    max-width: 860px; margin: 0 auto; text-align: center;
    padding: 72px 48px;
  }
  .tgv-help-inner h2 {
    font-size: clamp(22px, 3.2vw, 30px);
    font-weight: 800; color: #fff; margin-bottom: 20px;
  }
  .tgv-help-inner p {
    font-size: 14.5px; color: rgba(255,255,255,0.68);
    line-height: 1.85; margin-bottom: 40px; max-width: 680px; margin-left: auto; margin-right: auto;
  }
  /* CTA card inside navy section */
  .tgv-cta-card {
    background: #c0392b;
    border-radius: 10px;
    padding: 44px 40px;
    text-align: center;
  }
  .tgv-cta-card h3 {
    font-size: clamp(17px, 2.5vw, 22px);
    font-weight: 800; color: #fff;
    margin-bottom: 24px; line-height: 1.35;
  }
  .tgv-btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: #fff;
    border: 2px solid rgba(255,255,255,0.85);
    padding: 13px 32px; border-radius: 5px;
    font-size: 13px; font-weight: 700;
    cursor: pointer; letter-spacing: 0.6px;
    text-transform: uppercase;
    font-family: 'Inter', sans-serif;
    transition: background 0.2s, border-color 0.2s;
  }
  .tgv-btn-outline:hover {
    background: rgba(255,255,255,0.15);
    border-color: #fff;
  }

  /* ════════════════════════════════
     RESPONSIVE
  ════════════════════════════════ */
  @media (max-width: 900px) {
    .tgv-hero { margin: 12px 12px 0; }
    .tgv-offer-grid { grid-template-columns: 1fr; }
    .tgv-benefits-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px) {
    .tgv-hero { margin: 8px 8px 0; border-radius: 10px; }
    .tgv-hero-inner { padding: 56px 24px 48px; }
    .tgv-wrap { padding: 0 20px; }
    .tgv-sec { padding: 52px 0; }
    .tgv-help-inner { padding: 52px 20px; }
    .tgv-benefit-cell { padding: 28px 22px; }
    .tgv-cta-card { padding: 32px 22px; }
  }
`;

/* ─── DATA ───────────────────────────────────────────────────── */
const offerCards = [
  {
    title: "Graduate Work Stream",
    desc: "This stream lets recent international graduates stay and work in Australia for up to 18 months if their qualification matches an occupation on Australia's skilled occupation list.",
  },
  {
    title: "Post-Study Work Stream",
    desc: "For students who completed an Australian higher education degree (Bachelor's, Master's, or PhD), this stream allows you to stay and work in Australia for 2 to 4 years, depending on your qualification.",
  },
];

const benefits = [
  {
    icon: <Briefcase size={28} />,
    title: "Work Rights",
    desc: "The Subclass 485 visa grants you full work rights, allowing you to gain valuable work experience in Australia.",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Study Rights",
    desc: "If you wish to pursue further studies in Australia, you can do so while holding this visa.",
  },
  {
    icon: <Users size={28} />,
    title: "Family Inclusion",
    desc: "You can include eligible family members, such as a spouse or children, in your visa application.",
  },
  {
    icon: <Plane size={28} />,
    title: "Travel Flexibility",
    desc: "This visa allows you to travel in and out of Australia during the visa's validity.",
  },
];

const eligItems = [
  "You must be under 50 years of age at the time of applying.",
  "You must have held a valid Australian student visa in the last 6 months before applying (excluding specific categories).",
  "You need to have completed an eligible qualification (bachelor's, master's, or doctoral degree) from a CRICOS-registered course.",
  "You must provide proof of your English proficiency through recognised tests like IELTS, TOEFL, or PTE.",
  "Evidence of health insurance for the duration of your stay is mandatory.",
  "You will be required to provide an AFP (Australian Federal Police) check.",
  "Applicants should have no history of visa cancellation or refused Australian visa applications.",
];

/* ─── SECTION COMPONENTS ─────────────────────────────────────── */

function Hero() {
  return (
    <section className="tgv-hero">
      <div className="tgv-hero-bg" />
      <div className="tgv-hero-overlay" />
      <div className="tgv-hero-inner">
        <div className="tgv-badge">Temporary Graduate Visa</div>
        <h1>Temporary Graduate Visa – Subclass 485</h1>
        <p className="tgv-hero-sub">
          The Temporary Graduate Visa enables eligible international students to live, study and
          work in Australia temporarily after finishing their studies.
        </p>
        <button className="tgv-btn-red">Schedule Your Consultation</button>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="tgv-sec tgv-intro-sec">
      <div className="tgv-wrap">
        <p className="tgv-body">
          The Temporary Graduate Visa (Subclass 485) provides an excellent opportunity for
          international students who have recently completed their studies in Australia. If you've
          completed your qualifications and want to gain work experience, explore further study
          opportunities, or simply enjoy an extended stay, the subclass 485 visa enables you to
          do so.
        </p>
        <p className="tgv-body">
          This visa allows graduates to live, work, and study in Australia temporarily. But you
          may need professional guidance for a smooth transition into the workforce or to explore
          additional educational pursuits. That's where Sky Consultant comes in to assist you
          throughout the process. With years of expertise in Australian immigration services, we
          offer step-by-step guidance in applying for your Temporary Graduate Visa.
        </p>
      </div>
    </section>
  );
}

function WhatDoesItOffer() {
  return (
    <section className="tgv-sec tgv-sec-gray">
      <div className="tgv-wrap">
        <div className="tgv-offer-tag">What Does the Subclass 485 Visa Offer?</div>
        <div className="tgv-offer-divider" />
        <div className="tgv-offer-grid">
          {offerCards.map((card, i) => (
            <div className="tgv-offer-card" key={i}>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KeyBenefits() {
  return (
    <section className="tgv-sec tgv-sec-navy">
      <div className="tgv-wrap">
        <div className="tgv-benefits-tag">Key Visa Benefits</div>
        <div className="tgv-benefits-grid">
          {benefits.map((b, i) => (
            <div className="tgv-benefit-cell" key={i}>
              <span className="tgv-benefit-icon">{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EligibilityCriteria() {
  return (
    <section className="tgv-sec">
      <div className="tgv-wrap">
        <div className="tgv-elig-tag">Eligibility Criteria</div>
        <div className="tgv-elig-divider" />
        <div className="tgv-elig-list">
          {eligItems.map((item, i) => (
            <div className="tgv-elig-item" key={i}>
              <div className="tgv-elig-sq" />
              <span className="tgv-elig-text">{item}</span>
            </div>
          ))}
        </div>
        <div className="tgv-elig-note">
          At Sky Consultant, we assist you in understanding all the necessary documentation and
          help streamline your application process to minimize errors.
        </div>
      </div>
    </section>
  );
}

function HowWeHelp() {
  return (
    <section className="tgv-sec-navy">
      <div className="tgv-help-inner">
        <h2>How Sky Consultant Can Help You?</h2>
        <p>
          At Sky Consultant, we take pride in helping international students navigate the
          complexities of the Temporary Graduate Visa process, from providing expert advice on
          visa eligibility to assisting with document preparation and submission, we make sure
          that your application is as smooth as possible. Our team also guides you on optimizing
          your work opportunities and career prospects in Australia post-graduation.
        </p>
        <div className="tgv-cta-card">
          <h3>
            Ready to Start Your Career in Australia?<br />
            Get Your Temporary Graduate Visa with Expert Assistance
          </h3>
          <button className="tgv-btn-outline">Contact Us Now</button>
        </div>
      </div>
    </section>
  );
}

/* ─── ROOT ───────────────────────────────────────────────────── */
export default function TemporaryGraduateVisa() {
  return (
    <>
      <style>{css}</style>
      <div className="tgv">
        <Hero />
        <IntroSection />
        <WhatDoesItOffer />
        <KeyBenefits />
        <EligibilityCriteria />
        <HowWeHelp />
      </div>
    </>
  );
}