import { Link } from "react-router-dom";
import { Building2, Home, MapPin, IndianRupee, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { properties } from "@/data/properties";

const FeaturedProperties = () => (
  <section id="properties" className="section-padding bg-muted">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">Properties</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Featured & Upcoming Properties</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Explore our handpicked selection of premium properties managed by our expert team.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(({ slug, title, type, status, price, location, beds, area, cover }) => {
          const Icon = type.toLowerCase().includes("villa") || type.toLowerCase().includes("house") ? Home : Building2;
          return (
            <Link
              key={slug}
              to={`/property/${slug}`}
              className="bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 overflow-hidden group block"
            >
              <div className="h-48 gradient-navy relative flex items-center justify-center overflow-hidden">
                {cover ? (
                  <img
                    src={cover}
                    alt={title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <Icon size={48} className="text-gold/30 group-hover:scale-110 transition-transform" />
                )}
                <span className={`absolute top-3 right-3 z-10 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                  status === "Featured" ? "bg-accent text-accent-foreground" : status === "Available" ? "bg-green-500 text-white" : "bg-primary-foreground/20 text-primary-foreground"
                }`}>
                  {status}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{type}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><MapPin size={12} /> {location}</span>
                  <span className="flex items-center gap-1"><Bed size={12} /> {beds} Beds</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                  <Home size={12} /> {area}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-foreground text-lg flex items-center"><IndianRupee size={16} />{price}</span>
                  <Button variant="link" className="p-0 h-auto text-accent font-medium text-sm">
                    Enquire Now →
                  </Button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturedProperties;
