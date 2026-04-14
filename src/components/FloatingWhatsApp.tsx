import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/91XXXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-20 md:bottom-6 right-4 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} className="text-primary-foreground" />
  </a>
);

export default FloatingWhatsApp;
