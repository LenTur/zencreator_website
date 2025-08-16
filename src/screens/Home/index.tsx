import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Link } from 'react-router-dom';
import { Users, Heart, ShoppingBag, Gamepad2, GraduationCap, Building2, Monitor, Film } from 'lucide-react';
import { BeforeAfter } from '@/components/ui/BeforeAfter';
import { ToolCard } from '@/components/ui/ToolCard';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';
import { PhotoshootCarousel } from '@/components/ui/PhotoshootCarousel';

export const Home: React.FC = () => {







  // Используем новые изображения карусели для главной галереи
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

  const products = {
    zencreator: {
      badge: 'AI Studio',
      title: 'ZenCreator',
      description: 'Generate, publish, manage and analyse social content at scale.',
      link: '/products/zencreator',
      badgeColor: 'bg-purple-100 text-purple-700',
      hoverColor: 'hover:border-purple-200'
    },
    zencomfy: {
      badge: 'ComfyUI Cloud',
      title: 'ZenComfy', 
      description: 'Turn ComfyUI graphs into web apps on serverless GPUs.',
      link: '/products/zencomfy',
      badgeColor: 'bg-blue-100 text-blue-700',
      hoverColor: 'hover:border-blue-200'
    }
  };

  const tools = [
    { 
      name: 'Face Generation', 
      description: 'Generate realistic faces with AI technology.',
      link: '/products/zencreator/content-creation/ai-face-generation',
      tryLink: 'https://app.zencreator.pro/tools',
      mockup: 'bg-gradient-to-br from-red-100 to-blue-100'
    },
    { 
      name: 'Face Swapping', 
      description: 'Swap faces in images with perfect AI precision.',
      link: '/products/zencreator/content-creation/ai-face-swapping',
      tryLink: 'https://app.zencreator.pro/tools',
      mockup: 'bg-gradient-to-br from-blue-100 to-gray-100'
    },
    { 
      name: 'Upscaling', 
      description: 'Enhance image quality and resolution with AI.',
      link: '/products/zencreator/content-creation/ai-upscaling',
      tryLink: 'https://app.zencreator.pro/tools',
      mockup: 'bg-gradient-to-br from-green-100 to-teal-100',
      showBeforeAfter: true
    },
    { 
      name: 'Generation by Prompt', 
      description: 'Create images from text descriptions.',
      link: '/products/zencreator/content-creation/ai-generation-prompt',
      tryLink: 'https://app.zencreator.pro/tools',
      mockup: 'bg-gradient-to-br from-purple-100 to-indigo-100'
    },
    { 
      name: 'Generation by Reference', 
      description: 'Generate images based on reference photos.',
      link: '/products/zencreator/content-creation/ai-generation-reference',
      tryLink: 'https://app.zencreator.pro/tools',
      mockup: 'bg-gradient-to-br from-yellow-100 to-orange-100'
    },
    { 
      name: 'Photo Shoot Generation', 
      description: 'Create professional photo shoots with AI.',
      link: '/services/photo-shoots-generation',
      tryLink: 'https://app.zencreator.pro/tools',
      mockup: 'bg-gradient-to-br from-pink-100 to-red-100'
    },
    { 
      name: 'Dating Profile Generation', 
      description: 'Generate attractive dating profiles automatically.',
      link: '/services/dating-profiles-generation',
      tryLink: 'https://app.zencreator.pro/tools',
      mockup: 'bg-gradient-to-br from-rose-100 to-pink-100'
    },
    { 
      name: 'Video Generation', 
      description: 'Create stunning videos from text and images.',
      link: '/products/zencreator/content-creation/video-generation',
      tryLink: 'https://app.zencreator.pro/tools',
      mockup: 'bg-gradient-to-br from-indigo-100 to-purple-100'
    },
    { 
      name: 'Carousel Generation', 
      description: 'Generate engaging carousel posts for social media.',
      link: '/products/zencreator/content-creation/carousel-generation',
      tryLink: 'https://app.zencreator.pro/tools',
      mockup: 'bg-gradient-to-br from-teal-100 to-blue-100',
      showCarousel: true
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 pb-20" style={{ paddingTop: '140px' }}>
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section className="pt-24 pb-[40px] text-center">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">Create. Publish. Grow.</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              AI products and services for content creation and publishing — choose what you need and grow without limits.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                Sign Up and Try
              </a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 hover:border-purple-400 hover:text-purple-900 transition-all duration-200">
                Book a Demo
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Scrolling Gallery - Full Width (populated from /public/Photo ZenCreator WS) */}
      <section className="py-0 overflow-hidden w-full">
        <div className="relative">
          <div className="flex animate-scroll space-x-6 md:space-x-8 lg:space-x-10">
            {/* First loop */}
            <div className="flex space-x-6 md:space-x-8 lg:space-x-10 flex-shrink-0">
              {galleryImages.map((src, idx) => (
                <div key={`g1-${idx}`} className="w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 bg-gray-100 rounded-xl overflow-hidden">
                  <ResponsiveImage 
                    src={src} 
                    alt={`Gallery ${idx + 1}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate loop for seamless scroll */}
            <div className="flex space-x-6 md:space-x-8 lg:space-x-10 flex-shrink-0">
              {galleryImages.map((src, idx) => (
                <div key={`g2-${idx}`} className="w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 bg-gray-100 rounded-xl overflow-hidden">
                  <ResponsiveImage 
                    src={src} 
                    alt={`Gallery duplicate ${idx + 1}`} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Products */}
          <section className="py-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-center">Products</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
              Explore AI tools and cloud workflows that help teams create, deploy and scale visual content without friction.
            </p>
            {/* Product Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(products).map(([key, product]) => (
                <div 
                  key={key}
                  className="rounded-3xl p-8 bg-ink-900"
                >
                  {/* Header Content */}
                  <div className="mb-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-3">{product.title}</h3>
                        <p className="text-white/90 text-lg leading-relaxed max-w-sm">
                          {key === 'zencreator' ? (
                            <>Generate, publish, manage and analyse<br />social content at scale.</>
                          ) : (
                            <>Turn ComfyUI graphs into web apps<br />on serverless GPUs.</>
                          )}
                        </p>
                      </div>
                      <Link 
                        to={product.link} 
                        className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center flex-shrink-0"
                      >
                        Open →
                      </Link>
                    </div>
                  </div>

                  {/* Visual Area */}
                  <div className="w-full h-80 bg-white rounded-2xl flex items-center justify-center">
                    <span className="text-gray-400 text-lg">Visual for {product.title}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <Link to="/products" className="text-gray-700 hover:text-purple-700 font-medium">Explore all products →</Link>
            </div>
          </section>
        </div>
      </div>

      {/* Tools - Full Width */}
      <section className="py-[150px] bg-ink-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">Tools</h2>
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
                        src="/images/home/tools/video.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  ) : tool.name === 'Carousel Generation' ? (
                    <div className={`absolute inset-0 w-full h-full ${tool.mockup} flex items-center justify-center`}>
                      <div className="absolute inset-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <span className="text-gray-600 font-medium">Carousel Preview</span>
                      </div>
                    </div>
                  ) : (
                    <div className={`absolute inset-0 w-full h-full ${tool.mockup} flex items-center justify-center`}>
                      <div className="absolute inset-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <span className="text-gray-600 font-medium">Preview Coming Soon</span>
                      </div>
                    </div>
                  )}
                </ToolCard>
              ))}
          </div>
            <div className="text-center mt-12">
              <Link to="/products/zencreator" className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200">
                View All Tools
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="mx-auto">
          {/* Services */}
          <section className="py-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Services</h2>
            <div className="space-y-12">
              {[
                {
                  title: 'AI Influencers',
                  description: 'End-to-end creation and management of virtual creators who post, engage, and convert 24/7.',
                  link: '/services/ai-influencers',
                  reverse: false
                },
                {
                  title: 'Dating Profile Generation',
                  description: 'Thousands of realistic, exclusive profiles for new platforms.',
                  link: '/services/dating-profiles',
                  reverse: true
                },
                {
                  title: 'AI Photo Shoot Generator',
                  description: 'Studio-quality images from two reference photos.',
                  link: '/services/photo-shoot',
                  reverse: false
                }
              ].map((service, index) => (
                <div key={index} className="p-12 md:p-16">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${service.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={service.reverse ? 'lg:col-start-2' : ''}>
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">{service.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
                      <Link 
                        to={service.link} 
                        className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 transition-colors duration-200"
                      >
                        Learn More →
                      </Link>
                    </div>
                    
                    {/* Visual */}
                    <div className={service.reverse ? 'lg:col-start-1' : ''}>
                      <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl p-8 min-h-80 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 w-full max-w-sm">
                          <div className="text-center">
                            <div className="bg-white rounded-lg p-4 mb-4">
                              <div className="text-gray-900 font-semibold">{service.title}</div>
                              <div className="text-sm text-gray-600">Preview Coming Soon</div>
                            </div>
                            <div className="text-white font-medium">Service Preview</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries (moved after Services) */}
          <section className="py-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">For Creators Across All Fields</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  name: 'UGC & Influencers', 
                  icon: Users, 
                  description: 'Scale content creation with AI-generated posts, faces, and engaging visual content for social media.' 
                },
                { 
                  name: 'E‑commerce', 
                  icon: ShoppingBag, 
                  description: 'Generate product photos, lifestyle images, and marketing visuals without expensive photo shoots.' 
                },
                { 
                  name: 'Gaming', 
                  icon: Gamepad2, 
                  description: 'Create character art, game assets, promotional materials and community content at scale.' 
                },
                { 
                  name: 'Dating', 
                  icon: Heart, 
                  description: 'Generate realistic, diverse dating profiles with authentic photos for dating platforms.' 
                },
                { 
                  name: 'Agencies', 
                  icon: Building2, 
                  description: 'Deliver client campaigns faster with AI-powered content generation and creative workflows.' 
                },
                { 
                  name: 'SaaS', 
                  icon: Monitor, 
                  description: 'Create marketing assets, product demos, and user-generated content for your software.' 
                },
                { 
                  name: 'Education', 
                  icon: GraduationCap, 
                  description: 'Generate educational content, illustrations, and visual materials for courses and training.' 
                },
                { 
                  name: 'Entertainment', 
                  icon: Film, 
                  description: 'Produce promotional content, character designs, and visual effects for media projects.' 
                },
              ].map((item) => (
                <div key={item.name} className="bg-ink-900 rounded-3xl p-6 border border-white/10 hover:shadow-xl hover:border-white/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white/70" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* CTA - Full Width */}
      <section className="relative overflow-hidden">
        <div className="bg-ink-900 text-white text-center py-24 relative">
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Level up your content game
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to start?</h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Pick a product — you can always add the other later. Same SSO, shared billing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-600 hover:text-white transition-colors duration-200">
                Get ZenCreator
              </a>
              <Link to="/products/zencomfy" className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors duration-200">
                Get ZenComfy
              </Link>
            </div>
          </div>
          
          {/* Gradient bars at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32">
            <div className="absolute bottom-0 left-0 w-1/4 h-6 bg-gradient-to-r from-red-500 to-orange-500"></div>
            <div className="absolute bottom-0 left-1/4 w-1/4 h-12 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <div className="absolute bottom-0 left-2/4 w-1/4 h-8 bg-gradient-to-r from-green-500 to-teal-500"></div>
            <div className="absolute bottom-0 left-3/4 w-1/4 h-16 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};


