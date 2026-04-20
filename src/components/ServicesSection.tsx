import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const ServicesSection = () => (
  <section id="services" className="section-padding bg-background">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">What We Offer</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Services</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Comprehensive property management solutions tailored for property owners.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ slug, icon: Icon, title, shortDesc }) => (
          <div key={slug} className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 flex flex-col">
            <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{shortDesc}</p>
            <Button asChild variant="link" className="p-0 h-auto text-accent font-medium text-sm justify-start">
              <Link to={`/services/${slug}`}>Learn More →</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
