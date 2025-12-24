import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import EventsScrollSections from "../components/sections/EventsScrollSections";
import ImpactMetrics from "../components/sections/ImpactMetrics";
import FeaturedEventCard from "../components/sections/FeaturedEventCard";
import EventCTA from "../components/sections/EventCTA";
import {
  leftSectionVariants,
  rightSectionVariants,
  reducedMotionSectionVariants,
} from "../lib/routeAnimations";

const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const Events = () => {
  const shouldReduceMotion = useRef(prefersReducedMotion());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => {
      shouldReduceMotion.current = mediaQuery.matches;
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const leftVariant = shouldReduceMotion.current
    ? reducedMotionSectionVariants
    : leftSectionVariants;
  const rightVariant = shouldReduceMotion.current
    ? reducedMotionSectionVariants
    : rightSectionVariants;

  return (
    <section className="relative min-h-screen bg-[#050505]">
      {/* Premium Narrative Hero */}
      <div className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#050505] pt-32 pb-24">
        {/* Subtle gradient noise background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,224,255,0.08),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAyNGMwIDYuNjI3LTUuMzczIDEyLTEyIDEycy0xMi01LjM3My0xMi0xMiA1LjM3My0xMiAxMi0xMiAxMiA1LjM3MyAxMiAxMnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvZz48L3N2Zz4=')] opacity-20" />
        
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              variants={leftVariant}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.p
                variants={rightVariant}
                initial="hidden"
                animate="visible"
                className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-400"
              >
                Events
              </motion.p>
              
              <motion.h1
                variants={leftVariant}
                initial="hidden"
                animate="visible"
                className="text-5xl font-light leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
              >
                Precision-led{' '}
                <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 bg-clip-text text-transparent">
                  Cybersecurity Experiences
                </span>
              </motion.h1>
              
              <motion.p
                variants={rightVariant}
                initial="hidden"
                animate="visible"
                className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
              >
                Three signature programs showcasing Hackiware's research, defense drills, and
                real-time response readiness.
              </motion.p>

              <motion.div
                variants={rightVariant}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap items-center justify-center gap-4 pt-6"
              >
                <Link
                  to="#events"
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium uppercase tracking-wider text-cyan-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/20"
                >
                  Explore Events
                </Link>
                <Link
                  to="#kavach-2"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium uppercase tracking-wider text-white/90 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  Flagship: Kavach Suraksha 2.0
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Event Timeline - Scroll Showcase */}
      <div id="events">
        <EventsScrollSections />
      </div>

      {/* Impact Metrics Strip */}
      <ImpactMetrics />

      {/* Featured Event Card - Kavach Suraksha 2.0 */}
      <div id="kavach-2">
        <FeaturedEventCard />
      </div>

      {/* Event CTA - Closing */}
      <EventCTA />
    </section>
  );
};

export default Events;

