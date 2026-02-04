import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update dot position immediately for snappy feel
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      
      // Update cursor ring position with slight delay for smooth trailing effect
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        cursor.classList.add('cursor-hover');
        cursorDot.classList.add('cursor-hover');
      } else {
        cursor.classList.remove('cursor-hover');
        cursorDot.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          width: '40px',
          height: '40px',
          border: '2px solid rgba(167, 139, 250, 0.5)',
          borderRadius: '50%',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
          left: '-20px',
          top: '-20px',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: 'rgba(167, 139, 250, 0.8)',
          borderRadius: '50%',
          left: '-4px',
          top: '-4px',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}
