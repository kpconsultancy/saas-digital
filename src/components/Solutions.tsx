
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from './Icon';
const data = [{
  name: 'Jan',
  value: 0
}, {
  name: 'Feb',
  value: 200
}, {
  name: 'Mar',
  value: 400
}, {
  name: 'Apr',
  value: 600
}, {
  name: 'May',
  value: 800
}, {
  name: 'Jun',
  value: 1000
}];
const solutionsList = ["Compatible with Windows, Mac, and Linux", "Built-in behavior tracking and trend prediction", "Easy-to-use tools that scale with your team"];
const Solutions = () => {
  return <section id="solutions" className="pt-4 lg:pt-8 pb-20 lg:pb-32 bg-card/30">
        <div className="container mx-auto px-4">
            <div className="grid gap-12 items-center">
                
                <div>
                    <p className="text-primary text-xl font-thin text-center my-[22px]">SOLUTIONS</p>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight text-center">AI Marketing for Every Business, Everywhere</h2>
                    <p className="mt-4 text-center text-white">
                        Our advanced yet accessible tools are designed for all business types — no tech experience required.
                    </p>
                    <ul className="mt-6 space-y-4">
                        {solutionsList.map((item, i) => <li key={i} className="flex items-start justify-center gap-3">
                                <Icon iconName="check" className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <span className="text-center text-white">{item}</span>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    </section>;
};
export default Solutions;
