import GlassCard from "./GlassCard";

const steps = [
  { step: "01", title: "Connect Data", desc: "Securely connect underwriting guidelines, policy data, and risk profiles." },
  { step: "02", title: "Analyze & Explain", desc: "UnderwriteAI evaluates risk and provides transparent rationales." },
  { step: "03", title: "Decide & Automate", desc: "Approve, adjust, or route decisions with built-in workflows." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="relative">
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold">How It Works</h2>
        <p className="text-muted-foreground mt-2">A streamlined, auditable flow for modern underwriting teams.</p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-8 right-8 top-1/2 -translate-y-1/2 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(var(--accent) / 0.3), transparent)" }} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ step, title, desc }) => (
            <GlassCard key={step} className="enter">
              <div className="flex flex-col gap-3">
                <span className="text-sm tracking-widest text-accent font-semibold">{step}</span>
                <h3 className="font-heading text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
