'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Projects from '@/features/projects/components/Projects';
import BlogSection from '@/features/blog/components/BlogSection';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsPage() {
  useEffect(() => {
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="pt-16 sm:pt-20 pb-12 flex flex-col">
      <Projects />
      <BlogSection />
    </div>
  );
}
