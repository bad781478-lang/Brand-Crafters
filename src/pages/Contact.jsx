import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import {
  WHATSAPP_PHONE_DISPLAY,
  buildProjectInquiryMessage,
  getWhatsAppUrl,
} from '../utils/whatsapp';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  'Brand Identity',
  'Websites & Apps',
  'Creative Production',
  'Marketing & Visibility',
  'UI/UX Design',
  'Strategy',
];

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  services: [],
  message: '',
};

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function Contact() {
  const containerRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState(null);

  useEffect(() => {
    document.title = 'Get In Touch | Brand Crafters';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Contact Brand Crafters to start your project. We build premium brand identities, websites, and digital growth systems.';

    const ctx = gsap.context(() => {
      // Entrance animations for left side
      gsap.fromTo(
        '.reveal-text',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.4 }
      );

      // Entrance animations for right side form sections
      gsap.fromTo(
        '.form-group',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.15, 
          ease: 'power3.out',
          delay: 0.8
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: '' }));
    }
    setSubmitState({ status: 'idle', message: '' });
  };

  const toggleService = (service) => {
    setForm((current) => {
      const selected = current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service];
      return { ...current, services: selected };
    });
    setSubmitState({ status: 'idle', message: '' });
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!form.firstName.trim()) nextErrors.firstName = 'First name is required.';
    if (!form.lastName.trim()) nextErrors.lastName = 'Last name is required.';
    if (!form.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!validateEmail(form.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) nextErrors.message = 'Project details are required.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitState({ status: 'idle', message: '' });

    if (!validateForm()) return;

    setIsSubmitting(true);
    const whatsappUrl = getWhatsAppUrl(buildProjectInquiryMessage(form));
    window.location.href = whatsappUrl;
    setForm(initialForm);
    setErrors({});
    setSubmitState({
      status: 'success',
      message: 'Opening WhatsApp with your inquiry draft.',
    });
    setIsSubmitting(false);
  };

  const InputField = ({ id, label, type = "text", required, ...props }) => (
    <div className="relative group w-full mb-6">
      <input
        id={id}
        type={type}
        required={required}
        {...props}
        onFocus={() => setActiveField(id)}
        onBlur={() => setActiveField(null)}
        className="peer w-full bg-transparent border-b border-white/20 py-3 text-lg text-[#eeeeee] font-body focus:outline-none focus:border-white transition-colors placeholder-transparent rounded-none"
        placeholder={label}
      />
      <label 
        htmlFor={id} 
        className={`absolute left-0 font-body transition-all duration-300 pointer-events-none
          ${(form[id] || activeField === id) ? '-top-4 text-[0.65rem] uppercase tracking-widest text-white/50' : 'top-3 text-lg text-white/40'}`}
      >
        {label} {required && '*'}
      </label>
      {errors[id] && <p className="absolute -bottom-5 left-0 text-xs text-red-400 font-body">{errors[id]}</p>}
    </div>
  );

  return (
    <section className="h-[100dvh] w-full bg-[var(--light-grey-surface)] p-1.5 sm:p-2 lg:p-2.5 flex flex-col justify-center relative z-20">
      <div ref={containerRef} className="relative h-full w-full overflow-y-auto overflow-x-hidden rounded-[1rem] sm:rounded-[1.25rem] bg-[var(--charcoal-black)] origin-center flex flex-col lg:flex-row text-[#eeeeee] scroll-smooth">
        
        {/* Left Side: Copy & Info */}
        <div className="lg:w-1/2 p-8 pt-28 lg:p-16 xl:p-24 flex flex-col justify-center lg:sticky lg:top-0 h-auto lg:h-full shrink-0">
          <div>
            <div className="reveal-text inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
              <span className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-white/60 font-body">Get In Touch</span>
            </div>
            <h1 className="reveal-text text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-[0.95] font-headline font-bold uppercase tracking-tighter mb-8 text-[#eeeeee]">
              Let's craft <br/> the future.
            </h1>
            <p className="reveal-text text-[#eeeeee]/60 font-body text-xl md:text-2xl leading-relaxed max-w-md mb-12 lg:mb-16">
              Tell us what you are building. We will help you shape the right direction for your next stage of growth.
            </p>
          </div>

          <div className="reveal-text">
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 group cursor-pointer">
              <div className="flex flex-col">
                <span className="text-[0.65rem] uppercase tracking-widest text-white/40 font-body mb-1">WhatsApp</span>
                <span className="text-xl font-headline tracking-wide text-[#eeeeee] group-hover:text-white transition-colors">{WHATSAPP_PHONE_DISPLAY}</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 ml-2">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 p-8 pb-20 lg:p-16 xl:p-24 flex flex-col justify-center min-h-full">
          <form className="w-full max-w-xl mx-auto flex flex-col gap-14" onSubmit={handleSubmit} noValidate>
            
            <div className="form-group flex flex-col gap-4">
              <h2 className="font-headline font-bold uppercase tracking-widest text-[#eeeeee]/30 text-xs mb-4">01 / Personal Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                <InputField id="firstName" label="First Name" required value={form.firstName} onChange={(e) => updateField('firstName', e.target.value)} />
                <InputField id="lastName" label="Last Name" required value={form.lastName} onChange={(e) => updateField('lastName', e.target.value)} />
                <InputField id="email" label="Email Address" type="email" required value={form.email} onChange={(e) => updateField('email', e.target.value)} />
                <InputField id="phone" label="Phone (Optional)" type="tel" value={form.phone} onChange={(e) => updateField('phone', e.target.value)} />
              </div>
            </div>

            <div className="form-group flex flex-col gap-4">
              <h2 className="font-headline font-bold uppercase tracking-widest text-[#eeeeee]/30 text-xs mb-4">02 / How can we help?</h2>
              <div className="flex flex-wrap gap-3">
                {servicesList.map((service) => {
                  const isChecked = form.services.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-5 py-2.5 rounded-full font-body text-sm transition-all duration-300 border ${
                        isChecked 
                          ? 'bg-white border-white text-black font-medium' 
                          : 'bg-transparent border-white/20 text-[#eeeeee]/70 hover:border-white/40 hover:text-[#eeeeee]'
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="form-group flex flex-col gap-4">
              <h2 className="font-headline font-bold uppercase tracking-widest text-[#eeeeee]/30 text-xs mb-4">03 / Project Details</h2>
              <div className="relative w-full">
                <textarea
                  id="message"
                  required
                  rows="3"
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField(null)}
                  className="peer w-full bg-transparent border-b border-white/20 py-3 text-lg text-[#eeeeee] font-body focus:outline-none focus:border-white transition-colors resize-none placeholder-transparent rounded-none"
                  placeholder="Tell us about your brand..."
                />
                <label 
                  htmlFor="message" 
                  className={`absolute left-0 font-body transition-all duration-300 pointer-events-none
                    ${(form.message || activeField === 'message') ? '-top-4 text-[0.65rem] uppercase tracking-widest text-white/50' : 'top-3 text-lg text-white/40'}`}
                >
                  Project Details *
                </label>
                {errors.message && <p className="absolute -bottom-5 left-0 text-xs text-red-400 font-body">{errors.message}</p>}
              </div>
            </div>

            <div className="form-group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/10 mt-2">
              <div className="flex-1">
                {submitState.message && (
                  <p className={`font-body text-xs tracking-wide ${submitState.status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {submitState.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-4 bg-white text-black py-4 px-8 rounded-full font-headline font-bold uppercase tracking-[0.15em] text-[0.8rem] transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
              >
                <span>{isSubmitting ? 'Processing...' : 'Send Inquiry'}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
