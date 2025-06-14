
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from './Icon';

const navLinks = ["Home", "Features", "Packages", "Services", "Blog", "Contact Us"];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <div className="flex items-center gap-2">
          <Icon iconName="gem" className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">LOGO HERE</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link} href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
            <Button>Get Started</Button>
        </div>
        <div className="md:hidden">
            <Button size="icon" variant="ghost">
                <Icon iconName="menu" className="h-6 w-6" />
            </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
