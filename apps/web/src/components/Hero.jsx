import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Sky Consultants - Certified Education & Migration Consultants</title>
        <meta
          name="description"
          content="Your trusted partner for education, migration, and sponsorship opportunities in Australia."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

<div className="w-full px-[20px] pt-[20px] ">
    <section className="bg-white mt-16 w-full">
    <div className="relative overflow-hidden rounded-[30px] w-full h-[74vh] ">

      {/* Background image */}
<img
  src="https://i.ibb.co/RZ6rKq8/Whats-App-Image-2026-04-17-at-18-15-40.jpg"
  alt="Sydney Opera House"
  className="w-full h-full object-cover object-center block"
/>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(27,24,24,0.38)]" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center px-5 sm:px-8 lg:px-12 xl:px-14">
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-[500px] xl:max-w-[540px]">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            
            className="font-['Inter',sans-serif]  text-white font-bold leading-[1.3] mb-3.5
                       text-2xl
                       sm:text-3xl sm:mb-4
                       lg:text-[40px] lg:leading-[1.25] lg:mb-[18px]
                       xl:text-5xl xl:mb-5"
          >
            Certified Education &<br />Migration Consultants
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-['Poppins'] text-gray-200 leading-[1.7] mb-5
                       text-[13px] max-w-[340px]
                       sm:text-sm sm:max-w-[360px]
                       lg:text-[15px] lg:max-w-[400px] lg:mb-[26px]
                       xl:text-base xl:max-w-[430px] xl:mb-7"
          >
            Sky Consultant – Your Trusted Partner for Education,
            Migration, and Sponsorship Opportunities in Australia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Link
              to="/contact"
              className="inline-block font-['Poppins'] bg-[#B11212] text-white rounded-lg font-semibold border-none cursor-pointer tracking-[0.01em] transition-colors duration-200 hover:bg-[#8f0f0f]
                         px-[22px] py-[10px] text-[13px]
                         sm:px-[26px] sm:py-[11px] sm:text-sm
                         lg:px-[30px] lg:py-3 lg:text-[15px]
                         xl:px-8 xl:py-[13px]"
            >
              Contact Now
            </Link>
          </motion.div>

        </div>
      </div>

    </div>
  </section>
</div>
    </>
  );
};

export default Hero;
