import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EventCTA = () => {
  return (
    <section className="relative bg-[#050505] py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light text-white sm:text-4xl md:text-5xl">
              Building India's{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                Cybersecurity Talent Pipeline
              </span>
            </h2>
            
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              From Awareness to Action — Join us in shaping the future of cybersecurity education and defense.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <Link
                to="/contact"
                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-8 py-4 text-sm font-medium uppercase tracking-wider text-cyan-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/20"
              >
                Partner With Us
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-medium uppercase tracking-wider text-white/90 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                Host an Event
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventCTA;

