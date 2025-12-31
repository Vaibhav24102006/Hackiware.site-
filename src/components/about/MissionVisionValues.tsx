import { Shield, Brain, Infinity } from "lucide-react";
import { ValueCard } from "./ValueCard";

export const MissionVisionValues = () => (
  <section className="bg-black py-28 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <ValueCard
          icon={<Shield />}
          title="Mission"
          text="To create hands-on cybersecurity environments that train
          students to think like attackers and defend like professionals."
          delay={0.0}
        />

        <ValueCard
          icon={<Brain />}
          title="Vision"
          text="A future where cybersecurity education is experiential,
          realistic, and aligned with how threats actually evolve."
          delay={0.15}
        />

        <ValueCard
          icon={<Infinity />}
          title="Values"
          text="Integrity, realism, community learning, and technical depth
          over surface-level certification culture."
          delay={0.3}
        />
      </div>
    </section>
);
