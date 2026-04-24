import { Link, useParams, Navigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/data/services";
import { CONTACTS } from "@/data/contact";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const { icon: Icon, title, subtitle, overview, overviewHighlights, whatWeProvide, process, benefits } = service;

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* SECTION 1 — HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-navy">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/40 via-transparent to-transparent" />
        <div className="container-narrow relative z-10">
          <div className="max-w-3xl">
            <Link
              to="/services"
              className="inline-flex items-center text-gold/80 hover:text-gold text-sm mb-6 transition-colors"
            >
              ← Back to all services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                <Icon size={26} className="text-primary-foreground" />
              </div>
              <span className="text-gold font-medium text-sm uppercase tracking-wider">
                Property Solution & Investment
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-5 leading-tight">
              {title}
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity px-8"
              >
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground px-8"
              >
                <a href={`tel:+91${CONTACTS[0].phone}`} className="inline-flex items-center gap-2">
                  <Phone size={16} /> Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SERVICE OVERVIEW */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Service Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-5">
                Built for the Indian property system
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {overview}
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
              <h3 className="font-heading font-semibold text-foreground mb-4">
                What's covered
              </h3>
              <ul className="space-y-3">
                {overviewHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE PROVIDE */}
      <section className="section-padding bg-muted/40">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              What We Provide
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              Complete service inclusions
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Every aspect of {title.toLowerCase()} handled by our experienced team.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatWeProvide.map((item) => (
              <div
                key={item}
                className="bg-card border border-border rounded-xl p-5 hover:border-accent/50 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-primary-foreground" />
                  </div>
                  <p className="text-foreground font-medium text-sm leading-snug pt-1">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — OUR PROCESS */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              How we deliver
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              A transparent 5-step workflow built for reliability.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((step, idx) => (
                <div key={step.title} className="relative">
                  <div className="bg-card rounded-2xl border border-border p-6 h-full hover:border-accent/50 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mb-4 mx-auto relative z-10">
                      <span className="text-primary-foreground font-bold text-lg">
                        {idx + 1}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-center mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm text-center leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — BENEFITS */}
      <section className="section-padding bg-muted/40">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-5">
                Why owners choose us
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Choosing the right property partner means peace of mind, predictable income,
                and long-term value growth. Here's what you gain with us.
              </p>
              <Button
                asChild
                size="lg"
                className="gradient-gold text-primary-foreground font-semibold hover:opacity-90"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Get Started <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
            <div className="space-y-3">
              {benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-accent/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} className="text-accent" />
                  </div>
                  <p className="text-foreground font-medium">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Explore More
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-2">
              Other Services We Offer
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherServices.map(({ slug: s, icon: OtherIcon, title: t, shortDesc }) => (
              <Link
                key={s}
                to={`/services/${s}`}
                className="group bg-card rounded-xl p-5 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg gradient-gold flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <OtherIcon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-base mb-1">
                  {t}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                  {shortDesc}
                </p>
                <span className="text-accent text-xs font-medium mt-3 inline-block">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section className="section-padding gradient-navy">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Need Professional <span className="text-gold">Property Support?</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Talk to our experts and get a custom plan for your property today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="gradient-gold text-primary-foreground font-semibold px-8 hover:opacity-90"
            >
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground px-8"
            >
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
};

export default ServiceDetail;
