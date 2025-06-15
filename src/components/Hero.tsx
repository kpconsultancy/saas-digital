import React from 'react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
      </div>
      <div className="container mx-auto text-center px-4">
        <h1 className="pb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-snug text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-primary bg-[length:200%_auto] animate-gradient">
          Welcome to BrightForge
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-zinc-50 text-base">
          Where intelligent marketing meets growth. We create AI-powered, data-led strategies and engaging content that guide your audience — helping your business scale at record speed.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="font-bold bg-purple-700 hover:bg-purple-600">Launch Your Strategy</Button>
          
        </div>
      </div>
    </section>;
};
export default Hero;
