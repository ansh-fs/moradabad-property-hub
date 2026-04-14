import { MapPin, Headphones, Shield, FileText, Users } from "lucide-react";

const items = [
  { icon: MapPin, label: "Local Moradabad Experts" },
  { icon: Headphones, label: "Fast Response Support" },
  { icon: Shield, label: "Professional Management" },
  { icon: FileText, label: "Transparent Reporting" },
  { icon: Users, label: "Trusted by Property Owners" },
];

const TrustStrip = () => (
  <section className="bg-primary py-6">
    <div className="container-narrow px-4">
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-primary-foreground/90">
            <Icon size={18} className="text-gold" />
            <span className="text-sm font-medium whitespace-nowrap">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
