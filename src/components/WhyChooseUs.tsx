import { MapPin, Headphones, Wrench, MessageSquare, Users } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "Local Moradabad Experience", desc: "Deep knowledge of local property market, societies, and tenant preferences." },
  { icon: Headphones, title: "Fast Tenant Support", desc: "Quick response to tenant queries and issues, ensuring smooth operations." },
  { icon: Wrench, title: "Reliable Maintenance", desc: "Trusted network of service providers for all types of property maintenance." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Regular updates and clear reporting so you always know what's happening." },
  { icon: Users, title: "Dedicated Property Team", desc: "A personal team assigned to your property for focused, consistent management." },
];

const WhyChooseUs = () => (
  <section id="about" className="section-padding gradient-navy">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <span className="text-gold font-medium text-sm uppercase tracking-wider">Why Us</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2">Why Choose Us</h2>
        <p className="text-primary-foreground/70 mt-3 max-w-2xl mx-auto">We bring local expertise and professional standards to every property we manage.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="text-center group">
            <div className="w-16 h-16 mx-auto rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mb-4 group-hover:bg-gold/25 transition-colors">
              <Icon size={26} className="text-gold" />
            </div>
            <h3 className="font-heading font-semibold text-primary-foreground text-sm mb-2">{title}</h3>
            <p className="text-primary-foreground/60 text-xs leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
