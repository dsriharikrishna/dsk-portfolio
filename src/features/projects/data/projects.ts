
import { Project } from '@/types';

export const projects: Project[] = [
  // =========================================================
  // FLAGSHIP PROJECTS
  // =========================================================

  {
    title: 'ORKA.AI',
    subtitle: 'Enterprise AI Operations Platform',
    category: 'AI Product Engineering',
    featured: true,

    problem:
      'AI operations involve complex workflows across datasets, campaigns, AI layers, human-in-the-loop tasks, evaluation, benchmarking, vendors and multiple user roles. The challenge was turning this operational complexity into a clear and usable enterprise product.',

    solution:
      'Built and refined production frontend experiences across role-based modules and complex workflows, connecting UI state, server state and APIs while continuously improving usability, validation, loading states, data handling and frontend performance.',

    role:
      'Frontend / Product Engineering',

    highlights: [
      'Enterprise, LOB, Annotator and Vendor experiences',
      'Campaign creation and workflow experiences',
      'Dataset management workflows',
      'AI layer configuration and execution experiences',
      'Human-in-the-loop workflow interfaces',
      'Evaluation and benchmarking experiences',
      'Dynamic forms, validation and complex UI states',
      'API integration and server-state management',
      'Data-heavy tables, filters and dashboards',
      'Loading, empty and error state handling',
      'Frontend performance and rendering optimization',
      'Production-focused UI/UX improvements',
    ],

    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Redux Toolkit',
      'TanStack Query',
      'Tailwind CSS',
      'React Hook Form',
      'Zod',
      'TanStack Table',
      'Recharts',
    ],

    caseStudySlug: 'orka-ai',
  },

  {
    title: 'Orkemy',
    subtitle: 'AI Evaluation & Benchmarking Platform',
    category: 'AI Product Engineering',
    featured: true,

    problem:
      'AI evaluation requires structured datasets, benchmarks, evaluation dimensions, contributor workflows and regression tracking. The challenge was presenting these interconnected systems through a product experience that remains understandable and efficient for users.',

    solution:
      'Built and refined frontend experiences across the admin and contributor sides of the platform, integrating APIs and creating data-driven workflows for datasets, benchmarks, evaluations, dimensions, leaderboards and regression tracking.',

    role:
      'Frontend / Product Engineering',

    highlights: [
      'Admin dashboard and management experiences',
      'Contributor dashboard and workflows',
      'Dataset management',
      'Integrations and domain management',
      'Contributor playground experience',
      'Benchmark suite API integration',
      'Evaluation workflows',
      'Dynamic evaluation dimensions',
      'Leaderboard experience',
      'Regression tracking',
      'Filtering and data-driven interfaces',
      'API payload and integration improvements',
      'Loading and error state handling',
      'Frontend architecture and performance improvements',
    ],

    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Redux Toolkit',
      'TanStack Query',
      'Tailwind CSS',
      'Recharts',
    ],

    caseStudySlug: 'orkemy',
  },

  {
    title: 'ORKA Marketing Website',
    subtitle: 'AI Product Marketing & Brand Experience',
    category: 'End-to-End Product Design & Development',
    featured: true,

    problem:
      'ORKA needed a modern marketing website capable of communicating a complex AI operations product through a clear, engaging and premium digital experience without relying on predefined UI designs.',

    solution:
      'Owned the website end-to-end, starting from product understanding and UI/UX direction through visual design, component architecture, frontend development, responsive implementation, animations and production-ready refinement.',

    role:
      'End-to-End Product Engineer — Design → Development',

    highlights: [
      'Owned the website from concept to implementation',
      'Designed the UI/UX without predefined designs',
      'Created the visual direction and page structure',
      'Translated complex product capabilities into marketing content',
      'Designed reusable frontend components',
      'Built responsive desktop and mobile experiences',
      'Implemented interactive animations and micro-interactions',
      'Created polished visual transitions',
      'Focused on usability and visual hierarchy',
      'Handled the complete frontend development lifecycle',
    ],

    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'GSAP',
      'Responsive Design',
    ],

    caseStudySlug: 'orka-marketing-website',
  },

  // =========================================================
  // PROFESSIONAL PROJECTS
  // =========================================================

  {
    title: 'SanathanaVani',
    subtitle: 'Digital Media & Content Management Platform',
    category: 'Product Engineering',
    featured: false,

    problem:
      'Digital media platforms need flexible content workflows for managing and publishing different content formats while keeping the experience intuitive for administrators and users.',

    solution:
      'Built scalable frontend modules for a digital media platform supporting audio, video and eBook content, along with publishing, event management and rich content editing experiences.',

    role:
      'Frontend Developer / Product Engineer',

    highlights: [
      'Audio and video content experiences',
      'eBook content workflows',
      'Content management',
      'Publishing workflows',
      'Event management',
      'Rich text editing with Tiptap',
      'Reusable frontend components',
      'API integration',
      'Responsive product interfaces',
    ],

    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'Tiptap',
      'REST APIs',
    ],

    caseStudySlug: 'sanathanavani',
  },

  {
    title: 'EducareAI',
    subtitle: 'Education & AI Platform',
    category: 'EdTech / AI',
    featured: false,

    problem:
      'Education platforms need secure access, role-based experiences and clear analytics so users can work with complex student and operational information without unnecessary friction.',

    solution:
      'Developed frontend experiences covering authentication, role-based access, analytics and API-driven product workflows with reusable React components and structured state management.',

    role:
      'Frontend Developer',

    highlights: [
      'Authentication experiences',
      'Role-based access control',
      'Student performance dashboards',
      'Analytics interfaces',
      'API integration',
      'Reusable React components',
      'State management',
      'Responsive UI',
    ],

    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'REST APIs',
    ],

    caseStudySlug: 'educare-ai',
  },

  {
    title: 'Pronto',
    subtitle: 'Provider & Booking Management Dashboard',
    category: 'SaaS / Admin Platform',
    featured: false,

    problem:
      'Operational teams need to manage providers and bookings efficiently while working with structured data, repetitive CRUD operations and large data sets.',

    solution:
      'Built a data-driven administration dashboard with reusable table components, pagination, CRUD workflows and structured state management to simplify operational tasks.',

    role:
      'Frontend Developer',

    highlights: [
      'Provider management',
      'Booking management',
      'CRUD workflows',
      'Pagination',
      'Reusable data-table components',
      'Data-driven dashboards',
      'State management',
      'API integration',
    ],

    tech: [
      'React',
      'Node.js',
      'Redux Toolkit',
      'Material UI',
      'REST APIs',
    ],

    caseStudySlug: 'pronto',
  },

  {
    title: 'Fit4Hire',
    subtitle: 'AI-Powered Career Platform',
    category: 'AI / Career Technology',
    featured: false,

    problem:
      'Job seekers often need to create ATS-friendly resumes while also discovering and filtering relevant opportunities across large job datasets.',

    solution:
      'Developed frontend experiences for a career platform combining resume creation, job discovery and advanced filtering into a streamlined user workflow.',

    role:
      'Frontend Developer',

    highlights: [
      'ATS-oriented resume builder',
      'Job discovery experience',
      'Advanced job filtering',
      'Responsive interfaces',
      'REST API integration',
      'Redux state management',
      'Reusable UI components',
    ],

    tech: [
      'React',
      'Redux Toolkit',
      'Tailwind CSS',
      'REST APIs',
    ],

    caseStudySlug: 'fit4hire',
  },

  {
    title: 'Lucas Form Fill',
    subtitle: 'Browser Automation Extension',
    category: 'Developer Tool / Automation',
    featured: false,

    problem:
      'Manually entering repetitive information into web forms is inefficient, especially when different websites use different field structures and DOM selectors.',

    solution:
      'Built a browser automation extension that maps JSON data to DOM selectors and dynamically uses those mappings to populate web forms.',

    role:
      'Frontend / JavaScript Developer',

    highlights: [
      'JSON-to-form mapping',
      'Dynamic DOM selector mapping',
      'Automatic form filling',
      'Browser API integration',
      'DOM manipulation',
      'Dynamic field configuration',
      'Reusable automation workflows',
    ],

    tech: [
      'JavaScript',
      'MUI',
      'Browser APIs',
      'DOM APIs',
    ],

    caseStudySlug: 'lucas-form-fill',
  },
];
