import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const AIUpscaling: React.FC = () => {
  return (
    <PageLayout
      title="AI Image Upscale"
      description="Four specialised models — because one-size-fits-all upscalers don’t exist."
    >
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Lead */}
          <section className="py-6">
            <a href="/products/zencreator/content-creation/ai-upscaling" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Upscale</a>
          </section>

          {/* How It Works */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Upload Media</strong> — Drop in any JPG, PNG or WEBP (up to 8K). Images queued for fast GPU processing.</li>
              <li><strong>Pick Your Upscale Mode</strong> — Basic · Face-Safe · Textured · Full Restored.</li>
              <li><strong>Launch & Download</strong> — Process single shots or entire folders. Export, send to another tool, or publish directly.</li>
            </ol>
          </section>

          {/* Modes Table (cards) */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Four Upscale Modes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                ['Basic Upscale','Web speed • Thumbnails • Memes','2×–4× resolution, light denoise, almost zero facial change.'],
                ['Face-Safe Upscale','Portraits • Influencer grids','Enhances sharpness & colour while locking facial identity.'],
                ['Textured Upscale','Product shots • Landscapes','Injects realistic grain, depth and micro-contrast—may subtly alter faces.'],
                ['Full Restored Upscale','Archival scans • Print assets','Maximum detail recovery, artefact removal, and texture synthesis while preserving core features.'],
              ].map(([mode, bestFor, desc]) => (
                <Card key={mode as string}>
                  <CardHeader className="p-5 pb-2"><CardTitle>{mode as string}</CardTitle></CardHeader>
                  <CardContent className="pt-0 px-5 pb-1 text-gray-700">
                    <p className="text-sm text-gray-500 mb-2">Best For: {bestFor as string}</p>
                    <p>{desc as string}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-4">Switch modes on the fly; pay only for processed pixels.</p>
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

          {/* Final CTA */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to turn grainy pixels into crystal-clear assets?</h3>
            <div className="flex gap-3">
              <a href="/products/zencreator/content-creation/ai-upscaling" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try AI Upscaler</a>
              <a href="mailto:info@zencreator.pro?subject=Demo" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book a demo</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


