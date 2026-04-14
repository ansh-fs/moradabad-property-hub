import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Home", "Services", "Areas We Serve", "About", "Testimonials", "Contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/\s+/g, "-"));
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-narrow flex items-center justify-between h-16 md:h-20 px-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
            <span className="font-heading font-bold text-primary-foreground text-lg">PS</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-heading font-semibold text-foreground text-sm leading-tight">Property Solution</p>
            <p className="text-xs text-muted-foreground leading-tight">& Investment</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => scrollTo("contact")}
            className="hidden md:inline-flex gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Book Free Consultation
          </Button>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left text-base font-medium text-foreground py-2"
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("contact")}
              className="w-full gradient-gold text-primary-foreground font-semibold mt-2"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
