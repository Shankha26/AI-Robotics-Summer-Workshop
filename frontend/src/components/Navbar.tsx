import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Overview', id: 'details' },
    { label: 'Curriculum', id: 'outcomes' },
    { label: 'Why Join', id: 'why-join' },
    { label: 'FAQs', id: 'faq' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-4 shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-2 text-white font-bold text-xl font-display cursor-pointer"
          >
            <Bot className="h-7 w-7 text-brand-teal animate-float-fast" />
            <span>KIDROVE</span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-slate-300 hover:text-brand-teal transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection('register')}
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[72px] z-40 bg-slate-950 border-b border-slate-900 md:hidden py-6 px-4 flex flex-col gap-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left py-2 text-base font-semibold text-slate-300 hover:text-white border-b border-slate-900/60 pb-2 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => scrollToSection('register')}
            >
              Enroll Now
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
