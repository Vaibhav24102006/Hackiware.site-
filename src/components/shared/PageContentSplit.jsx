import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
  leftSectionVariants,
  rightSectionVariants,
  reducedMotionSectionVariants,
} from '../../lib/routeAnimations';

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const PageContentSplit = ({ left, right, className = '' }) => {
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
    <div className={className}>
      {left && (
        <motion.div variants={leftVariant} initial="hidden" animate="visible">
          {left}
        </motion.div>
      )}
      {right && (
        <motion.div variants={rightVariant} initial="hidden" animate="visible">
          {right}
        </motion.div>
      )}
    </div>
  );
};

export default PageContentSplit;

