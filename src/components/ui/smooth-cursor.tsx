'use client';

import { useEffect, useRef, useState, type FC } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react';

export interface SmoothCursorProps {
  cursor?: React.ReactNode;
}

type CursorMode = 'default' | 'clickable' | 'text';

const DESKTOP_POINTER_QUERY = '(any-hover: hover) and (any-pointer: fine)';

function isTrackablePointer(pointerType: string) {
  return pointerType !== 'touch';
}

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

// Precision I-Beam Cursor (Text Mode) - Center at (8, 11)
const IBeamCursor: FC = () => (
  <svg
    width="16"
    height="22"
    viewBox="0 0 16 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
  >
    <path
      d="M3.5 2H12.5M8 2V20M3.5 20H12.5"
      stroke="#ffffff"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>
);

export function SmoothCursor({ cursor }: SmoothCursorProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [ripples, setRipples] = useState<ClickRipple[]>([]);

  // Instant hardware mouse coordinates (0ms lag)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dynamic aerodynamic tilt on movement
  const lastMousePos = useRef({ x: 0, y: 0 });
  const tiltMotion = useMotionValue(0);
  const tiltSpring = useSpring(tiltMotion, {
    damping: 20,
    stiffness: 260,
    mass: 0.2,
  });

  // Detect fine pointer support (desktop mouse/trackpad)
  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_POINTER_QUERY);

    const updateEnabled = () => {
      const nextIsEnabled = mediaQuery.matches;
      setIsEnabled(nextIsEnabled);

      if (nextIsEnabled) {
        document.documentElement.classList.add('has-custom-cursor');
      } else {
        document.documentElement.classList.remove('has-custom-cursor');
        setIsVisible(false);
      }
    };

    updateEnabled();
    mediaQuery.addEventListener('change', updateEnabled);

    return () => {
      mediaQuery.removeEventListener('change', updateEnabled);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, []);

  // Event listeners for motion, inertia tilt, and interactive state detection
  useEffect(() => {
    if (!isEnabled) return;

    let tiltTimer: ReturnType<typeof setTimeout> | null = null;

    const determineCursorMode = (target: HTMLElement | null): CursorMode => {
      if (!target) return 'default';

      // 1. Clickable elements
      const isClickable = Boolean(
        target.closest(
          'a, button, [role="button"], input[type="submit"], input[type="button"], select, label, summary, [data-cursor="clickable"], .cursor-pointer'
        )
      );
      if (isClickable) return 'clickable';

      // Fallback check for computed cursor style
      try {
        const computed = window.getComputedStyle(target).cursor;
        if (computed === 'pointer') return 'clickable';
        if (computed === 'text') return 'text';
      } catch {
        // Ignore unstyled elements
      }

      // 2. Text input / textareas / contenteditable
      const isTextInput = Boolean(
        target.closest(
          'input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="tel"], input[type="url"], input:not([type]), textarea, [contenteditable="true"]'
        )
      );
      if (isTextInput) return 'text';

      // 3. Text content blocks
      const isTextContent = Boolean(
        target.closest(
          'p, h1, h2, h3, h4, h5, h6, span, blockquote, pre, code, [data-cursor="text"]'
        )
      );
      if (isTextContent) return 'text';

      return 'default';
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isTrackablePointer(e.pointerType)) return;

      // Compute horizontal velocity for subtle aerodynamic tilt
      const deltaX = e.clientX - lastMousePos.current.x;
      lastMousePos.current = { x: e.clientX, y: e.clientY };

      // Clamp dynamic lean between -12 and +12 degrees
      const targetTilt = Math.max(-12, Math.min(12, deltaX * 0.45));
      tiltMotion.set(targetTilt);

      // Spring smoothly back to upright when movement stops
      if (tiltTimer) clearTimeout(tiltTimer);
      tiltTimer = setTimeout(() => {
        tiltMotion.set(0);
      }, 70);

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) {
        setIsVisible(true);
      }

      const nextMode = determineCursorMode(e.target as HTMLElement | null);
      setCursorMode(nextMode);
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (!isTrackablePointer(e.pointerType)) return;
      setIsClicking(true);

      // Spawn subtle click ripple directly from cursor tip
      const id = Date.now();
      setRipples((prev) => [...prev.slice(-2), { id, x: e.clientX, y: e.clientY }]);
    };

    const handlePointerUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleWindowBlur = () => {
      setIsVisible(false);
    };

    const handleWindowFocus = () => {
      setIsVisible(true);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
      if (tiltTimer) clearTimeout(tiltTimer);
    };
  }, [isEnabled, isVisible, mouseX, mouseY, tiltMotion]);

  if (!isEnabled) {
    return null;
  }

  // Custom node override
  if (cursor) {
    return (
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
        style={{
          x: mouseX,
          y: mouseY,
          transformOrigin: '0 0',
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.88 : 1,
        }}
        transition={{ duration: 0.1 }}
      >
        {cursor}
      </motion.div>
    );
  }

  return (
    <>
      {/* 1. Expanding Click Ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="pointer-events-none fixed top-0 left-0 z-[9997] rounded-full border border-purple-400"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ width: 4, height: 4, opacity: 0.85, scale: 0.6 }}
            animate={{ width: 34, height: 34, opacity: 0, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
            }}
          />
        ))}
      </AnimatePresence>

      {/* 2. Zero-Lag Animated Precision Cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
        style={{
          x: mouseX,
          y: mouseY,
          transformOrigin: '0 0',
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.12 },
        }}
      >
        {cursorMode === 'text' ? (
          <motion.div
            key="text-mode"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: isClicking ? 0.85 : 1,
              opacity: 1,
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            style={{ transform: 'translate(-8px, -11px)' }}
          >
            <IBeamCursor />
          </motion.div>
        ) : (
          <motion.div
            key="arrow-mode"
            style={{
              transformOrigin: '0 0',
              rotate: cursorMode === 'clickable' ? -8 : tiltSpring,
            }}
            animate={{
              scale: isClicking ? 0.84 : cursorMode === 'clickable' ? 1.18 : 1,
            }}
            transition={{
              type: 'spring',
              damping: 18,
              stiffness: 350,
              mass: 0.25,
            }}
          >
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter:
                  cursorMode === 'clickable'
                    ? 'drop-shadow(0 0 8px rgba(192, 132, 252, 0.9)) drop-shadow(0 2px 5px rgba(0,0,0,0.9))'
                    : 'drop-shadow(0 2px 5px rgba(0,0,0,0.8))',
                transition: 'filter 0.18s ease',
              }}
            >
              <motion.path
                d="M0.5 0.5L7 21L11.5 13.5L19.5 9.5L0.5 0.5Z"
                fill="#09090b"
                strokeWidth={1.5}
                animate={{
                  stroke: cursorMode === 'clickable' ? '#c084fc' : '#ffffff',
                }}
                transition={{ duration: 0.15 }}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>

            {/* Clickable Mode: Glowing Interactive Pulse Dot */}
            <AnimatePresence>
              {cursorMode === 'clickable' && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0.9, 1.25, 0.9],
                    opacity: 1,
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    scale: {
                      repeat: Infinity,
                      duration: 1.2,
                      ease: 'easeInOut',
                    },
                    duration: 0.15,
                  }}
                  className="absolute left-[13px] top-[14px] w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]"
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
