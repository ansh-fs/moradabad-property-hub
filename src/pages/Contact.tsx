import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import LeadForm from "@/components/LeadForm";
import ContactExperts from "@/components/ContactExperts";
import WorkingLocations from "@/components/WorkingLocations";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, CONTACTS } from "@/data/contact";

const Contact = () => (
  <div className="min-h-screen">
    <Header />

    <section className="pt-28 pb-16 gradient-navy">
      <div className="container-narrow px-4 text-center">
        <span className="text-gold font-medium text-sm uppercase tracking-wider">Contact Us</span>
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
          Get in <span className="text-gradient-gold">Touch</span>
        </h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">Have questions or ready to get started? Reach out to Rohit Thakur & Hemant Thakur's team.</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading font-bold text-foreground text-2xl mb-6">Send Us an Enquiry</h2>
            <div className="bg-card p-6 rounded-xl border border-border shadow-md">
              <LeadForm variant="hero" />
            </div>
          </div>

          <div>
            <h2 className="font-heading font-bold text-foreground text-2xl mb-6">Contact Information</h2>
            <div className="space-y-6">
              {[
                { icon: Phone, title: `Call ${CONTACTS[0].name}`, info: `+91 ${CONTACTS[0].phone}`, action: `tel:+91${CONTACTS[0].phone}` },
                { icon: Phone, title: `Call ${CONTACTS[1].name}`, info: `+91 ${CONTACTS[1].phone}`, action: `tel:+91${CONTACTS[1].phone}` },
                { icon: MessageCircle, title: "WhatsApp", info: `+91 ${CONTACTS[2].phone}`, action: WHATSAPP_URL },
                { icon: Mail, title: "Email", info: "info@propertysolution.com", action: "mailto:info@propertysolution.com" },
                { icon: MapPin, title: "Office", info: "Moradabad, Uttar Pradesh, India", action: null },
                { icon: Clock, title: "Working Hours", info: "Mon - Sat: 9:00 AM - 7:00 PM", action: null },
              ].map(({ icon: Icon, title, info, action }) => (
                <div key={title} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm">{title}</h3>
                    {action ? (
                      <a href={action} target={action.startsWith("http") ? "_blank" : undefined} className="text-muted-foreground text-sm hover:text-accent transition-colors">
                        {info}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{info}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="w-full bg-[#25D366] text-white font-semibold py-6 hover:bg-[#22c55e] transition-colors"
                onClick={() => window.open(WHATSAPP_URL, "_blank")}
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/30">
      <div className="container-narrow text-center mb-8">
        <h2 className="font-heading font-bold text-foreground text-2xl md:text-3xl mb-3">Our Office Location</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Visit us for direct consultation and property discussions.</p>
      </div>
      <div className="container-narrow">
        <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.823!2d78.7733!3d28.8386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afce700000001%3A0x1!2sProperty+Solution+%26+Investment!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Property Solution & Investment Office Location"
            className="w-full"
          />
        </div>
      </div>
    </section>

    <Footer />
    <FloatingWhatsApp />
    <StickyMobileCTA />
  </div>
);

export default Contact;
