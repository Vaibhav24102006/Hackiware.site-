import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const team = [
  { name: "Rin Nakamura", role: "Motion Director" },
  { name: "Lex Armitage", role: "Systems Designer" },
  { name: "Zara Quill", role: "Interaction Lead" },
  { name: "Kai Mercer", role: "Visual Architect" },
];

const springConfig = { stiffness: 120, damping: 20, mass: 0.5 };
const scrollSpring = { type: "spring", stiffness: 140, damping: 18, mass: 0.55 };

const TeamScroller = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const rafRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const containerY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const containerScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const cardX = useTransform(smoothX, (v) => v / 40);
  const cardY = useTransform(smoothY, (v) => v / 40);
  const cardRotateX = useTransform(smoothY, (v) => v / 120);
  const cardRotateY = useTransform(smoothX, (v) => v / -120);

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
      className="py-20 text-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 text-center">
          <p className="font-orbitron text-xs uppercase tracking-[0.4em] text-hacki-cyan">
            Collective
          </p>
          <h2 className="mt-3 text-3xl font-semibold">Team Pulse</h2>
        </div>
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          style={{ y: containerY, scale: containerScale }}
          transition={scrollSpring}
        >
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...team, ...team].map((member, idx) => (
              <motion.div
                key={`${member.name}-${idx}`}
                className="min-w-[220px] rounded-2xl border border-white/10 bg-black/30 p-5"
                style={{
                  x: cardX,
                  y: cardY,
                  rotateX: cardRotateX,
                  rotateY: cardRotateY,
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 18px 50px rgba(0,0,0,0.4)",
                }}
              >
                <p className="text-lg font-semibold text-white">{member.name}</p>
                <p className="text-sm text-white/60">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamScroller;
