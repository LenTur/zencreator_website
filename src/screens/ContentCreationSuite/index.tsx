import { PageLayout } from '@/components/layout/PageLayout';
import { Layers, ArrowRight, Share2, Zap, CreditCard, Shield } from 'lucide-react';
import { BeforeAfter } from '@/components/ui/BeforeAfter';
import { ToolCard } from '@/components/ui/ToolCard';
import { ResponsiveImage } from '@/components/ui/ResponsiveImage';
import { PhotoshootCarousel } from '@/components/ui/PhotoshootCarousel';
import { CarouselPreview } from '@/components/ui/CarouselPreview';

export const ContentCreationSuite = () => {
  return (
    <PageLayout
      title="Content Creation — Your All-in-One AI Studio"
      description="Generate, refine, and repurpose visual content at scale—without leaving a single dashboard."
    >
      {/* Hero Section */}
      <div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
            <section className="pt-24 pb-[40px] text-center text-white w-full px-6">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Content Creation<br />
                <span style={{background: 'linear-gradient(135deg, #7BA1F8, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}} className="text-2xl md:text-4xl">Your All-in-One AI Studio</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Generate, refine, and repurpose visual content at scale—without leaving a single dashboard.
              </p>
              <div className="flex justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Try Creation Suite
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <section className="py-[100px] bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  name: 'Face Generation', 
                  description: 'Four realistic faces per click—dial in gender, age, ethnicity, more.',
                  link: '/products/zencreator/content-creation/ai-face-generation',
                  tryLink: 'https://app.zencreator.pro/tools',
                  mockup: 'bg-gradient-to-br from-red-100 to-blue-100'
                },
                { 
                  name: 'Face Swapping', 
                  description: 'Ultra-seamless swaps for images & video, bulk-ready.',
                  link: '/products/zencreator/content-creation/ai-face-swapping',
                  tryLink: 'https://app.zencreator.pro/tools',
                  mockup: 'bg-gradient-to-br from-blue-100 to-gray-100'
                },
                { 
                  name: 'Upscaling', 
                  description: 'Four specialised models (Basic, Face-Safe, Textured, Full Restored) up to 4K+.',
                  link: '/products/zencreator/content-creation/ai-upscaling',
                  tryLink: 'https://app.zencreator.pro/tools',
                  mockup: 'bg-gradient-to-br from-green-100 to-teal-100',
                  showBeforeAfter: true
                },
                { 
                  name: 'Generation by Prompt', 
                  description: 'Flux or SDXL images from keyword prompts, LoRa physique tuning, uncensored option.',
                  link: '/products/zencreator/content-creation/ai-generation-prompt',
                  tryLink: 'https://app.zencreator.pro/tools',
                  mockup: 'bg-gradient-to-br from-purple-100 to-indigo-100'
                },
                { 
                  name: 'Generation by Reference', 
                  description: 'Re-imagine any photo into new scenes while preserving identity.',
                  link: '/products/zencreator/content-creation/ai-generation-reference',
                  tryLink: 'https://app.zencreator.pro/tools',
                  mockup: 'bg-gradient-to-br from-yellow-100 to-orange-100'
                },
                { 
                  name: 'Photo Shoot Generation', 
                  description: 'Full themed sets from one face + body reference.',
                  link: '/products/zencreator/content-creation/photo-shoot',
                  tryLink: 'https://app.zencreator.pro/tools',
                  mockup: 'bg-gradient-to-br from-pink-100 to-red-100'
                },
                { 
                  name: 'Dating Profile Generation', 
                  description: 'Complete bios + photo/video packs, JSON export.',
                  link: '/products/zencreator/content-creation/dating-profiles',
                  tryLink: 'https://app.zencreator.pro/tools',
                  mockup: 'bg-gradient-to-br from-rose-100 to-pink-100'
                },
                { 
                  name: 'Video Generation', 
                  description: '5–10 s clips via Kling 1.6, Kling 2.0, or WAN (uncensored).',
                  link: '/products/zencreator/content-creation/video-generation',
                  tryLink: 'https://app.zencreator.pro/tools',
                  mockup: 'bg-gradient-to-br from-indigo-100 to-purple-100'
                },
                { 
                  name: 'Carousel Generation', 
                  description: 'Multi-angle image sets for social carousels & catalogs.',
                  link: '/products/zencreator/content-creation/carousel-generation',
                  tryLink: 'https://app.zencreator.pro/tools',
                  mockup: 'bg-gradient-to-br from-teal-100 to-blue-100',
                  showCarousel: true
                }
              ].map((tool) => (
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
                        <span className="text-gray-600 font-medium">Preview Coming Soon</span>
                      </div>
                    </div>
                  )}
                </ToolCard>
              ))}
          </div>
          <p className="text-center mt-8" style={{background: 'linear-gradient(135deg, #7BA1F8, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: '16px', fontWeight: '500'}}>
            New tools land every month—your dashboard updates automatically.
          </p>
        </div>
      </section>

      {/* Shared Power Features */}
      <section className="py-[100px] bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">Shared Power Features</h2>

            {/* Advanced card layout like Workflow Templates */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { 
                  name: 'Batch Mode Everywhere', 
                  description: 'Spin up 1 or 1 000 assets; Creator OS fans out GPU jobs and shows live progress.',
                  icon: Layers
                },
                { 
                  name: 'One-Click Pipelines', 
                  description: 'Any output can jump straight into Upscale → Face Swap → Video → Publishing—no downloads, no re-uploads.',
                  icon: ArrowRight
                },
                { 
                  name: 'Instant Publishing', 
                  description: 'Post directly to Instagram, TikTok, YouTube Shorts, Threads, X, or Facebook without leaving the suite.',
                  icon: Share2
                },
                { 
                  name: 'Parallel Processing', 
                  description: 'Serverless GPU clusters handle tasks concurrently — minutes, not hours.',
                  icon: Zap
                },
                { 
                  name: 'Unified Credit Billing', 
                  description: 'One pay-as-you-go balance for every module; no surprise line items.',
                  icon: CreditCard
                },
                { 
                  name: 'Secure & Compliant', 
                  description: 'Zero-retention by default, encrypted storage, SOC-2 hosting, optional VPC peering.',
                  icon: Shield
                },
              ].map((feature, index) => (
                <div key={index} className="relative group">
                  {/* Hover gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>

                  {/* Main card */}
                  <div className="relative flex items-start gap-6 p-8 bg-white/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50">
                    {/* Icon block */}
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 group-hover:from-purple-200 group-hover:to-indigo-200 transition-all duration-500 flex-shrink-0 group-hover:rotate-3 group-hover:scale-110">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 group-hover:translate-x-1">
                        {feature.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>

                    {/* Decorative dot */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Started in Three Steps */}
      <section className="py-[100px] bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">Get Started in Three Steps</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {/* Left column: Steps 01 and 02 stacked vertically */}
              <div className="flex flex-col gap-6">
                <div className="rounded-3xl p-8 border border-white/10 bg-gradient-to-br from-[#0B1220] to-[#020817] hover:shadow-xl transition-all duration-300 flex flex-col h-full text-white">
                  <div className="text-3xl font-black text-purple-400 mb-6">01</div>
                  <h3 className="text-xl font-bold text-white mb-2">Pick a Module</h3>
                  <p className="text-white/80">Face Gen, Photo Shoot, Video…</p>
                </div>

                <div className="rounded-3xl p-8 border border-white/10 bg-gradient-to-br from-[#0B1220] to-[#020817] hover:shadow-xl transition-all duration-300 flex flex-col h-full text-white">
                  <div className="text-3xl font-black text-purple-400 mb-6">02</div>
                  <h3 className="text-xl font-bold text-white mb-2">Generate & Refine</h3>
                  <p className="text-white/80">Batch, review, approve.</p>
                </div>
              </div>

              {/* Right column: Step 03 wide card */}
              <div className="rounded-3xl p-8 lg:col-span-2 text-white relative overflow-hidden bg-gradient-to-br from-[#5400A7] to-[#020817] flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-black mb-6">03</div>
                  <h3 className="text-2xl md:text-3xl font-black leading-snug mb-3">Publish or Pipeline</h3>
                  <p className="text-white/90 mb-8 max-w-2xl">One click to social channels, or send downstream for further magic.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">Try Creation Suite</a>
                  <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">Book a 15-Minute Demo</a>
                </div>

                {/* Decorative corner blob */}
                <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Teams Love the Suite (Metrics + Cards) */}
      <section className="py-[100px] bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">Why Teams Love the Suite</h2>

            {/* Metrics strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                ['10K+', 'assets/day'],
                ['99.9%', 'uptime'],
                ['4.9/5', 'satisfaction'],
                ['50K+', 'workflows'],
              ].map(([num, label]) => (
                <div key={num as string} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                  <div className="text-2xl md:text-3xl font-black text-gray-900">{num as string}</div>
                  <div className="text-gray-600 text-sm">{label as string}</div>
                </div>
              ))}
            </div>

            {/* Benefit cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                ['Speed to Market', 'Prototype, iterate, and launch creative in a single afternoon.'],
                ['Consistent Quality', 'Identity locking keeps faces, tones, and styles aligned across every asset.'],
                ['Lower Cost', 'Replace multiple subscriptions, studio fees, and manual labour with an integrated workflow.'],
                ['Scales With You', 'From a solo marketer to enterprise volumes—same UI, bigger backend.'],
              ].map(([title, desc]) => (
                <div key={title as string} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{title as string}</h3>
                  <p className="text-gray-700 leading-relaxed">{desc as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Full Width (like Home) */}
      <section className="relative overflow-hidden">
        <div className="bg-ink-900 text-white text-center py-32 relative">
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Have questions?
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Have questions or need a custom workflow?</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              We’ll help design the perfect content pipeline for your team — from idea to publishing.
            </p>
            <a
              href="mailto:info@zencreator.pro?subject=ZenCreator%20question"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Contact us
            </a>
          </div>
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


