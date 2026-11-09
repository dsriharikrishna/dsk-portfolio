'use client';

import { motion } from 'framer-motion';
import { aboutData } from '@/features/about/data/about';
import SectionHeader from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/card';

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-12 sm:py-16 lg:py-20 relative border-t border-border/50"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="w-full"
        >
          <SectionHeader
            tag={aboutData.tag}
            title={aboutData.title}
            titleHighlight={aboutData.titleHighlight}
            subtitle="Frontend & Product Engineer focused on scalable component architectures, data-driven dashboards, and production-quality SaaS systems."
            className="!mb-0"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content - The Story */}
          <div className="flex flex-col gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
            {aboutData.summary.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
            {aboutData.highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="p-4 sm:p-5 h-full hover:border-accent/50 transition-all flex flex-col gap-2.5 group bg-card/60">
                    <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
