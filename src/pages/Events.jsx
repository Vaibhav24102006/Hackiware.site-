import { motion } from "framer-motion";
import { ContainerScroll } from "../components/ui/container-scroll-animation";

const eventSections = [
  {
    title: "Source Code Seminar",
    description:
      "Deep dives into secure coding, reverse engineering, and adversarial simulations led by Hackiware researchers.",
    mediaClass: "bg-gradient-to-br from-cyan-500/30 via-blue-500/10 to-black",
  },
  {
    title: "Kavach Suraksha",
    description:
      "Collaborative defense exercises focused on high-stakes, real-world threat scenarios with multi-team participation.",
    mediaClass: "bg-gradient-to-br from-emerald-500/25 via-cyan-500/10 to-black",
  },
  {
    title: "Kavach Suraksha 2.0",
    description:
      "Scaling national-level cyber defense challenges with advanced telemetry, rapid response drills, and live simulations.",
    mediaClass: "bg-gradient-to-br from-fuchsia-500/25 via-cyan-500/10 to-black",
  },
];

const Events = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-400"
          >
            Events
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-4xl font-light text-white sm:text-5xl"
          >
            Precision-led cybersecurity experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/70"
          >
            Three signature programs showcasing Hackiware’s research, defense drills, and
            real-time response readiness.
          </motion.p>
        </div>

        <div className="mt-16 space-y-10">
          {eventSections.map((section, idx) => (
            <ContainerScroll
              key={section.title}
              titleComponent={
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="text-white/70">{section.description}</p>
                </div>
              }
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <div
                  className={`absolute inset-0 ${section.mediaClass}`}
                />
                <div className="relative z-10 flex h-full items-center justify-center">
                  <p className="text-center text-white/80 text-sm md:text-base px-6">
                    Media placeholder — replace with event visuals or clips
                  </p>
                </div>
              </div>
            </ContainerScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

