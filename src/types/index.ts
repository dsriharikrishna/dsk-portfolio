// Project Types
export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  color: string;
  github?: string;
  live?: string;
}

// Skill Types
export interface SkillCategory {
  title: string;
  skills: string[];
}

// Experience Types
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

// Education Types
export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

// Contact Types
export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  href: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
