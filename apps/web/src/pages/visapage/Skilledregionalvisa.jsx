import { useState } from "react";
import {
  ChevronRight,
  MapPin,
  Home,
  Briefcase,
  HeartPulse,
  Users,
  Plane,
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  Building2,
  ScrollText,
} from "lucide-react";

/* ─── Design tokens ─────────────────────────────────────────── */
const NAVY = "#0a1628";
const RED = "#c0392b";
const WHITE = "#ffffff";
const SANS = "'Inter', sans-serif";

/* ══════════════════════════════════════════════════════════════
   SECTION 1 – HERO
══════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: NAVY,
        width: "95%",
        boxSizing: "border-box",
        borderRadius:'20px',
        margin:'auto',
        marginTop:"90px",
        marginBottom:'90px',
        height:'85vh'
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://i.ibb.co/Vcjk6VTY/7751f0872e8727b619adbd2bbd00c911433d4fd6.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.75) 55%, rgba(10,22,40,0.45) 100%)",
        }}
      />

      {/* Hero content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding:
            "clamp(40px,10vw,80px) clamp(20px,5vw,64px) clamp(40px,5vw,72px)",
          maxWidth: "clamp(280px, 80%, 600px)",
        }}
      >
        <span
          style={{
            display: "inline-block",
            border: "1px solid #9ca3af",
            color: "#d1d5db",
            fontFamily: "'Inter',sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "4px 14px",
            borderRadius: "4px",
            marginBottom: "22px",
          }}
        >
          Skilled Regional Visa
        </span>

        <h1
          style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
            fontWeight: 700,
            color: WHITE,
            lineHeight: 1.15,
            marginBottom: "18px",
            margin: "0 0 18px 0",
          }}
        >
          Skilled Regional Visa –{" "}
          <span style={{ display: "block" }}>Subclass 887</span>
        </h1>

        <p
          style={{
            fontFamily: "'Inter',sans-serif",
            color: "#d1d5db",
            fontSize: "clamp(0.88rem, 2vw, 1rem)",
            marginBottom: "36px",
            lineHeight: 1.75,
            maxWidth: "460px",
          }}
        >
          If you've lived and worked in regional Australia, we help you secure
          your permanent residence with expert legal guidance.
        </p>

        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: RED,
            color: WHITE,
            fontFamily: "'Inter',sans-serif",
            fontWeight: 600,
            fontSize: "0.88rem",
            padding: "13px 26px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.02em",
          }}
        >
          Schedule Your Consultation
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 2 – INTRO + SPECIALIST CARD
══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section
      style={{
        background: WHITE,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          borderTop: "1px solid #f3f4f6",
        }}
      >
        {/* Left: intro text */}
        <div
          style={{
            padding: "clamp(28px,5vw,48px) clamp(20px,5vw,64px)",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            borderRight: "1px solid #f3f4f6",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              color: "#4b5563",
              fontSize: "clamp(0.88rem,2vw,0.97rem)",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            If you've lived and worked in regional Australia on a qualifying
            visa and are ready to transition to permanent residency, the Skilled
            Regional Visa (Subclass 887) is your gateway. This permanent visa
            lets you stay, work, and build your future in Australia indefinitely
            while enjoying full rights as a permanent resident.
          </p>
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              color: "#4b5563",
              fontSize: "clamp(0.88rem,2vw,0.97rem)",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            At Sky Consultant, we guide you through every step of the visa
            process, from checking your eligibility to preparing documentation,
            submitting your application, and helping you understand the
            long-term benefits once your visa is granted.
          </p>
        </div>

        {/* Right: specialist card */}
        <div
          style={{
            background: NAVY,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "200px",
            padding: "40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative squares */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "40px",
              height: "40px",
              background: RED,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "28px",
              height: "28px",
              background: "rgba(192,57,43,0.30)",
            }}
          />

          <div
            style={{
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                border: `2px solid ${RED}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <MapPin size={28} color={RED} strokeWidth={1.8} />
            </div>
            <p
              style={{
                fontFamily: "'Inter',sans-serif",
                color: WHITE,
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                margin: "0 0 4px 0",
              }}
            >
              Regional Migration
            </p>
            <p
              style={{
                fontFamily:"'Inter',sans-serif",
                color: RED,
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Specialists
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 3 – CORE BENEFITS
══════════════════════════════════════════════════════════════ */
const benefits = [
  {
    Icon: Home,
    title: "Stay Indefinitely",
    desc: "You can live in Australia indefinitely without any time limits on your stay.",
  },
  {
    Icon: Briefcase,
    title: "Work & Study",
    desc: "There are no restrictions, you can work in any job and study anywhere in Australia.",
  },
  {
    Icon: HeartPulse,
    title: "Medicare Access",
    desc: "You and your family can enrol in Medicare, Australia's public healthcare system.",
  },
  {
    Icon: Users,
    title: "Family Sponsorship",
    desc: "You can include eligible family members, such as your partner and dependent children, in your application.",
  },
  {
    Icon: Plane,
    title: "Travel Freedom",
    desc: "You can travel in and out of Australia for up to five years after the visa is granted.",
  },
  {
    Icon: ShieldCheck,
    title: "Citizenship Pathway",
    desc: "After fulfilling residency requirements, you may be eligible to apply for Australian citizenship.",
  },
];

function CoreBenefits() {
  return (
    <section
      style={{
        background: WHITE,
        padding: "clamp(48px,7vw,80px) clamp(20px,5vw,64px)",
        boxSizing: "border-box",
        borderTop: "1px solid #f3f4f6",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Label */}
        <span
          style={{
            display: "inline-block",
            border: "1px solid #d1d5db",
            color: "#6b7280",
            fontFamily: "'Inter',sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "4px 12px",
            borderRadius: "999px",
            marginBottom: "20px",
          }}
        >
          Core Benefits
        </span>

        <h2
          style={{
            fontFamily:"'Inter',sans-serif",
            fontSize: "clamp(1.5rem,3.5vw,2.2rem)",
            fontWeight: 700,
            color: "#111827",
            margin: "0 0 12px 0",
          }}
        >
          What the Subclass 887 Visa Offers
        </h2>

        <p
          style={{
            fontFamily:"'Inter',sans-serif",
            color: "#6b7280",
            fontSize: "clamp(0.88rem,2vw,0.97rem)",
            lineHeight: 1.75,
            maxWidth: "640px",
            margin: "0 0 36px 0",
          }}
        >
          The Skilled Regional Visa (Subclass 887) is a permanent residency
          visa for skilled migrants who have already lived and worked in
          designated regional areas of Australia under an eligible provisional
          visa. Once granted, the Subclass 887 visa provides these benefits:
        </p>

        {/* 3-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {benefits.map(({ Icon, title, desc }) => (
            <div
              key={title}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "#F9FAFB",
                borderRadius: "10px",
                padding: "24px 22px",
                border: "1px solid #f3f4f6",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "8px",
                  background: "rgba(192,57,43,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={24} color={RED} strokeWidth={1.7} />
              </div>
              <h3
                style={{
                  fontFamily:"'Inter',sans-serif",
                  fontWeight: 700,
                  color: "#111827",
                  fontSize: "0.97rem",
                  margin: 0,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: SANS,
                  color: "#6b7280",
                  fontSize: "0.87rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom highlight note */}
        <div
          style={{
            borderTop: "2px solid #f3f4f6",
            paddingTop: "28px",
          }}
        >
          <p
            style={{
              fontFamily:"'Inter',sans-serif",
              color: "#374151",
              fontSize: "clamp(0.88rem,2vw,0.97rem)",
              lineHeight: 1.75,
              margin: 0,
              fontWeight: 500,
            }}
          >
            The Subclass 887 visa does not require a points test like some other
            skilled visas. Instead, eligibility is based on your regional
            residency, work history, and holding a qualifying visa.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 4 – ELIGIBILITY CRITERIA
══════════════════════════════════════════════════════════════ */
const eligibility = [
  {
    Icon: CreditCard,
    title: "Hold a Valid Visa",
    desc: "You must hold or have held an eligible provisional visa (Subclass 475, 487, 495, 496, or 887) depending on your circumstances.",
  },
  {
    Icon: MapPin,
    title: "Regional Residency Requirement",
    desc: "You must have lived for at least two years in a designated regional area of Australia while holding a qualifying provisional visa.",
  },
  {
    Icon: Briefcase,
    title: "Work Requirement",
    desc: "You must have worked full-time (or part-time equivalent) for at least two years in a regional area of Australia.",
  },
  {
    Icon: ShieldCheck,
    title: "Health and Character",
    desc: "You and any family members included in your application must meet Australia's health requirements, including medical exams and police clearances.",
  },
  {
    Icon: Building2,
    title: "No Outstanding Government Debts",
    desc: "You must not have or have arranged a repayment plan for any outstanding debts to the Australian government.",
  },
  {
    Icon: ScrollText,
    title: "Sponsorship Statement (if required)",
    desc: "Applicants may need to demonstrate ties to Australian community — a values statement confirming commitment to Australian laws and values.",
  },
];

function EligibilityCriteria() {
  return (
    <section
      style={{
        background: WHITE,
        padding: "clamp(48px,7vw,80px) clamp(20px,5vw,64px)",
        boxSizing: "border-box",
        borderTop: "1px solid #f3f4f6",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Label */}
        <span
          style={{
            display: "inline-block",
            border: "1px solid #d1d5db",
            color: "#6b7280",
            fontFamily: "'Inter',sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "4px 12px",
            borderRadius: "999px",
            marginBottom: "20px",
          }}
        >
          Requirements
        </span>

        <h2
          style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: "clamp(1.5rem,3.5vw,2.2rem)",
            fontWeight: 700,
            color: "#111827",
            margin: "0 0 36px 0",
          }}
        >
          Eligibility Criteria for the Subclass 887 Visa
        </h2>

        {/* 3-column grid × 2 rows */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {eligibility.map(({ Icon, title, desc }) => (
            <div
              key={title}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "#F9FAFB",
                borderRadius: "10px",
                padding: "24px 22px",
                border: "1px solid #f3f4f6",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "8px",
                  background: "rgba(192,57,43,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={22} color={RED} strokeWidth={1.7} />
              </div>
              <h3
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 700,
                  color: "#111827",
                  fontSize: "0.97rem",
                  margin: 0,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter',sans-serif",
                  color: "#6b7280",
                  fontSize: "0.87rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 5 – HOW TO APPLY
══════════════════════════════════════════════════════════════ */
const steps = [
  {
    num: 1,
    title: "Confirm Eligibility",
    desc: "We assess your current visa status and confirm you meet the residency and work requirements based on your regional experience.",
  },
  {
    num: 2,
    title: "Gather Your Documents",
    desc: "Collect evidence of your residency, work experience, identity, and health/character clearances.",
  },
  {
    num: 3,
    title: "Submit Your Online Application",
    desc: "We help you prepare and lodge your application to the Department of Home Affairs through the official online portal.",
  },
  {
    num: 4,
    title: "Health Checks & Police Clearances",
    desc: "Submit if applicants and included family members will undergo medical examinations and provide police certificates, along with the required visa application fee.",
  },
  {
    num: 5,
    title: "Wait for Visa Outcome",
    desc: "Processing times can vary, but applicants typically receive a decision within 12 to 28 months depending on circumstances and how well the application is prepared.",
  },
];

function HowToApply() {
  return (
    <section
      id="process"
      style={{
        background: WHITE,
        padding: "clamp(48px,7vw,80px) clamp(20px,5vw,64px)",
        boxSizing: "border-box",
        borderTop: "1px solid #f3f4f6",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <span
          style={{
            display: "inline-block",
            border: "1px solid #d1d5db",
            color: "#6b7280",
            fontFamily: "'Inter',sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "4px 12px",
            borderRadius: "999px",
            marginBottom: "20px",
          }}
        >
          Our Process
        </span>

        <h2
          style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: "clamp(1.5rem,3.5vw,2.2rem)",
            fontWeight: 700,
            color: "#111827",
            margin: "0 0 12px 0",
          }}
        >
          How to Apply for the Subclass 887 Visa
        </h2>

        <p
          style={{
            fontFamily: "'Inter',sans-serif",
            color: "#6b7280",
            fontSize: "clamp(0.88rem,2vw,0.97rem)",
            lineHeight: 1.75,
            maxWidth: "560px",
            margin: "0 0 36px 0",
          }}
        >
          Applying for the Skilled Regional Visa is an onshore process (you
          must be in Australia when you apply and when the decision is made).
        </p>

        {/* Layout: info card left, steps right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "32px",
            alignItems: "start",
          }}
        >
          {/* Info card */}
          <div
            style={{
              background: NAVY,
              color: WHITE,
              borderRadius: "12px",
              padding: "28px 24px",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter',sans-serif",
                fontSize: "0.9rem",
                color: "#d1d5db",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Here's how it works with Sky Consultant guiding you.
            </p>
          </div>

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {steps.map((s) => (
              <div
                key={s.num}
                style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: RED,
                    color: WHITE,
                    fontFamily: SANS,
                    fontWeight: 700,
                    fontSize: "0.84rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 4px 12px rgba(192,57,43,0.30)",
                  }}
                >
                  {s.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily:"'Inter',sans-serif",
                      fontWeight: 700,
                      color: "#111827",
                      margin: "0 0 4px 0",
                      fontSize: "0.97rem",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      color: "#6b7280",
                      fontSize: "0.87rem",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Footer note */}
            <p
              style={{
                fontFamily: "'Inter',sans-serif",
                color: "#6b7280",
                fontSize: "0.87rem",
                lineHeight: 1.7,
                margin: 0,
                paddingTop: "16px",
                borderTop: "1px solid #f3f4f6",
                fontStyle: "italic",
              }}
            >
              Sky Consultant supports you throughout to help avoid delays and
              ensure you submit a complete, compelling application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   SECTION 5 – CTA BANNER
══════════════════════════════════════════════════════════════ */
function CtaBanner() {
  return (
    <section
      id="contact"
      style={{
        background: "#f9fafb",
        padding:
          "clamp(24px,4vw,40px) clamp(20px,5vw,64px) clamp(48px,7vw,80px)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            background: RED,
            borderRadius: "14px",
            padding: "clamp(36px,6vw,64px) clamp(24px,5vw,48px)",
            textAlign: "center",
            color: WHITE,
          }}
        >
          <h3
            style={{
              fontFamily: "'Inter',sans-serif",
              fontSize: "clamp(1.1rem,3vw,1.6rem)",
              fontWeight: 700,
              lineHeight: 1.5,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Ready to Take the Next Step Toward Your Australian Dream? Connect
            with Sky Consultant Today!
          </h3>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   ROOT
══════════════════════════════════════════════════════════════ */
export default function SkilledVisa887() {
  return (
    <div
      style={{
        fontFamily: SANS,
        margin: 0,
        padding: 0,
        background: WHITE,
        overflowX: "hidden",
      }}
    >
      <Hero />
      <IntroSection />
      <CoreBenefits />
      <EligibilityCriteria />
      <HowToApply />
      <CtaBanner />
    </div>
  );
}