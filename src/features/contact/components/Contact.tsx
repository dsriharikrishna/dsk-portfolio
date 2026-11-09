'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import { contactInfo, socialLinks } from '@/features/contact/data/contact';
import { sendContactEmail } from '@/services/email';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const githubLink =
    socialLinks.find((s) => s.name.toLowerCase() === 'github')?.href ||
    'https://github.com/dsriharikrishna';
  const linkedinLink =
    socialLinks.find((s) => s.name.toLowerCase() === 'linkedin')?.href ||
    'https://www.linkedin.com/in/dasari-sriharikrishna/';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Application / SaaS',
    budget: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and project message.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const fullMessage = `Project Type: ${formData.projectType}\nBudget Range: ${formData.budget || 'Not specified'}\n\nMessage:\n${formData.message}`;
      const result = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        message: fullMessage,
      });

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          projectType: 'Web Application / SaaS',
          budget: '',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(
          result.error ||
            'Failed to send message. Please email directly at dsriharik8432@gmail.com.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please reach out directly via email.');
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-12 sm:py-16 lg:py-20 relative bg-secondary/10 border-t border-border/50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="w-full"
        >
          <SectionHeader
            tag="GET IN TOUCH"
            title="Let's Build"
            titleHighlight="Something Useful."
            subtitle="Have a website, dashboard, or frontend project in mind? Let's discuss how I can help."
            className="!mb-0"
          />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full">
          {/* Left Contact Card */}
          <Card className="lg:col-span-5 flex flex-col gap-6 p-6 sm:p-8 bg-card/80">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                {`// DIRECT COMMUNICATION`}
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mt-1">
                Start a Conversation
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                I typically respond within 24 hours. Feel free to send details about your project
                timeline and requirements.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-1">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/60 hover:border-accent hover:text-accent transition-colors group"
              >
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">
                    Email
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-accent">
                    {contactInfo.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/60">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1 mr-1" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">
                    Location & Timezone
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {contactInfo.location} (IST, UTC+5:30)
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-3 border-t border-border/60 flex items-center gap-2.5">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mr-1">
                Social
              </span>
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-full bg-secondary border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full bg-secondary border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </Card>

          {/* Right Contact Form */}
          <Card className="lg:col-span-7 p-6 sm:p-8 bg-card/80">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
                  >
                    Your Name *
                  </label>
                  <Input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
                  >
                    Your Email *
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-project-type"
                    className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
                  >
                    Project Type
                  </label>
                  <select
                    id="contact-project-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="flex h-11 w-full rounded-xl border border-border/80 bg-secondary/50 px-3.5 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-colors"
                  >
                    <option value="Web Application / SaaS">Web Application / SaaS</option>
                    <option value="Admin Dashboard">Admin Dashboard</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Business Website">Business Website</option>
                    <option value="Frontend Refactoring">Frontend Refactoring</option>
                    <option value="Full-time Opportunity">Full-time Opportunity</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-budget"
                    className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
                  >
                    Budget Range (Optional)
                  </label>
                  <Input
                    id="contact-budget"
                    type="text"
                    placeholder="e.g. $1,000 - $3,000"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
                >
                  Project Description *
                </label>
                <Textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about what you are looking to build, key goals, and any relevant timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Thank you! Your message was received. I will follow up shortly.</span>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === 'loading'}
                className="w-full font-semibold"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
