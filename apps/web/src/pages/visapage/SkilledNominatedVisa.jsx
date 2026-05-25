import { useState } from "react";
import {
  ShieldCheck,
  Briefcase,
  Flag,
  Users,
  Plane,
  Heart,
  Home,
  MessageCircle,
  ListChecks,
  Award,
  ClipboardList,
  MapPin,
  Mail,
  FileText,
  CheckCircle,
  Check,
  ArrowRight,
} from "lucide-react";

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <div style={{ background: "#f5f5f5", paddingTop: 0 }}>
      {/* Hero Image Block */}
      <div
        style={{
          width: "95%",
          margin: "0 auto",
          borderRadius: 20,
          overflow: "hidden",
          position: "relative",
          minHeight: 520,
          marginTop: "90px",
          background: "#0a1628",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.45,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(10,22,40,0.92) 40%, rgba(10,22,40,0.3))",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "72px 56px 64px",
            maxWidth: 620,
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: "0.5px solid rgba(255,255,255,0.35)",
              color: "rgba(255,255,255,0.75)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: 99,
              marginBottom: 18,
            }}
          >
            Skilled Nominated Visa
          </span>
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 42,
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 16,
              letterSpacing: "-0.5px",
            }}
          >
            Skilled Nominated Visa – Subclass 190
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "rgba(255,255,255,0.7)",
              fontSize: 15,
              lineHeight: 1.7,
              marginBottom: 28,
              maxWidth: 480,
            }}
          >
            The Skilled Nominated Visa (Subclass 190) is a permanent residency
            visa that allows skilled workers to live and work in Australia.
          </p>
          <button
            style={{
              background: "#c0392b",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              fontWeight: 600,
              padding: "12px 24px",
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#a93226")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#c0392b")}
          >
            <MessageCircle size={16} />
            Contact Us Today
          </button>
        </div>
      </div>

      {/* Intro Content Block */}
      <div
        style={{
          width: "95%",
          margin: "16px auto 0",
          borderRadius: 20,
          overflow: "visible",
          background: "#fff",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          position: "relative",
        }}
      >
        <div
          style={{
            padding: "36px 48px",
            borderRight: "0.5px solid #e5e7eb",
            borderRadius: "20px 0 0 20px",
            overflow: "hidden",
          }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              color: "#4b5563",
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            The Skilled Nominated Visa (Subclass 190) is a permanent residence
            visa that allows skilled workers to live and work in Australia. This
            visa is only available for individuals who have received a nomination
            from an Australian state or territory government. It's for skilled
            workers who wish to contribute to the Australian economy by working
            in occupations listed on the Skilled Occupation List (SOL).
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              color: "#4b5563",
              lineHeight: 1.8,
            }}
          >
            At Sky Consultant, we are experts in guiding you through every step
            of the Subclass 190 visa application process. Whether you are
            applying from inside or outside Australia, we provide personalised
            advice, assistance with documentation, and help you meet all the
            necessary eligibility requirements for this visa.
          </p>
        </div>

        <div
          style={{
            background: "#0d1f3c",
            padding: "40px 200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 220,
            borderRadius: "0 20px 20px 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: -30,
              right: -30,
              width: 130,
              height: 130,
              borderRadius: "50%",
              background: "rgba(192,57,43,0.12)",
              zIndex: 0,
            }}
          />
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <ShieldCheck
              size={72}
              color="rgba(255,255,255,0.15)"
              strokeWidth={1.2}
              style={{ display: "block", margin: "0 auto" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -14,
              right: -14,
              width: 48,
              height: 48,
              background: "#c0392b",
              borderRadius: 6,
              zIndex: 2,
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: -28,
            right: -28,
            width: 80,
            height: 80,
            background: "rgba(192,57,43,0.08)",
            borderRadius: 8,
            zIndex: -1,
          }}
        />
      </div>
    </div>
  );
}

