'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        'bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl',
        hover && 'hover:border-primary/30 transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  );
}
