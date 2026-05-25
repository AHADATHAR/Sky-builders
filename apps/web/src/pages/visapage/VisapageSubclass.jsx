import { useState } from "react";
import {
  ChevronRight,
  GraduationCap,
  Briefcase,
  Plane,
  Users,
  Shield,
  ClipboardList,
  HeartPulse,
  Check,
  AlertCircle,
} from "lucide-react";

const NAVY  = '#0a1628';
const RED   = '#c0392b';
const WHITE = '#ffffff';
const SANS  = "'Inter', sans-serif";

// ─── Shared section wrapper styles ───────────────────────────────────────────
const sectionBase = {
  width: '100%',
  boxSizing: 'border-box',
};

const innerBase = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 40px',
};

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      position: 'relative',
      width: '95%',
      borderRadius: '20px',
      margin: '90px auto 0',
      background: `linear-gradient(rgba(10,20,55,0.78), rgba(10,20,55,0.82)),
        url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80') center/cover no-repeat`,
      display: 'flex',
      alignItems: 'center',
      minHeight: '420px',
      boxSizing: 'border-box',
    }}>
      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: 'clamp(60px,8vw,80px) 40px' }}>
        <div style={{ maxWidth: '560px' }}>
          <div style={{
            display: 'inline-block',
            background: RED,
            color: WHITE,
            fontFamily: SANS,
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '5px 12px',
            marginBottom: '22px',
          }}>
            STUDENT VISA — SUBCLASS 500
          </div>

          <h1 style={{
            fontFamily: SANS,
            fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
            fontWeight: 700,
            color: WHITE,
            lineHeight: 1.2,
            margin: '0 0 20px 0',
          }}>
            Student Visa –<br />Subclass 500
          </h1>

          <p style={{
            fontFamily: SANS,
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.7,
            marginBottom: '36px',
            maxWidth: '480px',
          }}>
            Your gateway to world-class education and a global future in Australia — study full-time, work part-time, and explore the country with confidence.
          </p>

          <button style={{
            background: RED,
            color: WHITE,
            fontFamily: SANS,
            fontSize: '0.88rem',
            fontWeight: 600,
            border: 'none',
            padding: '13px 26px',
            cursor: 'pointer',
            borderRadius: '2px',
            letterSpacing: '0.02em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            Contact for Consultation
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── OVERVIEW ────────────────────────────────────────────────────────────────
const features = [
  { icon: GraduationCap, title: "Eligibility to Study in Australia", desc: "With the Subclass 500 visa, you can enrol in full-time courses at a CRICOS-registered institution in Australia." },
  { icon: Briefcase,     title: "Work Rights",                       desc: "You are allowed to work 48 hours per fortnight during the academic term and unlimited hours during school breaks." },
  { icon: Plane,         title: "Travel Flexibility",                desc: "The Subclass 500 visa allows you to travel in and out of Australia during the validity of your visa." },
  { icon: Users,         title: "Family Inclusion",                  desc: "You can include eligible family members (such as a spouse or dependent children) in your application." },
];

function Overview() {
  return (
    <section style={{ ...sectionBase, background: '#f9fafb', padding: '80px 0' }}>
      <div style={innerBase}>
        <span style={{
          display: 'inline-block',
          border: '1px solid #d1d5db',
          color: '#6b7280',
          fontSize: '10px',
          fontFamily: SANS,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '4px 12px',
          borderRadius: '999px',
          marginBottom: '20px',
        }}>Overview</span>

        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>
          What Does the Subclass 500 Visa Offer?
        </h2>
        <p style={{ fontFamily: SANS, color: '#6b7280', marginBottom: '48px', maxWidth: '640px', lineHeight: 1.7 }}>
          The Australian Student Visa offers a range of opportunities for international students, including:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '24px' }}>
          {features.map((f) => (
            <div key={f.title} style={{
              background: WHITE,
              borderRadius: '12px',
              padding: '28px 24px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
              border: '1px solid #f3f4f6',
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: '#fef2f2', display: 'flex', alignItems: 'center',
                justifyContent: 'center', marginBottom: '16px',
              }}>
                <f.icon size={22} color={RED} strokeWidth={1.8} />
              </div>
              <h3 style={{ fontFamily: SANS, fontWeight: 700, color: '#111827', marginBottom: '8px', fontSize: '0.95rem' }}>{f.title}</h3>
              <p style={{ fontFamily: SANS, color: '#6b7280', fontSize: '0.84rem', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ELIGIBILITY ─────────────────────────────────────────────────────────────
const eligibilityItems = [
  { title: "Confirmation of Enrolment (CoE)",   desc: "You must have received an offer and been enrolled in a full-time course registered under CRICOS.", ok: true },
  { title: "Proof of Financial Capacity",        desc: "You must provide evidence that you have sufficient funds to cover your tuition, living expenses, and travel costs.", ok: true },
  { title: "Age Requirements",                   desc: "Under 17 for Year 9, under 18 for Year 10, under 19 for Year 11, and under 20 for Year 12.", ok: false },
  { title: "English Language Proficiency",       desc: "You must demonstrate your English language proficiency through recognized tests like IELTS, TOEFL, or PTE.", ok: true },
  { title: "Health and Character Requirements",  desc: "You may need to undergo medical checks and provide a police certificate to meet health and character requirements.", ok: true },
];

const whyUs = [
  "Expert Document Auditing",
  "Direct Case Management",
  "GTE Statement Assistance",
  "Health Insurance Setup",
  "24/7 Support Portal",
];

function Eligibility() {
  return (
    <section style={{ ...sectionBase, background: WHITE, padding: '80px 0' }}>
      <div style={innerBase}>
        <span style={{
          display: 'inline-block',
          border: '1px solid #d1d5db',
          color: '#6b7280',
          fontSize: '10px',
          fontFamily: SANS,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '4px 12px',
          borderRadius: '999px',
          marginBottom: '20px',
        }}>Eligibility</span>

        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, color: '#111827', marginBottom: '40px' }}>
          Eligibility Criteria for Subclass 500 Visa
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '40px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {eligibilityItems.map((item) => (
              <div key={item.title} style={{
                display: 'flex',
                gap: '16px',
                padding: '20px 24px',
                borderRadius: '12px',
                border: '1px solid #f3f4f6',
              }}>
                <div style={{
                  width: '24px', height: '24px', borderRadius: '50%',
                  background: item.ok ? '#dcfce7' : '#fee2e2',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: '2px',
                }}>
                  {item.ok
                    ? <Check size={13} strokeWidth={2.5} color="#16a34a" />
                    : <AlertCircle size={13} strokeWidth={2.5} color={RED} />}
                </div>
                <div>
                  <h3 style={{ fontFamily: SANS, fontWeight: 700, color: '#111827', marginBottom: '4px', fontSize: '0.95rem' }}>{item.title}</h3>
                  <p style={{ fontFamily: SANS, color: '#6b7280', fontSize: '0.84rem', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ))}
            <blockquote style={{
              borderLeft: `4px solid ${RED}`,
              paddingLeft: '20px',
              paddingTop: '8px',
              paddingBottom: '8px',
              margin: '8px 0 0',
              fontStyle: 'italic',
              color: '#6b7280',
              fontFamily: SANS,
              fontSize: '0.88rem',
            }}>
              "Sky Consultant guides you about all necessary documentation and deadlines to simplify the application process and minimize the chance of errors."
            </blockquote>
          </div>

          <div style={{
            background: NAVY,
            borderRadius: '16px',
            padding: '32px',
            color: WHITE,
            position: 'sticky',
            top: '24px',
          }}>
            <div style={{
              width: '40px', height: '40px', background: RED, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '20px',
            }}>
              <Shield size={20} color={WHITE} strokeWidth={1.8} />
            </div>
            <h3 style={{ fontFamily: SANS, fontSize: '1.1rem', fontWeight: 700, marginBottom: '24px' }}>Why Sky Consultant?</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {whyUs.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: SANS, color: '#d1d5db', fontSize: '0.88rem' }}>
                  <span style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    border: `1px solid ${RED}`, background: 'rgba(192,57,43,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Check size={11} color="#e74c3c" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── APPLICATION PROCESS ─────────────────────────────────────────────────────
const steps = [
  { num: "01", title: "Secure Enrollment",  desc: "Obtain your letter of Offer and CoE." },
  { num: "02", title: "Prepare Documents",  desc: "Collect health, character, and financial evidence." },
  { num: "03", title: "Apply Online",       desc: "Submit through the ImmiAccount portal." },
  { num: "04", title: "Visa Grant",         desc: "Await your outcome and prepare for travel." },
];

const docChecklist = [
  "Valid Passport & Identity Docs",
  "Overseas Student Health Cover (OSHC)",
  "English Language Test Results",
  "Confirmation of Enrolment (CoE)",
  "GTE (Genuine Temporary Entrant) Statement",
  "Financial Capacity Evidence",
];

function Application() {
  return (
    <section style={{ ...sectionBase, background: '#f9fafb', padding: '80px 0' }}>
      <div style={innerBase}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{
            display: 'inline-block',
            border: '1px solid #d1d5db',
            color: '#6b7280',
            fontSize: '10px',
            fontFamily: SANS,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding: '4px 12px',
            borderRadius: '999px',
            marginBottom: '16px',
          }}>Application Process</span>
          <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, color: '#111827' }}>
            How to Apply for the Student Visa (Subclass 500)
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px', marginBottom: '56px' }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute', top: '24px', left: 'calc(50% + 24px)',
                  width: 'calc(100% - 48px)', height: '1px',
                  background: 'rgba(192,57,43,0.2)', zIndex: 0,
                }} />
              )}
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%',
                background: RED, color: WHITE,
                fontFamily: SANS, fontWeight: 700, fontSize: '0.85rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px', boxShadow: '0 4px 14px rgba(192,57,43,0.3)',
                position: 'relative', zIndex: 1,
              }}>{s.num}</div>
              <h3 style={{ fontFamily: SANS, fontWeight: 700, color: '#111827', marginBottom: '8px', fontSize: '0.95rem' }}>{s.title}</h3>
              <p style={{ fontFamily: SANS, color: '#6b7280', fontSize: '0.84rem', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: WHITE, borderRadius: '16px', border: '1px solid #f3f4f6', padding: '36px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div style={{ width: '36px', height: '36px', background: '#eff6ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ClipboardList size={18} color="#3b82f6" strokeWidth={1.8} />
            </div>
            <h3 style={{ fontFamily: SANS, fontWeight: 700, color: '#111827', fontSize: '1.05rem' }}>Essential Document Checklist</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '14px' }}>
            {docChecklist.map((doc) => (
              <div key={doc} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: SANS, color: '#4b5563', fontSize: '0.88rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: RED, flexShrink: 0 }} />
                {doc}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FEES ────────────────────────────────────────────────────────────────────
function Fees() {
  return (
    <section style={{ ...sectionBase, background: WHITE, padding: '80px 0' }}>
      <div style={innerBase}>
        <span style={{
          display: 'inline-block',
          border: '1px solid #d1d5db',
          color: '#6b7280',
          fontSize: '10px',
          fontFamily: SANS,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '4px 12px',
          borderRadius: '999px',
          marginBottom: '20px',
        }}>Visa Fees</span>

        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>
          Visa Fees and Additional Costs
        </h2>
        <p style={{ fontFamily: SANS, color: '#6b7280', maxWidth: '640px', marginBottom: '48px', lineHeight: 1.7 }}>
          Understanding the financial commitment is crucial. Costs vary based on the applicant's age and family members included.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', marginBottom: '40px' }}>
          <div style={{ background: NAVY, color: WHITE, borderRadius: '16px', padding: '36px 32px' }}>
            <p style={{ fontFamily: SANS, color: '#9ca3af', fontSize: '0.84rem', marginBottom: '8px' }}>Primary Applicant</p>
            <div style={{ fontFamily: SANS, fontSize: '2.4rem', fontWeight: 700, marginBottom: '4px' }}>AUD 2,000</div>
            <p style={{ fontFamily: SANS, color: '#9ca3af', fontSize: '11px', marginBottom: '28px' }}>Base Charge</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ fontFamily: SANS, color: '#d1d5db', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="#4ade80" strokeWidth={2.5} /> Main course enrollment</li>
              <li style={{ fontFamily: SANS, color: '#d1d5db', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="#4ade80" strokeWidth={2.5} /> Standard processing</li>
            </ul>
          </div>

          <div style={{ border: '2px solid #f3f4f6', borderRadius: '16px', padding: '36px 32px' }}>
            <p style={{ fontFamily: SANS, color: '#6b7280', fontSize: '0.84rem', marginBottom: '8px' }}>Additional (18+ Years)</p>
            <div style={{ fontFamily: SANS, fontSize: '2.4rem', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>AUD 1,225</div>
            <p style={{ fontFamily: SANS, color: '#9ca3af', fontSize: '11px', marginBottom: '28px' }}>Per Person</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ fontFamily: SANS, color: '#6b7280', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color={RED} strokeWidth={2.5} /> Family member inclusion</li>
              <li style={{ fontFamily: SANS, color: '#6b7280', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color={RED} strokeWidth={2.5} /> Same visa duration</li>
            </ul>
          </div>

          <div style={{ border: '2px solid #f3f4f6', borderRadius: '16px', padding: '36px 32px' }}>
            <p style={{ fontFamily: SANS, color: '#6b7280', fontSize: '0.84rem', marginBottom: '8px' }}>Additional (Under 18)</p>
            <div style={{ fontFamily: SANS, fontSize: '2.4rem', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>AUD 400</div>
            <p style={{ fontFamily: SANS, color: '#9ca3af', fontSize: '11px', marginBottom: '28px' }}>Per Child</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ fontFamily: SANS, color: '#6b7280', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color={RED} strokeWidth={2.5} /> Dependent children</li>
              <li style={{ fontFamily: SANS, color: '#6b7280', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color={RED} strokeWidth={2.5} /> Schooling eligibility</li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px', padding: '28px 32px' }}>
          <div style={{ flexShrink: 0, marginTop: '2px' }}>
            <HeartPulse size={24} color={RED} strokeWidth={1.8} />
          </div>
          <div>
            <h4 style={{ fontFamily: SANS, fontWeight: 700, color: '#111827', marginBottom: '6px' }}>Overseas Student Health Cover (OSHC)</h4>
            <p style={{ fontFamily: SANS, color: '#4b5563', fontSize: '0.88rem', lineHeight: 1.65 }}>
              It is mandatory to maintain adequate health insurance for the entire duration of your stay. Sky Consultant can assist you in comparing and selecting the most cost-effective OSHC provider approved by the Australian government.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── AFTER APPROVAL ──────────────────────────────────────────────────────────
const postApproval = [
  { title: "Course Maintenance", desc: "You must remain enrolled in a registered course and maintain satisfactory course progress and attendance." },
  { title: "Address Updates",    desc: "You are required to notify your education provider of your Australian residential address within 7 days of arrival." },
  { title: "Work Condition 8105",desc: "You cannot work until your course has started. Post-start, strictly adhere to the 48-hour fortnight limit." },
];

const stats = [
  { value: "48",   unit: "HOURS",     label: "Fortnightly work limit during session" },
  { value: "∞",    unit: "UNLIMITED", label: "Work rights during semester breaks" },
  { value: "100%", unit: "FULL-TIME", label: "Study load required for visa compliance" },
];

function AfterApproval() {
  return (
    <section style={{ ...sectionBase, background: '#f9fafb', padding: '80px 0' }}>
      <div style={innerBase}>
        <span style={{
          display: 'inline-block',
          border: '1px solid #d1d5db',
          color: '#6b7280',
          fontSize: '10px',
          fontFamily: SANS,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '4px 12px',
          borderRadius: '999px',
          marginBottom: '20px',
        }}>After Approval</span>

        <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, color: '#111827', marginBottom: '40px' }}>
          Post-Visa Approval: What Happens Next?
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '40px', marginBottom: '64px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {postApproval.map((item) => (
              <div key={item.title} style={{
                background: WHITE,
                borderRadius: '12px',
                padding: '28px 24px',
                border: '1px solid #f3f4f6',
              }}>
                <h3 style={{ fontFamily: SANS, fontWeight: 700, color: '#111827', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontFamily: SANS, color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: NAVY, borderRadius: '16px', padding: '36px 32px', color: WHITE, display: 'flex', flexDirection: 'column', gap: '0' }}>
            {stats.map((s, i) => (
              <div key={s.unit} style={{
                display: 'flex', alignItems: 'center', gap: '24px',
                borderBottom: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                paddingBottom: i < stats.length - 1 ? '28px' : '0',
                paddingTop: i > 0 ? '28px' : '0',
              }}>
                <div style={{ fontFamily: SANS, fontSize: '3rem', fontWeight: 900, color: 'rgba(255,255,255,0.13)', width: '96px', flexShrink: 0, lineHeight: 1 }}>{s.value}</div>
                <div>
                  <div style={{ fontFamily: SANS, color: '#e74c3c', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.12em', marginBottom: '4px' }}>{s.unit}</div>
                  <div style={{ fontFamily: SANS, color: '#9ca3af', fontSize: '0.84rem', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: RED, borderRadius: '16px', padding: 'clamp(40px,6vw,64px)', textAlign: 'center', color: WHITE }}>
          <h3 style={{ fontFamily: SANS, fontSize: 'clamp(1.2rem,3vw,1.7rem)', fontWeight: 700, marginBottom: '28px', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.45 }}>
            Connect With Us Now to Start Your Journey Toward Studying in Australia with Confidence.
          </h3>
          <button style={{
            background: WHITE,
            color: RED,
            fontFamily: SANS,
            fontWeight: 700,
            fontSize: '0.9rem',
            padding: '13px 36px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
          }}>
            Contact for Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function StudentVisa500() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", margin: 0, padding: 0 }}>
      <Hero />
      <Overview />
      <Eligibility />
      <Application />
      <Fees />
      <AfterApproval />
    </div>
  );
}