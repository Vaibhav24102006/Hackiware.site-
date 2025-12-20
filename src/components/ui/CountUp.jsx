import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import {
  containerVariants,
  cardVariants,
  reducedMotionContainerVariants,
  reducedMotionVariants,
} from '../../lib/routeAnimations';

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const CountUp = ({ end, prefix = '', suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const count = useMotionValue(0);
  const spring = useSpring(count, {
    damping: 60,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      count.set(end);
    }
  }, [isInView, end, count]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [spring]);

  return (
    <span ref={ref} className="inline-block">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

const CountUpMetrics = () => {
  const metrics = [
    { value: 50, suffix: 'K+', label: 'Students Educated' },
    { value: 30, suffix: '+', label: 'Academic Partners' },
    { value: 15, suffix: '+', label: 'Industrial Partners' },
  ];

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
  const card = shouldReduceMotion.current ? reducedMotionVariants : cardVariants;

  return (
    <section className="relative bg-[#050505] py-24">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-6xl"
        >
          <div className="grid gap-12 md:grid-cols-3">
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={card}
                className="text-center"
              >
                <div className="mb-4 text-5xl font-light text-white md:text-6xl lg:text-7xl">
                  <CountUp end={metric.value} suffix={metric.suffix} />
                </div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/60 md:text-base">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountUpMetrics;

