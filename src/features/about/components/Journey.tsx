'use client';

import { motion } from 'framer-motion';
import { Terminal, Lightbulb, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const journeys = [
  {
    id: 'engineer',
    title: 'ENGINEERING LAB',
    badge: 'Deep Dive',
    icon: Terminal,
    description:
      'Technical architecture, deep-dive problem solving, system design, and GitHub metrics.',
    href: '/engineer',
    items: ['Component Architecture', 'Tech Stack Breakdown', 'GitHub Contributions'],
  },
  {
    id: 'product',
    title: 'FEATURED PROJECTS',
    badge: 'Case Studies',
    icon: Lightbulb,
    description:
      'Flagship enterprise platforms, UI/UX problem-solving, and live project deliverables.',
    href: '/projects',
    items: ['OrkaAI & Orkemy Platforms', 'Design → Dev Workflows', 'Dashboard Implementations'],
  },
  {
    id: 'recruiter',
    title: 'RECRUITER OVERVIEW',
    badge: 'Quick Review',
    icon: FileText,
    description: 'Concise career timeline, verified education, credentials, and resume access.',
    href: '/recruiter',
    items: ['Professional Experience', 'Verified Certifications', 'Direct Contact & Resume'],
  },
];

import SectionHeader from '@/components/shared/SectionHeader';

export default function Journey() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 border-t border-border/50 bg-secondary/15 relative">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <SectionHeader
            tag="PERSPECTIVES"
            title="Explore My Work"
            titleHighlight="Your Way"
            subtitle="Tailored journeys whether you want to review technical architecture, project case studies, or hiring qualifications."
            className="!mb-0"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 w-full">
          {journeys.map((journey, index) => {
            const Icon = journey.icon;
            return (
              <motion.div
                key={journey.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link href={journey.href} className="block h-full group">
                  <Card className="h-full p-7 flex flex-col justify-between group-hover:border-accent/60 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] transition-all duration-300 relative overflow-hidden bg-card/60">
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-xl bg-secondary text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-[10px]">
                            {journey.badge}
                          </Badge>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <h3 className="font-heading font-bold tracking-tight text-lg text-foreground group-hover:text-accent transition-colors">
                          {journey.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {journey.description}
                        </p>
                      </div>

                      <ul className="flex flex-col gap-2.5 pt-4 border-t border-border/40">
                        {journey.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2.5 text-xs text-muted-foreground group-hover:text-foreground/90 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between text-xs font-mono text-accent">
                      <span>Enter {journey.title.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
