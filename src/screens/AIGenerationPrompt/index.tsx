import React from 'react';
import { Zap, Settings, Image as ImageIcon, CheckCircle, Sparkles, Palette } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { MoreMagicTools } from '@/components/sections/MoreMagicTools';

export const AIGenerationPrompt: React.FC = () => {
  const faqData = [
    {
      question: "What makes a good prompt?",
      answer: "Be descriptive but not overly complex. Include style, mood, colors, and composition details. For example: 'A serene mountain lake at sunset, photorealistic, golden hour lighting, 4K quality'."
    },
    {
      question: "Can I generate images in different styles?", 
      answer: "Yes! We support photography, digital art, paintings, sketches, and many other styles. You can specify the style in your prompt or use our style presets."
    },
    {
      question: "What image sizes are supported?",
      answer: "We support various aspect ratios from square (1:1) to ultra-wide (21:9), with resolutions up to 4K. Perfect for social media, print, and web use."
    },
    {
      question: "How do I get consistent results?",
      answer: "Use seed values to reproduce similar results, or save successful prompts as templates. Our prompt enhancement feature also helps optimize your descriptions."
    },
    {
      question: "Can I use these images commercially?",
      answer: "Yes! All generated images come with full commercial usage rights. No attribution required, no watermarks, perfect for business use."
    }
  ];

  return (
    <PageLayout
      title="AI Generation by Prompt — Prompt-to-Picture in One Click"
      description="Create stunning images from text descriptions with AI technology."
    >
      {/* Hero */}
      <div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
            <section className="pt-24 pb-[40px] text-center text-white w-full px-6">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                AI Generation by Prompt
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7BA1F8, #C084FC)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  className="text-2xl md:text-4xl"
                >
                  Prompt-to-Picture in One Click
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                <strong>Create stunning images from text descriptions with AI technology. From simple keywords to detailed scenes.</strong>
              </p>
              <div className="flex gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Try AI Generation by Prompt
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* How It Works */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: 1, icon: Zap, title: 'Write Your Prompt', description: 'Describe what you want to see. Be as detailed or simple as you like.' },
                { step: 2, icon: Settings, title: 'Choose Style & Settings', description: 'Select art style, aspect ratio, and quality settings for your image.' },
                { step: 3, icon: ImageIcon, title: 'Generate & Download', description: 'Get your AI-generated image in seconds, ready to use or refine further.' }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                    <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <span className="text-white font-bold text-xl">{step.step}</span>
                      </div>
                      <step.icon className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="py-[150px] bg-gray-50">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Key Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Sparkles,
                  title: "Multiple AI Models",
                  features: [
                    "FLUX for photorealism",
                    "SDXL for artistic styles", 
                    "Custom fine-tuned models",
                    "Style-specific engines"
                  ]
                },
                {
                  icon: Palette,
                  title: "Style Control",
                  features: [
                    "Photography styles",
                    "Artistic movements",
                    "Digital art styles",
                    "Custom style mixing"
                  ]
                },
                {
                  icon: Settings,
                  title: "Advanced Settings",
                  features: [
                    "Aspect ratio control",
                    "Quality adjustments",
                    "Seed control for consistency",
                    "Batch generation"
                  ]
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  features: [
                    "Results in under 30 seconds",
                    "GPU-accelerated processing",
                    "Queue management",
                    "Real-time progress tracking"
                  ]
                },
                {
                  icon: ImageIcon,
                  title: "High Quality Output",
                  features: [
                    "Up to 4K resolution",
                    "Multiple format support",
                    "Lossless compression",
                    "Print-ready quality"
                  ]
                },
                {
                  icon: CheckCircle,
                  title: "Commercial Use",
                  features: [
                    "Full commercial rights",
                    "No watermarks",
                    "Unlimited downloads",
                    "API access available"
                  ]
                }
              ].map((feature, index) => (
                <div key={index} className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Perfect For Teams */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Perfect For Teams That Need to…</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Sparkles,
                  title: "Create Marketing Visuals",
                  description: "Generate unique images for ads, social media, and campaigns without stock photo costs."
                },
                {
                  icon: Palette,
                  title: "Prototype Design Concepts", 
                  description: "Quickly visualize ideas and concepts before investing in professional photography."
                },
                {
                  icon: ImageIcon,
                  title: "Scale Content Production",
                  description: "Generate hundreds of variations for A/B testing and different market segments."
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6 mx-auto">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="py-[150px] bg-gray-50">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Frequently Asked Questions</h3>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-purple-200 transition-colors">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
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
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to turn three words into a full photo set?</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Try AI Generation by Prompt</a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Book a demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};