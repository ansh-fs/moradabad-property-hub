import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "./LeadForm";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Premium property in Moradabad" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/60" />
      </div>

      <div className="relative z-10 container-narrow px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6 border border-gold/30">
              #1 Property Management in Moradabad
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-tight font-bold text-primary-foreground mb-6">
              Moradabad's Trusted Property & Society Management{" "}
              <span className="text-gradient-gold">Experts</span>
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              We help property owners manage, rent, maintain, and grow their property value with professional management services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-gold text-primary-foreground font-semibold text-base px-8 py-6 hover:opacity-90 transition-opacity"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold text-base px-8 py-6"
                onClick={() => window.open("https://wa.me/91XXXXXXXXXX", "_blank")}
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp Now
              </Button>
            </div>
          </div>

          <div className="animate-fade-up-delay-2">
            <LeadForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
