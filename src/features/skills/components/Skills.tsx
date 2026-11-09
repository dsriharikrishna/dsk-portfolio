'use client';

import { skillCategories } from '@/features/skills/data/skills';
import { Marquee } from '@/components/ui/marquee';
import SectionHeader from '@/components/shared/SectionHeader';
import { TechIcon } from './TechIcon';

export default function Skills() {
  // Flatten skills for continuous marquee rows
  const frontendSkills = skillCategories.find((c) => c.title.includes('Frontend'))?.skills || [];
  const backendSkills = skillCategories.find((c) => c.title.includes('Backend'))?.skills || [];
  const toolsSkills =
    skillCategories.find((c) => c.title.includes('Tools') || c.title.includes('DevOps'))?.skills ||
    [];

  return (
    <section
      id="skills"
      className="w-full relative bg-secondary/10 flex flex-col py-12 sm:py-16 lg:py-20 border-t border-border/50 overflow-hidden"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          tag="SKILLS & PROFICIENCIES"
          title="Technical"
          titleHighlight="Skillset"
          subtitle="Modern frontend frameworks, robust state architectures, and full-stack engineering tools."
        />

        {/* Marquee Rows */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden w-full gap-6">
          {/* Frontend Row - Scrolling Left */}
          {frontendSkills.length > 0 && (
            <div className="w-full">
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground pl-4 mb-3">
                Frontend Engineering
              </h3>
              <Marquee pauseOnHover className="[--duration:35s] py-2">
                {frontendSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full border border-border/70 bg-card/80 backdrop-blur-md text-foreground font-medium text-sm md:text-base cursor-default hover:border-accent/60 hover:bg-card transition-all duration-300 shadow-sm"
                  >
                    <TechIcon name={skill} className="w-4 h-4 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          )}

          {/* Backend Row - Scrolling Right (Reverse) */}
          {backendSkills.length > 0 && (
            <div className="w-full">
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground text-right pr-4 mb-3">
                Backend & Systems
              </h3>
              <Marquee reverse pauseOnHover className="[--duration:40s] py-2">
                {backendSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full border border-border/70 bg-card/80 backdrop-blur-md text-foreground font-medium text-sm md:text-base cursor-default hover:border-accent/60 hover:bg-card transition-all duration-300 shadow-sm"
                  >
                    <TechIcon name={skill} className="w-4 h-4 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          )}

          {/* Tools Row - Scrolling Left */}
          {toolsSkills.length > 0 && (
            <div className="w-full">
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground pl-4 mb-3">
                Tools & Ecosystem
              </h3>
              <Marquee pauseOnHover className="[--duration:45s] py-2">
                {toolsSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full border border-border/70 bg-card/80 backdrop-blur-md text-foreground font-medium text-sm md:text-base cursor-default hover:border-accent/60 hover:bg-card transition-all duration-300 shadow-sm"
                  >
                    <TechIcon name={skill} className="w-4 h-4 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          )}

          {/* Gradient Edges for Marquee fading effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
