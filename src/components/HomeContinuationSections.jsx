import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "../business-track-section/hooks/usePrefersReducedMotion";
import StickyCinematicGrid from "./StickyCinematicGrid";
import PartnerSection from "./PartnerSection";
import "../post-second-theme.css";
import "./HomeContinuationSections.css";

gsap.registerPlugin(ScrollTrigger);

const signalSteps = [
  {
    number: "01",
    title: "Start with discovery",
    text: "We understand your business, audience, goals, and what needs to change before we begin building.",
  },
  {
    number: "02",
    title: "Set the direction",
    text: "We turn the brief into a focused strategy, project scope, timeline, and creative direction.",
  },
  {
    number: "03",
    title: "Build the foundation",
    text: "Strategy becomes identity, website, content, and the tools your brand needs to work consistently.",
  },
  {
    number: "04",
    title: "Refine together",
    text: "We share focused versions, collect useful feedback, and sharpen every important detail.",
  },
  {
    number: "05",
    title: "Launch and scale",
    text: "You receive a polished, ready-to-use brand framework with support to move forward confidently.",
  },
];

const methodSteps = [
  {
    number: "01",
    title: "Read the market",
    text: "Clarify what the audience already believes, where the category feels crowded, and what the brand can own.",
  },
  {
    number: "02",
    title: "Shape the identity",
    text: "Turn the business direction into a visual and verbal identity that feels specific, authoritative, and easy to remember.",
  },
  {
    number: "03",
    title: "Build the architecture",
    text: "Translate the identity into screens, content patterns, motion rules, and reusable assets that keep the brand aligned.",
  },
  {
    number: "04",
    title: "Launch with momentum",
    text: "Prepare the brand for public attention with strong touchpoints, sharp presentation, and scalable structure.",
  },
];


const faqs = [
  {
    question: "What services does Brand Crafters provide?",
    answer: "We help businesses with brand identity, website and app design, creative production, SEO, digital marketing, and tailored content frameworks. Every project is shaped around your business stage, audience, and goals.",
  },
  {
    question: "How do you price your agency projects?",
    answer: "Pricing depends on the scope, timeline, deliverables, and level of creative or technical work required. After understanding your needs, we share a detailed proposal with transparent pricing.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Timelines depend on the project size. A focused landing page may move faster, while a complete brand and website rebuild can take several weeks from discovery to launch.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes. We can support your brand after launch with website updates, SEO, campaign improvements, content direction, and digital performance support.",
  },
  {
    question: "Can you work with our existing brand?",
    answer: "Yes. We can refine an existing identity, improve your website, or build a stronger foundation around what your business already has.",
  },
  {
    question: "Do you provide revisions during the design process?",
    answer: "Yes, we work collaboratively and offer focused revision rounds at key stages to make sure the final result aligns closely with your vision and business goals.",
  },
  {
    question: "What platforms do you build websites and apps on?",
    answer: "We build on modern, scalable stacks such as React, Next.js, Flutter, and other tools selected around your project needs.",
  },
];

export default function HomeContinuationSections() {
  const rootRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };



  useGSAP(
    () => {
      if (prefersReducedMotion) return;

      const timeline = gsap.timeline({
        defaults: { ease: "power4.out", overwrite: "auto" },
        scrollTrigger: {
          trigger: ".faq-anim-trigger",
          start: "top 72%",
          once: true,
        },
      });

      timeline
        .fromTo(".faq-title-line",
          { yPercent: 115, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.09 },
          0
        )
        .fromTo(".faq-desc-line",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75 },
          0.18
        )
        .fromTo(".faq-item-border", 
          { opacity: 0, y: 18 }, 
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.055 }, 
          0.26
        )
        .fromTo(".faq-qns-line",
          { yPercent: 115, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.72, stagger: 0.055 },
          0.32
        )
        .fromTo(".faq-qns-icon",
          { scale: 0.72, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.62, stagger: 0.055 },
          0.38
        );

      // Parallax effect removed per user request
    },
    { scope: rootRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <div ref={rootRef} className="hc-home-continuation">
      <StickyCinematicGrid />

      <PartnerSection />

      <div
        id="faq-section"
        style={{
          position: "relative",
          top: 0,
        }}
      > {/* BUG-FIX: BUG-07 */}
        <div
          style={{
            position: "relative",
            top: 0,
            height: 0,
            visibility: "hidden",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        <section id="faq-section-panel" className="relative z-40 w-full bg-[#080808] text-white py-16 md:py-24 min-h-[100vh] lg:min-h-0" aria-labelledby="faq-heading">
          <div className="faq-parallax-inner w-full will-change-transform" style={{ transformStyle: 'preserve-3d' }}>
            <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-[5.2vw] flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-[5.1vw] faq-anim-trigger">
              
              {/* Left Side: Static Text */}
              <div className="w-full lg:w-[35%] xl:w-[30%] flex-shrink-0 text-left">
                <div>
                  <div className="overflow-hidden mb-3 md:mb-4 lg:mb-6">
                    <header className="faq-title-line flex flex-col gap-2 [font-family:Outfit,sans-serif] text-sm font-semibold uppercase tracking-widest text-white/60" aria-label="FAQ section">
                      <span>FAQ</span>
                    </header>
                  </div>

                  <h2 id="faq-heading" className="[font-family:Oswald,sans-serif] text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-[-0.025em] text-white leading-[1.06] mb-4 md:mb-6 lg:mb-4">
                    <div className="overflow-hidden pb-1">
                      <div className="faq-title-line">Frequently</div>
                    </div>
                    <div className="overflow-hidden pb-1">
                      <div className="faq-title-line">Asked Questions</div>
                    </div>
                  </h2>
                  
                  <div className="overflow-hidden">
                    <p className="faq-desc-line [font-family:Outfit,sans-serif] text-base md:text-lg lg:text-[21px] text-white/80 leading-[1.65] w-full max-w-[410px]">
                      Clear answers before we start. Here is what most businesses want to know before working with Brand Crafters.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: FAQ List */}
              <div className="w-full lg:w-[65%] xl:w-[70%] text-left">
                <div className="w-full border-t border-white/10 faq-item-border" />
                
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      className="group faq-item-border border-b border-white/10"
                      key={faq.question}
                    >
                      <button
                        type="button"
                        id={`faq-question-${index}`}
                        aria-expanded={openFaqIndex === index}
                        aria-controls={`faq-answer-${index}`}
                        onClick={() => toggleFaq(index) /* BUG-FIX: BUG-04 */}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleFaq(index); // BUG-FIX: BUG-04
                          }
                        }}
                        className="flex items-center justify-between w-full py-5 md:py-8 lg:py-[34px] cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                      >
                        <h3 className={`[font-family:Oswald,sans-serif] text-xl md:text-2xl lg:text-[30px] leading-[1.2] font-semibold pr-4 md:pr-8 transition-colors ${isOpen ? 'text-white/80' : 'text-white group-hover:text-white/80'}`}>
                          <div className="overflow-hidden pb-1">
                            <div className="faq-qns-line">
                              {faq.question}
                            </div>
                          </div>
                        </h3>
                        <span className={`faq-qns-icon flex-shrink-0 relative w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'bg-white border-white text-black' : 'border-white/25 group-hover:border-white/50 text-white'}`}>
                          <svg 
                            className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      <div 
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5 md:pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
                      >
                        <div className="overflow-hidden pr-4 md:pr-24">
                          <p className="font-body text-base md:text-lg text-white/60 leading-[1.6]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
                
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
