import React from 'react';
import { Zap, CheckCircle, Settings, ArrowUp } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

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
                  Try Upscale
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* How It Works */}
          <section className="mt-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-black text-purple-600 mb-6">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Upload Media</h3>
                <p className="text-gray-600 leading-relaxed">
                  Drop in any JPG, PNG or WEBP (up to 8 K). Images queued for fast GPU processing.
                </p>
              </div>
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-black text-purple-600 mb-6">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pick Your Upscale Mode</h3>
                <p className="text-gray-600 leading-relaxed">
                  Basic · Face-Safe · Textured · Full Restored. Tailors enhancement to your quality vs. fidelity needs.
                </p>
              </div>
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-black text-purple-600 mb-6">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Launch & Download</h3>
                <p className="text-gray-600 leading-relaxed">
                  Click <strong>Upscale</strong> — process single shots or entire folders. Export, send to another ZenCreator tool, or publish directly.
                </p>
              </div>
            </div>
          </section>

          {/* Four Upscale Modes Table */}
          <section className="mt-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Four Upscale Modes</h2>
            
            {/* Table for desktop */}
            <div className="hidden md:block">
              <div className="overflow-hidden rounded-3xl border border-gray-200">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Mode</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Best For</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">What It Does</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">Basic Upscale</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Web speed • Thumbnails • Memes</td>
                      <td className="px-6 py-4 text-sm text-gray-600">2×–4× resolution, light denoise, almost zero facial change.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">Face-Safe Upscale</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Portraits • Influencer grids</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Enhances sharpness & colour while <strong>locking facial identity</strong>.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">Textured Upscale</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Product shots • Landscapes</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Injects realistic grain, depth and micro-contrast—may subtly alter faces.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">Full Restored Upscale</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Archival scans • Print assets</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Maximum detail recovery, artefact removal, and texture synthesis while preserving core features.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cards for mobile */}
            <div className="md:hidden space-y-6">
              {[
                ['Basic Upscale','Web speed • Thumbnails • Memes','2×–4× resolution, light denoise, almost zero facial change.'],
                ['Face-Safe Upscale','Portraits • Influencer grids','Enhances sharpness & colour while locking facial identity.'],
                ['Textured Upscale','Product shots • Landscapes','Injects realistic grain, depth and micro-contrast—may subtly alter faces.'],
                ['Full Restored Upscale','Archival scans • Print assets','Maximum detail recovery, artefact removal, and texture synthesis while preserving core features.'],
              ].map(([mode, bestFor, desc]) => (
                <div key={mode as string} className="rounded-3xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{mode as string}</h3>
                  <p className="text-sm text-purple-600 font-medium mb-3">Best For: {bestFor as string}</p>
                  <p className="text-gray-600 leading-relaxed">{desc as string}</p>
                </div>
              ))}
            </div>
            
            <p className="text-center text-gray-600 mt-8 text-lg">
              (Switch modes on the fly; pay only for processed pixels.)
            </p>
          </section>

          {/* Key Features */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Context-Aware AI</strong> – Identifies faces, skin, fabric, and backgrounds; applies specialised enhancement per region.</li>
              <li><strong>True 4K Output</strong> – Clean lines, no halo rings or cartoonish oversharpening.</li>
              <li><strong>Batch Processing</strong> – Upscale hundreds of images in parallel; track progress in real time.</li>
              <li><strong>Seamless Pipeline</strong> – Pipe results to Face Swap, Carousel Builder, or schedule straight to socials.</li>
            </ul>
          </section>

          {/* Built For */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Built For Teams Who Need to…</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Publish sharp visuals across high-DPI mobile feeds.</li>
              <li>Rescue legacy or user-generated images for new campaigns.</li>
              <li>Print large banners, lookbooks, or OOH without reshooting.</li>
            </ul>
            <div className="mt-6">
              <a href="/products/zencreator/content-creation/ai-upscaling" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Upscale</a>
            </div>
          </section>

          {/* More Tools placeholder */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">More Magic Tools</h3>
            <p className="text-gray-700">(placeholder for tool tiles — shared block)</p>
            <div className="mt-4">
              <a href="/products/zencreator/content-creation" className="text-purple-600 hover:underline font-medium">See full Content Creation suite →</a>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">FAQ</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-medium">Why four different modes?</p>
                <p>No single model nails every scenario. We give you targeted engines optimised for speed, facial fidelity, texture depth, or full restoration.</p>
              </div>
              <div>
                <p className="font-medium">Does Upscale change faces?</p>
                <p>Not in Face-Safe or Basic modes. Textured may add stylistic grain; Full Restored preserves structure while boosting detail.</p>
              </div>
              <div>
                <p className="font-medium">What’s the max resolution?</p>
                <p>Inputs up to 8K; outputs up to 4× the original size, capped at 16K.</p>
              </div>
              <div>
                <p className="font-medium">How fast is it?</p>
                <p>Rough guide: 100 images (2K→4K) in ~2 minutes on a standard GPU instance.</p>
              </div>
              <div>
                <p className="font-medium">Can I batch-process folders?</p>
                <p>Yes — upload hundreds of photos; ZenCreator handles queueing and retry logic automatically.</p>
              </div>
              <p>Still have questions? <a href="mailto:support@zencreator.pro" className="text-purple-600 hover:underline">Contact support →</a></p>
            </div>
          </section>

        </div>
      </div>
      
      {/* Final CTA */}
      <section className="py-[150px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
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


