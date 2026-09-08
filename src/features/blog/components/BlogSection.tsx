'use client';

import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogTopics = [
  'React', 'Next.js', 'TypeScript', 'Architecture', 'Performance', 'Docker', 'AWS', 'AI Products'
];

export default function BlogSection() {
  return (
    <section className="py-24 relative bg-secondary/10 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6 text-center items-center"
        >
          <div className="flex items-center justify-center gap-3">
            <BookOpen className="w-6 h-6 text-accent" />
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Writing & Learning</h2>
          </div>
          <h3 className="text-3xl font-black">Things I've Learned <br className="hidden md:block"/>Building Products</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I write about the engineering challenges I face and the solutions I implement.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {blogTopics.map((topic, index) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.05 }}
              className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors cursor-default"
            >
              {topic}
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors group"
          >
            Read my articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
