import { memo, useState } from "react";
import { motion } from "framer-motion";

// ─── Icons ────────────────────────────────────────────────────────────────────
const ChevronLeft = memo(() => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="15 18 9 12 15 6" />
  </svg>
));
ChevronLeft.displayName = "ChevronLeft";

const ChevronRight = memo(() => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="9 18 15 12 9 6" />
  </svg>
));
ChevronRight.displayName = "ChevronRight";

const EnvelopeIcon = memo(() => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
));
EnvelopeIcon.displayName = "EnvelopeIcon";

// ─── Data ─────────────────────────────────────────────────────────────────────
const achievements = [
  { id: 1, date: "12 Jan. 2025", image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80", title: "Go Through our Recent Blogs articles" },
  { id: 2, date: "12 Jan. 2025", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80", title: "Go Through our Recent Blogs articles" },
  { id: 3, date: "12 Jan. 2025", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80", title: "Go Through our Recent Blogs articles" },
  { id: 4, date: "12 Jan. 2025", image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80", title: "Go Through our Recent Blogs articles" },
  { id: 5, date: "12 Jan. 2025", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80", title: "Go Through our Recent Blogs articles" },
  { id: 6, date: "12 Jan. 2025", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80", title: "Go Through our Recent Blogs articles" },
];

const recentBlogsData = [
  { id: 1, image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&q=80", country: "Study in USA",       desc: "Your text story about how we help you here and there to help change" },
  { id: 2, image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=600&q=80", country: "Study in Canada",    desc: "" },
  { id: 3, image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80", country: "Study in Australia", desc: "" },
];

const popularArticles = [
  { id: 1, image: "https://images.unsplash.com/photo-1517090186835-e348b621c9ca?w=800",      date: "12 Jan. 2025", title: "Go Through our Recent Blogs Articles", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut eni" },
  { id: 2, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",      date: "12 Jan. 2025", title: "Go Through our Recent Blogs Articles", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" },
  { id: 3, image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600",      date: "12 Jan. 2025", title: "Go Through our Recent Blogs Articles", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" },
];

// ─── Hero Banner ──────────────────────────────────────────────────────────────
const HeroBanner = memo(() => (
  <div className="px-[20px] mt-[110px]">
    <section
      className="relative w-full overflow-hidden rounded-2xl h-[74vh]"
       style={{
  background: `
    linear-gradient(135deg, rgba(3, 30, 104, 0.7), rgba(159, 11, 11, 0.7)),
    url('https://i.ibb.co/ymCh3hPJ/0d9ac426bd02ff636d63f08da00e8a371657f702.jpg')
  `,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
    >
      {/* Depth overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(3,30,104,0.60) 0%, rgba(3,30,104,0.30) 50%, rgba(159,11,11,0.20) 100%)',
        }}
      />

      {/* Centered content — full height flex */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">

        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="inline-block bg-white/15 text-white/90 text-[11px] px-4 py-1 rounded-full mb-4 border border-white/25 tracking-wide"
        >
          Our Blogs
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="font-['Inter',sans-serif] text-white font-bold leading-[1.3] mb-3.5
                     text-2xl
                     sm:text-3xl sm:mb-4
                     lg:text-[40px] lg:leading-[1.25] lg:mb-[18px]
                     xl:text-5xl xl:mb-5"
        >
          Explore Our Blogs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-white/70 text-[13px] sm:text-[14px] leading-[1.75] max-w-[480px] mb-8"
        >
          Personalized coaching, proven strategies, and expert trainers to help you succeed on your first attempt.
        </motion.p>

        {/* Search / Subscribe bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex items-center bg-white rounded-lg overflow-hidden shadow-md w-full max-w-[420px] h-11"
        >
          <div className="flex items-center gap-2 px-3 flex-1 min-w-0">
            <EnvelopeIcon />
            <input
              type="email"
              placeholder="Enter your email"
              className="border-none outline-none text-[13px] text-gray-700 bg-transparent w-full placeholder-gray-400"
            />
          </div>
          <button className="bg-[#9F0B0B] hover:bg-[#7a0808] text-white px-5 h-full text-[13px] font-medium transition-colors whitespace-nowrap flex-shrink-0">
            Subscribe
          </button>
        </motion.div>

      </div>
    </section>
  </div>
));
HeroBanner.displayName = "HeroBanner";

// ─── Popular Articles ─────────────────────────────────────────────────────────
const SmallArticleCard = memo(({ article }) => (
  <motion.div className="flex gap-4 items-start group cursor-pointer" initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
    <div className="relative flex-shrink-0 w-[150px] sm:w-[180px] h-[110px] sm:h-[120px] rounded-xl overflow-hidden">
      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <span className="absolute top-2 left-2 bg-white text-gray-600 text-[10px] font-medium px-2.5 py-0.5 rounded-full shadow-sm">{article.date}</span>
    </div>
    <div className="flex flex-col justify-start pt-1">
      <h3 className="text-[#000073] font-bold text-[13px] sm:text-[14px] leading-snug mb-2 group-hover:text-[#c0392b] transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
        {article.title}
      </h3>
      <p className="text-gray-500 text-[12px] leading-[1.7] line-clamp-4">{article.desc}</p>
    </div>
  </motion.div>
));
SmallArticleCard.displayName = "SmallArticleCard";

const PopularArticles = memo(() => (
  <section className="w-full py-10 px-4 sm:px-8 lg:px-14 bg-white font-[Inter,sans-serif]">
    <span className="inline-block bg-[#f0f0f8] text-gray-500 text-[11px] px-4 py-1.5 rounded-full mb-4 font-medium">Popular</span>
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="lg:w-[55%]">
        <h2 className="text-[#000073] font-bold text-2xl sm:text-[28px] lg:text-[32px] mb-6 leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>Popular Articles</h2>
        <motion.div className="rounded-2xl overflow-hidden group cursor-pointer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
          <div className="relative h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden rounded-2xl">
            <img src={popularArticles[0].image} alt={popularArticles[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <span className="absolute top-3 left-3 bg-white text-gray-600 text-[10px] font-medium px-3 py-1 rounded-full shadow-sm">{popularArticles[0].date}</span>
          </div>
          <div className="pt-4">
            <h3 className="text-[#000073] font-bold text-[18px] sm:text-[20px] mb-2 leading-snug group-hover:text-[#c0392b] transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>{popularArticles[0].title}</h3>
            <p className="text-gray-500 text-[13px] leading-[1.75]">{popularArticles[0].desc}</p>
          </div>
        </motion.div>
      </div>
      <div className="lg:w-[45%] flex flex-col">
        <p className="text-gray-500 text-[13px] leading-[1.75] mb-7 lg:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        <div className="flex flex-col gap-5">
          {popularArticles.slice(1).map((article) => (
            <SmallArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  </section>
));
PopularArticles.displayName = "PopularArticles";

// ─── Achievements ─────────────────────────────────────────────────────────────
const AchievementCard = memo(({ item, index }) => (
  <motion.div className="rounded-xl overflow-hidden group cursor-pointer bg-white" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: (index % 3) * 0.07 }}>
    <div className="relative h-[180px] sm:h-[200px] lg:h-[220px] overflow-hidden rounded-xl">
      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <span className="absolute top-3 left-3 bg-white text-gray-700 text-[11px] font-medium px-3 py-1 rounded-full shadow-sm">{item.date}</span>
    </div>
    <div className="pt-3 pb-1 px-0.5">
      <p className="text-[13.5px] text-[#000073] font-semibold leading-snug hover:text-[#c0392b] transition-colors duration-200">{item.title}</p>
    </div>
  </motion.div>
));
AchievementCard.displayName = "AchievementCard";

const AchievementsSection = memo(() => (
  <section className="w-full py-10 px-4 sm:px-8 lg:px-14 bg-white border-t border-gray-100 font-[Inter,sans-serif]">
    <div className="flex items-start justify-between mb-7">
      <div>
        <span className="inline-block bg-[#f0f0f8] text-gray-500 text-[11px] px-4 py-1.5 rounded-full mb-3 font-medium">Achievements</span>
        <h2 className="text-[#1a1a1a] font-bold text-2xl sm:text-[28px] lg:text-[32px] leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>Take a look at our achievements</h2>
      </div>
      <span className="text-gray-500 text-[14px] font-medium cursor-pointer hover:text-[#c0392b] transition-colors whitespace-nowrap ml-6 mt-1">See All</span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
      {achievements.slice(0, 3).map((item, i) => <AchievementCard key={item.id} item={item} index={i} />)}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {achievements.slice(3, 6).map((item, i) => <AchievementCard key={item.id} item={item} index={i + 3} />)}
    </div>
  </section>
));
AchievementsSection.displayName = "AchievementsSection";

// ─── Recent Blogs ─────────────────────────────────────────────────────────────
const RecentBlogs = memo(() => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => setStartIndex(i => Math.max(0, i - 1));
  const handleNext = () => setStartIndex(i => Math.min(recentBlogsData.length - 1, i + 1));

  const visibleBlogs = [
    ...recentBlogsData.slice(startIndex),
    ...recentBlogsData.slice(0, startIndex),
  ];

  return (
    <section className="w-full py-10 px-4 sm:px-8 lg:px-14 bg-white border-t border-gray-100 font-[Inter,sans-serif]">
      <div className="flex items-start justify-between mb-7">
        <div>
          <span className="inline-block bg-[#f0f0f8] text-gray-500 text-[11px] px-4 py-1.5 rounded-full mb-3 font-medium">
            Explore Blogs
          </span>
          <h2
            className="text-[#000073] font-bold text-2xl sm:text-[28px] lg:text-[32px] leading-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Read Our Recent Blogs
          </h2>
        </div>
        <div className="flex gap-2 mt-1 flex-shrink-0 ml-4">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#000073] hover:text-[#000073] transition-colors"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-[#000073] flex items-center justify-center text-white hover:bg-[#00005a] transition-colors"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 h-auto sm:h-[340px] lg:h-[420px]">
        <motion.div
          key={visibleBlogs[0].id}
          className="relative rounded-2xl overflow-hidden group cursor-pointer w-full sm:w-[50%] h-[280px] sm:h-full flex-shrink-0"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <img
            src={visibleBlogs[0].image}
            alt={visibleBlogs[0].country}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <h3
              className="text-white font-bold text-[20px] sm:text-[22px] leading-snug mb-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {visibleBlogs[0].country}
            </h3>
            {visibleBlogs[0].desc && (
              <p className="text-white/75 text-[12.5px] leading-[1.65] mb-4 max-w-[320px]">
                {visibleBlogs[0].desc}
              </p>
            )}
            <button className="bg-white text-[#000073] text-[13px] font-semibold px-5 py-2 rounded-full hover:bg-gray-100 transition-colors">
              Explore
            </button>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-[50%]">
          {visibleBlogs.slice(1, 3).map((blog, i) => (
            <motion.div
              key={blog.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer flex-1 h-[200px] sm:h-full"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <img
                src={blog.image}
                alt={blog.country}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3
                  className="text-white font-bold text-[16px] sm:text-[18px] leading-snug"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {blog.country}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
RecentBlogs.displayName = "RecentBlogs";

// ─── Main Page ────────────────────────────────────────────────────────────────
const BlogsPage = memo(() => (
  <div className="w-full min-h-screen bg-white font-[Inter,sans-serif]">
    <HeroBanner />
    <PopularArticles />
    <AchievementsSection />
    <RecentBlogs />
  </div>
));
BlogsPage.displayName = "BlogsPage";

export default BlogsPage;