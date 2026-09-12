'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception to diagnostics/monitoring
    console.error('Unhandled Global Application Error:', error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background px-6 py-24">
      {/* Red ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto text-center flex flex-col items-center">
        {/* Error icon */}
        <div className="relative w-20 h-20 rounded-2xl bg-destructive/10 border border-destructive/30 flex items-center justify-center text-destructive mb-6 shadow-2xl">
          <AlertTriangle className="w-10 h-10" />
        </div>

        <span className="text-xs md:text-sm font-mono tracking-widest text-destructive uppercase px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 mb-3">
          Application Error
        </span>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading tracking-tight mb-4 text-foreground">
          Something went wrong
        </h1>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-md">
          An unexpected client runtime issue occurred while rendering this view. You can retry
          loading or return to the main dashboard.
        </p>

        {error.digest && (
          <div className="font-mono text-[11px] text-muted-foreground/70 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50 mb-8 max-w-xs truncate">
            Digest: {error.digest}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-lg"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 border border-border text-foreground font-semibold text-sm transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
