import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

export const metadata: Metadata = {
  title: 'Dasari Sriharikrishna | Frontend Engineer | React.js & Next.js',
  description:
    'Frontend Engineer with 2+ years of experience building modern web applications, enterprise dashboards, and scalable SaaS interfaces using React, Next.js, and TypeScript.',
  keywords: [
    'Frontend Engineer',
    'Product Engineer',
    'React.js Developer',
    'Next.js Developer',
    'TypeScript',
    'Tailwind CSS',
    'Enterprise SaaS',
    'Admin Dashboards',
    'Dasari Sriharikrishna',
  ],
  authors: [{ name: 'Dasari Sriharikrishna' }],
  creator: 'Dasari Sriharikrishna',
  metadataBase: new URL('https://dskh-portfolio.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dskh-portfolio.netlify.app',
    title: 'Dasari Sriharikrishna | Frontend Engineer | React.js & Next.js',
    description:
      'Frontend Engineer with 2+ years of experience building modern web applications, enterprise dashboards, and scalable SaaS interfaces using React, Next.js, and TypeScript.',
    siteName: 'Dasari Sriharikrishna',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dasari Sriharikrishna | Frontend Engineer | React.js & Next.js',
    description:
      'Frontend Engineer with 2+ years of experience building modern web applications, enterprise dashboards, and scalable SaaS interfaces using React, Next.js, and TypeScript.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SmoothCursor } from '@/components/ui/smooth-cursor';
import { Particles } from '@/components/ui/particles';
import FloatingActions from '@/components/shared/FloatingActions';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased relative">
        <div className="print:hidden">
          <SmoothCursor />
          <Particles
            className="fixed inset-0 -z-10"
            quantity={70}
            ease={80}
            color="#ffffffff"
            refresh
          />
        </div>
        <TooltipProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                color: 'hsl(var(--foreground))',
              },
            }}
          />
          <div className="min-h-screen bg-background/50 flex flex-col relative z-0">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <FloatingActions />
        </TooltipProvider>
      </body>
    </html>
  );
}
