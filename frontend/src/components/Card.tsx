import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'purple' | 'teal' | 'orange' | 'none';
  delay?: number;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glowColor = 'none',
  delay = 0,
  interactive = true,
}) => {
  const glowStyles = {
    none: '',
    purple: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:border-brand-purple/40',
    teal: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:border-brand-teal/40',
    orange: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] hover:border-brand-orange/40',
  };

  const cardClasses = `glass-card p-6 rounded-2xl ${
    interactive ? 'glass-card-interactive ' + glowStyles[glowColor] : ''
  } ${className}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cardClasses}
    >
      {children}
    </motion.div>
  );
};
