'use client';

import { ReactNode } from 'react';

interface SectionHeaderProps {
  tag: string;
  title: string;
  titleHighlight: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  titleHighlight,
  subtitle,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <span className="text-primary font-mono text-sm tracking-wider">{tag}</span>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading tracking-tight mt-4">
        {title}
        <span className="bg-gradient-to-r from-primary via-[hsl(220,85%,65%)] to-[hsl(262,83%,58%)] bg-clip-text text-transparent">{titleHighlight}</span>
      </h2>
      {subtitle && <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mt-4">{subtitle}</p>}
    </div>
  );
}
