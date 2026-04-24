import { Phone, Mail, MapPin, Users, MessageCircle } from "lucide-react";
import { CONTACTS, LOCATIONS, WHATSAPP_URL } from "@/data/contact";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container-narrow section-padding pb-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
              <span className="font-heading font-bold text-primary text-lg">PS</span>
            </div>
            <div>
              <p className="font-heading font-semibold text-sm">Property Solution</p>
              <p className="text-xs text-primary-foreground/60">& Investment</p>
            </div>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
            Your trusted property and society management company. Professional, transparent, and reliable.
          </p>
          <div className="flex items-center gap-2 text-primary-foreground/50 text-xs">
            <Users size={14} className="text-gold" />
            <span>Founded by <strong className="text-primary-foreground/80">Rohit Thakur</strong> & <strong className="text-primary-foreground/80">Hemant Thakur</strong></span>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {["Home", "Services", "Properties", "About", "Testimonials", "Contact"].map((link) => (
              <li key={link}>
                <button
                  onClick={() => document.getElementById(link.toLowerCase().replace(/\s+/g, "-"))?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-gold transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li>
              <a href={`tel:+91${CONTACTS[0].phone}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={16} className="text-gold" /> Hemant Thakur: +91 {CONTACTS[0].phone}
              </a>
            </li>
            <li>
              <a href={`tel:+91${CONTACTS[1].phone}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone size={16} className="text-gold" /> Rohit Thakur: +91 {CONTACTS[1].phone}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
                <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp: +91 {CONTACTS[2].phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gold" /> info@propertysolution.com
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Working Locations</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {LOCATIONS.map((loc) => (
              <li key={loc} className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" /> {loc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h4 className="font-heading font-semibold text-primary-foreground mb-4">Visit Our Office</h4>
        <div className="rounded-xl overflow-hidden border border-primary-foreground/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.823!2d78.7733!3d28.8386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afce700000001%3A0x1!2sProperty+Solution+%26+Investment!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Property Solution & Investment Office Location"
          />
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Property Solution & Investment. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
