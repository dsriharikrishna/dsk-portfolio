'use client';

import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { resumeUrl } from '../data/resume';

export default function ResumeSection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 relative border-t border-border/50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Card className="p-8 sm:p-10 text-center shadow-xl relative flex flex-col items-center gap-6 bg-card/80">
            <div className="p-3.5 bg-secondary border border-border/80 rounded-2xl text-accent">
              <FileText className="w-7 h-7" />
            </div>

            <div className="w-full">
              <SectionHeader
                tag="CREDENTIALS"
                title="Professional"
                titleHighlight="Resume"
                subtitle="Frontend Engineer & Product Engineer — Verified Career Profile"
                className="!mb-0"
              />
            </div>

            <Button asChild size="lg" className="font-semibold shadow-md">
              <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                View & Download Resume
              </Link>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
