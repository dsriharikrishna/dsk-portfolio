'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/features/projects/data/projects';
import SectionHeader from '@/components/shared/SectionHeader';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="product"
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
            tag="CASE STUDIES"
            title="Featured"
            titleHighlight="Systems"
            subtitle="In-depth case studies showcasing architectural decisions, performance tradeoffs, and measurable product outcomes."
            className="!mb-0"
          />
        </motion.div>

        {/* Featured Projects */}
        <div className="flex flex-col gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="rounded-3xl overflow-hidden shadow-xl relative bg-card/80 border-border/80">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

                <div className="p-6 md:p-10 lg:p-12 flex flex-col gap-8 relative z-10">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="accent"
                        className="font-mono text-xs uppercase tracking-widest"
                      >
                        {project.category || 'Flagship Project'}
                      </Badge>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-black">{project.title}</h4>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <div className="flex flex-col gap-3">
                      <h5 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                        The Problem
                      </h5>
                      <p className="text-muted-foreground text-sm leading-relaxed italic border-l-2 border-border pl-4">
                        {project.problem}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <h5 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                        The Solution
                      </h5>
                      <div className="bg-secondary/40 border border-border/40 rounded-xl p-5 text-sm text-muted-foreground leading-relaxed">
                        {project.solution}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/50">
                    <div className="flex flex-col gap-1">
                      <div className="text-xs font-mono uppercase text-muted-foreground">Role</div>
                      <div className="font-medium text-sm">{project.role}</div>
                    </div>
                    <div className="flex flex-col gap-1 col-span-3">
                      <div className="text-xs font-mono uppercase text-muted-foreground">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {project.tech.map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="font-mono text-xs font-normal"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Supporting Systems */}
        <div className="grid md:grid-cols-2 gap-5 w-full">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="p-6 md:p-7 hover:border-accent/60 transition-colors group cursor-pointer flex flex-col justify-between h-full bg-card/70">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="text-[11px] font-mono">
                      {project.category || 'Supporting System'}
                    </Badge>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {project.problem || project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-border/40">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-[10px] font-mono font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge
                      variant="outline"
                      className="text-[10px] font-mono font-normal text-muted-foreground"
                    >
                      +{project.tech.length - 4}
                    </Badge>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
