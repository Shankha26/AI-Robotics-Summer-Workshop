import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import toast from 'react-hot-toast';
import { User, Mail, Phone, CheckCircle2, Sparkles, Star } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface RegistrationFormInputs {
  name: string;
  email: string;
  phone: string;
}

export const Registration: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<RegistrationFormInputs>();

  const onSubmit = async (data: RegistrationFormInputs) => {
    try {
      const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

      const response = await axios.post(`${apiBaseUrl}/enquiry`, {
        name: data.name,
        email: data.email,
        phone: data.phone
      });

      if (response.data.success) {
        toast.success('Registration submitted successfully!', {
          duration: 5000,
          style: {
            background: '#0f172a',
            color: '#fff',
            border: '1px solid rgba(6, 182, 212, 0.3)',
          },
          iconTheme: {
            primary: '#06b6d4',
            secondary: '#0f172a',
          },
        });
        setIsSubmitted(true);
        reset();
      } else {
        toast.error(response.data.message || 'Registration failed.');
      }
    } catch (err: any) {
      console.error(err);
      const serverMessage = err.response?.data?.message || 'Server error. Please try again later.';
      toast.error(serverMessage, {
        style: {
          background: '#0f172a',
          color: '#fff',
          border: '1px solid rgba(249, 115, 22, 0.3)',
        },
        iconTheme: {
          primary: '#f97316',
          secondary: '#0f172a',
        },
      });
    }
  };

  return (
    <section id="register" className="py-20 px-4 md:px-8 relative bg-slate-950/40 scroll-mt-24">
      {/* Design Background Gradients */}
      <div className="absolute top-1/2 left-0 w-82 h-82 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-82 h-82 rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Panel: Course Info details */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs text-brand-orange border border-brand-orange/20"
              >
                <Star className="h-3.5 w-3.5 fill-brand-orange text-brand-orange" />
                <span className="font-semibold uppercase tracking-wider">Limited Seats Available</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold font-display text-white leading-tight"
              >
                Secure Your Child’s Spot Today
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-sm md:text-base leading-relaxed"
              >
                Enroll in the AI & Robotics Summer Workshop. Once you submit this inquiry form, our education coordinators will email you within 24 hours to finalize your batch schedule and dispatch study manuals.
              </motion.p>
            </div>

            {/* Quick Steps */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6 bg-slate-900/40 p-6 rounded-2xl border border-slate-800/60"
            >
              <h3 className="text-base font-semibold text-slate-200 uppercase tracking-wide flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-teal" />
                Enrollment Journey
              </h3>

              <div className="space-y-4">
                {[
                  { step: '1', title: 'Submit Details', desc: 'Fill out this brief student/parent contact form.' },
                  { step: '2', title: 'Coordinator Consultation', desc: 'We align on batch schedules (mornings/evenings).' },
                  { step: '3', title: 'Unlock Portal', desc: 'Login details and workshop materials will be shared.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-teal/15 text-brand-teal border border-brand-teal/20 flex items-center justify-center text-xs font-bold font-display">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Panel: Form Container */}
          <div className="lg:col-span-7 flex">
            <Card glowColor="teal" interactive={false} className="w-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 text-left"
                    noValidate
                  >
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white font-display">Registration Enquiry</h3>
                      <p className="text-slate-400 text-xs sm:text-sm">Provide your contact info below to start your registration.</p>
                    </div>

                    {/* Name Field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs sm:text-sm font-medium text-slate-300 block">
                        Full Name <span className="text-brand-orange">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <User className="h-5 w-5" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          placeholder="Parent or Student Name"
                          className={`w-full pl-11 pr-4 py-3 bg-slate-900/60 border rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 transition-all duration-300 ${errors.name ? 'border-brand-orange/60' : 'border-slate-800 focus:border-brand-teal/60'
                            }`}
                          {...register('name', {
                            required: 'Full name is required',
                            minLength: { value: 2, message: 'Name must be at least 2 characters long' }
                          })}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-brand-orange font-medium mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs sm:text-sm font-medium text-slate-300 block">
                        Email Address <span className="text-brand-orange">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <Mail className="h-5 w-5" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          placeholder="name@example.com"
                          className={`w-full pl-11 pr-4 py-3 bg-slate-900/60 border rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 transition-all duration-300 ${errors.email ? 'border-brand-orange/60' : 'border-slate-800 focus:border-brand-teal/60'
                            }`}
                          {...register('email', {
                            required: 'Email address is required',
                            pattern: {
                              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: 'Please enter a valid email address'
                            }
                          })}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-brand-orange font-medium mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs sm:text-sm font-medium text-slate-300 block">
                        Phone Number <span className="text-brand-orange">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <Phone className="h-5 w-5" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="e.g. +91 9876543210"
                          className={`w-full pl-11 pr-4 py-3 bg-slate-900/60 border rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-teal/40 transition-all duration-300 ${errors.phone ? 'border-brand-orange/60' : 'border-slate-800 focus:border-brand-teal/60'
                            }`}
                          {...register('phone', {
                            required: 'Phone number is required',
                            validate: {
                              cleanLength: (val) => {
                                const digits = val.replace(/\D/g, '');
                                if (digits.length < 10 || digits.length > 15) {
                                  return 'Phone number must be between 10 and 15 digits';
                                }
                                return true;
                              }
                            }
                          })}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-brand-orange font-medium mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        isLoading={isSubmitting}
                      >
                        Register Now
                      </Button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="py-8 px-4 text-center space-y-6 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center text-brand-teal animate-bounce">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white font-display">Enquiry Submitted!</h3>
                      <p className="text-slate-300 text-sm max-w-md mx-auto">
                        Thank you for enrolling in the AI & Robotics Summer Workshop. We have received your details and will call/email you shortly with batch allocations.
                      </p>
                    </div>

                    <Button
                      variant="secondary"
                      size="md"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Submit Another Inquiry
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
