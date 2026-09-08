'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/features/projects/data/projects';

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="product" className="py-32 relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4 text-center items-center"
        >
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Case Studies</h2>
          <h3 className="text-3xl font-black">Featured Systems</h3>
        </motion.div>

        {/* Featured Projects */}
        <div className="flex flex-col gap-12">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
              
              <div className="p-8 md:p-12 lg:p-16 flex flex-col gap-12 relative z-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-bold uppercase tracking-widest">
                      {project.category || 'Flagship Project'}
                    </div>
                  </div>
                  <h4 className="text-3xl font-black">{project.title}</h4>
                  <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-4">
                    <h5 className="font-mono text-sm uppercase tracking-widest text-accent">The Problem</h5>
                    <p className="text-muted-foreground leading-relaxed italic border-l-2 border-border pl-4">
                      {project.problem}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <h5 className="font-mono text-sm uppercase tracking-widest text-accent">The Solution</h5>
                    <div className="bg-secondary/50 rounded-xl p-6 text-sm text-muted-foreground leading-relaxed">
                      {project.solution}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border">
                  <div className="flex flex-col gap-1">
                    <div className="text-xs font-mono uppercase text-muted-foreground">Role</div>
                    <div className="font-medium text-sm">{project.role}</div>
                  </div>
                  <div className="flex flex-col gap-1 col-span-3">
                    <div className="text-xs font-mono uppercase text-muted-foreground">Tech Stack</div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tech.map(t => (
                        <span key={t} className="px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground/80">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting Systems */}
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {otherProjects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-colors group cursor-pointer flex flex-col gap-6"
            >
              <div className="flex justify-between items-start">
                <div className="px-3 py-1 rounded-full bg-secondary text-foreground font-mono text-xs uppercase tracking-widest">
                  {project.category || 'Supporting System'}
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl font-bold">{project.title}</h4>
                <p className="text-muted-foreground line-clamp-3">
                  {project.problem || project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.tech.slice(0, 4).map(tech => (
                  <span key={tech} className="px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground/80">{tech}</span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground/80">+{project.tech.length - 4}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
