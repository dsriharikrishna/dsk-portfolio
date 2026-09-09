'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { experiences } from '@/features/experience/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4 text-center items-center"
        >
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Experience</h2>
          <h3 className="text-3xl font-black text-accent">Career Timeline</h3>
        </motion.div>

        <div className="flex flex-col gap-24 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent w-full">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const numberString = (index + 1).toString().padStart(2, '0');

            return (
              <div key={index} className="relative flex items-center justify-between md:justify-center md:odd:flex-row-reverse group is-active w-full">
                
                {/* Content Side */}
                <div className="w-[calc(100%-4rem)] md:w-auto md:flex-1 flex md:justify-end md:group-odd:justify-start md:px-8">
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full bg-card border border-border p-8 rounded-2xl shadow-xl hover:border-accent/50 transition-colors flex flex-col gap-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <h4 className="text-2xl font-black">{exp.company}</h4>
                        <p className="text-muted-foreground font-medium">{exp.title}</p>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">{exp.period}</span>
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                      <ul className="flex flex-col gap-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-accent mt-1 text-sm">▹</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Icon */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-border shadow shrink-0 z-10 font-bold font-mono text-xs
                  ${index === 0 ? 'bg-background text-accent border-accent/30' : 'bg-card text-muted-foreground'}
                `}>
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
