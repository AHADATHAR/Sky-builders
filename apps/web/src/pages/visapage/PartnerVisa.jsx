import { Handshake } from "lucide-react";

/* ─── STYLES ─────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .pv {
    font-family: 'Inter', sans-serif;
    color: #0d1b3e;
    background: #fff;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* ════════ HERO ════════ */
  .pv-hero {
    position: relative;
    min-height: 400px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 90px 20px 0;
  }
  .pv-hero-bg {
    position: absolute; inset: 0; z-index: 0;
    background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80');
    background-size: cover;
    background-position: center 38%;
  }
  .pv-hero-overlay {
    position: absolute; inset: 0; z-index: 1;
    background: linear-gradient(
      to right,
      rgba(10,18,52,0.97) 36%,
      rgba(10,18,52,0.82) 60%,
      rgba(10,18,52,0.55) 100%
    );
  }
  .pv-hero-inner {
    position: relative; z-index: 2;
    max-width: 1160px; margin: 0 auto;
    padding: 80px 48px 72px; width: 100%;
  }
  .pv-badge {
    display: inline-block;
    border: 1px solid rgba(255,255,255,0.38);
    color: rgba(255,255,255,0.78);
    font-size: 10px; font-weight: 600;
    letter-spacing: 1.8px; text-transform: uppercase;
    padding: 5px 16px; border-radius: 20px; margin-bottom: 28px;
  }
  .pv-hero h1 {
    font-size: clamp(28px, 4.5vw, 50px);
    font-weight: 800; color: #fff;
    line-height: 1.1; max-width: 520px; margin-bottom: 20px;
  }
  .pv-hero-sub {
    font-size: clamp(15px, 1.8vw, 18px);
    color: rgba(255,255,255,0.75);
    max-width: 380px; line-height: 1.75; margin-bottom: 36px;
    font-weight: 400;
  }
  .pv-btn-red {
    display: inline-flex; align-items: center; gap: 8px;
    background: #c0392b; color: #fff;
    padding: 14px 28px; border-radius: 5px;
    font-size: 13px; font-weight: 700;
    border: none; cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: background 0.2s, transform 0.15s;
  }
  .pv-btn-red:hover { background: #a93226; transform: translateY(-1px); }

  /* ════════ SHARED ════════ */
  .pv-wrap { max-width: 1160px; margin: 0 auto; padding: 0 48px; }
  .pv-sec  { padding: 72px 0; }
  .pv-sec-gray { background: #f5f6fa; }
  .pv-sec-navy { background: #0d1b3e; }

  .pv-h2 {
    font-size: clamp(20px, 2.8vw, 28px);
    font-weight: 800; color: #0d1b3e; line-height: 1.2; margin-bottom: 10px;
  }
  .pv-body {
    font-size: 14.5px; color: #444;
    line-height: 1.88; margin-bottom: 18px;
  }
  .pv-body-italic {
    font-size: 14px; color: #555;
    line-height: 1.85; margin-bottom: 0; font-style: italic;
  }

  /* ════════ SECTION 2: INTRO SPLIT ════════ */
  .pv-intro-grid {
    display: grid;
    grid-template-columns: 1fr 220px;
    gap: 64px; align-items: center;
  }
  .pv-intro-left {
    border-left: 4px solid #c0392b;
    padding-left: 28px;
  }
  .pv-intro-visual {
    position: relative;
    width: 220px; height: 220px; flex-shrink: 0;
  }
  .pv-visual-navy {
    position: absolute;
    bottom: 0; right: 0;
    width: 170px; height: 170px;
    background: #0d1b3e;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    z-index: 2;
  }
  .pv-visual-pink {
    position: absolute;
    top: 0; left: 0;
    width: 130px; height: 130px;
    background: #e8c4c4;
    border-radius: 10px;
    z-index: 1;
  }
  .pv-visual-red-dot {
    position: absolute;
    bottom: 12px; right: 14px;
    width: 14px; height: 14px;
    background: #c0392b; border-radius: 50%; z-index: 3;
  }

  /* ════════ SECTION 3: SUBCLASSES ════════ */
  .pv-subclass-pills {
    display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px;
  }
  .pv-pill {
    display: flex; align-items: center; gap: 10px;
    background: #fff; border: 1px solid #e0e4ee;
    border-radius: 7px; padding: 14px 22px;
    font-size: 14px; font-weight: 600; color: #0d1b3e;
  }
  .pv-pill-sq {
    width: 8px; height: 8px; background: #c0392b;
    border-radius: 2px; flex-shrink: 0;
  }

  /* ════════ SUBCLASS 309 & 100 SECTION ════════ */
  .pv-subclass-sec { padding: 56px 0; }

  .pv-sub-title {
    font-size: clamp(20px, 2.5vw, 26px);
    font-weight: 800; color: #0d1b3e; margin-bottom: 10px;
  }
  .pv-sub-intro {
    font-size: 14.5px; color: #444; line-height: 1.8;
    max-width: 680px; margin-bottom: 32px;
  }
  .pv-sub-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    border: 1px solid #e0e4ee;
    border-radius: 10px;
    overflow: hidden;
  }
  .pv-sub-card {
    background: #fff;
    padding: 32px 28px;
    border-right: 1px solid #e0e4ee;
    border-top: 3px solid #c0392b;
  }
  .pv-sub-card:last-child { border-right: none; }
  .pv-sub-card-title {
    font-size: 18px; font-weight: 800; color: #0d1b3e; margin-bottom: 18px;
  }
  .pv-list-item {
    display: flex; align-items: flex-start; gap: 10px;
    margin-bottom: 11px; font-size: 14px; color: #2c2c2c; line-height: 1.65;
  }
  .pv-list-item:last-child { margin-bottom: 0; }
  .pv-list-sq {
    width: 7px; height: 7px; background: #c0392b;
    border-radius: 1px; flex-shrink: 0; margin-top: 7px;
  }
  .pv-meta-row {
    display: flex; align-items: center; justify-content: space-between;
    padding: 12px 0;
    border-top: 1px solid #eaedf4;
    margin-top: 20px;
  }
  .pv-meta-row:first-of-type { margin-top: 24px; }
  .pv-meta-label {
    font-size: 10px; font-weight: 700; letter-spacing: 1.4px;
    text-transform: uppercase; color: #999;
  }
  .pv-meta-val {
    font-size: 14px; font-weight: 700; color: #0d1b3e;
  }

  /* ════════ WHY SKY (navy) ════════ */
  .pv-why-grid {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 72px; align-items: start;
  }
  .pv-why-left h2 {
    font-size: clamp(22px, 3vw, 30px);
    font-weight: 800; color: #fff; line-height: 1.2; margin-bottom: 18px;
  }
  .pv-why-left p {
    font-size: 14px; color: rgba(255,255,255,0.62); line-height: 1.78; margin-bottom: 20px;
  }
  .pv-why-receive {
    background: rgba(255,255,255,0.07);
    border-radius: 8px; padding: 18px 20px;
    font-size: 14px; color: rgba(255,255,255,0.55);
    font-style: italic;
  }
  .pv-why-right { display: flex; flex-direction: column; gap: 0; }
  .pv-why-item {
    display: flex; align-items: flex-start; gap: 20px;
    padding: 24px 0; border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .pv-why-item:last-child { border-bottom: none; }
  .pv-why-num {
    flex-shrink: 0; width: 36px; height: 36px;
    background: #c0392b; border-radius: 7px;
    display: flex; align-items: center; justify-content: center;
    font-size: 15px; font-weight: 800; color: #fff;
  }
  .pv-why-content {}
  .pv-why-title {
    font-size: 15px; font-weight: 700;
    color: rgba(255,255,255,0.93); margin-bottom: 6px;
  }
  .pv-why-desc {
    font-size: 13.5px; color: rgba(255,255,255,0.55); line-height: 1.7;
  }

  /* ════════ CTA ════════ */
  .pv-cta-sec { padding: 72px 48px; }
  .pv-cta-card {
    background: #0d1b3e;
    border-radius: 12px;
    padding: 60px 48px;
    text-align: center;
  }
  .pv-cta-title {
    font-size: clamp(18px, 2.8vw, 24px);
    font-weight: 800; color: #fff; margin-bottom: 16px; line-height: 1.3;
  }
  .pv-cta-sub {
    font-size: 14.5px; color: rgba(255,255,255,0.65);
    line-height: 1.8; margin-bottom: 32px;
    max-width: 580px; margin-left: auto; margin-right: auto;
  }
  .pv-btn-cta {
    display: inline-flex; align-items: center; gap: 8px;
    background: #c0392b; color: #fff;
    padding: 16px 36px; border-radius: 6px;
    font-size: 14px; font-weight: 700;
    border: none; cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: background 0.2s, transform 0.15s;
  }
  .pv-btn-cta:hover { background: #a93226; transform: translateY(-1px); }

  /* ════════ RESPONSIVE ════════ */
  @media (max-width: 900px) {
    .pv-hero { margin: 12px 12px 0; }
    .pv-intro-grid { grid-template-columns: 1fr; gap: 40px; }
    .pv-intro-visual { margin: 0 auto; }
    .pv-sub-cards { grid-template-columns: 1fr; }
    .pv-sub-card { border-right: none; border-bottom: 1px solid #e0e4ee; }
    .pv-sub-card:last-child { border-bottom: none; }
    .pv-why-grid { grid-template-columns: 1fr; gap: 36px; }
    .pv-cta-sec { padding: 52px 20px; }
  }
  @media (max-width: 640px) {
    .pv-hero { margin: 8px 8px 0; border-radius: 10px; }
    .pv-hero-inner { padding: 56px 24px 48px; }
    .pv-wrap { padding: 0 20px; }
    .pv-sec { padding: 52px 0; }
    .pv-cta-card { padding: 40px 24px; }
    .pv-subclass-pills { flex-direction: column; }
  }
`;

/* ─── DATA ───────────────────────────────────────────────────── */
const sc309Benefits = [
  "Study in Australia",
  "Live lawfully in Australia",
  "Work without any restrictions",
  "Travel in and out of Australia while the visa is valid",
  "Access Medicare once eligible",
  "Attend free English language classes through the Adult Migrant English Program (if eligible)",
];
const sc309Elig = [
  "Be 18 years or older",
  "Be in a genuine and ongoing relationship (married or de facto)",
  "Have a partner who is an Australian citizen, permanent resident, or eligible New Zealand citizen",
  "Have a marriage recognised under Australian law, if married",
  "Be outside Australia when you apply and when the visa decision is made",
  "Meet health and character requirements",
  "Have an approved sponsor (your partner) who agrees to sponsor you for at least two years",
];

const sc100Benefits = [
  "Live, work, and study permanently in Australia",
  "Access Medicare and public services",
  "Sponsor eligible family members for Australian visas",
  "Continue access to free English language classes if eligible",
  "Travel to and from Australia for up to five years from the date of visa grant",
];
const sc100Elig = [
  "Hold a valid Subclass 309 Provisional Partner Visa",
  "Continue to be in a genuine and ongoing relationship with your partner",
  "Meet health and character requirements",
  "Usually, wait two years from the date of your combined application before a permanent assessment.",
  "Satisfy that granting the visa is in the best interest of any dependent under 18, if applicable.",
];

const whyItems = [
  {
    title: "Personalised eligibility assessment",
    desc: "We evaluate the strength of your relationship evidence against Department standards before you invest in the application fee.",
  },
  {
    title: "Guidance on relationship evidence and sponsorship obligations",
    desc: "Our experts help you organize financial, social, and household evidence into a logical, compelling narrative that meets Subclass 309 requirements.",
  },
  {
    title: "Careful preparation and review of your application",
    desc: "We manage the entire lodgment process, ensuring every form is perfect and all supporting documents are correctly verified and uploaded.",
  },
  {
    title: "Ongoing support until a final decision is made",
    desc: "We act as your official contact with the Department, handling all requests for further information until your visa is granted.",
  },
];

/* ─── SECTION COMPONENTS ─────────────────────────────────────── */

function Hero() {
  return (
    <section className="pv-hero">
      <div className="pv-hero-bg" />
      <div className="pv-hero-overlay" />
      <div className="pv-hero-inner">
        <div className="pv-badge">Partner Visa</div>
        <h1>Partner Visa (Apply Overseas) – Subclass 309 and 100</h1>
        <p className="pv-hero-sub">Being separated from your partner by borders is never easy.</p>
        <button className="pv-btn-red">Schedule Your Consultation</button>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="pv-sec">
      <div className="pv-wrap">
        <div className="pv-intro-grid">
          <div className="pv-intro-left">
            <p className="pv-body">
              Being separated from your partner by borders is never easy. If your partner is living
              in Australia and you are overseas, the Partner Visa (Subclass 309 & 100) provides a
              clear and reliable pathway for you to reunite and build your life together in Australia.
            </p>
            <p className="pv-body">
              This visa allows the spouse or partner of an Australian citizen, Australian permanent
              resident, or eligible New Zealand citizen to apply for both the temporary and permanent
              partner visas at the same time, while remaining outside Australia. It offers certainty,
              stability, and a direct route to permanent residency.
            </p>
            <p className="pv-body-italic">
              If you need professional assistance to secure a partner visa, Sky Consultant can guide
              you throughout your journey. Our expert migration consultants work closely with you to
              prepare a strong application, present your relationship clearly, and guide you through
              every stage, from offshore application to permanent settlement in Australia.
            </p>
          </div>
          <div className="pv-intro-visual">
            <div className="pv-visual-pink" />
            <div className="pv-visual-navy">
              <Handshake size={52} color="rgba(255,255,255,0.38)" />
            </div>
            <div className="pv-visual-red-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SubclassesList() {
  return (
    <section className="pv-sec pv-sec-gray">
      <div className="pv-wrap">
        <h2 className="pv-h2">Partner Visa Subclasses (Apply Overseas)</h2>
        <div className="pv-subclass-pills">
          {["Subclass 309 (Provisional)", "Subclass 100 (Permanent)"].map((label, i) => (
            <div className="pv-pill" key={i}>
              <div className="pv-pill-sq" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ListItems({ items }) {
  return items.map((item, i) => (
    <div className="pv-list-item" key={i}>
      <div className="pv-list-sq" />
      <span>{item}</span>
    </div>
  ));
}

function Subclass309() {
  return (
    <section className="pv-sec">
      <div className="pv-wrap">
        <div className="pv-sub-title">Subclass 309: Partner (Provisional) Visa</div>
        <p className="pv-sub-intro">
          The Subclass 309 visa is the first step in the offshore partner visa journey. It allows
          you to enter and live in Australia temporarily while your permanent Partner Visa (Subclass
          100) is being processed.
        </p>
        <div className="pv-sub-cards">
          {/* Benefits */}
          <div className="pv-sub-card">
            <div className="pv-sub-card-title">Benefits of Subclass 309</div>
            <ListItems items={sc309Benefits} />
          </div>
          {/* Eligibility */}
          <div className="pv-sub-card">
            <div className="pv-sub-card-title">Eligibility Criteria</div>
            <ListItems items={sc309Elig} />
            <div className="pv-meta-row">
              <span className="pv-meta-label">Application Cost</span>
              <span className="pv-meta-val">From AUD 9,365</span>
            </div>
            <div className="pv-meta-row">
              <span className="pv-meta-label">Processing Time</span>
              <span className="pv-meta-val">06 to 30 Months</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySkySection() {
  return (
    <section className="pv-sec pv-sec-navy">
      <div className="pv-wrap">
        <div className="pv-why-grid">
          <div className="pv-why-left">
            <h2>Why Apply Through Sky Consultant?</h2>
            <p>
              Partner visas are among the most complex Australian visas. Even genuine relationships
              can face refusal if the evidence is incomplete or poorly presented.
            </p>
            <div className="pv-why-receive">With Sky Consultant, you receive:</div>
          </div>
          <div className="pv-why-right">
            {whyItems.map((item, i) => (
              <div className="pv-why-item" key={i}>
                <div className="pv-why-num">{i + 1}</div>
                <div className="pv-why-content">
                  <div className="pv-why-title">{item.title}</div>
                  <div className="pv-why-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Subclass100() {
  return (
    <section className="pv-sec pv-sec-gray">
      <div className="pv-wrap">
        <div className="pv-sub-title">Subclass 100: Partner (Permanent) Visa</div>
        <p className="pv-sub-intro">
          The Subclass 100 visa allows you to live in Australia permanently. It is usually assessed
          after you have held the Subclass 309 visa and demonstrated that your relationship remains
          genuine and ongoing.
        </p>
        <div className="pv-sub-cards">
          {/* Benefits */}
          <div className="pv-sub-card">
            <div className="pv-sub-card-title">Benefits of Subclass 100</div>
            <ListItems items={sc100Benefits} />
          </div>
          {/* Eligibility */}
          <div className="pv-sub-card">
            <div className="pv-sub-card-title">Eligibility Requirements</div>
            <ListItems items={sc100Elig} />
            <div className="pv-meta-row">
              <span className="pv-meta-label">Processing Time</span>
              <span className="pv-meta-val">12 to 18 months</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <div className="pv-cta-sec">
      <div className="pv-cta-card">
        <div className="pv-cta-title">CTA: Ready to Apply for an Offshore Partner Visa?</div>
        <p className="pv-cta-sub">
          Reach out to our certified consultancy firm and let our experienced professionals handle
          your Partner Visa (Subclass 309 & 100) application with confidence and care.
        </p>
        <button className="pv-btn-cta">Contact for Consultation</button>
      </div>
    </div>
  );
}

/* ─── ROOT ───────────────────────────────────────────────────── */
export default function PartnerVisaPage() {
  return (
    <>
      <style>{css}</style>
      <div className="pv">
        <Hero />
        <IntroSection />
        <SubclassesList />
        <Subclass309 />
        <WhySkySection />
        <Subclass100 />
        <CtaBanner />
      </div>
    </>
  );
}