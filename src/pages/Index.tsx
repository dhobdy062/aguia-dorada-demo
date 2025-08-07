import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonial from "@/components/Testimonial";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
const Index = () => {
  // Structured Data (JSON-LD)
  const softwareLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "UnderwriteAI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  };
  useEffect(() => {
    // No-op, script for VAPI widget is loaded in index.html
  }, []);
  return <div>
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-heading text-lg font-bold">Aguila Dorada Demo</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how-it-works" className="story-link">How it works</a>
            <a href="#features" className="story-link">Features</a>
            <a href="#agent" className="story-link">Test the Agent</a>
          </div>
          <a href="#agent" className="md:hidden"><Button variant="hero" size="sm">Test the Agent</Button></a>
        </nav>
      </header>

      <main>
        <Hero />
        <section id="features" className="relative gradient-bg">
          <Features />
        </section>
        <HowItWorks />
        <Testimonial />

        {/* Agent CTA Section */}
        <section id="agent" className="relative gradient-bg">
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Talk with Underwriting</h2>
              <p className="text-muted-foreground">Launch the embedded voice agent to experience AI underwriting assistance.</p>
              <GlassCard className="p-4">
                <vapi-widget public-key="aff5e99d-8932-496d-a975-1a8925b60c8b" assistant-id="0686a71b-f6c9-4168-b472-95ffd0f2c32c" mode="voice" theme="dark" base-bg-color="#000000" accent-color="#14B8A6" cta-button-color="#000000" cta-button-text-color="#ffffff" border-radius="large" size="full" position="top-right" title="TALK WITH UNDERWRITING" start-button-text="Start" end-button-text="End Call" chat-first-message="Hey, How can I help you today?" chat-placeholder="Type your message..." voice-show-transcript="true" consent-required="true" consent-title="Terms and conditions" consent-content='By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.' consent-storage-key="vapi_widget_consent"></vapi-widget>
              </GlassCard>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} UnderwriteAI. All rights reserved.
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(softwareLd)
    }} />
    </div>;
};
export default Index;