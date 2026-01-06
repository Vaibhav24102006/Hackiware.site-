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

const ContactPage = () => {
  const shouldReduceMotion = useRef(prefersReducedMotion());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => {
      shouldReduceMotion.current = mediaQuery.matches;
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.title = 'Contact — Hackiware';
  }, []);

  const leftVariant = shouldReduceMotion.current
    ? reducedMotionSectionVariants
    : leftSectionVariants;
  const rightVariant = shouldReduceMotion.current
    ? reducedMotionSectionVariants
    : rightSectionVariants;

  return (
    <section className="mx-auto max-w-6xl px-4 py-24 text-white">
      {/* Hero / Intro */}
      <motion.div
        variants={leftVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mx-auto max-w-4xl"
      >
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/6 px-4 py-2 w-fit">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-orbitron uppercase tracking-[0.28em] text-cyan-300">Contact</span>
          </div>

          <h1 className="font-orbitron text-4xl md:text-5xl uppercase tracking-[0.28em] text-white">Get in touch</h1>

          <p className="max-w-2xl text-white/70">
            We collaborate with institutions, industry partners, and individuals to build practical
            cybersecurity experiences. Whether you're looking to arrange a workshop, partner on
            curriculum development, or request technical support, we're here to help.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <GlassyButton href="mailto:hello@hackiware.com" glowColor="#00FF85">Collaborate with Us</GlassyButton>
            <GlassyButton href="/events" glowColor="#00E0FF" className="border-white/10 bg-white/5">View Events</GlassyButton>
          </div>
        </div>
      </motion.div>

      <div className="my-12 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-hacki-cyan">Contact Details</h3>

          <div className="mt-4 space-y-4">
            <p className="text-white/70">Email: <a className="text-hacki-green underline" href="mailto:hello@hackiware.com">hello@hackiware.com</a></p>
            <p className="text-white/70">Location: Jaipur, India (National Outreach)</p>
            <p className="text-white/70">Phone: +91 — (available on request)</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-white/8 bg-white/3 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
              <h4 className="text-white font-semibold">Institution Partnerships</h4>
              <p className="text-white/70 text-sm">We co-develop curricula, run campus simulations, and provide instructor training.</p>
            </div>
            <div className="rounded-lg border border-white/8 bg-white/3 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
              <h4 className="text-white font-semibold">Industry Collaboration</h4>
              <p className="text-white/70 text-sm">Sponsor events, mentor students, and help shape practical assessments.</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-hacki-cyan">Where We Operate</h3>
          <p className="mt-2 text-white/70 text-sm">National Office — Jaipur, India</p>

          <div className="mt-4 rounded-lg overflow-hidden border border-white/8 bg-black/20 shadow-[0_20px_80px_rgba(34,211,238,0.03)]">
            <iframe
              title="Hackiware Office Location"
              src="https://maps.google.com/maps?q=Jaipur%2C%20India&output=embed"
              className="w-full h-64 md:h-96 filter brightness-90 contrast-95"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="mt-2 text-xs text-white/60">Map is for reference — reach out to schedule a visit.</p>
        </motion.div>
      </div>

      <div className="mt-12 mx-auto max-w-4xl">
        <div className="rounded-xl border border-white/8 bg-black/20 p-6 md:p-8 backdrop-blur-sm">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-xl font-semibold">Ready to collaborate?</h4>
              <p className="text-white/70 text-sm">Let's design practical experiences that prepare students and professionals for real-world security challenges.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <GlassyButton href="mailto:hello@hackiware.com" glowColor="#00FF85">Start a Collaboration</GlassyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
