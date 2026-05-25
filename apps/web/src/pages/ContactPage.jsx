import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

// ─── Shared input/select style ────────────────────────────────────────────────
const inputCls = [
  'border border-[#E5E7EB] rounded-[7px] px-3 py-[9px]',
  'text-[13px] text-[#1F2937] bg-white outline-none w-full',
  'transition-colors duration-200 focus:border-[#000073]',
  'placeholder-[#9CA3AF] font-[Inter,sans-serif]',
].join(' ');

const selectCls = `${inputCls} appearance-none`;

// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero = () => (
  <motion.section
    className="relative w-full overflow-hidden rounded-[18px] min-h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat h-[74vh]"
    style={{
      backgroundImage:
        'url("https://i.ibb.co/s9923wzm/b1352b6301b0090ea57bbd23d0381cf1b4fdfa1d.jpg")',
    }}
    initial={{ opacity: 0, y: -16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(90deg, rgba(104,106,107,0.85) 40%, transparent 80%)',
      }}
    />

    <div className="relative z-10 w-full flex flex-col items-start gap-2.5 max-w-[480px] px-12 py-12 sm:px-6 sm:py-9">
      <span className="inline-block border border-[#000073] text-[#000073] text-[11px] font-semibold tracking-[0.08em] px-3 py-1 rounded-full uppercase mb-1.5 font-[Inter,sans-serif]">
        Contact Us
      </span>

      <h1
        className="font-['Inter',sans-serif] text-white font-bold leading-[1.3] mb-3.5
                   text-2xl sm:text-3xl sm:mb-4 lg:text-[40px] lg:leading-[1.25] lg:mb-[18px] xl:text-5xl xl:mb-5"
      >
        Get in Touch with Us
      </h1>

      <p className="text-[13px] text-[#e5e7eb] leading-[1.6] max-w-[340px] font-[Inter,sans-serif]">
        Speak with certified education and migration consultants for admissions,
        visa planning, travel preparation, and settlement support.
      </p>
    </div>
  </motion.section>
);

