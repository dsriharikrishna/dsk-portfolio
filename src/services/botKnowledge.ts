import { aboutData } from '@/features/about/data/about';
import { contactInfo, socialLinks } from '@/features/contact/data/contact';
import { resumeUrl } from '@/features/contact/data/resume';
import { experiences } from '@/features/experience/data/experience';
import { education } from '@/features/experience/data/education';
import { certifications } from '@/features/experience/data/certifications';
import { projects } from '@/features/projects/data/projects';
import { skillCategories } from '@/features/skills/data/skills';
import { blogConfig } from '@/features/blog/data/blog';

export interface BotPrompt {
  id: string;
  category: 'About' | 'Stack' | 'Projects' | 'Experience' | 'Education' | 'Contact' | 'Resume';
  question: string;
  answer: string;
  thought?: string;
  link?: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

export interface BotReply {
  thought: string;
  text: string;
  link?: { label: string; href: string; isExternal?: boolean };
  suggestedPrompts?: string[];
}

// Core Knowledge Base dynamically synthesized from features/**/data
const allSkillsList = skillCategories.flatMap((c) => c.skills);
const topSkills = allSkillsList.slice(0, 10).join(', ');

const featuredProjects = projects.filter((p) => p.featured);
const currentRole = experiences[0];

export const BOT_QUESTIONS: BotPrompt[] = [
  // --- TECH STACK & SKILLS (from src/features/skills/data/skills.ts) ---
  {
    id: 'tech-stack',
    category: 'Stack',
    question: "What is Srihari's primary tech stack?",
    thought:
      'Analyzing technical skills repository across frontend, backend, and state management...',
    answer: `Srihari is a Full Stack Developer specialized in **${skillCategories[0].skills.join(', ')}**.\n\nFor state & asynchronous server state, he uses **${skillCategories[1].skills.slice(0, 4).join(', ')}**, and leverages **${skillCategories[4].skills.slice(0, 4).join(', ')}** with PostgreSQL for production-ready backends.`,
    link: { label: 'Explore Interactive Stack Map', href: '#skills' },
  },
  {
    id: 'backend-db',
    category: 'Stack',
    question: 'What backend and database tech does he use?',
    thought: 'Querying backend architecture and database schemas from skills data...',
    answer: `Here is Srihari's backend and database foundation:\n\n• **Backend Systems**: ${skillCategories.find((c) => c.title.includes('Backend'))?.skills.join(', ')}\n• **Databases & ORMs**: ${skillCategories.find((c) => c.title.includes('Databases'))?.skills.join(', ')}\n• **Cloud & Containers**: Docker, Docker Compose, AWS S3, Nginx`,
    link: { label: 'View Backend Skills', href: '#skills' },
  },

  // --- PROJECTS (from src/features/projects/data/projects.ts) ---
  {
    id: 'flagship-projects',
    category: 'Projects',
    question: 'What flagship projects has he engineered?',
    thought: 'Fetching flagship and featured projects from projects data...',
    answer: `Srihari has led engineering on several enterprise products:\n\n${featuredProjects.map((p, idx) => `${idx + 1}. **${p.title}** — ${p.subtitle}`).join('\n')}`,
    link: { label: 'View Featured Projects', href: '#projects' },
  },
  {
    id: 'orka-ai',
    category: 'Projects',
    question: 'Tell me about ORKA.AI & Orkemy',
    thought: 'Retrieving case study details for AI Product Engineering systems...',
    answer: `**ORKA.AI** is an Enterprise AI Operations Platform that turns operational complexity into intuitive interfaces across Enterprise, LOB, and Annotator roles.\n\n**Orkemy** evaluates and benchmarks AI models across structured datasets, test suites, and dynamic leaderboards. Both leverage Next.js, TypeScript, TanStack Query, and Redux Toolkit.`,
    link: { label: 'Inspect ORKA.AI Details', href: '#projects' },
  },

  // --- EXPERIENCE & ROLE (from src/features/experience/data/experience.ts) ---
  {
    id: 'current-experience',
    category: 'Experience',
    thought: 'Checking verified work history and active company roles...',
    question: 'What is his current role and experience?',
    answer: `Srihari currently works as a **${currentRole.title}** at **${currentRole.company}** (${currentRole.period}).\n\nHe has up to 2 years of professional experience developing enterprise SaaS platforms, implementing RBAC architectures, optimizing state management, and deploying production web systems.`,
    link: { label: 'View Experience Timeline', href: '#experience' },
  },

  // --- RESUME & DOWNLOAD (from src/features/contact/data/resume.ts) ---
  {
    id: 'resume-details',
    category: 'Resume',
    thought: 'Resolving verified resume document link...',
    question: 'Can I view or download his official resume?',
    answer: `Certainly! Srihari's verified resume is accessible directly. You can inspect all work history, achievements, and technical competencies.`,
    link: { label: 'Open Resume Document', href: resumeUrl, isExternal: true },
  },

  // --- EDUCATION & CERTIFICATIONS (from src/features/experience/data/education.ts & certifications.ts) ---
  {
    id: 'education-certs',
    category: 'Education',
    thought: 'Reviewing university degree records and certified accreditations...',
    question: 'What is his educational background & certifications?',
    answer: `Srihari graduated with a **${education[0].degree}** from **${education[0].institution}** (${education[0].period}).\n\n**Key Certifications:**\n• ${certifications.map((c) => `${c.title} — *${c.issuer}*`).join('\n• ')}`,
    link: { label: 'View Credentials', href: '#experience' },
  },

  // --- ABOUT & AVAILABILITY (from src/features/about/data/about.ts & contact.ts) ---
  {
    id: 'availability-hire',
    category: 'About',
    thought: 'Checking candidate availability status and preferred engagement types...',
    question: 'Is he available for hire or contract work?',
    answer: `Yes! Srihari is actively open for **Full Stack Product Engineer** and **Frontend Specialist** positions, as well as impactful consulting opportunities. He is located in **${contactInfo.location}** and open to remote and on-site roles.`,
    link: { label: 'Get in Touch', href: '#contact' },
  },
  {
    id: 'contact-info',
    category: 'Contact',
    thought: 'Retrieving official contact coordinates...',
    question: 'How can I contact Srihari directly?',
    answer: `You can connect with Srihari directly via:\n\n• **Email**: [${contactInfo.email}](mailto:${contactInfo.email})\n• **Phone**: [${contactInfo.phone}](tel:${contactInfo.phone.replace(/[^0-9+]/g, '')})\n• **Location**: ${contactInfo.location}\n• **LinkedIn**: [dasari-sriharikrishna](${socialLinks.find((s) => s.name === 'LinkedIn')?.href})`,
    link: { label: 'Open Contact Form', href: '#contact' },
  },
];

// Fuzzy matching regex utilities for robust edge cases
function sanitizeQuery(raw: string): string {
  // Strip control chars, collapse spaces, lowercase
  return raw
    .replace(/[^\w\s\+\#\.\-]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

// Check if string contains word boundary match
function hasWord(text: string, word: string): boolean {
  const escaped = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  return new RegExp(`(^|\\b|\\s)${escaped}(\\b|\\s|$)`, 'i').test(text);
}

// Helper: Specific Project Search
function matchSpecificProject(query: string) {
  for (const project of projects) {
    const title = project.title.toLowerCase();
    const slug = project.caseStudySlug?.toLowerCase() || '';
    const cleanTitle = title.replace(/[^a-z0-9]/gi, '');

    if (
      query.includes(title) ||
      (cleanTitle.length > 2 && query.includes(cleanTitle)) ||
      (slug && query.includes(slug))
    ) {
      return project;
    }
  }
  return null;
}

// Helper: Specific Technology / Skill Search
function matchSpecificSkill(query: string) {
  for (const cat of skillCategories) {
    for (const skill of cat.skills) {
      const lower = skill.toLowerCase();
      // Handle exact word matching for short tech names like "git", "sql", "aws", "css"
      if (lower.length <= 3) {
        if (hasWord(query, lower)) {
          return { skill, category: cat.title };
        }
      } else if (query.includes(lower)) {
        return { skill, category: cat.title };
      }
    }
  }
  return null;
}

// Intelligent conversational matching engine with full edge case handling
export function findBestBotAnswer(rawQuery: string): BotReply {
  const clean = sanitizeQuery(rawQuery);

  // EDGE CASE 1: Empty, whitespace-only, or pure punctuation input
  if (!clean || clean.length === 0) {
    return {
      thought: 'Empty or unreadable input detected...',
      text: "I didn't catch that. Could you ask a question about Srihari's projects, technical skills, or work experience?",
      suggestedPrompts: [
        "What is Srihari's primary tech stack?",
        'What flagship projects has he engineered?',
        'Can I view or download his official resume?',
      ],
    };
  }

  // EDGE CASE 2: Repetitive spam or keyboard mashing (e.g. "asdfasdf", "aaaaaaa", "123123")
  const isRepetitive =
    /(.)\1{4,}/.test(clean) ||
    (clean.length > 12 && !clean.includes(' ') && !matchSpecificSkill(clean));
  if (isRepetitive) {
    return {
      thought: 'Filtered irregular character sequence...',
      text: "That doesn't look like a question about Srihari's portfolio. You can choose one of the topics below or ask about his tech stack, projects, or experience!",
      suggestedPrompts: [
        "What is Srihari's primary tech stack?",
        'What projects has he built?',
        'How can I get in touch?',
      ],
    };
  }

  // EDGE CASE 3: Inappropriate, offensive, or adversarial prompts
  const inappropriateWords = [
    'hack',
    'jailbreak',
    'exploit',
    'password',
    'token',
    'secret_key',
    'bypass',
  ];
  if (inappropriateWords.some((w) => hasWord(clean, w))) {
    return {
      thought: 'Adversarial query boundary intercepted...',
      text: "I'm designed exclusively to help visitors explore Srihari's professional software engineering portfolio, projects, and credentials. Let's explore his work!",
      link: { label: 'Explore Key Skills', href: '#skills' },
      suggestedPrompts: [
        "What is Srihari's primary tech stack?",
        'What flagship projects has he engineered?',
        'Can I view or download his official resume?',
      ],
    };
  }

  // EDGE CASE 4: Gratitude and farewells
  if (
    clean === 'thanks' ||
    clean === 'thank you' ||
    clean === 'ty' ||
    clean.startsWith('thanks ') ||
    clean === 'bye' ||
    clean === 'goodbye' ||
    clean.includes('see you')
  ) {
    return {
      thought: 'Handling conversation closing or courtesy...',
      text: `You're very welcome! If you ever need to get in touch with Srihari directly for roles or projects, his inbox is always open. Have a great day!`,
      link: { label: 'Contact Srihari', href: '#contact' },
      suggestedPrompts: [
        'Can I view or download his official resume?',
        'How can I contact Srihari directly?',
      ],
    };
  }

  // 1. Check for specific named projects (e.g. "tell me about pronto", "how was sanathanavani built?", "orka")
  const matchedProject = matchSpecificProject(clean);
  if (matchedProject) {
    return {
      thought: `Found verified project archive for "${matchedProject.title}" in projects.ts...`,
      text: `**${matchedProject.title}** (${matchedProject.subtitle})\n\n**Role**: ${matchedProject.role}\n**Problem**: ${matchedProject.problem}\n**Solution**: ${matchedProject.solution}\n\n**Tech Stack**: ${matchedProject.tech.join(', ')}`,
      link: { label: `View ${matchedProject.title} on Projects Section`, href: '#projects' },
      suggestedPrompts: [
        `What other projects has he built?`,
        `What is his primary tech stack?`,
        `Can I see his resume?`,
      ],
    };
  }

  // 2. Check for specific individual technologies (e.g. "does he know docker?", "what about tailwind or python?")
  const matchedSkill = matchSpecificSkill(clean);
  if (matchedSkill) {
    return {
      thought: `Querying technical index for proficiency in "${matchedSkill.skill}"...`,
      text: `Yes! Srihari has verified experience with **${matchedSkill.skill}** under **${matchedSkill.category}**.\n\nHe applies it in production environments for building responsive interfaces, data-driven tables, and scalable architecture.`,
      link: { label: 'Inspect Stack Map', href: '#skills' },
      suggestedPrompts: [
        `What is his primary tech stack?`,
        `What projects use this?`,
        `Is he available for hire?`,
      ],
    };
  }

  // 3. Greetings & Casual chit-chat
  if (
    clean === 'hi' ||
    clean === 'hello' ||
    clean === 'hey' ||
    clean === 'good morning' ||
    clean === 'good evening' ||
    clean === 'good afternoon' ||
    clean.startsWith('hi ') ||
    clean.startsWith('hello ') ||
    clean.startsWith('hey ')
  ) {
    return {
      thought: 'Processing conversational greeting...',
      text: `Hello there! I'm Srihari's AI Portfolio Assistant. I'm connected directly to his projects, technical stack, work history, and resume.\n\nHow can I help you learn more about his background or work?`,
      link: { label: 'Explore Key Skills', href: '#skills' },
      suggestedPrompts: [
        "What is Srihari's primary tech stack?",
        'What flagship projects has he engineered?',
        'Is he available for hire?',
      ],
    };
  }

  // 4. Who is Srihari / About
  if (
    clean.includes('who are you') ||
    clean.includes('who is srihari') ||
    clean.includes('tell me about yourself') ||
    clean.includes('about srihari') ||
    clean.includes('introduce') ||
    clean.includes('bio') ||
    clean.includes('background')
  ) {
    return {
      thought: 'Synthesizing professional profile summary from about.ts data...',
      text: `${aboutData.summary[0]}\n\n${aboutData.summary[1]}`,
      link: { label: 'Read Full About Section', href: '#about' },
      suggestedPrompts: [
        'What is his current role and experience?',
        'What flagship projects has he engineered?',
        'Can I view or download his official resume?',
      ],
    };
  }

  // 5. Resume / CV query
  if (clean.includes('resume') || clean.includes('cv') || clean.includes('download')) {
    return {
      thought: 'Fetching verified Google Doc resume link from resume.ts...',
      text: `Here is Srihari's official resume! You can view it online or download it directly using the link below, or by clicking the download icon on the bottom dock:`,
      link: { label: 'Open / Download Resume', href: resumeUrl, isExternal: true },
      suggestedPrompts: [
        'What is his educational background & certifications?',
        'What is his current role and experience?',
        'How can I contact Srihari directly?',
      ],
    };
  }

  // 6. Contact / Email / Phone / Hire / Location / Rates / Notice period
  if (
    clean.includes('contact') ||
    clean.includes('email') ||
    clean.includes('phone') ||
    clean.includes('hire') ||
    clean.includes('reach') ||
    clean.includes('location') ||
    clean.includes('available') ||
    clean.includes('notice') ||
    clean.includes('salary') ||
    clean.includes('rate') ||
    clean.includes('where')
  ) {
    return {
      thought: 'Looking up direct communication channels and geographic location...',
      text: `Srihari is based in **${contactInfo.location}** and is actively open to full-time roles, contract work, and product engineering opportunities.\n\n• **Email**: ${contactInfo.email}\n• **Phone**: ${contactInfo.phone}\n• **LinkedIn**: dasari-sriharikrishna`,
      link: { label: 'Go to Contact Section', href: '#contact' },
      suggestedPrompts: [
        'Can I view or download his official resume?',
        "What is Srihari's primary tech stack?",
        'What flagship projects has he engineered?',
      ],
    };
  }

  // 7. General Skills / Stack / Technologies
  if (
    clean.includes('skill') ||
    clean.includes('stack') ||
    clean.includes('tech') ||
    clean.includes('language') ||
    clean.includes('framework') ||
    clean.includes('frontend') ||
    clean.includes('backend') ||
    clean.includes('database') ||
    clean.includes('devops')
  ) {
    return {
      thought: 'Consulting 10 technical categories in skills.ts...',
      text: `Srihari's core technologies include **${topSkills}**.\n\nHe specializes in building fast, scalable web architectures with Next.js App Router, React 19, Tailwind CSS, and resilient backend services.`,
      link: { label: 'Explore Interactive Stack Map', href: '#skills' },
      suggestedPrompts: [
        'What backend and database tech does he use?',
        'What flagship projects has he engineered?',
        'Is he available for hire or contract work?',
      ],
    };
  }

  // 8. General Projects / Work / Portfolio
  if (
    clean.includes('project') ||
    clean.includes('work') ||
    clean.includes('built') ||
    clean.includes('portfolio') ||
    clean.includes('case study') ||
    clean.includes('app')
  ) {
    const list = projects
      .slice(0, 3)
      .map((p) => `• **${p.title}** (${p.category})`)
      .join('\n');
    return {
      thought: 'Searching projects database for production and flagship deployments...',
      text: `Here are key enterprise projects built by Srihari:\n\n${list}\n\nThese platforms include enterprise AI operations, media management, and data-intensive dashboards.`,
      link: { label: 'Explore Projects Gallery', href: '#projects' },
      suggestedPrompts: [
        'Tell me about ORKA.AI & Orkemy',
        "What is Srihari's primary tech stack?",
        'Can I view or download his official resume?',
      ],
    };
  }

  // 9. Experience / Company / Background / Career
  if (
    clean.includes('experience') ||
    clean.includes('company') ||
    clean.includes('signitives') ||
    clean.includes('intern') ||
    clean.includes('job') ||
    clean.includes('role') ||
    clean.includes('years')
  ) {
    return {
      thought: 'Analyzing professional timeline and tenure...',
      text: `Srihari is currently a **${currentRole.title}** at **${currentRole.company}** (${currentRole.period}).\n\nHe has up to 2 years of experience developing mission-critical web applications with Next.js, TypeScript, and modern state architectures.`,
      link: { label: 'View Career Timeline', href: '#experience' },
      suggestedPrompts: [
        'What flagship projects has he engineered?',
        'What is his educational background & certifications?',
        'How can I contact Srihari directly?',
      ],
    };
  }

  // 10. Education / Degree / College / Certifications / University
  if (
    clean.includes('education') ||
    clean.includes('degree') ||
    clean.includes('college') ||
    clean.includes('university') ||
    clean.includes('school') ||
    clean.includes('cert') ||
    clean.includes('gpa') ||
    clean.includes('grade')
  ) {
    return {
      thought: 'Cross-referencing academic milestones and accredited certifications...',
      text: `Srihari holds a **${education[0].degree}** from **${education[0].institution}** (${education[0].period}).\n\nHe also holds credentials in Java Full Stack and React Frontend Development.`,
      link: { label: 'View Education & Certifications', href: '#experience' },
      suggestedPrompts: [
        'What is his current role and experience?',
        "What is Srihari's primary tech stack?",
        'Can I view or download his official resume?',
      ],
    };
  }

  // 11. Blog / Articles / Writing
  if (
    clean.includes('blog') ||
    clean.includes('article') ||
    clean.includes('write') ||
    clean.includes('post') ||
    clean.includes('dev.to')
  ) {
    return {
      thought: 'Checking publication records in blog.ts...',
      text: `Srihari shares insights on web development, React, and frontend architecture on Dev.to (user: **${blogConfig.devtoUsername}**).`,
      link: { label: 'View Latest Articles', href: '#blog' },
      suggestedPrompts: [
        "What is Srihari's primary tech stack?",
        'What flagship projects has he engineered?',
        'How can I contact Srihari directly?',
      ],
    };
  }

  // 12. Friendly Bot Identity Questions
  if (
    clean.includes('who made you') ||
    clean.includes('how do you work') ||
    clean.includes('what are you') ||
    clean.includes('are you ai')
  ) {
    return {
      thought: 'Explaining assistant architecture and localized knowledge graph...',
      text: `I am an AI assistant built specifically for **Srihari's portfolio**. I'm directly connected to his portfolio codebase, project case studies, skill matrices, and resume data to give you instant, accurate information!`,
      link: { label: 'Explore Srihari’s Background', href: '#about' },
      suggestedPrompts: [
        "What is Srihari's primary tech stack?",
        'What flagship projects has he engineered?',
        'Is he available for hire?',
      ],
    };
  }

  // 13. INTELLIGENT OUT-OF-SCOPE FALLBACK:
  return {
    thought: `Query "${rawQuery.slice(0, 30)}" evaluated outside portfolio domain; generating helpful contextual redirection...`,
    text: `I'm Srihari's Portfolio Assistant, trained specifically on his **projects, skills, career experience, and background**.\n\nWhile I don't have information about that particular topic, I would love to help you with anything regarding Srihari's work! Here are some common things people ask:`,
    link: { label: 'Explore Portfolio Highlights', href: '#about' },
    suggestedPrompts: [
      "What is Srihari's primary tech stack?",
      'What flagship projects has he engineered?',
      'Can I view or download his official resume?',
      'How can I get in touch?',
    ],
  };
}
