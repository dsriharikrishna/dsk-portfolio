'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import GlassCard from '@/components/shared/GlassCard';
import { experiences } from '@/data/experience';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-header',
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
        '.exp-card',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.exp-timeline',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-6 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          tag="CAREER PATH"
          title="Work "
          titleHighlight="Experience"
          subtitle="My professional journey and contributions"
          className="exp-header"
        />

        {/* Timeline */}
        <div className="exp-timeline max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experiences.map((exp, index) => (
            <div key={index} className="exp-card relative pl-16 md:pl-20 pb-12 last:pb-0">
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-6 top-1">
                <div className="timeline-dot" />
              </div>

              {/* Card */}
              <GlassCard className="p-6">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-semibold">{exp.title}</span>
                  </div>
                  <span className="text-muted-foreground">@</span>
                  <span className="text-foreground font-medium">{exp.company}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
