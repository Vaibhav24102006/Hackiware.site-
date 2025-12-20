import { ContainerScroll } from '../ui/container-scroll-animation';

const EventsScrollSections = () => {
  const events = [
    {
      title: 'Source Code Seminar',
      description: 'Deep dives into secure coding, reverse engineering, and adversarial simulations led by Hackiware researchers.',
      mediaClass: 'bg-gradient-to-br from-cyan-500/30 via-blue-500/10 to-black',
    },
    {
      title: 'Kavach Suraksha',
      description: 'Collaborative defense exercises focused on high-stakes, real-world threat scenarios with multi-team participation.',
      mediaClass: 'bg-gradient-to-br from-emerald-500/25 via-cyan-500/10 to-black',
    },
    {
      title: 'Kavach Suraksha 2.0',
      description: 'Scaling national-level cyber defense challenges with advanced telemetry, rapid response drills, and live simulations.',
      mediaClass: 'bg-gradient-to-br from-fuchsia-500/25 via-cyan-500/10 to-black',
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
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                    {event.title}
                  </h2>
                  <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto">
                    {event.description}
                  </p>
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

