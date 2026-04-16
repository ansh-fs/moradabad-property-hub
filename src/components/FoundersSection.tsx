import { Button } from "@/components/ui/button";
import rohitImg from "@/assets/rohit-thakur.png";
import hemantImg from "@/assets/hemant-thakur.png";

const founders = [
  {
    name: "Rohit Thakur",
    title: "Founder & Director",
    tagline: "Leading with trust and professional property management expertise.",
    bio: "Rohit Thakur is the Founder & Director of Property Management and Solution. With strong leadership and deep understanding of property management, he focuses on delivering reliable and transparent services to property owners and housing societies. His vision is to simplify property operations and maximize client satisfaction.",
    image: rohitImg,
  },
  {
    name: "Hement Thakur",
    title: "Co-Founder & Operations Head",
    tagline: "Ensuring smooth operations and reliable service delivery.",
    bio: "Hement Thakur is the Co-Founder & Operations Head of Property Management and Solution. He manages daily operations and ensures timely maintenance and service quality across all managed properties. His commitment to efficiency and customer satisfaction drives the company's strong reputation.",
    image: hemantImg,
  },
];

const FoundersSection = () => (
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
        <p className="text-accent font-medium text-lg mt-1 italic">
          "बनाये अपने निवेश को बेहतर"
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {founders.map(({ name, title, tagline, bio, image }) => (
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
            <p className="text-accent text-sm font-semibold mb-2">{title}</p>
            <p className="text-accent/80 italic text-sm mb-4">"{tagline}"</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button
          size="lg"
          className="gradient-gold text-primary-foreground font-semibold px-8 py-6 hover:opacity-90 transition-opacity"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Book Free Consultation
        </Button>
      </div>
    </div>
  </section>
);

export default FoundersSection;
