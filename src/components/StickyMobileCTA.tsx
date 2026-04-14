import { Phone, MessageCircle } from "lucide-react";

const StickyMobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
    <div className="grid grid-cols-2">
      <a
        href="tel:+91XXXXXXXXXX"
        className="flex items-center justify-center gap-2 py-3.5 text-primary-foreground font-semibold text-sm border-r border-primary-foreground/10"
      >
        <Phone size={18} /> Call Now
      </a>
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3.5 text-primary-foreground font-semibold text-sm bg-[#25D366]"
      >
        <MessageCircle size={18} /> WhatsApp
      </a>
    </div>
  </div>
);

export default StickyMobileCTA;
