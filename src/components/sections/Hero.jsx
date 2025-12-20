import { motion } from 'framer-motion';
import GlassyButton from '../ui/GlassyButton';

const Hero = () => {
  const videoSrc = "/Technology Background Template 1080_Copyright free _Intro template Full HD with sound_Free video.mp4";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] pb-0">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark Overlay for Readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content - Center-left aligned */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-orbitron text-xs uppercase tracking-[0.3em] text-cyan-300">
                Hackiware Research Division
              </span>
            </motion.div>

            {/* Big Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl font-light leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Securing the{' '}
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 bg-clip-text font-medium text-transparent">
                Digital Frontier
              </span>
            </motion.h1>

            {/* Short Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
            >
              A cybersecurity research collective preparing for national-scale events. 
              Building defense systems through innovation, collaboration, and expertise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <GlassyButton href="/events" glowColor="#00E0FF">
                View Events
              </GlassyButton>
              <GlassyButton
                href="/about"
                glowColor="#00FF85"
                className="border-white/10 bg-white/5 hover:bg-white/10"
              >
                Learn More
              </GlassyButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
