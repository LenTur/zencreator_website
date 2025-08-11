import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const AIPhotoShoot: React.FC = () => {
  return (
    <PageLayout
      title="AI Photo-Shoot Generator — Studio-Quality Sets Without the Studio"
      description="Upload two reference shots, pick your themes, and receive a perfectly consistent photo collection in minutes."
    >
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Lead */}
          <section className="py-6">
            <a href="/products/zencreator/content-creation/photo-shoot" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Photo-Shoot Generator</a>
          </section>

          {/* How It Works */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li><strong>Upload Face & Body</strong> — Drag one face photo and (optionally) a full-body shot. Locks identity and proportions.</li>
              <li><strong>Choose Shoot Specs</strong> — Select aspect ratio, gender flag, and set image counts per theme (Cozy, Studio, Work etc.).</li>
              <li><strong>Generate & Review</strong> — Photos render in parallel; grid UI lets you approve or reject. Rejected shots auto‑regenerate until quota is met.</li>
              <li><strong>Export or Pipeline</strong> — Download or send to Upscale, Face Swap, Video, or Publishing.</li>
            </ol>
          </section>

          {/* Key Features */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ['Theme Library at Scale','40+ shoot categories (Cozy, Studio, Beach, Work, Glamour, Holiday, Fitness…). Each theme holds 100–500 prompt templates.'],
                ['Ultra-Consistent Faces & Bodies','Identity is locked across images. Adaptive lighting & colour‑grade matching.'],
                ['Real-Time Moderation','Side-by-side zoom, hot‑key approvals.'],
                ['Flexible Resolution & Aspect Ratio','Presets for 1:1, 3:4, 9:16, banner, or custom up to 4K.'],
                ['Batch Generation','Spin up hundreds of images per run.'],
                ['Creator OS Integration','One‑click Upscale 4K, Face Swap, Video spin‑off, or direct multi‑platform posting.'],
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
              <li>Equip e‑commerce listings with uniform product‑model shots.</li>
              <li>Fill Instagram/Threads carousels with multi‑theme visuals.</li>
              <li>Produce lookbooks & ads without photographers and locations.</li>
            </ul>
            <div className="mt-6">
              <a href="/products/zencreator/content-creation/photo-shoot" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Photo-Shoot Generator</a>
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
                <p className="font-medium">What reference photos work best?</p>
                 <p>Front‑facing, well‑lit face (512px+), and ideally a full‑body shot in similar lighting.</p>
              </div>
              <div>
                <p className="font-medium">How many themes can I combine in one run?</p>
                 <p>Up to 10 themes per run; set any number of images per theme.</p>
              </div>
              <div>
                <p className="font-medium">Will the face stay identical in every shot?</p>
                 <p>Yes — identity locking preserves facial features and skin tone.</p>
              </div>
              <div>
                <p className="font-medium">Can I skip the body image?</p>
                 <p>Yes — if missing, the body is inferred from the face reference.</p>
              </div>
              <div>
                <p className="font-medium">What resolutions are supported?</p>
                 <p>Natively up to 4K.</p>
              </div>
              <div>
                <p className="font-medium">Is there a managed service?</p>
                 <p>Yes — we can fully handle generation, QA, and delivery.</p>
              </div>
              <p>Still have questions? <a href="mailto:support@zencreator.pro" className="text-purple-600 hover:underline">Contact support →</a></p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to turn two photos into an entire campaign?</h3>
            <div className="flex gap-3">
              <a href="/products/zencreator/content-creation/photo-shoot" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try AI Photo Shoot Generation</a>
              <a href="mailto:info@zencreator.pro?subject=Demo" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book a demo</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


