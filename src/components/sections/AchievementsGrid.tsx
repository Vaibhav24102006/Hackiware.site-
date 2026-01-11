import React from "react";
import { GlowingEffect } from "../ui/glowing-effect";
import {
  ShieldCheck,
  GraduationCap,
  FlaskConical,
  Handshake,
  Award,
  Target,
  Zap,
  LucideIcon,
} from "lucide-react";

interface Card {
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan: string;
  isDominant?: boolean;
  period: "past" | "present" | "future";
}

const pastCards: Card[] = [
  {
    category: "Proven Work",
    title: "College Security Workshops",
    description:
      "Instructor-led workshops covering web exploitation, binary reversing, and real-world red-team tradecraft — designed to mirror live adversary behavior and build foundational offensive security skills.",
    icon: GraduationCap,
    colSpan: "lg:col-span-4",
    period: "past",
  },
  {
    category: "Proven Work",
    title: "Early CTF Competitions",
    description:
      "Capture-the-flag events focused on web application security, cryptography, and network forensics — providing hands-on exposure to common vulnerability classes and exploitation techniques.",
    icon: Target,
    colSpan: "lg:col-span-4",
    period: "past",
  },
  {
    category: "Proven Work",
    title: "University Collaborations",
    description:
      "Strategic partnerships with technical institutions to deliver curriculum-aligned security training, lab infrastructure, and mentorship programs for cybersecurity education.",
    icon: Handshake,
    colSpan: "lg:col-span-4",
    period: "past",
  },
];

const presentCards: Card[] = [
  {
    category: "Active Programs",
    title: "National-Scale Cybersecurity Simulations",
    description:
      "Large-scale defense exercises with multi-institution participation, real-world threat scenarios, and advanced telemetry. Instructor-led exploit labs covering web exploitation, binary reversing, and red-team tradecraft — designed to mirror live adversary behavior and validate enterprise incident response workflows.",
    icon: ShieldCheck,
    colSpan: "lg:col-span-8",
    isDominant: true,
    period: "present",
  },
  {
    category: "Active Programs",
    title: "Guided Exploit Development Labs",
    description:
      "Hands-on exploit development sessions covering stack-based buffer overflows, format string vulnerabilities, and modern mitigation bypass techniques — with guided walkthroughs and automated assessment checkpoints.",
    icon: FlaskConical,
    colSpan: "lg:col-span-4",
    period: "present",
  },
  {
    category: "Active Programs",
    title: "Incident Response Simulations",
    description:
      "Multi-team coordination exercises simulating enterprise SOC environments, threat hunting workflows, and containment procedures — emphasizing measurable skill checkpoints and post-incident debriefs.",
    icon: Zap,
    colSpan: "lg:col-span-4",
    period: "present",
  },
  {
    category: "Active Programs",
    title: "Threat Intelligence Exercises",
    description:
      "Practical threat intelligence analysis labs focusing on IOC correlation, malware analysis, and attribution techniques — designed to build analytical skills for real-world threat hunting operations.",
    icon: Award,
    colSpan: "lg:col-span-4",
    period: "present",
  },
];

const futureCards: Card[] = [
  {
    category: "Roadmap",
    title: "SOC-in-a-Box Labs",
    description:
      "Self-contained Security Operations Center environments with pre-configured SIEM, log aggregation, and threat detection rules — enabling students to practice blue-team operations in isolated, realistic environments.",
    icon: ShieldCheck,
    colSpan: "lg:col-span-4",
    period: "future",
  },
  {
    category: "Roadmap",
    title: "Red/Blue Team Live Ranges",
    description:
      "Dedicated network ranges for adversarial simulation exercises, allowing red teams to practice attack techniques while blue teams develop detection and response capabilities in controlled, monitored environments.",
    icon: Target,
    colSpan: "lg:col-span-4",
    period: "future",
  },
  {
    category: "Roadmap",
    title: "National Cyber Defense Drills",
    description:
      "Large-scale, multi-institution cyber defense exercises simulating national-level threat scenarios, cross-organizational coordination, and crisis management protocols — preparing teams for real-world critical infrastructure defense.",
    icon: ShieldCheck,
    colSpan: "lg:col-span-4",
    period: "future",
  },
];

const AchievementsGrid = () => {
  const renderCard = (card: Card) => {
    const Icon = card.icon;
    return (
      <div
        key={card.title}
        className={`relative group overflow-hidden rounded-2xl border ${
          card.isDominant
            ? "border-cyan-400/30 bg-gradient-to-br from-cyan-900/20 via-black/40 to-fuchsia-900/20 lg:col-span-8"
            : "border-white/10 bg-white/[0.03]"
        } ${card.isDominant ? "p-8 md:p-10 lg:p-12" : "p-6 md:p-7 lg:p-8"} ${card.colSpan}`}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={card.isDominant ? 4 : 3}
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

          <h3
            className={`font-semibold text-white ${
              card.isDominant
                ? "text-2xl md:text-3xl lg:text-4xl"
                : "text-lg md:text-xl"
            }`}
          >
            {card.title}
          </h3>

          <p
            className={`leading-relaxed text-white/70 ${
              card.isDominant ? "text-base md:text-lg" : "text-sm"
            }`}
          >
            {card.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-16 md:mt-20">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="mb-3 text-2xl font-light text-white md:text-3xl">
          Applied Programs
        </h2>
        <p className="text-base text-white/70 md:text-lg">
          What we've executed, what we're running, and what we're building next.
        </p>
      </div>

      {/* Past - Proven Work */}
      <div className="mb-16">
        <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-white/50">
          Proven Work
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {pastCards.map(renderCard)}
        </div>
      </div>

      {/* Present - Active Programs */}
      <div className="mb-16">
        <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-white/50">
          Active Programs
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {presentCards.map(renderCard)}
        </div>
      </div>

      {/* Future - Roadmap */}
      <div>
        <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-white/50">
          Roadmap
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {futureCards.map(renderCard)}
        </div>
      </div>
    </div>
  );
};

export default AchievementsGrid;
