import SplineScene from "../ui/splite";

const SplineSection = () => {
  const bulletPoints = [
    "Cyber defense prototypes tested with real-world threat models",
    "Human-centered control surfaces for rapid incident response",
    "Research-driven motion and 3D that stays performant",
    "Built for national-scale security events",
  ];

  return (
    <section className="relative bg-[#050505] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text Column - Left */}
            <div className="space-y-6">
              <p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-400">
                Interactive 3D Systems
              </p>
              <h2 className="text-3xl font-semibold text-white lg:text-4xl">
                Immersive threat defense, demonstrated in real-time
              </h2>
              <p className="text-base leading-relaxed text-white/70">
                Hackiware pairs 3D motion with cybersecurity expertise to showcase
                complex systems clearly—without sacrificing performance or clarity.
              </p>
              <ul className="space-y-3 text-white/80">
                {bulletPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spline Column - Right - Increased size */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_0_60px_rgba(0,224,255,0.2)]">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
              <div className="relative aspect-[16/10] w-full lg:h-[500px]">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default SplineSection;

