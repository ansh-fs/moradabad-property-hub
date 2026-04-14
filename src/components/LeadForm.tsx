import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const propertyTypes = ["Flat/Apartment", "Independent House", "Society", "Commercial", "Plot/Land"];
const areas = ["New Moradabad", "Buddhi Vihar", "Ramganga Vihar", "Kashiram Nagar", "Awas Vikas", "Other"];
const services = ["Society Management", "Rental Management", "Tenant Management", "Property Maintenance", "Flat Sale/Resale", "Rent Collection", "Other"];

interface LeadFormProps {
  variant?: "hero" | "footer";
}

const LeadForm = ({ variant = "hero" }: LeadFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: "",
    area: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({ title: "Please fill in your name and phone number", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you! We'll contact you shortly.", description: "Our team will reach out within 24 hours." });
    setFormData({ name: "", phone: "", propertyType: "", area: "", service: "" });
  };

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${isHero ? "bg-card p-6 rounded-xl shadow-xl border border-border" : "space-y-4"}`}>
      {isHero && <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Get Free Consultation</h3>}
      <Input
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="bg-background"
      />
      <Input
        placeholder="Phone Number"
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="bg-background"
      />
      <Select value={formData.propertyType} onValueChange={(v) => setFormData({ ...formData, propertyType: v })}>
        <SelectTrigger className="bg-background"><SelectValue placeholder="Property Type" /></SelectTrigger>
        <SelectContent>
          {propertyTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
        </SelectContent>
      </Select>
      <Select value={formData.area} onValueChange={(v) => setFormData({ ...formData, area: v })}>
        <SelectTrigger className="bg-background"><SelectValue placeholder="Select Area" /></SelectTrigger>
        <SelectContent>
          {areas.map((a) => <SelectItem key={a} value={a}>{a}</SelectItem>)}
        </SelectContent>
      </Select>
      <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
        <SelectTrigger className="bg-background"><SelectValue placeholder="Service Required" /></SelectTrigger>
        <SelectContent>
          {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
        </SelectContent>
      </Select>
      <Button type="submit" className="w-full gradient-gold text-primary-foreground font-semibold text-base py-6 hover:opacity-90 transition-opacity">
        Book Free Consultation
      </Button>
    </form>
  );
};

export default LeadForm;
