
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
const testimonials = [{
  name: "L. Tran",
  title: "Content Manager",
  quote: "BrightForge completely transformed our content pipeline. The insights are invaluable.",
  avatar: "LT"
}, {
  name: "A. Rivera",
  title: "Co-founder @ LaunchPoint",
  quote: "We're a startup with limited time — this tool let us ship high-quality marketing in hours, not weeks.",
  avatar: "AR",
  isPopular: true
}, {
  name: "M. Ellis",
  title: "SEO Consultant",
  quote: "SEO results blew us away. Rankings up, bounce rates down. Love it.",
  avatar: "ME"
}];
const Testimonials = () => {
  return <section id="testimonials" className="pt-0 lg:pt-0 pb-20 lg:pb-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary my-[22px] text-xl font-thin">CLIENT FEEDBACK</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">What Users Are Saying</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map(t => <Card key={t.name} className={`flex flex-col justify-between ${t.isPopular ? 'border-primary bg-primary/5' : ''}`}>
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
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;
