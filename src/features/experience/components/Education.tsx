'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import GlassCard from '@/components/shared/GlassCard';
import { education } from '@/features/experience/data/education';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  0: GraduationCap,
  1: Award,
  2: Award,
};

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.edu-header',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.edu-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.edu-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="py-24 relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-16">
        {/* Section Header */}
        <div className="edu-header w-full">
          <SectionHeader
            tag="ACADEMIC BACKGROUND"
            title="My "
            titleHighlight="Education"
          />
        </div>

        {/* Education Grid */}
        <div className="edu-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {education.map((edu, index) => {
            const Icon = iconMap[index as keyof typeof iconMap];
            return (
              <GlassCard key={index} className="edu-card p-8 group hover:border-accent/50 transition-colors flex flex-col gap-6 items-center text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-foreground leading-tight">{edu.degree}</h3>
                  <p className="text-primary text-sm font-medium">{edu.institution}</p>
                </div>

                <div className="inline-block px-3 py-1 bg-secondary rounded-lg">
                  <span className="text-muted-foreground text-xs font-mono tracking-widest uppercase">{edu.period}</span>
                </div>

                {edu.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed mt-auto pt-4 border-t border-border/50 w-full">{edu.description}</p>
                )}
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
