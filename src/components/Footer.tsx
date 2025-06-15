
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
              <li className="text-foreground">📧 hello@brightforge.ai</li>
              <li className="text-foreground">📞 +1 (000) 000-0000</li>
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
