import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
  createPageTransition,
  pageTransitionConfig,
  reducedMotionPageTransition,
  reducedMotionConfig,
} from '../../lib/routeAnimations';

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const PageWrapper = ({ children, direction = 1 }) => {
  const shouldReduceMotion = useRef(prefersReducedMotion());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => {
      shouldReduceMotion.current = mediaQuery.matches;
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const variants = shouldReduceMotion.current
    ? reducedMotionPageTransition
    : createPageTransition(direction);

  const transition = shouldReduceMotion.current
    ? reducedMotionConfig
    : pageTransitionConfig;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;

