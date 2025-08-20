import React from 'react';
import { Link } from 'react-router-dom';
import { ToolCard } from '@/components/ui/ToolCard';
import { BeforeAfter } from '@/components/ui/BeforeAfter';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';
import { PhotoshootCarousel } from '@/components/ui/PhotoshootCarousel';
import { CarouselPreview } from '@/components/ui/CarouselPreview';

export const MoreMagicTools: React.FC = () => {
  const tools = [
    { 
      name: 'Face Generation', 
      description: 'Generate realistic faces with AI technology.',
      link: '/products/zencreator/content-creation/ai-face-generation',
      tryLink: 'https://app.zencreator.pro/',
      mockup: 'bg-gradient-to-br from-red-100 to-blue-100'
    },
    { 
      name: 'Face Swapping', 
      description: 'Swap faces in images with perfect AI precision.',
      link: '/products/zencreator/content-creation/ai-face-swapping',
      tryLink: 'https://app.zencreator.pro/',
      mockup: 'bg-gradient-to-br from-blue-100 to-gray-100'
    },
    { 
      name: 'Upscaling', 
      description: 'Enhance image quality and resolution with AI.',
      link: '/products/zencreator/content-creation/ai-upscaling',
      tryLink: 'https://app.zencreator.pro/',
      mockup: 'bg-gradient-to-br from-green-100 to-teal-100',
      showBeforeAfter: true
    },
    { 
      name: 'Generation by Prompt', 
      description: 'Create images from text descriptions.',
      link: '/products/zencreator/content-creation/ai-generation-prompt',
      tryLink: 'https://app.zencreator.pro/',
      mockup: 'bg-gradient-to-br from-purple-100 to-indigo-100'
    },
    { 
      name: 'Generation by Reference', 
      description: 'Generate images based on reference photos.',
      link: '/products/zencreator/content-creation/ai-generation-reference',
      tryLink: 'https://app.zencreator.pro/',
      mockup: 'bg-gradient-to-br from-yellow-100 to-orange-100'
    },
    { 
      name: 'Photo Shoot Generation', 
      description: 'Create professional photo shoots with AI.',
      link: '/products/zencreator/content-creation/photo-shoot',
      tryLink: 'https://app.zencreator.pro/',
      mockup: 'bg-gradient-to-br from-pink-100 to-red-100'
    },
    { 
      name: 'Dating Profile Generation', 
      description: 'Generate attractive dating profiles automatically.',
      link: '/services/dating-profiles-generation',
      tryLink: 'https://app.zencreator.pro/',
      mockup: 'bg-gradient-to-br from-rose-100 to-pink-100'
    },
    { 
      name: 'Video Generation', 
      description: 'Create stunning videos from text and images.',
      link: '/products/zencreator/content-creation/video-generation',
      tryLink: 'https://app.zencreator.pro/',
      mockup: 'bg-gradient-to-br from-indigo-100 to-purple-100'
    },
    { 
      name: 'Carousel Generation', 
      description: 'Generate engaging carousel posts for social media.',
      link: '/products/zencreator/content-creation/carousel-generation',
      tryLink: 'https://app.zencreator.pro/',
      mockup: 'bg-gradient-to-br from-teal-100 to-blue-100',
      showCarousel: true
    }
  ];

  return (
    <section className="w-full py-16 md:py-[150px] bg-ink-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">More Magic Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.name}
              name={tool.name}
              description={tool.description}
              link={tool.link}
              tryLink={tool.tryLink}
            >
              {tool.name === 'Upscaling' ? (
                <BeforeAfter
                  beforeImage="/images/optimized/desktop/home/tools/upscale1.png"
                  afterImage="/images/optimized/desktop/home/tools/upscale2.jpg"
                  beforeAlt="Before upscaling"
                  afterAlt="After upscaling"
                  className="absolute inset-0 w-full h-full"
                />
              ) : tool.name === 'Face Swapping' ? (
                <BeforeAfter
                  beforeImage="/images/optimized/desktop/home/tools/faceswap1.png"
                  afterImage="/images/optimized/desktop/home/tools/faceswap2.png"
                  beforeAlt="Before face swapping"
                  afterAlt="After face swapping"
                  className="absolute inset-0 w-full h-full"
                />
              ) : tool.name === 'Face Generation' ? (
                <ResponsiveImage
                  src="home/tools/Face Generation.png"
                  alt="Face Generation Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : tool.name === 'Generation by Prompt' ? (
                <ResponsiveImage
                  src="home/tools/Generation by Prompt.png"
                  alt="Generation by Prompt Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : tool.name === 'Generation by Reference' ? (
                <ResponsiveImage
                  src="home/tools/Generator by Reference.png"
                  alt="Generation by Reference Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : tool.name === 'Photo Shoot Generation' ? (
                <PhotoshootCarousel
                  className="absolute inset-0 w-full h-full"
                  autoPlay={true}
                  interval={3000}
                />
              ) : tool.name === 'Video Generation' ? (
                <div className="absolute inset-0 w-full h-full">
                  <video
                    src="/images/home/tools/video.mp4?v=1"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    controls={false}
                  />
                </div>
              ) : tool.name === 'Carousel Generation' ? (
                <CarouselPreview
                  className="absolute inset-0 w-full h-full"
                  autoPlay={false}
                  interval={3000}
                />
              ) : tool.name === 'Dating Profile Generation' ? (
                <img
                  src="/images/home/tools/Daiting.png"
                  alt="Dating Profile Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className={`absolute inset-0 w-full h-full ${tool.mockup} flex items-center justify-center`}>
                  <div className="absolute inset-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <div className="text-gray-600 text-sm font-medium">Preview Coming Soon</div>
                  </div>
                </div>
              )}
            </ToolCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/products/zencreator/content-creation" 
            className="text-white/80 hover:text-white font-medium text-lg transition-colors"
          >
            View All Tools →
          </Link>
        </div>
      </div>
    </section>
  );
};
