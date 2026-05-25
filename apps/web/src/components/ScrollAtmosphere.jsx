import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const ScrollAtmosphere = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const yOne = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const yTwo = useTransform(scrollYProgress, [0, 1], ["0%", "-36%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 28]);

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: yOne, rotate }}
        className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-[#022279]/[0.055] blur-3xl"
      />
      <motion.div
        style={{ y: yTwo }}
        className="absolute -right-20 top-[42vh] h-80 w-80 rounded-full bg-[#B11212]/[0.06] blur-3xl"
      />
    </div>
  );
};

export default ScrollAtmosphere;
