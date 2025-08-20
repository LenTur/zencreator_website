import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { Link } from 'react-router-dom';
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
    answer: "Yes — if omitted, the model infers body proportions from the face reference."
  },
  {
    question: "What resolutions are supported?",
    answer: "Generate natively up to 4K."
  },
  {
    question: "Is there a managed service?",
    answer: "Absolutely—our team can handle generation, QA, and delivery if you prefer a hands-off solution."
  }
];

export const AIPhotoShoot: React.FC = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <div className="bg-gray-900 pb-20" style={{ paddingTop: '140px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <section className="pt-24 pb-[40px] text-center">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                AI Photo Shoot Generator
                <br />
                <span style={{background: 'linear-gradient(135deg, #7BA1F8, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}} className="text-2xl md:text-4xl">Studio-Quality Sets Without the Studio</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Upload two reference shots, pick your themes, and receive a perfectly consistent photo collection in minutes.
              </p>
              <div className="flex justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Try Photo Shoot Generator
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      {/* UI Mockup Placeholder */}
      <div className="container mx-auto px-4 -mt-20">
        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
          <div className="bg-gray-700 h-96 rounded-2xl flex items-center justify-center">
            <p className="text-white/50">UI mock-up: face & body upload boxes, theme counters, aspect-ratio selector</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* How It Works */}
          <section className="py-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">How It Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "1. Upload Face & Body", description: "Drag one face photo and (optionally) a full-body shot. Locks identity and proportions." },
                { title: "2. Choose Shoot Specs", description: "Select aspect ratio, gender flag, and set image counts per theme (e.g., Cozy, Studio, Work etc.) Queue is auto-built." },
                { title: "3. Generate & Review", description: "Photos render in parallel; grid UI lets you approve or reject. Rejected shots auto-regenerate until the quota is met." },
                { title: "4. Export or Pipeline", description: "Download at target resolution or send to Upscale, Face Swap, Video, or Publishing. Ready for catalogues, carousels, or ads." }
              ].map(item => (
                <div key={item.title} className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="py-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Theme Library at Scale", 
                  description: "40+ shoot categories — Cozy, Studio, Beach, Work, Glamour, Holiday, Fitness, and more. Each theme contains 100-500 prompt templates for natural variation." 
                },
                { 
                  title: "Ultra-Consistent Faces & Bodies", 
                  description: "Identity is locked across every image. Adaptive lighting & colour-grade matching for realism." 
                },
                { 
                  title: "Real-Time Moderation", 
                  description: "Side-by-side zoom, hot-key approvals." 
                },
                { 
                  title: "Flexible Resolution & Aspect Ratio", 
                  description: "Pre-sets for 1:1, 3:4, 9:16, banner, or custom dimensions up to 4K." 
                },
                { 
                  title: "Batch Generation", 
                  description: "Spin up hundreds of images per run." 
                },
                { 
                  title: "Creator OS Integration", 
                  description: "One-click Upscale to 4K, Face Swap, Video spin-off, or direct multi-platform posting." 
                }
              ].map(item => (
                <div key={item.title} className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Perfect For */}
          <section className="py-[150px] text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 max-w-3xl mx-auto">Perfect For Teams That Need to…</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                "Equip e-commerce listings with uniform product-model shots in every pose.",
                "Fill Instagram or Threads carousels with consistent, multi-theme visuals.",
                "Produce lookbooks & ads without booking photographers, locations, or talent."
              ].map(item => (
                <div key={item} className="bg-purple-50 p-6 rounded-2xl">
                  <p className="text-lg font-medium text-purple-800">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200">
                Try Photo Shoot Generator
              </a>
            </div>
          </section>


        </div>
      </div>
      
      {/* More Magic Tools */}
      <MoreMagicTools />
      
      <FAQAccordion 
        items={faqItems} 
        title="Frequently Asked Questions"
        cta={
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">Ready to turn two photos into an entire campaign?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200">
                Try AI Photo Shoot Generation
              </a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 hover:border-purple-400 hover:text-purple-900 transition-all duration-200">
                Book a demo
              </a>
            </div>
          </div>
        }
      />
    </PageLayout>
  );
};