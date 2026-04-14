import { MapPin } from "lucide-react";

const areas = [
  { name: "New Moradabad", properties: "50+ Properties" },
  { name: "Buddhi Vihar", properties: "40+ Properties" },
  { name: "Ramganga Vihar", properties: "35+ Properties" },
  { name: "Kashiram Nagar", properties: "30+ Properties" },
  { name: "Awas Vikas", properties: "25+ Properties" },
  { name: "Other Major Societies", properties: "100+ Properties" },
];

const AreasSection = () => (
  <section id="areas-we-serve" className="section-padding bg-muted">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">Coverage</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Areas We Serve</h2>
        <p className="text-muted-foreground mt-3">Proudly serving property owners across Moradabad.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {areas.map(({ name, properties }) => (
          <div key={name} className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-md transition-all flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground">{name}</h3>
              <p className="text-muted-foreground text-sm">{properties}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AreasSection;
