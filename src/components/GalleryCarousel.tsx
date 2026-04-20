import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import maintenanceImg from "@/assets/gallery-maintenance.jpg";
import cleaningImg from "@/assets/gallery-cleaning.jpg";
import securityImg from "@/assets/gallery-security.jpg";
import buildingImg from "@/assets/gallery-building.jpg";
import happyClientsImg from "@/assets/gallery-happy-clients.jpg";
import inspectionImg from "@/assets/gallery-inspection.jpg";
import paintingImg from "@/assets/gallery-painting.jpg";
import handoverImg from "@/assets/gallery-handover.jpg";

const slides = [
  { image: maintenanceImg, caption: "Society Maintenance Work" },
  { image: cleaningImg, caption: "Property Cleaning Work" },
  { image: securityImg, caption: "Security Deployment" },
  { image: buildingImg, caption: "Building Maintenance" },
  { image: happyClientsImg, caption: "Happy Client Moments" },
  { image: inspectionImg, caption: "Property Inspection Work" },
  { image: paintingImg, caption: "Renovation & Painting" },
  { image: handoverImg, caption: "Successful Handovers" },
];

const GalleryCarousel = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 font-heading">
            Our Work & Happy Clients
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            See how we professionally manage properties and keep our clients satisfied.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="w-full px-2 md:px-12"
        >
          <CarouselContent className="-ml-4">
            {slides.map((slide, idx) => (
              <CarouselItem
                key={idx}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.caption}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent p-5 pt-16">
                    <h3 className="text-primary-foreground font-heading font-semibold text-lg">
                      {slide.caption}
                    </h3>
                    <div className="mt-1 h-0.5 w-10 bg-accent group-hover:w-20 transition-all duration-500" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-2 lg:-left-12 bg-primary text-primary-foreground border-accent hover:bg-accent hover:text-accent-foreground" />
          <CarouselNext className="hidden md:flex -right-2 lg:-right-12 bg-primary text-primary-foreground border-accent hover:bg-accent hover:text-accent-foreground" />
        </Carousel>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground border border-accent/40 px-8"
          >
            <Link to="/gallery">Show More Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
