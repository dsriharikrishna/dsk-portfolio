import type { Metadata } from 'next';
import Contact from '@/features/contact/components/Contact';

export const metadata: Metadata = {
  title: 'Contact | Dasari Sriharikrishna',
  description:
    'Get in touch with Dasari Sriharikrishna for web application development, enterprise SaaS platforms, dashboards, and freelance consulting.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-16 sm:pt-20 pb-12 flex flex-col">
      <Contact />
    </div>
  );
}
