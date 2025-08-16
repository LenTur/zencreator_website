import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export const AIFaceGeneration = () => {
  const faqData = [
    {
      question: "How many faces do I get per generation?",
      answer: "Each generation returns four high-resolution portraits."
    },
    {
      question: "What parameters can I control?",
      answer: "Gender, age, ethnicity, body type, eye colour, hair colour & style, beard style & colour, makeup."
    },
    {
      question: "Is commercial use allowed?",
      answer: "All faces are cleared for commercial projects; you own the license."
    }
  ];

  return (
    <PageLayout 
      title="AI Face Generator — Custom Faces in Seconds" 
      description="Dial in the look you need and receive four photorealistic portraits per run — ready for campaigns, avatars, or creative mock-ups."
    >
      <div className="container mx-auto px-4 pb-20" style={{ paddingTop: '140px' }}>
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section className="pt-24 pb-[40px] text-center">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              AI Face Generator — Custom Faces in Seconds
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              <strong>Dial in the look you need and receive four photorealistic portraits per run — ready for campaigns, avatars, or creative mock-ups.</strong>
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200">
                Try Face Generator
              </a>
            </div>
            <p className="text-gray-500 mt-8 italic">
              *(Screenshot placeholders: left—task list with 4-image sets • right—"Generation Settings" panel)*
            </p>
          </section>

          {/* How It Works */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Set Your Parameters</strong> — Gender, age, ethnicity, body type, eye & hair colour, style details — or click Surprise Me.</li>
              <li><strong>Start Generation</strong> — One click queues the job on our GPUs. <strong>4 unique faces</strong> rendered in ~15 sec.</li>
              <li><strong>Review & Star</strong> — Accept the set or regenerate. Keep what you love, discard the rest.</li>
              <li><strong>Send Downstream</strong> — Route favourites to Upscale, Face Swap, Video, or Publishing. Assets arrive pre-tagged.</li>
            </ol>
          </section>

          {/* Key Features */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ['Fine-Grained Controls','Gender, age bands, ethnic palette, body type, beard & hair style, eye colour, makeup.'],
                ['“Surprise Me” Mode','One tap randomises all parameters for fresh inspiration.'],
                ['Four-Up Output','Every run returns 4 distinct faces — great for A/B testing and quick decisions.'],
                ['Seamless Pipeline','Auto-hand-off to Upscale (4K), Face Swap, Video Generator, or multi-platform Publishing.'],
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Built For Teams Who Need to…</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Prototype ad creatives or app avatars without photo shoots.</li>
              <li>Populate dating/social platforms with diverse, realistic profiles.</li>
              <li>Generate brand characters that stay consistent across images and video.</li>
            </ul>
            <div className="mt-6">
              <a href="/products/zencreator/content-creation/ai-face-generation" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Face Generator</a>
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
                <p className="font-medium">How many faces do I get per generation?</p>
                <p>Each generation returns four high-resolution portraits.</p>
              </div>
              <div>
                <p className="font-medium">What parameters can I control?</p>
                <p>Gender, age, ethnicity, body type, eye colour, hair colour & style, beard style & colour, makeup.</p>
              </div>
              <div>
                <p className="font-medium">Is commercial use allowed?</p>
                <p>All faces are cleared for commercial projects; you own the license.</p>
              </div>
              <p>Still have questions? <a href="mailto:support@zencreator.pro" className="text-purple-600 hover:underline">Contact support →</a></p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to meet your next virtual model?</h3>
            <div className="flex gap-3">
              <a href="/products/zencreator/content-creation/ai-face-generation" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try AI Face Generator</a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book a demo</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};
