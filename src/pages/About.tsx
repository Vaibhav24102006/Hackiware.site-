import AnimatedShaderBackground from '../components/ui/animated-shader-background';
import { AboutIntro } from '../components/about/AboutIntro';
import { MissionVisionValues } from '../components/about/MissionVisionValues';
import { Timeline } from '../components/ui/timeline';

const timelineData = [
  {
    title: "2023",
    content: (
      <div>
        <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
          Hackiware was founded to bridge the gap between theoretical cybersecurity
          education and real-world attack–defense thinking.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h4 className="text-cyan-400 font-semibold mb-2">Foundation</h4>
            <p className="text-white/60 text-sm">Educational platform concept</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h4 className="text-cyan-400 font-semibold mb-2">Mission</h4>
            <p className="text-white/60 text-sm">Bridge theory & practice</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
          Conducted national-level cybersecurity events and hands-on simulations
          across multiple institutions, reaching thousands of students.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h4 className="text-cyan-400 font-semibold mb-2">National Events</h4>
            <p className="text-white/60 text-sm">Hands-on simulations</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h4 className="text-cyan-400 font-semibold mb-2">Impact</h4>
            <p className="text-white/60 text-sm">1000+ students reached</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div>
        <p className="text-white/70 text-xs md:text-sm font-normal mb-8">
          Expanded into an education-first cybersecurity platform with blogs,
          community, and secure learning experiences for the next generation.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h4 className="text-cyan-400 font-semibold mb-2">Platform Evolution</h4>
            <p className="text-white/60 text-sm">Comprehensive ecosystem</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h4 className="text-cyan-400 font-semibold mb-2">Future</h4>
            <p className="text-white/60 text-sm">Next-gen defenders</p>
          </div>
        </div>
      </div>
    ),
  },
];

const About = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-screen overflow-hidden">
        <AnimatedShaderBackground />

        {/* Text overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-mono tracking-tight">
              About Hackiware
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-mono tracking-wide">
              We build immersive cybersecurity experiences that bridge theory
              and real-world defense — empowering the next generation of
              defenders.
            </p>
          </div>
        </div>

        {/* Fade mask */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black z-20" />
      </section>

      {/* CONTENT */}
      <AboutIntro />
      <MissionVisionValues />
      <Timeline data={timelineData} />
    </>
  );
};

export default About;

