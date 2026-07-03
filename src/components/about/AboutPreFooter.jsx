import React from 'react';
import { motion } from 'framer-motion';

const marqueeImages = [
  {
    src: 'https://images.pexels.com/photos/23496672/pexels-photo-23496672.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop',
    alt: 'Creative team reviewing architectural plans in a studio'
  },
  {
    src: 'https://images.pexels.com/photos/4977460/pexels-photo-4977460.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop',
    alt: 'Designers comparing material samples beside a laptop'
  },
  {
    src: 'https://images.pexels.com/photos/7674640/pexels-photo-7674640.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop',
    alt: 'Creative team arranging product concepts in a dark studio'
  },
  {
    src: 'https://images.pexels.com/photos/8837716/pexels-photo-8837716.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop',
    alt: 'Design collaborators reviewing color palettes and drawings'
  },
  {
    src: 'https://images.pexels.com/photos/7674594/pexels-photo-7674594.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop',
    alt: 'Studio team discussing ceramic and product design ideas'
  },
  {
    src: 'https://images.pexels.com/photos/8117471/pexels-photo-8117471.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop',
    alt: 'Brand team working through color systems and packaging'
  }
];

export default function AboutPreFooter() {
  return (
    <section className="section w-full bg-white text-black py-24 lg:py-40 overflow-hidden">
      
      {/* Typography Block */}
      <div className="container paragraph-section max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-24 lg:mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline text-sm sm:text-base uppercase tracking-[0.2em] text-[#666] mb-8 font-bold"
        >
          Our Philosophy
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline italic text-[1.8rem] sm:text-[2.4rem] lg:text-[2.8rem] text-[#222] leading-[1.5] tracking-tight font-medium max-w-5xl mx-auto"
        >
          Built on a foundation of trust and strategic innovation, we work closely with our clients to understand their vision and turn it into impactful digital experiences.
          <br /><br />
          Welcome to Brand Crafters. Let’s build something extraordinary together.
        </motion.p>
      </div>

      {/* Infinite Image Marquee */}
      <div className="marquee-paragraph-component w-full overflow-hidden flex relative">
        <motion.div 
          className="flex min-w-max"
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          style={{ willChange: "transform" }}
        >
          {/* Wrapper 1 */}
          <div className="marquee-paragraph-content flex gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-3 lg:px-4">
            {marqueeImages.map(({ src, alt }, idx) => (
              <div key={`wrap1-${idx}`} className="w-[240px] sm:w-[320px] lg:w-[440px] h-[320px] sm:h-[420px] lg:h-[580px] overflow-hidden shrink-0 rounded-[4px]">
                <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>

          {/* Wrapper 2 (Duplicate for seamless loop) */}
          <div className="marquee-paragraph-content flex gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-3 lg:px-4" aria-hidden="true">
            {marqueeImages.map(({ src }, idx) => (
              <div key={`wrap2-${idx}`} className="w-[240px] sm:w-[320px] lg:w-[440px] h-[320px] sm:h-[420px] lg:h-[580px] overflow-hidden shrink-0 rounded-[4px]">
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}
