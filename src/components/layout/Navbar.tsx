'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Engineer', href: '/engineer' },
  { name: 'Projects', href: '/projects' },
  { name: 'Recruiter', href: '/recruiter' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div 
        className={`flex items-center gap-1 p-1.5 rounded-full border transition-all duration-300 backdrop-blur-xl ${
          isScrolled 
            ? 'bg-background/70 border-border/50 shadow-2xl shadow-black/50' 
            : 'bg-background/30 border-border/20'
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold font-heading text-xs mr-2 ml-1">
          DS
        </div>
        
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors outline-none"
            >
              <span className={`relative z-10 ${isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                {link.name}
              </span>
              
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 rounded-full bg-secondary"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
