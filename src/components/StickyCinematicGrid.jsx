import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./StickyCinematicGrid.css";

gsap.registerPlugin(ScrollTrigger);

const cinematicGridVideo = {
  kind: "video",
  src: "https://avfsxrdfgmumvktolqng.supabase.co/storage/v1/object/sign/assets/useless/Performer_infinite_zoom_transition_202607031728.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMTg2YjBhZi1mZmI3LTQ1NjQtYTVmZC02NDJjYzBkMGMxNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvdXNlbGVzcy9QZXJmb3JtZXJfaW5maW5pdGVfem9vbV90cmFuc2l0aW9uXzIwMjYwNzAzMTcyOC5tcDQiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgzMDgxMDA4LCJleHAiOjQ5MzY2ODEwMDh9.L-vFrn4Whs8gCHL30XaGLcoZBs1iXuXGfZ1N-rXV5jU",
  poster: "/images/services/brand-identity-spatial.webp",
};

const MEDIA_URLS = {
  videoOne: import.meta.env.VITE_MEDIA_VIDEO_ONE || "https://avfsxrdfgmumvktolqng.supabase.co/storage/v1/object/sign/assets/grid-9videoimage/1stpostion.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMTg2YjBhZi1mZmI3LTQ1NjQtYTVmZC02NDJjYzBkMGMxNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvZ3JpZC05dmlkZW9pbWFnZS8xc3Rwb3N0aW9uLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODI4MTg3NDUsImV4cCI6MTg2OTIxODc0NX0.0QukS5cXcRiHX8vTqrvc-cdmmuPoReN6r6xMHGz-FsU",
  videoSeven: import.meta.env.VITE_MEDIA_VIDEO_SEVEN || "https://avfsxrdfgmumvktolqng.supabase.co/storage/v1/object/sign/assets/grid-9videoimage/7thpostion.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMTg2YjBhZi1mZmI3LTQ1NjQtYTVmZC02NDJjYzBkMGMxNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvZ3JpZC05dmlkZW9pbWFnZS83dGhwb3N0aW9uLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODI4MTkwNTcsImV4cCI6MTg2OTIxOTA1N30.I_FE3Hk9aUb5NEd6eB7ImcOnDZbWVPuhVtoVJO9YdYo",
  videoEight: import.meta.env.VITE_MEDIA_VIDEO_EIGHT || "https://avfsxrdfgmumvktolqng.supabase.co/storage/v1/object/sign/assets/grid-9videoimage/8th%20postionbottom%20middle.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMTg2YjBhZi1mZmI3LTQ1NjQtYTVmZC02NDJjYzBkMGMxNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhc3NldHMvZ3JpZC05dmlkZW9pbWFnZS84dGggcG9zdGlvbmJvdHRvbSBtaWRkbGUubXA0Iiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4MjgxOTE2OSwiZXhwIjo0OTM2NDE5MTY5fQ.LArLupFSIO3SLvUmNvsG-9nuG6SefQidmzjNmp2Fz2U"
};

const mediaAssets = [
  {
    kind: "video",
    src: MEDIA_URLS.videoOne,
    poster: "/images/services/brand-identity-spatial.webp",
  },
  {
    kind: "image",
    src: "/images/street-car-center.webp",
    alt: "Centered street car portrait",
    width: 1600,
    height: 900,
  },
  {
    kind: "image",
    src: "/images/kitten.webp",
    alt: "Kitten looking up",
    width: 1600,
    height: 900,
  },
  {
    kind: "image",
    src: "/images/creative-center.webp",
    alt: "Centered creative tabletop",
    width: 1600,
    height: 900,
  },
  cinematicGridVideo,
  {
    kind: "image",
    src: "/images/fast-food-spread.webp",
    alt: "Fast food spread",
    width: 1600,
    height: 900,
  },
  {
    kind: "video",
    src: MEDIA_URLS.videoSeven,
    poster: "/images/services/brand-identity-spatial.webp",
  },
  {
    kind: "video",
    src: MEDIA_URLS.videoEight,
    poster: "/images/services/brand-identity-spatial.webp",
  },
  {
    kind: "image",
    src: "/images/pizza.webp",
    alt: "Pizza",
    width: 1600,
    height: 900,
  },
];

