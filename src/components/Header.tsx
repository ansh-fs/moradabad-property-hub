import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container-narrow flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 gradient-gold flex items-center justify-center mx-px px-[30px] py-[30px] border border-none rounded-xl">
            <span className="font-heading font-bold text-primary-foreground text-lg">PS</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-foreground leading-tight font-bold font-serif text-xl">Property Solution</p>
            <p className="leading-tight text-xl font-serif font-bold text-foreground">& Investment</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact">
            <Button className="hidden md:inline-flex gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
              Book Free Consultation
            </Button>
          </Link>
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
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-left text-base font-medium text-foreground py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full gradient-gold text-primary-foreground font-semibold mt-2">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
