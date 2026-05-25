import {
  GraduationCap, Users, Globe, Heart, Shield, Clock,
  FileCheck, Wallet, CheckCircle2, ChevronRight,
  MapPin, Briefcase, BookOpen, Building2, Award,
  ArrowRight, CalendarDays, AlertCircle
} from "lucide-react";

/* ─── STYLES ─────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .tv-page { font-family: 'Inter', sans-serif; color: #0d1b3e; background: #fff; line-height: 1.6; overflow-x: hidden; }

  /* ── HERO ── */
  .tv-hero {
    position: relative; min-height: 400px;
    display: flex; align-items: center; overflow: hidden;
    margin-top: 90px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 12px;
  }
  .tv-hero-bg {
    position: absolute; inset: 0; z-index: 0;
    background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80');
    background-size: cover; background-position: center 35%;
    border-radius: 12px;
  }
  .tv-hero-overlay {
    position: absolute; inset: 0; z-index: 1;
    background: linear-gradient(to right,
      rgba(10,18,50,0.96) 40%,
      rgba(10,18,50,0.80) 65%,
      rgba(10,18,50,0.52) 100%
    );
    border-radius: 12px;
  }
  .tv-hero-inner {
    position: relative; z-index: 2;
    max-width: 1160px; margin: 0 auto;
    padding: 88px 40px 72px; width: 100%;
  }
  .tv-badge {
    display: inline-block;
    border: 1px solid rgba(255,255,255,0.35);
    color: rgba(255,255,255,0.78);
    font-size: 10px; font-weight: 600;
    letter-spacing: 1.8px; text-transform: uppercase;
    padding: 5px 15px; border-radius: 20px; margin-bottom: 24px;
  }
  .tv-hero h1 {
    font-size: clamp(26px, 4.2vw, 48px);
    font-weight: 800; color: #fff;
    line-height: 1.12; max-width: 520px; margin-bottom: 20px;
  }
  .tv-hero-sub {
    font-size: clamp(13px, 1.6vw, 15px);
    color: rgba(255,255,255,0.72);
    max-width: 480px; line-height: 1.8; margin-bottom: 36px;
  }
  .tv-btn {
    display: inline-flex; align-items: center; gap: 8px;
    background: #c0392b; color: #fff;
    padding: 13px 26px; border-radius: 5px;
    font-size: 13px; font-weight: 600;
    border: none; cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: background 0.2s, transform 0.15s;
  }
  .tv-btn:hover { background: #e74c3c; transform: translateY(-1px); }
  .tv-btn-lg {
    padding: 15px 36px; font-size: 14px;
    border-radius: 6px;
  }

  /* ── SHARED ── */
  .tv-wrap { max-width: 1160px; margin: 0 auto; padding: 0 40px; }
  .tv-section { padding: 72px 0; width: 100%; }
  .tv-section-alt { background: #f4f6fb; width: 100%; }
  .tv-section-dark { background: #0d1b3e; width: 100%; }

  .tv-h2 {
    font-size: clamp(18px, 2.5vw, 24px);
    font-weight: 800; color: #0d1b3e;
    margin-bottom: 6px; line-height: 1.25;
  }
  .tv-h2-white { color: #fff; }
  .tv-divider {
    width: 44px; height: 3px; background: #c0392b;
    border-radius: 2px; margin-bottom: 24px;
  }
  .tv-body {
    font-size: 14.5px; color: #3c3c3c;
    line-height: 1.85; margin-bottom: 16px;
  }
  .tv-body:last-child { margin-bottom: 0; }

  /* ── SECTION 2: INTRO SPLIT ── */
  .tv-intro-grid {
    display: grid; grid-template-columns: 1fr 280px;
    gap: 64px; align-items: center;
  }
  .tv-intro-left { border-left: 4px solid #c0392b; padding-left: 28px; }
  .tv-intro-visual {
    background: #0d1b3e; border-radius: 12px;
    aspect-ratio: 3/4; display: flex;
    align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }
  .tv-intro-visual::before {
    content: ''; position: absolute;
    top: -30px; right: -30px;
    width: 120px; height: 120px;
    background: #c0392b; border-radius: 50%; opacity: 0.18;
  }
  .tv-intro-visual-label {
    position: absolute; bottom: 20px; left: 0; right: 0;
    text-align: center; font-size: 10px; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase;
    color: rgba(255,255,255,0.45);
  }

  /* ── SECTION 3: OVERVIEW LIST ── */
  .tv-overview-item {
    display: flex; align-items: flex-start; gap: 12px;
    margin-bottom: 18px;
  }
  .tv-overview-icon { color: #c0392b; flex-shrink: 0; margin-top: 2px; }
  .tv-overview-text { font-size: 14.5px; color: #2c2c2c; line-height: 1.7; }

  /* ── SECTION 4: APPROVED CATEGORIES ── */
  .tv-cats-header {
    text-align: center; margin-bottom: 36px;
  }
  .tv-cats-header .tv-h2 { margin-bottom: 0; }
  .tv-cats-divider {
    width: 44px; height: 3px; background: #c0392b;
    border-radius: 2px; margin: 10px auto 0;
  }
  .tv-cats-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 0;
    border: 1px solid #e0e4ee; border-radius: 8px; overflow: hidden;
  }
  .tv-cat-card {
    padding: 32px 28px;
    border-right: 1px solid #e0e4ee;
    background: #fff;
  }
  .tv-cat-card:last-child { border-right: none; }
  .tv-cat-icon-wrap {
    width: 44px; height: 44px; background: #f0f2f8;
    border-radius: 8px; display: flex; align-items: center;
    justify-content: center; margin-bottom: 14px; color: #0d1b3e;
  }
  .tv-cat-title {
    font-size: 15px; font-weight: 700; color: #0d1b3e;
    margin-bottom: 10px; line-height: 1.3;
  }
  .tv-cat-desc { font-size: 13.5px; color: #555; line-height: 1.7; }

  /* ── SECTION 5: WHO CAN APPLY ── */
  .tv-who-grid {
    display: grid; grid-template-columns: 340px 1fr; gap: 72px;
    align-items: start;
  }
  .tv-who-left h2 {
    font-size: clamp(22px, 3vw, 30px);
    font-weight: 800; color: #fff; line-height: 1.2;
  }
  .tv-req-list { display: flex; flex-direction: column; gap: 0; }
  .tv-req-item {
    display: flex; align-items: flex-start; gap: 18px;
    padding: 18px 0; border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  .tv-req-item:last-child { border-bottom: none; }
  .tv-req-num {
    flex-shrink: 0; width: 30px; height: 30px;
    background: #c0392b; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 700; color: #fff;
  }
  .tv-req-content {}
  .tv-req-title {
    font-size: 13.5px; font-weight: 700;
    color: rgba(255,255,255,0.92); margin-bottom: 3px;
  }
  .tv-req-desc { font-size: 13px; color: rgba(255,255,255,0.58); line-height: 1.6; }

  /* ── SECTION 6: PROCESSING TIME ── */
  .tv-proc-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 56px;
    align-items: start;
  }
  .tv-proc-box {
    background: #fff; border: 1px solid #e0e4ee;
    border-radius: 10px; padding: 32px 28px;
    border-left: 4px solid #c0392b;
  }
  .tv-proc-label {
    font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
    text-transform: uppercase; color: #c0392b; margin-bottom: 10px;
  }
  .tv-proc-time {
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 800; color: #0d1b3e; line-height: 1.15;
    margin-bottom: 6px;
  }
  .tv-proc-sub { font-size: 13px; color: #888; }
  .tv-proc-factors h3 {
    font-size: 14px; font-weight: 700; color: #0d1b3e;
    margin-bottom: 16px;
  }
  .tv-proc-factor {
    display: flex; align-items: flex-start; gap: 10px;
    margin-bottom: 14px;
  }
  .tv-proc-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #c0392b; flex-shrink: 0; margin-top: 7px;
  }
  .tv-proc-text { font-size: 13.5px; color: #444; line-height: 1.65; }

  /* ── SECTION 7: APPLICATION PROCESS ── */
  .tv-app-header { text-align: center; margin-bottom: 48px; }
  .tv-app-header .tv-h2 { margin-bottom: 0; }
  .tv-app-divider {
    width: 44px; height: 3px; background: #c0392b;
    border-radius: 2px; margin: 10px auto 0;
  }
  .tv-steps { display: flex; flex-direction: column; gap: 0; max-width: 820px; margin: 0 auto 64px; }
  .tv-step {
    display: flex; align-items: flex-start; gap: 24px;
    padding: 24px 0; border-bottom: 1px solid #eaedf4;
  }
  .tv-step:last-child { border-bottom: none; }
  .tv-step-title {
    font-size: 15px; font-weight: 700; color: #0d1b3e; margin-bottom: 5px;
  }
  .tv-step-desc { font-size: 13.5px; color: #555; line-height: 1.65; }
  .tv-step-num {
    flex-shrink: 0; font-size: clamp(36px, 5vw, 56px);
    font-weight: 800; color: #eaedf4; line-height: 1;
    align-self: center; min-width: 56px; text-align: right;
  }

  /* ── CTA BANNER ── */
  .tv-cta-banner {
    background: #0d1b3e; border-radius: 10px;
    padding: 48px 40px; text-align: center;
    max-width: 820px; margin: 0 auto;
  }
  .tv-cta-title {
    font-size: clamp(18px, 2.5vw, 22px);
    font-weight: 800; color: #fff; margin-bottom: 12px;
  }
  .tv-cta-sub {
    font-size: 14px; color: rgba(255,255,255,0.65);
    line-height: 1.75; margin-bottom: 28px;
    max-width: 480px; margin-left: auto; margin-right: auto;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .tv-intro-grid { grid-template-columns: 1fr; gap: 40px; }
    .tv-intro-visual { aspect-ratio: 4/2; max-width: 100%; }
    .tv-who-grid { grid-template-columns: 1fr; gap: 36px; }
    .tv-proc-grid { grid-template-columns: 1fr; gap: 36px; }
    .tv-cats-grid { grid-template-columns: 1fr; }
    .tv-cat-card { border-right: none; border-bottom: 1px solid #e0e4ee; }
    .tv-cat-card:last-child { border-bottom: none; }
  }
  @media (max-width: 640px) {
    .tv-hero { width: 95%; border-radius: 10px; }
    .tv-hero-inner { padding: 64px 20px 52px; }
    .tv-wrap { padding: 0 20px; }
    .tv-section { padding: 52px 0; width: 100%; }
    .tv-step-num { display: none; }
    .tv-cta-banner { padding: 36px 24px; }
  }
`;

/* ─── DATA ───────────────────────────────────────────────────── */
const overviewItems = [
  "Take part in structured workplace-based training in Australia",
  "Gain practical experience related to your occupation, studies, or expertise",
  "Relocate eligible family members such as your partner and dependent children",
  "Stay in Australia for up to two years, depending on the training program",
  "Travel in and out of Australia freely while the visa remains valid",
];

const categories = [
  {
    icon: <FileCheck size={20} />,
    title: "Training for Occupational Registration",
    desc: "Helps individuals who must complete workplace training to obtain professional registration, licensing, or membership.",
  },
  {
    icon: <BookOpen size={20} />,
    title: "Skills Enhancement Training",
    desc: "This training is focused on improving skills and experience in a discipline, occupation or professional field.",
  },
  {
    icon: <Building2 size={20} />,
    title: "Capacity Building Training",
    desc: "Includes training linked to overseas qualifications, government-supported programs, or professional development initiatives.",
  },
];

const requirements = [
  { title: "Age Requirement", desc: "Be 18 years or older at the time of application" },
  { title: "Sponsorship", desc: "Be sponsored by an approved Australian organisation" },
  { title: "English Proficiency", desc: "Meet functional English requirements unless exempt" },
  { title: "Training Plan", desc: "Be nominated for a training position (unless sponsored by a Commonwealth Government agency)" },
  { title: "Health & Character", desc: "Satisfy health and character requirements" },
  { title: "Genuine Temporary Intent", desc: "Demonstrate a genuine intention to undertake the approved training" },
  { title: "Adequate Health Insurance", desc: "Have adequate health insurance for the duration of stay" },
  { title: "Financial Support", desc: "Be invited to apply if sponsored by a Commonwealth Government agency" },
];

const processingFactors = [
  "Accuracy and completeness of the application",
  "Submission of all required documents",
  "Additional verification requests from the Department of Home Affairs",
];

const steps = [
  {
    step: "Step 1",
    title: "Sponsorship and Nomination",
    desc: "An approved Australian organisation sponsors you and submits a nomination for the training program.",
    num: "01",
  },
  {
    step: "Step 2",
    title: "Eligibility Assessment",
    desc: "Your age, English level, training background, and purpose of stay are assessed.",
    num: "02",
  },
  {
    step: "Step 3",
    title: "Document Preparation",
    desc: "You gather supporting documents such as training plans, qualifications, English evidence, health insurance, and character documents.",
    num: "03",
  },
  {
    step: "Step 4",
    title: "Visa Application Submission",
    desc: "Your visa application is lodged online through the Department of Home Affairs portal.",
    num: "04",
  },
  {
    step: "Step 5",
    title: "Visa Outcome",
    desc: "Once approved, you are free to travel to Australia and commence your approved training program.",
    num: "05",
  },
];

/* ─── SECTION COMPONENTS ─────────────────────────────────────── */

function Hero() {
  return (
    <section className="tv-hero">
      <div className="tv-hero-bg" />
      <div className="tv-hero-overlay" />
      <div className="tv-hero-inner">
        <div className="tv-badge">Talent Program</div>
        <h1>Training Visa – Subclass 407</h1>
        <p className="tv-hero-sub">
          The Training Visa (Subclass 407) can be the right pathway for you.
          This visa allows you to participate in approved occupational training
          programs that support your career development while gaining valuable
          exposure to the Australian work environment.
        </p>
        <button className="tv-btn">Schedule Your Consultation</button>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="tv-section" style={{ width: "100%" }}>
      <div className="tv-wrap">
        <div className="tv-intro-grid">
          <div className="tv-intro-left">
            <p className="tv-body">
              The Subclass 407 visa is ideal for individuals who need workplace-based
              training to enhance their skills, meet registration requirements, or support
              professional development in their home country. With expert guidance from
              the experienced migration team at Sky Consultant, you can confidently
              navigate the Training visa process and ensure your application meets all
              current requirements.
            </p>
          </div>
          <div className="tv-intro-visual">
            <GraduationCap size={64} style={{ color: "rgba(255,255,255,0.3)", position: "relative", zIndex: 1 }} />
            <div className="tv-intro-visual-label">Structured Development</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className="tv-section tv-section-alt" style={{ width: "100%" }}>
      <div className="tv-wrap">
        <h2 className="tv-h2">Overview of the Training Visa (Subclass 407)</h2>
        <div className="tv-divider" />
        <p className="tv-body" style={{ marginBottom: 28 }}>
          The Training visa allows you to temporarily stay in Australia to participate in approved
          occupational training programs to enhance skills and professional knowledge. With this
          visa, you can:
        </p>
        {overviewItems.map((item, i) => (
          <div className="tv-overview-item" key={i}>
            <CheckCircle2 size={17} className="tv-overview-icon" style={{ color: "#c0392b" }} />
            <span className="tv-overview-text">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="tv-section" style={{ width: "100%" }}>
      <div className="tv-wrap">
        <div className="tv-cats-header">
          <h2 className="tv-h2">Approved Training Categories Under Subclass 407</h2>
          <div className="tv-cats-divider" />
        </div>
        <div className="tv-cats-grid">
          {categories.map((cat, i) => (
            <div className="tv-cat-card" key={i}>
              <div className="tv-cat-icon-wrap">{cat.icon}</div>
              <div className="tv-cat-title">{cat.title}</div>
              <div className="tv-cat-desc">{cat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoCanApply() {
  return (
    <section className="tv-section tv-section-dark" style={{ width: "100%" }}>
      <div className="tv-wrap">
        <div className="tv-who-grid">
          <div className="tv-who-left">
            <h2>Who Can Apply for the Training Visa?</h2>
          </div>
          <div className="tv-req-list">
            {requirements.map((req, i) => (
              <div className="tv-req-item" key={i}>
                <div className="tv-req-num">{i + 1}</div>
                <div className="tv-req-content">
                  <div className="tv-req-title">{req.title}</div>
                  <div className="tv-req-desc">{req.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessingTime() {
  return (
    <section className="tv-section tv-section-alt" style={{ width: "100%" }}>
      <div className="tv-wrap">
        <div className="tv-proc-grid">
          <div>
            <h2 className="tv-h2">Processing Time for Subclass 407 Visa</h2>
            <div className="tv-divider" />
          </div>
          <div>
            <div className="tv-proc-box" style={{ marginBottom: 32 }}>
              <div className="tv-proc-label">Average Standard Processing</div>
              <div className="tv-proc-time">4 to 6 months</div>
              <div className="tv-proc-sub">Estimated processing timeframe</div>
            </div>
            <div className="tv-proc-factors">
              <h3>Processing times may vary depending on:</h3>
              {processingFactors.map((f, i) => (
                <div className="tv-proc-factor" key={i}>
                  <div className="tv-proc-dot" />
                  <span className="tv-proc-text">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApplicationProcess() {
  return (
    <section className="tv-section" style={{ width: "100%" }}>
      <div className="tv-wrap">
        <div className="tv-app-header">
          <h2 className="tv-h2">Application Process for the Training Visa (Subclass 407)</h2>
          <div className="tv-app-divider" />
        </div>

        <div className="tv-steps">
          {steps.map((step, i) => (
            <div className="tv-step" key={i}>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "1.2px",
                  textTransform: "uppercase", color: "#c0392b", marginBottom: 6,
                }}>
                  {step.step}
                </div>
                <div className="tv-step-title">{step.title}</div>
                <div className="tv-step-desc">{step.desc}</div>
              </div>
              <div className="tv-step-num">{step.num}</div>
            </div>
          ))}
        </div>

        <div className="tv-cta-banner">
          <div className="tv-cta-title">Ready to Start Your Training Journey in Australia?</div>
          <div className="tv-cta-sub">
            Our migration experts are here to help you take the next step toward building your skills and
            advancing your career in Australia.
          </div>
          <button className="tv-btn tv-btn-lg">Connect With Us</button>
        </div>
      </div>
    </section>
  );
}

/* ─── ROOT ───────────────────────────────────────────────────── */
export default function TrainingVisaPage() {
  return (
    <>
      <style>{css}</style>
      <div className="tv-page">
        <Hero />
        <IntroSection />
        <OverviewSection />
        <CategoriesSection />
        <WhoCanApply />
        <ProcessingTime />
        <ApplicationProcess />
      </div>
    </>
  );
}