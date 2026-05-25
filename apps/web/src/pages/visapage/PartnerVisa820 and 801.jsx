import { Users } from "lucide-react";

/* ─── STYLES ─────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .pv2 {
    font-family: 'Inter', sans-serif;
    color: #0d1b3e;
    background: #fff;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* ════════ HERO ════════ */
  .pv2-hero {
    position: relative;
    min-height: 400px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 90px 20px 0;
  }
  .pv2-hero-bg {
    position: absolute; inset: 0; z-index: 0;
    background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80');
    background-size: cover;
    background-position: center 38%;
  }
  .pv2-hero-overlay {
    position: absolute; inset: 0; z-index: 1;
    background: linear-gradient(
      to right,
      rgba(10,18,52,0.97) 36%,
      rgba(10,18,52,0.82) 60%,
      rgba(10,18,52,0.52) 100%
    );
  }
  .pv2-hero-inner {
    position: relative; z-index: 2;
    max-width: 1160px; margin: 0 auto;
    padding: 80px 48px 72px; width: 100%;
  }
  .pv2-badge {
    display: inline-block;
    border: 1px solid rgba(255,255,255,0.38);
    color: rgba(255,255,255,0.78);
    font-size: 10px; font-weight: 600;
    letter-spacing: 1.8px; text-transform: uppercase;
    padding: 5px 16px; border-radius: 20px; margin-bottom: 28px;
  }
  .pv2-hero h1 {
    font-size: clamp(28px, 4.5vw, 50px);
    font-weight: 800; color: #fff;
    line-height: 1.1; max-width: 520px; margin-bottom: 20px;
  }
  .pv2-hero-sub {
    font-size: clamp(14px, 1.8vw, 17px);
    color: rgba(255,255,255,0.75);
    max-width: 380px; line-height: 1.75; margin-bottom: 36px;
  }
  .pv2-btn-red {
    display: inline-flex; align-items: center; gap: 8px;
    background: #c0392b; color: #fff;
    padding: 14px 28px; border-radius: 5px;
    font-size: 13px; font-weight: 700;
    border: none; cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: background 0.2s, transform 0.15s;
  }
  .pv2-btn-red:hover { background: #a93226; transform: translateY(-1px); }

  /* ════════ SHARED ════════ */
  .pv2-wrap { max-width: 1160px; margin: 0 auto; padding: 0 48px; }
  .pv2-sec  { padding: 72px 0; }
  .pv2-sec-gray { background: #f5f6fa; }

  .pv2-h2 {
    font-size: clamp(20px, 2.8vw, 28px);
    font-weight: 800; color: #0d1b3e; line-height: 1.2; margin-bottom: 10px;
  }
  .pv2-body {
    font-size: 14.5px; color: #444;
    line-height: 1.88; margin-bottom: 18px;
  }
  .pv2-body:last-child { margin-bottom: 0; }

  /* ════════ SECTION 2: INTRO SPLIT ════════ */
  .pv2-intro-grid {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 56px; align-items: center;
  }
  .pv2-intro-left {
    border-left: 4px solid #c0392b;
    padding-left: 28px;
  }
  .pv2-intro-visual {
    position: relative;
    width: 280px; height: 260px; flex-shrink: 0;
  }
  .pv2-vis-navy {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 240px;
    background: #0d1b3e;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    z-index: 1;
  }
  .pv2-vis-red {
    position: absolute;
    bottom: 0; right: 0;
    width: 56px; height: 44px;
    background: #c0392b;
    border-radius: 6px;
    z-index: 2;
  }

  /* ════════ SECTION 3: SUBCLASSES LIST ════════ */
  .pv2-sub-intro {
    font-size: 14.5px; color: #444; line-height: 1.8; margin-bottom: 20px;
  }
  .pv2-sub-pills {
    display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px;
  }
  .pv2-pill {
    display: flex; align-items: center; gap: 10px;
    background: #fff; border: 1px solid #e0e4ee;
    border-radius: 6px; padding: 12px 20px;
    font-size: 14px; font-weight: 600; color: #0d1b3e;
  }
  .pv2-pill-sq {
    width: 8px; height: 8px; background: #c0392b;
    border-radius: 2px; flex-shrink: 0;
  }
  .pv2-sub-note {
    font-size: 14.5px; color: #444; line-height: 1.82;
  }

  /* ════════ SUBCLASS SECTION ════════ */
  .pv2-sub-title {
    font-size: clamp(20px, 2.5vw, 26px);
    font-weight: 800; color: #0d1b3e; margin-bottom: 10px;
  }
  .pv2-sub-intro-p {
    font-size: 14.5px; color: #444; line-height: 1.8;
    max-width: 680px; margin-bottom: 32px;
  }
  .pv2-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    border: 1px solid #e0e4ee;
    border-radius: 10px;
    overflow: hidden;
  }
  .pv2-card {
    background: #fff;
    padding: 32px 28px;
    border-right: 1px solid #e0e4ee;
    border-top: 3px solid #c0392b;
  }
  .pv2-card:last-child { border-right: none; }
  .pv2-card-title {
    font-size: 18px; font-weight: 800; color: #0d1b3e; margin-bottom: 6px;
  }
  .pv2-card-lead {
    font-size: 13.5px; color: #666; line-height: 1.6; margin-bottom: 16px;
  }
  .pv2-list-item {
    display: flex; align-items: flex-start; gap: 10px;
    margin-bottom: 12px; font-size: 14px; color: #2c2c2c; line-height: 1.65;
  }
  .pv2-list-item:last-of-type { margin-bottom: 0; }
  .pv2-list-sq {
    width: 7px; height: 7px; background: #c0392b;
    border-radius: 1px; flex-shrink: 0; margin-top: 7px;
  }
  .pv2-meta {
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid #eaedf4;
    font-size: 13.5px; color: #444; line-height: 1.8;
  }
  .pv2-meta strong { color: #0d1b3e; font-weight: 700; }

  /* ════════ IMPORTANT THINGS ════════ */
  .pv2-important-list { margin-bottom: 40px; }
  .pv2-imp-item {
    display: flex; align-items: flex-start; gap: 10px;
    margin-bottom: 14px; font-size: 14.5px; color: #2c2c2c; line-height: 1.7;
  }
  .pv2-imp-sq {
    width: 7px; height: 7px; background: #c0392b;
    border-radius: 1px; flex-shrink: 0; margin-top: 8px;
  }

  /* ════════ CTA ════════ */
  .pv2-cta-card {
    background: #c0392b;
    border-radius: 10px;
    padding: 60px 48px;
    text-align: center;
  }
  .pv2-cta-title {
    font-size: clamp(18px, 2.8vw, 24px);
    font-weight: 800; color: #fff; margin-bottom: 28px; line-height: 1.35;
    max-width: 600px; margin-left: auto; margin-right: auto;
  }
  .pv2-btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: #fff;
    border: 2px solid rgba(255,255,255,0.85);
    padding: 14px 34px; border-radius: 5px;
    font-size: 13px; font-weight: 700;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: background 0.2s;
  }
  .pv2-btn-outline:hover { background: rgba(255,255,255,0.14); }

  /* ════════ RESPONSIVE ════════ */
  @media (max-width: 900px) {
    .pv2-hero { margin: 12px 12px 0; }
    .pv2-intro-grid { grid-template-columns: 1fr; gap: 40px; }
    .pv2-intro-visual { margin: 0 auto; }
    .pv2-cards { grid-template-columns: 1fr; }
    .pv2-card { border-right: none; border-bottom: 1px solid #e0e4ee; }
    .pv2-card:last-child { border-bottom: none; }
  }
  @media (max-width: 640px) {
    .pv2-hero { margin: 8px 8px 0; border-radius: 10px; }
    .pv2-hero-inner { padding: 56px 24px 48px; }
    .pv2-wrap { padding: 0 20px; }
    .pv2-sec { padding: 52px 0; }
    .pv2-cta-card { padding: 40px 24px; }
    .pv2-sub-pills { flex-direction: column; }
  }
`;

/* ─── DATA ───────────────────────────────────────────────────── */
const sc820Benefits = [
  "Live lawfully in Australia",
  "Work without restrictions",
  "Study in Australia",
  "Travel in and out of Australia while the visa is valid",
  "Access Medicare (Australia's public healthcare system)",
  "Join free English language classes through the Adult Migrant English Program (if eligible)",
];
const sc820Who = [
  "Be 18 years or older",
  "Be in a genuine, ongoing relationship (married or de facto) with your partner",
  "Have a partner who is an Australian citizen, permanent resident, or eligible New Zealand citizen",
  "Be in Australia when you apply and when your visa is decided",
  "Include only family members who are also in Australia at the time of application",
  "Meet health and character requirements",
];

const sc801Benefits = [
  "Live, work, and study permanently in Australia",
  "Access Medicare and other public services",
  "Travel to and from Australia for up to five years from the date of grant",
  "Sponsor eligible family members for visas",
  "Continue accessing free English classes if eligible",
];
const sc801Elig = [
  "Hold a valid Subclass 820 temporary partner visa",
  "Continue to be in a genuine relationship with your Australian partner",
  "Meet health and character requirements",
  "Ensure the visa is in the best interest of any dependent under 18",
];

const importantItems = [
  "Your relationship must be genuine and ongoing; evidence of shared life together is crucial",
  "You cannot work or study outside the conditions if your visa has restrictions",
  "Misrepresentation or missing documents can delay processing or cause refusal",
];

/* ─── SECTION COMPONENTS ─────────────────────────────────────── */

function Hero() {
  return (
    <section className="pv2-hero">
      <div className="pv2-hero-bg" />
      <div className="pv2-hero-overlay" />
      <div className="pv2-hero-inner">
        <div className="pv2-badge">Partner Visa</div>
        <h1>Partner Visa (Apply Overseas) Subclass 309 and 100</h1>
        <p className="pv2-hero-sub">Being separated from your partner by borders is never easy.</p>
        <button className="pv2-btn-red">Schedule Your Consultation</button>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="pv2-sec">
      <div className="pv2-wrap">
        <div className="pv2-intro-grid">
          <div className="pv2-intro-left">
            <p className="pv2-body">
              Planning to stay in Australia with your partner? The Partner Visa (Subclass 820 &
              801) allows the spouse or de facto partner of an Australian citizen, permanent
              resident, or eligible New Zealand citizen to live in Australia legally.
            </p>
            <p className="pv2-body">
              With this visa, you can apply for both the temporary and permanent partner visas
              together while in Australia, giving you a smooth path toward permanent residency.
            </p>
            <p className="pv2-body">
              At Sky Consultant, our expert consultants guide you through every step of the
              process, from gathering the right documents to submitting your application, ensuring
              your partner visa is accurate, strong, and stress-free.
            </p>
          </div>
          <div className="pv2-intro-visual">
            <div className="pv2-vis-navy">
              <Users size={72} color="rgba(255,255,255,0.28)" />
            </div>
            <div className="pv2-vis-red" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SubclassesList() {
  return (
    <section className="pv2-sec pv2-sec-gray">
      <div className="pv2-wrap">
        <h2 className="pv2-h2">Partner Visa Subclasses</h2>
        <p className="pv2-sub-intro">The Partner Visa applied for in Australia includes two stages:</p>
        <div className="pv2-sub-pills">
          {[
            "Partner Visa (Temporary) – Subclass 820",
            "Partner Visa (Permanent) – Subclass 801",
          ].map((label, i) => (
            <div className="pv2-pill" key={i}>
              <div className="pv2-pill-sq" />
              {label}
            </div>
          ))}
        </div>
        <p className="pv2-sub-note">
          You apply for both visas at the same time. The temporary visa (820) is granted first,
          allowing you to live, work, and study in Australia while your permanent visa (801) is
          being processed.
        </p>
      </div>
    </section>
  );
}

function ListItems({ items }) {
  return items.map((item, i) => (
    <div className="pv2-list-item" key={i}>
      <div className="pv2-list-sq" />
      <span>{item}</span>
    </div>
  ));
}

function Subclass820() {
  return (
    <section className="pv2-sec">
      <div className="pv2-wrap">
        <div className="pv2-sub-title">Temporary Partner Visa – Subclass 820</div>
        <p className="pv2-sub-intro-p">
          The Subclass 820 visa allows you to stay in Australia while your permanent partner visa is
          processed.
        </p>
        <div className="pv2-cards">
          <div className="pv2-card">
            <div className="pv2-card-title">Benefits of Subclass 820</div>
            <div style={{ marginTop: 14 }}>
              <ListItems items={sc820Benefits} />
            </div>
          </div>
          <div className="pv2-card">
            <div className="pv2-card-title">Who Can Apply?</div>
            <p className="pv2-card-lead">To be eligible for Subclass 820, you must:</p>
            <ListItems items={sc820Who} />
            <div className="pv2-meta">
              <div><strong>Application cost:</strong> From AUD 9,365 (AUD 1,560 for Prospective Marriage Visa holders)</div>
              <div style={{ marginTop: 6 }}><strong>Processing time:</strong> Typically 6 to 21 months</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Subclass801() {
  return (
    <section className="pv2-sec pv2-sec-gray">
      <div className="pv2-wrap">
        <div className="pv2-sub-title">Permanent Partner Visa – Subclass 801</div>
        <p className="pv2-sub-intro-p">
          The Subclass 801 visa allows you to live in Australia permanently. It is generally granted
          after you have held a temporary Subclass 820 visa.
        </p>
        <div className="pv2-cards">
          <div className="pv2-card">
            <div className="pv2-card-title">Benefits of Subclass 801</div>
            <div style={{ marginTop: 14 }}>
              <ListItems items={sc801Benefits} />
            </div>
          </div>
          <div className="pv2-card">
            <div className="pv2-card-title">Eligibility</div>
            <p className="pv2-card-lead">To be eligible for Subclass 801, you must:</p>
            <ListItems items={sc801Elig} />
            <div className="pv2-meta">
              <div><strong>Processing time:</strong> Around 12 to 20 months from the permanent visa stage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportantThings() {
  return (
    <section className="pv2-sec">
      <div className="pv2-wrap">
        <h2 className="pv2-h2" style={{ marginBottom: 24 }}>Important Things to Know</h2>
        <div className="pv2-important-list">
          {importantItems.map((item, i) => (
            <div className="pv2-imp-item" key={i}>
              <div className="pv2-imp-sq" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="pv2-cta-card">
          <div className="pv2-cta-title">
            Connect With Us Now to Start Your Journey Toward Studying in Australia with Confidence.
          </div>
          <button className="pv2-btn-outline">Contact for Consultation</button>
        </div>
      </div>
    </section>
  );
}

/* ─── ROOT ───────────────────────────────────────────────────── */
export default function PartnerVisa820and801() {
  return (
    <>
      <style>{css}</style>
      <div className="pv2">
        <Hero />
        <IntroSection />
        <SubclassesList />
        <Subclass820 />
        <Subclass801 />
        <ImportantThings />
      </div>
    </>
  );
}