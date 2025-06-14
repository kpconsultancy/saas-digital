
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
      </div>
      <div className="container mx-auto text-center px-4">
        <h1 className="pb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-snug text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-primary bg-[length:200%_auto] animate-gradient">
          Welcome to BrightForge AI
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Where intelligent marketing meets growth. We create AI-powered, data-led strategies and engaging content that guide your audience — helping your business scale at record speed.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="font-bold">Launch Your Strategy</Button>
          <Button size="lg" variant="outline" className="font-bold">Learn from Industry Experts</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
