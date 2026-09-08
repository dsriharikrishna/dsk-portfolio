'use client';

import { Meteors } from '@/components/ui/meteors';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-background pt-12 pb-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <Meteors number={20} />
      </div>
      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-16 relative z-10">

        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Identity */}
          <div className="relative group flex flex-col gap-2 text-center md:text-left">
            {/* Focus Light Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/30 via-accent/5 to-transparent blur-xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none" />

            <h4 className="relative z-10 text-xl font-black tracking-tight">
              Sriharikrishna{' '}
              <span className="text-accent drop-shadow-[0_0_10px_rgba(var(--accent),0.8)]">DASARI</span>
            </h4>

            <p className="relative z-10 text-muted-foreground font-mono text-xs uppercase tracking-widest">
              Frontend-focused Full Stack Product Engineer
            </p>
          </div>

          {/* Meta */}
          <div className="flex flex-col gap-1 text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Designed & Engineered / {currentYear}
            </p>

            <p className="text-xs text-muted-foreground/60">
              Built with Next.js, Tailwind & Framer Motion
            </p>
          </div>

        </div>

        {/* Brand / Signature */}
        <div className="w-full pt-8 border-t border-border/10">
          <div className="group cursor-default flex flex-col items-center w-full">

            <p className="text-[10px] md:text-xs text-muted-foreground/50 uppercase tracking-[0.4em] font-medium mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500 text-center">
              A Signature Production
            </p>

            <div className="w-full flex flex-col items-center">

              {/* Surname — Main Visual Focus */}
              <h1 className="mt-1 text-6xl md:text-8xl lg:text-9xl leading-none font-black uppercase tracking-tight text-transparent [-webkit-text-stroke:2px_hsl(var(--accent))] opacity-30 group-hover:opacity-80 transition-all duration-700 drop-shadow-sm">
                {'DASARI'.split('').map((char, index) => (
                  <span
                    key={index}
                    className="inline-block transition-all duration-500 hover:scale-110 hover:-translate-y-3 hover:text-accent hover:[-webkit-text-stroke:2px_hsl(var(--accent))]"
                  >
                    {char}
                  </span>
                ))}
              </h1>

              {/* First Name */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl leading-none font-black uppercase tracking-tight text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground))] opacity-10 group-hover:opacity-30 transition-all duration-500">
                {'SRIHARIKRISHNA'.split('').map((char, index) => (
                  <span
                    key={index}
                    className="inline-block transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:opacity-100 hover:text-foreground cursor-crosshair"
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
            BUILDING PRODUCTS, NOT JUST INTERFACES.
          </p>
        </div>

      </div>
    </footer>
  );
}