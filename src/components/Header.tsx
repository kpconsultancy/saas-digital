
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from './Icon';

const navLinks = [
  { title: "Platform", href: "#platform" },
  { title: "Features", href: "#features" },
  { title: "Solutions", href: "#solutions" },
  { title: "Services", href: "#services" },
  { title: "Pricing", href: "#pricing" },
  { title: "FAQ", href: "#faq" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <div className="flex items-center gap-2">
          <Icon iconName="gem" className="h-6 w-6 text-primary" strokeWidth={1.5} />
          <span className="text-lg font-normal">BrightForge</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.title} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link.title}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
            <Button>Get Started</Button>
        </div>
        <div className="md:hidden">
            <Button size="icon" variant="ghost">
                <Icon iconName="list" className="h-6 w-6" />
            </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
