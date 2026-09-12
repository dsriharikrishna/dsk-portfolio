'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { aboutData } from '@/features/about/data/about';
import SectionHeader from '@/components/shared/SectionHeader';

export default function About() {
  return (
    <section id="about" className="pt-20 pb-16 lg:pt-32 lg:pb-20relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-8 md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          <SectionHeader
            tag={aboutData.tag}
            title={aboutData.title}
            titleHighlight={aboutData.titleHighlight}
            subtitle="Full Stack Product Engineer specializing in scalable interfaces and clean architectural systems."
            className="!mb-0"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Left Content - The Story */}
          <div className="flex flex-col gap-4 text-base md:text-lg text-muted-foreground leading-relaxed">
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
