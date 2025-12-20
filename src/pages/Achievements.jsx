import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const achievements = [
  {
    category: 'Recognition',
    title: 'Kavach Suraksha 2.0',
    description: 'Successfully organized and executed a national-level cybersecurity hackathon with participation from leading institutions.',
    year: '2024',
  },
  {
    category: 'Partnership',
    title: 'Institutional Collaborations',
    description: 'Established partnerships with premier technical institutions and cybersecurity organizations across India.',
    year: '2024',
  },
  {
    category: 'Media',
    title: 'Industry Recognition',
    description: 'Featured in leading cybersecurity publications and recognized for innovative research contributions.',
    year: '2024',
  },
];

const Achievements = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <p className="mb-4 font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-400">
              Our Milestones
            </p>
            <h1 className="text-4xl font-light text-white sm:text-5xl md:text-6xl">
              Achievements &{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                Recognitions
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg">
              Building a legacy of excellence in cybersecurity research and execution.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                {/* Timeline dot */}
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full border-2 border-cyan-400 bg-[#050505]" />
                
                {/* Content */}
                <div className="pb-8">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
                      {achievement.category}
                    </span>
                    <span className="text-xs text-white/50">{achievement.year}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="mb-6 text-white/70">
              Learn more about our research and initiatives
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium uppercase tracking-wider text-cyan-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/20"
            >
              About Hackiware
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
