'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeUrl } from '@/features/contact/data/resume';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Engineer Lab', href: '/engineer' },
  { name: 'Recruiter', href: '/recruiter' },
  { name: 'Services', href: '/#services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#') && pathname === '/') {
      const id = href.replace('/', '');
      const elem = document.querySelector(id);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-4 p-1.5 sm:p-2 rounded-full border transition-all duration-300 backdrop-blur-xl ${
            isScrolled
              ? 'bg-background/85 border-border/70 shadow-2xl shadow-black/60'
              : 'bg-background/50 border-border/30'
          }`}
        >
          {/* Brand Logo */}
          <Link
            href="/#home"
            onClick={() => handleNavClick('/#home')}
            className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full hover:bg-secondary/60 transition-colors"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold font-heading text-xs">
              DS
            </div>
            <span className="font-heading font-semibold text-xs sm:text-sm tracking-tight hidden md:inline-block">
              Sriharikrishna
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : item.href.startsWith('/#')
                    ? false
                    : pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    isActive
                      ? 'bg-secondary text-foreground font-semibold shadow-xs'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2 pr-1">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-8 rounded-full text-xs font-mono"
            >
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
              </Link>
            </Button>
            <Button asChild size="sm" className="h-8 rounded-full text-xs font-semibold">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Let&apos;s Talk
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary/80 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden p-6 rounded-3xl bg-background/95 border border-border/80 backdrop-blur-2xl shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-border/60 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center rounded-xl border border-border text-foreground font-medium text-sm hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-1.5"
              >
                Download Resume <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
