import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Monitor, IndianRupee, CalendarDays } from 'lucide-react';
import { Card } from '../components/Card';

export const Details: React.FC = () => {
  const detailsData = [
    {
      title: 'Age Group',
      value: '8–14 Years',
      description: 'Perfect for curious minds exploring STEM & technology.',
      icon: Users,
      glow: 'purple' as const,
      colorClass: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      title: 'Duration',
      value: '4 Weeks',
      description: 'Engaging weekend and evening schedule, self-paced tasks.',
      icon: Clock,
      glow: 'teal' as const,
      colorClass: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      title: 'Learning Mode',
      value: 'Online',
      description: 'Interactive live classes from the comfort of your home.',
      icon: Monitor,
      glow: 'orange' as const,
      colorClass: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    },
    {
      title: 'Affordable Fee',
      value: '₹2,999',
      description: 'Inclusive of study kits, expert guides, and certificates.',
      icon: IndianRupee,
      glow: 'teal' as const,
      colorClass: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    },
    {
      title: 'Start Date',
      value: '15 July 2026',
      description: 'Batch sizes are limited to ensure personalized attention.',
      icon: CalendarDays,
      glow: 'purple' as const,
      colorClass: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    },
  ];

  return (
    <section id="details" className="py-20 px-4 md:px-8 bg-slate-950/40 relative scroll-mt-24">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-display text-white"
          >
            Workshop Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed"
          >
            Everything you need to know about the AI & Robotics Summer batch. Structured to be engaging and accessible.
          </motion.p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {detailsData.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <Card
                key={index}
                glowColor={detail.glow}
                delay={index * 0.1}
                className="flex flex-col h-full text-left justify-between"
              >
                <div className="space-y-6">
                  {/* Icon Circle */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${detail.colorClass}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Card Content */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                      {detail.title}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-display">
                      {detail.value}
                    </h3>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-slate-400 mt-4 leading-relaxed">
                  {detail.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
