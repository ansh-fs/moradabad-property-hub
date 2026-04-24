import { useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { MapPin, Home, Bed, IndianRupee, Car, Shield, Droplets, Zap, CheckCircle2, Phone, MessageCircle, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useToast } from "@/hooks/use-toast";
import { getPropertyBySlug } from "@/data/properties";

const PropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const property = getPropertyBySlug(slug);
  const { toast } = useToast();
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [form, setForm] = useState({ name: "", phone: "", city: "" });

  if (!property) return <Navigate to="/properties" replace />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Please fill name and phone", variant: "destructive" });
      return;
    }
    toast({ title: "Thanks! We'll contact you shortly.", description: "Our team will reach out within 24 hours." });
    setForm({ name: "", phone: "", city: "" });
  };

  const highlights = [
    { icon: Bed, label: "BHK Type", value: `${property.beds} BHK` },
    { icon: Home, label: "Area Size", value: property.area },
    { icon: Car, label: "Parking", value: property.parking },
    { icon: Shield, label: "Security", value: property.security },
    { icon: Droplets, label: "Water Supply", value: property.water },
    { icon: Zap, label: "Power Backup", value: property.power },
  ];

  const whyPoints = [
    { title: "Prime Location", desc: `${property.location} with excellent surroundings.` },
    { title: "Modern Infrastructure", desc: "Built with quality materials and modern design." },
    { title: "Secure Investment", desc: "Verified property with clear documentation." },
    { title: "Good Connectivity", desc: "Close to schools, hospitals, and transport." },
  ];

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <Header />

      {/* HERO CAROUSEL */}
      <section className="pt-24 md:pt-28">
        <div className="container-narrow px-4">
          <Carousel
            opts={{ loop: true }}
            plugins={[autoplay.current]}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <CarouselContent>
              {property.gallery.map((img, i) => (
                <CarouselItem key={i}>
                  <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-muted">
                    <img
                      src={img}
                      alt={`${property.title} - image ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 md:left-6 bg-background/80 backdrop-blur border-none" />
            <CarouselNext className="right-3 md:right-6 bg-background/80 backdrop-blur border-none" />
          </Carousel>

          {/* Property summary */}
          <div className="mt-6 md:mt-8 grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2">
              <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                property.status === "Featured" ? "bg-accent text-accent-foreground" :
                property.status === "Available" ? "bg-green-500 text-white" :
                "bg-primary text-primary-foreground"
              }`}>{property.status}</span>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">{property.title}</h1>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-muted-foreground mt-3">
                <span className="flex items-center gap-1.5"><MapPin size={16} /> {property.location}</span>
                <span className="flex items-center gap-1.5"><Home size={16} /> {property.type}</span>
                <span className="flex items-center gap-1.5"><Bed size={16} /> {property.beds} Beds</span>
                <span className="flex items-center gap-1.5"><Home size={16} /> {property.area}</span>
              </div>
              <p className="text-muted-foreground mt-4">{property.description}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
              <p className="text-sm text-muted-foreground">Starting Price</p>
              <p className="font-heading font-bold text-3xl text-foreground flex items-center mt-1">
                <IndianRupee size={24} />{property.price}
              </p>
              <a href="#lead-form">
                <Button className="w-full mt-4 gradient-gold text-primary-foreground font-semibold py-6 hover:opacity-90 transition-opacity">
                  <Calendar className="mr-2" size={18} /> Book Site Visit
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK HIGHLIGHTS */}
      <section className="section-padding">
        <div className="container-narrow px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Quick Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-card border border-border rounded-xl p-4 text-center hover:border-accent/50 transition-colors">
                <div className="w-10 h-10 mx-auto rounded-lg gradient-gold flex items-center justify-center mb-2">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="font-semibold text-foreground text-sm mt-0.5">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-padding bg-muted">
        <div className="container-narrow px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Why Choose This Property</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyPoints.map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-xl p-5">
                <CheckCircle2 className="text-accent mb-3" size={24} />
                <h3 className="font-heading font-semibold text-foreground mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="lead-form" className="section-padding">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center">
              Get Full Details of This Property
            </h2>
            <p className="text-muted-foreground text-center mt-2 mb-6 text-sm">
              Fill the form and we'll send you the complete brochure & pricing.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
              />
              <Input
                placeholder="Phone Number"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={15}
              />
              <Input
                placeholder="City"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                maxLength={60}
              />
              <Button type="submit" className="w-full gradient-gold text-primary-foreground font-semibold py-6 hover:opacity-90 transition-opacity">
                Get Details Now
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Our team will contact you shortly.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding gradient-navy">
        <div className="container-narrow px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Interested in {property.title}?
          </h2>
          <p className="text-primary-foreground/70 mb-6">Talk to our property expert now.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+919999999999">
              <Button size="lg" className="gradient-gold text-primary-foreground font-semibold w-full sm:w-auto">
                <Phone className="mr-2" size={18} /> Call Now
              </Button>
            </a>
            <a href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi, I'm interested in ${property.title}`)}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                <MessageCircle className="mr-2" size={18} /> WhatsApp Now
              </Button>
            </a>
          </div>
          <Link to="/properties" className="inline-block mt-6 text-primary-foreground/70 hover:text-accent text-sm">
            ← Back to All Properties
          </Link>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border p-3 grid grid-cols-2 gap-2 shadow-2xl">
        <a href="tel:+919999999999">
          <Button className="w-full gradient-gold text-primary-foreground font-semibold">
            <Phone className="mr-2" size={16} /> Call Now
          </Button>
        </a>
        <a href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi, I'm interested in ${property.title}`)}`} target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
            <MessageCircle className="mr-2" size={16} /> WhatsApp
          </Button>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
