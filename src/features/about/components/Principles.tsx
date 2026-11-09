'use client';

import { motion } from 'framer-motion';
import { Layers, ShieldAlert, Zap, Box, CheckCircle2 } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/card';

const principles = [
  {
    title: 'Keep complexity where it belongs.',
    description:
      "Don't push backend complexity into the UI. Keep components focused on presentation and user interaction.",
    icon: Box,
  },
  {
    title: 'Separate state responsibilities.',
    description:
      'Client state ≠ server state. Global stores should not hold API cache, and API cache should not manage UI toggles.',
    icon: Layers,
  },
  {
    title: 'Build for failure.',
    description:
      'Loading, empty, and error states are part of the product. An application is only as good as how it handles when things break.',
    icon: ShieldAlert,
  },
  {
    title: 'Optimize intentionally.',
    description:
      'Measure first. Optimize second. Premature optimization introduces technical debt without measurable user benefit.',
    icon: Zap,
  },
  {
    title: 'Ship the complete feature.',
    description:
      'UI → API → Validation → Testing → Deployment. A feature is not done when it looks good on localhost.',
    icon: CheckCircle2,
  },
];

export default function Principles() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 relative border-t border-border/50">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="w-full"
        >
          <SectionHeader
            tag="HOW I THINK"
            title="Engineering"
            titleHighlight="Principles"
            subtitle="Core philosophies that guide my architecture, code quality, and decision-making."
            className="!mb-0"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`h-full ${index === principles.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <Card className="p-6 h-full flex flex-col gap-3.5 bg-card/75 hover:border-accent/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-base sm:text-lg font-heading font-bold text-foreground">
                      {principle.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
