import React from "react";
import { GlowingEffect } from "../ui/glowing-effect";
import {
  ShieldCheck,
  GraduationCap,
  FlaskConical,
  Handshake,
  Award,
  LucideIcon,
} from "lucide-react";

interface Card {
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan: string;
}

const cards: Card[] = [
  {
    category: "National Cybersecurity Events",
    title: "Kavach Suraksha",
    description:
      "National-level defense exercise hosted with multi-institution participation and real threat simulations.",
    icon: ShieldCheck,
    colSpan: "lg:col-span-6",
  },
  {
    category: "National Cybersecurity Events",
    title: "Kavach Suraksha 2.0",
    description:
      "Scaling the initiative with deeper telemetry, incident drills, and broader academic engagement.",
    icon: ShieldCheck,
    colSpan: "lg:col-span-6",
  },
  {
    category: "Academic Outreach",
    title: "Source Code Seminar",
    description:
      "Student-first sessions on secure coding, reverse engineering, and real-world attack surfaces.",
    icon: GraduationCap,
    colSpan: "lg:col-span-4",
  },
  {
    category: "Research & Prototyping",
    title: "Hands-on Security Labs",
    description:
      "Practical environments to validate threat models, incident flows, and defensive architectures.",
    icon: FlaskConical,
    colSpan: "lg:col-span-4",
  },
  {
    category: "Collaborations & Impact",
    title: "Academic & Industry Alignment",
    description:
      "Partnering with institutions and practitioners to keep Hackiware research grounded in reality.",
    icon: Handshake,
    colSpan: "lg:col-span-4",
  },
  {
    category: "Recognitions",
    title: "Cybersecurity Awareness & Impact",
    description:
      "Contributions to national-scale cybersecurity awareness and capacity-building initiatives.",
    icon: Award,
    colSpan: "lg:col-span-4",
  },
];

const AchievementsGrid = () => {
  return (
    <div className="mt-16 md:mt-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className={`relative group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7 lg:p-8 ${card.colSpan}`}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
                variant="white"
              />

              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-white/50">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <Icon className="h-4 w-4 text-white/80" strokeWidth={1.4} />
                  </span>
                  <span className="line-clamp-2 text-left md:text-xs">
                    {card.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white md:text-xl">
                  {card.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/70">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsGrid;

