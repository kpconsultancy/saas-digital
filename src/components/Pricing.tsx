import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from './Icon';
const plans = [{
  name: "Starter",
  price: "$19",
  description: "Ideal for solo creators and small teams.",
  features: ["10 Projects", "Essential Analytics", "24/7 Support", "10GB Storage"],
  isPopular: false
}, {
  name: "Professional",
  price: "$49",
  description: "For fast-growing businesses.",
  features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "100GB Storage", "Team Access"],
  isPopular: true
}, {
  name: "Enterprise",
  price: "$99",
  description: "Tailored for large teams.",
  features: ["Everything in Pro", "Dedicated Manager", "API & Custom Integrations", "24/7/365 Support"],
  isPopular: false
}];
const Pricing = () => {
  return <section id="pricing" className="pt-10 lg:pt-16 pb-20 lg:pb-32">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-primary my-[22px] text-xl font-thin">PRICING</p>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">Find a Plan That Works for You</h2>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 max-w-lg mx-auto">
                    {plans.map(plan => <Card key={plan.name} className={`flex flex-col text-center ${plan.isPopular ? 'border-primary bg-primary/5' : ''}`}>
                            <CardHeader>
                                <CardTitle>{plan.name}</CardTitle>

                                <CardDescription className="text-white">{plan.description}</CardDescription>
                                <div className="pt-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-3">
                                    {plan.features.map(feature => <li key={feature} className="flex items-center justify-center gap-2">
                                            <Icon iconName="check" className="w-5 h-5 text-primary" />
                                            <span className="text-muted-foreground text-xs">{feature}</span>
                                        </li>)}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={plan.isPopular ? "default" : "outline"}>Start Now</Button>
                            </CardFooter>
                        </Card>)}
                </div>
            </div>
        </section>;
};
export default Pricing;