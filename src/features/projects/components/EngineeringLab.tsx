'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const labTopics = [
  {
    id: 'state',
    title: 'State Management',
    content: (
      <div className="flex flex-col gap-6">
        <div className="font-mono text-sm border border-border bg-background p-6 rounded-xl relative">
          <div className="flex flex-col items-center">
            <span className="text-accent font-bold">USER</span>
            <div className="w-[1px] h-4 bg-border my-2"></div>
            <span className="bg-secondary px-3 py-1 rounded">React Component</span>
            <div className="w-[1px] h-4 bg-border my-2"></div>
            <div className="flex gap-12 text-center w-full justify-center">
              <div className="flex flex-col items-center gap-1">
                <span className="text-muted-foreground text-xs">UI State</span>
                <span className="bg-card border border-border px-3 py-1 rounded">Zustand / Redux</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-muted-foreground text-xs">Server State</span>
                <span className="bg-card border border-border px-3 py-1 rounded">React Query</span>
                <div className="w-[1px] h-4 bg-border my-2"></div>
                <span className="text-accent font-bold">API</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          I separate client state from server state instead of putting everything into one global store. React Query handles caching and synchronization, while Zustand/Redux manages pure UI interactions.
        </p>
      </div>
    ),
  },
  {
    id: 'architecture',
    title: 'System Architecture',
    content: (
      <div className="flex flex-col gap-6">
        <div className="font-mono text-sm border border-border bg-background p-6 rounded-xl relative overflow-hidden">
          <div className="flex flex-col items-center relative z-10">
            <span className="text-accent font-bold">CLIENT (Next.js / React)</span>
            <div className="w-[1px] h-6 bg-border my-2"></div>
            <div className="flex gap-8">
              <span className="bg-secondary px-4 py-2 rounded">UI State</span>
              <span className="bg-secondary px-4 py-2 rounded">Server State</span>
            </div>
            <div className="w-[1px] h-6 bg-border my-2"></div>
            <span className="text-primary font-bold">API (Node / FastAPI)</span>
            <div className="w-[1px] h-6 bg-border my-2"></div>
            <span className="bg-card border border-border px-4 py-2 rounded">Database (PostgreSQL)</span>
            <div className="w-[1px] h-6 bg-border my-2"></div>
            <span className="bg-card border border-border px-4 py-2 rounded">Infrastructure (Docker / AWS)</span>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          A scalable product requires clear boundaries. This architecture playground demonstrates the separation of concerns from the client-side UI to the underlying cloud infrastructure.
        </p>
      </div>
    ),
  },
  {
    id: 'performance',
    title: 'Performance',
    content: (
      <div className="flex flex-col gap-6">
        <div className="font-mono text-sm border border-border bg-background p-6 rounded-xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-destructive">Problem:</span>
              <span>Repeated renders causing UI lag</span>
            </div>
            <div className="w-[1px] h-4 bg-border ml-8"></div>
            <div className="flex items-center gap-4">
              <span className="text-yellow-500">Investigation:</span>
              <span>Identify expensive components via Profiler</span>
            </div>
            <div className="w-[1px] h-4 bg-border ml-8"></div>
            <div className="flex flex-col gap-2 ml-16 text-muted-foreground">
              <span>→ Implement useMemo / useCallback</span>
              <span>→ Memoize complex layouts</span>
              <span>→ Defer non-critical rendering</span>
            </div>
            <div className="w-[1px] h-4 bg-border ml-8"></div>
            <div className="flex items-center gap-4">
              <span className="text-green-500">Result:</span>
              <span>60fps smooth rendering behaviour</span>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          I don't just guess what's slow. I measure it, isolate the bottleneck, and apply targeted optimizations like component memoization or deferred state updates.
        </p>
      </div>
    ),
  },
];

export default function EngineeringLab() {
  const [activeTopic, setActiveTopic] = useState(labTopics[0].id);

  return (
    <section id="engineer" className="py-32 relative bg-secondary/10 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Engineering Lab</h2>
          <h3 className="text-3xl font-black">Interactive Playground</h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {labTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 font-medium ${
                  activeTopic === topic.id
                    ? 'bg-accent/10 border border-accent/50 text-accent'
                    : 'bg-card border border-border text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                {topic.title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 bg-card border border-border rounded-2xl p-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              {labTopics.map(
                (topic) =>
                  activeTopic === topic.id && (
                    <motion.div
                      key={topic.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col gap-8"
                    >
                      <h4 className="text-2xl font-bold text-foreground">{topic.title}</h4>
                      <div className="flex-grow">
                        {topic.content}
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
