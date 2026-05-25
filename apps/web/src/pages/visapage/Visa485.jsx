import React from 'react';
import { Plane, ChevronRight } from 'lucide-react';

const NAVY  = '#0d1b3e';
const NAVY2 = '#162040';
const RED   = '#c0392b';
const WHITE = '#ffffff';
const SANS  = "'Inter', sans-serif";

function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      width: '95%',
      borderRadius: '20px',
      background: `linear-gradient(rgba(10,20,55,0.82), rgba(10,20,55,0.82)),
        url('https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1600&q=80') center/cover no-repeat`,
      display: 'flex',
      alignItems: 'center',
      padding: 'clamp(60px, 8vw, 80px) clamp(20px, 5vw, 60px)',
      boxSizing: 'border-box',
      margin:'90px auto'
    }}>
      <div style={{ maxWidth: '560px', width: '100%' }}>
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
          TOURIST VISA — SUBCLASS 600
        </div>

        <h1 style={{
          fontFamily: SANS,
          fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
          fontWeight: 700,
          color: WHITE,
          lineHeight: 1.2,
          margin: '0 0 20px 0',
        }}>
          Tourist Visa –<br />Subclass 600
        </h1>

        <p style={{
          fontFamily: SANS,
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          color: 'rgba(255,255,255,0.85)',
          lineHeight: 1.7,
          marginBottom: '36px',
          maxWidth: '480px',
        }}>
          Experience Australia's breathtaking landscapes and vibrant culture with a flexible tourist visa designed for visitors who want to explore without working.
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
    </section>
  );
}

