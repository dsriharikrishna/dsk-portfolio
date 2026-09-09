'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import Link from 'next/link';

export default function ResumeSection() {
  return (
    <section className="py-24 relative border-t border-border/50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-card border border-border p-12 rounded-3xl text-center shadow-2xl relative flex flex-col items-center gap-8"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-4 bg-background border border-border rounded-2xl">
            <FileText className="w-8 h-8 text-accent" />
          </div>

          <div className="flex flex-col items-center gap-4 mt-6">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Make It Extremely Easy</h2>
            <h3 className="text-3xl font-black">View Resume</h3>
          </div>
          
          <p className="text-xl font-medium text-foreground/90">
            Frontend-focused Full Stack Product Engineer
          </p>

          <Link
            href="https://docs.google.com/document/d/123S0y3jKENNQMnQz_RROW853e8SCmQ5-/edit?usp=sharing&ouid=116905612445915389938&rtpof=true&sd=true"
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-xl font-bold text-lg hover:bg-foreground/90 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <FileText className="w-5 h-5" />
            View Document
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
