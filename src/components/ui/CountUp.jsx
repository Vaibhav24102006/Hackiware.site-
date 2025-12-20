import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

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

  return (
    <section className="relative bg-[#050505] py-24">
      {/* Soft gradient fade divider */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
        </div>
      </div>
    </section>
  );
};

export default CountUpMetrics;