// ─── TAG PILL ────────────────────────────────────────────────────────────────
function TagPill({ children }) {
  return (
    <span
      style={{
        display: "inline-block",
        color: "#c0392b",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        marginBottom: 8,
      }}
    >
      {children}
    </span>
  );
}

// ─── BENEFITS ────────────────────────────────────────────────────────────────
const benefits = [
  {
    title: "Permanent Residency",
    desc: "The Subclass 190 visa grants permanent residency, allowing you to live and work in Australia.",
  },
  {
    title: "Work and Study",
    desc: "You can work and study anywhere in Australia, enjoying the freedom to choose your preferred location based on your occupation.",
  },
  {
    title: "Citizenship",
    desc: "After fulfilling residency requirements, you can apply for Australian citizenship, further solidifying your status as an Australian resident.",
  },
  {
    title: "Family Sponsorship",
    desc: "As a permanent resident, you can sponsor your eligible family members to join you in Australia.",
  },
  {
    title: "Travel Flexibility",
    desc: "The visa grants you the ability to travel freely in and out of Australia for up to five years.",
  },
  {
    title: "Medicare",
    desc: "You gain access to Australia's public healthcare system, Medicare, which covers essential medical services.",
  },
];

function Benefits() {
  return (
    <div
      style={{
        width: "95%",
        margin: "24px auto 0",
        borderRadius: 20,
        background: "#fff",
        padding: "48px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <TagPill>Key Advantages</TagPill>
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 28,
          fontWeight: 700,
          color: "#111827",
          marginBottom: 32,
          letterSpacing: "-0.3px",
          lineHeight: 1.2,
        }}
      >
        Visa Benefits
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        {benefits.map(({ title, desc }) => (
          <div
            key={title}
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: 8,
              padding: "24px 22px 28px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: 3,
                background: "#c0392b",
                borderRadius: "0 0 3px 0",
              }}
            />
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                fontWeight: 700,
                color: "#111827",
                marginBottom: 6,
                marginTop: 8,
              }}
            >
              {title}
            </h3>
            <div
              style={{
                width: 28,
                height: 2,
                background: "#c0392b",
                borderRadius: 2,
                marginBottom: 14,
              }}
            />
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                color: "#6b7280",
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
  );
}

// ─── STEP GUIDE ──────────────────────────────────────────────────────────────
const steps = [
  {
    title: "Check Your Occupation",
    desc: "Ensure that your occupation is listed on the Skilled Occupation List.",
    num: "01",
  },
  {
    title: "Skills Assessment",
    desc: "Undergo a skills assessment by the relevant assessing authority for your occupation to confirm your qualifications and work experience.",
    num: "02",
  },
  {
    title: "Submit Expression of Interest (EOI)",
    desc: "You need to submit an Expression of Interest (EOI) through the SkillSelect system, providing details about your qualifications, skills, and experience.",
    num: "03",
  },
  {
    title: "State or Territory Nomination",
    desc: "Once your EOI is submitted, you may receive a nomination from an Australian state or territory.",
    num: "04",
  },
  {
    title: "Submit Your Visa Application",
    desc: "Once you receive the nomination, you can apply for the Subclass 190 visa. You will need to provide supporting documents and medical and police checks.",
    num: "05",
  },
  {
    title: "Visa Processing",
    desc: "After submitting your application, the processing time can take up to six months or more.",
    num: "06",
  },
];

function StepGuide() {
  return (
    <div
      style={{
        width: "95%",
        margin: "24px auto 0",
        borderRadius: 12,
        background: "#fff",
        padding: 40,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <p
        style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "1.2px",
          textTransform: "uppercase",
          color: "#c0392b",
          marginBottom: 8,
        }}
      >
        PROCESS OVERVIEW
      </p>
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: "#111827",
          marginBottom: 28,
          letterSpacing: "-0.3px",
        }}
      >
        Step-by-Step Application Guide
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "stretch",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <div style={{ width: 4, background: "#c0392b", flexShrink: 0 }} />
            <div style={{ flex: 1, padding: "16px 18px" }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: 5,
                }}
              >
                {step.title}
              </p>
              <p style={{ fontSize: 12.5, color: "#6b7280", lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#e5e7eb",
                padding: "16px 20px 16px 10px",
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
                letterSpacing: "-1px",
              }}
            >
              {step.num}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── APPLICATION STEPS ───────────────────────────────────────────────────────
