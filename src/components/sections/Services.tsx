import { useState } from "react";
import { motion } from "framer-motion";
import { useParallaxMouse } from "../../hooks/useParallaxMouse";
import { useScrollDepth } from "../../hooks/useScrollDepth";
import SplineScene from "../ui/splite";
import NeonParticles from "../ui/NeonParticles";
import { cn } from "../../lib/utils";

interface Service {
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    title: "Motion Systems",
    desc: "Layered transitions, scroll choreography, and cinematic sequences.",
  },
  {
    title: "Cyber Visuals",
    desc: "Glassy surfaces, neon palettes, and immersive gradient lighting.",
  },
  {
    title: "Interactive Labs",
    desc: "Rapid experimentation with Framer Motion, WebGL, and sensor input.",
  },
];

const Services = () => {
  const { xParallax: leftX, yParallax: leftY } = useParallaxMouse(18);
  const { xParallax: rightX, yParallax: rightY } = useParallaxMouse(18);
  const { fgScale } = useScrollDepth();
  const [isSpotlightActive, setIsSpotlightActive] = useState(false);

  return (
    <section className="relative py-24 text-white overflow-hidden">
      <NeonParticles particleCount={200} />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Left Panel - Text Content */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              x: leftX,
              y: leftY,
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-400">
                Capabilities
              </p>
              <h2 className="mt-3 text-3xl font-semibold lg:text-4xl">
                What We <span className="text-[#00FF85]">Prototype</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-base text-white/70"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              We specialize in pushing the boundaries of web experiences with
              cutting-edge technologies and motion design.
            </motion.p>

            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(0, 224, 255, 0.2)",
                  }}
                >
                  <h3 className="text-lg font-semibold text-[#00FF85] transition-colors group-hover:text-cyan-400">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">{service.desc}</p>
                  <div className="absolute top-5 right-5 h-2 w-2 rounded-full bg-cyan-400 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Panel - Spline 3D Scene */}
          <motion.div
            className="relative flex items-center justify-center lg:h-[620px] w-full overflow-visible"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              x: rightX,
              y: rightY,
              scale: fgScale,
            }}
          >
            <div
              className="relative w-full h-[500px] lg:h-full rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden group"
              onMouseEnter={() => setIsSpotlightActive(true)}
              onMouseLeave={() => setIsSpotlightActive(false)}
            >
              <div className="absolute inset-0 z-0">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
              {/* Inner Glow */}
              <div className={cn(
                "absolute inset-0 bg-blue-500/10 transition-opacity duration-500 pointer-events-none",
                isSpotlightActive ? "opacity-100" : "opacity-0"
              )} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

