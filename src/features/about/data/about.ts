import { Code2, Layers, Zap, Shield } from 'lucide-react';

export const aboutData = {
  tag: 'ABOUT ME',
  title: 'Engineering Scalable ',
  titleHighlight: 'Web Systems',
  summary: [
    'I am a Frontend Engineer and Product Engineer with 2+ years of experience building scalable, production-ready web applications using React, Next.js, TypeScript, and modern frontend architecture.',
    'At Signitives IT Solutions, I work on enterprise SaaS platforms including OrkaAI, Orkemy, and SanathanaVani. My work focuses on translating complex multi-stakeholder workflows into fast, accessible, and intuitive digital interfaces.',
    'My core engineering philosophy centers on reusable component design, resilient client & server-state synchronization (TanStack Query, Redux Toolkit, Zustand), strict schema validation (Zod + React Hook Form), and robust API integration.',
    'I bridge frontend engineering with backend foundations (Node.js, FastAPI, PostgreSQL, Prisma, Docker) to deliver seamless end-to-end features—from data-intensive dashboards and role-based workflows to high-performance marketing web experiences.',
  ],
  highlights: [
    {
      icon: Code2,
      title: 'Component Architecture',
      description:
        'Designing modular, atomic, and strictly typed UI systems with Next.js, React, and TypeScript.',
    },
    {
      icon: Layers,
      title: 'Enterprise Dashboards',
      description:
        'Building complex workflows, RBAC portals, data tables with pagination, filtering, and chart analytics.',
    },
    {
      icon: Zap,
      title: 'Performance & Usability',
      description:
        'Optimizing rendering cycles, minimizing layout shifts, and implementing smooth micro-interactions.',
    },
    {
      icon: Shield,
      title: 'Production Resilience',
      description:
        'Ensuring secure REST API integrations, comprehensive error handling, and accessible UI states.',
    },
  ],
};

export const heroData = {
  greeting: "Hello, I'm",
  name: 'Dasari Sriharikrishna',
  roles: ['Full Stack Developer', 'React / Next.js / Node.js'],
  description:
    'Building scalable, production-ready web applications with modern technologies. Specialized in clean architecture, performance optimization, and intuitive UI systems.',
  cta: {
    primary: { label: 'Get In Touch', href: '#contact' },
    secondary: { label: 'View Projects', href: '#projects' },
  },
};
