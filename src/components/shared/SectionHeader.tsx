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
      <h2 className="section-title mt-4">
        {title}
        <span className="text-gradient">{titleHighlight}</span>
      </h2>
      {subtitle && <p className="section-subtitle mx-auto mt-4">{subtitle}</p>}
    </div>
  );
}