function AboutSection() {
  return (
    <section style={{
      background: WHITE,
      padding: 'clamp(48px, 7vw, 80px) clamp(20px, 5vw, 60px)',
      boxSizing: 'border-box',
      borderRadius: '20px',
      width: '100%',
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        gap: 'clamp(32px, 6vw, 80px)',
      }}>
        <div style={{
          flex: '1 1 320px',
          borderLeft: `3px solid ${RED}`,
          paddingLeft: '24px',
        }}>
          <p style={{ fontFamily: SANS, fontSize: 'clamp(0.88rem, 2vw, 0.97rem)', color: '#2c2c2c', lineHeight: 1.8, margin: '0 0 24px 0' }}>
            The Tourist Visa (Subclass 600) provides a simple and flexible way to experience Australia during your stay. This visa is for visitors who want to enjoy Australia's pleasing destinations without the intention to work.
          </p>
          <p style={{ fontFamily: SANS, fontSize: 'clamp(0.88rem, 2vw, 0.97rem)', color: '#2c2c2c', lineHeight: 1.8, margin: '0 0 24px 0' }}>
            The Subclass 600 visa permits a stay of up to 12 months, though visas are commonly granted for 3 to 6 months. Applicants must show sufficient funds, genuine intent, and meet health and character requirements.
          </p>
          <p style={{ fontFamily: SANS, fontSize: 'clamp(0.88rem, 2vw, 0.97rem)', color: '#2c2c2c', lineHeight: 1.8, margin: 0 }}>
            At Sky Consultant, we assist you at every stage of the visa application process. Our experts ensure your documents are accurate, your intentions are clearly presented, and your tour is smooth and stress-free.
          </p>
        </div>

        <div style={{
          width: 'clamp(180px, 25vw, 260px)',
          flexShrink: 0,
          background: NAVY,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(32px, 5vw, 48px) 32px',
          position: 'relative',
          minHeight: '200px',
          alignSelf: 'stretch',
        }}>
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '18px',
            height: '18px',
            background: RED,
          }} />
          <div style={{
            width: '80px',
            height: '80px',
            border: `1.5px solid rgba(255,255,255,0.25)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}>
            <Plane size={40} color="rgba(255,255,255,0.35)" strokeWidth={1.2} />
          </div>
          <p style={{
            fontFamily: SANS,
            fontSize: '10px',
            fontWeight: 700,
            color: WHITE,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin: 0,
          }}>
            TOURIST VISA<br />SUBCLASS 600
          </p>
        </div>
      </div>
    </section>
  );
}

function StreamSection() {
  const points = [
    'Spend the holiday in Australia',
    'Visit family or friends',
    'Join a cruise that starts or ends in Australia',
  ];

  return (
    <section style={{
      background: '#f7f8fa',
      padding: 'clamp(40px, 6vw, 70px) clamp(20px, 5vw, 60px)',
      boxSizing: 'border-box',
      borderRadius: '20px',
      width: '100%',
    }}>
      <h2 style={{
        fontFamily: SANS,
        fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
        fontWeight: 700,
        color: NAVY,
        margin: '0 0 28px 0',
      }}>
        Tourist Visa (Subclass 600) – Tourist Stream
      </h2>

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {points.map((p, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', fontFamily: SANS, fontSize: 'clamp(0.88rem, 2vw, 0.95rem)', color: '#2c2c2c' }}>
            <span style={{ width: '11px', height: '11px', background: RED, flexShrink: 0, display: 'inline-block' }} />
            {p}
          </li>
        ))}
      </ul>

      <p style={{
        fontFamily: SANS,
        fontSize: 'clamp(0.82rem, 1.8vw, 0.85rem)',
        color: '#666',
        lineHeight: 1.75,
        fontStyle: 'italic',
        margin: 0,
      }}>
        This is a temporary visa only. You are not permitted to work, but you may undertake
        short-term study or training for up to 3 months. The visa may be granted with single
        or multiple entries, allowing you to travel in and out of Australia while the visa
        remains valid.
      </p>
    </section>
  );
}

const streams = [
  {
    title: 'Tourist Visa (Apply Outside Australia)',
    desc: 'If you are applying from overseas, you must be outside Australia both at the time of application and when the visa decision is made.',
    criteria: [
      'Be a genuine visitor intending to stay temporarily',
      'Have sufficient funds to support your stay',
      'Meet health requirements',
      'Meet character requirements',
      'Agree not to work in Australia',
    ],
    charge: 'AUD 190.00',
    processing: '20 – 30 Days',
  },
  {
    title: 'Tourist Visa (Apply in Australia)',
    desc: 'This option is available if you are already in Australia and wish to continue your stay as a tourist. You must be in Australia when lodging the application and when the decision is made.',
    criteria: [
      'Be a genuine visitor with temporary stay intentions',
      'Have adequate financial capacity',
      'Meet health and character requirements',
      'Comply with the conditions of your current visa',
      'Not engage in any work activities',
    ],
    charge: 'AUD 365.00',
    processing: 'Weeks – Months',
  },
];

function VisaStreamsSection() {
  return (
    <section style={{
      background: '#f7f8fa',
      padding: 'clamp(40px, 6vw, 70px) clamp(20px, 5vw, 60px)',
      boxSizing: 'border-box',
      borderRadius: '20px',
      width: '100%',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2px',
      }}>
        {streams.map((s, i) => (
          <div key={i} style={{
            background: '#fff',
            border: '1px solid #e2e2e2',
            borderTop: `3px solid ${RED}`,
            padding: 'clamp(20px, 3vw, 28px)',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <h3 style={{ fontFamily: SANS, fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', fontWeight: 700, color: NAVY, margin: '0 0 12px 0' }}>
              {s.title}
            </h3>
            <p style={{ fontFamily: SANS, fontSize: '0.84rem', color: '#555', lineHeight: 1.7, margin: '0 0 20px 0' }}>
              {s.desc}
            </p>
            <p style={{ fontFamily: SANS, fontSize: '10px', fontWeight: 700, color: RED, letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
              Eligibility Criteria
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
              {s.criteria.map((c, j) => (
                <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: SANS, fontSize: '0.84rem', color: '#2c2c2c', lineHeight: 1.55 }}>
                  <span style={{ width: '9px', height: '9px', background: RED, flexShrink: 0, marginTop: '4px', display: 'inline-block' }} />
                  {c}
                </li>
              ))}
            </ul>
            <div style={{ borderTop: '1px solid #e8e8e8', paddingTop: '18px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <p style={{ fontFamily: SANS, fontSize: '10px', fontWeight: 700, color: '#999', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Charge</p>
                <p style={{ fontFamily: SANS, fontSize: '1.15rem', fontWeight: 700, color: NAVY, margin: 0 }}>{s.charge}</p>
              </div>
              <div>
                <p style={{ fontFamily: SANS, fontSize: '10px', fontWeight: 700, color: '#999', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 6px 0' }}>Processing Time</p>
                <p style={{ fontFamily: SANS, fontSize: '1.15rem', fontWeight: 700, color: NAVY, margin: 0 }}>{s.processing}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ConditionsSection() {
  const conditions = [
    { title: 'No Further Stay',   desc: 'You cannot extend the Tourist Visa while in Australia.' },
    { title: 'Study Limitation',  desc: 'The study is limited to a maximum of 3 months.' },
    { title: 'Work Prohibition',  desc: 'You must apply for a new visa if you wish to stay longer.' },
    { title: 'Health & Character',desc: 'Entry is subject to current Australian border and health requirements.' },
  ];

  return (
    <>
      <section style={{
        background: NAVY2,
        padding: 'clamp(48px, 7vw, 70px) clamp(20px, 5vw, 60px)',
        boxSizing: 'border-box',
        borderRadius: '20px',
        width: '100%',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px, 6vw, 60px)', alignItems: 'flex-start' }}>
          <div style={{ flex: '0 0 clamp(180px, 28%, 260px)' }}>
            <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 700, color: WHITE, margin: '0 0 16px 0', lineHeight: 1.3 }}>
              Important Conditions to Note
            </h2>
            <p style={{ fontFamily: SANS, fontSize: 'clamp(0.8rem, 1.8vw, 0.86rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
              Compliance with visa conditions is mandatory to maintain legal status and ensure future travel eligibility to Australia.
            </p>
          </div>

          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column' }}>
            {conditions.map((c, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '18px',
                padding: '20px 0',
                borderBottom: i < conditions.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%', background: RED,
                  color: WHITE, fontFamily: SANS, fontSize: '12px', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: '2px',
                }}>
                  {i + 1}
                </div>
                <div>
                  <p style={{ fontFamily: SANS, fontSize: 'clamp(0.9rem, 2vw, 1rem)', fontWeight: 700, color: WHITE, margin: '0 0 6px 0' }}>{c.title}</p>
                  <p style={{ fontFamily: SANS, fontSize: 'clamp(0.8rem, 1.8vw, 0.84rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        background: '#B02D21',
        padding: 'clamp(60px, 8vw, 90px) clamp(20px, 5vw, 60px)',
        textAlign: 'center',
        boxSizing: 'border-box',
        borderRadius: '20px',
        width: '100%',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: SANS, fontSize: 'clamp(1.2rem, 3vw, 1.65rem)', fontWeight: 700, color: WHITE, lineHeight: 1.5, margin: '0 0 32px 0' }}>
            Contact our experienced migration professionals at Sky Consultant to help you prepare a strong Tourist Visa application with confidence.
          </h2>
          <button
            style={{
              background: 'transparent',
              border: `2px solid ${WHITE}`,
              color: WHITE,
              fontFamily: SANS,
              fontSize: '0.88rem',
              fontWeight: 600,
              padding: '13px 32px',
              cursor: 'pointer',
              letterSpacing: '0.03em',
              borderRadius: '2px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = WHITE; e.currentTarget.style.color = NAVY2; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = WHITE; }}
          >
            Ready to Visit Australia?
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
}

export default function TouristVisa600() {
  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      margin: 0,
      padding: '20px',
      background: '#f0f0f0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: '20px',
      boxSizing: 'border-box',
    }}>
      <HeroSection />
      <AboutSection />
      <StreamSection />
      <VisaStreamsSection />
      <ConditionsSection />
    </div>
  );
}