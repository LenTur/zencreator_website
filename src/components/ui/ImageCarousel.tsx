import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ResponsiveImage } from './ResponsiveImage';

interface ImageCarouselProps {
  images: string[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  className = "",
  autoPlay = true,
  interval = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!autoPlay || images.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  if (images.length === 0) {
    console.log('ImageCarousel: No images provided');
    return <div className={`bg-red-500 text-white p-4 ${className}`}>No images</div>;
  }

  console.log('ImageCarousel rendering with', images.length, 'images');

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-full h-full overflow-hidden">
              <ResponsiveImage
                src={image}
                alt={`Carousel image ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
                loading={index === currentIndex ? 'eager' : 'lazy'}
                sizes="(max-width: 768px) 300px, 600px"
                style={{
                  filter: 'brightness(1)',
                  border: '2px solid transparent'
                }}
                onClick={goToNext}
                onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => {
                  e.currentTarget.style.border = '2px solid #8B5CF6';
                  e.currentTarget.style.filter = 'brightness(1.1)';
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) => {
                  e.currentTarget.style.border = '2px solid transparent';
                  e.currentTarget.style.filter = 'brightness(1)';
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-800 p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg z-10 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-800 p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg z-10 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 ${
                index === currentIndex 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
