import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import rohitImg from "@/assets/rohit-thakur.png";
import hemantImg from "@/assets/hemant-thakur.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Premium property management" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/90 to-navy/70" />
      </div>

      <div className="relative z-10 container-narrow px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6 border border-gold/30">
              Property Solution & Investment
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-tight font-bold text-primary-foreground mb-4">
              Your Trusted Property & Society Management{" "}
              <span className="text-gradient-gold">Experts</span>
            </h1>
            <p className="text-accent font-medium text-lg italic mb-4">
              "बनाये अपने निवेश को बेहतर"
            </p>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Led by <span className="text-gold font-semibold">Rohit Thakur</span> (Founder & Director) and{" "}
              <span className="text-gold font-semibold">Hemant Thakur</span> (Founder & Director), we help property owners manage, rent, maintain, and grow their property value with professional management services.
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

          {/* Right: Founders Photos */}
          <div className="animate-fade-up-delay-2 flex flex-col items-center gap-6">
            <div className="relative flex flex-col sm:flex-row items-center gap-6">
              {/* Rohit */}
              <div className="text-center group">
                <div className="relative w-44 h-44 md:w-52 md:h-52 mx-auto mb-3">
                  <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl group-hover:bg-accent/40 transition-colors duration-500" />
                  <img
                    src={rohitImg}
                    alt="Rohit Thakur - Founder & Director"
                    className="relative w-full h-full rounded-full object-cover object-top border-4 border-accent/50 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-primary-foreground font-heading font-bold text-lg">Rohit Thakur</h3>
                <p className="text-gold text-sm font-medium">Founder & Director</p>
              </div>

              {/* Hement */}
              <div className="text-center group">
                <div className="relative w-44 h-44 md:w-52 md:h-52 mx-auto mb-3">
                  <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl group-hover:bg-accent/40 transition-colors duration-500" />
                  <img
                    src={hemantImg}
                    alt="Hement Thakur - Founder & Director"
                    className="relative w-full h-full rounded-full object-cover object-top border-4 border-accent/50 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-primary-foreground font-heading font-bold text-lg">Hemant Thakur</h3>
                <p className="text-gold text-sm font-medium">Founder & Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