const appSteps = [
  {
    Icon: ListChecks,
    title: "1. Check Occupation",
    desc: "Confirm your occupation is listed on the SkillSelect Application list.",
  },
  {
    Icon: Award,
    title: "2. Skills Assessment",
    desc: "Engage a relevant assessing authority to evaluate your skills and confirm qualifications match.",
  },
  {
    Icon: ClipboardList,
    title: "3. Submit Expression of Interest (EOI)",
    desc: "Submit an EOI via SkillSelect, scoring at least 65 points to become eligible for state or territory nomination.",
  },
  {
    Icon: MapPin,
    title: "4. State or Territory Nomination",
    desc: "Apply for nomination from a state or territory government — this is mandatory to apply for this visa.",
  },
  {
    Icon: Mail,
    title: "5. Receive an Invitation",
    desc: "Once nominated, you'll receive an invitation through SkillSelect to complete your visa application.",
  },
  {
    Icon: FileText,
    title: "6. Visa Application",
    desc: "Submit your visa application within 60 days of invitation and gather all required documents.",
  },
  {
    Icon: CheckCircle,
    title: "7. Final Decision",
    desc: "After submitting the application, processing time varies. You will receive a final decision on your visa application.",
  },
];

function ApplicationSteps() {
  return (
    <div
      style={{
        width: "95%",
        margin: "24px auto 0",
        borderRadius: 20,
        background: "#f9fafb",
        padding: 48,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <TagPill>Process Overview</TagPill>
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 26,
          fontWeight: 700,
          color: "#111827",
          marginBottom: 28,
          letterSpacing: "-0.3px",
        }}
      >
        Step-by-Step Application Guide
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {appSteps.map(({ Icon, title, desc }) => (
          <div
            key={title}
            style={{
              background: "#fff",
              borderRadius: 14,
              border: "0.5px solid #e5e7eb",
              padding: "18px 22px",
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "rgba(192,57,43,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <Icon size={18} color="#c0392b" />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: 5,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  color: "#6b7280",
                  lineHeight: 1.65,
                }}
              >
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── FEES ────────────────────────────────────────────────────────────────────
const feeRows = [
  {
    label: "MAIN APPLICANT",
    sublabel: "Standard Processing",
    amount: "AUD 4,910",
  },
  {
    label: "ADDITIONAL APPLICANTS (18+)",
    sublabel: "Per adult family member",
    amount: "AUD 2,455",
  },
  {
    label: "ADDITIONAL APPLICANTS (UNDER 18)",
    sublabel: "Per child applicant",
    amount: "AUD 1,230",
  },
];

function Fees() {
  return (
    <div
      style={{
        width: "95%",
        margin: "24px auto 0",
        borderRadius: 20,
        background: "#fff",
        padding: 48,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <TagPill>Investment</TagPill>
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 26,
          fontWeight: 700,
          color: "#111827",
          marginBottom: 28,
          letterSpacing: "-0.3px",
        }}
      >
        Visa Application Fees
      </h2>

      {/* Fee Cards — dark navy, label on top, amount center, sublabel bottom */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 14,
          marginBottom: 24,
        }}
      >
        {feeRows.map((row) => (
          <div
            key={row.label}
            style={{
              background: "#F1F5F9",
              borderRadius: 14,
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              borderTop:'2px solid #C0272D ',
              gap: 6,
            }}
          >
            {/* Top label */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#C0272D",
                marginBottom: 8,
              }}
            >
              {row.label}
            </p>
            {/* Amount */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 30,
                fontWeight: 800,
                color: "#C0272D",
                letterSpacing: "-0.5px",
                marginBottom: 6,
              }}
            >
              {row.amount}
            </p>
            {/* Sublabel */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                color: "#14419a",
              }}
            >
              {row.sublabel}
            </p>
          </div>
        ))}
      </div>

      {/* Disclaimer text */}
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          color: "#6b7280",
          lineHeight: 1.75,
          marginBottom: 36,
          maxWidth: 720,
        }}
      >
        Additional costs may include charges for skills assessments, English
        language tests, medical examinations, police certificates, and other
        required documents. It is essential to account for these costs when
        preparing your application.
      </p>

      {/* Why Sky Consultant */}
      <div
        style={{
          background: "#0D1B4B",
          borderRadius: 16,
          padding: "40px 48px",
          marginBottom: 0,
        }}
      >
        <h3
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 22,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          Why Choose Sky Consultant?
        </h3>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13.5,
            color: "#ffffff",
            lineHeight: 1.8,
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto 36px",
          }}
        >
          At Sky Consultant, we specialise in providing expert advice and
          support for individuals applying for the Skilled Nominated Visa
          (Subclass 190). Our team understands the complexities of the visa
          process, and we are here to simplify it for you. From assisting with
          your skills assessment to helping you meet the nomination requirements,
          we offer comprehensive support to ensure your application is processed
          smoothly.
        </p>

        {/* Full-width red CTA button */}
        <button
          style={{
            width: "100%",
            background: "#c0392b",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: 16,
            padding: "20px 28px",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            textAlign: "center",
            lineHeight: 1.4,
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#a93226")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#c0392b")}
        >
          Ready to Make Australia Your New Home?
          <br />
          <span style={{ fontWeight: 600, fontSize: 14 }}>
            Connect with Sky Consultant Today
          </span>
        </button>
      </div>
    </div>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        background: "#0a1628",
        marginTop: 24,
        padding: "24px 16px",
        textAlign: "center",
        borderTop: "0.5px solid rgba(255,255,255,0.08)",
      }}
    >
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          color: "#6b7280",
        }}
      >
        © {new Date().getFullYear()} Sky Consultant. All rights reserved.
      </p>
    </footer>
  );
}

