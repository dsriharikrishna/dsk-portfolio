'use client';

import { skillCategories } from '@/features/skills/data/skills';
import { Marquee } from '@/components/ui/marquee';
import { Highlighter } from '@/components/ui/highlighter';
import { TextReveal } from '@/components/ui/text-reveal';
import { cn } from '@/lib/utils';

export default function Skills() {
  // We'll flatten some skills to create continuous marquee rows
  const frontendSkills = skillCategories.find(c => c.title === 'Frontend')?.skills || [];
  const backendSkills = skillCategories.find(c => c.title === 'Backend')?.skills || [];
  const toolsSkills = skillCategories.find(c => c.title === 'Tools & Others')?.skills || [];

  return (
    <section id="skills" className="relative bg-secondary/20 flex flex-col pb-24">
      {/* Cinematic Scroll Reveal Title */}
      <div className="z-10 flex min-h-[100vh] items-center justify-center bg-transparent">
        <TextReveal>Technologies and tools I use to bring ideas to life</TextReveal>
      </div>

      <div className="container mx-auto px-6 relative z-10 -mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            My <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]">Skillset</span>
          </h2>
        </div>

        {/* Marquee Rows */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden w-full gap-8">
          
          {/* Frontend Row - Scrolling Left */}
          {frontendSkills.length > 0 && (
            <div className="w-full">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest pl-8 mb-4">Frontend</h3>
              <Marquee pauseOnHover className="[--duration:40s]">
                {frontendSkills.map((skill, idx) => (
                  <Highlighter key={idx} padding={6} color="hsl(var(--primary) / 0.2)" animationDuration={400}>
                    <div className="flex items-center justify-center px-6 py-3 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-foreground font-medium text-lg cursor-pointer hover:border-primary/50 transition-colors">
                      {skill}
                    </div>
                  </Highlighter>
                ))}
              </Marquee>
            </div>
          )}

          {/* Backend Row - Scrolling Right (Reverse) */}
          {backendSkills.length > 0 && (
            <div className="w-full">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest pl-8 mb-4 text-right pr-8">Backend</h3>
              <Marquee reverse pauseOnHover className="[--duration:45s]">
                {backendSkills.map((skill, idx) => (
                  <Highlighter key={idx} padding={6} color="hsl(var(--accent) / 0.2)" animationDuration={400}>
                    <div className="flex items-center justify-center px-6 py-3 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-foreground font-medium text-lg cursor-pointer hover:border-accent/50 transition-colors">
                      {skill}
                    </div>
                  </Highlighter>
                ))}
              </Marquee>
            </div>
          )}

          {/* Tools Row - Scrolling Left */}
          {toolsSkills.length > 0 && (
            <div className="w-full">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest pl-8 mb-4">Tools & Ecosystem</h3>
              <Marquee pauseOnHover className="[--duration:50s]">
                {toolsSkills.map((skill, idx) => (
                  <Highlighter key={idx} padding={6} color="hsl(var(--primary) / 0.2)" animationDuration={400}>
                    <div className="flex items-center justify-center px-6 py-3 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-foreground font-medium text-lg cursor-pointer hover:border-primary/50 transition-colors">
                      {skill}
                    </div>
                  </Highlighter>
                ))}
              </Marquee>
            </div>
          )}

          {/* Gradient Edges for Marquee fading effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-background to-transparent dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-background to-transparent dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}
