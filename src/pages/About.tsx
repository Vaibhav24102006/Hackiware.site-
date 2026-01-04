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
          Founded in 2023, Hackiware started as a practitioner-driven initiative to correct the
          disconnect between classroom theory and operational cybersecurity practice. Early efforts
          focused on tailored workshops, instructor-led labs, and localized awareness programs across
          partner colleges.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h4 className="text-cyan-400 font-semibold mb-2">Founders</h4>
            <p className="text-white/60 text-sm">Yash Sharma &amp; Himanshu Sharma — student founders with practitioner focus</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h4 className="text-cyan-400 font-semibold mb-2">Early Focus</h4>
            <p className="text-white/60 text-sm">Practical labs, peer mentorship, and curriculum integration pilots</p>
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
          In 2024 we launched KAVACH, our flagship national event combining live defensive exercises,
          capture-the-flag challenges, and instructor-led simulations. KAVACH validated our approach at
          scale, brought industry mentors into the loop, and helped formalize repeatable, credit-friendly
          learning modules for academic partners.
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
          By 2025 Hackiware evolved into an education-first platform publishing technical analysis,
          codified learning paths, and institution partnerships for integrated cybersecurity programs.
          Our emphasis is on measurable outcomes: skill acquisition, employability, and improved campus
          security posture.
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

const Leadership = () => (
  <section className="bg-black py-20">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Leadership</h3>
        <p className="text-white/70">Built by students and practitioners committed to education-first cybersecurity.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6 text-left">
          <h4 className="text-cyan-300 font-semibold">Yash Sharma</h4>
          <p className="text-white/70 text-sm">Founder &amp; CEO — Curriculum design and educational partnerships</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6 text-left">
          <h4 className="text-cyan-300 font-semibold">Himanshu Sharma</h4>
          <p className="text-white/70 text-sm">Co-Founder — Platform engineering &amp; event operations</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6 text-left">
          <h4 className="text-cyan-300 font-semibold">Nitika Jagwani</h4>
          <p className="text-white/70 text-sm">CFO &amp; Advisor — Growth and institutional outreach</p>
        </div>
      </div>
    </div>
  </section>
);

const Closing = () => (
  <section className="bg-[#050505] py-20">
    <div className="container mx-auto px-6 text-center max-w-4xl">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Join the mission</h3>
      <p className="text-white/70 mb-6">If you're an institution, industry partner, or an aspiring student, reach out to collaborate on curriculum, events, or research. We welcome partnerships that prioritize practical impact and measurable learning outcomes.</p>
    </div>
  </section>
);

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
      <Leadership />
      <Closing />
    </>
  );
};

export default About;

