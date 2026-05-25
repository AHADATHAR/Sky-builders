import { memo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getBlogArticleBySlug, blogArticles } from "@/data/blogs";

const BlogDetailPage = memo(() => {
  const { slug } = useParams();
  const article = getBlogArticleBySlug(slug);
  const related = blogArticles.filter((item) => item.slug !== slug).slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-[70vh] px-4 sm:px-8 lg:px-16 pt-32 pb-16 font-[Inter,sans-serif]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#f0f0f8] text-gray-500 text-[12px] px-4 py-1.5 rounded-full mb-4">
            Article Not Found
          </span>
          <h1 className="text-[#022279] text-3xl sm:text-4xl font-bold mb-4">This blog article is unavailable</h1>
          <p className="text-gray-600 mb-7">The article may have moved, or the link may be incorrect.</p>
          <Link to="/blog" className="inline-flex bg-[#B11212] hover:bg-[#8f0f0f] text-white px-6 py-3 rounded-lg font-semibold">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-[Inter,sans-serif]">
      <section className="px-4 sm:px-6 pt-[110px]">
        <div className="relative min-h-[68vh] overflow-hidden rounded-3xl">
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02134f]/90 via-[#02134f]/58 to-black/20" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative z-10 min-h-[68vh] flex items-center px-6 sm:px-10 lg:px-14"
          >
            <div className="max-w-3xl">
              <Link to="/blog" className="inline-block bg-white/12 text-white/90 text-[12px] px-4 py-1.5 rounded-full mb-5 border border-white/20">
                Back to Blogs
              </Link>
              <div className="text-white/70 text-sm mb-4">
                {article.category} / {article.date} / {article.readTime}
              </div>
              <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                {article.title}
              </h1>
              <p className="text-white/80 text-sm sm:text-base leading-[1.85] max-w-2xl">
                {article.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {article.sections.map((section, index) => (
            <motion.article
              key={section.heading}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              className="mb-10 rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm"
            >
              <div className="text-[#B11212] font-bold text-sm mb-3">0{index + 1}</div>
              <h2 className="text-[#022279] text-2xl sm:text-3xl font-bold mb-4">{section.heading}</h2>
              <p className="text-gray-600 leading-[1.9]">{section.body}</p>
            </motion.article>
          ))}

          <div className="rounded-3xl bg-[#022279] p-6 sm:p-8 text-white mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Need advice for your own case?</h2>
            <p className="text-white/75 leading-[1.8] mb-6">
              Speak with Sky Consultant for education planning, migration guidance, visa documentation, and travel preparation.
            </p>
            <Link to="/contact" className="inline-flex bg-[#B11212] hover:bg-[#8f0f0f] px-6 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#022279] text-2xl sm:text-3xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((item) => (
              <Link key={item.slug} to={`/blog/${item.slug}`} className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                <div className="h-44 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="text-gray-500 text-xs mb-2">{item.category}</div>
                  <h3 className="text-[#022279] group-hover:text-[#B11212] font-bold leading-snug transition-colors">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});
BlogDetailPage.displayName = "BlogDetailPage";

export default BlogDetailPage;
