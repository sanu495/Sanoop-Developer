import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  onLoad,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(priority ? src : '');
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    // Use Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSrc(src);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px', // Load slightly before entering viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Low quality placeholder - prevents CLS */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 animate-pulse"
          style={{ width, height }}
        />
      )}
      
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{ width, height }}
      />
    </div>
  );
}
