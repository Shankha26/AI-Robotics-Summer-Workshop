import React from 'react';
import { motion } from 'framer-motion';
import { Accordion } from '../components/Accordion';

export const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: 'What is the minimum age requirement?',
      answer: 'Children between 8 and 14 years can participate. The curriculum is optimized to introduce technology at an age-appropriate depth.',
    },
    {
      question: 'Do students need prior coding experience?',
      answer: 'No, the workshop is beginner-friendly. We start from absolute scratch and build visual and programmatic foundations step-by-step.',
    },
    {
      question: 'Will students receive a certificate?',
      answer: 'Yes, all participants will receive a completion certificate. We also host a virtual project graduation showcase where parents can see what their children built.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 md:px-8 bg-slate-950/20 relative grid-bg scroll-mt-24">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-teal/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-display text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm md:text-base"
          >
            Find answers to common questions about workshop logistics, requirements, and curriculum structure.
          </motion.p>
        </div>

        {/* Accordion List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion items={faqItems} />
        </motion.div>

      </div>
    </section>
  );
};
