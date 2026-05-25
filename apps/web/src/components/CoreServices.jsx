import { motion } from "framer-motion";
import {
  Landmark, CreditCard, ArrowLeftRight, GraduationCap,
  BookOpen, Globe2, ShieldPlus, BadgeCheck,
} from "lucide-react";

const services = [
  {
    title: "Admission Services",
    description: "Our expert guidance helps you choose the right course and university ensuring a smooth and successful application process.",
    dark: "navy",
    Icon: Landmark,
  },
  {
    title: "Visa Assistance",
    description: "We simplify the visa application process for students, families, and professionals & increase your chances of approval.",
    dark: null,
    visaText: true,
    Icon: CreditCard,
  },
  {
    title: "Accommodation",
    description: "Finding affordable and comfortable student accommodation that meets your preferences and requirements.",
    dark: null,
    Icon: ArrowLeftRight,
  },
  {
    title: "Professional Course",
    description: "Enroll in the Professional Year Program to enhance your career prospects through skill development & work experience.",
    dark: null,
    Icon: GraduationCap,
  },
  {
    title: "English Test Prep",
    description: "Access specialized coaching & strategies to ensure you achieve your desired score on the PTE, IELTS, and language CERT exam.",
    dark: "red",
    Icon: BookOpen,
  },
  {
    title: "NAATI CCL Services",
    description: "Expert preparation and guidance for the NAATI CCL test to help meet language requirements for Australian permanent residency.",
    dark: null,
    Icon: Globe2,
  },
  {
    title: "Health Insurance",
    description: "We provide support in selecting the right OSHC or OVHC health insurance policy and provide peace of mind.",
    dark: null,
    Icon: ShieldPlus,
  },
  {
    title: "Skills Assessment",
    description: "Our team assists you in appropriate skills assessment through authorities, such as AACA, AASW, AIMS, IPA & ACS etc",
    dark: null,
    Icon: BadgeCheck,
  },
];

const globalStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .cs-section {
    padding: 56px 0 64px;
    background: #eef0f8;
    font-family: 'Inter', sans-serif;
  }
  .cs-wrap {
    padding: 0 28px;
  }

  .cs-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: center;
    margin-bottom: 36px;
  }
  .cs-header-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .cs-badge {
    display: inline-block;
    background: #fff;
    color: #6B7280;
    font-size: 12px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    padding: 5px 18px;
    border-radius: 999px;
    margin-bottom: 14px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  }
  .cs-heading {
    font-family: 'Inter', sans-serif;
    font-size: 35px;
    font-weight: 700;
    color: #000073;
    line-height: 1.2;
  }
  .cs-header-right {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #4B5563;
    line-height: 1.75;
  }

  .cs-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }

  .cs-card {
    border-radius: 16px;
    padding: 28px 22px 24px;
    cursor: pointer;
    transition: all 0.28s ease;
    display: flex;
    flex-direction: column;
    gap: 0;
    font-family: 'Inter', sans-serif;
  }

  .cs-card-light {
    background: #fff;
    border: 1px solid #E5E7EB;
    box-shadow: 0 2px 10px rgba(0,0,50,0.05);
  }
  .cs-card-light:hover {
    background: #1a1a4b;
    border-color: #1a1a4b;
    box-shadow: 0 10px 32px rgba(0,0,115,0.18);
    transform: translateY(-4px);
  }

  .cs-card-navy {
    background: #1a1a4b;
    border: 1px solid #1a1a4b;
    box-shadow: 0 4px 18px rgba(0,0,80,0.22);
  }
  .cs-card-navy:hover { background: #141438; transform: translateY(-4px); }

  .cs-card-red {
    background: #8B1A1A;
    border: 1px solid #8B1A1A;
    box-shadow: 0 4px 18px rgba(139,26,26,0.25);
  }
  .cs-card-red:hover { background: #701515; transform: translateY(-4px); }

  .cs-icon {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }

  .cs-visa-badge {
    border: 2px solid currentColor;
    border-radius: 4px;
    padding: 3px 8px;
    font-size: 13px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    letter-spacing: 2px;
    display: inline-block;
    line-height: 1.4;
  }

  .cs-title {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1.3;
    transition: color 0.28s;
  }

  .cs-desc {
    font-family: 'Inter', sans-serif;
    font-size: 12.5px;
    line-height: 1.68;
    transition: color 0.28s;
  }

  .cs-card-navy .cs-icon,
  .cs-card-red  .cs-icon  { color: #fff; }
  .cs-card-navy .cs-title,
  .cs-card-red  .cs-title  { color: #fff; }
  .cs-card-navy .cs-desc,
  .cs-card-red  .cs-desc   { color: rgba(219,234,254,0.85); }

  .cs-card-light .cs-icon  { color: #000073; }
  .cs-card-light .cs-title { color: #000073; }
  .cs-card-light .cs-desc  { color: #6B7280; }

  .cs-card-light:hover .cs-icon  { color: #fff; }
  .cs-card-light:hover .cs-title { color: #fff; }
  .cs-card-light:hover .cs-desc  { color: rgba(219,234,254,0.85); }

  @media (max-width: 900px) {
    .cs-grid    { grid-template-columns: repeat(2, 1fr); }
    .cs-header  { grid-template-columns: 1fr; }
  }
  @media (max-width: 540px) {
    .cs-grid { grid-template-columns: 1fr; }
  }
    /* Tablet */
@media (max-width: 768px) {
  .cs-heading {
    font-size: 28px;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .cs-heading {
    font-size: 22px;
  }
}
`;

export default function CoreServices() {
  return (
    <>
      <style>{globalStyle}</style>
      <section className="cs-section">
        <div className="cs-wrap">

          <div className="cs-header">
            <div className="cs-header-left">
              <span className="cs-badge">Services</span>
              <h2 className="cs-heading">Explore our Core Services</h2>
            </div>
            <p className="cs-header-right">
              Looking to settle in Australia, or preparing for exams, we provide
              comprehensive support every step of the way.
            </p>
          </div>

          <div className="cs-grid">
            {services.map((svc, i) => {
              const cardClass =
                svc.dark === "navy" ? "cs-card cs-card-navy"
                : svc.dark === "red" ? "cs-card cs-card-red"
                : "cs-card cs-card-light";

              return (
                <motion.div
                  key={i}
                  className={cardClass}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <div className="cs-icon">
                    {svc.visaText ? (
                      <span className="cs-visa-badge">VISA</span>
                    ) : (
                      <svc.Icon size={36} strokeWidth={1.5} />
                    )}
                  </div>
                  <h3 className="cs-title">{svc.title}</h3>
                  <p className="cs-desc">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}