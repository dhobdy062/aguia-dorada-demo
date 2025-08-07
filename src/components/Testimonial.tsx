import GlassCard from "./GlassCard";
import { Quote } from "lucide-react";

const Testimonial = () => (
  <section className="relative">
    <div className="container mx-auto px-6 py-16">
      <GlassCard className="enter">
        <div className="flex gap-4 items-start">
          <Quote className="text-accent" />
          <div>
            <p className="text-xl md:text-2xl leading-relaxed">
              “UnderwriteAI accelerated our underwriting cycle while improving model transparency. Our team trusts the outputs, and our clients trust us.”
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Alex Morgan — VP Risk, Axiom Insurance Group</p>
          </div>
        </div>
      </GlassCard>
    </div>
  </section>
);

export default Testimonial;
