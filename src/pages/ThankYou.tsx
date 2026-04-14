import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ThankYou = () => (
  <div className="min-h-screen">
    <Header />

    <section className="pt-28 pb-20 gradient-navy min-h-[70vh] flex items-center">
      <div className="container-narrow px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent mx-auto flex items-center justify-center mb-6">
          <CheckCircle size={40} className="text-accent" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          Thank You!
        </h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto text-lg leading-relaxed mb-8">
          Your enquiry has been received. Our team will contact you within 24 hours to discuss your property management needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="gradient-gold text-primary-foreground font-semibold px-8 py-6 hover:opacity-90 transition-opacity">
              Back to Home
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-semibold px-8 py-6"
            onClick={() => window.open("https://wa.me/91XXXXXXXXXX", "_blank")}
          >
            <MessageCircle className="mr-2" size={20} />
            WhatsApp Now
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ThankYou;
