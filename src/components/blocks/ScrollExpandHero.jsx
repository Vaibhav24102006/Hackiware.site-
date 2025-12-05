import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";

const ScrollExpandHero = ({
  mediaType = "image",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend = false,
}) => {

  return (
    <section className="relative overflow-hidden bg-[#02040a]">
      {/* Soft neon background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.25),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(168,85,247,0.22),_transparent_60%)]" />

      <div className="relative z-10 flex flex-col overflow-hidden pb-[420px] pt-[120px] md:pb-[520px] md:pt-[140px]">
        <ContainerScroll
          titleComponent={
            <div className="space-y-4 text-center">
              {date && (
                <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-cyan-300/80 md:text-xs">
                  {date}
                </p>
              )}
              {title && (
                <h1
                  className={`${
                    textBlend
                      ? "bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent"
                      : "text-cyan-100"
                  } text-3xl font-light leading-tight md:text-5xl lg:text-6xl`}
                >
                  {title}
                </h1>
              )}
              {scrollToExpand && (
                <p className="text-[10px] uppercase tracking-[0.38em] text-slate-200/70 md:text-xs">
                  {scrollToExpand}
                </p>
              )}
            </div>
          }
        >
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            {/* Background image + gradient overlay */}
            <div className="absolute inset-0">
              <img
                src={bgImageSrc}
                alt="Cyberpunk background"
                className="h-full w-full scale-105 object-cover object-center"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/50 to-cyan-900/40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.35),_transparent_55%)] opacity-70" />
            </div>

            {/* Foreground content */}
            <div className="relative z-10 flex h-full flex-col bg-black/40 backdrop-blur-xl md:flex-row">
              {/* Left text block */}
              <div className="flex flex-1 flex-col justify-between gap-6 border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8 lg:p-10">
                <div className="space-y-4 text-left">
                  <p className="text-[11px] font-mono uppercase tracking-[0.32em] text-cyan-300/80">
                    Hackiware // Immersive Interfaces
                  </p>
                  <h2 className="text-2xl font-light leading-snug text-slate-50 md:text-3xl lg:text-4xl">
                    Responsive cyberpunk surfaces engineered for cinematic scroll states and
                    hypersmooth motion.
                  </h2>
                  <p className="max-w-md text-xs leading-relaxed text-slate-300/80 md:text-sm">
                    Every interaction is tuned like a frame in a film: adaptive depth, neon
                    reflections, and scroll-driven choreography that turns ordinary UIs into
                    digital spaces you can feel.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px] uppercase tracking-[0.26em] text-slate-300/80">
                  <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-cyan-200">
                    Realtime Motion
                  </span>
                  <span className="rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1 text-fuchsia-200">
                    Neural-Aware Layouts
                  </span>
                  <span className="text-slate-400">Spline x Framer Motion</span>
                </div>
              </div>

              {/* Right media block */}
              <div className="relative flex flex-1 items-stretch">
                <div className="relative m-4 flex w-full items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/30 bg-black/60 shadow-[0_0_80px_rgba(34,211,238,0.5)]">
                  {mediaType === "video" ? (
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={mediaSrc}
                      alt="Scroll expansion media"
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  )}

                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-400/40" />
                  <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-cyan-400/10 blur-3xl opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};

export default ScrollExpandHero;
