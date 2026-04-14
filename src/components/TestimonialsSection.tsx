import { Star } from "lucide-react";

const testimonials = [
  { name: "Rajesh Sharma", service: "Society Management", text: "Property Solution transformed our society's management. Everything is organized and transparent now. Highly recommended!" },
  { name: "Priya Gupta", service: "Rental Management", text: "They found us a reliable tenant within a week and handle everything professionally. No more rental headaches!" },
  { name: "Amit Verma", service: "Property Maintenance", text: "As an NRI, managing my property was a nightmare. Their team takes care of everything and keeps me updated regularly." },
  { name: "Sunita Agarwal", service: "Tenant Management", text: "Professional, responsive, and trustworthy. They've made property management completely stress-free for our family." },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding gradient-navy">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <span className="text-gold font-medium text-sm uppercase tracking-wider">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2">What Our Clients Say</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {testimonials.map(({ name, service, text }) => (
          <div key={name} className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-gold text-gold" />)}
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">"{text}"</p>
            <div>
              <p className="font-heading font-semibold text-primary-foreground text-sm">{name}</p>
              <p className="text-gold text-xs">{service}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
