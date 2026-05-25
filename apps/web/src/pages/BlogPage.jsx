import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogArticles } from "@/data/blogs";

const featured = blogArticles[0];
const articles = blogArticles.slice(1);

const HeroBanner = memo(() => (
  <div className="px-4 sm:px-6 mt-[110px]">
    <section
      className="relative w-full overflow-hidden rounded-2xl h-[74vh]"
      style={{
        background: `
          linear-gradient(135deg, rgba(3, 30, 104, 0.72), rgba(159, 11, 11, 0.68)),
          url('https://i.ibb.co/ymCh3hPJ/0d9ac426bd02ff636d63f08da00e8a371657f702.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
          className="font-['Inter',sans-serif] text-white font-bold leading-[1.25] mb-4 text-3xl sm:text-4xl lg:text-5xl"
        >
          Education, Migration & Travel Insights
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-white/78 text-[13px] sm:text-[15px] leading-[1.75] max-w-[560px]"
        >
          Practical guidance from certified education and migration consultants, covering admissions, visa preparation, skilled pathways, and travel readiness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-7"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-[#B11212] hover:bg-[#8f0f0f] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
));
HeroBanner.displayName = "HeroBanner";

const BlogCard = memo(({ article, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06 }}
    className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all"
  >
    <Link to={`/blog/${article.slug}`} className="block">
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-white text-[#022279] text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm">
          {article.category}
        </span>
      </div>
      <div className="p-5">
        <div className="text-[12px] text-gray-500 mb-2">{article.date} / {article.readTime}</div>
        <h2 className="text-[#022279] group-hover:text-[#B11212] font-bold text-xl leading-snug mb-3 transition-colors">
          {article.title}
        </h2>
        <p className="text-gray-600 text-sm leading-[1.75]">{article.description}</p>
        <span className="inline-block mt-4 text-[#B11212] text-sm font-semibold">Read Article</span>
      </div>
    </Link>
  </motion.article>
));
BlogCard.displayName = "BlogCard";

const BlogPage = memo(() => (
  <div className="w-full min-h-screen bg-white font-[Inter,sans-serif]">
    <HeroBanner />

    <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-14">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch mb-12">
        <Link to={`/blog/${featured.slug}`} className="group lg:w-[55%] rounded-2xl overflow-hidden relative min-h-[360px]">
          <img
            src={featured.image}
            alt={featured.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <span className="inline-block bg-white text-[#022279] text-[11px] font-semibold px-3 py-1 rounded-full mb-4">
              Featured Guide
            </span>
            <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight mb-3">{featured.title}</h2>
            <p className="text-white/78 text-sm leading-[1.75] max-w-[560px]">{featured.description}</p>
          </div>
        </Link>

        <div className="lg:w-[45%] bg-[#f8f9fc] rounded-2xl p-6 sm:p-8 border border-gray-100">
          <span className="inline-block bg-white text-gray-500 text-[11px] px-4 py-1.5 rounded-full mb-4 font-medium">
            Consultancy Topics
          </span>
          <h2 className="text-[#022279] font-bold text-2xl sm:text-[30px] leading-tight mb-4">
            Blogs for smarter education, migration, and travel decisions
          </h2>
          <p className="text-gray-600 text-sm leading-[1.8] mb-6">
            These articles are written to help students, families, skilled workers, and travellers understand the steps before they apply, lodge documents, or move overseas.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {["Admissions", "Student Visas", "Skilled Migration", "Travel Planning"].map((topic) => (
              <div key={topic} className="rounded-xl bg-white border border-gray-100 p-4 text-[#022279] text-sm font-semibold">
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-7">
        <span className="inline-block bg-[#f0f0f8] text-gray-500 text-[11px] px-4 py-1.5 rounded-full mb-3 font-medium">
          Latest Articles
        </span>
        <h2 className="text-[#022279] font-bold text-2xl sm:text-[32px] leading-tight">
          Recent Migration & Travel Consultancy Blogs
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.map((article, index) => (
          <BlogCard key={article.slug} article={article} index={index} />
        ))}
      </div>
    </section>
  </div>
));
BlogPage.displayName = "BlogPage";

export default BlogPage;
