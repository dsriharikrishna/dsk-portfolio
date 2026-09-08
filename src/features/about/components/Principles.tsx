'use client';

import { motion } from 'framer-motion';
import { Layers, ShieldAlert, Zap, Box, CheckCircle2 } from 'lucide-react';

const principles = [
  {
    title: 'Keep complexity where it belongs.',
    description: "Don't push backend complexity into the UI. Keep components focused on presentation and user interaction.",
    icon: Box,
  },
  {
    title: 'Separate state responsibilities.',
    description: 'Client state ≠ server state. Global stores should not hold API cache, and API cache should not manage UI toggles.',
    icon: Layers,
  },
  {
    title: 'Build for failure.',
    description: 'Loading, empty, and error states are part of the product. An application is only as good as how it handles when things break.',
    icon: ShieldAlert,
  },
  {
    title: 'Optimize intentionally.',
    description: 'Measure first. Optimize second. Premature optimization introduces technical debt without measurable user benefit.',
    icon: Zap,
  },
  {
    title: 'Ship the complete feature.',
    description: 'UI → API → Validation → Testing → Deployment. A feature is not done when it looks good on localhost.',
    icon: CheckCircle2,
  },
];

export default function Principles() {
  return (
    <section className="py-32 relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4 text-center items-center"
        >
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">How I Think</h2>
          <h3 className="text-3xl font-black">Engineering Principles</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex gap-6 ${index === principles.length - 1 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-xl font-bold">{principle.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
