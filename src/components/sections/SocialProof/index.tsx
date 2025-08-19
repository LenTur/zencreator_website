import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';

export const SocialProof = () => {
  const stats = [
    {
      number: "1 000+",
      description: "QC-approved assets/day"
    },
    {
      number: "240K+", 
      description: "dating images/year"
    },
    {
      number: "98%",
      description: "first-pass QA"
    },
    {
      number: "10K+",
      description: "campaigns delivered"
    }
  ];

  // Gallery images from homepage
  const galleryImages = [
    'home/carousel/carousel1.png',
    'home/carousel/carousel2.png', 
    'home/carousel/carousel3.jpeg',
    'home/carousel/carousel4.png',
    'home/carousel/carousel5.png',
    'home/carousel/carousel6.png',
    'home/carousel/carousel7.png',
    'home/carousel/carousel8.png',
    'home/carousel/carousel9.png',
    'home/carousel/carousel10.png',
    'home/carousel/carousel11.png',
    'home/carousel/carousel12.png',
    'home/carousel/carousel13.png',
    'home/carousel/carousel14.png',
    'home/carousel/carousel15.png',
    'home/carousel/carousel16.png'
  ];

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const imagesPerSlide = isMobile ? 1 : 4; // Show 1 image on mobile, 4 on desktop
  const totalSlides = Math.ceil(galleryImages.length / imagesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section className="py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Social Proof
            </h2>
          </div>
          
          {/* Standard spacing before cards */}
          <div className="mt-16">
            {/* 4 Light Cards in One Line - Full Width */}
            <div className="grid grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="aspect-[4/3] bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-6 group hover:scale-105 border border-gray-200">
                  <div className="text-2xl md:text-3xl font-black text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-center leading-relaxed font-medium text-sm">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Subtitle under cards */}
            <div className="text-center mt-12">
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Trusted by growth teams in SaaS, e-commerce, gaming and agencies on{' '}
                <span style={{ fontWeight: '700', color: '#0F172A' }}>five continents</span>.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Carousel Gallery */}
      <div className="w-full mt-16 relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>

        {/* Images Container */}
        <div className="overflow-hidden px-4 md:px-16">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className={`w-full flex-shrink-0 flex justify-center ${isMobile ? '' : 'space-x-6 md:space-x-8 lg:space-x-10'}`}>
                {galleryImages
                  .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
                  .map((src, idx) => (
                    <div key={`${slideIndex}-${idx}`} className={isMobile ? "w-64 h-80 bg-gray-100 rounded-xl overflow-hidden" : "w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 bg-gray-100 rounded-xl overflow-hidden"}>
                      <ResponsiveImage 
                        src={src} 
                        alt={`Gallery ${slideIndex * imagesPerSlide + idx + 1}`} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        sizes={isMobile ? "256px" : "(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-purple-600 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
