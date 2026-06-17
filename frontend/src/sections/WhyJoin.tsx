import React from 'react';
import { motion } from 'framer-motion';
import { VideoOff, UserCheck, Code, Award, CheckCircle } from 'lucide-react';
import { Card } from '../components/Card';

export const WhyJoin: React.FC = () => {
  const benefits = [
    {
      title: 'Live Interactive Sessions',
      description: 'Unlike pre-recorded video lectures, our live classes feature real-time discussions, quizzes, and instant bug resolution.',
      icon: VideoOff, // We can use Video or VideoOff or Tv. Actually, Video is good, let's use MonitorPlay or Video. Let's use Video for live session. Wait, Video is already imported in another file but we can use Video.
      glow: 'teal' as const,
      colorClass: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      title: 'Expert Mentors',
      description: 'Taught by elite STEM educators with software and engineering credentials, experts in translating deep tech concepts for children.',
      icon: UserCheck,
      glow: 'purple' as const,
      colorClass: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      title: 'Hands-on Projects',
      description: 'Build real-world portfolios: students create AI algorithms, smart sensor triggers, and functional robotic control programs.',
      icon: Code,
      glow: 'orange' as const,
      colorClass: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    },
    {
      title: 'Certificate of Completion',
      description: 'Award your child a verified digital certificate by Kidrove, recognizing their project work and newly acquired skills.',
      icon: Award,
      glow: 'teal' as const,
      colorClass: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    },
  ];

  return (
    <section id="why-join" className="py-20 px-4 md:px-8 bg-slate-950/40 relative scroll-mt-24">
      {/* Background glow orb */}
      <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Intro Panel */}
          <div className="lg:col-span-4 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-wider text-brand-teal uppercase"
            >
              Why Choose Kidrove?
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold font-display text-white leading-tight"
            >
              Building the Innovators of Tomorrow
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-sm md:text-base leading-relaxed"
            >
              Our program isn’t about memorizing syntax. We empower kids to think like engineers, puzzle-solvers, and creative builders through exciting and supportive guidance.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3 pt-2"
            >
              {['100% Beginner Friendly', 'Interactive Breakout Sessions', 'Parent Progress Showcases'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle className="h-5 w-5 text-brand-teal flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right Benefits Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  glowColor={benefit.glow}
                  delay={index * 0.1}
                  className="flex flex-col text-left space-y-4"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${benefit.colorClass}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white font-display">
                    {benefit.title}
                  </h3>

                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
