'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  Flame,
  Layers,
  LayoutDashboard,
  Wrench,
  Workflow,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { servicesData, ServiceItem } from '@/features/services/data/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'business-websites': Globe,
  'landing-pages': Flame,
  'react-nextjs-apps': Layers,
  'admin-dashboards': LayoutDashboard,
  'frontend-improvements': Wrench,
  'api-integration': Workflow,
};

export default function ServicesSection() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <section
      id="services"
      className="w-full py-12 sm:py-16 lg:py-20 relative border-t border-border/50"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="w-full"
        >
          <SectionHeader
            tag={servicesData.tag}
            title={servicesData.heading}
            titleHighlight={servicesData.headingHighlight}
            subtitle={servicesData.subtitle}
            className="!mb-0"
          />
        </motion.div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {servicesData.services.map((service: ServiceItem, index: number) => {
            const Icon = iconMap[service.id] || Layers;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="h-full"
              >
                <Card className="group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full hover:border-accent/60 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 bg-card/75">
                  {/* Accent Top Border Glow */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-accent/30 group-hover:via-accent to-transparent transition-all duration-500" />

                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-center justify-between gap-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-accent border border-border/60 group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant="secondary" className="text-[10px]">
                        {service.badge}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-heading font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-3 border-t border-border/40 flex flex-col gap-1.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-foreground/80 font-semibold">
                        Key Deliverables
                      </span>
                      <ul className="flex flex-col gap-1 mt-1">
                        {service.deliverables.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border/40 flex flex-wrap gap-1.5 items-center">
                    {service.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-[10px] font-mono font-normal"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call To Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Card className="relative p-6 md:p-8 rounded-3xl border border-border bg-gradient-to-r from-card via-secondary/30 to-card overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-center md:text-left">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                {`// READY TO COLLABORATE?`}
              </span>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                Have a project or dashboard in mind?
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Whether you need a new web application built from scratch, complex dashboard
                workflows, or frontend improvements, let&apos;s build something exceptional
                together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Button onClick={scrollToContact} size="lg" className="font-semibold shadow-md">
                <MessageSquare className="w-4 h-4 mr-2" />
                Discuss Your Project
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
