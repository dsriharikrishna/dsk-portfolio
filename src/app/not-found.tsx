import React from 'react';
import Link from 'next/link';
import { FileQuestion, Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background px-6 py-24">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center">
        {/* Glowing Badge & Icon */}
        <div className="relative w-20 h-20 rounded-2xl bg-secondary/80 border border-border flex items-center justify-center text-accent mb-6 shadow-2xl">
          <FileQuestion className="w-10 h-10" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent/30 border border-accent flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          </span>
        </div>

        {/* 404 Status Code */}
        <span className="text-xs md:text-sm font-mono tracking-widest text-accent uppercase px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-3">
          Error 404 &bull; Page Not Found
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight mb-4 text-foreground">
          Lost in Cyberspace?
        </h1>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-md">
          The page or route you requested does not exist, was moved, or is under development.
          Let&apos;s get you back to Srihari&apos;s portfolio.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-accent/25"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 border border-border text-foreground font-semibold text-sm transition-all duration-200"
          >
            <Compass className="w-4 h-4" />
            Explore Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
