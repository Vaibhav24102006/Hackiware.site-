import AnimatedShaderBackground from '../components/ui/animated-shader-background';
import { AboutIntro } from '../components/about/AboutIntro';
import { MissionVisionValues } from '../components/about/MissionVisionValues';
import { AboutTimeline } from '../components/about/AboutTimeline';

const About = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-screen overflow-hidden">
        <AnimatedShaderBackground />

        {/* Text overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Hackiware
            </h1>
            <p className="text-lg md:text-xl text-white/80">
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
      <AboutTimeline />
    </>
  );
};

export default About;

