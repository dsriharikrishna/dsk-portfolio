import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
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

export const metadata: Metadata = {
  title: 'Dasari Sriharikrishna | Full Stack Developer',
  description:
    'Full Stack Developer specializing in React.js, Next.js, Node.js, and TypeScript. Building scalable SaaS products and production-ready web applications with clean architecture.',
  keywords: [
    'Full Stack Developer',
    'React.js',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Web Development',
    'Dasari Sriharikrishna',
  ],
  authors: [{ name: 'Dasari Sriharikrishna' }],
  creator: 'Dasari Sriharikrishna',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Dasari Sriharikrishna | Full Stack Developer',
    description: 'Building scalable, production-ready web applications with modern technologies.',
    siteName: 'Dasari Sriharikrishna Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dasari Sriharikrishna | Full Stack Developer',
    description: 'Building scalable, production-ready web applications with modern technologies.',
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
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
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
