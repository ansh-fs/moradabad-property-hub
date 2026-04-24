import { MapPin } from "lucide-react";
import { LOCATIONS } from "@/data/contact";

const WorkingLocations = () => (
  <section id="working-locations" className="section-padding bg-muted/30">
    <div className="container-narrow text-center">
      <span className="text-gold font-medium text-sm uppercase tracking-wider">Where We Work</span>
      <h2 className="font-heading font-bold text-foreground text-3xl md:text-4xl mt-3 mb-3">
        Our <span className="text-gradient-gold">Working Locations</span>
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-10">
        We provide trusted property solutions across these cities.
      </p>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {LOCATIONS.map((loc) => (
          <div
            key={loc}
            className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-3 shadow-sm hover:shadow-md hover:border-gold transition-all"
          >
            <MapPin size={16} className="text-gold" />
            <span className="font-medium text-foreground text-sm md:text-base">{loc}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkingLocations;
