'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideInLeft';
  delay?: number;
  duration?: number;
}

export default function ScrollAnimation({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const animations = {
      fadeInUp: { y: 40, opacity: 0 },
      fadeIn: { opacity: 0 },
      scaleIn: { scale: 0.8, opacity: 0 },
      slideInLeft: { x: -50, opacity: 0 },
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(elementRef.current, animations[animation], {
        y: animation === 'fadeInUp' ? 0 : undefined,
        x: animation === 'slideInLeft' ? 0 : undefined,
        scale: animation === 'scaleIn' ? 1 : undefined,
        opacity: 1,
        duration,
        delay,
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, [animation, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
