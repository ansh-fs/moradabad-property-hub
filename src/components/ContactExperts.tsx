import { Phone, MessageCircle, User } from "lucide-react";
import { CONTACTS, WHATSAPP_URL } from "@/data/contact";

const ContactExperts = () => (
  <section id="contact-experts" className="section-padding bg-background">
    <div className="container-narrow">
      <div className="text-center mb-10">
        <span className="text-gold font-medium text-sm uppercase tracking-wider">Talk to Us</span>
        <h2 className="font-heading font-bold text-foreground text-3xl md:text-4xl mt-3 mb-3">
          Contact Our <span className="text-gradient-gold">Property Experts</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Reach out directly to our team for personalised property guidance.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {CONTACTS.map((c) => {
          const isWA = "isWhatsApp" in c && c.isWhatsApp;
          const href = isWA ? WHATSAPP_URL : `tel:+91${c.phone}`;
          return (
            <div
              key={c.name}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                  {isWA ? (
                    <MessageCircle size={26} className="text-primary-foreground" />
                  ) : (
                    <User size={26} className="text-primary-foreground" />
                  )}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-lg leading-tight">
                    {c.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{c.role}</p>
                </div>
              </div>

              <a
                href={href}
                target={isWA ? "_blank" : undefined}
                rel={isWA ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between gap-2 bg-muted/40 hover:bg-muted rounded-lg px-4 py-3 transition-colors group"
              >
                <span className="flex items-center gap-2 text-foreground font-semibold">
                  {isWA ? (
                    <MessageCircle size={18} className="text-[#25D366]" />
                  ) : (
                    <Phone size={18} className="text-accent" />
                  )}
                  +91 {c.phone}
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-foreground">
                  {isWA ? "Chat" : "Call"} →
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ContactExperts;
