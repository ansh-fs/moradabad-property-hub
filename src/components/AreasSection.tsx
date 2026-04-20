import { Building2, Home, TrendingUp, MapPin, IndianRupee, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import skylineImg from "@/assets/property-skyline.jpg";

const properties = [
  { icon: Building2, title: "Skyline Residency", type: "3 BHK Apartment", status: "Featured", price: "₹45 Lakh", location: "Prime Location", beds: 3, area: "1250 sq.ft", image: skylineImg },
  { icon: Home, title: "Green Valley Villas", type: "Independent House", status: "Upcoming", price: "₹78 Lakh", location: "Gated Community", beds: 4, area: "2100 sq.ft" },
  { icon: Building2, title: "Royal Heights", type: "2 BHK Flat", status: "Featured", price: "₹32 Lakh", location: "Near Market", beds: 2, area: "980 sq.ft" },
  { icon: Home, title: "Palm Court Society", type: "Society Flats", status: "Upcoming", price: "₹55 Lakh", location: "Premium Society", beds: 3, area: "1450 sq.ft" },
  { icon: Building2, title: "Sunrise Apartments", type: "2 BHK Apartment", status: "Available", price: "₹28 Lakh", location: "Central Area", beds: 2, area: "900 sq.ft" },
  { icon: Home, title: "Heritage Homes", type: "3 BHK Villa", status: "Upcoming", price: "₹92 Lakh", location: "Premium Locality", beds: 3, area: "1800 sq.ft" },
];

const FeaturedProperties = () => (
  <section id="properties" className="section-padding bg-muted">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">Properties</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Featured & Upcoming Properties</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Explore our handpicked selection of premium properties managed by our expert team.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(({ icon: Icon, title, type, status, price, location, beds, area, image }) => (
          <div key={title} className="bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <div className="h-48 gradient-navy relative flex items-center justify-center overflow-hidden">
              {image ? (
                <img
                  src={image}
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
                <span className="font-heading font-bold text-foreground text-lg flex items-center"><IndianRupee size={16} />{price.replace("₹", "")}</span>
                <Button variant="link" className="p-0 h-auto text-accent font-medium text-sm">
                  Enquire Now →
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProperties;
