import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const companyLinks = [
    { name: 'Visa Pages', path: '/visa' },
    { name: 'Our Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Insightful Blog', path: '/blog' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/skyconsultantspakistan/',
      label: 'Facebook',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/skyconsultantsgroup?igsh=MXM5eG1wbTBtbnd2aw==',
      label: 'Instagram',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'Info@skyconsultant.com',
      href: 'mailto:Info@skyconsultant.com',
    },
    {
      icon: Phone,
      text: '+61 426 179 366',
      href: 'tel:+61426179366',
    },
    {
      icon: MapPin,
      text: 'Adelaide Office: Suite 103A, Level 10, 118 King William Street, Adelaide SA 5000',
      href: 'https://www.google.com/maps/search/?api=1&query=Suite%20103A%20Level%2010%20118%20King%20William%20Street%20Adelaide%20SA%205000',
    },
    {
      icon: MapPin,
      text: 'Perth Office: 598 Albany Hwy, Victoria Park WA 6100',
      href: 'https://www.google.com/maps/place/SKY+CONSULTANTS/@-31.979376,115.8998388,17z',
    },
  ];

  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.3!2d115.8998388!3d-31.979376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bb000d8f6103%3A0x7d9c836422756a72!2sSKY%20CONSULTANTS!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau';

  return (
    <footer className="bg-white text-[#0F172A]">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-[#DC2626]" />

      <div className="w-full mx-auto px-8 lg:px-16 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <div>
              <img
                src="https://i.ibb.co/3QsSryV/logo.png"
                alt="Sky Consultants"
                className="h-12 w-auto"
              />
            </div>

            {/* Description */}
            <p className="text-gray-800 text-sm leading-relaxed hover:text-[#DC2626] transition-colors duration-200">
              Empowering global ambitions through expert visa consultancy and academic
              guidance. We bridge the gap between your local potential and international
              opportunities.
            </p>

            {/* CTA Button */}
            <div>
              <Link
                to="/contact"
                className="inline-block bg-[#022279] hover:bg-[#DC2626] text-white text-sm font-semibold px-6 py-3 rounded transition-colors duration-200"
              >
                Plan your next step
              </Link>
            </div>

            {/* Red divider */}
            <div className="w-10 h-0.5 bg-[#DC2626]" />

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#022279] hover:bg-[#DC2626] flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#022279] mb-1">
              Company
            </h3>

            {/* Red underline */}
            <div className="w-8 h-0.5 bg-[#DC2626] mb-6" />

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#0F172A] hover:text-[#DC2626] text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-5">
            {/* Red accent */}
            <div className="w-8 h-0.5 bg-[#DC2626]" />

            <div>
              <h3 className="text-xl font-bold text-[#022279] mb-2">
                Need personalised guidance?
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed hover:text-[#DC2626] transition-colors duration-200">
                Our specialised consultants are ready to map out your journey.
                Reach out today.
              </p>
            </div>

            {/* Contact items */}
            <div className="flex flex-col gap-3">
              {contactInfo.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  target={item.icon === MapPin ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#022279] group-hover:bg-[#DC2626] flex items-center justify-center mt-0.5 transition-colors duration-200">
                    <item.icon className="h-4 w-4 text-white" />
                  </span>

                  <span className="text-[#0F172A] group-hover:text-[#DC2626] text-sm leading-snug transition-colors duration-200">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>

            {/* Google Map */}
            

          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-[#0F172A] hover:text-[#DC2626] text-sm transition-colors duration-200">
            © 2026 Sky Consultant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
