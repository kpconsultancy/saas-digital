
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from './Icon';
const features = [{
  icon: "settings",
  title: "Content Crafter",
  description: "Create custom content aligned with your brand in just seconds."
}, {
  icon: "search",
  title: "Search Engine Booster",
  description: "Enhance your visibility with smart SEO tools built to improve rankings."
}, {
  icon: "file-text",
  title: "Headline Creator",
  description: "Catch attention fast with optimized, performance-driven headlines."
}, {
  icon: "link",
  title: "Social Snippets",
  description: "Effortlessly build engaging, click-worthy posts for every social platform."
}, {
  icon: "file",
  title: "Email Composer",
  description: "Turn leads into loyal customers with compelling AI-generated email campaigns."
}, {
  icon: "list",
  title: "Insight Engine",
  description: "Monitor, learn, and optimize with real-time data you can act on."
}];
const Features = () => {
  return <section id="features" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-primary text-xl font-thin my-[22px]">FEATURES</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
                    Smarter Tools That Drive Real Results
                </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, i) => <Card key={i} className="text-center bg-card/50 border-border/50 hover:border-primary/50 transition-colors duration-300">
                        <CardHeader className="items-center gap-4">
                           <div className="bg-primary/10 p-3 rounded-lg">
                             <Icon iconName={feature.icon as any} className="w-6 h-6 text-primary" />
                           </div>
                           <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>)}
            </div>
        </div>
    </section>;
};
export default Features;
