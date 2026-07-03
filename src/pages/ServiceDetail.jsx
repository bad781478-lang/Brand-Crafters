import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { serviceDetails } from '../data/servicesData';
import gsap from 'gsap';
import { DEFAULT_WHATSAPP_URL } from '../utils/whatsapp';

export default function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = serviceDetails[serviceSlug];
  
  const containerRef = useRef(null);

  useEffect(() => {
    if (!service || !containerRef.current) return;
    
    // Simple entrance animation matching the premium feel
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-fade-up', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.1, delay: 0.2 }
      );
    }, containerRef);
    
    // Set SEO Meta Tags
    document.title = `${service.title} | Brand Crafters`;

    return () => {
      ctx.revert();
      document.title = "Brand Crafters";
    };
  }, [service, serviceSlug]);

  if (!service) {
    return (
      <section className="min-h-screen bg-black px-6 pt-40 pb-24 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 font-body text-xs font-bold uppercase tracking-[0.24em] text-white/40">
            Service not found
          </p>
          <h1 className="mb-8 font-headline text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
            Unknown service
          </h1>
          <Link to="/services" className="font-headline text-sm font-bold uppercase tracking-[0.18em] text-white underline underline-offset-8">
            View all services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="min-h-screen bg-black px-6 pt-40 pb-24 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* HERO SECTION */}
        <div className="mb-24 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start animate-fade-up">
          <div>
            <p className="mb-6 font-body text-xs font-bold uppercase tracking-[0.24em] text-white/40">
              {service.eyebrow}
            </p>
            <h1 className="font-headline text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
              {service.title}
            </h1>
          </div>
          <div className="flex flex-col gap-8 pt-2 lg:pt-8">
            {service.description.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="font-body text-xl leading-relaxed text-white/80 md:text-2xl">
                {paragraph}
              </p>
            ))}
            
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href={DEFAULT_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-8 py-4 font-headline text-sm font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white/85"
              >
                Start a Project
              </a>
              <Link
                to={`/services#${serviceSlug}`}
                className="rounded-full border border-white/20 px-8 py-4 font-headline text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-white/50"
              >
                Back to Services
              </Link>
            </div>
          </div>
        </div>

        {/* CAPABILITIES / SUB-SERVICES */}
        <div className="mb-24 animate-fade-up">
          <div className="mb-12 border-b border-white/10 pb-6">
            <h2 className="font-headline text-2xl font-bold uppercase tracking-widest text-white/90">Capabilities</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.subServices.map((sub, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04] hover:border-white/20"
              >
                <div>
                  <h3 className="mb-4 font-headline text-xl font-bold uppercase tracking-wider text-white">
                    {sub.title}
                  </h3>
                  <p className="font-body text-base leading-relaxed text-white/60">
                    {sub.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TAGS */}
        <div className="animate-fade-up">
          <div className="mb-12 border-b border-white/10 pb-6">
            <h2 className="font-headline text-2xl font-bold uppercase tracking-widest text-white/90">Expertise</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {service.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="rounded-full border border-white/20 px-5 py-2.5 font-body text-sm text-white/70 transition-colors hover:border-white/50 hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
