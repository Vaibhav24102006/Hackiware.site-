import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
  leftSectionVariants,
  rightSectionVariants,
  reducedMotionSectionVariants,
} from '../lib/routeAnimations';
import GlassyButton from '../components/ui/GlassyButton';

const prefersReducedMotion = (): boolean => {
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
            For partnerships, workshops, institutional collaborations, or technical inquiries, email us at
            <a
              href="mailto:hello@hackiware.com"
              className="text-hacki-green underline ml-2"
            >
              hello@hackiware.com
            </a>
          </p>

          <p className="mt-4 text-white/70">Location: New Delhi, India</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-white/8 bg-white/3 p-4">
              <h4 className="text-white font-semibold">Institution Partnerships</h4>
              <p className="text-white/70 text-sm">We co-develop curricula, run campus simulations, and provide instructor training.</p>
            </div>
            <div className="rounded-lg border border-white/8 bg-white/3 p-4">
              <h4 className="text-white font-semibold">Industry Collaboration</h4>
              <p className="text-white/70 text-sm">Sponsor events, mentor students, and help shape practical assessments.</p>
            </div>
          </div>

          <div className="mt-6">
            <GlassyButton href="mailto:hello@hackiware.com" glowColor="#00FF85">
              Collaborate with Us
            </GlassyButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

