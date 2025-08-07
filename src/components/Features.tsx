import { ShieldCheck, BrainCircuit, Timer } from "lucide-react";
import GlassCard from "./GlassCard";

const features = [
  {
    title: "Bank-grade Security",
    description: "End-to-end encryption, strict access controls, and full auditability.",
    icon: ShieldCheck,
  },
  {
    title: "AI Explainability",
    description: "Transparent model outputs with clear rationales you can trust.",
    icon: BrainCircuit,
  },
  {
    title: "Operational Efficiency",
    description: "Automate reviews and reduce cycle times by up to 70%.",
    icon: Timer,
  },
];

const Features = () => (
  <section className="relative">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map(({ title, description, icon: Icon }) => (
          <GlassCard key={title} className="enter">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg border" style={{ borderColor: "hsl(var(--glass-border))" }}>
                <Icon className="text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-1">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
