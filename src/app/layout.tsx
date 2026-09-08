import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Sora } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dasari Sriharikrishna | Product Engineer',
  description:
    'Frontend-focused Full Stack Product Engineer. I solve complex business problems through scalable interfaces and production-ready applications.',
  keywords: [
    'Product Engineer',
    'Frontend Developer',
    'Full Stack Developer',
    'React.js',
    'Next.js',
    'TypeScript',
    'UI/UX Design',
    'Dasari Sriharikrishna',
  ],
  authors: [{ name: 'Dasari Sriharikrishna' }],
  creator: 'Dasari Sriharikrishna',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Dasari Sriharikrishna | Product Engineer',
    description: 'I build products, not just interfaces.',
    siteName: 'Dasari Sriharikrishna',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dasari Sriharikrishna | Product Engineer',
    description: 'I build products, not just interfaces.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${sora.variable} antialiased relative`}>
        <div className="print:hidden">
          <SmoothCursor />
          <Particles
            className="fixed inset-0 -z-10"
            quantity={50}
            ease={80}
            color="#ffffff"
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
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
