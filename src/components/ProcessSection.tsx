import { Send, Search, ClipboardList, Play, BarChart3 } from "lucide-react";

const steps = [
  { icon: Send, title: "Submit Enquiry", desc: "Fill out a quick form or call us directly." },
  { icon: Search, title: "Property Review", desc: "We assess your property and understand your needs." },
  { icon: ClipboardList, title: "Service Planning", desc: "A customized management plan is prepared for you." },
  { icon: Play, title: "Execution", desc: "Our team begins managing your property professionally." },
  { icon: BarChart3, title: "Reporting & Updates", desc: "Regular reports and transparent updates on progress." },
];

const ProcessSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">How It Works</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Process</h2>
      </div>
      <div className="relative">
        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="text-center relative">
              <div className="w-14 h-14 mx-auto rounded-full gradient-gold flex items-center justify-center mb-4 relative z-10">
                <Icon size={24} className="text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-accent mb-1 block">Step {i + 1}</span>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