// ─── ELIGIBILITY ─────────────────────────────────────────────────────────────
const eligibilityPoints = [
  "Applicants must be under 45 years of age at the time of application.",
  "You need to score at least 65 points on the points test, based on age, work experience, qualifications, and English language proficiency.",
  "The most critical requirement is receiving a nomination from an Australian state or territory government.",
  "Your occupation must be listed on the Skilled Occupation List (SOL) or the Medium and Long-term Strategic Skills List (MLTSSL).",
  "You must provide evidence of a valid skills assessment for your nominated occupation.",
  "A competent level of English is required, demonstrated by IELTS, PTE, or TOEFL.",
  "You must meet Australia's health and character requirements.",
  "You must clear any outstanding debts to the Australian government before applying.",
];

function Eligibility() {
  return (
    <div
      style={{
        width: "95%",
        margin: "24px auto 0",
        borderRadius: 20,
        background: "#fff",
        padding: 48,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <TagPill>Requirements</TagPill>
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 26,
          fontWeight: 700,
          color: "#111827",
          marginBottom: 28,
          letterSpacing: "-0.3px",
        }}
      >
        Eligibility Criteria for the Subclass 190 Visa
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {eligibilityPoints.map((point, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
              padding: "16px 20px",
              borderRadius: 12,
              border: "0.5px solid #e5e7eb",
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#0D1B4B",
                border: "1px solid #c0392b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 4,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#c0392b",
                  display: "block",
                }}
              />
            </div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: "#4b5563",
                lineHeight: 1.7,
              }}
            >
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function SkilledVisa190() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#f5f5f5" }}>
      <Hero />
      <Benefits />
      <Eligibility />
      <StepGuide />
      <ApplicationSteps />
      <Fees />
    </div>
  );
}