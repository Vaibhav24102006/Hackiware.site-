import { motion } from 'framer-motion';
import {
  containerVariants,
  headingVariants,
  paragraphVariants,
  reducedMotionContainerVariants,
  reducedMotionVariants,
} from '../../lib/routeAnimations';
import { useEffect, useRef } from 'react';

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const QuoteSection = () => {
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

  return (
    <section className="relative bg-gradient-to-b from-[#050505] via-[#0a0a0f] to-[#050505] py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,255,0.08),_transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-6xl"
        >
          {/* Single flex column container - no overlap */}
          <div className="flex flex-col gap-8 md:gap-12">
            {/* Heading - reserved space */}
            <motion.div variants={heading} className="flex-shrink-0">
              <div className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-white/90 leading-none tracking-tight">
                HACKIWARE
              </div>
            </motion.div>

            {/* Divider - only on desktop, in flow */}
            <div className="hidden md:block h-px w-full bg-white/10" />

            {/* Quote content - reserved space, no absolute positioning */}
            <div className="flex-shrink-0">
              {/* Quote mark - in flow, reserved space */}
              <div className="text-6xl md:text-7xl lg:text-8xl font-light text-cyan-400/30 leading-none mb-6 h-16 md:h-20 lg:h-24 flex items-start">
                "
              </div>

              {/* Paragraphs - in flow, reserved space */}
              <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed">
                <motion.p variants={paragraph}>
                  At Hackiware, we build immersive cybersecurity experiences that bridge theory and real-world defense.
                </motion.p>
                <motion.p variants={paragraph}>
                  In an era where digital threats evolve faster than traditional learning models, we believe education must be experiential, interactive, and grounded in reality.
                </motion.p>
                <motion.p variants={paragraph}>
                  Through national-scale events, hands-on simulations, and motion-driven interfaces, Hackiware empowers students to not just learn cybersecurity — but to experience how it operates in real time.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;


