import { forwardRef, useRef, useEffect } from 'react';
import { useTiltEffect } from '../hooks/useTiltEffect';

export const BusinessFeatureCard = forwardRef(
  function BusinessFeatureCard(
    {
      variant,
      title,
      description,
      indexLabel,
      videoSrc,
      layers = [],
      rotation,
      textPanel,
      accent,
      reduced = false,
    },
    ref,
  ) {
    // Add tilt effect for the integrated-note layer
    const tiltProps = useTiltEffect({
      maxTilt: 15,
      perspective: 1200,
      scale: 1.05,
      speed: 400,
      easing: 'cubic-bezier(0.03, 0.98, 0.52, 0.99)',
    });

    const videoRef = useRef(null);

    useEffect(() => {
      const video = videoRef.current;

      if (!video) {
        return undefined;
      }

      let idleCallback = 0;
      let observer = null;
      let fallbackTimer = 0;
      let hasWarmed = false;

      const warmVideo = () => {
        if (hasWarmed || !video.isConnected) {
          return;
        }

        hasWarmed = true;
        video.muted = true;
        video.preload = 'auto';
        video.load();

        const playWhenIdle = () => {
          if (video.isConnected) {
            video.play().catch(() => undefined);
          }
        };

        if ('requestIdleCallback' in window) {
          idleCallback = window.requestIdleCallback(playWhenIdle, { timeout: 900 });
        } else {
          fallbackTimer = window.setTimeout(playWhenIdle, 120);
        }
      };

      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) {
              return;
            }

            observer?.disconnect();
            warmVideo();
          },
          { rootMargin: '120px 0px', threshold: 0.05 },
        );
        observer.observe(video);
      } else {
        fallbackTimer = window.setTimeout(warmVideo, 1800);
      }

      return () => {
        observer?.disconnect();
        window.clearTimeout(fallbackTimer);

        if (idleCallback && 'cancelIdleCallback' in window) {
          window.cancelIdleCallback(idleCallback);
        }
      };
    }, [indexLabel]);

    const style = {
      '--bt-card-rotate': `${rotation}deg`,
      '--bt-text-panel': textPanel,
      '--bt-text-accent': accent,
    };
    const doodleStrokeProps = {
      fill: 'none',
      stroke: 'var(--charcoal-black)',
      strokeWidth: 1.9,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      opacity: 0.35,
    };
    const doodleSolidProps = {
      fill: 'var(--charcoal-black)',
      opacity: 0.42,
    };

    return (
      <li
        ref={ref}
        className={[
          'bt-business-feature',
          `bt-business-feature--${variant}`,
          reduced ? 'bt-business-feature--reduced' : '',
        ].join(' ')}
        style={style}
      >
        <div className="bt-business-feature__stage">
          <div className="bt-business-card-anchor">
            {layers.map((layer, idx) => {
              // Check if this is the integrated-note layer
              const isIntegratedNote = layer.className === 'bt-business-layer--integrated-note';
              
              return (
                <div
                  key={idx}
                  data-bt-business-paper
                  data-bt-layer-rotation={layer.rotation ?? 0}
                  className={['bt-business-layer', layer.className].join(' ')}
                  aria-hidden="true"
                  style={
                    {
                      '--bt-layer-rotate': `${layer.rotation ?? 0}deg`,
                      ...(isIntegratedNote ? tiltProps.style : {}),
                    }
                  }
                  {...(isIntegratedNote ? {
                    ref: tiltProps.ref,
                    onMouseMove: tiltProps.onMouseMove,
                    onMouseEnter: tiltProps.onMouseEnter,
                    onMouseLeave: tiltProps.onMouseLeave,
                  } : {})}
                />
              );
            })}

            <div data-bt-business-card className="bt-business-device">
              <div className="bt-business-device__frame" aria-hidden="true" />
              <video
                ref={videoRef}
                className="bt-business-device__video"
                src={videoSrc}
                preload="metadata"
                muted
                playsInline
                loop
                aria-label={`${title} feature preview`}
              />
              {indexLabel !== '02' && indexLabel !== '03' && <span className="bt-business-device__sticker" aria-hidden="true" />}


              {indexLabel === '02' && (
                <>
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute left-[10%] bottom-[24%] z-[4] h-auto w-[17%] pointer-events-none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 65 25 Q 65 60 90 60 Q 65 60 65 95 Q 65 60 40 60 Q 65 60 65 25 Z M 30 14 Q 30 30 42 30 Q 30 30 30 46 Q 30 30 18 30 Q 30 30 30 14 Z"
                      fill="none"
                      stroke="var(--charcoal-black)"
                      strokeWidth={1.9}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity={0.48}
                    />
                  </svg>

                  {/* Right Side Element (Pencil Holder) */}
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute right-[11%] bottom-[5%] z-[4] h-auto w-[18%] pointer-events-none"
                    aria-hidden="true"
                  >
                    <path d="M 18 20 L 23 5 L 28 15" {...doodleStrokeProps} />
                    <path d="M 20.5 12.5 L 23 5 L 25.5 10 Z" stroke="none" {...doodleSolidProps} />
                    <path d="M 28 50 L 18 20 L 28 15 L 37 50" {...doodleStrokeProps} />
                    <path d="M 23 17.5 L 32.5 50" {...doodleStrokeProps} />
                    <path d="M 40 50 L 38 28 L 48 26 L 49 50" {...doodleStrokeProps} />
                    <path d="M 46 34 L 42 35" {...doodleStrokeProps} />
                    <path d="M 45 26.5 L 45 42 L 43 42" {...doodleStrokeProps} />
                    <path d="M 52 50 L 58 12 L 70 14 L 64 50" {...doodleStrokeProps} />
                    <path d="M 68.5 18 L 64 17.5" {...doodleStrokeProps} />
                    <path d="M 67 24 L 62 23.5" {...doodleStrokeProps} />
                    <path d="M 66 30 L 61 29.5" {...doodleStrokeProps} />
                    <path d="M 65 36 L 60 35.5" {...doodleStrokeProps} />
                    <path d="M 63.5 42 L 59 41.5" {...doodleStrokeProps} />
                    <path d="M 22 50 L 78 50" {...doodleStrokeProps} />
                    <path d="M 24 50 L 29 88 Q 30 94 36 94 L 64 94 Q 70 94 71 88 L 76 50" {...doodleStrokeProps} />
                    <path d="M 25.5 60 L 74.5 60" {...doodleStrokeProps} />
                    <path d="M 27.5 75 L 72.5 75" {...doodleStrokeProps} />
                  </svg>
                </>
              )}

              {indexLabel === '03' && (
                <img
                  src="/bt-card-3-overlay.svg"
                  alt=""
                  className="absolute inset-0 z-[4] h-full w-full pointer-events-none"
                  aria-hidden="true"
                />
              )}

              {indexLabel === '04' && (
                <svg
                  viewBox="0 0 100 100"
                  className="absolute right-[11%] bottom-[8%] z-[4] h-auto w-[20%] rotate-[8deg] pointer-events-none"
                  aria-hidden="true"
                >
                  <g opacity="0.35" stroke="var(--charcoal-black)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="50" cy="50" r="35" strokeWidth="2.0" />
                    <circle cx="38" cy="42" r="3" fill="var(--charcoal-black)" stroke="none" />
                    <circle cx="62" cy="42" r="3" fill="var(--charcoal-black)" stroke="none" />
                    <path d="M 35,55 Q 50,70 65,55" strokeWidth="2.0" />
                  </g>
                </svg>
              )}

              {indexLabel !== '02' && indexLabel !== '03' && indexLabel !== '04' && (
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-[11%] bottom-[14%] z-[4] h-auto w-[20%] rotate-[8deg] pointer-events-none"
                  aria-hidden="true"
                >
                  <path d="M95 360 L185 135 L255 285 L355 120 L410 250 L465 175 L425 390 Q260 355 95 360Z" fill="none" stroke="var(--charcoal-black)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
                  <circle cx="185" cy="135" r="8" fill="var(--charcoal-black)" opacity="0.3" />
                  <circle cx="355" cy="120" r="8" fill="var(--charcoal-black)" opacity="0.3" />
                  <circle cx="465" cy="175" r="8" fill="var(--charcoal-black)" opacity="0.3" />
                  <path d="M125 335 Q170 325 215 338" fill="none" stroke="var(--charcoal-black)" strokeWidth="8" strokeLinecap="round" opacity="0.35" />
                </svg>
              )}
            </div>
          </div>

          <div data-bt-business-text className={['bt-business-copy', indexLabel === '02' ? 'bt-business-copy--identity' : ''].join(' ')}>
            <span className="bt-business-copy__index">{indexLabel}</span>

            <h3 className="bt-business-copy__title">{title}</h3>

            <p className="bt-business-copy__description">
              {description.split('\n').map((line, i, arr) => (
                <span key={i} className="whitespace-nowrap">
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>
      </li>
    );
  },
);
