import { useState } from "react";
import { MapPin, User, Baby, Heart, Check, ArrowRight, Phone } from "lucide-react";

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between h-16">
        <span className="text-white font-bold text-lg tracking-tight">
          Sky <span className="text-[#c0392b]">Consultant</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#visa-options" className="hover:text-white transition-colors">Visa Options</a>
          <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
          <button className="bg-[#c0392b] hover:bg-[#a93226] text-white px-5 py-2 rounded font-semibold transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <>
      <section className="relative mx-[20px] mt-20 overflow-hidden rounded-2xl bg-[#0a1628] min-h-[74vh] flex items-center">
        <div className="absolute inset-0 flex">
          <div className="w-full md:w-1/2 bg-[#0a1628]" />
          <div
            className="hidden md:block w-1/2 bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url('https://i.ibb.co/sdgv2Zpx/Family-in-Australia-3x.png')",
              backgroundPosition: "center bottom",
            }}
          >
            <div className="w-full h-full bg-gradient-to-l from-transparent to-[#0a1628]/80" />
          </div>
        </div>

        <div
          className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('https://i.ibb.co/sdgv2Zpx/Family-in-Australia-3x.png')" }}
        />

        <div className="relative z-10 px-6 md:px-16 py-24 md:max-w-[50%]">
          <span className="inline-block border border-gray-500 text-gray-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded mb-6">
            Visa | Family
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
            Family Visa – <span className="text-white">Australia</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-10 max-w-xl">
            Stay Closer to Loved Ones While Living Your Australian Dream.
          </p>
          <button className="inline-flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-7 py-3 rounded-lg transition-all duration-300">
            <Phone size={16} />
            Contact Sky Consultant
          </button>
        </div>
      </section>

      <section className="bg-gray-100 py-14 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6">
            Reunite With Your Family in Australia
          </h2>
          <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              Life in Australia is exciting, but it becomes even better when you share it with your family.
              The Family Visa program allows Australian citizens, permanent residents, and eligible New
              Zealand citizens to bring close family members to Australia, either temporarily or permanently.
            </p>
            <p>
              These visas help reunite loved ones while meeting Australia's immigration requirements. At Sky
              Consultant, we guide families through eligibility checks, documentation, and the visa
              application process. Our expert visa consultants ensure your family's journey to Australia is
              smooth and stress-free.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── VISA OPTIONS ─────────────────────────────────────────────────────────────
const visaOptions = [
  {
    Icon: MapPin,
    tag: "Subclass 309/100",
    title: "Partner Visa (Apply Overseas)",
    desc: "The Subclass 309 (Provisional) visa allows spouses or de facto partners of Australian citizens, permanent residents, or eligible New Zealand citizens to temporarily live, work, and study in Australia, with the Subclass 100 (Permanent) visa being processed.",
    img: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&q=80",
  },
  {
    Icon: Heart,
    tag: "Subclass 820/801",
    title: "Partner Visa (Apply in Australia)",
    desc: "This visa allows the partner or spouse of an Australian citizen, permanent resident, or eligible New Zealand citizen to live in Australia temporarily and then permanently. The Subclass 820 (Temporary) visa is granted first, followed by the Subclass 801 (Permanent) visa.",
    img: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=600&q=80",
  },
  {
    Icon: User,
    tag: "Subclass 103",
    title: "Parent Visa",
    desc: "The Parent visa allows parents of settled Australian citizens, permanent residents, or eligible New Zealand citizens to move permanently to Australia. This visa ensures that parents can join their children and be close to family while settling in Australia.",
    img: "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?w=600&q=80",
  },
  {
    Icon: Baby,
    tag: "Subclass 101",
    title: "Child Visa",
    desc: "The Child visa allows children from outside Australia to permanently move to Australia and join their parent or guardian. It's for the biological, adopted, or stepchild of an Australian citizen, permanent resident, or eligible New Zealand citizen.",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
  },
];

function VisaOptions() {
  return (
    <section id="visa-options" className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block border border-gray-300 text-gray-500 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
          Family Visas
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Family Visa Options
        </h2>
        <p className="text-gray-500 mb-12 text-sm md:text-base">
          Australia offers several family visa pathways depending on the relationship, location, and duration of stay.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {visaOptions.map((v) => {
            const IconComp = v.Icon;
            return (
              <div key={v.title} className="group">
                <div className="flex items-start gap-3 mb-3">
                  <IconComp
                    size={20}
                    className="mt-1 flex-shrink-0 text-[#c0392b]"
                  />
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
                      {v.tag}
                    </p>
                    <h3 className="font-bold text-gray-900 text-lg leading-snug">{v.title}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{v.desc}</p>
                <div className="rounded-xl overflow-hidden h-48 md:h-56">
                  <img
                    src={v.img}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── WHY SKY CONSULTANT ───────────────────────────────────────────────────────
const benefits = [
  "Detailed eligibility assessments for families",
  "Guidance on documentation and sponsorship obligations",
  "Step-by-step application support",
  "Advice to avoid delays or refusals",
  "Ongoing assistance until the visa is granted",
];

function WhySky() {
  return (
    <section id="why-us" className="bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Why Apply with Sky Consultant?
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              Family visas can be complex and documentation-heavy, with strict eligibility criteria for both
              sponsors and applicants. That's why our professionals provide:
            </p>
            <ul className="space-y-4 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#c0392b]/10 border border-[#c0392b] flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-[#c0392b]" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 font-medium mb-6 text-sm md:text-base">
              Contact Sky Consultant today to discuss the most suitable Family Visa for your loved ones.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-7 py-3 rounded transition-all hover:gap-4">
              Contact Sky Consultant <ArrowRight size={16} />
            </button>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80"
                alt="Professional consultant"
                className="w-full h-[420px] md:h-[500px] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#c0392b]/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#0a1628]/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0a1628] text-gray-400 text-center py-8 text-sm">
      © {new Date().getFullYear()} Sky Consultant. All rights reserved.
    </footer>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function FamilyVisa() {
  return (
    <div className="font-sans antialiased">
      <Hero />
      <VisaOptions />
      <WhySky />
    </div>
  );
}