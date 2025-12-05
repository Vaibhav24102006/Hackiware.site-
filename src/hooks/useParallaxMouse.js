import { useEffect, useState } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

const springConfig = {
  stiffness: 160,
  damping: 18,
  mass: 0.55,
  bounce: 0,
};

export const useParallaxMouse = (strength = 18) => {
  const [isActive, setIsActive] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const xParallax = useTransform(smoothX, (v) => v / strength);
  const yParallax = useTransform(smoothY, (v) => v / strength);
  const rotateX = useTransform(smoothY, (v) => v / (strength * 2.5));
  const rotateY = useTransform(smoothX, (v) => -v / (strength * 2.5));

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
      setIsActive(true);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
      setIsActive(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return {
    xParallax,
    yParallax,
    rotateX,
    rotateY,
    mouseX: smoothX,
    mouseY: smoothY,
    isActive,
  };
};
