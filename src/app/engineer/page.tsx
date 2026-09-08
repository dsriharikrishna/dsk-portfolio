'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Principles from '@/features/about/components/Principles';
import EngineeringLab from '@/features/projects/components/EngineeringLab';
import StackMap from '@/features/skills/components/StackMap';
import GithubSection from '@/features/github/components/GithubSection';

gsap.registerPlugin(ScrollTrigger);

export default function EngineerPage() {
  useEffect(() => {
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="">
      <Principles />
      <EngineeringLab />
      <StackMap />
      <GithubSection />
    </div>
  );
}
