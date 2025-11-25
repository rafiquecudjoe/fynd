import { useState, useEffect, ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

/**
 * OptimizedImage component with lazy loading, placeholder, and proper dimensions
 * Fixes Builder.io redirect issues by using cdn.builder.io directly
 * Implements loading states for better UX and performance
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(priority); // Priority images start as loaded
  const [error, setError] = useState(false);

  // Fix Builder.io API redirects by using cdn.builder.io directly
  const optimizedSrc = src.replace('api.builder.io', 'cdn.builder.io');

  // Reset states when src changes
  useEffect(() => {
    setIsLoaded(priority); // Priority images don't show loading state
    setError(false);
  }, [src, priority]);

  // For priority images, render directly without wrapper to avoid render delay
  if (priority) {
    return (
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        decoding="sync"
        onError={() => setError(true)}
        className={cn(className, error && 'opacity-50')}
        {...props}
      />
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)} style={{ aspectRatio: width && height ? `${width}/${height}` : undefined }}>
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          error && 'opacity-50'
        )}
        {...props}
      />
      
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-[#117465] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
          Failed to load image
        </div>
      )}
    </div>
  );
}
