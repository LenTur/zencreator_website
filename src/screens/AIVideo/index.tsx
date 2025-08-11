import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const AIVideo: React.FC = () => {
  return (
    <PageLayout
      title="AI Video Generator — From Image to Motion"
      description="Cinematic, social-ready videos — no camera, no render farm, no waiting."
    >
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Lead */}
          <section className="py-6">
            <a href="/products/zencreator/content-creation/video-generation" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Video Generator</a>
          </section>

          {/* How It Works */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li><strong>Choose Your Engine</strong> — Kling 1.6 (fast, stylised) · Kling 2.0 (photoreal) · WAN (uncensored, artistic).</li>
              <li><strong>Input a Prompt or Reference</strong> — Describe the scene and add images. The system infers motion, style, and rhythm.</li>
              <li><strong>Set Length & Quality</strong> — 5–10s · HD. Fine‑grained control over clip dynamics.</li>
              <li><strong>Launch (Batch-Mode Optional)</strong> — Queue one clip or thousands. Real‑time progress and cost.</li>
              <li><strong>Auto-Pipeline</strong> — Results pass to Upscale, Face Swap, Publishing; one click to Reels/TikTok/Shorts.</li>
            </ol>
          </section>

          {/* Key Features */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ['Three Specialised Engines','Kling 1.6 — fast stylised drafts; Kling 2.0 — photorealism; WAN — 18+ and art stories.'],
                ['Batch Generation at Scale','Generate hundreds and thousands of clips in parallel.'],
                ['Consistency Toolkit','Locked seed and character embeddings; Face Swap integration.'],
                ['Context-Aware Motion & Lighting','Camera moves, highlights, and shadow sync — without manual animation.'],
                ['Seamless Pipeline','Upscale 4K, Thumbnail Carousel, Social Scheduler.'],
              ].map(([title,desc]) => (
                <Card key={title as string}>
                  <CardHeader className="p-5 pb-2"><CardTitle>{title as string}</CardTitle></CardHeader>
                  <CardContent className="pt-0 px-5 pb-5 text-gray-700">{desc as string}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Ideal For */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ideal For Teams That Need to…</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Ship ad creatives weekly — no production house required.</li>
              <li>Feed TikTok/Reels/Shorts with constant video content.</li>
              <li>Extend static campaigns into motion without losing identity.</li>
            </ul>
            <div className="mt-6">
              <a href="/products/zencreator/content-creation/video-generation" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Video Generator</a>
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
                <p className="font-medium">Which engine is best for me?</p>
                <p>Kling 1.6 — stylised drafts; Kling 2.0 — realism; WAN — experimental and 18+.</p>
              </div>
              <div>
                <p className="font-medium">How long can a clip be?</p>
                <p>10–20 seconds today; longer — coming soon.</p>
              </div>
              <div>
                <p className="font-medium">Can I batch-generate 1 000 clips?</p>
                <p>Yes. The queue scales GPUs automatically; pay only for runtime.</p>
              </div>
              <div>
                <p className="font-medium">What resolutions are supported?</p>
                <p>Base 720p.</p>
              </div>
              <p>Still have questions? <a href="mailto:support@zencreator.pro" className="text-purple-600 hover:underline">Contact support →</a></p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to turn prompts into scroll-stopping videos?</h3>
            <div className="flex gap-3">
              <a href="/products/zencreator/content-creation/video-generation" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try AI Video Generator</a>
              <a href="mailto:info@zencreator.pro?subject=Demo" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book a demo</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


