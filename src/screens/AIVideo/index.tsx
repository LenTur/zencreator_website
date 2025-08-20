import React from 'react';
import { Play, Settings, Film, CheckCircle, Zap, Camera } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { MoreMagicTools } from '@/components/sections/MoreMagicTools';

export const AIVideo: React.FC = () => {
  return (
    <PageLayout
      title="AI Video Generation — Create Stunning Videos"
      description="Generate professional videos from text and images with AI technology."
    >
      {/* Hero Section */}
      <section className="w-full py-[180px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 text-center border border-white/10">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                AI Video Generation
              </h1>
              <p className="text-xl md:text-2xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                Create Stunning Videos
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Generate professional videos from text descriptions and images. Perfect for social media, marketing, and creative projects.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Try AI Video Generator</a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Book a demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* How It Works */}
          <section className="py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">How It Works</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Create professional videos in three simple steps
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  icon: Camera,
                  title: "Input Content",
                  description: "Upload images or write text descriptions for your video content."
                },
                {
                  step: "2", 
                  icon: Settings,
                  title: "Choose Style & Length",
                  description: "Select video style, duration, and motion settings for your creation."
                },
                {
                  step: "3",
                  icon: Film,
                  title: "Generate & Download",
                  description: "Get your AI-generated video ready for social media or professional use."
                }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 mb-6 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                    <item.icon className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="py-16 md:py-24 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">Key Features</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Advanced AI video generation technology
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Film,
                  title: "Multiple Video Engines",
                  features: [
                    "Kling 1.6 for stylized content",
                    "Kling 2.0 for photorealistic videos", 
                    "WAN for experimental content",
                    "Custom fine-tuned models"
                  ]
                },
                {
                  icon: Play,
                  title: "Flexible Duration",
                  features: [
                    "10-20 second clips",
                    "Extended formats coming soon",
                    "Loop-optimized videos",
                    "Custom timing control"
                  ]
                },
                {
                  icon: Settings,
                  title: "Advanced Controls",
                  features: [
                    "Motion intensity settings",
                    "Style transfer options",
                    "Resolution up to 720p",
                    "Aspect ratio control"
                  ]
                },
                {
                  icon: Zap,
                  title: "Batch Processing",
                  features: [
                    "Generate 1000+ clips",
                    "Automatic GPU scaling",
                    "Queue management",
                    "Pay-per-use pricing"
                  ]
                },
                {
                  icon: Camera,
                  title: "Input Flexibility",
                  features: [
                    "Text-to-video generation",
                    "Image-to-video animation",
                    "Multiple format support",
                    "Batch upload capability"
                  ]
                },
                {
                  icon: CheckCircle,
                  title: "Professional Output",
                  features: [
                    "High-quality rendering",
                    "Multiple export formats",
                    "No watermarks",
                    "Commercial usage rights"
                  ]
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Perfect For Teams */}
          <section className="py-16 md:py-24 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">Perfect For Teams That Need to…</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: Play,
                  title: "Create Social Media Content",
                  description: "Generate engaging videos for Instagram, TikTok, and other platforms without expensive video production."
                },
                {
                  icon: Film,
                  title: "Prototype Video Concepts", 
                  description: "Quickly test video ideas and concepts before investing in full production workflows."
                },
                {
                  icon: Zap,
                  title: "Scale Video Production",
                  description: "Generate hundreds of video variations for A/B testing and different audience segments."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-24 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "Which engine is best for me?",
                    answer: "Use Kling 1.6 for quick stylised drafts, Kling 2.0 for realistic footage, and WAN when you need uncensored or experimental content."
                  },
                  {
                    question: "How long can a clip be?", 
                    answer: "Currently, 10-20 seconds. Longer formats roll out soon."
                  },
                  {
                    question: "Can I batch-generate 1,000 clips?",
                    answer: "Yes. The batch queue spins up additional GPUs automatically; you pay only for compute you consume."
                  },
                  {
                    question: "What resolutions are supported?",
                    answer: "Base 720p with various aspect ratios. Higher resolutions coming soon."
                  },
                  {
                    question: "How is pricing calculated?",
                    answer: "Pay-per-second of generated video content. No upfront costs, no monthly minimums."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-purple-200 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-8">Still have questions? <a href="mailto:support@zencreator.pro" className="text-purple-600 hover:underline">Contact support →</a></p>
            </div>
          </section>

        </div>
      </div>

      {/* More Magic Tools */}
      <MoreMagicTools />
      
      {/* Final CTA */}
      <section className="w-full py-[150px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 text-center border border-white/10">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to turn prompts into scroll-stopping videos?</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Try AI Video Generator</a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Book a demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};