
import React, { useState, useEffect } from 'react';
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
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            current = link.href;
          }
        }
      }
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set active link on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <div className="flex items-center gap-2">
          <Icon iconName="gem" className="h-6 w-6 text-primary" strokeWidth={1.5} />
          <span className="text-lg font-normal">BrightForge</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a 
              key={link.title} 
              href={link.href} 
              className={`text-sm font-medium transition-colors ${
                activeLink === link.href 
                ? 'text-pink-500' 
                : 'text-muted-foreground hover:text-foreground'
              }`}
            >
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
