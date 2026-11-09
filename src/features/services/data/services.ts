export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  tech: string[];
}

export const servicesData: {
  tag: string;
  heading: string;
  headingHighlight: string;
  subtitle: string;
  services: ServiceItem[];
} = {
  tag: 'FREELANCE SERVICES',
  heading: 'Turning Ideas Into',
  headingHighlight: 'Reliable Web Applications',
  subtitle:
    'I help businesses, startups, and product teams build responsive websites, modern web applications, and intuitive dashboards using React, Next.js, and TypeScript.',
  services: [
    {
      id: 'business-websites',
      title: 'Business Websites',
      badge: 'Web Design & Build',
      description:
        'Fast, high-converting, and SEO-friendly corporate websites designed to establish trust and generate customer inquiries.',
      deliverables: [
        'Responsive multi-device layouts',
        'Modern, accessible design system',
        'Conversion-optimized contact & inquiry forms',
        'SEO-optimized architecture & semantic HTML',
        'Deployment to Vercel/Netlify with custom domain',
      ],
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      badge: 'Conversion Focused',
      description:
        'Sleek product launch and marketing landing pages engineered for fast loading times and maximum lead conversion.',
      deliverables: [
        'Clear visual hierarchy with strong value propositions',
        'High-contrast call-to-action (CTA) integration',
        'Subtle, engaging micro-interactions and animations',
        'Performance optimization (Lighthouse target 90+)',
        'Analytics & lead capture integrations',
      ],
      tech: ['React', 'Next.js', 'Tailwind CSS', 'shadcn/ui'],
    },
    {
      id: 'react-nextjs-apps',
      title: 'React & Next.js Applications',
      badge: 'Frontend Engineering',
      description:
        'Modular, enterprise-ready web applications built with scalable component architectures and production-level state management.',
      deliverables: [
        'Reusable, atomic UI component systems',
        'Robust client and server-side state architecture',
        'Role-based access control (RBAC) & auth flows',
        'API integration with error & loading states',
        'Strict TypeScript type safety throughout',
      ],
      tech: ['React', 'Next.js (App Router)', 'TypeScript', 'Redux Toolkit / Zustand'],
    },
    {
      id: 'admin-dashboards',
      title: 'Admin Dashboards & SaaS Panels',
      badge: 'Data-Intensive UIs',
      description:
        'Intuitive management portals, workflow management interfaces, and analytics dashboards for operational efficiency.',
      deliverables: [
        'Data-heavy tables with sorting, filtering, and pagination',
        'Interactive charts and KPI performance cards',
        'Complex forms with schema validation (Zod + React Hook Form)',
        'CSV/media upload and schema mapping flows',
        'Role-specific dashboard experiences',
      ],
      tech: ['Next.js', 'TanStack Table', 'Recharts', 'React Hook Form', 'Zod'],
    },
    {
      id: 'frontend-improvements',
      title: 'Frontend Refactoring & Performance',
      badge: 'Code Optimization',
      description:
        'Modernizing existing web applications by eliminating technical debt, boosting performance, and refining mobile UX.',
      deliverables: [
        'UI bug fixes and cross-browser stabilization',
        'Mobile responsiveness audits and layout fixes',
        'Core Web Vitals & bundle size optimization',
        'Component refactoring to clean React patterns',
        'Accessibility (WCAG) improvements',
      ],
      tech: ['TypeScript', 'Next.js', 'Chrome DevTools', 'Tailwind CSS'],
    },
    {
      id: 'api-integration',
      title: 'REST API & Third-Party Integration',
      badge: 'Full Stack Connection',
      description:
        'Seamlessly bridging backend APIs and third-party services into responsive, resilient frontend user interfaces.',
      deliverables: [
        'RESTful API communication with optimistic updates',
        'Resilient error handling and custom notification toasts',
        'Authentication handling (JWT, OAuth, session storage)',
        'Server-state synchronization via TanStack Query',
        'File uploads and multipart data pipelines',
      ],
      tech: ['TanStack Query', 'Axios / Fetch', 'REST APIs', 'Node.js'],
    },
  ],
};
