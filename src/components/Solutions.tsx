
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from './Icon';

const data = [
  { name: 'Jan', value: 0 },
  { name: 'Feb', value: 200 },
  { name: 'Mar', value: 400 },
  { name: 'Apr', value: 600 },
  { name: 'May', value: 800 },
  { name: 'Jun', value: 1000 },
];

const solutionsList = [
    "Compatible with Windows, Mac, and Linux",
    "Built-in behavior tracking and trend prediction",
    "Easy-to-use tools that scale with your team"
]

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-lg font-semibold text-center mb-4">📊 Monthly Growth Analytics</h3>
                    <div className="w-full h-[300px] lg:h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                                <YAxis stroke="hsl(var(--muted-foreground))" ticks={[0, 200, 400, 600, 800]} />
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
                </div>
                <div>
                    <p className="text-primary font-semibold">SOLUTIONS</p>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">AI Marketing for Every Business, Everywhere</h2>
                    <p className="mt-4 text-muted-foreground">
                        Our advanced yet accessible tools are designed for all business types — no tech experience required.
                    </p>
                    <ul className="mt-6 space-y-4">
                        {solutionsList.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Icon iconName="check" className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>
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
