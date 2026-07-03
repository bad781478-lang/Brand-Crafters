import { useEffect, useRef } from 'react';

const heroWords = [
  "Shaping",
  "modern",
  "brands",
  "through",
  "digital",
  "art",
  "& technology",
];

const HERO_VIDEO_SRC = "https://avfsxrdfgmumvktolqng.supabase.co/storage/v1/object/sign/assets/1783080389782961.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMTg2YjBhZi1mZmI3LTQ1NjQtYTVmZC02NDJjYzBkMGMxNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvMTc4MzA4MDM4OTc4Mjk2MS5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgzMDgwNDY3LCJleHAiOjMzMzE5MDgwNDY3fQ.Gfvb_WQ_DbLI_UJ62qe8lVLdk0Ak-UqAyIpUNbEovHk";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!document.body.classList.contains('is-loading')) {
      video.play().catch(e => console.log('Auto-play prevented:', e));
    } else {
      const handlePlayVideo = () => {
        video.play().catch(e => console.log('Auto-play prevented:', e));
      };
      // We also listen to revealFinished as a fallback just in case
      window.addEventListener('playHeroVideo', handlePlayVideo);
      window.addEventListener('revealFinished', handlePlayVideo);
      return () => {
        window.removeEventListener('playHeroVideo', handlePlayVideo);
        window.removeEventListener('revealFinished', handlePlayVideo);
      };
    }
  }, []);

  return (
    <section
      aria-label="Hero"
      className="bt-hero-section h-[100dvh] w-full bg-[#f4f4f4] p-1.5 sm:p-2 lg:p-2.5 flex flex-col justify-center"
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1rem] sm:rounded-[1.25rem] bg-black origin-center">
        <div className="absolute inset-0 h-full w-full bg-black">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="metadata"
            fetchPriority="high"
            className="h-full w-full object-cover"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" fetchPriority="high" />
          </video>
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

        <div
          className="bt-hero-copy absolute left-1.5 sm:left-2 lg:left-[22px] bottom-4 md:bottom-8 z-20 max-w-[85%] sm:max-w-[75%] lg:max-w-[60%] text-left select-none"
        >
          
          <h1
            aria-label="Shaping modern brands through digital art and technology"
            className="text-[1.25rem] sm:text-[1.5rem] md:text-[2.1rem] lg:text-[2.6rem] font-extrabold uppercase leading-[1.08] tracking-tight text-white font-headline relative flex flex-wrap gap-x-2 md:gap-x-3"
          >
            {heroWords.slice(0, 3).map((word, index) => (
              <span
                key={word}
                aria-hidden="true"
                className={[
                  "bt-hero-word inline-block text-[#eeeeee]",
                  word === "brands" ? "sm:mr-4" : "",
                  word === "& technology" ? "relative whitespace-nowrap sm:ml-2" : "",
                ].filter(Boolean).join(" ")}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {word}
              </span>
            ))}
            <span aria-hidden="true" className="basis-full h-0" />
            {heroWords.slice(3, 6).map((word, index) => (
              <span
                key={word}
                aria-hidden="true"
                className={[
                  "bt-hero-word inline-block text-[#eeeeee]",
                  word === "& technology" ? "relative whitespace-nowrap sm:ml-2" : "",
                ].filter(Boolean).join(" ")}
                style={{ animationDelay: `${0.24 + index * 0.08}s` }}
              >
                {word}
              </span>
            ))}
            <span aria-hidden="true" className="basis-full h-0 block md:hidden" />
            {heroWords.slice(6).map((word, index) => (
              <span
                key={word}
                aria-hidden="true"
                className={[
                  "bt-hero-word inline-block text-[#eeeeee]",
                  word === "& technology" ? "relative whitespace-nowrap sm:ml-2" : "",
                ].filter(Boolean).join(" ")}
                style={{ animationDelay: `${0.48 + index * 0.08}s` }}
              >
                {word}
              </span>
            ))}
          </h1>

        </div>
      </div>
    </section>
  );
}
