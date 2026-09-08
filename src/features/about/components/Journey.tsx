'use client';

import { motion } from 'framer-motion';
import { Terminal, Lightbulb, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const journeys = [
  {
    id: 'engineer',
    title: 'ENGINEER',
    icon: Terminal,
    description: 'Architecture, Stack, Problem solving',
    href: '#engineer',
    items: ['Architecture', 'Stack', 'Problem solving'],
  },
  {
    id: 'product',
    title: 'PRODUCT',
    icon: Lightbulb,
    description: 'Projects, UX decisions, Case studies',
    href: '#product',
    items: ['Projects', 'UX decisions', 'Case studies'],
  },
  {
    id: 'recruiter',
    title: 'RECRUITER',
    icon: FileText,
    description: 'Experience, Resume, Contact',
    href: '#recruiter',
    items: ['Experience', 'Resume', 'Contact'],
  },
];

export default function Journey() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 border-t border-border/50 bg-secondary/30 relative">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <h2 className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            How do you want to explore?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 w-full">
          {journeys.map((journey, index) => {
            const Icon = journey.icon;
            return (
              <motion.div
                key={journey.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(journey.href)}
                className="group cursor-pointer rounded-2xl border border-border bg-card p-8 hover:border-accent hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-300 relative overflow-hidden flex flex-col gap-8"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                  <ArrowRight className="w-5 h-5 text-accent" />
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-secondary text-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold tracking-wider text-xl">{journey.title}</h3>
                </div>

                <ul className="flex flex-col gap-4">
                  {journey.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-accent/50 transition-colors" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
