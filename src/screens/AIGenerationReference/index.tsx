import React from 'react';
import { Zap, Settings, Image as ImageIcon, CheckCircle, Sliders, Camera } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { MoreMagicTools } from '@/components/sections/MoreMagicTools';

export const AIGenerationReference: React.FC = () => {
  const faqData = [
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
  ];

  return (
    <PageLayout
      title="AI Generation by Reference — Reference-to-Render"
      description="Generate new images based on reference photos with AI technology."
    >
      {/* Hero */}
      <div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
            <section className="pt-24 pb-[40px] text-center text-white w-full px-6">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                AI Generation by Reference
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
                  Reference-to-Render
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                <strong>Generate new images based on reference photos. Perfect for creating variations, style transfers, and concept development.</strong>
              </p>
              <div className="flex gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Try AI Generation by Reference
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
                { step: 1, icon: Camera, title: 'Upload Reference', description: 'Upload your reference image - photos, artwork, or any visual inspiration.' },
                { step: 2, icon: Sliders, title: 'Adjust Settings', description: 'Control how closely the AI follows your reference with strength and style settings.' },
                { step: 3, icon: ImageIcon, title: 'Generate Variations', description: 'Get AI-generated images inspired by your reference, with your desired modifications.' }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                    <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <span className="text-white font-bold text-xl">{step.step}</span>
                      </div>
                      <step.icon className="w-8 h-8 text-orange-600 mx-auto mb-4" />
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
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-orange-200 transition-colors">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
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