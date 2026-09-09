'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type TechCategory = {
  id: string;
  name: string;
  items: string[];
};

const stackCategories: TechCategory[] = [
  { id: 'build', name: 'Build', items: ['Next.js', 'React', 'TypeScript', 'JavaScript'] },
  { id: 'design', name: 'Design', items: ['Tailwind', 'shadcn/ui', 'Magic UI', 'Framer Motion'] },
  { id: 'state', name: 'State', items: ['Redux Toolkit', 'Zustand', 'TanStack Query'] },
  { id: 'backend', name: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'Python'] },
  { id: 'data', name: 'Data', items: ['PostgreSQL', 'MongoDB', 'Prisma', 'SQL'] },
  { id: 'ship', name: 'Ship', items: ['Docker', 'AWS', 'GitHub Actions', 'Vercel'] },
];

const interactiveNodes = [
  { id: 'nextjs', label: 'NEXT.JS', x: 50, y: 10, details: { title: 'NEXT.JS', brief: 'The React framework for production. Enables fast, SEO-friendly applications with hybrid static & server rendering.', projects: ['ORKA.AI', 'Orkemy', 'Portfolio'], why: ['App Router', 'Server/Client architecture', 'Routing', 'Performance'] } },
  { id: 'react', label: 'React', x: 20, y: 30, details: { title: 'React', brief: 'A JavaScript library for building highly interactive and component-driven user interfaces.', projects: ['Multiple Dashboards'], why: ['Component Architecture', 'Hooks', 'Ecosystem'] } },
  { id: 'ts', label: 'TypeScript', x: 50, y: 30, details: { title: 'TypeScript', brief: 'Strongly typed programming language that builds on JavaScript, giving better tooling and type safety at scale.', projects: ['All Enterprise Apps'], why: ['Type Safety', 'Developer Experience', 'Fewer Bugs'] } },
  { id: 'tailwind', label: 'Tailwind', x: 80, y: 30, details: { title: 'Tailwind', brief: 'A utility-first CSS framework packed with classes that can be composed to build any design directly in markup.', projects: ['UI Systems'], why: ['Utility First', 'Speed', 'Design Systems'] } },
  { id: 'query', label: 'React Query', x: 50, y: 50, details: { title: 'React Query', brief: 'Powerful asynchronous state management, server-state caching, and data synchronization for React.', projects: ['ORKA.AI'], why: ['Server State Management', 'Caching', 'Invalidation'] } },
  { id: 'api', label: 'APIs (Node/FastAPI)', x: 50, y: 70, details: { title: 'APIs', brief: 'Robust backend services to power frontend clients, handle authentication, and orchestrate complex logic.', projects: ['Orkemy', 'Microservices'], why: ['REST', 'Performance', 'Scalability'] } },
  { id: 'db', label: 'PostgreSQL', x: 50, y: 90, details: { title: 'PostgreSQL', brief: 'An advanced, enterprise-class open-source relational database built for data integrity and heavy workloads.', projects: ['Data Heavy Apps'], why: ['Relational Data', 'Reliability', 'Complex Queries'] } },
];

export default function StackMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % interactiveNodes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeNode = interactiveNodes[activeIndex];

  const handleNodeClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false); // Stop autoplay when user interacts
  };

  return (
    <section className="py-32 relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4 text-center items-center"
        >
          <h2 className="text-3xl font-black">My Engineering Stack</h2>
          <p className="text-xl text-muted-foreground">Tools I use to solve problems.</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 w-full">
          {/* Stack Map Visualization */}
          <div className="lg:col-span-8 bg-card border border-border rounded-2xl p-8 relative min-h-[500px]">
            <div className="absolute inset-0 p-8">
              {/* Nodes */}
              {interactiveNodes.map((node, index) => (
                <motion.div
                  key={node.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${node.x}%`, top: `${node.y}%`, zIndex: activeIndex === index ? 20 : 10 }}
                >
                  <button
                    onClick={() => handleNodeClick(index)}
                    className={`px-4 py-2 rounded-lg font-mono text-sm font-bold transition-all duration-300 border
                      ${activeIndex === index
                        ? 'bg-accent/20 border-accent text-accent shadow-[0_0_20px_rgba(139,92,246,0.3)] scale-110'
                        : 'bg-background border-border text-foreground hover:border-accent/50'}`}
                  >
                    {node.label}
                  </button>
                </motion.div>
              ))}

              {/* Note: SVG lines connecting nodes would go here. For simplicity, we assume nodes imply flow from top to bottom */}
            </div>
          </div>

          {/* Node Details Panel */}
          <div className="lg:col-span-4">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-secondary/30 border border-border rounded-2xl p-8 h-full flex flex-col gap-8"
            >
              <h3 className="text-2xl font-black text-accent font-mono">{activeNode.details.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{activeNode.details.brief}</p>

              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Used For:</h4>
                <ul className="flex flex-col gap-2">
                  {activeNode.details.projects.map((project) => (
                    <li key={project} className="flex items-center gap-2 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {project}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Why:</h4>
                <ul className="flex flex-col gap-2">
                  {activeNode.details.why.map((reason) => (
                    <li key={reason} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-border" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Categorized List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full">
          {stackCategories.map((category) => (
            <div key={category.id} className="flex flex-col gap-4">
              <h4 className="font-mono text-sm tracking-widest text-accent uppercase">{category.name}</h4>
              <ul className="flex flex-col gap-2">
                {category.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
