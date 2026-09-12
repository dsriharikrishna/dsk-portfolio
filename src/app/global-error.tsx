'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertOctagon, RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Root Global Error Boundary Caught:', error);
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-24 antialiased font-sans">
        <main className="relative z-10 max-w-lg mx-auto text-center flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-6 shadow-2xl">
            <AlertOctagon className="w-10 h-10" />
          </div>

          <span className="text-xs font-mono tracking-widest text-red-400 uppercase px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-3">
            Critical Root Error
          </span>

          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-white">
            Application System Error
          </h1>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            The root document tree encountered an unhandled exception. Resetting the state will
            re-render the application shell.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all duration-200 shadow-lg"
            >
              <RefreshCw className="w-4 h-4" />
              Reload Application
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white font-semibold text-sm transition-all duration-200"
            >
              <Home className="w-4 h-4" />
              Back to Safety
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
