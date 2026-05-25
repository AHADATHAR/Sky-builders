import React, { useState, useRef, useMemo, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2, FileText, Home as HomeIcon,
  GraduationCap, BookOpen, Settings, Shield, Award, Users,
  Briefcase, TrendingUp
} from 'lucide-react';
import { Target, RefreshCw, UserRound, SquareCheckBig, Settings2, BarChart3, ArrowUpRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';
import Hero from '@/components/Hero';
import Destination from "@/components/Destination";
import CoreServices from '@/components/CoreServices';
import FAQSection from '@/components/FAQSection';
import Testimonal from '@/components/Testimonal';
import { blogArticles } from '@/data/blogs';

// ─── Memoized sub-components ───────────────────────────────────────────────

const WhyCard = memo(({ icon: Icon, title, desc, iconColor = '#8B1A1A' }) => (
  <div className="bg-white rounded-xl p-5 sm:p-6 border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all font-[Inter,sans-serif]">
    <div className="mb-3" style={{ color: iconColor }}><Icon size={28} /></div>
    <h4 className="font-semibold text-gray-900 mb-2 font-[Inter,sans-serif]">{title}</h4>
    <p className="text-sm text-gray-500 font-[Inter,sans-serif]">{desc}</p>
  </div>
));
WhyCard.displayName = 'WhyCard';

const WhyCardDark = memo(({ icon: Icon, title, desc }) => (
  <div className="bg-[#8B1A1A] p-5 sm:p-6 rounded-xl text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all font-[Inter,sans-serif]">
    <div className="mb-3"><Icon size={28} /></div>
    <h4 className="font-semibold mb-2 font-[Inter,sans-serif]">{title}</h4>
    <p className="text-sm text-white/80 font-[Inter,sans-serif]">{desc}</p>
  </div>
));
WhyCardDark.displayName = 'WhyCardDark';

const BlogRow = memo(({ blog, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start group cursor-pointer"
  >
    <Link to={`/blog/${blog.slug}`} className="contents">
      <div className="relative flex-shrink-0 w-full sm:w-[220px] md:w-[280px] h-[200px] sm:h-[160px] md:h-[180px] rounded-2xl overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full shadow font-[Inter,sans-serif]">
          {blog.date}
        </span>
      </div>
      <div className="flex flex-col justify-center py-1 sm:py-2">
        <h3 className="text-lg sm:text-xl font-bold text-[#022279] mb-2 sm:mb-3 group-hover:text-[#B11212] transition-colors font-[Inter,sans-serif]">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed font-[Inter,sans-serif]">{blog.description}</p>
      </div>
    </Link>
  </motion.article>
));
BlogRow.displayName = 'BlogRow';

const CTASection = memo(() => (
  <section className="py-12 sm:py-16 md:py-20 bg-[#f4f4f4]">
    <div className="w-full px-4 sm:px-6">
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src="https://i.ibb.co/XkSnX5Z6/71be37ed7d6abbe916aaf19e951baa48756f0be3.jpg"
          alt="Airplane wing view"
          className="w-full h-[280px] sm:h-[320px] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 sm:mb-4 font-[Inter,sans-serif]">
              Connect With Us Now!
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 leading-relaxed font-[Inter,sans-serif]">
              Our team of expert consultants is always here to provide personalized
              guidance and support tailored to your unique needs. Whether you have
              questions about student visas, migration processes, or accommodation,
              we are just a call away. Reach out to us today and start your Australian
              journey with confidence!
            </p>
            <Button
              asChild
              className="bg-[#B11212] hover:bg-[#8f0f0f] text-white px-6 sm:px-8 py-3 rounded-lg text-sm font-medium w-full sm:w-auto font-[Inter,sans-serif]"
            >
              <Link to="/contact">Connect with Sky Consultant</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
));
CTASection.displayName = 'CTASection';

// ─── Main Page ──────────────────────────────────────────────────────────────

const HomePage = () => {
  const scrollRef = useRef(null);

  const scroll = useCallback((dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
    }
  }, []);

  const blogs = blogArticles.slice(0, 3);

  const whyTopCards = useMemo(() => [
    {
      icon: Target, title: 'Expert Guidance', iconColor: '#8B1A1A',
      desc: 'Our certified migration and education consultants stay updated with immigration laws and visa requirements.',
    },
    {
      icon: RefreshCw, title: 'Ongoing Support', iconColor: '#8B1A1A',
      desc: "Our support doesn't stop after visa approval. We assist with accommodation, career guidance and more.",
    },
  ], []);

  const whyBottomCards = useMemo(() => [
    {
      icon: UserRound, title: 'Personalized Solutions', dark: false,
      desc: "Whether you're a student or professional, we craft strategies tailored to your goals.",
    },
    {
      icon: SquareCheckBig, title: 'Trusted Partnerships', dark: false,
      desc: 'We collaborate with universities and service providers for better opportunities.',
    },
    {
      icon: Settings2, title: 'Comprehensive Services', dark: false,
      desc: 'From admissions to immigration support, we provide complete assistance.',
    },
    {
      icon: BarChart3, title: 'Proven Track Record', dark: true,
      desc: 'With years of experience helping students and migrants succeed, our results speak for themselves.',
    },
  ], []);

  return (
    <>
      <Helmet>
        <title>Sky Consultants - Certified Education & Migration Consultants</title>
        <meta
          name="description"
          content="Your trusted partner for education, migration, and sponsorship opportunities in Australia. Expert guidance for visa assistance, admissions, and more."
        />
      </Helmet>

      <div className="min-h-screen font-[Inter,sans-serif]">
        <Hero />
        <Destination />
        <CoreServices />

        {/* ─── Why Choose Section ─── */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#f5f5f7]">
          <div className="w-full px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

              {/* Left Image */}
              <div className="relative hidden md:block">
                <img
                  src="https://i.ibb.co/5Xh2VjTH/Subtract-1.png"
                  alt="Golden Gate Bridge"
                  className="rounded-3xl w-full w-[860px] h-[480px] lg:h-[600px] object-cover"
                  loading="lazy"
                />
               
              </div>

              {/* Right Content */}
              <div>
                <span className="bg-[#e9e9ef] text-[#6b6b8a] text-sm px-4 py-1 rounded-full inline-block font-[Inter,sans-serif]">
                  Why Choose Sky Consultant?
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#8B1A1A] mt-4 leading-snug font-[Inter,sans-serif]">
                  Your Trusted Partner for a Smooth Australian Transition
                </h2>
                <p className="text-gray-600 mt-4 sm:mt-5 leading-relaxed text-sm sm:text-base font-[Inter,sans-serif]">
                  Sky Consultant is a registered consultancy firm that provides complete support
                  to make your immigration and education journey smooth. Thousands of students,
                  professionals, and migrants trust us to provide expert guidance every step of the way.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                  {whyTopCards.map((card) => (
                    <WhyCard key={card.title} {...card} />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
              {whyBottomCards.map((card) =>
                card.dark
                  ? <WhyCardDark key={card.title} {...card} />
                  : <WhyCard key={card.title} {...card} iconColor="#1E3A8A" />
              )}
            </div>
          </div>
        </section>

        {/* ─── Blog Section ─── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="w-full px-4 sm:px-6">
            <div className="mb-8 sm:mb-10">
              <span className="inline-block border border-gray-300 text-gray-600 text-sm px-4 py-1 rounded-full mb-3 font-[Inter,sans-serif]">
                Our Blogs
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#022279] font-[Inter,sans-serif]">
                  Go Through our Recent Blogs Articles
                </h2>
                <Link
                  to="/blog"
                  className="text-[#B11212] hover:text-[#8f0f0f] font-semibold text-base whitespace-nowrap font-[Inter,sans-serif]"
                >
                  See All Articles →
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-5 sm:gap-6">
              {blogs.map((blog, index) => (
                <BlogRow key={blog.title} blog={blog} index={index} />
              ))}
            </div>
          </div>
        </section>

        <FAQSection />
        <Testimonal />
        <CTASection />
      </div>
    </>
  );
};

export default memo(HomePage);
