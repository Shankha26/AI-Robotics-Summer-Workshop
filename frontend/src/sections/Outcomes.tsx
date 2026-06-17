import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Terminal, Sparkles, Radio, Presentation } from 'lucide-react';
import { Card } from '../components/Card';

export const Outcomes: React.FC = () => {
  const outcomesData = [
    {
      title: 'Introduction to Artificial Intelligence',
      description: 'Demystify AI. Understand machine learning, neural networks, and how smart machines think in an easy, kid-friendly way.',
      icon: BrainCircuit,
      glow: 'purple' as const,
      colorClass: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      title: 'Robotics Fundamentals',
      description: 'Explore the building blocks of robots. Learn about motors, actuators, structural design, and kinematics.',
      icon: Cpu,
      glow: 'teal' as const,
      colorClass: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      title: 'Programming Logic & Problem Solving',
      description: 'Master algorithm thinking. Learn coding fundamentals (loops, conditionals, functions) to instruct robots.',
      icon: Terminal,
      glow: 'orange' as const,
      colorClass: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    },
    {
      title: 'Building AI-powered Projects',
      description: 'Hands-on project work. Create face detectors, voice commands, and game bots using blocks or code.',
      icon: Sparkles,
      glow: 'teal' as const,
      colorClass: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    },
    {
      title: 'Sensor & Automation Concepts',
      description: 'Discover how robots interact with the world. Learn about light, distance, touch sensors, and closed-loop control.',
      icon: Radio,
      glow: 'purple' as const,
      colorClass: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    },
    {
      title: 'Team Collaboration & Presentation',
      description: 'Develop essential life skills. Work in virtual breakout teams to pitch, present, and showcase graduation projects.',
      icon: Presentation,
      glow: 'orange' as const,
      colorClass: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
  ];

  return (
    <section id="outcomes" className="py-20 px-4 md:px-8 bg-slate-950/20 relative grid-bg scroll-mt-24">
      {/* Background Gradient Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-slate-800 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold font-display text-white"
          >
            What Your Child Will Learn
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed"
          >
            Our project-centered curriculum is crafted specifically for children to grasp complex computing concepts with active engagement and zero dry theory.
          </motion.p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomesData.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <Card
                key={index}
                glowColor={outcome.glow}
                delay={index * 0.08}
                className="flex flex-col text-left space-y-4"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${outcome.colorClass}`}>
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-white font-display">
                  {outcome.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {outcome.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
