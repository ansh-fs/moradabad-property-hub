import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Users, Target, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => (
  <div className="min-h-screen">
    <Header />

    {/* Hero */}
    <section className="pt-28 pb-16 gradient-navy">
      <div className="container-narrow px-4 text-center">
        <span className="text-gold font-medium text-sm uppercase tracking-wider">About Us</span>
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
          Professional Property Management You Can <span className="text-gradient-gold">Trust</span>
        </h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Property Solution & Investment was founded with a single mission — to provide property owners with reliable, transparent, and professional management services.
        </p>
      </div>
    </section>

    {/* Founders */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Meet Our Founders</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            { name: "Rohit Thakur", role: "Co-Founder & Managing Director", desc: "With years of experience in property management and real estate, Rohit leads the operations and client relationships, ensuring every property receives top-notch professional care." },
            { name: "Hemant Thakur", role: "Co-Founder & Director", desc: "Hemant brings strategic vision and deep market knowledge to the company. He oversees service planning, property assessments, and business development to drive growth." },
          ].map(({ name, role, desc }) => (
            <div key={name} className="bg-card rounded-xl p-8 border border-border text-center hover:border-accent/50 hover:shadow-lg transition-all">
              <div className="w-20 h-20 rounded-full gradient-gold mx-auto flex items-center justify-center mb-4">
                <span className="font-heading font-bold text-primary-foreground text-2xl">{name.split(" ").map(n => n[0]).join("")}</span>
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-1">{name}</h3>
              <p className="text-accent text-sm font-medium mb-3">{role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Values</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">What Drives Us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Target, title: "Mission-Driven", desc: "Every decision we make is guided by our commitment to property owners' success." },
            { icon: Award, title: "Excellence", desc: "We strive for the highest standards in property management and client service." },
            { icon: Heart, title: "Trust & Care", desc: "We treat every property as if it were our own, with honesty and dedication." },
            { icon: Users, title: "Community", desc: "Building lasting relationships with property owners, tenants, and communities." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Icon size={24} className="text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding gradient-navy text-center">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Work With Us?</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Get in touch with Rohit Thakur & Hemant Thakur's team for a free property consultation.</p>
        <Link to="/contact">
          <Button size="lg" className="gradient-gold text-primary-foreground font-semibold px-8 py-6 hover:opacity-90 transition-opacity">
            Book Free Consultation
          </Button>
        </Link>
      </div>
    </section>

    <Footer />
    <FloatingWhatsApp />
    <StickyMobileCTA />
  </div>
);

export default About;
