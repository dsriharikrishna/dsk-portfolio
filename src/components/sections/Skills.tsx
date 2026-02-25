'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '@/components/shared/SectionHeader';
import { skillCategories } from '@/data/skills';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skills-header',
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
        '.skill-category',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.skill-item',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.03,
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-6 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          tag="TECH STACK"
          title="Skills & "
          titleHighlight="Expertise"
          subtitle="Technologies and tools I use to bring ideas to life"
          className="skills-header"
        />

        {/* Skills Grid */}
        <div className="skills-grid max-w-5xl mx-auto space-y-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
