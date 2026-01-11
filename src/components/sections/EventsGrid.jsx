import React from 'react';
import Card from '../ui/card';
import { Calendar, MapPin, Globe, Zap } from 'lucide-react';

const events = [
  {
    title: 'Source Code Seminar',
    format: 'Workshop',
    description:
      'A hands-on workshop focused on secure coding patterns, threat modeling, and live reverse-engineering exercises for intermediate students.',
    mode: 'Offline',
    date: 'Quarterly',
    icon: Calendar,
  },
  {
    title: 'Kavach Suraksha',
    format: 'Simulation',
    description:
      'Multi-team defense simulation that replicates enterprise incident response and coordination under realistic constraints.',
    mode: 'Hybrid',
    date: 'Annual',
    icon: Zap,
  },
  {
    title: 'Capture The Flag (CTF)',
    format: 'CTF',
    description:
      'Skill-based competitions that encourage learning by solving real-world security challenges across web, binary, and crypto domains.',
    mode: 'Online',
    date: 'Monthly',
    icon: Globe,
  },
  {
    title: 'College Collaboration Program',
    format: 'Partnership',
    description:
      'Curriculum partnerships with local institutions to embed labs, projects, and mentorship into CS and engineering programs.',
    mode: 'Offline',
    date: 'Ongoing',
    icon: MapPin,
  },
];

const EventsGrid = () => {
  return (
    <section className="relative bg-[#050505] py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Upcoming & Recurring Events
            </h2>
            <p className="mt-2 text-white/70 max-w-3xl">
              Practical, education-first experiences across a spectrum of event formats —
              workshops, CTFs, large-scale simulations and formal college collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {events.map((e) => {
              const Icon = e.icon;
              return (
                <Card key={e.title} className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-white/5 p-3">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{e.title}</h3>
                        <p className="mt-1 text-sm text-white/70">{e.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-xs text-white/60">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                        <strong className="text-xs uppercase tracking-[0.12em] text-white/80">{e.format}</strong>
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                        <span className="text-xs">{e.mode}</span>
                      </span>
                    </div>
                    <div className="text-xs">{e.date}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;
