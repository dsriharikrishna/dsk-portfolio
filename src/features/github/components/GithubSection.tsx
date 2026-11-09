'use client';

import { motion } from 'framer-motion';
import { Github, GitPullRequest, GitCommit, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/features/contact/data/contact';

export default function GithubSection() {
  const githubUrl =
    socialLinks.find((s) => s.name.toLowerCase() === 'github')?.href ||
    'https://github.com/dsriharikrishna';

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 relative border-t border-border/50">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="w-full"
        >
          <SectionHeader
            tag="OPEN SOURCE"
            title="GitHub"
            titleHighlight="Ecosystem"
            subtitle="Supporting evidence of how I write, test, review, and ship open source repositories."
            className="!mb-0"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-4xl mx-auto">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Explore my public repositories, architectural prototypes, and engineering
              contributions across full-stack applications.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="default">
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Explore GitHub
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="p-6 rounded-2xl border border-border bg-card flex flex-col items-center justify-center text-center gap-2"
            >
              <GitPullRequest className="w-6 h-6 text-accent" />
              <div className="text-3xl font-black">50+</div>
              <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest">
                Repositories
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card flex flex-col items-center justify-center text-center gap-2"
            >
              <GitCommit className="w-6 h-6 text-accent" />
              <div className="text-3xl font-black">1000+</div>
              <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest">
                Contributions
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
