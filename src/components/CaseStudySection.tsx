import { ArrowRight } from "lucide-react";

const CaseStudySection = () => (
  <section className="section-padding bg-muted">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">Results</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Real Impact</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-card rounded-xl p-8 border border-border">
          <span className="text-xs font-bold uppercase tracking-wider text-destructive">Before</span>
          <h3 className="font-heading font-semibold text-foreground text-lg mt-3 mb-3">The Challenge</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Property owner struggling to manage remote flat</li>
            <li>• Frequent tenant complaints going unanswered</li>
            <li>• Irregular rent collection and no financial reporting</li>
            <li>• Maintenance issues piling up</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl p-8 border border-accent/30 shadow-md">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">After</span>
          <h3 className="font-heading font-semibold text-foreground text-lg mt-3 mb-3">The Transformation</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex items-start gap-2"><ArrowRight size={14} className="text-accent mt-1 shrink-0" /> Professional management increased tenant satisfaction</li>
            <li className="flex items-start gap-2"><ArrowRight size={14} className="text-accent mt-1 shrink-0" /> 100% on-time rent collection achieved</li>
            <li className="flex items-start gap-2"><ArrowRight size={14} className="text-accent mt-1 shrink-0" /> Monthly detailed reports sent to owner</li>
            <li className="flex items-start gap-2"><ArrowRight size={14} className="text-accent mt-1 shrink-0" /> Property value increased through proper maintenance</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudySection;
