import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FeaturedProperties from "@/components/AreasSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Properties = () => (
  <div className="min-h-screen">
    <Header />

    <section className="pt-28 pb-16 gradient-navy">
      <div className="container-narrow px-4 text-center">
        <span className="text-gold font-medium text-sm uppercase tracking-wider">Properties</span>
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
          Featured & Upcoming <span className="text-gradient-gold">Properties</span>
        </h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">Discover premium properties managed and curated by Property Solution & Investment.</p>
      </div>
    </section>

    <FeaturedProperties />

    <section className="section-padding gradient-navy text-center">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Looking for Something Specific?</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Tell us your requirements and our team will find the perfect property for you.</p>
        <Link to="/contact">
          <Button size="lg" className="gradient-gold text-primary-foreground font-semibold px-8 py-6 hover:opacity-90 transition-opacity">
            Submit Your Requirement
          </Button>
        </Link>
      </div>
    </section>

    <Footer />
    <FloatingWhatsApp />
    <StickyMobileCTA />
  </div>
);

export default Properties;
