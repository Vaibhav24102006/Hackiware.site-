import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const FeaturedEventCard = () => {
  return (
    <section className="relative bg-[#050505] py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/60 via-cyan-900/20 to-fuchsia-900/20 p-8 md:p-12 backdrop-blur-xl"
          >
            {/* Border glow on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-fuchsia-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 p-3">
                  <Shield className="h-6 w-6 text-cyan-400" />
                </div>
                <span className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-400">
                  Flagship Event
                </span>
              </div>

              <h2 className="mb-4 text-3xl font-light text-white md:text-4xl lg:text-5xl">
                Kavach Suraksha 2.0
              </h2>
              
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Scaling national-level cyber defense challenges with advanced telemetry, rapid response drills, and live simulations. Command-center authority meets cutting-edge threat intelligence in Hackiware's flagship program.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium uppercase tracking-wider text-cyan-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/20">
                  View Details
                </button>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/60">
                  <span>National Scale</span>
                  <span className="h-4 w-px bg-white/20" />
                  <span>2024</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventCard;

