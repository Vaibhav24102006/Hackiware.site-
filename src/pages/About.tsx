import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import PageContentSplit from '../components/shared/PageContentSplit';
import {
  leftSectionVariants,
  rightSectionVariants,
  reducedMotionSectionVariants,
} from '../lib/routeAnimations';

const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const About = () => {
  const shouldReduceMotion = useRef(prefersReducedMotion());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => {
      shouldReduceMotion.current = mediaQuery.matches;
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const leftVariant = shouldReduceMotion.current
    ? reducedMotionSectionVariants
    : leftSectionVariants;
  const rightVariant = shouldReduceMotion.current
    ? reducedMotionSectionVariants
    : rightSectionVariants;

  return (
    <section className="mx-auto max-w-4xl px-4 py-24 text-white">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="font-orbitron text-4xl uppercase tracking-[0.3em] text-hacki-cyan">
            About Hackiware
          </h1>
        </motion.div>
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-5"
        >
          <p className="text-white/70">
            Hackiware is a motion-first creative studio pushing interfaces beyond
            two-dimensional canvases. We blend cyber aesthetics with measurable UX
            outcomes, shipping prototypes that feel sentient.
          </p>
          <p className="text-white/60">
            This page will evolve into a deep dive about our culture, process, and
            cross-disciplinary squads.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

