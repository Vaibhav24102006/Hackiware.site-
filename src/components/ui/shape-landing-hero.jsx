import { motion } from 'framer-motion';

const ShapeLandingHero = () => {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#050505] py-24">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,224,255,0.15),_transparent_70%)]" />
      
      {/* Geometric shapes - Visual transition only */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large circle */}
        <motion.div
          className="absolute -right-32 top-1/4 h-96 w-96 rounded-full border border-cyan-400/20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Medium hexagon */}
        <motion.div
          className="absolute left-1/4 top-1/2 h-64 w-64 rotate-45 border border-cyan-400/15"
          animate={{
            rotate: [45, 405],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Small triangle */}
        <motion.div
          className="absolute right-1/3 bottom-1/4 h-32 w-32 border-l-2 border-t-2 border-cyan-400/25"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  );
};

export default ShapeLandingHero;

