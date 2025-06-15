
import React from 'react';
import Icon from './Icon';

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Icon iconName="gem" className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <span className="text-lg font-normal">BrightForge</span>
            </div>
            <p className="mt-4 text-muted-foreground text-sm">Smarter Marketing. Greater Impact.</p>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} BrightForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
