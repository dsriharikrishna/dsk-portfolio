'use client';

import { motion } from 'framer-motion';
import { Terminal, Monitor, Cpu, Database, Cloud, ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import { Meteors } from '@/components/ui/meteors';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { resumeUrl } from '@/features/contact/data/resume';

const systemNodes = [
  { id: 'user', label: 'USER', icon: null },
  { id: 'ui', label: 'UI', icon: Monitor },
  { id: 'logic', label: 'LOGIC', icon: Terminal },
  { id: 'api', label: 'API', icon: Cpu },
  { id: 'data', label: 'DATA', icon: Database },
  { id: 'cloud', label: 'CLOUD', icon: Cloud },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-[87vh] flex flex-col items-center justify-center relative overflow-hidden py-16 sm:py-24 lg:py-26"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Meteors number={20} />
      </div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent opacity-20 blur-[100px]"></div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-4 sm:gap-5 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase font-medium">
              Frontend Engineer · Product Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-tight"
          >
            Building scalable digital products
            <br />
            <span className="text-muted-foreground">with modern frontend engineering.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              I&apos;m a frontend-focused engineer with 2+ years of experience building responsive
              web applications, enterprise dashboards, and SaaS platforms using React, Next.js, and
              TypeScript.
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-mono text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Hyderabad, India
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                2+ Years Production Experience
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Available for Select Projects
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 w-full sm:w-auto"
          >
            <Button asChild size="lg" className="font-semibold shadow-md">
              <Link href="/projects">
                Explore Projects
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
            <Button asChild variant="accent" size="lg" className="font-semibold">
              <Link href="/contact">Let&apos;s Work Together</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-1.5" />
                Resume
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-4 border-t border-border/40 w-full flex flex-wrap gap-2 items-center"
          >
            <span className="text-xs font-mono text-muted-foreground mr-1 uppercase tracking-wider">
              Core:
            </span>
            {[
              'Next.js',
              'React',
              'TypeScript',
              'Tailwind CSS',
              'TanStack Query',
              'REST APIs',
              'Node.js',
              'Docker',
            ].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-[11px] font-mono">
                {tech}
              </Badge>
            ))}
          </motion.div>
        </div>

        {/* Right Content - System Architecture Visual */}
        <div className="hidden lg:flex flex-col items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full max-w-sm flex flex-col items-center gap-5 p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm shadow-2xl"
          >
            {systemNodes.map((node, index) => {
              const Icon = node.icon;
              const stepDelay = 0.45 + index * 0.18;
              const isFirst = index === 0;

              return (
                <div key={node.id} className="flex flex-col items-center w-full relative">
                  {/* Step Node */}
                  <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.92 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: stepDelay,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className={`w-full py-3 px-6 rounded-lg border flex items-center justify-center gap-3 bg-background/90 z-10 transition-all duration-200 cursor-default
                      ${
                        isFirst
                          ? 'border-transparent bg-transparent text-muted-foreground'
                          : 'border-border/80 hover:border-accent hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] shadow-md'
                      }`}
                  >
                    {Icon && (
                      <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: stepDelay + 0.1,
                          type: 'spring',
                          stiffness: 260,
                        }}
                      >
                        <Icon className="w-5 h-5 text-accent" />
                      </motion.div>
                    )}
                    <span className="font-mono font-bold tracking-widest text-sm">
                      {node.label}
                    </span>
                  </motion.div>

                  {/* Step Connector Line */}
                  {index < systemNodes.length - 1 && (
                    <div className="flex flex-col items-center h-6 w-[1px] relative">
                      {/* Growing connector track */}
                      <motion.div
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: stepDelay + 0.12,
                          ease: 'easeOut',
                        }}
                        style={{ transformOrigin: 'top' }}
                        className="w-full h-full bg-gradient-to-b from-border to-accent/60"
                      />

                      {/* Continuous Signal Packet Animation */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          y: [0, 24],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          delay: stepDelay + 0.4,
                          ease: 'linear',
                        }}
                        className="absolute top-0 left-[-2px] w-[5px] h-[5px] rounded-full bg-accent shadow-[0_0_8px_rgba(168,85,247,0.8)]"
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
