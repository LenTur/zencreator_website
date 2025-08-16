import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const AIGenerationReference: React.FC = () => {
  return (
    <PageLayout
      title="AI Image Generator — Reference-to-Render"
      description="Use a single photo as inspiration to create an entire, on-brand series — no copy-paste, just consistent re-creations."
    >
      <div className="container mx-auto px-4 pb-20" style={{ paddingTop: '140px' }}>
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section className="pt-24 pb-[40px] text-center">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              AI Image Generator — Reference-to-Render
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              <strong>Use a single photo as inspiration to create an entire, on-brand series — no copy-paste, just consistent re-creations.</strong>
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200">
                Try Generator by Reference
              </a>
            </div>
            <p className="text-gray-500 mt-8 italic">
              *(Interactive gallery: reference photo ➜ one variant outputs shown side-by-side with other face)*
            </p>
          </section>

          {/* How It Works */}
          <section className="mt-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">How It Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-black text-purple-600 mb-6">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pick Your Engine</h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Flux</strong> for dramatic cinematic detail · <strong>SDXL</strong> for lifelike photography. Model optimised for your style preference.
                </p>
              </div>
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-black text-purple-600 mb-6">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Drop a Reference Image</h3>
                <p className="text-gray-600 leading-relaxed">
                  Any JPG/PNG up to 8 K. Extracts pose, palette, and core identity cues.
                </p>
              </div>
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-black text-purple-600 mb-6">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Set Options</h3>
                <p className="text-gray-600 leading-relaxed">
                  Toggle <strong>Uncensored</strong> · Attach <strong>LoRa modifiers</strong> (e.g., toned abs, fuller curves). Personalises physique & content policy level.
                </p>
              </div>
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-black text-purple-600 mb-6">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Adjust Creativity Slider</h3>
                <p className="text-gray-600 leading-relaxed">
                  0% keeps composition close; 100% goes fully imaginative. Control how far we diverge from the reference.
                </p>
              </div>
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="text-4xl font-black text-purple-600 mb-6">5</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Generate & Auto-Pipeline</h3>
                <p className="text-gray-600 leading-relaxed">
                  Up to 8 variants per run. Results pass through Upscale + optional Face Swap, ready for one-click publishing.
                </p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ['Consistent Re-Creation, Not Copying','Captures essence, pose, and palette while generating brand-new pixels — no direct duplication.'],
                ['Dual-Model Choice','Flux — cinematic; SDXL — DSLR natural look.'],
                ['Censorship Control','Safe-default for mainstream; Uncensored for mature, policy-compliant workspaces.'],
                ['LoRa Body Enhancement','Emphasise physique traits; mix multiple LoRas with weight sliders.'],
                ['Seamless Pipeline','Auto-pass to Upscale 4K, Face Swap, and Publishing.'],
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
              <li>Extend photo shoots without re-booking talent or locations.</li>
              <li>Keep an AI influencer’s look consistent across new scenes.</li>
              <li>Rapidly generate variant ads that echo a hero shot for different demographics.</li>
            </ul>
            <div className="mt-6">
              <a href="/products/zencreator/content-creation/ai-generation-reference" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Generator by Reference</a>
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
                <p className="font-medium">Does this copy the original photo?</p>
                <p>No. The model analyses pose, colour, and ambience, then re-creates a new image from scratch.</p>
              </div>
              <div>
                <p className="font-medium">Which model should I choose — Flux or SDXL?</p>
                <p>Flux excels at cinematic, hyper-detailed visuals; SDXL delivers true-to-life photography.</p>
              </div>
              <div>
                <p className="font-medium">Can I enable uncensored outputs?</p>
                <p>Yes. Toggle Uncensored in a private workspace; you control where to publish.</p>
              </div>
              <div>
                <p className="font-medium">What is a LoRa modifier?</p>
                <p>Lightweight file to fine-tune style or anatomy (e.g., athletic abs, curvy silhouette).</p>
              </div>
              <div>
                <p className="font-medium">How do I keep the same face in every variant?</p>
                <p>Enable Consistency Mode and lock seed; facial landmarks are preserved.</p>
              </div>
              <div>
                <p className="font-medium">What happens after generation?</p>
                <p>Images flow to Upscale (4K), Face Swap, then Publishing for one-click posting.</p>
              </div>
              <p>Still have questions? <a href="mailto:support@zencreator.pro" className="text-purple-600 hover:underline">Contact support →</a></p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to turn one reference shot into a full campaign?</h3>
            <div className="flex gap-3">
              <a href="/products/zencreator/content-creation/ai-generation-reference" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try AI Generation by Reference</a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book a demo</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


