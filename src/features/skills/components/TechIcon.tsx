'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TechIconProps {
  name: string;
  className?: string;
  animate?: boolean;
}

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  className = 'w-4 h-4',
  animate = true,
}) => {
  const normalized = name.toLowerCase().trim();

  const renderIcon = () => {
    switch (normalized) {
      // BUILD
      case 'next.js':
      case 'nextjs':
      case 'next':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <circle cx="12" cy="12" r="11" fill="#09090b" stroke="#333338" strokeWidth="1.5" />
            <motion.path
              initial={{ pathLength: 0.8 }}
              animate={animate ? { pathLength: [0.8, 1, 0.8] } : undefined}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              d="M15.5 17L8.5 7.5H7V16.5H8.5V9.5L14.5 17.5C14.85 17.35 15.2 17.2 15.5 17Z"
              fill="#ffffff"
            />
            <rect x="14" y="7.5" width="1.5" height="5" fill="#ffffff" />
          </svg>
        );

      case 'react':
      case 'react.js':
        return (
          <svg
            viewBox="-11.5 -10.23174 23 20.46348"
            fill="none"
            className="w-full h-full overflow-visible"
          >
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
            <motion.g
              stroke="#61DAFB"
              strokeWidth="1"
              fill="none"
              animate={animate ? { rotate: 360 } : undefined}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '0 0' }}
            >
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </motion.g>
          </svg>
        );

      case 'typescript':
      case 'ts':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <rect width="24" height="24" rx="4" fill="#3178C6" />
            <path d="M11.5 8H5.5V10H7.5V17H9.5V10H11.5V8Z" fill="white" />
            <path
              d="M18.5 10.5C18.5 9.5 17.5 8.5 16 8.5C14 8.5 13 9.5 13 11C13 13 14.5 13.5 16 14C17 14.5 17.5 15 17.5 15.5C17.5 16.5 16.5 17 15.5 17C14 17 13 16 13 15V14H11V15C11 17 13 19 15.5 19C17.5 19 19.5 18 19.5 15.5C19.5 13.5 18 13 16.5 12.5C15.5 12 15 11.5 15 11C15 10.5 15.5 10 16 10C17 10 17.5 10.5 17.5 11.5V12H19.5V10.5H18.5Z"
              fill="white"
            />
          </svg>
        );

      case 'javascript':
      case 'js':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <rect width="24" height="24" rx="4" fill="#F7DF1E" />
            <path
              d="M7 17.5C7.5 18 8.5 18.5 9.5 18.5C11 18.5 12 17.5 12 16V10H10V16C10 16.5 9.5 17 9 17C8.5 17 8 16.5 7.5 16L7 17.5Z"
              fill="#000000"
            />
            <path
              d="M17.5 13C17.5 11 16 10 14 10C12 10 11 11 11 12.5L13 13C13 12 13.5 11.5 14 11.5C14.5 11.5 15 12 15 12.5C15 13.5 13.5 14 12 14.5C11 15 11 16.5 11 17.5C11 19 12.5 20 14.5 20C16 20 17.5 19 18 17.5L16 16.5C15.5 17.5 15 18 14.5 18C14 18 13.5 17.5 13.5 17C13.5 16 14.5 15.5 16 15C17 14.5 17.5 14 17.5 13Z"
              fill="#000000"
            />
          </svg>
        );

      // DESIGN
      case 'tailwind':
      case 'tailwind css':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <motion.path
              animate={animate ? { y: [0, -1, 0] } : undefined}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"
              fill="#38BDF8"
            />
          </svg>
        );

      case 'shadcn/ui':
      case 'shadcn':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="w-full h-full"
          >
            <line x1="16.5" y1="7.5" x2="7.5" y2="16.5" strokeLinecap="round" />
            <line x1="21" y1="12" x2="12" y2="21" strokeLinecap="round" />
          </svg>
        );

      case 'magic ui':
      case 'magicui':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <motion.path
              animate={animate ? { scale: [1, 1.12, 1], rotate: [0, 4, 0] } : undefined}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '12px 10px' }}
              d="M12 2L14.4 7.6L20 10L14.4 12.4L12 18L9.6 12.4L4 10L9.6 7.6L12 2Z"
              fill="#A855F7"
            />
            <path
              d="M19 15L20.2 17.8L23 19L20.2 20.2L19 23L17.8 20.2L15 19L17.8 17.8L19 15Z"
              fill="#C084FC"
            />
            <path
              d="M5 17L5.8 18.8L7.6 19.6L5.8 20.4L5 22.2L4.2 20.4L2.4 19.6L4.2 18.8L5 17Z"
              fill="#E9D5FF"
            />
          </svg>
        );

      case 'framer motion':
      case 'motion':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M4 2H20V8.5H12L4 2Z" fill="#0055FF" />
            <path d="M4 8.5H12L20 15H4V8.5Z" fill="#FF0055" />
            <path d="M4 15H12L4 22V15Z" fill="#0055FF" />
          </svg>
        );

      // STATE
      case 'redux toolkit':
      case 'redux':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fill="#764ABC" opacity="0.2" />
            <path
              d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM13 17V18H11V17C8.17 16.52 6 14.06 6 11.07C6 8.08 8.17 5.62 11 5.14V4H13V5.14C15.83 5.62 18 8.08 18 11.07C18 14.06 15.83 16.52 13 17Z"
              fill="#764ABC"
            />
            <circle cx="12" cy="11.5" r="2.5" fill="#A855F7" />
          </svg>
        );

      case 'zustand':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <circle cx="7" cy="8" r="3.5" fill="#D97706" />
            <circle cx="17" cy="8" r="3.5" fill="#D97706" />
            <circle cx="7" cy="8" r="2" fill="#FDE68A" />
            <circle cx="17" cy="8" r="2" fill="#FDE68A" />
            <ellipse cx="12" cy="14" rx="7.5" ry="6.5" fill="#F59E0B" />
            <circle cx="9.5" cy="13" r="1.2" fill="#000000" />
            <circle cx="14.5" cy="13" r="1.2" fill="#000000" />
            <ellipse cx="12" cy="16.5" rx="2.5" ry="1.8" fill="#B45309" />
          </svg>
        );

      case 'tanstack query':
      case 'react query':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fill="#FF4154" />
            <path
              d="M12 5V19M5 12H19M7 7L17 17M17 7L7 17"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        );

      // BACKEND
      case 'node.js':
      case 'nodejs':
      case 'node':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" fill="#5FA04E" />
            <path d="M12 5.5L18 9V15L12 18.5L6 15V9L12 5.5Z" fill="#18181B" />
            <path d="M10 9V15L14 13V11L11.5 12V9.5L14 10.5V9L10 9Z" fill="#5FA04E" />
          </svg>
        );

      case 'express':
      case 'express.js':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <rect width="24" height="24" rx="5" fill="#18181B" stroke="#3F3F46" strokeWidth="1" />
            <text
              x="3.5"
              y="16"
              fontFamily="monospace"
              fontSize="11"
              fontWeight="bold"
              fill="#FAFAFA"
            >
              ex
            </text>
          </svg>
        );

      case 'fastapi':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fill="#05998B" />
            <motion.path
              animate={
                animate ? { opacity: [0.85, 1, 0.85], scale: [0.96, 1.04, 0.96] } : undefined
              }
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '12px 12px' }}
              d="M13 3L6 13H12L11 21L18 11H12L13 3Z"
              fill="white"
            />
          </svg>
        );

      case 'python':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path
              d="M11.88 2C6.88 2 7.19 4.17 7.19 4.17L7.2 6.42H12.07V7.18H5.16C3.17 7.18 2 8.35 2 10.37C2 12.82 2.82 13.9 4.54 13.9H5.89V12.01C5.89 9.85 7.42 8.33 9.58 8.33H14.45C15.93 8.33 17.14 7.09 17.14 5.61V3.72C17.14 2 15.26 2 11.88 2ZM9.31 3.25C9.8 3.25 10.2 3.65 10.2 4.14C10.2 4.63 9.8 5.03 9.31 5.03C8.82 5.03 8.42 4.63 8.42 4.14C8.42 3.65 8.82 3.25 9.31 3.25Z"
              fill="#3776AB"
            />
            <path
              d="M12.12 22C17.12 22 16.81 19.83 16.81 19.83L16.8 17.58H11.93V16.82H18.84C20.83 16.82 22 15.65 22 13.63C22 11.18 21.18 10.1 19.46 10.1H18.11V11.99C18.11 14.15 16.58 15.67 14.42 15.67H9.55C8.07 15.67 6.86 16.91 6.86 18.39V20.28C6.86 22 8.74 22 12.12 22ZM14.69 20.75C14.2 20.75 13.8 20.35 13.8 19.86C13.8 19.37 14.2 18.97 14.69 18.97C15.18 18.97 15.58 19.37 15.58 19.86C15.58 20.35 15.18 20.75 14.69 20.75Z"
              fill="#FFD438"
            />
          </svg>
        );

      // DATA
      case 'postgresql':
      case 'postgres':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fill="#336791" />
            <path
              d="M12 5.5C9.5 5.5 8 7 8 9.5C8 12.5 10 14.5 12 18C14 14.5 16 12.5 16 9.5C16 7 14.5 5.5 12 5.5Z"
              fill="white"
            />
            <path
              d="M10.2 9C10.2 9.5 9.7 10 9 10M13.8 9C13.8 9.5 14.3 10 15 10"
              stroke="#336791"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        );

      case 'mongodb':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path
              d="M12 2C12 2 6.5 7 6.5 12.5C6.5 16 9 19 12 21.5C15 19 17.5 16 17.5 12.5C17.5 7 12 2 12 2Z"
              fill="#47A248"
            />
            <path d="M12 2V21.5C12 21.5 11.6 17 11.6 12.5C11.6 8 12 2 12 2Z" fill="#3D8B3E" />
            <path
              d="M12 21.5C11.5 21 11.2 18.5 11.2 15.5C11.2 11.5 12 8.5 12 8.5"
              stroke="#A7F3D0"
              strokeWidth="0.8"
            />
          </svg>
        );

      case 'prisma':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path
              d="M12.5 2.5L20.5 19.5L5.5 21.5L3.5 14.5L12.5 2.5Z"
              fill="#2D3748"
              stroke="#5A67D8"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <path d="M12.5 2.5L20.5 19.5L11.5 16L12.5 2.5Z" fill="#5A67D8" opacity="0.6" />
          </svg>
        );

      case 'sql':
      case 'mysql':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.75"
            className="w-full h-full"
          >
            <ellipse cx="12" cy="6" rx="7" ry="2.5" />
            <path d="M5 6V12C5 13.38 8.13 14.5 12 14.5C15.87 14.5 19 13.38 19 12V6" />
            <path d="M5 12V18C5 19.38 8.13 20.5 12 20.5C15.87 20.5 19 19.38 19 18V12" />
          </svg>
        );

      // SHIP
      case 'docker':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path
              d="M13 8.5H15V10.5H13V8.5ZM10 8.5H12V10.5H10V8.5ZM7 8.5H9V10.5H7V8.5ZM10 6H12V8H10V6ZM13 6H15V8H13V6ZM16 6H18V8H16V6ZM16 8.5H18V10.5H16V8.5ZM7 11H9V13H7V11ZM10 11H12V13H10V11ZM13 11H15V13H13V11ZM16 11H18V13H16V11Z"
              fill="#2496ED"
            />
            <motion.path
              animate={animate ? { y: [0, -1, 0] } : undefined}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              d="M22.5 12.5C21.8 11.5 20.3 11 19 11.2C18.5 10.3 17.5 9.8 16.5 10V13.5H2C2 17.5 5 20.5 9.5 20.5C14.5 20.5 19 17.5 20 14C21 14.2 22 13.8 22.5 12.5Z"
              fill="#2496ED"
            />
          </svg>
        );

      case 'aws':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <text
              x="2.5"
              y="11.5"
              fontFamily="sans-serif"
              fontSize="8.5"
              fontWeight="900"
              fill="#FF9900"
            >
              AWS
            </text>
            <path
              d="M3.5 15C7.5 18 16.5 18 20.5 15"
              stroke="#FF9900"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path d="M19.5 13.5L21 15.5L18.5 16.5" fill="#FF9900" />
          </svg>
        );

      case 'github actions':
      case 'actions':
      case 'github':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <circle cx="12" cy="12" r="10" fill="#2088FF" />
            <path d="M8 8L16 16M8 16L16 8" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="8" cy="8" r="1.8" fill="white" />
            <circle cx="16" cy="16" r="1.8" fill="white" />
            <circle cx="8" cy="16" r="1.8" fill="white" />
            <circle cx="16" cy="16" r="1.8" fill="white" />
          </svg>
        );

      case 'vercel':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M12 3L22 20H2L12 3Z" fill="#FAFAFA" />
          </svg>
        );

      // Fallback default
      default:
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-full h-full"
          >
            <circle cx="12" cy="12" r="9" strokeOpacity="0.4" />
            <path d="M12 8V12L15 15" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <motion.span
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      whileHover={{
        scale: 1.22,
        rotate: [0, -8, 8, 0],
      }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {renderIcon()}
    </motion.span>
  );
};
