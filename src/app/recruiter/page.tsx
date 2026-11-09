'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from '@/features/about/components/About';
import Experience from '@/features/experience/components/Experience';
import Education from '@/features/experience/components/Education';
import Certifications from '@/features/experience/components/Certifications';
import Contact from '@/features/contact/components/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function RecruiterPage() {
  useEffect(() => {
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="pt-16 sm:pt-20 pb-12 flex flex-col">
      <About />
      <Experience />
      <Certifications />
      <Education />
      <Contact />
    </div>
  );
}
