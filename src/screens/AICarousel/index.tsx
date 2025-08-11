import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const AICarousel: React.FC = () => {
  return (
    <PageLayout
      title="AI Carousel Generator — One Photo, Every Angle"
      description="Rapidly produce multiple viewpoints of the same subject for scroll-stopping carousels or 360° product galleries."
    >
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Lead */}
          <section className="py-6">
            <a href="/products/zencreator/content-creation/carousel-generation" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Carousel Generator</a>
          </section>

          {/* How It Works */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li><strong>Upload Source Images</strong> — One photo or a folder. Each image is queued automatically.</li>
              <li><strong>Set Amount of Variations</strong> — Choose 1–10 angles; virtual cameras are calculated automatically.</li>
              <li><strong>Enable Consistency Mode</strong> — Locks identity and lighting across frames.</li>
              <li><strong>Generate & Review</strong> — Pick favourites and send downstream: Upscale, Face Swap, Video, Publishing.</li>
            </ol>
          </section>

          {/* Key Features */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ['Multi-Angle Synthesis','Generates front, quarter, side, back, overhead or custom yaw/pitch without copy artefacts.'],
                ['Character & Product Consistency','Locks landmarks and textures; fabric/packaging colour consistency.'],
                ['Batch Mode','Processes hundreds of sources in a single queue.'],
                ['Seamless Pipeline','Upscale 4K, Face Swap, 360‑spin video, or publish the carousel — one click.'],
              ].map(([title,desc]) => (
                <Card key={title as string}>
                  <CardHeader className="p-5 pb-2"><CardTitle>{title as string}</CardTitle></CardHeader>
                  <CardContent className="pt-0 px-5 pb-5 text-gray-700">{desc as string}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Perfect For */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For Teams That Need to…</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Build Instagram/Threads carousels with multi‑angle visuals.</li>
              <li>Fill e‑commerce product cards (front/side/detail) without reshooting.</li>
              <li>Preserve an AI character’s look while rotating the camera.</li>
            </ul>
            <div className="mt-6">
              <a href="/products/zencreator/content-creation/carousel-generation" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Carousel Generator</a>
            </div>
          </section>

          {/* More Tools */}
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
                <p className="font-medium">What image formats are supported?</p>
                 <p>JPG, PNG, WebP up to 8K.</p>
              </div>
              <div>
                <p className="font-medium">How many angles can I generate?</p>
                 <p>From 1 to 10 per source image.</p>
              </div>
              <div>
                <p className="font-medium">Will the background stay the same?</p>
                 <p>Yes, the environment is preserved.</p>
              </div>
              <div>
                <p className="font-medium">Is batch processing really unlimited?</p>
                 <p>The system auto‑scales GPUs for queues from 1 to 1000+ sources.</p>
              </div>
              <div>
                <p className="font-medium">Can I turn a carousel into a video?</p>
                 <p>Yes — send to AI Video Generator after creation.</p>
              </div>
              <p>Still have questions? <a href="mailto:support@zencreator.pro" className="text-purple-600 hover:underline">Contact support →</a></p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to spin one image into every angle you need?</h3>
            <div className="flex gap-3">
              <a href="/products/zencreator/content-creation/carousel-generation" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try AI Carousel Generation</a>
              <a href="mailto:info@zencreator.pro?subject=Demo" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book a demo</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


