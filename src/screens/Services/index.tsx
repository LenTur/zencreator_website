import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Users, Heart, Camera, Zap, Shield, Target, TrendingUp, CheckCircle } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "AI Influencers",
      description: "Launch ultra-realistic virtual talent, then drive measurable results across the entire funnel.",
      href: "/services/ai-influencers",
      features: [
        "Bespoke persona development",
        "24/7 content engine",
        "Data-driven growth optimization",
        "Brand-safe & exclusive"
      ]
    },
    {
      icon: <Heart className="w-12 h-12 text-pink-600" />,
      title: "Dating Profile Generation",
      description: "Fill new dating or social platforms with realistic, compliant and exclusive user profiles.",
      href: "/services/dating-profiles-generation",
      features: [
        "3-50 consistent images per profile",
        "Fully customizable demographics",
        "20K+ photos/month capacity",
        "Manual QA on every asset"
      ]
    },
    {
      icon: <Camera className="w-12 h-12 text-blue-600" />,
      title: "Photo Shoot Generation",
      description: "Studio-quality shoots from just two reference images — delivered in hours, not days.",
      href: "/services/photo-shoots-generation",
      features: [
        "10,000+ themed prompts",
        "Ultra-realistic 4K output",
        "Any ratio or format",
        "Human moderation included"
      ]
    }
  ];

  const advantages = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Speed",
      description: "AI workflows slash production cost and lead time by 80%+",
      stat: "Hours not days"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Brand Safety",
      description: "Human QA + policy filters ensure every asset meets compliance",
      stat: "100% compliant"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Consistency",
      description: "One source of truth for visuals across regions, languages & seasons",
      stat: "Global scale"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Performance",
      description: "Real-time analytics and ROAS dashboards baked into every engagement",
      stat: "Data-driven"
    }
  ];

  return (
    <PageLayout
      title="ZenCreator Services"
      description="Explore ZenCreator's full suite of AI-driven services — from virtual influencers and performance campaigns to scalable dating-profile and photo shoot generation. One partner, limitless creative scale."
    >
      <div className="container mx-auto px-4 pb-20" style={{ paddingTop: '140px' }}>
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section */}
          <section className="pt-24 pb-[40px] text-center">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Our Services
            </h1>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">
              AI solutions that create, scale and optimize<br />
              <span style={{background: 'linear-gradient(141deg, #D8B4FE -1.09%, #5A17CE 108.36%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>visual content and influence</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              So you meet growth targets faster with one partner, limitless creative scale.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="mailto:info@zencreator.pro?subject=Consultation" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                Book a Consultation
              </a>
              <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 hover:border-purple-400 hover:text-purple-900 transition-all duration-200">
                Try Our Tools
              </a>
            </div>
          </section>

        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-purple-100 text-purple-700 text-sm font-bold mb-4 px-4 py-1.5 rounded-full">
                our services
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Complete AI Content Solutions
              </h2>
              <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
                From virtual influencers to photo shoots, we handle every aspect of AI-powered content creation.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: 'AI Influencers',
                  description: 'Launch ultra-realistic virtual talent, then drive measurable results across the entire funnel.',
                  features: [
                    'Bespoke persona development',
                    '24/7 content engine', 
                    'Data-driven growth optimization',
                    'Brand-safe & exclusive'
                  ],
                  link: '/services/ai-influencers',
                  reverse: false
                },
                {
                  title: 'Dating Profile Generation',
                  description: 'Fill new dating or social platforms with realistic, compliant and exclusive user profiles.',
                  features: [
                    '3-50 consistent images per profile',
                    'Fully customizable demographics',
                    '20K+ photos/month capacity',
                    'Manual QA on every asset'
                  ],
                  link: '/services/dating-profiles-generation',
                  reverse: true
                },
                {
                  title: 'AI Photo Shoot Generator',
                  description: 'Studio-quality shoots from just two reference images — delivered in hours, not days.',
                  features: [
                    '10,000+ themed prompts',
                    'Ultra-realistic 4K output',
                    'Any ratio or format',
                    'Human moderation included'
                  ],
                  link: '/services/photo-shoots-generation',
                  reverse: false
                }
              ].map((service, index) => (
                <div key={index} className="p-12 md:p-16">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${service.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={service.reverse ? 'lg:col-start-2' : ''}>
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">{service.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                      
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link 
                        to={service.link} 
                        className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 transition-colors duration-200 inline-flex items-center gap-2"
                      >
                        Learn More
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </Link>
                    </div>
                    
                    {/* Visual */}
                    <div className={service.reverse ? 'lg:col-start-1' : ''}>
                      {service.title === 'Dating Profile Generation' ? (
                        <div className="rounded-3xl overflow-hidden min-h-80">
                          <img
                            src="/images/home/Swipe right.png"
                            alt="Dating Profile Generation Preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : service.title === 'AI Photo Shoot Generator' ? (
                        <div className="rounded-3xl overflow-hidden min-h-80">
                          <img
                            src="/images/home/Photo Shoot.png"
                            alt="AI Photo Shoot Generator Preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : service.title === 'AI Influencers' ? (
                        <div className="rounded-3xl overflow-hidden min-h-64">
                          <video
                            src="/images/home/Influ.mp4?v=1"
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            controls={false}
                          />
                        </div>
                      ) : (
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
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ZenCreator */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-purple-100 text-purple-700 text-sm font-bold mb-4 px-4 py-1.5 rounded-full">
                advantages
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Why Brands Choose ZenCreator
              </h2>
              <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
                Proven results, enterprise scale, and unmatched creative control.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={advantage.title} className="flex flex-col p-8 bg-[#0F172A] text-white rounded-3xl hover:scale-105 transition-transform duration-300">
                  <div className="mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{advantage.title}</h3>
                  <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                    {advantage.description}
                  </p>
                  <div className="text-purple-400 font-bold text-lg">
                    {advantage.stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0F172A] text-white rounded-3xl p-12 text-center border border-white/10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Accelerate Your Content & Influence?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Tell us your growth goal — we'll map the AI service stack that gets you there fastest.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <a href="mailto:info@zencreator.pro?subject=Consultation" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Book a 15-Minute Consultation
                </a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-200">
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};


