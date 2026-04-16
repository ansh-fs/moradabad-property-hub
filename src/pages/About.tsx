import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { MapPin, Shield, Eye, Users, Star, Wrench, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import rohitImg from "@/assets/rohit-thakur.png";
import hemantImg from "@/assets/hemant-thakur.png";

const About = () => (
  <div className="min-h-screen">
    <Header />

    {/* Section 1: Hero */}
    <section className="pt-28 pb-20 gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.08)_0%,_transparent_60%)]" />
      <div className="container-narrow px-4 text-center relative z-10">
        <span className="text-gold font-medium text-sm uppercase tracking-wider">About Us</span>
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mt-3 mb-5">
          Trusted Property & Society Management{" "}
          <span className="text-gradient-gold">Experts</span>
        </h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed text-lg">
          Professional property management solutions built on trust, experience, and local expertise.
        </p>
      </div>
    </section>

    {/* Section 2: Who We Are */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed text-base mb-4">
            Property Management and Solution is a professionally managed property and society management company dedicated to helping property owners protect, maintain, and grow the value of their investments. Founded by Rohit Thakur and Hemant Thakur, the company was built on a strong foundation of trust, transparency, and hands-on expertise.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base">
            We provide end-to-end property management services — from tenant management and rent collection to maintenance coordination and society administration. Our mission is to make property ownership hassle-free while ensuring maximum returns for our clients.
          </p>
        </div>
      </div>
    </section>

    {/* Section 3: Founders */}
    <section className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-2">
            Meet Our <span className="text-gradient-gold">Founders</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Property Management and Solution
          </p>
          <p className="text-accent font-medium text-lg mt-1 italic">"बनाये अपने निवेश को बेहतर"</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: "Rohit Thakur",
              role: "Founder & Director",
              image: rohitImg,
              bio: "Rohit Thakur is the Founder & Director of Property Management and Solution. With strong leadership and deep understanding of property management, he focuses on delivering reliable and transparent services to property owners and housing societies. His vision is to simplify property operations and maximize client satisfaction.",
            },
            {
              name: "Hemant Thakur",
              role: "Co-Founder & Operations Head",
              image: hemantImg,
              bio: "Hemant Thakur is the Co-Founder & Operations Head of Property Management and Solution. He manages daily operations and ensures timely maintenance and service quality across all managed properties. His commitment to efficiency and customer satisfaction drives the company's strong reputation.",
            },
          ].map(({ name, role, image, bio }) => (
            <div
              key={name}
              className="bg-card rounded-2xl border border-border p-8 text-center hover:border-accent/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative w-36 h-36 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl group-hover:bg-accent/30 transition-colors" />
                <img
                  src={image}
                  alt={name}
                  className="relative w-36 h-36 rounded-full object-cover object-top border-4 border-accent/40 shadow-lg"
                />
              </div>
              <h3 className="font-heading font-bold text-foreground text-xl mb-1">{name}</h3>
              <p className="text-accent text-sm font-semibold mb-3">{role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 4: Our Mission */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div>
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-5">
              <Target size={30} className="text-accent" />
            </div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Simplifying Property Ownership</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to provide property owners with reliable, transparent, and hassle-free property management services. We believe every property deserves professional care — from regular maintenance and tenant management to financial reporting and value growth strategies. We aim to be the most trusted name in property management.
            </p>
          </div>
          <div>
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-5">
              <Eye size={30} className="text-accent" />
            </div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Vision</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Leading Property Excellence</h2>
            <p className="text-muted-foreground leading-relaxed">
              We envision becoming the leading property management company known for professionalism, innovation, and client satisfaction. Our goal is to set new benchmarks in how properties and societies are managed — leveraging technology, local expertise, and a client-first approach to deliver outstanding results.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Section 6: Why Clients Trust Us */}
    <section className="section-padding gradient-navy">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Trust</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2">Why Clients Trust Us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { icon: MapPin, title: "Local Expertise", desc: "Deep knowledge of local property markets and community needs." },
            { icon: Wrench, title: "Reliable Services", desc: "Consistent, dependable management you can count on every day." },
            { icon: Shield, title: "Transparent Process", desc: "Clear communication and honest reporting at every step." },
            { icon: Users, title: "Professional Team", desc: "Experienced professionals dedicated to your property's success." },
            { icon: Star, title: "Customer Satisfaction", desc: "We measure our success by our clients' happiness and trust." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center group">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mb-4 group-hover:bg-gold/25 transition-colors">
                <Icon size={26} className="text-gold" />
              </div>
              <h3 className="font-heading font-semibold text-primary-foreground text-sm mb-2">{title}</h3>
              <p className="text-primary-foreground/60 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 7: CTA */}
    <section className="section-padding bg-background text-center">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Experience <span className="text-gradient-gold">Professional Management?</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Get in touch with Rohit Thakur & Hemant Thakur's team for a free property consultation.
        </p>
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
