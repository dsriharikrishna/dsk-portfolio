'use client';

import { motion } from 'framer-motion';
import { Github, GitPullRequest, GitCommit, Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function GithubSection() {
  return (
    <section className="py-24 relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-4">
                <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Open Source / Code</h2>
                <h3 className="text-3xl font-black flex items-center gap-4">
                  <Github className="w-10 h-10" />
                  GitHub
                </h3>
              </div>
              <p className="text-xl text-muted-foreground">
                I don't pretend GitHub activity is my primary achievement, but it serves as supporting evidence of how I write, review, and ship code.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://github.com/dasarisriharikrishna"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg font-semibold transition-colors"
                >
                  Explore GitHub
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-6 rounded-2xl border border-border bg-card flex flex-col items-center justify-center text-center gap-2"
            >
              <GitPullRequest className="w-6 h-6 text-accent" />
              <div className="text-3xl font-black">50+</div>
              <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest">Repositories</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card flex flex-col items-center justify-center text-center gap-2"
            >
              <GitCommit className="w-6 h-6 text-accent" />
              <div className="text-3xl font-black">1000+</div>
              <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest">Contributions</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
