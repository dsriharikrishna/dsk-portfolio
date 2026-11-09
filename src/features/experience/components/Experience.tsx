'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { experiences } from '@/features/experience/data/experience';
import SectionHeader from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-12 sm:py-16 lg:py-20 relative bg-secondary/15 border-t border-border/50"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="w-full"
        >
          <SectionHeader
            tag="EXPERIENCE"
            title="Career"
            titleHighlight="Timeline"
            subtitle="My professional journey building products, scaling frontend systems, and driving measurable impact."
            className="!mb-0"
          />
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent w-full">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const numberString = (index + 1).toString().padStart(2, '0');

            return (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-center md:odd:flex-row-reverse group is-active w-full"
              >
                {/* Content Side */}
                <div className="w-[calc(100%-4rem)] md:w-auto md:flex-1 flex md:justify-end md:group-odd:justify-start md:px-8">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="w-full"
                  >
                    <Card className="p-6 sm:p-7 hover:border-accent/50 transition-colors flex flex-col gap-4 bg-card/85">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex flex-col gap-0.5">
                          <h4 className="text-xl sm:text-2xl font-heading font-black text-foreground">
                            {exp.company}
                          </h4>
                          <p className="text-sm text-accent font-medium">{exp.title}</p>
                        </div>
                        <Badge variant="secondary" className="font-mono text-xs w-fit">
                          {exp.period}
                        </Badge>
                      </div>

                      <ul className="flex flex-col gap-2 pt-2 border-t border-border/40">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                          >
                            <span className="text-accent mt-0.5 text-xs">▹</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                </div>

                {/* Icon */}
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border border-border shadow shrink-0 z-10 font-bold font-mono text-xs
                  ${index === 0 ? 'bg-background text-accent border-accent/30' : 'bg-card text-muted-foreground'}
                `}
                >
                  {numberString}
                </div>

                {/* Opposite Side Image */}
                <div className="hidden md:flex md:flex-1 items-center justify-center p-8">
                  {exp.image && (
                    <Image
                      src={exp.image}
                      alt={exp.company}
                      width={560}
                      height={560}
                      className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
