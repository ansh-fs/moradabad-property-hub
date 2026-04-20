import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import GalleryCarousel from "@/components/GalleryCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProperties from "@/components/AreasSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";

import FoundersSection from "@/components/FoundersSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <TrustStrip />
    <ServicesSection />
    <GalleryCarousel />
    <WhyChooseUs />
    <FeaturedProperties />
    <ProcessSection />
    <TestimonialsSection />
    <FoundersSection />
    <CaseStudySection />
    <FAQSection />
    <FinalCTA />
    <Footer />
    <FloatingWhatsApp />
    <StickyMobileCTA />
  </div>
);

export default Index;
