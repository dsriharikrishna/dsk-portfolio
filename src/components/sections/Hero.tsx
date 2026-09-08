'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Terminal, Monitor, Cpu, Database, Cloud } from 'lucide-react';
import Link from 'next/link';
import { Meteors } from '@/components/ui/meteors';

const systemNodes = [
  { id: 'user', label: 'USER', icon: null },
  { id: 'ui', label: 'UI', icon: Monitor },
  { id: 'logic', label: 'LOGIC', icon: Terminal },
  { id: 'api', label: 'API', icon: Cpu },
  { id: 'data', label: 'DATA', icon: Database },
  { id: 'cloud', label: 'CLOUD', icon: Cloud },
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-32 pb-20"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Meteors number={20} />
      </div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-20 blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full max-w-7xl">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-mono text-sm tracking-wider text-muted-foreground uppercase">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-black leading-[1.1]"
          >
            I BUILD PRODUCTS,
            <br />
            <span className="text-muted-foreground">NOT JUST INTERFACES.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-heading font-semibold text-accent">
              Frontend-focused Full Stack Product Engineer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I turn complex SaaS and AI workflows into fast, intuitive and production-ready web experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection('#product')}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold 
                       hover:bg-primary/90 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore My Work
            </button>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 border border-border bg-card rounded-lg font-semibold 
                       hover:border-accent hover:text-accent transition-all duration-300 w-full sm:w-auto text-center"
            >
              Download Resume
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-8 border-t border-border/50 w-full mt-8"
          >
            <p className="font-mono text-xs md:text-sm text-muted-foreground uppercase tracking-widest leading-loose">
              NEXT.JS • REACT • TYPESCRIPT • NODE.JS
              <br />
              POSTGRESQL • DOCKER • AWS
            </p>
          </motion.div>
        </div>

        {/* Right Content - System Architecture Visual */}
        <div className="hidden lg:flex flex-col items-center justify-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full max-w-sm flex flex-col items-center gap-6 p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
          >
            {systemNodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <div key={node.id} className="flex flex-col items-center w-full relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-full py-3 px-6 rounded-lg border flex items-center justify-center gap-3 bg-background z-10 transition-colors
                      ${index === 0 ? 'border-transparent bg-transparent text-muted-foreground' : 'border-border hover:border-accent shadow-lg'}`}
                  >
                    {Icon && <Icon className={`w-5 h-5 ${index === 0 ? '' : 'text-accent'}`} />}
                    <span className="font-mono font-bold tracking-widest">{node.label}</span>
                  </motion.div>
                  
                  {/* Connector Line */}
                  {index < systemNodes.length - 1 && (
                    <div className="flex flex-col items-center h-6 w-[1px] bg-gradient-to-b from-border to-accent/50 relative">
                      <motion.div 
                        animate={{ 
                          y: [0, 24],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.4,
                          ease: "linear"
                        }}
                        className="absolute top-0 left-[-2px] w-[5px] h-[5px] rounded-full bg-accent"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
