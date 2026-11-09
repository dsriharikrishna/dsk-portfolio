'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Award, Trophy, BookOpen, Code2 } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { certifications, certificationsSection } from '@/features/experience/data/certifications';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Award,
  Trophy,
  BookOpen,
  Code2,
};

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cert-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
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
      id="certifications"
      className="w-full py-12 sm:py-16 lg:py-20 relative border-t border-border/50"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <SectionHeader
            tag={certificationsSection.tag}
            title={certificationsSection.title}
            titleHighlight={certificationsSection.titleHighlight}
            subtitle={certificationsSection.subtitle}
            className="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon as keyof typeof iconMap] || Code2;
            return (
              <Card
                key={index}
                className="cert-card p-5 sm:p-6 group hover:border-accent/50 transition-all duration-300 flex flex-col justify-between gap-4 bg-card/75"
              >
                <div className="flex flex-col gap-3">
                  {/* Icon and Category */}
                  <div className="flex items-start justify-between">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="secondary" className="text-[10px] capitalize">
                      {cert.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base sm:text-lg font-heading font-bold text-foreground leading-tight line-clamp-2 group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                        {cert.issuer}
                      </p>
                      <p className="text-[11px] font-mono text-muted-foreground/60">{cert.date}</p>
                    </div>
                  </div>
                </div>

                {/* Verification Link */}
                {cert.verificationUrl && cert.verificationUrl !== '#' && (
                  <div className="pt-3 border-t border-border/40">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline font-mono"
                    >
                      <span>Verify Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
