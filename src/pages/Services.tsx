import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const Services = () => (
  <div className="min-h-screen">
    <Header />

    <section className="pt-28 pb-16 gradient-navy">
      <div className="container-narrow px-4 text-center">
        <span className="text-gold font-medium text-sm uppercase tracking-wider">Our Services</span>
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
          Comprehensive Property <span className="text-gradient-gold">Management</span>
        </h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">End-to-end property management solutions by Rohit Thakur & Hemant Thakur's expert team.</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="space-y-8">
          {services.map(({ slug, icon: Icon, title, shortDesc, whatWeProvide }, i) => (
            <div key={slug} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
              <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                <div className="w-14 h-14 rounded-lg gradient-gold flex items-center justify-center mb-4">
                  <Icon size={26} className="text-primary-foreground" />
                </div>
                <h2 className="font-heading font-bold text-foreground text-2xl mb-3">{title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{shortDesc}</p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                    <Link to={`/services/${slug}`}>Learn More →</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
              <div className={`bg-card rounded-xl p-6 border border-border ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                <h4 className="font-heading font-semibold text-foreground mb-4">What's Included</h4>
                <ul className="space-y-3">
                  {whatWeProvide.slice(0, 5).map((f) => (
                    <li key={f} className="flex items-center gap-3 text-muted-foreground text-sm">
                      <CheckCircle size={16} className="text-accent shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding gradient-navy text-center">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Need a Custom Solution?</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Contact us for a personalized property management plan tailored to your needs.</p>
        <Link to="/contact">
          <Button size="lg" className="gradient-gold text-primary-foreground font-semibold px-8 py-6 hover:opacity-90 transition-opacity">
            Book Free Consultation
          </Button>
        </Link>
      </div>
    </section>

    <Footer />
    <FloatingWhatsApp />
    <StickyMobileCTA />
  </div>
);

export default Services;
