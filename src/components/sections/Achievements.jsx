import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const stats = [
  { label: "Launch Partners", value: "18" },
  { label: "Motion Systems Deployed", value: "42" },
  { label: "Awards", value: "12" },
];

const springConfig = { stiffness: 120, damping: 20, mass: 0.5 };
const scrollSpring = { type: "spring", stiffness: 140, damping: 18, mass: 0.55 };

const AchievementsSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const rafRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const fgY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const statX = useTransform(smoothX, (v) => v / 42);
  const statY = useTransform(smoothY, (v) => v / 42);
  const statRotateX = useTransform(smoothY, (v) => v / 150);
  const statRotateY = useTransform(smoothX, (v) => v / -150);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    },
    []
  );

  const motionMultiplier = prefersReducedMotion || isMobile ? 0.5 : 1;

  const handleMouseMove = useCallback(
    (event) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        mouseX.set((event.clientX - window.innerWidth / 2) * motionMultiplier);
        mouseY.set((event.clientY - window.innerHeight / 2) * motionMultiplier);
      });
    },
    [mouseX, mouseY, motionMultiplier]
  );

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      className="mx-auto max-w-5xl px-4 py-24 text-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div style={{ y: fgY }} transition={scrollSpring}>
        <h1 className="font-orbitron text-3xl uppercase tracking-[0.4em] text-hacki-green">
          Achievements
        </h1>
        <p className="mt-4 text-white/70">
          Placeholder showcase for awards, shipped experiences, and press
          highlights. Populate this area with cards, marquees, or data
          visualizations when ready.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              x: statX,
              y: statY,
              rotateX: statRotateX,
              rotateY: statRotateY,
            }}
            whileHover={{
              y: -6,
              boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
            }}
          >
            <p className="text-3xl font-bold text-hacki-cyan">{stat.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/70">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;

