import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";

const GlassyButton = ({
  children,
  onClick,
  href,
  className = "",
  glowColor = "#00E0FF",
  ...rest
}) => {
  const Component = href ? Link : "button";
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const buttonRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  }, []);

  const motionIntensity = prefersReducedMotion || isMobile ? 0.5 : 1;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, {
    stiffness: 150,
    damping: 18,
    mass: 0.4,
  });
  const glowY = useSpring(mouseY, {
    stiffness: 150,
    damping: 18,
    mass: 0.4,
  });

  const handlePointerMove = useCallback(
    (event) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const relativeX = event.clientX - rect.left - rect.width / 2;
      const relativeY = event.clientY - rect.top - rect.height / 2;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        mouseX.set(relativeX * motionIntensity);
        mouseY.set(relativeY * motionIntensity);
      });
    },
    [mouseX, mouseY, motionIntensity]
  );

  const handlePointerLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const glowTranslateHalfX = useTransform(glowX, (v) => v / 2);
  const glowTranslateHalfY = useTransform(glowY, (v) => v / 2);
  const glowTranslateQuarterX = useTransform(glowX, (v) => v / 4);
  const glowTranslateQuarterY = useTransform(glowY, (v) => v / 4);

  return (
    <motion.div
      whileHover={{ scale: 1.08, opacity: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="inline-flex"
    >
      <Component
        ref={buttonRef}
        {...(href ? { to: href } : {})}
        onClick={onClick}
        className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-lg transition duration-300 ${className}`}
        style={{
          boxShadow: `0 0 18px ${glowColor}55`,
          transform: "translate3d(0,0,0)",
        }}
        {...(!href ? { type: "button" } : {})}
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
        {...rest}
      >
        <span className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-60 transition duration-300 group-hover:opacity-80" />
        <motion.span
          className="absolute -inset-6 rounded-full opacity-0 transition duration-300 group-hover:opacity-60"
          style={{
            translateX: glowTranslateHalfX,
            translateY: glowTranslateHalfY,
            boxShadow: `0 0 25px ${glowColor}`,
          }}
        />
        <motion.span
          className="absolute inset-0 rounded-full opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            translateX: glowTranslateQuarterX,
            translateY: glowTranslateQuarterY,
            boxShadow: `0 0 20px ${glowColor}`,
          }}
        />
        <span
          className="relative z-10 flex items-center gap-2 tracking-wider"
          style={{ textShadow: `0 0 8px ${glowColor}` }}
        >
          {children}
        </span>
      </Component>
    </motion.div>
  );
};

export default GlassyButton;
