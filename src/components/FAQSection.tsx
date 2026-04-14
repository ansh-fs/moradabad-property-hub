import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How does property management work?", a: "We take complete responsibility for your property — from tenant management and rent collection to maintenance and reporting. You relax while we handle everything professionally." },
  { q: "Do you manage rental tenants?", a: "Yes! We handle tenant screening, agreement preparation, move-in/move-out, complaint resolution, and regular communication with tenants on your behalf." },
  { q: "Which areas do you cover?", a: "We serve all major residential areas and societies. Contact us to check if your property falls within our service area." },
  { q: "How quickly can services start?", a: "Once you submit your enquiry and we complete the property review, services can begin within 3-5 working days." },
  { q: "How do I contact you?", a: "You can fill the enquiry form on this page, call us directly, or reach out via WhatsApp. We respond within a few hours!" },
];

const FAQSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow max-w-3xl">
      <div className="text-center mb-12">
        <span className="text-accent font-medium text-sm uppercase tracking-wider">FAQ</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Frequently Asked Questions</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map(({ q, a }, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/40">
            <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">{q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
