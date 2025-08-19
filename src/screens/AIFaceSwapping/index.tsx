import React from 'react';
import { Users, Settings, Zap, ArrowRight, CheckCircle, Camera, Palette, User } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

export const AIFaceSwapping: React.FC = () => {
  const faqData = [
    {
      question: "What is AI Face Swap?",
      answer: "A ZenCreator module that uses deep-learning facial mapping to replace a face in photos or video while preserving lighting, expression, and resolution."
    },
    {
      question: "Does it work on blurry or pixelated footage?",
      answer: "Yes — our detector is trained on low-quality inputs and stabilises the face before swapping."
    },
    {
      question: "Can I swap faces in bulk?",
      answer: "Absolutely. Upload hundreds of photos; processing runs in parallel."
    },
    {
      question: "How long does a swap take?",
      answer: "Rough guide: 100 HD images in < 90 seconds; 1 minute of 1080 p video in ~30 seconds on a standard GPU instance."
    },
    {
      question: "Can I swap multiple faces in one scene?",
      answer: "Multi-face mode lets you map different target faces to different people in a single frame."
    },
    {
      question: "What reference photo works best?",
      answer: "Front-facing, well-lit, minimum 512 × 512 px. More angles = better fidelity on dynamic video."
    }
  ];

  return (
    <PageLayout
      title="AI Face Swapping — Ultra-realistic face replacement"
      description="Ultra-realistic face replacement for images & video — at production scale."
    >
      {/* Hero */}
      <div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
            <section className="pt-24 pb-[40px] text-center text-white w-full px-6">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                AI Face Swapping
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
                  Ultra-realistic face replacement
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                <strong>Ultra-realistic face replacement for images & video — at production scale.</strong>
              </p>
              <div className="flex gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Try Face Swap
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
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Choose a Target Face', description: 'Upload a reference photo or pick a saved AI character.' },
                { step: '2', title: 'Add Source Media', description: 'Drop in any photo or video (MP4, MOV, JPG, PNG).' },
                { step: '3', title: 'Launch Bulk Swap', description: 'Click Face Swap — process hundreds of files in parallel.' }
              ].map((item) => (
                <div key={item.step} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="py-[150px] bg-gray-50">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Accurate in Any Scene', description: 'Detects faces even when blurred, masked, or partially covered by hair, hats, hands, or sunglasses. Supports complex angles and group shots.', icon: Camera },
                { title: 'Human-Level Skin Detail', description: 'AI-generated pores, freckles, and micro-shadows. Automatic skin-tone transfer for seamless blending.', icon: Palette },
                { title: 'Facial Consistency', description: 'Keeps the same eyes, nose, and jawline across every frame — critical for brand or character integrity.', icon: User },
                { title: 'Context-Aware Lighting', description: 'Matches ambient light, shadows, and color grade so the swap looks native to the scene.', icon: Zap },
                { title: 'Bulk Processing at Speed', description: 'Swap hundreds of photos or multi-hour videos in one run. Pipe results straight to ZenCreator Publishing for Instagram, TikTok, X, and more.', icon: Users }
              ].map((feature) => (
                <div key={feature.title} className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Built For */}
          <section className="py-[150px] bg-white">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Built For Creators Who Need to:</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Faceless Content', description: 'Produce faceless or avatar-based content at scale.' },
                { title: 'AI Influencer Consistency', description: 'Maintain consistent AI influencer personas across campaigns.' },
                { title: 'Viral Visuals', description: 'Generate viral, one-of-a-kind visuals without studio shoots.' }
              ].map((item) => (
                <div key={item.title} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6 mx-auto">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed"><strong>{item.description}</strong></p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                Try Face Swap
              </a>
            </div>
          </section>

        </div>
      </div>

      {/* FAQ with CTA */}
      <FAQAccordion 
        title="Frequently Asked Questions"
        items={faqData}
        cta={
          <section className="pt-10 bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 text-center border border-white/10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to see flawless swaps in action?</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Try AI Face Swapper</a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Book a demo</a>
            </div>
          </section>
        }
      />
    </PageLayout>
  );
};


