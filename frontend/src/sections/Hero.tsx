import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { ThreeDModel } from '../components/ThreeDModel';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  } as const;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden grid-bg scroll-mt-24"
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-brand-purple/15 blur-[80px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-brand-teal/15 blur-[80px] pointer-events-none animate-float-fast" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div className="lg:col-span-6 text-center lg:text-left space-y-8 flex flex-col items-center lg:items-start">

          {/* Top Pill Accent */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs md:text-sm text-brand-teal border border-brand-teal/20"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
            </span>
            <span>Now Enrolling for Summer 2026</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none font-display text-white"
            >
              AI & Robotics <br />
              <span className="bg-gradient-to-r from-brand-purple via-brand-teal to-brand-orange text-transparent bg-clip-text">
                Summer Workshop
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
            >
              Give your child a head start in Artificial Intelligence and Robotics through hands-on projects, interactive learning, and real-world problem solving.
            </motion.p>
          </div>

          {/* Badges */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { delayChildren: 0.3, staggerChildren: 0.1 } }
            }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 w-full"
          >
            <motion.div variants={badgeVariants} className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-slate-800 text-slate-200">
              <GraduationCap className="h-5 w-5 text-brand-purple" />
              <span className="text-xs md:text-sm font-semibold">Age 8–14 Years</span>
            </motion.div>

            <motion.div variants={badgeVariants} className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-slate-800 text-slate-200">
              <Video className="h-5 w-5 text-brand-teal" />
              <span className="text-xs md:text-sm font-semibold">Online</span>
            </motion.div>

            <motion.div variants={badgeVariants} className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-slate-800 text-slate-200">
              <Calendar className="h-5 w-5 text-brand-orange" />
              <span className="text-xs md:text-sm font-semibold">4 Weeks</span>
            </motion.div>
          </motion.div>

          {/* Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('register')}
              className="group"
            >
              Enroll Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('details')}
            >
              Learn More
            </Button>
          </motion.div>

        </div>

        {/* Right Column: Interactive 3D Model Mascot */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:col-span-6 flex justify-center items-center w-full relative"
        >
          <ThreeDModel />
        </motion.div>

      </div>
    </section>
  );
};
