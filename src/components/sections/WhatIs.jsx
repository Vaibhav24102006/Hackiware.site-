import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useParallaxMouse } from "../../hooks/useParallaxMouse";

const WhatIs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const { xParallax: leftX, yParallax: leftY } = useParallaxMouse(40);
  const { xParallax: rightX, yParallax: rightY } = useParallaxMouse(50);

  const videoOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [1, 1, 0.6]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={containerRef} className="relative py-24 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Panel - Text Content */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              x: leftX,
              y: leftY,
            }}
          >
            <motion.p
              className="font-orbitron text-xs uppercase tracking-[0.4em] text-hacki-cyan"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              What Is Hackiware?
            </motion.p>

            <motion.h2
              className="text-3xl font-semibold lg:text-4xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Crafting Digital Experiences That{" "}
              <span className="text-hacki-green">Move You</span>
            </motion.h2>

            <motion.p
              className="text-base text-white/70 lg:text-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              We're a design and development studio obsessed with motion,
              interaction, and immersive web experiences. From glassy surfaces
              to cinematic animations, we build interfaces that feel alive.
            </motion.p>

            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {[
                "Scroll-driven animations & parallax effects",
                "3D integration with WebGL & Spline",
                "Micro-interactions that guide users",
                "Custom component libraries",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-hacki-cyan"></span>
                  <span className="text-sm text-white/80">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Panel - Video */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              x: rightX,
              y: rightY,
            }}
          >
            <motion.div
              className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
              style={{
                opacity: videoOpacity,
                scale: videoScale,
                y: videoY,
              }}
              whileHover={{
                boxShadow: "0 0 40px rgba(0, 224, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video w-full bg-gradient-to-br from-hacki-cyan/10 to-hacki-green/10 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full border-4 border-hacki-cyan/50 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-hacki-cyan"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-sm text-white/60">
                    Demo video placeholder
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
