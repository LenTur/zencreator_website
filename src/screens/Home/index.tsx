import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Users, Image, RotateCcw, Wand2, Palette, Play, LayoutGrid, Camera, Heart, ShoppingBag, Gamepad2, GraduationCap, Building2, Monitor, Briefcase, Film } from 'lucide-react';

export const Home: React.FC = () => {

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

      {/* Scrolling Gallery - Full Width */}
      <section className="py-0 overflow-hidden w-full">
        <div className="relative">
          <div className="flex animate-scroll space-x-8">
                {/* First set of items */}
                <div className="flex space-x-8 flex-shrink-0">
                  <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img src="/Colorfull1.png" alt="Gallery 1" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img src="/Colorfull2.png" alt="Gallery 2" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img src="/colorfull3.png" alt="Gallery 3" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img src="/DatingProfiles.png" alt="Gallery 4" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img src="/Speed.png" alt="Gallery 5" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img src="/Consistency.png" alt="Gallery 6" className="w-full h-full object-cover rounded-xl" />
                  </div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex space-x-8 flex-shrink-0">
                  <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img src="/Colorfull1.png" alt="Gallery 1" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img src="/Colorfull2.png" alt="Gallery 2" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img src="/colorfull3.png" alt="Gallery 3" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img src="/DatingProfiles.png" alt="Gallery 4" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img src="/Speed.png" alt="Gallery 5" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img src="/Consistency.png" alt="Gallery 6" className="w-full h-full object-cover rounded-xl" />
                  </div>
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
              {[
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
                  mockup: 'bg-gradient-to-br from-green-100 to-teal-100'
                },
                { 
                  name: 'Generation by Prompt', 
                  description: 'Create images from text descriptions.',
                  link: '/products/zencreator/content-creation/ai-generation-prompt',
                  tryLink: 'https://app.zencreator.pro/tools',
                  mockup: 'bg-gradient-to-br from-purple-100 to-pink-100'
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
                  mockup: 'bg-gradient-to-br from-teal-100 to-blue-100'
                }
              ].map((tool, index) => (
                <div key={index} className="bg-white rounded-3xl p-0 border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden flex flex-col h-full">
                  {/* Visual area at top with gradient mockup */}
                  <div className={`w-full h-64 ${tool.mockup} flex items-center justify-center relative`}>
                    <div className="absolute inset-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <span className="text-gray-600 font-medium">Preview Coming Soon</span>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{tool.description}</p>
                    <div className="flex justify-between items-center gap-3 mt-auto">
                      <a 
                        href={tool.tryLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
                      >
                        Try it now
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </a>
                      <Link 
                        to={tool.link} 
                        className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-xl font-semibold hover:border-purple-600 hover:text-purple-600 transition-all duration-200 flex items-center gap-2"
                      >
                        Learn More
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
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
                  title: 'AI Photo-Shoot Generator',
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
                  description: 'Generate product photos, lifestyle images, and marketing visuals without expensive photoshoots.' 
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


