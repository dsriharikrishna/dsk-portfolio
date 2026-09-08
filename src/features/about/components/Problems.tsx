'use client';

import { motion } from 'framer-motion';

const problems = [
  {
    number: '01',
    title: 'Complex Workflows',
    question: 'How do you turn a complicated business process into a simple user experience?',
    example: 'Campaign creation / AI workflow systems.',
  },
  {
    number: '02',
    title: 'Data-Heavy Interfaces',
    question: 'How do you make large datasets, tables, filters and analytics feel simple?',
    example: 'Enterprise dashboards, datasets, benchmarking.',
  },
  {
    number: '03',
    title: 'State Complexity',
    question: 'How do you keep UI state and server state predictable as applications grow?',
    tools: ['Redux Toolkit', 'Zustand', 'TanStack Query', 'React Hook Form', 'Zod'],
  },
  {
    number: '04',
    title: 'Performance',
    question: 'How do you make a feature feel fast instead of simply making it work?',
  },
  {
    number: '05',
    title: 'Production',
    question: 'How do you take an application from a developer machine to a reliable production environment?',
    tools: ['Docker', 'Nginx', 'GitHub Actions', 'AWS', 'Environment variables', 'Health checks', 'Logs'],
  },
];

export default function Problems() {
  return (
    <section id="problems" className="py-32 relative bg-secondary/20 border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl flex flex-col gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl flex flex-col gap-6"
        >
          <h2 className="text-3xl font-black">
            Problems I <span className="text-accent">Like Solving</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Why should someone hire me? Because I enjoy untangling these exact challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border border-border bg-card relative group hover:border-accent transition-colors flex flex-col gap-6 ${
                index === problems.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="absolute top-8 right-8 font-mono text-3xl font-black text-muted/20 group-hover:text-accent/20 transition-colors">
                {problem.number}
              </div>
              
              <h3 className="text-2xl font-bold pr-12">{problem.title}</h3>
              
              <div>
                <p className="text-lg text-muted-foreground italic border-l-2 border-accent/50 pl-4 py-1">
                  &quot;{problem.question}&quot;
                </p>
              </div>

              {problem.example && (
                <div className="flex flex-col gap-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Example</div>
                  <p className="text-foreground/90 font-medium">{problem.example}</p>
                </div>
              )}

              {problem.tools && (
                <div className="flex flex-col gap-3">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Tools / Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {problem.tools.map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-secondary rounded-md text-sm text-foreground/80 font-medium border border-border/50">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
