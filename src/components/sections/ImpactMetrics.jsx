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

const ImpactMetrics = () => {
  const metrics = [
    { value: 50, suffix: 'K+', label: 'Students Reached' },
    { value: 12, suffix: '+', label: 'Events Conducted' },
    { value: 30, suffix: '+', label: 'Institutions Collaborated' },
    { value: 3, suffix: '', label: 'Flagship Programs' },
  ];

  return (
    <section className="relative bg-[#050505] py-20 md:py-32 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-3 text-4xl font-light text-white md:text-5xl lg:text-6xl">
                  <CountUp end={metric.value} suffix={metric.suffix} />
                </div>
                <div className="h-px w-12 mx-auto bg-white/20 mb-3" />
                <p className="text-xs uppercase tracking-[0.3em] text-white/60 md:text-sm">
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

export default ImpactMetrics;

