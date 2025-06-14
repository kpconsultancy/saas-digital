
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  { q: "How does the free 14-day trial work?", a: "You get full access to all our features for 14 days. No credit card required. If you choose to subscribe, your data will be saved. Otherwise, it will be deleted after the trial period." },
  { q: "Can I switch plans anytime?", a: "Absolutely! You can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes will be prorated." },
  { q: "What payment types are accepted?", a: "We accept all major credit cards, including Visa, Mastercard, and American Express. For enterprise plans, we also support wire transfers." },
  { q: "How secure is my data?", a: "Yes, data security is our top priority. We use industry-standard encryption and security protocols to protect your data. We are fully GDPR and CCPA compliant." },
  { q: "Are there discounts for non-profits?", a: "Yes, we do! We offer a 30% discount for registered non-profit organizations. Please contact our support team with your documentation to apply for the discount." },
];

const Faq = () => {
  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-semibold">FREQUENTLY ASKED QUESTIONS</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">Your Questions, Answered Clearly</h2>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
