import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right.mjs";
import MonitorSmartphone from "lucide-react/dist/esm/icons/monitor-smartphone.mjs";
import Palette from "lucide-react/dist/esm/icons/palette.mjs";
import Video from "lucide-react/dist/esm/icons/video.mjs";
import TrendingUp from "lucide-react/dist/esm/icons/trending-up.mjs";
import ScrollDownIndicator from "./ScrollDownIndicator";
import "../post-second-theme.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    icon: Palette,
    description:
      "We build strategic, premium brand identities that establish a commanding market presence. Moving far beyond logo design, we shape comprehensive visual frameworks and messaging that build lasting recognition.",
    features: [
      "Logo Design",
      "Visual Branding",
      "Packaging Design",
      "Storytelling & Messaging",
    ],
  },
  {
    id: "websites-apps",
    title: "Websites & Apps",
    icon: MonitorSmartphone,
    description:
      "We design and develop custom-coded websites, SaaS solutions, and mobile applications. From robust UI/UX architecture to native Android and iOS app development, we engineer digital products optimized for performance and conversion.",
    features: [
      "Website Design & Development",
      "SaaS Solutions",
      "UI/UX Architecture",
      "Android & iOS Apps",
      "Conversion-Focused Interfaces",
    ],
  },
  {
    id: "creative-production",
    title: "Creative Production",
    icon: Video,
    description:
      "We create high-impact digital content that gives your brand a sharper presence across social media, ads, and online platforms. From motion graphics to CGI, every asset is built with purpose and visual consistency.",
    features: [
      "Social Media Design",
      "Motion Graphics",
      "Video Editing",
      "3D Animation & CGI",
      "Ad Creatives",
    ],
  },
  {
    id: "marketing-visibility",
    title: "Marketing & Visibility",
    icon: TrendingUp,
    description:
      "We accelerate brand visibility through comprehensive performance direction. By integrating SEO, AEO/GEO, Google & Meta Ads, social media marketing, and influencer marketing, we connect targeted attention with measurable results.",
    features: [
      "Digital Marketing",
      "Google & Meta Ads",
      "SEO / AEO / GEO Optimization",
      "Influencer Marketing",
      "Social Media Marketing",
    ],
  },
];

const serviceRoutes = {
  "brand-identity": "/services#brand-identity",
  "websites-apps": "/services#websites-apps",
  "creative-production": "/services#creative-production",
  "marketing-visibility": "/services#marketing",
};

