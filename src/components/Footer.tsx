import { Phone, Mail, MapPin } from "lucide-react";

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
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Moradabad's trusted property and society management company. Professional, transparent, and reliable.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {["Home", "Services", "Areas We Serve", "About", "Testimonials", "Contact"].map((link) => (
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
          <h4 className="font-heading font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {["Society Management", "Rental Management", "Tenant Management", "Property Maintenance", "Flat Sale & Resale"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-center gap-2"><Phone size={16} className="text-gold" /> +91 XXXXX XXXXX</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-gold" /> info@propertysolution.com</li>
            <li className="flex items-start gap-2"><MapPin size={16} className="text-gold mt-0.5" /> Moradabad, Uttar Pradesh, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Property Solution & Investment. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
