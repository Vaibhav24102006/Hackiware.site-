import { Shield, Brain, Infinity } from "lucide-react";
import { ValueCard } from "./ValueCard";

export const MissionVisionValues = () => (
  <section className="bg-black py-28 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <ValueCard
          icon={<Shield />}
          title="Mission"
          text="To build rigorous, hands-on cybersecurity training environments that produce professionals
          capable of anticipating, detecting, and mitigating real-world threats. We prioritize practical
          skill transfer and ethical responsibility over theoretical checklists."
          delay={0.0}
        />

        <ValueCard
          icon={<Brain />}
          title="Vision"
          text="A future in which cybersecurity education is immersive, industry-aligned and continuously
          iterated based on threat intelligence—so learners graduate ready for operational roles.
          We envision an open, collaborative ecosystem of learners and practitioners protecting critical systems."
          delay={0.15}
        />

        <ValueCard
          icon={<Infinity />}
          title="Values"
          text="Integrity, technical depth, community mentorship, and measurable impact. We favor
          reproducible learning, transparent practices, and long-term capability-building over short-term optics."
          delay={0.3}
        />
      </div>
    </section>
);
