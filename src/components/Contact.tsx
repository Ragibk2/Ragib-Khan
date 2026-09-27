import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Send, 
  Building2, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { profileData } from '../data/profile';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    opportunityType: 'System Administrator',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent(`[IT Opportunity] ${formData.opportunityType} - ${formData.company || 'Inquiry'}`);
    const body = encodeURIComponent(
      `Hello Ragib,\n\nName: ${formData.name}\nCompany: ${formData.company}\nOpportunity: ${formData.opportunityType}\n\nMessage:\n${formData.message}\n\nSent from your Portfolio Contact Form.`
    );
    
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#0b0f19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            {t.contact.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {t.contact.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Details & Links */}
          <ScrollReveal direction="left" delay={0.1} className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="rounded-xl border border-slate-800 bg-[#0f172a] p-6 shadow-xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                      {t.contact.directEmail}
                    </span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-blue-400 transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="rounded-xl border border-slate-800 bg-[#0f172a] p-6 shadow-xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                      {t.contact.phoneMobile}
                    </span>
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-blue-400 transition-colors tabular-nums"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 transition-colors"
                  title="Copy phone number to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-xl border border-slate-800 bg-[#0f172a] p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                    {t.contact.locationTitle}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    {profileData.location}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2 pl-13">
                {t.contact.locationSub}
              </p>
            </div>

            {/* Professional Profiles Placeholders */}
            <div className="rounded-xl border border-slate-800 bg-[#0f172a] p-6 shadow-xl">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                {t.contact.profilesTitle}
              </h4>
              <div className="space-y-3 text-xs">
                
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">[ADD LINKEDIN URL]</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Github className="w-4 h-4 text-slate-400" />
                    <span>GitHub</span>
                  </div>
                  <span className="font-mono text-slate-400 text-[11px]">[ADD GITHUB URL]</span>
                </div>

              </div>
              <p className="text-[11px] text-slate-400 mt-3">
                Note: Placeholder URLs can be updated in <code className="text-blue-300 font-mono">src/data/profile.ts</code>.
              </p>
            </div>

          </ScrollReveal>

          {/* Right Column: Direct Recruiter / Manager Inquiry Form */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-[#0f172a] p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">{t.contact.sendMessage}</h3>
                  <p className="text-xs text-slate-400">{t.contact.dispatchesTo}</p>
                </div>
                <div className="text-xs text-blue-400 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{t.contact.promptResponse}</span>
                </div>
              </div>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.contact.formSuccess}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      {t.contact.yourName} <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      {t.contact.workEmail} <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      {t.contact.company}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Enterprise Technologies Ltd."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      {t.contact.roleCategory}
                    </label>
                    <select
                      value={formData.opportunityType}
                      onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <option value="System Administrator">System Administrator</option>
                      <option value="Senior Desktop Support (L2/L3)">Senior Desktop Support (L2/L3)</option>
                      <option value="Endpoint / Intune Administrator">Endpoint / Intune Administrator</option>
                      <option value="Cloud / Azure Infrastructure">Cloud / Azure Infrastructure</option>
                      <option value="Consulting / Other">Consulting / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    {t.contact.messageScope} <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    Direct delivery to <code className="text-slate-300">ragibk2@gmail.com</code>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors"
                  >
                    <span>{t.contact.btnSend}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
