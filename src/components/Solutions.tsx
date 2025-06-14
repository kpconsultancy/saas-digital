import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from './Icon';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

const solutionsList = [
    "Accessible across major platforms, including windows, mac, and linux.",
    "Uncover user behavior and create with our impressive capabilities.",
    "Simple innovation with our new AI tools designed for everyone, anywhere."
]

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="w-full h-[300px] lg:h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                            <YAxis stroke="hsl(var(--muted-foreground))" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'hsl(var(--background))',
                                    borderColor: 'hsl(var(--border))',
                                }}
                            />
                            <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <p className="text-primary font-semibold">SOLUTIONS</p>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">AI Solutions for Everyone, Everywhere</h2>
                    <p className="mt-4 text-muted-foreground">
                        Unleash the power of our new AI tools designed for businesses of all sizes and non-coders. Track our performance on accessibility across devices, making innovation available at your fingertips.
                    </p>
                    <ul className="mt-6 space-y-4">
                        {solutionsList.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Icon iconName="check-circle-2" className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Solutions;
