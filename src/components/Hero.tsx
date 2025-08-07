import heroImage from "@/assets/underwriteai-hero.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative gradient-bg">
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 enter">
            <p className="text-sm tracking-wider uppercase text-muted-foreground">Futuristic Corporate Trust</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight">
              UnderwriteAI — Secure, Intelligent Underwriting
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Transform risk assessment with AI-driven insights. Built for finance & insurance teams who demand precision, transparency, and speed.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#agent">
                <Button variant="hero" size="lg" className="hover-scale">Test the Agent</Button>
              </a>
              <a href="#how-it-works">
                <Button variant="glass" size="lg" className="hover-scale">How it works</Button>
              </a>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute -inset-6 rounded-3xl blur-2xl opacity-50" style={{ background: "var(--gradient-cta)" }} />
            <div className="glass-panel rounded-2xl overflow-hidden border relative">
              <img src={heroImage} alt="Abstract data waves morphing into a structured grid in electric blue and teal" className="w-full h-full object-cover" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
