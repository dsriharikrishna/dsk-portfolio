'use client';

import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';

const blogTopics = [
  'React', 'Next.js', 'TypeScript', 'Architecture', 'Performance', 'Docker', 'AWS', 'AI Products'
];

export default function BlogSection() {
  return (
    <section className="py-8 md:py-12 relative bg-secondary/10 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-8 md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          <SectionHeader
            tag="WRITING & LEARNING"
            title="Engineering"
            titleHighlight="Insights"
            subtitle="Deep dives into technical challenges, architecture patterns, and lessons learned building real-world products."
            className="!mb-0"
          />
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
