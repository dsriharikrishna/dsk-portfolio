'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import GlassCard from '@/components/shared/GlassCard';
import { education } from '@/data/education';

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
    <section ref={sectionRef} id="education" className="py-6 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          tag="ACADEMIC BACKGROUND"
          title="My "
          titleHighlight="Education"
          className="edu-header"
        />

        {/* Education Grid */}
        <div className="edu-grid grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {education.map((edu, index) => {
            const Icon = iconMap[index as keyof typeof iconMap];
            return (
              <GlassCard key={index} className="edu-card p-6 text-center group card-hover">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
                <p className="text-primary text-sm font-medium mb-3">{edu.institution}</p>
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-lg mb-4">
                  <span className="text-primary text-xs font-semibold">{edu.period}</span>
                </div>
                {edu.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                )}
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