export default function OurServicesSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const navigate = useNavigate();

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      // DESKTOP: Full flagship experience with pinned 500vh scroll scrub and staggered translation
      mm.add("(min-width: 1024px)", () => {
        // Hardware acceleration setup and initial position (pushed down roughly 480px + 50%)
        // The first card is set to yPercent: 80 so it appears 20% initially.
        gsap.set(cardRefs.current, {
          y: 480,
          yPercent: 50,
          force3D: true,
          willChange: "transform",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "center center",
            end: "+=500%",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Staggered upward translation to zero-offset position
        tl.to(cardRefs.current, {
          y: 0,
          yPercent: 0,
          duration: 1,
          stagger: 0.5,
          ease: "none",
        });
      });

      // TABLET & MOBILE: Sticky stacking card animation
      mm.add("(max-width: 1023px)", () => {
        // We use native CSS position: sticky for smaller screens to ensure zero-flicker smooth scrolling.
        // GSAP adds a premium scale and fade effect as cards get stacked.
        cardRefs.current.forEach((card, index) => {
          if (index === cardRefs.current.length - 1) return; // Last card doesn't scale

          gsap.to(card, {
            scale: 0.92,
            scrollTrigger: {
              trigger: cardRefs.current[index + 1], // Triggered as the NEXT card scrolls up
              start: "top bottom-=100", // Start when the next card comes into view
              end: () => `top top+=${window.innerHeight * 0.12 + (index + 1) * 16}`, // End exactly when it sticks
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full bg-black z-30 text-white lg:h-screen lg:flex lg:flex-col lg:justify-center py-16 md:py-24 lg:py-6"
    >
      {/* Background ambient light (wrapped to prevent overflow without breaking sticky) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-transparent blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-10 h-full flex flex-col">
        {/* Section Header */}
        <div className="mb-10 lg:mb-8 lg:mt-4 shrink-0">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-white/30" />
            <h2 className="font-headline tracking-widest text-sm font-medium uppercase text-white/70">
              Our Services
            </h2>
          </div>
          <h3 className="font-headline text-4xl md:text-5xl lg:text-6xl font-[900] leading-[1.05] tracking-tight uppercase">
            Elevating Brands <br className="hidden md:block" />
            <span className="text-white">Across Every Dimension</span>
          </h3>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 xl:gap-6 flex-grow items-stretch pb-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="sticky lg:relative top-[var(--mobile-top)] lg:top-auto w-full h-full flex flex-col will-change-transform z-10"
              style={{ 
                '--mobile-top': `calc(12vh + ${index * 16}px)`, 
                zIndex: index + 10
              }}
            >
              <div
                className="group flex flex-col justify-between min-h-[450px] lg:min-h-[420px] xl:min-h-[500px] h-full overflow-hidden bg-white border border-black/10 backdrop-blur-3xl p-6 xl:p-8 transition-all duration-500 ease-out hover:border-black/25 hover:-translate-y-2 lg:hover:shadow-[0_0_50px_-12px_rgba(0,0,0,0.12)] shadow-[0_-12px_40px_rgba(0,0,0,0.15)] lg:shadow-none cursor-pointer origin-top"
                aria-label={`View ${service.title} service details`}
                role="button" /* BUG-FIX: BUG-02 */
                tabIndex={0}
                onClick={() => navigate(serviceRoutes[service.id])}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(serviceRoutes[service.id]);
                  }
                }}
                style={{ 
                  borderRadius: '32px',
                }}
              >
                {/* Dynamic Radial Gradient Glow on Hover */}
                <div className="absolute -inset-px bg-gradient-to-b from-black/[0.03] to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 pointer-events-none rounded-[32px] mix-blend-overlay" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 pointer-events-none" />

                <div className="relative z-10 pointer-events-none flex flex-col">
                  <div className="mb-6 xl:mb-8 flex items-center justify-between">
                    {/* Icon Container */}
                    <div className="flex h-12 w-12 xl:h-14 xl:w-14 shrink-0 items-center justify-center rounded-[12px] xl:rounded-[14px] bg-[#0A0A0A] transition-all duration-500 group-hover:scale-110">
                      <service.icon size={24} strokeWidth={1.5} className="text-white transition-transform duration-500 group-hover:-rotate-3" />
                    </div>
                    {/* Top-Right Arrow */}
                    <div className="flex h-10 w-10 xl:h-12 xl:w-12 shrink-0 items-center justify-center overflow-hidden rounded-[9999px] border border-black bg-transparent p-0 transition-[background-color,border-color,transform] duration-500 ease-[ease] group-hover:bg-black group-hover:scale-[1.08]">
                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.5}
                        className="text-black transition-colors duration-500 ease-[ease] group-hover:text-white"
                      />
                    </div>
                  </div>

                  <h4 className="font-headline text-xl xl:text-2xl md:text-3xl font-bold tracking-tight mb-3 xl:mb-4 text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black/70 transition-all duration-500">
                    {service.title}
                  </h4>

                  <p className="font-body text-xs xl:text-sm md:text-base text-black leading-relaxed mb-6 xl:mb-8 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto pointer-events-none">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/20 to-transparent mb-4 xl:mb-6 transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
                  <ul className="flex flex-col gap-2 xl:gap-3 mb-6 xl:mb-8">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 xl:gap-3 font-body text-xs xl:text-sm text-black transition-colors duration-300"
                      >
                        {/* Check/Dot indicator */}
                        <div className="relative flex items-center justify-center h-3 w-3 xl:h-4 xl:w-4">
                          <span className="absolute h-1 w-1 rounded-full bg-black/60 transition-all duration-500 group-hover:bg-black group-hover:shadow-[0_0_8px_rgba(0,0,0,0.35)]" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Enhanced CTA Button */}
                  <span className="mt-2 xl:mt-4 flex items-center justify-between px-4 xl:px-5 py-2.5 xl:py-3.5 rounded-full border border-black bg-black transition-all duration-500 group-hover:bg-black/90 group-hover:border-black">
                    <span className="font-body text-[10px] xl:text-xs font-bold uppercase tracking-widest text-white transition-colors duration-500 group-hover:text-white">
                      View Details
                    </span>
                    <div className="flex h-5 w-5 xl:h-6 xl:w-6 shrink-0 items-center justify-center rounded-full border border-white/50 transition-all duration-500 group-hover:border-white group-hover:bg-white/10">
                      <ArrowUpRight size={12} className="text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center w-full pb-4 lg:pb-2 z-50 relative mix-blend-difference">
          <ScrollDownIndicator href="#media-system-section" /> {/* BUG-FIX: BUG-01 */}
        </div>
      </div>
    </section>
  );
}
