
import React, { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "John Carter",
    role: "CEO, BrightTech",
    headline: "Amazing Results and Professional Team",
    text: "Their team helped us scale our digital presence and improve our brand visibility significantly. Highly recommended!",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
  },
  {
    name: "Emily Watson",
    role: "Marketing Manager",
    headline: "Incredible Support and Strategy",
    text: "We saw real growth after working with them. Their approach is strategic and the execution is flawless.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "David Miller",
    role: "Startup Founder",
    headline: "Exceeded Our Expectations",
    text: "Their expertise helped us reach new markets. The entire process was smooth and very professional.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    name: "Sophia Lee",
    role: "Product Manager",
    headline: "Truly Impactful Collaboration",
    text: "Working with their team was a game changer for our product launch and brand positioning.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  }
]

const Testimonal = () => {
  const testimonialRef = useRef(null)

  const scrollLeft = () => {
    testimonialRef.current?.scrollBy({ left: -520, behavior: "smooth" })
  }

  const scrollRight = () => {
    testimonialRef.current?.scrollBy({ left: 520, behavior: "smooth" })
  }

  return (
    <section className="py-16 bg-white">
      <div className="w-full px-6">

        {/* Header */}
        <div className="mb-10">
          <span className="inline-block border border-gray-300 text-gray-600 text-sm px-4 py-1 rounded-full mb-3">
            Success Stories
          </span>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#022279]"
              style={{ fontFamily:'Inter,sans-serif'}}
            >
              Look at our Successful Results
            </h2>

            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 rounded-full bg-[#B11212] flex items-center justify-center text-white hover:bg-[#8f0f0f] transition"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={testimonialRef}
          className="flex gap-6 overflow-x-auto pb-2 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[90vw] sm:w-[420px] lg:w-[480px] flex items-stretch bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="w-[130px] sm:w-[170px] flex-shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-4 sm:p-6 flex-1">
                <div>
                  <p className="font-bold text-[#022279] text-sm leading-snug mb-3">
                    {testimonial.headline}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-semibold text-[#B11212] text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonal;