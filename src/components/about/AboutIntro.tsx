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
      <p className="text-lg text-white/80 leading-relaxed">
        Hackiware exists to close the gap between theoretical cybersecurity
        knowledge and real-world attack-defense thinking.
      </p>
    </div>
  </motion.section>
);