function handleImageError(event) {
  if (event.currentTarget.dataset.fallbackApplied) return;
  event.currentTarget.dataset.fallbackApplied = "true";
  event.currentTarget.src = "/images/services/brand-identity-spatial.webp";
}

export default function StickyCinematicGrid() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const videoRefs = useRef([]);
  const [centerVideoSrc, setCenterVideoSrc] = useState(
    window.__PRELOADED_CINEMATIC_VIDEO__ || cinematicGridVideo.src
  );

  // Aggressively preload the main cinematic video if not already preloaded by LoadingScreen
  useEffect(() => {
    if (window.__PRELOADED_CINEMATIC_VIDEO__) {
      return;
    }

    let objectUrl;
    fetch(cinematicGridVideo.src)
      .then((res) => res.blob())
      .then((blob) => {
        objectUrl = URL.createObjectURL(blob);
        setCenterVideoSrc(objectUrl);
      })
      .catch((err) => console.error("Error preloading cinematic video:", err));

    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, []);

  useGSAP(
    () => {
      const videos = videoRefs.current.filter(Boolean);
      const loadGridVideos = () => {
        const gridVideos = gridRef.current?.querySelectorAll("video") ?? [];
        gridVideos.forEach((video) => {
          video.play().catch(() => undefined);
        });
      };

      videos.forEach((video) => {
        video.muted = true;
        // Keep preload="auto" so they buffer before we reach the section
      });

      gsap.set(gridRef.current, {
        transformOrigin: "50% 50%",
      });

      // Optional: Start playing slightly before entering to ensure smooth playback
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        onEnter: loadGridVideos,
        once: true
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onEnter: loadGridVideos,
          onEnterBack: loadGridVideos,
        },
      });

      timeline
        .from(gridRef.current, {
          scale: () => {
            const cell = gridRef.current?.querySelector('.scg-cell--4');
            if (!cell) return 3.25;
            const scaleX = (window.innerWidth * 1.01) / cell.offsetWidth;
            const scaleY = (window.innerHeight * 1.01) / cell.offsetHeight;
            return Math.max(scaleX, scaleY);
          },
          duration: 2,
          ease: "none",
        }, 0)
        .from(
          ".scg-cell:not(.scg-cell--4)",
          {
            opacity: 0.28,
            duration: 1,
            ease: "none",
          },
          0
        )
        .from(
          ".scg-cell--4 .scg-media",
          {
            scale: 1.05,
            duration: 1,
            ease: "none",
          },
          0
        )
        .to(gridRef.current, { duration: 0.5 });

      return () => {
        videos.forEach((video) => video.pause());
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="media-system-section"
      ref={sectionRef}
      className="scg-section"
      aria-label="Cinematic sticky media grid"
    >
      <div ref={gridRef} className="scg-grid" aria-hidden="true">
        {mediaAssets.map((asset, index) => {
          const isCenterVideo = asset === cinematicGridVideo;
          const currentSrc = isCenterVideo ? centerVideoSrc : asset.src;

          return (
            <figure className={`scg-cell scg-cell--${index}`} key={`${asset.kind}-${index}`}>
              {asset.kind === "video" ? (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={currentSrc}
                  poster={asset.poster}
                  className="scg-media"
                  playsInline
                  loop
                  muted
                  preload="auto"
                />
              ) : (
                <img
                  src={asset.src}
                  alt={asset.alt ?? `Media cell ${index}`}
                  className="scg-media"
                  loading="eager"
                  width={asset.width ?? 800}
                  height={asset.height ?? 800}
                  onError={handleImageError}
                />
              )}
            </figure>
          );
        })}
      </div>
    </section>
  );
}

