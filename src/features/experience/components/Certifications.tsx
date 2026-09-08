'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Award, Trophy, BookOpen, Code2 } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import GlassCard from '@/components/shared/GlassCard';
import { certifications, certificationsSection } from '@/features/experience/data/certifications';

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

  const getCategoryBadge = (category: string) => {
    const badges = {
      certification: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      award: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      course: 'bg-green-500/10 text-green-400 border-green-500/20',
      hackathon: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    };
    return badges[category as keyof typeof badges] || badges.certification;
  };

  return (
    <section ref={sectionRef} id="certifications" className="py-24 relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-16">
        <div className="w-full">
          <SectionHeader
            tag={certificationsSection.tag}
            title={certificationsSection.title}
            titleHighlight={certificationsSection.titleHighlight}
            subtitle={certificationsSection.subtitle}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon as keyof typeof iconMap] || Code2;
            return (
              <GlassCard key={index} className="cert-card p-8 group hover:border-primary/30 transition-all duration-300 flex flex-col gap-6">
                {/* Icon and Category */}
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryBadge(cert.category)}`}
                  >
                    {cert.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-foreground leading-tight line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs font-mono text-muted-foreground/60">{cert.date}</p>
                  </div>
                </div>

                {/* Verification Link */}
                {cert.verificationUrl && cert.verificationUrl !== '#' && (
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      Verify Certificate
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
