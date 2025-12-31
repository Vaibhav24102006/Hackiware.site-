import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023",
    title: "Foundation",
    text: "Hackiware was founded to bridge gap between theory and real-world cybersecurity."
  },
  {
    year: "2024",
    title: "National Events",
    text: "Organized hands-on cybersecurity events and simulations across institutions."
  },
  {
    year: "2025",
    title: "Platform Evolution",
    text: "Expanded into an education-first cybersecurity ecosystem."
  }
];

export const AboutTimeline = () => (
  <section className="bg-black py-28 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Our Journey
      </h2>

      <div className="space-y-10">
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="border-l border-cyan-500/30 pl-6"
          >
            <span className="text-cyan-400 text-sm">{item.year}</span>
            <h3 className="text-xl text-white mt-1">{item.title}</h3>
            <p className="text-white/70 mt-2">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
