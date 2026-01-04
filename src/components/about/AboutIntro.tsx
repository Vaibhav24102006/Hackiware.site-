import { motion } from "framer-motion";

export const AboutIntro = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-black py-24 px-6"
  >
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-lg text-white/80 leading-relaxed mb-4">
        Hackiware was founded in 2023 to bridge the gap between academic learning and
        industry requirements. What began as a small, purpose-driven initiative has
        grown into a platform delivering high-impact workshops, seminars, and
        hands-on training designed by experienced practitioners.
      </p>

      <p className="text-lg text-white/80 leading-relaxed">
        We focus on practical exposure, ethical responsibility, and community collaboration to
        prepare students and institutions for real-world cyber challenges.
      </p>
    </div>
  </motion.section>
);
