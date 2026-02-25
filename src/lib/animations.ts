import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Common animation configurations
export const fadeInUp = {
  from: { y: 40, opacity: 0 },
  to: {
    y: 0,
    opacity: 1,
    duration: 0.8,
  },
};

export const fadeIn = {
  from: { opacity: 0 },
  to: {
    opacity: 1,
    duration: 0.6,
  },
};

export const scaleIn = {
  from: { scale: 0.8, opacity: 0 },
  to: {
    scale: 1,
    opacity: 1,
    duration: 0.4,
  },
};

export const slideInLeft = {
  from: { x: -50, opacity: 0 },
  to: {
    x: 0,
    opacity: 1,
    duration: 0.8,
  },
};

// ScrollTrigger defaults
export const scrollTriggerDefaults = {
  start: 'top 80%',
  toggleActions: 'play none none reverse',
};

// Utility function to create scroll animations
export const createScrollAnimation = (
  selector: string,
  animation: typeof fadeInUp,
  trigger?: string,
  stagger?: number
) => {
  return gsap.fromTo(selector, animation.from, {
    ...animation.to,
    scrollTrigger: {
      trigger: trigger || selector,
      ...scrollTriggerDefaults,
    },
    stagger: stagger || 0,
  });
};

// Card hover animation
export const animateCardHover = (
  card: HTMLElement,
  x: number,
  y: number,
  centerX: number,
  centerY: number
) => {
  const rotateX = (y - centerY) / 20;
  const rotateY = (centerX - x) / 20;

  gsap.to(card, {
    rotateX: rotateX,
    rotateY: rotateY,
    duration: 0.3,
    ease: 'power2.out',
  });
};

export const resetCardHover = (card: HTMLElement) => {
  gsap.to(card, {
    rotateX: 0,
    rotateY: 0,
    duration: 0.5,
    ease: 'power2.out',
  });
};
