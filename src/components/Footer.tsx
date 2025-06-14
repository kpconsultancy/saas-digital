
import React from 'react';
import Icon from './Icon';

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <Icon iconName="star" className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">BrightForge AI</span>
            </div>
            <p className="mt-4 text-muted-foreground text-sm">Smarter Marketing. Greater Impact.</p>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Legal</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-muted-foreground">📧 hello@brightforge.ai</li>
              <li className="text-muted-foreground">📞 +1 (000) 000-0000</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BrightForge AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
