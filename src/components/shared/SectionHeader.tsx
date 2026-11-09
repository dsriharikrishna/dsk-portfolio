'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  titleHighlight?: string;
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
    <div
      className={cn('flex flex-col text-center items-center gap-2 max-w-3xl mx-auto', className)}
    >
      {tag && (
        <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold inline-block">
          {tag.startsWith('//') ? tag : `// ${tag}`}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-heading font-black tracking-tight leading-tight">
        {title}
        {titleHighlight && (
          <>
            {' '}
            <span className="bg-gradient-to-r from-primary via-[hsl(220,85%,65%)] to-accent bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