// ─── MAP + INFO ───────────────────────────────────────────────────────────────
const MapInfo = () => (
  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
    {/* Map */}
    <motion.div
      className="rounded-[14px] overflow-hidden border border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.07)] min-h-[320px]"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      style={{ height: '100%' }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.318661192771!2d115.89764937611578!3d-31.979375999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bb000d8f6103%3A0x7d9c836422756a72!2sSKY%20CONSULTANTS!5e0!3m2!1sen!2sau!4v1700000000001!5m2!1sen!2sau"
        width="100%"
        height="100%"
        style={{ border: 0, display: 'block', minHeight: '320px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Sky Consultants - Perth Office"
      />
    </motion.div>

    {/* Info card */}
    <motion.div
      className="bg-white rounded-[14px] px-6 py-7 shadow-[0_2px_12px_rgba(0,0,0,0.07)] border border-[#E5E7EB] flex flex-col"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <span className="inline-block border border-[#000073] text-[#000073] text-[10px] font-semibold tracking-[0.08em] px-2.5 py-[3px] rounded-full uppercase mb-3 font-[Inter,sans-serif]">
        Get in Touch
      </span>

      <h2
        className="text-[20px] font-bold text-[#000073] mb-2.5 leading-tight"
        style={{ fontFamily: 'Inter,sans-serif' }}
      >
        We're Here to Assist You
      </h2>

      <p className="text-[12.5px] text-[#4B5563] leading-[1.65] mb-5 font-[Inter,sans-serif]">
        Our experienced migration and education consultants are ready to guide
        you through every step of your journey — from visa applications to
        finding the right institution in Australia.
      </p>

      {/* Contact rows */}
      {[
        {
          icon: Mail,
          label: 'Email Us',
          value: 'Info@skyconsultant.com',
          href: 'mailto:Info@skyconsultant.com',
        },
        {
          icon: Phone,
          label: 'Call Us',
          value: '+61 426 179 366',
          href: 'tel:+61426179366',
        },
        {
          icon: MapPin,
          label: 'Adelaide Office',
          value:
            'Suite 103A, Level 10, 118 King William Street, Adelaide SA 5000',
          href:
            'https://www.google.com/maps/search/?api=1&query=Suite%20103A%20Level%2010%20118%20King%20William%20Street%20Adelaide%20SA%205000',
        },
        {
          icon: MapPin,
          label: 'Perth Office',
          value:
            '598 Albany Hwy, Victoria Park WA 6100',
          href:
            'https://www.google.com/maps/place/SKY+CONSULTANTS/@-31.979376,115.8998388,17z',
        },
      ].map(({ icon: Icon, label, value, href }, i, arr) => (
        <a
          key={label}
          href={href}
          target={label.includes('Office') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className={`flex items-start gap-3 py-3 border-t border-[#E5E7EB] hover:bg-[#f9fafb] transition-colors duration-150 rounded-md px-1 -mx-1
            ${i === arr.length - 1 ? 'border-b' : ''}`}
        >
          <div className="w-9 h-9 border border-[#E5E7EB] rounded-lg flex items-center justify-center flex-shrink-0 bg-[#F9FAFB] mt-0.5">
            <Icon size={16} color="#000073" strokeWidth={1.8} />
          </div>

          <div>
            <div className="text-[11px] font-semibold text-[#9CA3AF] uppercase tracking-[0.06em] mb-0.5 font-[Inter,sans-serif]">
              {label}
            </div>

            <div className="text-[13px] font-medium text-[#1F2937] font-[Inter,sans-serif] leading-snug">
              {value}
            </div>
          </div>
        </a>
      ))}

      {/* Direction button */}
      <a
        href="https://www.google.com/maps/place/SKY+CONSULTANTS/@-31.979376,115.8998388,17z/data=!3m1!4b1!4m6!3m5!1s0x2a32bb000d8f6103:0x7d9c836422756a72!8m2!3d-31.979376!4d115.8998388!16s%2Fg%2F11xvxvbcnw?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 w-full bg-[#000073] hover:bg-[#00009a] text-white text-[13px] font-semibold text-center py-[10px] rounded-[8px] transition-colors duration-200 font-[Inter,sans-serif]"
      >
        Get Directions
      </a>
    </motion.div>
  </div>
);

// ─── FORM SECTION ─────────────────────────────────────────────────────────────
const FormSection = () => {
  const empty = {
    fullName: '',
    fullAddress: '',
    emailAddress: '',
    phoneNumber: '',
    education: '',
    gpa: '',
    country: '',
    subject: '',
  };

  const [form, setForm] = useState(empty);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const handleClear = () => setForm(empty);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Details submitted successfully!');
    handleClear();
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-6 items-start">
      {/* Left copy */}
      <motion.div
        className="pt-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <span className="inline-block border border-[#000073] text-[#000073] text-[10px] font-semibold tracking-[0.08em] px-2.5 py-[3px] rounded-full uppercase mb-3.5 font-[Inter,sans-serif]">
          Contact Us
        </span>

        <h2
          className="font-bold text-[#000073] leading-tight mb-3.5"
          style={{
            fontFamily: 'Inter,sans-serif',
            fontSize: 'clamp(18px, 2.5vw, 24px)',
          }}
        >
          Fill in the Form to Stay in Touch
        </h2>

        <p className="text-[12.5px] text-[#4B5563] leading-[1.7] mb-[22px] font-[Inter,sans-serif]">
          Share your details below and one of our consultants will get back to
          you shortly to discuss how we can support your migration or education
          journey.
        </p>

        <button className="bg-[#000073] text-white border-none px-7 py-[11px] rounded-[7px] text-[13px] font-semibold cursor-pointer transition-all duration-200 hover:bg-[#00009a] hover:-translate-y-px font-[Inter,sans-serif]">
          Enroll Now
        </button>
      </motion.div>

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <form
          className="bg-white rounded-[14px] px-[22px] py-6 shadow-[0_2px_16px_rgba(0,0,0,0.08)] border border-[#E5E7EB]"
          onSubmit={handleSubmit}
        >
          {/* Personal Details */}
          <div className="text-[13px] font-bold text-[#000073] bg-[#e8f0fb] px-3.5 py-[7px] rounded-md mb-3.5 tracking-[0.02em] font-[Inter,sans-serif]">
            Personal Details
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
            {[
              {
                name: 'fullName',
                label: 'Full Name',
                placeholder: 'Eg. Doe Smith',
                type: 'text',
              },
              {
                name: 'fullAddress',
                label: 'Full Address',
                placeholder: 'Eg. Kathmandu-10, Nepal',
                type: 'text',
              },
              {
                name: 'emailAddress',
                label: 'Email Address',
                placeholder: 'Eg. doesmithk@gmail.com',
                type: 'email',
              },
              {
                name: 'phoneNumber',
                label: 'Phone Number',
                placeholder: 'Eg. +61 426 179 366',
                type: 'text',
              },
            ].map(({ name, label, placeholder, type }) => (
              <div key={name} className="flex flex-col gap-[5px]">
                <label className="text-[11.5px] font-medium text-[#4B5563] font-[Inter,sans-serif]">
                  {label}
                </label>

                <input
                  name={name}
                  type={type}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={inputCls}
                />
              </div>
            ))}
          </div>

          {/* Educational Details */}
          <div className="text-[13px] font-bold text-[#000073] bg-[#e8f0fb] px-3.5 py-[7px] rounded-md mb-3.5 tracking-[0.02em] font-[Inter,sans-serif]">
            Educational Details
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3.5">
            <div className="flex flex-col gap-[5px]">
              <label className="text-[11.5px] font-medium text-[#4B5563] font-[Inter,sans-serif]">
                Education
              </label>

              <div className="relative">
                <select
                  name="education"
                  value={form.education}
                  onChange={handleChange}
                  className={selectCls}
                >
                  <option value="">Select Education</option>
                  <option>High School</option>
                  <option>Bachelor's Degree</option>
                  <option>Master's Degree</option>
                  <option>PhD</option>
                </select>

                <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-[5px]">
              <label className="text-[11.5px] font-medium text-[#4B5563] font-[Inter,sans-serif]">
                GPA
              </label>

              <input
                name="gpa"
                value={form.gpa}
                onChange={handleChange}
                placeholder="Eg. 3.5"
                className={inputCls}
              />
            </div>

            <div className="flex flex-col gap-[5px]">
              <label className="text-[11.5px] font-medium text-[#4B5563] font-[Inter,sans-serif]">
                Country You Want To Study
              </label>

              <div className="relative">
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className={selectCls}
                >
                  <option value="">Select an option</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>New Zealand</option>
                </select>

                <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-[5px]">
              <label className="text-[11.5px] font-medium text-[#4B5563] font-[Inter,sans-serif]">
                Subject
              </label>

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Eg. Science"
                className={inputCls}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2.5 mt-3.5 pt-3.5 border-t border-[#E5E7EB]">
            <button
              type="button"
              onClick={handleClear}
              className="bg-transparent border border-[#E5E7EB] text-[#4B5563] px-5 py-[9px] rounded-[7px] text-[13px] font-medium cursor-pointer transition-colors duration-200 hover:border-[#9CA3AF] font-[Inter,sans-serif]"
            >
              Clear Form
            </button>

            <button
              type="submit"
              className="bg-[#000073] text-white border-none px-[22px] py-[9px] rounded-[7px] text-[13px] font-semibold cursor-pointer transition-all duration-200 hover:bg-[#00009a] hover:-translate-y-px font-[Inter,sans-serif]"
            >
              Send Details
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
const ContactPage = () => (
  <div className="w-full font-[Inter,sans-serif]">
    <div className="px-3 sm:px-6 lg:px-12 pt-[92px]">
      <Hero />
    </div>

    <div className="w-full px-4 sm:px-8 lg:px-16 pb-[60px] flex flex-col gap-7 mt-7">
      <MapInfo />
      <FormSection />
    </div>
  </div>
);

export default ContactPage;
