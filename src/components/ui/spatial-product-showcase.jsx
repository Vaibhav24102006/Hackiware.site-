import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Radar } from "lucide-react";

const SpatialProductShowcase = () => {
  const [activeSide, setActiveSide] = useState("defense");

  const defenseMetrics = [
    { label: "MTTR", value: "22 min", width: "80%" },
    { label: "Coverage", value: "96%", width: "88%" },
    { label: "Response Rate", value: "99.2%", width: "92%" },
  ];

  const intelMetrics = [
    { label: "Signals Correlated", value: "1.2M+", width: "82%" },
    { label: "Threat Feeds", value: "48", width: "70%" },
    { label: "Readiness", value: "High", width: "76%" },
  ];

  const isDefense = activeSide === "defense";

  return (
    <section className="mt-16 md:mt-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-900/30 via-slate-900/70 to-fuchsia-900/20 px-6 py-8 md:px-10 md:py-10">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12">
          <div className="flex w-full flex-col gap-6 lg:max-w-xs">
            <p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-300/80">
              Spatial Intelligence
            </p>
            <h2 className="text-2xl font-light text-white md:text-3xl">
              Defense Systems & Threat Intelligence
            </h2>
            <p className="text-sm text-white/70 md:text-base">
              A dual-surface view of Hackiware's operational posture: hardened defense
              systems on the left, live threat intelligence on the right.
            </p>

            <div className="mt-2 inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/40 p-1 text-xs font-medium text-white/70">
              <button
                type="button"
                onClick={() => setActiveSide("defense")}
                className={`flex-1 rounded-full px-3 py-1.5 transition-colors ${
                  isDefense ? "bg-white text-black" : "text-white/70"
                }`}
              >
                Defense Systems
              </button>
              <button
                type="button"
                onClick={() => setActiveSide("intel")}
                className={`flex-1 rounded-full px-3 py-1.5 transition-colors ${
                  !isDefense ? "bg-white text-black" : "text-white/70"
                }`}
              >
                Threat Intelligence
              </button>
            </div>
          </div>

          <div className="grid w-full gap-6 lg:grid-cols-2">
            <motion.div
              key="defense-panel"
              className={`relative flex flex-col justify-between rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 backdrop-blur-xl ${
                isDefense ? "ring-1 ring-cyan-400/50" : "opacity-70"
              }`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: isDefense ? 1 : 0.8, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-cyan-400/15 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-cyan-200">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Defense Systems
                  </div>
                  <p className="text-sm text-white/70">
                    Live readiness of perimeter, internal, and identity controls.
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {defenseMetrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-1"
                  >
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/60">
                      <span>{metric.label}</span>
                      <span className="text-white/80">{metric.value}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400"
                        animate={{ width: isDefense ? metric.width : "40%" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              key="intel-panel"
              className={`relative flex flex-col justify-between rounded-2xl border border-white/10 bg-black/30 p-5 md:p-6 backdrop-blur-xl ${
                !isDefense ? "ring-1 ring-fuchsia-400/50" : "opacity-75"
              }`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: !isDefense ? 1 : 0.85, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-fuchsia-400/15 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-fuchsia-100">
                    <Radar className="h-3.5 w-3.5" />
                    Threat Intelligence
                  </div>
                  <p className="text-sm text-white/70">
                    Correlated signals, anomalies, and hunting-ready insights.
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {intelMetrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-1"
                  >
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/60">
                      <span>{metric.label}</span>
                      <span className="text-white/80">{metric.value}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400"
                        animate={{ width: !isDefense ? metric.width : "45%" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpatialProductShowcase;

