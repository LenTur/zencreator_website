import React from 'react';
import { Zap, Settings, Image as ImageIcon, CheckCircle, Sliders, Camera } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { MoreMagicTools } from '@/components/sections/MoreMagicTools';

export const AIGenerationReference: React.FC = () => {
  return (
    <PageLayout
      title="AI Generation by Reference — Reference-to-Render"
      description="Generate new images based on reference photos with AI technology."
    >
      {/* Hero Section */}
      <section className="w-full py-[180px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 text-center border border-white/10">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                AI Generation by Reference
              </h1>
              <p className="text-xl md:text-2xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                Reference-to-Render
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Generate new images based on reference photos. Perfect for creating variations, style transfers, and concept development.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Try AI Generation by Reference</a>
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
              Transform reference images into new creations in three simple steps
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  icon: Camera,
                  title: "Upload Reference",
                  description: "Upload your reference image - photos, artwork, or any visual inspiration."
                },
                {
                  step: "2", 
                  icon: Sliders,
                  title: "Adjust Settings",
                  description: "Control how closely the AI follows your reference with strength and style settings."
                },
                {
                  step: "3",
                  icon: ImageIcon,
                  title: "Generate Variations",
                  description: "Get AI-generated images inspired by your reference, with your desired modifications."
                }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 mb-6 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                    <item.icon className="w-8 h-8 text-orange-600 mx-auto mb-4" />
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
              Advanced reference-based image generation technology
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Camera,
                  title: "Multiple Reference Types",
                  features: [
                    "Photo references",
                    "Artwork and illustrations", 
                    "Sketches and drawings",
                    "3D renders and mockups"
                  ]
                },
                {
                  icon: Sliders,
                  title: "Fine Control",
                  features: [
                    "Reference strength adjustment",
                    "Style transfer intensity",
                    "Composition preservation",
                    "Color palette control"
                  ]
                },
                {
                  icon: Settings,
                  title: "Advanced Options",
                  features: [
                    "Multiple output variations",
                    "Custom aspect ratios",
                    "Quality presets",
                    "Batch processing"
                  ]
                },
                {
                  icon: Zap,
                  title: "Fast Processing",
                  features: [
                    "Results in under 60 seconds",
                    "GPU-accelerated inference",
                    "Parallel generation",
                    "Real-time previews"
                  ]
                },
                {
                  icon: ImageIcon,
                  title: "High-Quality Output",
                  features: [
                    "Up to 4K resolution",
                    "Preserves important details",
                    "Multiple format export",
                    "Professional quality"
                  ]
                },
                {
                  icon: CheckCircle,
                  title: "Creative Freedom",
                  features: [
                    "Style mixing capabilities",
                    "Concept exploration",
                    "Unlimited iterations",
                    "Commercial usage rights"
                  ]
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                  icon: Camera,
                  title: "Create Product Variations",
                  description: "Generate multiple versions of products in different colors, styles, or settings from a single reference."
                },
                {
                  icon: Sliders,
                  title: "Style Transfer Projects", 
                  description: "Apply artistic styles to photos or transform artwork into different visual styles and mediums."
                },
                {
                  icon: ImageIcon,
                  title: "Concept Development",
                  description: "Explore design concepts and iterate on ideas using reference images as creative starting points."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                    question: "What types of reference images work best?",
                    answer: "High-resolution images with clear subjects work best. Photos, artwork, sketches, and 3D renders all work well. The clearer and higher quality your reference, the better the results."
                  },
                  {
                    question: "How much control do I have over the final result?", 
                    answer: "You can adjust reference strength from 10-90%, control style transfer intensity, and specify additional prompts to guide the generation process."
                  },
                  {
                    question: "Can I use copyrighted images as references?",
                    answer: "While you can use any image as a reference for generation, the output will be an original AI-created image. Always respect copyright laws for commercial use."
                  },
                  {
                    question: "What's the difference from regular prompt generation?",
                    answer: "Reference generation uses your uploaded image as a visual guide, ensuring the AI understands composition, style, and subject matter more precisely than text alone."
                  },
                  {
                    question: "Can I combine multiple references?",
                    answer: "Currently, we support one primary reference per generation. However, you can use additional references in your text prompt for more complex compositions."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-orange-200 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-8">Still have questions? <a href="mailto:support@zencreator.pro" className="text-orange-600 hover:underline">Contact support →</a></p>
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
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to turn one reference shot into a full campaign?</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Try AI Generation by Reference</a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Book a demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};