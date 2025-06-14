
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,40,200,0.2),transparent_60%)] animate-blob"></div>
      </div>
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight">
          Fueling SaaS Growth with <br />
          <span className="text-primary">Smart Marketing</span> Strategies!
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Your ultimate answer is just a click away to boost your business growth. We craft data-driven marketing, strategic content, and walk customers through helping you to drive scale faster than ever.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="font-bold">Get Started Now</Button>
          <Button size="lg" variant="outline" className="font-bold">Learn from Experts</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
