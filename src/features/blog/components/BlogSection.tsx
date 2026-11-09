'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const blogTopics = [
  'React',
  'Next.js',
  'TypeScript',
  'Architecture',
  'Performance',
  'Docker',
  'AWS',
  'AI Products',
];

export default function BlogSection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 relative bg-secondary/10 border-t border-border/50">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
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

        <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
          {blogTopics.map((topic, index) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.05 }}
            >
              <Badge
                variant="secondary"
                className="px-3.5 py-1.5 text-xs font-mono font-medium hover:border-accent hover:text-accent transition-colors cursor-default"
              >
                {topic}
              </Badge>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Button asChild size="default">
            <Link href="/blog">
              Read Articles
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
