import React from 'react';
import { Zap, CheckCircle, Settings, ArrowUp } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { MoreMagicTools } from '@/components/sections/MoreMagicTools';

export const AIUpscaling: React.FC = () => {
  const faqData = [
    {
      question: "Why four different modes?",
      answer: "No single model nails every scenario. We give you targeted engines optimised for speed, facial fidelity, texture depth, or full restoration."
    },
    {
      question: "Does Upscale change faces?",
      answer: "Not in Face-Safe or Basic modes. Textured may add stylistic grain; Full Restored preserves structure while boosting detail."
    },
    {
      question: "What's the max resolution?",
      answer: "Inputs up to 8K; outputs up to 4× the original size, capped at 16K."
    },
    {
      question: "How fast is it?",
      answer: "Rough guide: 100 images (2K→4K) in ~2 minutes on a standard GPU instance."
    },
    {
      question: "Can I batch-process folders?",
      answer: "Yes — upload hundreds of photos; ZenCreator handles queueing and retry logic automatically."
    }
  ];

  return (
    <PageLayout
      title="AI Upscaling — Four specialised models"
      description="Four specialised models — because one-size-fits-all upscalers don't exist."
    >
      {/* Hero */}
      <div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
            <section className="pt-24 pb-[40px] text-center text-white w-full px-6">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                AI Upscaling
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
                  Four specialised models
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                <strong>Four specialised models — because one-size-fits-all upscalers don't exist.</strong>
              </p>
              <div className="flex gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Try AI Upscaler
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: 1, icon: ArrowUp, title: 'Upload Images', description: 'Drag & drop your photos or select from cloud storage.' },
                { step: 2, icon: Settings, title: 'Choose Mode', description: 'Pick from Face-Safe, Basic, Textured, or Full Restored modes.' },
                { step: 3, icon: Zap, title: 'AI Processing', description: 'Our specialized models enhance your images with perfect quality.' },
                { step: 4, icon: CheckCircle, title: 'Download Results', description: 'Get crystal-clear upscaled images ready for any use.' }
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

          {/* Four Upscale Modes */}
          <section className="py-[150px] bg-gray-50">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Four Upscale Modes</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  title: 'Face-Safe', 
                  description: 'Preserves facial features with zero distortion. Perfect for portraits and people-focused content.',
                  features: ['Facial landmark protection', 'Natural skin texture', 'Expression preservation', 'Zero artifacts'],
                  color: 'from-green-500 to-emerald-500'
                },
                { 
                  title: 'Basic', 
                  description: 'Fast, general-purpose upscaling for everyday photos and graphics.',
                  features: ['2x speed advantage', 'Universal compatibility', 'Clean edge enhancement', 'Batch-optimized'],
                  color: 'from-blue-500 to-sky-500'
                },
                { 
                  title: 'Textured', 
                  description: 'Enhances fabric, hair, and surface details. Ideal for fashion and product photography.',
                  features: ['Fabric detail enhancement', 'Hair strand definition', 'Surface texture boost', 'Material clarity'],
                  color: 'from-purple-500 to-violet-500'
                },
                { 
                  title: 'Full Restored', 
                  description: 'Maximum quality restoration for damaged or low-quality source images.',
                  features: ['Noise reduction', 'Artifact removal', 'Detail reconstruction', 'Color correction'],
                  color: 'from-orange-500 to-red-500'
                }
              ].map((mode, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${mode.color} flex items-center justify-center mb-6`}>
                      <ArrowUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{mode.title}</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">{mode.description}</p>
                    <ul className="space-y-2">
                      {mode.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 border border-purple-200 max-w-2xl mx-auto">
                <p className="text-lg text-gray-800 font-semibold">Switch modes on the fly; pay only for processed pixels.</p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Key Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Context-Aware AI', description: 'Identifies faces, skin, fabric, and backgrounds; applies specialised enhancement per region.', icon: Settings },
                { title: 'True 4K Output', description: 'Clean lines, no halo rings or cartoonish oversharpening.', icon: ArrowUp },
                { title: 'Batch Processing', description: 'Upscale hundreds of images in parallel; track progress in real time.', icon: Zap },
                { title: 'Seamless Pipeline', description: 'Pipe results to Face Swap, Carousel Builder, or schedule straight to socials.', icon: CheckCircle }
              ].map((feature) => (
                <div key={feature.title} className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Built For Teams */}
          <section className="py-[150px] bg-gray-50">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Built For Teams Who Need to…</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Publish sharp visuals across high-DPI mobile feeds.',
                'Rescue legacy or user-generated images for new campaigns.',
                'Batch-enhance product catalogues without manual editing.'
              ].map((need, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6 mx-auto">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium">{need}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">Try Upscale</a>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-[150px] bg-white">
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
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to turn grainy pixels into crystal-clear assets?</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Try AI Upscaler</a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Book a demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};