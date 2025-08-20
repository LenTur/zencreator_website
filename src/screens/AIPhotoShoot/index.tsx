import React from 'react';
import { Camera, Settings, Image as ImageIcon, CheckCircle, Zap, Palette } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { MoreMagicTools } from '@/components/sections/MoreMagicTools';

const faqItems = [
  {
    question: "What reference photos work best?",
    answer: "Front-facing, well-lit face (512 px+) and, if possible, a full-body image in similar lighting."
  },
  {
    question: "How many themes can I combine in one run?",
    answer: "Up to 10 themes per batch; set any image count per theme."
  },
  {
    question: "Will the face stay identical in every shot?",
    answer: "Yes — identity locking preserves facial landmarks and skin tone across all outputs."
  },
  {
    question: "Can I skip the body image?",
    answer: "Face-only mode works fine, but including a body reference improves pose variety and clothing fit."
  },
  {
    question: "How fast is a typical shoot?",
    answer: "100 images across 5 themes in ~4 minutes on a standard GPU instance."
  }
];

export const AIPhotoShoot: React.FC = () => {
  return (
    <PageLayout
      title="AI Photo Shoot Generation — Professional Shoots in Minutes"
      description="Turn two reference photos into professional photo shoots with AI technology."
    >
      {/* Hero */}
      <div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
            <section className="pt-24 pb-[40px] text-center text-white w-full px-6">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                AI Photo Shoot Generation
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
                  Professional Shoots in Minutes
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                <strong>Turn two reference photos into professional photo shoots with AI technology.</strong>
              </p>
              <div className="flex gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Try Photo Shoot Generator
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
                { step: 1, icon: Camera, title: 'Upload References', description: 'Upload face and body reference photos for identity locking.' },
                { step: 2, icon: Palette, title: 'Choose Themes', description: 'Select from 10,000+ themed prompts: casual, professional, seasonal, travel.' },
                { step: 3, icon: ImageIcon, title: 'Generate Shoot', description: 'Get 100+ professional photos across multiple themes in minutes.' }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                    <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <span className="text-white font-bold text-xl">{step.step}</span>
                      </div>
                      <step.icon className="w-8 h-8 text-pink-600 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
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
                {faqItems.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-pink-200 transition-colors">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-8">Still have questions? <a href="mailto:support@zencreator.pro" className="text-pink-600 hover:underline">Contact support →</a></p>
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
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to turn two photos into an entire campaign?</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Try Photo Shoot Generator</a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Book a demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};