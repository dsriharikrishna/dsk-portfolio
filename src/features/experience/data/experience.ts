import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    title: 'Product Engineer',
    company: 'Signitives IT Solutions',
    period: '2024 – Present',
    description: [
      'Developed and maintained enterprise SaaS platforms including OrkaAI and SanathanaVani using Next.js, React, TypeScript, and modern frontend architecture.',
      'Built scalable and reusable UI components with Next.js, Tailwind CSS, shadcn/ui, Redux Toolkit, Zustand, and TanStack Query.',
      'Integrated REST APIs for authentication, CRUD operations, campaign management, datasets, task workflows, analytics, and media management.',
      'Implemented role-based access control (RBAC) across Enterprise, LOB, Program Manager, Annotator, and Vendor workflows.',
      'Developed complex campaign creation, dataset management, task assignment, evaluation, workflow, and job-status polling flows.',
      'Worked on backend integrations using Node.js, FastAPI, PostgreSQL, Prisma, and asynchronous API workflows.',
      'Implemented CSV upload, schema mapping, media upload, pagination, filtering, validation, and data-table workflows.',
      'Resolved QA issues, improved application performance, optimized state management, and delivered responsive production-ready interfaces.',
      'Worked with Git, GitHub, Docker, AWS S3, EC2, Vercel, and CI/CD-oriented development workflows.',
    ],
    image: '/signitives.png',
  },

  {
    title: 'Frontend Developer Intern',
    company: 'InternPe',
    period: '2023',
    description: [
      'Developed responsive web interfaces using HTML5, CSS3, and JavaScript.',
      'Built mobile-responsive and cross-browser compatible web pages following modern UI practices.',
      'Worked with Git and collaborative development workflows.',
      'Strengthened fundamentals of frontend development, responsive design, and web development.',
    ],
    image: '/intern pe.png',
  },
];
