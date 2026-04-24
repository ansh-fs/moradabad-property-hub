import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/data/contact";

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-20 md:bottom-6 right-4 z-50 flex items-center gap-2 px-4 py-3 md:px-5 md:py-3.5 rounded-full bg-[#25D366] text-white font-semibold shadow-xl hover:scale-105 transition-transform animate-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={22} />
    <span className="hidden sm:inline text-sm">Chat on WhatsApp</span>
  </a>
);

export default FloatingWhatsApp;
