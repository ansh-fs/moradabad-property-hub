import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import maintenanceImg from "@/assets/gallery-maintenance.jpg";
import cleaningImg from "@/assets/gallery-cleaning.jpg";
import securityImg from "@/assets/gallery-security.jpg";
import buildingImg from "@/assets/gallery-building.jpg";
import happyClientsImg from "@/assets/gallery-happy-clients.jpg";
import inspectionImg from "@/assets/gallery-inspection.jpg";
import paintingImg from "@/assets/gallery-painting.jpg";
import handoverImg from "@/assets/gallery-handover.jpg";

type Category = "All" | "Work Sites" | "Happy Clients" | "Maintenance" | "Cleaning" | "Security";

interface GalleryItem {
  image: string;
  title: string;
  category: Exclude<Category, "All">;
}

const galleryItems: GalleryItem[] = [
  { image: maintenanceImg, title: "Society Maintenance Work", category: "Maintenance" },
  { image: cleaningImg, title: "Cleaning Service Execution", category: "Cleaning" },
  { image: securityImg, title: "Security Deployment", category: "Security" },
  { image: happyClientsImg, title: "Client Satisfaction Moment", category: "Happy Clients" },
  { image: inspectionImg, title: "Property Inspection Work", category: "Work Sites" },
  { image: buildingImg, title: "Building Maintenance", category: "Maintenance" },
  { image: paintingImg, title: "Renovation & Painting", category: "Work Sites" },
  { image: handoverImg, title: "Successful Property Handover", category: "Happy Clients" },
  { image: cleaningImg, title: "Lobby Deep Cleaning", category: "Cleaning" },
  { image: securityImg, title: "24x7 Guard Posting", category: "Security" },
  { image: maintenanceImg, title: "Routine Building Repair", category: "Maintenance" },
  { image: happyClientsImg, title: "Owner Onboarding", category: "Happy Clients" },
  { image: inspectionImg, title: "Quality Inspection", category: "Work Sites" },
  { image: buildingImg, title: "Premium Society Care", category: "Work Sites" },
  { image: paintingImg, title: "Common Area Renovation", category: "Maintenance" },
  { image: handoverImg, title: "Happy Family Moment", category: "Happy Clients" },
  { image: cleaningImg, title: "Sanitization Service", category: "Cleaning" },
  { image: securityImg, title: "Gate Security Setup", category: "Security" },
];

const categories: Category[] = ["All", "Work Sites", "Happy Clients", "Maintenance", "Cleaning", "Security"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary via-primary to-navy-dark">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${buildingImg})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60" />
        <div className="container-narrow relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 border border-accent/30">
            Gallery
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
            Our Work & <span className="text-accent">Happy Clients</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Explore real images of our property management work and satisfied clients.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-10 border-b border-border bg-muted/30 sticky top-16 z-30 backdrop-blur">
        <div className="container-narrow">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-accent shadow-md"
                    : "bg-card text-foreground border-border hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredItems.map((item, idx) => (
              <button
                key={`${item.title}-${idx}`}
                onClick={() => setLightboxImage(item)}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 bg-card text-left"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent p-3 md:p-4 pt-12">
                  <h3 className="text-primary-foreground font-heading font-semibold text-sm md:text-base">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No images in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-navy-dark">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Want Professional <span className="text-accent">Property Management?</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Let our experienced team take care of your property with full transparency and trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
            >
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8"
            >
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!lightboxImage} onOpenChange={(open) => !open && setLightboxImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0 shadow-none">
          {lightboxImage && (
            <div className="relative">
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 text-primary-foreground hover:text-accent transition-colors"
                aria-label="Close"
              >
                <X size={28} />
              </button>
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
              <p className="text-center text-primary-foreground mt-4 font-heading font-semibold text-lg">
                {lightboxImage.title}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
};

export default Gallery;
