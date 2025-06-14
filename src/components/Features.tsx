
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from './Icon';

const features = [
  { icon: "bot", title: "Content Generator", description: "Generate engaging content tailored to your audience with just a click." },
  { icon: "search-check", title: "SEO Optimizer", description: "Optimize your content to rank higher in search engines and connect with consumers." },
  { icon: "file-text", title: "Creative Headlines", description: "Capture attention instantly with catchy, data-backed headlines that convert." },
  { icon: "share-2", title: "Social Media Posts", description: "Craft share-worthy social content that drives traffic and engagement effortlessly." },
  { icon: "mail", title: "Email Copy Wizard", description: "Write persuasive email copy that converts leads into loyal customers." },
  { icon: "bar-chart-2", title: "Analytics Insights", description: "Track performance and refine strategies with actionable insights from our data." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-primary font-semibold">FEATURES</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                    Innovative Features That Redefine Possibilities
                </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, i) => (
                    <Card key={i} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors duration-300">
                        <CardHeader className="flex flex-row items-center gap-4">
                           <div className="bg-primary/10 p-3 rounded-lg">
                             <Icon iconName={feature.icon as any} className="w-6 h-6 text-primary" />
                           </div>
                           <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features;
