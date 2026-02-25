'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '@/data/contact';
import { heroData } from '@/data/about';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-line',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
        .fromTo(
          '.social-icon',
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1 },
          '-=0.2'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const iconMap = {
    Github,
    Linkedin,
    Mail,
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '-3s' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="overflow-hidden mb-4">
            <p className="hero-line text-primary font-mono text-sm md:text-base tracking-wider">
              {heroData.greeting}
            </p>
          </div>

          {/* Name */}
          <h1 ref={titleRef} className="mb-6">
            <div className="overflow-hidden">
              <span className="hero-line block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">
                {heroData.name}
              </span>
            </div>
          </h1>

          {/* Role */}
          <div className="overflow-hidden mb-8">
            <p className="hero-line text-2xl md:text-3xl lg:text-4xl font-light">
              <span className="text-gradient font-semibold">{heroData.roles[0]}</span>
              <span className="text-muted-foreground"> & </span>
              <span className="text-gradient font-semibold">{heroData.roles[1]}</span>
            </p>
          </div>

          {/* Description */}
          <p
            ref={subtitleRef}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href={heroData.cta.primary.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(heroData.cta.primary.href);
              }}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold 
                       hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 
                       hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              {heroData.cta.primary.label}
            </a>
            <a
              href={heroData.cta.secondary.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(heroData.cta.secondary.href);
              }}
              className="px-8 py-4 border border-border rounded-xl font-semibold 
                       hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 w-full sm:w-auto text-center"
            >
              {heroData.cta.secondary.label}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="social-icon p-3 rounded-full border border-border hover:border-primary/50 
                           hover:bg-secondary/50 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 
                   text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-xs font-mono">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
