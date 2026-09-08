import { Code2, Layers, Zap, Shield } from 'lucide-react';

export const aboutData = {
  tag: 'ABOUT ME',
  title: 'Crafting Digital ',
  titleHighlight: 'Experiences',
  summary: [
    'I am a Full Stack Developer with up to 2 years of experience building scalable SaaS products and production-ready web applications using React.js, Next.js, TypeScript, and Node.js.',
    'My expertise spans developing dashboard systems, media platforms, and REST API integrations, with a focus on performance optimization and clean architecture. I specialize in designing reusable component structures, efficient state management, and highly responsive UI systems.',
    "I have significant experience in implementing role-based access control (RBAC), media management platforms, and interactive analytics dashboards. I am passionate about modern web technologies and building user-centric digital solutions.",
  ],
  highlights: [
    {
      icon: Code2,
      title: 'Full Stack Expertise',
      description: 'Proficient in MERN stack, Next.js, and TypeScript for end-to-end development.',
    },
    {
      icon: Layers,
      title: 'UI/UX Excellence',
      description:
        'Building highly responsive, user-centric UI systems with Tailwind CSS and Material-UI.',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Experience in optimizing rendering and state management for scalable applications.',
    },
    {
      icon: Shield,
      title: 'Secure Architecture',
      description: 'Expertise in implementing Authentication, RBAC, and secure REST API integrations.',
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

