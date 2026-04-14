import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "./LeadForm";

const FinalCTA = () => (
  <section id="contact" className="section-padding gradient-navy">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Manage Your Property <span className="text-gradient-gold">Professionally?</span>
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed mb-8">
            Let our experts handle your property while you focus on what matters. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gradient-gold text-primary-foreground font-semibold px-8 py-6 hover:opacity-90 transition-opacity"
              onClick={() => document.querySelector('#contact form input')?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold px-8 py-6"
              onClick={() => window.open("https://wa.me/91XXXXXXXXXX", "_blank")}
            >
              <MessageCircle className="mr-2" size={20} />
              WhatsApp Now
            </Button>
          </div>
        </div>
        <div>
          <div className="bg-card p-6 rounded-xl shadow-xl">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Request Callback</h3>
            <LeadForm variant="footer" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
