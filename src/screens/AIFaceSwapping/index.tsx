import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

export const AIFaceSwapping: React.FC = () => {
  const faqData = [
    {
      question: "What is AI Face Swap?",
      answer: "A Creator OS module that uses deep-learning facial mapping to replace a face in photos or video while preserving lighting, expression, and resolution."
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
      title="AI Face Swap"
      description="Ultra-realistic face replacement for images & video — at production scale."
    >
      <div className="container mx-auto px-4 pb-20" style={{ paddingTop: '140px' }}>
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section className="pt-24 pb-[40px] text-center">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              AI Face Swap
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              <strong>Ultra-realistic face replacement for images & video — at production scale.</strong>
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200">
                Try Face Swap
              </a>
            </div>
            <p className="text-gray-500 mt-8 italic">
              *(Interactive before/after carousel placeholder)*
            </p>
          </section>

          {/* How It Works */}
          <section className="mt-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-black text-purple-600 mb-6">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Choose a Target Face</h3>
                <p className="text-gray-600 leading-relaxed">
                  Upload a reference photo or pick a saved AI character.
                </p>
              </div>
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-black text-purple-600 mb-6">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Add Source Media</h3>
                <p className="text-gray-600 leading-relaxed">
                  Drop in any photo or video (MP4, MOV, JPG, PNG).
                </p>
              </div>
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-black text-purple-600 mb-6">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Launch Bulk Swap</h3>
                <p className="text-gray-600 leading-relaxed">
                  Click <strong>Face Swap</strong> — process hundreds of files in parallel.
                </p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mt-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                ['Accurate in Any Scene','Detects faces even when blurred, masked, or partially covered by hair, hats, hands, or sunglasses. Supports complex angles and group shots.'],
                ['Human-Level Skin Detail','AI-generated pores, freckles, and micro-shadows. Automatic skin-tone transfer for seamless blending.'],
                ['Facial Consistency','Keeps the same eyes, nose, and jawline across every frame — critical for brand or character integrity.'],
                ['Context-Aware Lighting','Matches ambient light, shadows, and color grade so the swap looks native to the scene.'],
                ['Bulk Processing at Speed','Swap hundreds of photos or multi-hour videos in one run. Pipe results straight to Creator OS Publishing for Instagram, TikTok, X, and more.'],
              ].map(([title,desc]) => (
                <div key={title as string} className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{title as string}</h3>
                  <p className="text-gray-600 leading-relaxed">{desc as string}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Built For */}
          <section className="mt-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Built For Creators Who Need to:</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Faceless Content</h3>
                <p className="text-gray-600 leading-relaxed">
                  Produce <strong>faceless or avatar-based content</strong> at scale.
                </p>
              </div>
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Influencer Consistency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Maintain <strong>consistent AI influencer personas</strong> across campaigns.
                </p>
              </div>
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Viral Visuals</h3>
                <p className="text-gray-600 leading-relaxed">
                  Generate viral, one-of-a-kind visuals without studio shoots.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200">
                Try Face Swap
              </a>
            </div>
          </section>

          {/* More Tools placeholder */}
          <section className="mt-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">More Magic Tools</h2>
            <p className="text-center text-gray-600 mb-8">(тут картинки и названия инструментов), этот блок будет переиспользоваться на всех страницах</p>
            <div className="text-center">
              <a href="/products/zencreator/content-creation" className="text-purple-600 hover:underline font-medium text-lg">See full Content Creation suite →</a>
            </div>
          </section>

          {/* FAQ */}
          <FAQAccordion 
            title="FAQ"
            items={faqData}
            cta={
              <div className="bg-[#0F172A] text-white rounded-2xl p-8 border border-white/10 text-center">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to see flawless swaps in action?</h3>
                <div className="flex flex-wrap gap-6 justify-center">
                  <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200">
                    Try AI Face Swapper
                  </a>
                  <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-200">
                    Book a demo
                  </a>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </PageLayout>
  );
};


