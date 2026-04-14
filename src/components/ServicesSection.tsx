import { Building2, Home, Users, Wrench, TrendingUp, Wallet, FileBarChart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Building2, title: "Society Property Management", desc: "Complete management of residential societies including maintenance, security, and daily operations." },
  { icon: Home, title: "Rental Management", desc: "Find quality tenants, handle agreements, and manage your rental property end-to-end." },
  { icon: Users, title: "Tenant Management", desc: "Screen tenants, manage complaints, and ensure smooth landlord-tenant relationships." },
  { icon: Wrench, title: "Property Maintenance", desc: "Regular upkeep, repairs, and maintenance to keep your property in top condition." },
  { icon: TrendingUp, title: "Flat Sale & Resale Support", desc: "Expert guidance and support for buying, selling, or reselling flats at the best value." },
  { icon: Wallet, title: "Rent Collection Support", desc: "Timely rent collection, follow-ups, and transparent financial reporting." },
  { icon: FileBarChart, title: "Owner Reporting", desc: "Detailed monthly reports on property status, finances, and tenant updates." },
  { icon: MapPin, title: "Site Visit Support", desc: "Scheduled property visits, inspections, and on-ground support when you need it." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-background">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">What We Offer</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Services</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Comprehensive property management solutions tailored for Moradabad's property owners.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
            <Button variant="link" className="p-0 h-auto text-accent font-medium text-sm">
              Learn More →
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
