'use client';

import { motion } from 'framer-motion';
import { aboutData } from '@/features/about/data/about';

export default function About() {
  const revealSteps = aboutData.highlights.map((h) => h.title);

  return (
    <section id="about" className="py-32 relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content - The Story */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-2"
            >
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">{aboutData.tag}</h3>
              <h2 className="text-3xl font-black leading-[1.1]">
                {aboutData.title} <span className="text-accent">{aboutData.titleHighlight}</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              {aboutData.summary.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right Content - The Reveal */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="flex flex-col items-center gap-2">
              {revealSteps.map((step, index) => (
                <div key={step} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className={`px-8 py-4 rounded-xl border font-mono tracking-wider text-sm md:text-base whitespace-nowrap
                      ${index === revealSteps.length - 1 
                        ? 'border-accent bg-accent/10 text-accent font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)]' 
                        : 'border-border bg-card text-foreground'}`}
                  >
                    {step}
                  </motion.div>
                  
                  {index < revealSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileInView={{ opacity: 1, height: 24 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.3, delay: (index * 0.15) + 0.2 }}
                      className="w-[1px] bg-gradient-to-b from-border to-accent/50 my-2"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
