import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'younesalloui55@gmail.com';

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify the project type or subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Project message or inquiry details are required.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters describing your inquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const formId = (import.meta.env.VITE_FORMSPREE_FORM_ID || '').trim();

    // If Formspree ID is not configured, inform the user with actionable guidance
    if (!formId) {
      setIsSubmitting(false);
      setSubmitError(
        'Email service is not yet linked. Please add your Formspree Form ID into the .env file (VITE_FORMSPREE_FORM_ID=your_id), or use the button below to email directly.'
      );
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setErrors({});
      } else {
        if (data && data.errors && Array.isArray(data.errors)) {
          const errorMsg = data.errors
            .map((err: { message?: string }) => err.message)
            .filter(Boolean)
            .join(', ');
          setSubmitError(errorMsg || 'Failed to dispatch inquiry. Please try again or email directly.');
        } else {
          setSubmitError(data.error || 'Failed to dispatch inquiry. Please check your Formspree ID or try again.');
        }
      }
    } catch {
      setSubmitError('Network error connecting to email service. Please check your internet connection or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-white/40 uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              05 // Direct Communication
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Let's Discuss Your Next Build
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md">
            Have an idea or need a software solution? Let's discuss it. Reach out directly or dispatch a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Details & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Available for engineering contracts, full-stack architecture discussions, and new technical software projects.
              </p>

              {/* Email Block */}
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 mb-4">
                <div className="text-[11px] font-mono uppercase text-slate-400 mb-1">
                  Primary Email
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm font-medium text-white/70 hover:text-white truncate font-mono"
                  >
                    {emailAddress}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    aria-label="Copy email address"
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white/30 hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Profiles */}
              <div className="space-y-3">
                <a
                  href="https://github.com/1YounesAlloui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-white/10 hover:border-white/20 bg-black/40 hover:bg-white/5 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/5 text-white/40 group-hover:text-white/70 transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        GitHub Profile
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        github.com/1YounesAlloui
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-white/30 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/younes-alloui-14a627250/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl border border-white/10 hover:border-white/20 bg-black/40 hover:bg-white/5 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/5 text-white/40 group-hover:text-white/70 transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        LinkedIn Profile
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        linkedin.com/in/younes-alloui-14a627250
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-white/30 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>
              </div>

              {/* Technical Notice */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Timezone: Central European / GMT+1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-white mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Fill in the parameters of your project or technical inquiry.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto border border-white/20">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Inquiry Dispatched Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you! Your message has been sent to{' '}
                    <span className="font-mono text-white font-medium">{emailAddress}</span>. I will review your requirements and respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmitError(null);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-medium border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {submitError && (
                    <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-xs text-rose-300 space-y-2.5 animate-in fade-in duration-200">
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                        <div className="space-y-1">
                          <p className="font-medium text-white">{submitError}</p>
                          <p className="text-slate-300 text-[11px] leading-relaxed">
                            You can dispatch this message directly via your email client using the button below:
                          </p>
                        </div>
                      </div>
                      <div className="pt-1 flex flex-wrap items-center gap-2">
                        <a
                          href={`mailto:${emailAddress}?subject=${encodeURIComponent(
                            formData.subject || 'Portfolio Inquiry'
                          )}&body=${encodeURIComponent(
                            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                          )}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] transition-colors"
                        >
                          Send via Email App
                        </a>
                        <button
                          type="button"
                          onClick={() => setSubmitError(null)}
                          className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 text-slate-400 text-[11px] font-mono transition-colors cursor-pointer"
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                        Your Name <span className="text-white/40">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl text-sm bg-black/50 border ${
                          errors.name
                            ? 'border-rose-500/80 focus:ring-rose-500/30'
                            : 'border-white/10 focus:border-white/40 focus:ring-white/10'
                        } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                        Email Address <span className="text-white/40">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-4 py-3 rounded-xl text-sm bg-black/50 border ${
                          errors.email
                            ? 'border-rose-500/80 focus:ring-rose-500/30'
                            : 'border-white/10 focus:border-white/40 focus:ring-white/10'
                        } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project / Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                      Project / Subject <span className="text-white/40">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Full-Stack Web Platform Architecture"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-black/50 border ${
                        errors.subject
                          ? 'border-rose-500/80 focus:ring-rose-500/30'
                          : 'border-white/10 focus:border-white/40 focus:ring-white/10'
                        } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                      Message & Requirements <span className="text-white/40">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your technical objectives, stack preferences, or platform scope..."
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-black/50 border ${
                        errors.message
                          ? 'border-rose-500/80 focus:ring-rose-500/30'
                          : 'border-white/10 focus:border-white/40 focus:ring-white/10'
                        } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 px-6 rounded-xl font-medium text-xs font-mono uppercase tracking-wider text-black bg-white hover:bg-white/90 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Dispatching Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Dispatch Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
