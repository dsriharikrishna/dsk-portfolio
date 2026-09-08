'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-secondary/10 border-t border-border/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-black tracking-tight">
              Have a Product <span className="text-accent">Problem?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I don't just write code. I solve complex business problems through scalable interfaces. Let's figure it out together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="mailto:hello@example.com"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:shadow-[0_0_60px_rgba(139,92,246,0.5)]"
            >
              <Mail className="w-5 h-5" />
              Let's Talk
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 pt-12 border-t border-border/50">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mr-4">Connect</p>
            <Link href="https://github.com/dasarisriharikrishna" target="_blank" className="p-3 rounded-full bg-card border border-border hover:border-accent hover:text-accent transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com/in/dasarisriharikrishna" target="_blank" className="p-3 rounded-full bg-card border border-border hover:border-accent hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="p-3 rounded-full bg-card border border-border hover:border-accent hover:text-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
