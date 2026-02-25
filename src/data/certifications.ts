import { Award, Trophy, BookOpen, Code2 } from 'lucide-react';

export interface Certification {
    title: string;
    issuer: string;
    date: string;
    verificationUrl?: string;
    icon: string;
    category: 'certification' | 'award' | 'course' | 'hackathon';
}

export const certifications: Certification[] = [
    {
        title: 'Java Full Stack Development',
        issuer: 'CVCORP Technologies',
        date: '2023 - 2024',
        verificationUrl: '#',
        icon: 'Code2',
        category: 'course',
    },
    {
        title: 'React Frontend Development',
        issuer: 'Certification Authority',
        date: '2024',
        verificationUrl: '#',
        icon: 'Code2',
        category: 'certification',
    },
    {
        title: 'Java SE 8 Programmer I',
        issuer: 'HackerRank',
        date: '2023',
        verificationUrl: '#',
        icon: 'Award',
        category: 'certification',
    },
];


export const certificationsSection = {
    tag: 'ACHIEVEMENTS',
    title: 'Certifications & ',
    titleHighlight: 'Awards',
    subtitle: 'Continuous learning and professional development milestones.',
};
