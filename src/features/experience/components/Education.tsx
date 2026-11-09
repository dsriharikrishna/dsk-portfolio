'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
    <section
      ref={sectionRef}
      id="education"
      className="w-full py-12 sm:py-16 lg:py-20 relative border-t border-border/50"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="edu-header w-full">
          <SectionHeader
            tag="ACADEMIC BACKGROUND"
            title="Formal"
            titleHighlight="Education"
            subtitle="Academic foundation and coursework in computer science and engineering."
            className="!mb-0"
          />
        </div>

        {/* Education Grid */}
        <div className="edu-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full">
          {education.map((edu, index) => {
            const Icon = iconMap[index as keyof typeof iconMap] || Award;
            return (
              <Card
                key={index}
                className="edu-card p-6 group hover:border-accent/50 transition-colors flex flex-col gap-4 items-center text-center justify-between bg-card/75"
              >
                <div className="flex flex-col items-center gap-3 w-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col gap-1 w-full">
                    <h3 className="text-base sm:text-lg font-heading font-bold text-foreground leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-accent text-xs sm:text-sm font-medium">{edu.institution}</p>
                  </div>

                  <Badge variant="secondary" className="font-mono text-xs">
                    {edu.period}
                  </Badge>
                </div>

                {edu.description && (
                  <p className="text-muted-foreground text-xs leading-relaxed pt-3 border-t border-border/40 w-full">
                    {edu.description}
                  </p>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
