
import React from 'react';
import Icon from './Icon';

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Legal</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center justify-center gap-2 text-foreground">
                <Icon iconName="mail" className="h-4 w-4 text-primary" />
                <span>hello@brightforge.ai</span>
              </li>
              <li className="flex items-center justify-center gap-2 text-foreground">
                <Icon iconName="phone" className="h-4 w-4 text-primary" />
                <span>+1 (000) 000-0000</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <Icon iconName="gem" className="h-6 w-6 text-primary" strokeWidth={1.5} />
            <span className="text-lg font-normal">BrightForge</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Smarter Marketing. Greater Impact. © {new Date().getFullYear()} BrightForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
