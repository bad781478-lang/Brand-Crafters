import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "lucide-react/dist/esm/icons/menu.mjs";
import X from "lucide-react/dist/esm/icons/x.mjs";
import { DEFAULT_WHATSAPP_URL } from "../utils/whatsapp";

const navItems = ["Home", "Our Services", "About Us"];

const navLinks = {
  Home: "/",
  "Our Services": "/services",
  "About Us": "/about",
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function RollingCta({ isDarkText = false }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        "group relative flex h-[42px] items-center rounded-xl px-6 transition-all duration-300 font-body",
        isDarkText ? "bg-black text-white hover:bg-black/90" : "bg-white text-black hover:bg-white/90"
      )}
    >
      <span className="relative h-[1.2rem] overflow-hidden font-bold uppercase tracking-[0.08em] text-[0.8rem] whitespace-nowrap">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          <span className="flex h-[1.2rem] items-center gap-1.5">
            Get In Touch{" "}
            <span className="text-base leading-none transition-transform duration-700 group-hover:rotate-180">
              ✦
            </span>
          </span>
          <span className="flex h-[1.2rem] items-center gap-1.5">
            Get In Touch{" "}
            <span className="text-base leading-none transition-transform duration-700 group-hover:rotate-180">
              ✦
            </span>
          </span>
        </span>
      </span>
    </span>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);
  const isFloating = isScrolled || isMenuOpen;
  
  // Make text dark on /about and /services to match the light hero background
  // However, on mobile when the floating dark background appears (isFloating), switch back to white text
  const isDarkText = (location.pathname === '/about' || location.pathname === '/services') && !isFloating;

  useEffect(() => {
    let rafId = 0;

    const updateScrollState = () => {
      rafId = 0;
      setIsScrolled(window.scrollY > 20 && window.innerWidth < 1024);
      setIsDesktop(window.innerWidth >= 1024);
    };

    const onScroll = () => {
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScrollState);
      if (rafId !== 0) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      aria-label="Primary"
      className={cx(
        "fixed lg:absolute left-0 right-0 top-0 lg:top-2.5 z-50 transition-all duration-500 opacity-100",
        isFloating ? "px-1.5 sm:px-2 lg:px-0" : "px-0"
      )}
    >
      <div
        className={cx(
          "relative mx-auto flex w-full flex-col px-3 sm:px-4 lg:px-8 py-3 lg:py-5 transition-all duration-500",
          isFloating
            ? "mt-2 sm:mt-3 rounded-2xl lg:mt-0 lg:rounded-none"
            : "mt-0 rounded-none"
        )}
      >
        <div
          className={cx(
            "absolute inset-0 -z-10 transition-all duration-500 ease-out border lg:hidden",
            isFloating
              ? "bg-black/60 border-white/10 backdrop-blur-[20px] opacity-100 scale-100 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              : "bg-transparent border-transparent backdrop-blur-none opacity-0 scale-[0.98] rounded-none shadow-none"
          )}
          style={{ willChange: "opacity, transform" }}
        />

        <div className="flex w-full items-center justify-between">
          <Link
            to="/"
            aria-label="Brand Crafters"
            className={cx(
              "group flex flex-col bg-transparent p-0 text-left font-body leading-none transition-opacity duration-300 hover:opacity-80 border-0 shrink-0",
              isDarkText ? "text-black" : "text-white"
            )}
          >
            <span className="text-[1rem] sm:text-[1.2rem] font-bold uppercase tracking-tighter lg:text-[1.55rem] font-headline whitespace-nowrap">
              BRAND CRAFTERS
            </span>
            <span
              className={cx(
                "text-[0.55rem] sm:text-[0.65rem] font-medium uppercase tracking-[0.2em] lg:text-[0.75rem] font-body mt-[2px]",
                isDarkText ? "text-black/60" : "text-white/60"
              )}
            >
              BRANDING STUDIO
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={navLinks[item]}
                  className={cx(
                    "px-3 text-[0.85rem] font-bold uppercase tracking-[0.12em] transition-colors duration-300 font-body",
                    isDarkText ? "text-black/70 hover:text-black" : "text-white/70 hover:text-white"
                  )}
                >
                  {item}
                </Link>
              ))}
              <Link to="/contact" aria-label="Get in touch">
                <RollingCta isDarkText={isDarkText} />
              </Link>
            </div>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              onClick={() => setIsMenuOpen((open) => !open)}
              className={cx(
                "inline-flex h-[38px] w-[38px] items-center justify-center rounded-full transition-all duration-300 lg:hidden",
                isDarkText ? "bg-black/[0.08] text-black hover:bg-black/[0.15]" : "bg-white/[0.08] text-white hover:bg-white/[0.15]"
              )}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <Menu className="h-4 w-4" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation-menu" className="bt-mobile-menu w-full overflow-hidden lg:hidden">
            <div className="flex flex-col gap-4 pt-6 pb-2">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={navLinks[item]}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-left font-body text-[1.1rem] font-medium transition-opacity hover:opacity-70 text-white"
                >
                  {item}
                </Link>
              ))}

              <div className="mt-2 border-t pt-4 border-white/10">
                <Link
                  to="/contact"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  aria-label="Get in touch"
                  className="flex w-full justify-center rounded-xl py-3 font-body text-[1rem] font-medium transition-transform active:scale-[0.98] bg-white text-black hover:bg-white/90"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
