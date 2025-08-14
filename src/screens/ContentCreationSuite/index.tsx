import { PageLayout } from '@/components/layout/PageLayout';
import { Layers, ArrowRight, Share2, Zap, CreditCard, Shield } from 'lucide-react';
import { WhyTeamsLove } from '@/components/sections/WhyTeamsLove';

export const ContentCreationSuite = () => {
  return (
    <PageLayout
      title="Content Creation — Your All-in-One AI Studio"
      description="Generate, refine, and repurpose visual content at scale—without leaving a single dashboard."
    >
      {/* Hero Section */}
      <div className="bg-gray-900 pb-20" style={{ paddingTop: '140px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <section className="pt-24 pb-[40px] text-center">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
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
      <section className="pt-0 pb-[150px] bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    name: 'Face Generation', 
                    description: 'Four realistic faces per click—dial in gender, age, ethnicity, more.',
                    link: '/products/zencreator/content-creation/ai-face-generation',
                    tryLink: 'https://app.zencreator.pro/',
                    mockup: 'bg-gradient-to-br from-red-100 to-blue-100'
                  },
                  { 
                    name: 'Face Swapping', 
                    description: 'Ultra-seamless swaps for images & video, bulk-ready.',
                    link: '/products/zencreator/content-creation/ai-face-swapping',
                    tryLink: 'https://app.zencreator.pro/',
                    mockup: 'bg-gradient-to-br from-blue-100 to-gray-100'
                  },
                  { 
                    name: 'Upscaling', 
                    description: 'Four specialised models (Basic, Face-Safe, Textured, Full Restored) up to 4K+.',
                    link: '/products/zencreator/content-creation/ai-upscaling',
                    tryLink: 'https://app.zencreator.pro/',
                    mockup: 'bg-gradient-to-br from-green-100 to-teal-100'
                  },
                  { 
                    name: 'Prompt Generation', 
                    description: 'Flux or SDXL images from keyword prompts, LoRa physique tuning, uncensored option.',
                    link: '/products/zencreator/content-creation/ai-generation-prompt',
                    tryLink: 'https://app.zencreator.pro/',
                    mockup: 'bg-gradient-to-br from-purple-100 to-pink-100'
                  },
                  { 
                    name: 'Reference Generation', 
                    description: 'Re-imagine any photo into new scenes while preserving identity.',
                    link: '/products/zencreator/content-creation/ai-generation-reference',
                    tryLink: 'https://app.zencreator.pro/',
                    mockup: 'bg-gradient-to-br from-yellow-100 to-orange-100'
                  },
                  { 
                    name: 'Photo-Shoot Generator', 
                    description: 'Full themed sets from one face + body reference.',
                    link: '/products/zencreator/content-creation/photo-shoot',
                    tryLink: 'https://app.zencreator.pro/',
                    mockup: 'bg-gradient-to-br from-pink-100 to-red-100'
                  },
                  { 
                    name: 'Dating-Profile Generator', 
                    description: 'Complete bios + photo/video packs, JSON export.',
                    link: '/products/zencreator/content-creation/dating-profiles',
                    tryLink: 'https://app.zencreator.pro/',
                    mockup: 'bg-gradient-to-br from-rose-100 to-pink-100'
                  },
                  { 
                    name: 'Video Generation', 
                    description: '5–10 s clips via Kling 1.6, Kling 2.0, or WAN (uncensored).',
                    link: '/products/zencreator/content-creation/video-generation',
                    tryLink: 'https://app.zencreator.pro/',
                    mockup: 'bg-gradient-to-br from-indigo-100 to-purple-100'
                  },
                  { 
                    name: 'Carousel Generator', 
                    description: 'Multi-angle image sets for social carousels & catalogs.',
                    link: '/products/zencreator/content-creation/carousel-generation',
                    tryLink: 'https://app.zencreator.pro/',
                    mockup: 'bg-gradient-to-br from-teal-100 to-blue-100'
                  }
                ].map((tool, index) => (
                  <div key={index} className="bg-white rounded-3xl border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden flex flex-col h-full relative">
                    {/* Visual area covering full card height */}
                    <div className={`absolute inset-0 ${tool.mockup} flex items-center justify-center`}>
                      <div className="absolute inset-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <span className="text-gray-600 font-medium">Preview Coming Soon</span>
                      </div>
                    </div>

                    {/* Content area overlay at bottom */}
                    <div className="relative z-10 mt-auto p-6 bg-white/95 backdrop-blur-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{tool.description}</p>
                      <div className="flex justify-between items-center gap-4">
                        <a 
                          href={tool.tryLink} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200 flex items-center gap-1"
                        >
                          Try it now
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </a>
                        <a 
                          href={tool.link} 
                          className="text-gray-600 font-medium hover:text-gray-800 transition-colors duration-200 flex items-center gap-1"
                        >
                          Learn More
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          <p className="text-center mt-14" style={{background: 'linear-gradient(135deg, #7BA1F8, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: '16px', fontWeight: '500'}}>
            New tools land every month—your dashboard updates automatically.
          </p>
        </div>
      </section>

      {/* Shared Power Features */}
      <section className="py-[150px] bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Shared Power Features</h2>

            {/* Advanced card layout like Workflow Templates */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
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
      <section className="py-[150px] bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Get Started in Three Steps</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {/* Left column: Steps 01 and 02 stacked vertically */}
              <div className="flex flex-col gap-6">
                <div className="rounded-3xl p-8 border border-white/10 bg-gradient-to-br from-[#0B1220] to-[#020817] hover:shadow-xl transition-all duration-300 flex flex-col h-full text-white">
                  <div className="text-3xl font-black text-purple-400 mb-6">01</div>
                  <h3 className="text-xl font-bold text-white mb-2">Pick a Module</h3>
                  <p className="text-white/80">Face Gen, Photo-Shoot, Video…</p>
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

      {/* Why Teams Love the Suite */}
      <WhyTeamsLove
        items={[
          {
            title: 'Speed to Market',
            description: 'Prototype, iterate, and launch creative in a single afternoon.',
          },
          {
            title: 'Consistent Quality',
            description: 'Identity locking keeps faces, tones, and styles aligned across every asset.',
          },
          {
            title: 'Lower Cost',
            description: 'Replace multiple subscriptions, studio fees, and manual labour with an integrated workflow.',
          },
          {
            title: 'Scales With You',
            description: 'From a solo marketer to enterprise volumes—same UI, bigger backend.',
          },
        ]}
      />

      {/* Final CTA - Full Width (like Home) */}
      <section className="relative overflow-hidden">
        <div className="bg-ink-900 text-white text-center py-24 relative">
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Have questions?
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Have questions or need a custom workflow?</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              <span className="font-semibold">Contact us</span> at <a href="mailto:info@zencreator.pro" className="text-white underline decoration-white/40 hover:decoration-white">info@zencreator.pro</a> — we’ll design the perfect content pipeline for your team.
            </p>
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


