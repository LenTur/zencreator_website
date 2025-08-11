import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const AIGenerationPrompt: React.FC = () => {
  return (
    <PageLayout
      title="AI Image Generator — Prompt-to-Picture"
      description="Flux-level realism or SDXL photography, with optional uncensored output and LoRa body tuning."
    >
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Lead */}
          <section className="py-6">
            <a href="/products/zencreator/content-creation/ai-generation-prompt" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Image Generator</a>
          </section>

          {/* How It Works */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Pick Your Model</strong> — <strong>Flux</strong> for cinematic detail · <strong>SDXL</strong> for photographic realism. Engine optimised for your style.
              </li>
              <li>
                <strong>Set Options</strong> — Toggle <strong>Uncensored</strong> · Attach <strong>LoRa modifiers</strong> (e.g., athletic abs, curvy silhouette). Rules & weights applied.
              </li>
              <li>
                <strong>Type an Idea</strong> — Write a few keywords or a full sentence. <strong>Magic Prompt</strong> expands it into a pro-level prompt automatically.
              </li>
              <li>
                <strong>Generate & Iterate</strong> — Up to 8 images per run; lock seed for series consistency. Save, upscale, swap faces, or publish directly.
              </li>
            </ol>
          </section>

          {/* Key Features */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ['Dual-Model Engine','Flux — hyper-real textures, dramatic lighting, deep colour depth. SDXL — true-to-life skin tones and soft bokeh, ideal for portraits.'],
                ['Censorship Control','Safe-default mode for mainstream platforms. Uncensored toggle for 18+ or artistic work (policy-compliant storage only).'],
                ['LoRa Body Modifiers','Emphasise physique traits — broad shoulders, toned abs, fuller curves — without breaking anatomy.'],
                ['Magic Prompt','AI copywriter expands simple keywords into detailed, weighted prompts.'],
                ['Consistency Mode','Fixed seed + reference embedding keeps the same identity across shots.'],
                ['Batch Friendly','Generate hundreds of images in parallel — route to Upscale, Face Swap or Publishing automatically.'],
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
              <li><strong>Prototype ad creatives</strong> before committing to a photo shoot.</li>
              <li><strong>Populate dating or social profiles</strong> with consistent, realistic imagery.</li>
              <li><strong>Produce concept art</strong> for fashion, gaming, or product visuals — fast.</li>
            </ul>
            <div className="mt-6">
              <a href="/products/zencreator/content-creation/ai-generation-prompt" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Image Generator</a>
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
                <p className="font-medium">Which model should I choose?</p>
                <p>Use Flux for dramatic, detail-rich shots; SDXL for natural photography. You can swap instantly to compare.</p>
              </div>
              <div>
                <p className="font-medium">What is LoRa?</p>
                <p>Low-Rank Adaptation files that fine-tune style or anatomy. Upload your own or pick from presets.</p>
              </div>
              <div>
                <p className="font-medium">Does uncensored mode violate platform policies?</p>
                <p>Images remain in your private workspace. You choose where and how to publish; we provide compliance guidelines.</p>
              </div>
              <div>
                <p className="font-medium">How does Magic Prompt work?</p>
                <p>A language model expands your keywords into a detailed, weighted prompt — no prompt engineering skills required.</p>
              </div>
              <div>
                <p className="font-medium">Can I ensure the same face appears in every shot?</p>
                <p>Yes — enable Consistency Mode and lock the seed; the generator will preserve core facial features across outputs.</p>
              </div>
              <div>
                <p className="font-medium">What’s the max resolution?</p>
                <p>Initial renders up to 1024×1536; one-click hand-off to Upscale for 4K output.</p>
              </div>
              <p>Still have questions? <a href="mailto:support@zencreator.pro" className="text-purple-600 hover:underline">Contact support →</a></p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to turn three words into a full photo set?</h3>
            <div className="flex gap-3">
              <a href="/products/zencreator/content-creation/ai-generation-prompt" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try AI Generation by Prompt</a>
              <a href="mailto:info@zencreator.pro?subject=Demo" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book a demo</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


