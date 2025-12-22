import { useState } from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Activity } from "lucide-react";

const CommandCenter = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [ceremonialTier, setCeremonialTier] = useState("gold");
  const [viewMode, setViewMode] = useState("executive");

  const categories = [
    { id: "all", label: "All Milestones" },
    { id: "events", label: "Events" },
    { id: "research", label: "Research" },
    { id: "partnerships", label: "Partnerships" },
  ];

  const metrics = [
    { label: "MTTR", value: "22 min", icon: Activity },
    { label: "Incidents Handled", value: "1,247", icon: TrendingUp },
    { label: "Coverage %", value: "96%", icon: Award },
  ];

  return (
    <section className="mt-16 md:mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Left Panel - Sticky */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="space-y-6 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
              {/* Category Selector */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/50">
                  Category
                </p>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                        selectedCategory === cat.id
                          ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ceremonial Tier */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/50">
                  Ceremonial Tier
                </p>
                <div className="space-y-2">
                  {["bronze", "silver", "gold"].map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setCeremonialTier(tier)}
                      className={`w-full rounded-lg px-3 py-2 text-left text-sm capitalize transition-colors ${
                        ceremonialTier === tier
                          ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* View Toggle */}
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/50">
                  View
                </p>
                <div className="space-y-2">
                  {["executive", "analyst"].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setViewMode(mode)}
                      className={`w-full rounded-lg px-3 py-2 text-left text-sm capitalize transition-colors ${
                        viewMode === mode
                          ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Intelligence Metrics */}
          <div className="space-y-6">
            <div>
              <p className="mb-4 font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-400">
                Intelligence Metrics
              </p>
              <h2 className="text-2xl font-light text-white md:text-3xl">
                Operational Readiness
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                        <Icon className="h-4 w-4 text-cyan-400" />
                      </div>
                      <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                        {metric.label}
                      </span>
                    </div>
                    <p className="text-3xl font-light text-white">{metric.value}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Next Recommended Milestone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6 backdrop-blur-xl"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-cyan-300">
                Next Recommended Milestone
              </p>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Expand Threat Intelligence Coverage
              </h3>
              <p className="text-sm text-white/70">
                Increase correlation signals to 2M+ and integrate 12 additional threat feeds
                for enhanced readiness.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommandCenter;

