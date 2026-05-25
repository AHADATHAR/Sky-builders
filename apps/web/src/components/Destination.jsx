import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Destination = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -340 : 340,
        behavior: "smooth"
      });
    }
  };

  const destinations = [
    {
      name: "Study in Australia",
      desc: "Access quality education, post-study work rights, and PR pathways",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
    },
    {
      name: "Study in UK",
      desc: "Find prestigious institutes and work options after graduation",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    },
    {
      name: "Study in USA",
      desc: "Explore diverse programs and top-ranked institutes",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    },
    {
      name: "Study in Canada",
      desc: "World-class universities and post-graduation work permits",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
    },
    {
      name: "Study in Europe",
      desc: "Affordable tuition and rich cultural experiences across Europe",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    },
        {
      name: "Study in Canada",
      desc: "World-class universities and post-graduation work permits",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sky Consultants - Certified Education & Migration Consultants</title>
        <meta
          name="description"
          content="Your trusted partner for education, migration, and sponsorship opportunities in Australia."
        />
      </Helmet>

      <div className="min-h-[30svh] sm:min-h-70vh">

        {/* Section */}
        <section className="py-10 sm:py-14 px-4 sm:px-6 max-w-full mx-auto">

          {/* Header */}
          <div className="mb-6">
            <span className="inline-block border border-gray-300 text-gray-600 text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full mb-3">
              Countries
            </span>

            <div className="flex items-center justify-between gap-3">

              <h2
                className="text-xl sm:text-3xl md:text-4xl font-bold text-[#000073] leading-tight"
                style={{ fontFamily: "'Inter',sans-serif" }}
              >
                Top Destinations To Study Aboard
              </h2>

              {/* Arrows */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => scroll("left")}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  onClick={() => scroll("right")}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#B11212] flex items-center justify-center text-white hover:bg-[#8f0f0f] transition"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

            </div>
          </div>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-2 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative flex-shrink-0 
                  w-[260px] sm:w-[300px] md:w-[310px] 
                  h-[340px] sm:h-[400px] md:h-[420px] 
                  rounded-2xl overflow-hidden cursor-pointer group flex flex-col justify-end"
              >

                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 bg-white text-gray-800 text-xs sm:text-sm font-medium px-3 py-1 rounded-full shadow">
                  Try it Now
                </div>

                {/* Bottom Content (FIXED ALIGNMENT) */}
                <div className="relative z-10 px-4 sm:px-5 pb-4 sm:pb-5 flex flex-col justify-end h-full">

                  <div>
                    <h3
                      className="text-white text-lg sm:text-2xl font-bold mb-2 leading-tight"
                      style={{ fontFamily: "Inter,sans-serif" }}
                    >
                      {dest.name}
                    </h3>

                    <p className="text-gray-300 text-xs sm:text-sm leading-snug">
                      {dest.desc}
                    </p>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>

        </section>
      </div>
    </>
  );
};

export default Destination;