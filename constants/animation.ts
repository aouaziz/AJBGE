export const ANIMATION = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.6,
  },
  easing: {
    easeOut: [0.25, 0.1, 0.25, 1] as const,
    easeInOut: [0.4, 0, 0.2, 1] as const,
    bounce: [0.34, 1.56, 0.64, 1] as const,
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.slow,
      ease: ANIMATION.easing.easeOut,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.easing.easeOut,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: ANIMATION.stagger.normal,
    },
  },
};
