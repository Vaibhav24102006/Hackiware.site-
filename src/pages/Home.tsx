import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Hero from "../components/sections/Hero";
import SplineSection from "../components/sections/SplineSection";
import CountUpMetrics from "../components/ui/CountUp";
import QuoteSection from "../components/sections/QuoteSection";
import WhatWeDo from "../components/sections/WhatWeDo";
import WhyHackiware from "../components/sections/WhyHackiware";
import {
  containerVariants,
  reducedMotionContainerVariants,
} from "../lib/routeAnimations";

const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const Home = () => {
  const shouldReduceMotion = useRef(prefersReducedMotion());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => {
      shouldReduceMotion.current = mediaQuery.matches;
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const container = shouldReduceMotion.current
    ? reducedMotionContainerVariants
    : containerVariants;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <Hero />
      <WhatWeDo />
      <WhyHackiware />
      <QuoteSection />
      <SplineSection />
      <CountUpMetrics />
    </motion.div>
  );
};

export default Home;

