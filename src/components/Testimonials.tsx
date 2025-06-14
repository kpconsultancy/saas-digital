
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  { name: "Sarah Johnson", title: "Marketing Director", quote: "This tool has revolutionized our content strategy. The AI-powered insights are a game-changer for our team.", avatar: "SJ" },
  { name: "James Barker", title: "Founder @ ScaleUp", quote: "As a startup, we need to move fast. This platform allows us to produce high-quality marketing materials at an incredible speed. Highly recommended!", avatar: "JB", isPopular: true },
  { name: "Emily Harper", title: "Lead SEO Specialist", quote: "The SEO optimizer is phenomenal. We've seen a significant jump in our organic rankings since we started using it.", avatar: "EH" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary font-semibold">TESTIMONIALS</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">Hear What Our Clients Have to Say</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <Card key={t.name} className={`flex flex-col justify-between ${t.isPopular ? 'border-primary bg-primary/5' : ''}`}>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">"{t.quote}"</p>
              </CardContent>
              <div className="p-6 flex items-center gap-4">
                  <Avatar>
                      <AvatarFallback>{t.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.title}</p>
                  </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
