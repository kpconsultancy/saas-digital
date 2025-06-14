
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from './Icon';

const plans = [
    {
        name: "Starter Plan",
        price: "$19",
        description: "For individuals and small teams.",
        features: ["10 Projects", "Basic Analytics", "24/7 Support", "10GB Storage"],
        isPopular: false,
    },
    {
        name: "Professional Plan",
        price: "$49",
        description: "For growing businesses and professionals.",
        features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "100GB Storage", "Team Collaboration"],
        isPopular: true,
    },
    {
        name: "Enterprise Plan",
        price: "$99",
        description: "For large organizations and enterprises.",
        features: ["Everything in Pro", "Dedicated Account Manager", "Custom Integrations", "24/7/365 Support"],
        isPopular: false,
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-primary font-semibold">PRICING</p>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">Choose a Plan That Suits Your Needs</h2>
                </div>
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {plans.map(plan => (
                        <Card key={plan.name} className={`flex flex-col ${plan.isPopular ? 'border-primary bg-primary/5' : ''}`}>
                            <CardHeader>
                                <CardTitle>{plan.name}</CardTitle>
                                <CardDescription>{plan.description}</CardDescription>
                                <div className="pt-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3">
                                    {plan.features.map(feature => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <Icon name="check" className="w-5 h-5 text-primary" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={plan.isPopular ? "default" : "outline"}>Get Started</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;
