'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/sections/Hero';
import Journey from '@/features/about/components/Journey';
import About from '@/features/about/components/About';
import Problems from '@/features/about/components/Problems';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Hero />
      <Journey />
      <About />
      <Problems />
    </>
  );
}
