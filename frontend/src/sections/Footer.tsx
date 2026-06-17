import React from 'react';
import { Mail, Phone, MapPin, Bot } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Overview', id: 'details' },
    { label: 'Curriculum', id: 'outcomes' },
    { label: 'Why Kidrove', id: 'why-join' },
    { label: 'FAQs', id: 'faq' },
    { label: 'Register', id: 'register' },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/60 pt-16 pb-8 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand-purple/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-left relative z-10">
        
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-lg font-display">
            <Bot className="h-6 w-6 text-brand-teal animate-pulse" />
            <span>KIDROVE</span>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Empowering the next generation of engineers, builders, and coders through interactive project-based learning.
          </p>
          <div className="flex gap-4 pt-2">
            {[
              { 
                name: 'Twitter', 
                href: '#', 
                icon: (
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )
              },
              { 
                name: 'Github', 
                href: '#', 
                icon: (
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                )
              },
              { 
                name: 'Instagram', 
                href: '#', 
                icon: (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                )
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                aria-label={social.name}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-brand-teal transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1 space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-slate-400 hover:text-brand-teal text-sm transition-colors duration-250 cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-slate-400 text-sm">
              <Mail className="h-5 w-5 text-brand-purple flex-shrink-0" />
              <a href="mailto:support@kidrove.com" className="hover:text-white transition-colors">
                support@kidrove.com
              </a>
            </li>
            <li className="flex items-start gap-3 text-slate-400 text-sm">
              <Phone className="h-5 w-5 text-brand-teal flex-shrink-0" />
              <a href="tel:+919876543210" className="hover:text-white transition-colors">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-start gap-3 text-slate-400 text-sm">
              <MapPin className="h-5 w-5 text-brand-orange flex-shrink-0" />
              <span>
                Kidrove Learning Hub, Outer Ring Road, <br />
                Bengaluru, KA, India - 560103
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright area */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 relative z-10">
        <p>&copy; {currentYear} Kidrove Technologies. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
