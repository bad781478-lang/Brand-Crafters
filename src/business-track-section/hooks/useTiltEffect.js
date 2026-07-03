import { useEffect, useRef, useCallback } from 'react';

export function useTiltEffect(options = {}) {
  const {
    maxTilt = 10,
    perspective = 1000,
    scale = 1.02,
    speed = 300,
    easing = 'cubic-bezier(0.03, 0.98, 0.52, 0.99)',
  } = options;

  const elementRef = useRef(null);
  const frameRef = useRef(null);
  const pointerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!elementRef.current) return;

      pointerRef.current = { x: e.clientX, y: e.clientY };

      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;

        if (!elementRef.current || !pointerRef.current) return;

        const rect = elementRef.current.getBoundingClientRect();
        const x = pointerRef.current.x - rect.left;
        const y = pointerRef.current.y - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;
        const currentTransform = elementRef.current.style.transform || '';
        const baseTransform = currentTransform.split('rotateX')[0].trim();

        elementRef.current.style.transition = 'none';
        elementRef.current.style.transform = `${baseTransform} rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      });
    },
    [maxTilt, scale]
  );

  const handleMouseEnter = useCallback(() => {
    if (!elementRef.current) return;
    elementRef.current.style.transition = `transform ${speed}ms ${easing}`;
  }, [speed, easing]);

  const handleMouseLeave = useCallback(() => {
    if (!elementRef.current) return;

    // Reset to original transform
    const currentTransform = elementRef.current.style.transform || '';
    const baseTransform = currentTransform.split('rotateX')[0].trim();
    
    elementRef.current.style.transition = `transform ${speed}ms ${easing}`;
    elementRef.current.style.transform = baseTransform;
  }, [speed, easing]);

  const tiltProps = {
    ref: elementRef,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: {
      perspective: `${perspective}px`,
      transformStyle: 'preserve-3d',
    },
  };

  return tiltProps;
}
