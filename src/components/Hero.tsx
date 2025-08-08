import heroImage from "@/assets/underwriteai-hero.jpg";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative gradient-bg">
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 enter">
            <p className="text-sm tracking-wider uppercase text-muted-foreground">UNDERWRITING THAT'S RELIABLE</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight">
              UnderwriteAI — Secure, Intelligent Underwriting
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">Transform your underwriting department with AI-driven insights. Built for Aguila Dorada, a team who demands precision, transparency, and speed.</p>
            <div className="flex flex-wrap gap-3">
              {/* Replaced "Test the Agent" button with floating VAPI widget launcher */}
              <vapi-widget public-key="aff5e99d-8932-496d-a975-1a8925b60c8b" assistant-id="0686a71b-f6c9-4168-b472-95ffd0f2c32c" mode="voice" theme="dark" position="bottom-right" size="compact" title="TALK WITH UNDERWRITING" start-button-text="Start" end-button-text="End Call" chat-first-message="Hey, How can I help you today?" chat-placeholder="Type your message..." voice-show-transcript="true" consent-required="true" consent-title="Terms and conditions" consent-content='By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.' consent-storage-key="vapi_widget_consent" cta-button-color="#000000" cta-button-text-color="#ffffff"></vapi-widget>

              <a href="#how-it-works">
                <Button variant="glass" size="lg" className="hover-scale">How it works</Button>
              </a>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute -inset-6 rounded-3xl blur-2xl opacity-50" style={{
            background: "var(--gradient-cta)"
          }} />
            <div className="glass-panel rounded-2xl overflow-hidden border relative">
              <img src={heroImage} alt="Abstract data waves morphing into a structured grid in electric blue and teal" className="w-full h-full object-cover" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;