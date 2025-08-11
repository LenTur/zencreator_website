import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const AIFaceSwapping: React.FC = () => {
  return (
    <PageLayout
      title="AI Face Swap"
      description="Swap any face onto hundreds of photos or hours of video in seconds. Pixel-perfect detection, skin-tone matching, bulk processing, and one-click publishing — built into ZenCreator."
    >
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Lead */}
          <section className="py-6">
            <p className="text-gray-700 mb-4"><strong>Ultra-realistic face replacement for images & video — at production scale.</strong></p>
            <div className="flex gap-3">
              <a href="/products/zencreator/content-creation/ai-face-swapping" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Face Swap</a>
              <a href="https://www.pykaso.ai/ai-tools/ai-face-swap" target="_blank" rel="noreferrer" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Prototype</a>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Choose a Target Face</strong> — Upload a reference photo or pick a saved AI character.</li>
              <li><strong>Add Source Media</strong> — Drop in any photo or video (MP4, MOV, JPG, PNG).</li>
              <li><strong>Launch Bulk Swap</strong> — Click Face Swap — process hundreds of files in parallel.</li>
            </ol>
          </section>

          {/* Key Features */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ['Accurate in Any Scene','Detects faces even when blurred, masked, or partially covered. Supports complex angles and group shots.'],
                ['Human-Level Skin Detail','AI-generated pores, freckles, micro-shadows with automatic skin-tone transfer.'],
                ['Facial Consistency','Keeps the same eyes, nose, and jawline across every frame.'],
                ['Context-Aware Lighting','Matches ambient light, shadows, and color grade.'],
                ['Bulk Processing at Speed','Swap hundreds of photos or multi-hour videos in one run; pipe to Publishing.'],
              ].map(([title,desc]) => (
                <Card key={title as string}>
                  <CardHeader className="p-5 pb-2"><CardTitle>{title as string}</CardTitle></CardHeader>
                  <CardContent className="pt-0 px-5 pb-5 text-gray-700">{desc as string}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Built For */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Built For Creators Who Need to:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Produce faceless or avatar-based content at scale.</li>
              <li>Maintain consistent AI influencer personas across campaigns.</li>
              <li>Generate viral, one-of-a-kind visuals without studio shoots.</li>
            </ul>
            <div className="mt-6">
              <a href="/products/zencreator/content-creation/ai-face-swapping" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Face Swap</a>
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
                <p className="font-medium">What is AI Face Swap?</p>
                <p>A ZenCreator module that uses deep-learning facial mapping to replace a face in photos or video while preserving lighting, expression, and resolution.</p>
              </div>
              <div>
                <p className="font-medium">Does it work on blurry or pixelated footage?</p>
                <p>Yes — trained on low-quality inputs and stabilises the face before swapping.</p>
              </div>
              <div>
                <p className="font-medium">Can I swap faces in bulk?</p>
                <p>Absolutely. Upload hundreds of photos; processing runs in parallel.</p>
              </div>
              <div>
                <p className="font-medium">How long does a swap take?</p>
                <p>About 100 HD images in under 90 seconds; 1 min of 1080p video in ~30 seconds on a standard GPU instance.</p>
              </div>
              <div>
                <p className="font-medium">Can I swap multiple faces in one scene?</p>
                <p>Multi-face mode lets you map different target faces to different people in a single frame.</p>
              </div>
              <div>
                <p className="font-medium">What reference photo works best?</p>
                <p>Front-facing, well-lit, minimum 512×512 px. More angles = better fidelity on dynamic video.</p>
              </div>
              <p>Still have questions? <a href="mailto:support@zencreator.pro" className="text-purple-600 hover:underline">Contact support →</a></p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to see flawless swaps in action?</h3>
            <div className="flex gap-3">
              <a href="/products/zencreator/content-creation/ai-face-swapping" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try AI Face Swapper</a>
              <a href="mailto:info@zencreator.pro?subject=Demo" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book a demo</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


