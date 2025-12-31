import { motion } from "framer-motion";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  delay?: number;
}

export const ValueCard = ({ icon, title, text, delay = 0 }: ValueCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
      delay
    }}
    className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
  >
    <div className="text-cyan-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-white/70 leading-relaxed">{text}</p>
  </motion.div>
);
