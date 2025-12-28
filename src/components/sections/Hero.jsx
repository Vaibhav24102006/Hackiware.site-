import { motion } from 'framer-motion';
import GlassyButton from '../ui/GlassyButton';
import {
  containerVariants,
  headingVariants,
  paragraphVariants,
  buttonVariants,
  reducedMotionContainerVariants,
  reducedMotionVariants,
} from '../../lib/routeAnimations';
import { useEffect, useRef } from 'react';

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const Hero = () => {
  const videoSrc = "/Technology Background Template 1080_Copyright free _Intro template Full HD with sound_Free video.mp4";
  const shouldReduceMotion = useRef(prefersReducedMotion());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => {
      shouldReduceMotion.current = mediaQuery.matches;
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const container = shouldReduceMotion.current
    ? reducedMotionContainerVariants
    : containerVariants;
  const heading = shouldReduceMotion.current ? reducedMotionVariants : headingVariants;
  const paragraph = shouldReduceMotion.current ? reducedMotionVariants : paragraphVariants;
  const button = shouldReduceMotion.current ? reducedMotionVariants : buttonVariants;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] pb-0">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl"
        >
          <div className="flex flex-col gap-6">
            {/* Reserved space for animated badge/cursor element */}
            <div className="flex min-h-[3rem] items-center">
              <motion.div
                layout
                variants={button}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 backdrop-blur-sm w-fit"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-orbitron text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Hackiware Research Division
                </span>
              </motion.div>
            </div>

            <motion.h1
              layout
              variants={heading}
              className="text-5xl font-light leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl relative z-10"
            >
              Securing the{' '}
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 bg-clip-text font-medium text-transparent">
                Digital Frontier
              </span>
            </motion.h1>

            <motion.p
              layout
              variants={paragraph}
              className="max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl relative z-10"
            >
              A cybersecurity research collective preparing for national-scale events.
              Building defense systems through innovation, collaboration, and expertise.
            </motion.p>

            <motion.div
              layout
              variants={button}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <GlassyButton href="/events" glowColor="#00E0FF">
                View Events
              </GlassyButton>
              <GlassyButton
                href="/about"
                glowColor="#00FF85"
                className="border-white/10 bg-white/5 hover:bg-white/10"
              >
                Learn More
              </GlassyButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
