'use client';

import React from 'react';

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
    <div className={`flex flex-col text-center items-center mb-6 md:mb-8 ${className}`}>
      {tag && (
        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent font-semibold inline-block">
          {tag.startsWith('//') ? tag : `// ${tag}`}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tight mt-2 leading-[1.15]">
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
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mt-2.5 leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
