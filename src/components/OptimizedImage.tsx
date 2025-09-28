import { useState, useCallback } from 'react';

interface OptimizedImageProps {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
  width?: number;
  height?: number;
  onError?: () => void;
  style?: React.CSSProperties;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  fallback,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes = '100vw',
  width,
  height,
  onError,
  style = {}
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Generate WebP source if not already WebP
  const webpSrc = src.includes('.webp') ? src : src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const finalSrc = hasError && fallback ? fallback : src;

  return (
    <picture>
      <source 
        srcSet={webpSrc} 
        type="image/webp" 
        sizes={sizes}
      />
      <img
        src={finalSrc}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        sizes={sizes}
        width={width}
        height={height}
        onError={handleError}
        onLoad={handleLoad}
        style={{
          ...style,
          transform: 'translateZ(0)', // Force hardware acceleration
          backfaceVisibility: 'hidden', // Prevent flickering
          willChange: 'opacity'
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
