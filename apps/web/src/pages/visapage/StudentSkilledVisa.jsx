import { useState } from "react";
import {
  ChevronRight,
  Check,
  ClipboardList,
  Leaf,
  User,
  Users,
  Baby,
} from "lucide-react";

/* ─── Design tokens ─────────────────────────────────────────── */
const NAVY  = '#0a1628';
const RED   = '#c0392b';
const WHITE = '#ffffff';
const SANS  = "'Inter', sans-serif";

const sectionStyle = {
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',
  boxSizing: 'border-box',
};

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <>
      {/* Background Image Section */}
      <section style={{
        ...sectionStyle,
        position: 'relative',
        height: '84vh',
        marginTop: '90px',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        background: NAVY,
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('https://i.ibb.co/Jj5qPByt/7751f0872e8727b619adbd2bbd00c911433d4fd6-2.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
          opacity: 0.4,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(10,22,40,0.90) 0%, rgba(10,22,40,0.60) 50%, transparent 100%)',
        }} />

        <div style={{
          position: 'relative', zIndex: 10,
          padding: 'clamp(40px,6vw,64px) clamp(24px,5vw,64px)',
          maxWidth: '60%',
        }}>
          <span style={{
            display: 'inline-block',
            border: '1px solid #6b7280',
            color: '#d1d5db',
            fontFamily: SANS,
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '4px 12px',
            borderRadius: '4px',
            marginBottom: '24px',
          }}>
            Visa | Skilled Independent
          </span>
          <h1 style={{
            fontFamily: SANS,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: WHITE,
            lineHeight: 1.15,
            marginBottom: '20px',
          }}>
            Skilled Independent Visa – Subclass 189
          </h1>
          <p style={{
            fontFamily: SANS,
            color: '#d1d5db',
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            marginBottom: '40px',
            lineHeight: 1.7,
            maxWidth: '480px',
          }}>
            The Skilled Independent Visa (Subclass 189) is a permanent residency visa for skilled workers who want to live and work in Australia.
          </p>
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: RED, color: WHITE,
            fontFamily: SANS, fontWeight: 600, fontSize: '0.88rem',
            padding: '13px 28px', borderRadius: '4px', border: 'none', cursor: 'pointer',
          }}>
            Contact for Consultation
            <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* Intro Content Section */}
      <section style={{
        background: '#f3f4f6',
        padding: 'clamp(32px,5vw,48px) 0',
      }}>
        <div style={{ ...sectionStyle, maxWidth: '90%' }}>
          <div style={{ maxWidth: '896px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ fontFamily: SANS, color: '#4b5563', fontSize: 'clamp(0.88rem,2vw,1rem)', lineHeight: 1.8, margin: 0 }}>
              The Skilled Independent Visa (Subclass 189) is a permanent residency visa for skilled workers who want to live and work in Australia. It is a points-based visa that allows applicants to apply for permanent residency without needing a sponsor or employer. This visa is ideal for those who have the skills and qualifications to fill positions listed on Australia's Skilled Occupation List (SOL).
            </p>
            <p style={{ fontFamily: SANS, color: '#4b5563', fontSize: 'clamp(0.88rem,2vw,1rem)', lineHeight: 1.8, margin: 0 }}>
              If you're considering applying for the Subclass 189 visa, Sky Consultant is here to provide expert guidance throughout the application process. Our team will help you navigate the complexities of the points-based system, ensure that all your documents are in order, and offer advice to increase your chances of a successful application.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── BENEFITS ────────────────────────────────────────────────────────────────
const benefitsList = [
  "Live and work permanently in Australia.",
  "Access the Australian public healthcare system (Medicare).",
  "Travel in or out of Australia for up to five years from the date the visa is granted.",
  "Apply for Australian citizenship once eligible.",
];

function Benefits() {
  return (
    <section style={{ background: WHITE, padding: 'clamp(48px,7vw,80px) 0', boxSizing: 'border-box' }}>
      <div style={{ ...sectionStyle }}>
        <span style={{
          display: 'inline-block',
          border: '1px solid #d1d5db',
          color: '#6b7280',
          fontFamily: SANS, fontSize: '10px', fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '4px 12px', borderRadius: '999px', marginBottom: '20px',
        }}>Benefits</span>

        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>
          What Does the Subclass 189 Visa Offer?
        </h2>
        <p style={{ fontFamily: SANS, color: '#6b7280', fontSize: 'clamp(0.88rem,2vw,1rem)', marginBottom: '40px', maxWidth: '640px', lineHeight: 1.7 }}>
          The Subclass 189 visa is granted for two specific streams: the Points-Tested Stream and the New Zealand Stream. Both streams allow visa holders to:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '40px', alignItems: 'start' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {benefitsList.map((b) => (
              <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: SANS, color: '#374151', fontSize: 'clamp(0.88rem,2vw,1rem)' }}>
                <span style={{
                  marginTop: '2px', width: '20px', height: '20px', borderRadius: '50%',
                  background: 'rgba(192,57,43,0.1)', border: `1px solid ${RED}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Check size={11} color={RED} strokeWidth={2.5} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', height: '240px' }}>
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
              alt="Sydney Opera House"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ELIGIBILITY ─────────────────────────────────────────────────────────────
const pointsStream = [
  "Have a relevant occupation on the skilled occupation list.",
  "Have a suitable skills assessment for the occupation.",
  "Satisfy the points test (at least 65 points).",
  "Be under 45 years of age when invited to apply.",
  "Have competent English skills.",
];

const nzStream = [
  "Hold a New Zealand Special Category (Subclass 444) visa.",
  "Have lived in Australia for at least 5 years.",
  "Meet the taxable income threshold for relevant income years.",
  "Meet health and character requirements.",
];

function EligibilityCard({ icon: Icon, title, items }) {
  return (
    <div style={{
      background: WHITE, borderRadius: '12px',
      border: '1px solid #f3f4f6', padding: '28px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <div style={{
          width: '36px', height: '36px', background: NAVY, borderRadius: '8px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <Icon size={18} color={WHITE} strokeWidth={1.8} />
        </div>
        <h3 style={{ fontFamily: SANS, fontWeight: 700, color: '#111827', fontSize: 'clamp(0.95rem,2vw,1.05rem)', margin: 0 }}>
          {title}
        </h3>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {items.map((item) => (
          <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontFamily: SANS, color: '#4b5563', fontSize: '0.88rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9ca3af', flexShrink: 0, marginTop: '6px' }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Eligibility() {
  return (
    <section style={{ background: '#f9fafb', padding: 'clamp(48px,7vw,80px) 0', boxSizing: 'border-box' }}>
      <div style={{ ...sectionStyle }}>
        <span style={{
          display: 'inline-block',
          border: '1px solid #d1d5db', color: '#6b7280',
          fontFamily: SANS, fontSize: '10px', fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '4px 12px', borderRadius: '999px', marginBottom: '20px',
        }}>Requirements</span>

        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, color: '#111827', marginBottom: '40px' }}>
          Eligibility Criteria
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px' }}>
          <EligibilityCard icon={ClipboardList} title="Points-Tested Stream Eligibility" items={pointsStream} />
          <EligibilityCard icon={Leaf}          title="New Zealand Stream Eligibility"    items={nzStream} />
        </div>
      </div>
    </section>
  );
}

// ─── HOW TO APPLY ─────────────────────────────────────────────────────────────
const applySteps = [
  { num: "01", title: "Check Occupation",   desc: "Confirm your occupation is on the skilled occupation list (SOL) using SkillSelect." },
  { num: "02", title: "Skills Assessment",  desc: "Get your skills formally assessed by the relevant assessing authority." },
  { num: "03", title: "Submit EOI",         desc: "Submit an Expression of Interest (EOI) through SkillSelect to register your application." },
  { num: "04", title: "Receive Invitation", desc: "Receive an invitation to apply. The system considers all criteria when inviting candidates." },
  { num: "05", title: "Gather Documents",   desc: "Compile all required documentation including identity, skills, and health evidence." },
  { num: "06", title: "Lodge Application",  desc: "Submit your online visa application within 60 days of receiving your invitation." },
  { num: "07", title: "Visa Outcome",       desc: "Wait for decision from the Department of Home Affairs. Once approved, you'll receive your visa grant letter." },
];

function HowToApply() {
  return (
    <section style={{ background: WHITE, padding: 'clamp(48px,7vw,80px) 0', boxSizing: 'border-box' }}>
      <div style={{ ...sectionStyle }}>
        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>
          How to Apply for the Subclass 189 Visa
        </h2>
        <p style={{ fontFamily: SANS, color: '#6b7280', fontSize: 'clamp(0.88rem,2vw,1rem)', marginBottom: '48px' }}>
          A meticulous step-by-step approach to securing your Australian permanent residency.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '24px' }}>
          {applySteps.map((s) => (
            <div key={s.num} style={{
              background: '#f9fafb', borderRadius: '12px', padding: '24px',
              border: '1px solid #f3f4f6',
            }}>
              <div style={{
                fontFamily: SANS, fontSize: '2rem', fontWeight: 900,
                color: '#e5e7eb', marginBottom: '12px', lineHeight: 1,
              }}>{s.num}</div>
              <h3 style={{
                fontFamily: SANS, fontWeight: 700, color: '#111827',
                fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em',
                marginBottom: '8px',
              }}>{s.title}</h3>
              <p style={{ fontFamily: SANS, color: '#6b7280', fontSize: '0.84rem', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FEES ────────────────────────────────────────────────────────────────────
const feeRows = [
  { icon: User,  label: "Primary Applicant",                     amount: "AUD 4,640" },
  { icon: Users, label: "Additional Adult Applicant (18+)",      amount: "AUD 2,320" },
  { icon: Baby,  label: "Additional Child Applicant (Under 18)", amount: "AUD 1,160" },
];

function Fees() {
  return (
    <section style={{ background: '#f9fafb', padding: 'clamp(48px,7vw,80px) 0', boxSizing: 'border-box' }}>
      <div style={{ ...sectionStyle }}>
        <span style={{
          display: 'inline-block',
          border: '1px solid #d1d5db', color: '#6b7280',
          fontFamily: SANS, fontSize: '10px', fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '4px 12px', borderRadius: '999px', marginBottom: '20px',
        }}>Investment</span>

        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, color: '#111827', marginBottom: '40px' }}>
          Visa Fees and Additional Costs
        </h2>

        {/* Fee table */}
        <div style={{ background: WHITE, borderRadius: '16px', border: '1px solid #f3f4f6', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', overflow: 'hidden', marginBottom: '24px' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: '#f9fafb', borderBottom: '1px solid #f3f4f6', padding: '16px 24px' }}>
            <span style={{ fontFamily: SANS, fontSize: '10px', fontWeight: 700, color: '#6b7280', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Applicant Category</span>
            <span style={{ fontFamily: SANS, fontSize: '10px', fontWeight: 700, color: '#6b7280', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'right' }}>Standard Cost (AUD)</span>
          </div>
          {/* Rows */}
          {feeRows.map((row, i) => (
            <div key={row.label} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              alignItems: 'center', padding: '20px 24px',
              borderBottom: i < feeRows.length - 1 ? '1px solid #f3f4f6' : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: SANS, color: '#374151', fontSize: 'clamp(0.88rem,2vw,1rem)' }}>
                <div style={{ width: '32px', height: '32px', background: '#f3f4f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <row.icon size={16} color="#6b7280" strokeWidth={1.8} />
                </div>
                {row.label}
              </div>
              <div style={{ textAlign: 'right', fontFamily: SANS, fontWeight: 700, color: '#111827', fontSize: 'clamp(0.88rem,2vw,1rem)' }}>
                {row.amount}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: SANS, color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '48px', maxWidth: '768px' }}>
          Other costs may include charges for skills assessments, English language tests, medical examinations, and police checks. Sky Consultant can assist you in preparing for these costs and guide you through each requirement to ensure everything is handled smoothly, leaving no last-minute surprises from delays.
        </p>

        {/* CTA Banner */}
        <div style={{ background: RED, borderRadius: '16px', padding: 'clamp(40px,6vw,56px)', textAlign: 'center', color: WHITE }}>
          <h3 style={{ fontFamily: SANS, fontSize: 'clamp(1.2rem,3vw,1.7rem)', fontWeight: 700, lineHeight: 1.45, maxWidth: '640px', margin: '0 auto' }}>
            Ready to Take the Next Step Toward Your Australian Dream? Connect with Sky Consultant Today!
          </h3>
        </div>
      </div>
    </section>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function SkilledVisa189() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", margin: 0, padding: 0 }}>
      <Hero />
      <Benefits />
      <Eligibility />
      <HowToApply />
      <Fees />
    </div>
  );
}