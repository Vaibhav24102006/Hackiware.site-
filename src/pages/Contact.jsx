import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
  leftSectionVariants,
  rightSectionVariants,
  reducedMotionSectionVariants,
} from '../lib/routeAnimations';

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const Contact = () => {
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
          <h1 className="font-orbitron text-3xl uppercase tracking-[0.4em] text-hacki-cyan">
            Contact
          </h1>
        </motion.div>
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="mt-4 text-white/70 md:mt-0">
            Drop us a line at{" "}
            <a
              href="mailto:hello@hackiware.com"
              className="text-hacki-green underline"
            >
              hello@hackiware.com
            </a>{" "}
            or plug your preferred form here. We typically respond within 48 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
