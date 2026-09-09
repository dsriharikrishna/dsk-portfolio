'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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

          {/* Right Content - The Image */}
          <div className="relative flex justify-center lg:justify-end w-full max-w-md mx-auto lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card/30"
            >
              <Image
                src="/dsk-1.png"
                alt="DSK illustration with goals and skills"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
