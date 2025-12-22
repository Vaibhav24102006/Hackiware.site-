import { ContainerScroll } from '../ui/container-scroll-animation';

const EventsScrollSections = () => {
  const events = [
    {
      title: 'Source Code Seminar',
      narrative: 'Foundational education in secure coding practices, reverse engineering techniques, and adversarial simulation frameworks. Designed for students and practitioners seeking hands-on exposure to real-world security challenges.',
      metadata: {
        audience: 'Students & Practitioners',
        type: 'Educational Workshop',
        scale: 'Regional',
      },
      mediaClass: 'bg-gradient-to-br from-cyan-500/30 via-blue-500/10 to-black',
      tone: 'academic',
    },
    {
      title: 'Kavach Suraksha',
      narrative: 'Collaborative defense exercises focused on high-stakes, real-world threat scenarios with multi-team participation. Tactical training environments that simulate enterprise-level security operations and incident response.',
      metadata: {
        audience: 'Security Teams',
        type: 'Defense Exercise',
        scale: 'National',
      },
      mediaClass: 'bg-gradient-to-br from-emerald-500/25 via-cyan-500/10 to-black',
      tone: 'tactical',
    },
    {
      title: 'Kavach Suraksha 2.0',
      narrative: 'Scaling national-level cyber defense challenges with advanced telemetry, rapid response drills, and live simulations. Command-center authority meets cutting-edge threat intelligence in Hackiware\'s flagship program.',
      metadata: {
        audience: 'National Security Community',
        type: 'Flagship Program',
        scale: 'National',
      },
      mediaClass: 'bg-gradient-to-br from-fuchsia-500/25 via-cyan-500/10 to-black',
      tone: 'flagship',
    },
  ];

  return (
    <section className="relative bg-[#050505] py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-10">
          {events.map((event) => (
            <ContainerScroll
              key={event.title}
              titleComponent={
                <div className="space-y-4 max-w-4xl mx-auto">
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                    {event.title}
                  </h2>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                    {event.narrative}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs uppercase tracking-[0.2em] text-white/60">
                    <div className="flex items-center gap-2">
                      <span className="text-white/40">Audience</span>
                      <span className="text-white/80">{event.metadata.audience}</span>
                    </div>
                    <div className="h-4 w-px bg-white/20" />
                    <div className="flex items-center gap-2">
                      <span className="text-white/40">Type</span>
                      <span className="text-white/80">{event.metadata.type}</span>
                    </div>
                    <div className="h-4 w-px bg-white/20" />
                    <div className="flex items-center gap-2">
                      <span className="text-white/40">Scale</span>
                      <span className="text-white/80">{event.metadata.scale}</span>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <div className={`absolute inset-0 ${event.mediaClass}`} />
                <div className="relative z-10 flex h-full items-center justify-center p-8">
                  <p className="text-center text-white/80 text-sm md:text-base">
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

export default EventsScrollSections;
