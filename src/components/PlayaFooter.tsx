import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { DEFAULT_WHATSAPP_URL } from "../utils/whatsapp";
import "../post-second-theme.css";

gsap.registerPlugin(ScrollTrigger);

const TAGS = [
  "Digital Strategy",
  "Creative Branding",
  "UI/UX Design",
  "Web Development",
  "SEO & Content",
  "Social Media Marketing",
  "Conversion Optimization",
];

function PhysicsPlayground() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const measureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [sizes, setSizes] = useState<{ w: number; h: number }[] | null>(null);
  const [inView, setInView] = useState(false);
  const inViewRef = useRef(false);
  const engineRef = useRef<any>(null);
  const runnerRef = useRef<any>(null);
  const renderRef = useRef<any>(null);
  const matterRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        inViewRef.current = isIntersecting;
        setInView(isIntersecting);
      },
      { threshold: 0.05 }
    );
    if (sceneRef.current) {
      observer.observe(sceneRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Pass 1: measure hidden tag pills so physics bodies match text width
  useEffect(() => {
    const measured = measureRefs.current.map((el) => {
      if (!el) return { w: 240, h: 56 };
      const r = el.getBoundingClientRect();
      return { w: r.width, h: r.height };
    });
    setSizes(measured);
  }, []);

  // Pass 2: build the Matter.js world
  useEffect(() => {
    if (!sizes || !sceneRef.current) return undefined;
    const container = sceneRef.current;
    let disposed = false;
    let cleanupPhysics = () => {};

    const setupPhysics = async () => {
      const matterModule = await import("matter-js");
      if (disposed || !container.isConnected) return;

      const Matter = matterModule.default ?? matterModule;
      matterRef.current = Matter;
      const width = container.clientWidth;
      const height = container.clientHeight;

      const {
        Engine, Render, Runner, Bodies, Composite,
        Mouse, MouseConstraint, Body, Events,
      } = Matter;

      const isMobile = window.innerWidth < 768;
      const engine = Engine.create();
      engine.gravity.y = isMobile ? 0.8 : 2.0; // Reduced gravity

      const render = Render.create({
        element: container,
        engine,
        options: {
          width,
          height,
          background: "transparent",
          wireframes: false,
          pixelRatio: window.devicePixelRatio || 1,
        },
      });

      const wallOpts = { isStatic: true, render: { visible: false } };
      Composite.add(engine.world, [
        // Floor
        Bodies.rectangle(width / 2, height + 50, width * 5, 100, wallOpts),
        // Left wall
        Bodies.rectangle(-2500, height / 2, 5000, height * 20, wallOpts),
        // Right wall
        Bodies.rectangle(width + 2500, height / 2, 5000, height * 20, wallOpts),
      ]);

      // Enforce constraints to keep objects within view
      const bodies: any[] = [];
      Events.on(engine, "beforeUpdate", () => {
        bodies.forEach((b) => {
          if (b.position.y < -1200) {
            Body.setPosition(b, { x: b.position.x, y: -1199 });
            if (b.velocity.y < 0) {
              Body.setVelocity(b, { x: b.velocity.x * 0.5, y: Math.abs(b.velocity.y) });
            }
          }
          if (b.position.x < -200 || b.position.x > width + 200) {
            Body.setPosition(b, { x: width / 2, y: -100 });
            Body.setVelocity(b, { x: 0, y: 10 });
          }
          if (b.position.y > height + 200) {
            Body.setPosition(b, { x: width / 2, y: -100 });
            Body.setVelocity(b, { x: 0, y: 10 });
          }
        });
      });

      // Pink pill-shaped tags
      sizes.forEach((s, i) => {
        const x = 100 + Math.random() * (width - 200);
        const y = -150 - i * 100;
        const body = Bodies.rectangle(x, y, s.w, s.h, {
          chamfer: { radius: s.h / 2 },
          restitution: 0.45,
          friction: 0.4,
          density: 0.002,
          render: { fillStyle: "hsl(315, 100%, 92%)", strokeStyle: "#000", lineWidth: 0 },
        });
        Body.setAngle(body, (Math.random() - 0.5) * 0.6);
        (body as any).custom = { type: "tag", text: TAGS[i] };
        bodies.push(body);
      });

      // Two pink circles with cross
      const baseRadii = isMobile ? [50, 45] : [100, 90];
      baseRadii.forEach((r, idx) => {
        const x = 150 + Math.random() * (width - 300);
        const y = -300 - idx * 150;
        const c = Bodies.circle(x, y, r, {
          restitution: 0.5,
          friction: 0.3,
          density: 0.003,
          render: { fillStyle: "#FCA5E1" },
        });
        (c as any).custom = { type: "circle", r, idx };
        bodies.push(c);
      });

      Composite.add(engine.world, bodies);

      // Drag with mouse
      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } },
      });
      Composite.add(engine.world, mouseConstraint);
      render.mouse = mouse;

      // Overlay: draw labels and arrow glyphs on top of Matter's shapes
      const ctx = render.context;
      Events.on(render, "afterRender", () => {
        bodies.forEach((b) => {
          const custom = (b as any).custom;
          if (!custom) return;
          ctx.save();
          ctx.translate(b.position.x, b.position.y);
          ctx.rotate(b.angle);
          if (custom.type === "tag") {
            ctx.fillStyle = "#3A0526";
            const fontSize = window.innerWidth > 768 ? "20px" : "14px";
            ctx.font = `600 ${fontSize} 'Inter', system-ui, sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(custom.text, 0, 0);
          } else {
            // Draw a minimal plus/cross symbol
            ctx.strokeStyle = "#3A0526";
            ctx.lineWidth = window.innerWidth > 768 ? 2 : 1.5;
            ctx.lineCap = "round";
            const s = custom.r * 0.45;

            ctx.save();
            if (custom.idx === 1) {
              ctx.rotate(Math.PI / 4); // rotate to make an X
            }
            ctx.beginPath();
            // Vertical line
            ctx.moveTo(0, -s);
            ctx.lineTo(0, s);
            // Horizontal line
            ctx.moveTo(-s, 0);
            ctx.lineTo(s, 0);
            ctx.stroke();
            ctx.restore();
          }
          ctx.restore();
        });
      });

      const runner = Runner.create();
      engineRef.current = engine;
      runnerRef.current = runner;
      renderRef.current = render;

      if (inViewRef.current) {
        Runner.run(runner, engine);
        Render.run(render);
      } else {
        Runner.stop(runner);
        Render.stop(render);
      }

      const handleResize = () => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        const dpr = window.devicePixelRatio || 1;
        render.canvas.width = w * dpr;
        render.canvas.height = h * dpr;
        render.canvas.style.width = `${w}px`;
        render.canvas.style.height = `${h}px`;
        render.options.width = w;
      };
      window.addEventListener("resize", handleResize);

      cleanupPhysics = () => {
        window.removeEventListener("resize", handleResize);
        Render.stop(render);
        Runner.stop(runner);
        Composite.clear(engine.world, false);
        Engine.clear(engine);
        render.canvas.remove();
        
        engineRef.current = null;
        runnerRef.current = null;
        renderRef.current = null;
      };
    };

    setupPhysics();

    return () => {
      disposed = true;
      cleanupPhysics();
    };
  }, [sizes]);

  useEffect(() => {
    if (matterRef.current && runnerRef.current && engineRef.current && renderRef.current) {
      if (inView) {
        matterRef.current.Runner.run(runnerRef.current, engineRef.current);
        matterRef.current.Render.run(renderRef.current);
      } else {
        matterRef.current.Runner.stop(runnerRef.current);
        matterRef.current.Render.stop(renderRef.current);
      }
    }
  }, [inView]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      {!sizes && (
        <div className="invisible absolute">
          {TAGS.map((t, i) => (
            <div
              key={t}
              ref={(el) => { measureRefs.current[i] = el; }}
              className="inline-block whitespace-nowrap px-6 md:px-10 py-3 md:py-4 text-[14px] md:text-[20px] font-semibold"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              {t}
            </div>
          ))}
        </div>
      )}
      <div ref={sceneRef} className="absolute inset-0" />
    </div>
  );
}

export default function PlayaFooter() {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const footerElement = footerRef.current;
    if (!footerElement) return undefined;

    let refreshFrame = 0;
    let entranceTimeline: gsap.core.Timeline | null = null;
    
    const ctx = gsap.context(() => {
      const select = gsap.utils.selector(footerElement);
      const brandText = select(".footer-brand-text");
      const navHeaders = select(".footer-nav-header");
      const navLinks = select(".footer-nav-link");
      const bottomText = select(".footer-bottom-text");

      gsap.set(brandText, { y: 60, opacity: 0 });
      gsap.set(navHeaders, { opacity: 0, y: 15 });
      gsap.set(navLinks, { opacity: 0, x: -10 });
      gsap.set(bottomText, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerElement,
          start: "top 75%",
          end: "+=5000",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        }
      });

      entranceTimeline = tl;

      tl.to(brandText,
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power4.out" }
      )
      .to(navHeaders,
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
        "-=0.5"
      )
      .to(navLinks,
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" },
        "-=0.4"
      )
      .to(bottomText,
        { opacity: 1, duration: 0.6 },
        "-=0.2"
      );
    }, footerElement);

    refreshFrame = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();

      if (footerElement.getBoundingClientRect().top <= window.innerHeight * 0.75) {
        entranceTimeline?.play();
      }
    });

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      ctx.revert();
    };
  }, []);

  return (
    <footer ref={footerRef} className="playa-footer relative z-50 bg-black w-full h-[100vh] overflow-hidden flex flex-col lg:flex-row border-t border-white/10">
      {/* LEFT COLUMN */}
      <div className="playa-footer__left relative flex flex-col w-full h-1/2 lg:h-full lg:w-1/2 lg:border-r lg:border-white/10 px-8 py-10 lg:px-20 lg:py-24 justify-between overflow-hidden group/footer">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 opacity-30 group-hover/footer:opacity-70" />
        
        {/* Brand block */}
        <div className="playa-footer__brand relative z-10 flex flex-col mb-16 lg:mb-24">
          <h2 className="playa-footer__brand-heading [font-family:Oswald,sans-serif] font-bold tracking-tight leading-[0.9] text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] xl:text-[10rem] uppercase m-0 flex flex-col group/brand cursor-default text-white">
            <span className="footer-brand-text inline-block">BRAND</span>
            <span className="relative inline-block w-max footer-brand-text">
              CRAFTERS.
              <span className="absolute bottom-[-4px] md:bottom-[-6px] left-0 w-[95%] h-[4px] md:h-[6px] bg-white"></span>
            </span>
          </h2>
        </div>

        {/* Nav grid */}
        <div className="playa-footer__nav relative z-10 flex flex-col h-full gap-8 lg:gap-16">
          <div className="playa-footer__nav-row flex flex-row gap-12 sm:gap-20 lg:gap-20 xl:gap-32">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-6 lg:mb-8 footer-nav-header">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 border border-white/10 transition-colors duration-300 group-hover/footer:border-white/30">
                  <MapPin className="w-3 h-3 text-white/80" strokeWidth={2} />
                </div>
                <h3 className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50">Quick Links</h3>
              </div>
              <ul className="playa-footer__link-list flex flex-col gap-3 lg:gap-4 ml-1">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Our Services", href: "/services" },
                  { name: "Contact", href: "/contact", external: false }
                ].map((l) => (
                  <li key={l.name} className="footer-nav-link group/link">
                    {l.external ? (
                      <a
                        className="flex items-center gap-2 text-[13px] md:text-[15px] font-medium text-[#b3b3b3] transition-all duration-300 hover:text-white"
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                      <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover/link:w-4"></span>
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">{l.name}</span>
                      </a>
                    ) : (
                      <Link
                        className="flex items-center gap-2 text-[13px] md:text-[15px] font-medium text-[#b3b3b3] transition-all duration-300 hover:text-white"
                        to={l.href}
                      >
                        <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover/link:w-4"></span>
                        <span className="transition-transform duration-300 group-hover/link:translate-x-1">{l.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-6 lg:mb-8 footer-nav-header">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 border border-white/10 transition-colors duration-300 group-hover/footer:border-white/30">
                  <ArrowUpRight className="w-3 h-3 text-white/80" strokeWidth={2} />
                </div>
                <h3 className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50">Explore</h3>
              </div>
              <ul className="playa-footer__link-list flex flex-col gap-3 lg:gap-4 ml-1">
                {[
                  { name: "Brand Identity", href: "/services#brand-identity" },
                  { name: "Websites & Apps", href: "/services#websites-apps" },
                  { name: "Creative Production", href: "/services#creative-production" },
                  { name: "Marketing & Visibility", href: "/services#marketing-visibility" },
                ].map((l) => (
                  <li key={l.name} className="footer-nav-link group/link">
                    <Link 
                      className="flex items-center gap-2 text-[13px] md:text-[15px] font-medium text-[#b3b3b3] transition-all duration-300 hover:text-white" 
                      to={l.href}
                    >
                      <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover/link:w-4"></span>
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">{l.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom links */}
          <div className="flex flex-col mt-auto pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 footer-bottom-text">
              <div className="text-[10px] md:text-[11px] font-medium text-white/40 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse"></span>
                © 2026 BRAND CRAFTERS
              </div>
              
              <div className="flex items-center gap-4 text-white/40">
                <Link to="/privacy" className="text-[10px] md:text-[11px] hover:text-white transition-colors uppercase tracking-widest">Privacy</Link>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <Link to="/terms" className="text-[10px] md:text-[11px] hover:text-white transition-colors uppercase tracking-widest">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN — physics playground */}
      <div className="playa-footer__stage w-full h-1/2 lg:h-full lg:w-1/2 relative">
        <PhysicsPlayground />
      </div>
    </footer>
  );
}
