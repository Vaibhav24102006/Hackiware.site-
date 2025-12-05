import React from "react";
import { ContainerScroll } from "../../ui/container-scroll-animation";
import { motion } from "framer-motion";

const KavachSurakshaSection = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-hacki-dark">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4">
            <motion.p
              className="font-orbitron text-xs uppercase tracking-[0.5em] text-hacki-cyan"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Featured Event
            </motion.p>
            <motion.h1
              className="text-4xl font-bold text-white md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Kavach Suraksha{" "}
              <span className="block text-hacki-green">2.0</span>
            </motion.h1>
            <motion.p
              className="mx-auto max-w-2xl text-base text-white/70 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              A cybersecurity hackathon bringing together the brightest minds to
              build defense systems for the digital frontier
            </motion.p>
          </div>
        }
      >
        {/* Placeholder content - can be replaced with image, video, or Spline */}
        <div className="relative h-full w-full">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-hacki-cyan/20 via-transparent to-hacki-green/20 backdrop-blur-sm">
            <div className="text-center space-y-6">
              <div className="relative mx-auto h-32 w-32">
                <div className="absolute inset-0 rounded-full border-4 border-hacki-cyan animate-pulse"></div>
                <div className="absolute inset-2 rounded-full border-4 border-hacki-green animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-16 w-16 text-hacki-cyan"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">
                  Event Content Placeholder
                </p>
                <p className="text-sm text-white/60">
                  Replace with image, video, or interactive 3D scene
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
};

export default KavachSurakshaSection;
