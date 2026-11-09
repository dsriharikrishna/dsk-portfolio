'use client';

import { Meteors } from '@/components/ui/meteors';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative border-t border-border/50 bg-background py-10 sm:py-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <Meteors number={20} />
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Identity */}
          <div className="relative group flex flex-col gap-2 text-center md:text-left">
            {/* Focus Light Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/30 via-accent/5 to-transparent blur-xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none" />

            <h4 className="relative z-10 text-xl font-black tracking-tight">
              Dasari{' '}
              <span className="text-accent drop-shadow-[0_0_10px_rgba(var(--accent),0.8)]">
                SRIHARIKRISHNA
              </span>
            </h4>

            <p className="relative z-10 text-muted-foreground font-mono text-xs uppercase tracking-widest">
              Frontend Engineer · Product Engineer
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-muted-foreground">
            <Link href="/#home" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>•</span>
            <Link href="/#about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <span>•</span>
            <Link href="/#experience" className="hover:text-foreground transition-colors">
              Experience
            </Link>
            <span>•</span>
            <Link href="/#product" className="hover:text-foreground transition-colors">
              Projects
            </Link>
            <span>•</span>
            <Link href="/#skills" className="hover:text-foreground transition-colors">
              Skills
            </Link>
            <span>•</span>
            <Link href="/services" className="hover:text-foreground transition-colors">
              Services
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* Meta */}
          <div className="flex flex-col gap-1 text-center md:text-right">
            <p className="text-sm text-muted-foreground">Designed & Engineered / {currentYear}</p>

            <p className="text-xs text-muted-foreground/60">
              React · Next.js · TypeScript · Tailwind CSS
            </p>
          </div>
        </div>

        {/* Brand / Signature */}
        <div className="w-full pt-8 border-t border-border/10">
          <div className="group cursor-default flex flex-col items-center w-full">
            <p className="text-xs sm:text-sm text-muted-foreground/60 uppercase tracking-[0.35em] font-mono mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500 text-center">
              A Signature Production
            </p>

            <div className="w-full flex flex-col items-center select-none overflow-hidden py-2">
              {/* Surname — Big Visual Editorial Signature */}
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-none font-black font-heading uppercase tracking-tighter text-transparent [-webkit-text-stroke:1.5px_hsl(var(--accent))] sm:[-webkit-text-stroke:2px_hsl(var(--accent))] opacity-40 group-hover:opacity-90 transition-all duration-700 drop-shadow-sm text-center">
                {'DASARI'.split('').map((char, index) => (
                  <span
                    key={index}
                    className="inline-block transition-transform duration-500 hover:scale-105 hover:-translate-y-2 hover:text-accent"
                  >
                    {char}
                  </span>
                ))}
              </h1>

              {/* First Name — Bold Monospace / Tracking Sub-Signature */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-black uppercase tracking-[0.15em] sm:tracking-[0.25em] text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground))] opacity-25 group-hover:opacity-60 transition-all duration-500 text-center -mt-2 sm:-mt-4">
                {'SRIHARIKRISHNA'.split('').map((char, index) => (
                  <span
                    key={index}
                    className="inline-block transition-transform duration-500 hover:scale-110 hover:opacity-100 hover:text-foreground cursor-crosshair"
                  >
                    {char}
                  </span>
                ))}
              </h2>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-border/10">
          <p className="text-xs text-muted-foreground/50">
            © {currentYear} Sriharikrishna Dasari. All rights reserved.
          </p>

          <p className="text-xs text-muted-foreground/50 font-mono">
            BUILDING SCALABLE DIGITAL PRODUCTS.
          </p>
        </div>
      </div>
    </footer>
  );
}
