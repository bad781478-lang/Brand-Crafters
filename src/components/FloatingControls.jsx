import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_WHATSAPP_URL } from '../utils/whatsapp';

export default function FloatingControls() {
  const location = useLocation();
  const isExcludedRoute = location.pathname.includes('/services') || location.pathname.includes('/about');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMixBlend, setIsMixBlend] = useState(true);
  const audioRef = useRef(null);
  const mixBlendRef = useRef(true);

  const audioUrl = "https://avfsxrdfgmumvktolqng.supabase.co/storage/v1/object/sign/assets/music/Signature%20Vision%20-%20Subtle%20Pulse%20-%20Treblo.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMTg2YjBhZi1mZmI3LTQ1NjQtYTVmZC02NDJjYzBkMGMxNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvbXVzaWMvU2lnbmF0dXJlIFZpc2lvbiAtIFN1YnRsZSBQdWxzZSAtIFRyZWJsby5tcDMiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgzMDcyMjM1LCJleHAiOjE4Njk0NzIyMzV9.5s1vecRqaaeSl4ZU54aDi6aeEajgsQ5jELKj4oQO-08";

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const getAudio = () => {
    if (audioRef.current) return audioRef.current;

    const audio = new Audio();
    audio.preload = 'none';
    audio.loop = true;
    audio.src = audioUrl;
    audio.currentTime = 4;
    audioRef.current = audio;
    return audio;
  };

  useEffect(() => {
    let ticking = false;
    const checkSections = () => {
      const hero = document.querySelector('.bt-hero-section');
      const cinematicGrid = document.querySelector('.scg-section');
      
      let overTarget = false;
      
      // We check if the bottom 40px of the screen intersects with any of these sections
      const checkY = window.innerHeight - 40;
      
      const checkOverlap = (el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= checkY && rect.bottom >= checkY;
      };

      if (checkOverlap(hero) || checkOverlap(cinematicGrid)) {
        overTarget = true;
      }

      if (mixBlendRef.current === overTarget) {
        mixBlendRef.current = !overTarget;
        setIsMixBlend(!overTarget);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkSections);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    const interval = setInterval(checkSections, 1000);
    checkSections();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const togglePlay = () => {
    const audio = getAudio();
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(e => console.error("Audio playback failed:", e));
      setIsPlaying(true);
    }
  };

  return (
      <div className={`fixed bottom-4 md:bottom-8 right-3 sm:right-4 lg:right-8 z-50 flex items-center gap-2 transition-all duration-300 ${isMixBlend && !isExcludedRoute ? 'mix-blend-difference text-white' : ''}`}>
        <button 
          onClick={togglePlay}
          className="flex h-10 w-[56px] md:h-12 md:w-[68px] items-center justify-center rounded-xl bg-[#e5e5e5] text-black hover:bg-white transition-all active:scale-95 shadow-md" 
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          <div className="flex h-4 items-center gap-[3px]">
            <div className={`w-[2px] rounded-full bg-current transition-all duration-300 ${isPlaying ? 'animate-bar-1' : 'h-1.5'}`} />
            <div className={`w-[2px] rounded-full bg-current transition-all duration-300 ${isPlaying ? 'animate-bar-2' : 'h-3'}`} />
            <div className={`w-[2px] rounded-full bg-current transition-all duration-300 ${isPlaying ? 'animate-bar-3' : 'h-1'}`} />
            <div className={`w-[2px] rounded-full bg-current transition-all duration-300 ${isPlaying ? 'animate-bar-4' : 'h-2'}`} />
            <div className={`w-[2px] rounded-full bg-current transition-all duration-300 ${isPlaying ? 'animate-bar-5' : 'h-1.5'}`} />
          </div>
        </button>
        <a
          href={DEFAULT_WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-[#e5e5e5] text-black hover:bg-white transition-colors shadow-md" 
          aria-label="Open WhatsApp chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>
  );
}
