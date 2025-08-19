import React from 'react';
import { Users, Settings, Zap, ArrowRight, CheckCircle, Camera, Palette } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

export const AIFaceGeneration = () => {
  return (
    <PageLayout 
      title="AI Face Generation — Custom Faces in Seconds" 
      description="Dial in the look you need and receive four photorealistic portraits per run — ready for campaigns, avatars, or creative mock-ups."
    >
      {/* Hero */}
      <div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
            <section className="pt-24 pb-[40px] text-center text-white w-full px-6">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                AI Face Generation
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
                  Custom Faces in Seconds
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                <strong>Dial in the look you need and receive four photorealistic portraits per run — ready for campaigns, avatars, or creative mock-ups.</strong>
              </p>
              <div className="flex gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Try Face Generator
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
                { step: '1', title: 'Set Your Parameters', description: 'Gender, age, ethnicity, body type, eye & hair colour, style details — or click Surprise Me.' },
                { step: '2', title: 'Start Generation', description: 'One click queues the job on our GPUs. 4 unique faces rendered in ~15 sec.' },
                { step: '3', title: 'Review & Star', description: 'Accept the set or regenerate. Keep what you love, discard the rest.' },
                { step: '4', title: 'Send Downstream', description: 'Route favourites to Upscale, Face Swap, Video, or Publishing. Assets arrive pre-tagged.' }
              ].map((item) => (
                <div key={item.step} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="py-[150px] bg-gray-50">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Key Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Fine-Grained Controls', description: 'Gender, age bands, ethnic palette, body type, beard & hair style, eye colour, makeup.', icon: Settings },
                { title: '"Surprise Me" Mode', description: 'One tap randomises all parameters for fresh inspiration.', icon: Zap },
                { title: 'Four-Up Output', description: 'Every run returns 4 distinct faces — great for A/B testing and quick decisions.', icon: Users },
                { title: 'Seamless Pipeline', description: 'Auto-hand-off to Upscale (4K), Face Swap, Video Generator, or multi-platform Publishing.', icon: ArrowRight },
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

          {/* Built For */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Built For Teams Who Need to…</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Prototype ad creatives or app avatars without photo shoots.',
                'Populate dating/social platforms with diverse, realistic profiles.',
                'Generate brand characters that stay consistent across images and video.'
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">Try Face Generator</a>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-[150px] bg-gray-50">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { question: 'How many faces do I get per generation?', answer: 'Each generation returns four high-resolution portraits.' },
                { question: 'What parameters can I control?', answer: 'Gender, age, ethnicity, body type, eye colour, hair colour & style, beard style & colour, makeup.' },
                { question: 'Is commercial use allowed?', answer: 'All faces are cleared for commercial projects; you own the license.' }
              ].map((faq, index) => (
                <div key={index} className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                    <h4 className="font-bold text-gray-900 mb-3">{faq.question}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 border border-purple-200 max-w-lg mx-auto">
                <p className="text-gray-800 font-semibold">Still have questions? <a href="mailto:support@zencreator.pro" className="text-purple-600 hover:text-purple-800 transition-colors">Contact support →</a></p>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      {/* Final CTA */}
      <section className="py-[150px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 text-center border border-white/10">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to meet your next virtual model?</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Try AI Face Generator</a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Book a demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
