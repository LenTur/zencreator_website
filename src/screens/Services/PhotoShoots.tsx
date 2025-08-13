import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const PhotoShootsService: React.FC = () => {
  return (
    <PageLayout
      title="AI-Generated Photo Shoots"
      description="Professional-grade photo sets without studios, schedules, or travel."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* CTA */}
          <section className="py-6">
            <div className="flex flex-wrap gap-3">
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">Get a Quote</a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50">Book a Demo</a>
            </div>
          </section>

          {/* B2B Challenge */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="heading-2 text-gray-900 mb-4">The Real B2B Challenge</h2>
            <p className="text-gray-800 mb-6">Modern teams need large volumes of on-brand photos — fast and on budget. Traditional shoots can’t keep up when you must:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Refresh thousands of existing user or product images without re-booking talent and studios.</li>
              <li>Give every employee a matching headshot after a rebrand — no matter where they work in the world.</li>
              <li>Seed a new dating or social platform with realistic, diverse profiles to solve the cold-start problem.</li>
              <li>Launch multi-market campaigns calling for the same model in region-specific scenes, outfits, or languages.</li>
              <li>Maintain strict brand and compliance standards while scaling visual output 100×.</li>
            </ul>
          </section>

          {/* Turn 2 Photos */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="heading-2 text-gray-900 mb-6">Turn 2 Photos To Realistic High-Quality Photo Shoot</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['Manual QA', 'Every image passes a human review — no six-finger or warped props.'],
                ['Ultra-Realistic Output', '4K resolution, flawless lighting, realistic or studio-quality detail.'],
                ['50+ Themes', 'Selfies, casual, spicy, holiday, travel, professions, weddings and more.'],
                ['Custom Scenes', 'Provide mood boards or brand assets — we match them.'],
                ['Any Format & Size', 'Square, portrait, landscape, banner ratios; PNG or JPG.'],
                ['Exclusive License', 'Content is yours alone — never resold or recycled.'],
                ['Massive Scale', '20,000+ final-approved photos monthly today; ready to 100×.'],
              ].map(([t, d]) => (
                <Card key={t as string}>
                  <CardHeader className="p-5 pb-3"><CardTitle className="text-base text-gray-900">{t as string}</CardTitle></CardHeader>
                  <CardContent className="pt-0 px-5 pb-5"><CardDescription className="text-gray-700">{d as string}</CardDescription></CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Steps */}
          <section className="py-10 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Your Photo Shoot in Minutes — not Days</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-800">
              <li>Upload 2 Photos — Face + full-body (good details and lighting = best results).</li>
              <li>Pick Themes & Quantity — Select from 50+ categories or request custom scenes.</li>
              <li>We Generate & QA — AI + human reviewers craft perfectly consistent images.</li>
              <li>Download Favorites — Approve, export, and post anywhere.</li>
            </ol>
          </section>

          {/* Popular Theme Packs */}
          <section className="py-10 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Theme Packs</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Selfies - 521 prompt inside',
                'Casual / Street - 521 prompt inside',
                'Spicy (PG-13) - 521 prompt inside',
                'Beach & Pool - 521 prompt inside',
                'Professional Roles - 521 prompt inside',
                'Holidays (X-mas, Halloween) - 521 prompt inside',
                'Travel Landmarks - 521 prompt inside',
                'Glamour / Editorial - 521 prompt inside',
                'Wedding - 521 prompt inside',
                'And Many More - 521 prompt inside',
              ].map((t) => (
                <Card key={t}>
                  <CardContent className="p-4"><p className="text-gray-800">{t}</p></CardContent>
                </Card>
              ))}
            </div>
            <p className="text-gray-700 mt-4">Need something niche? We’ll create it.</p>
          </section>

          {/* How We Keep It Real */}
          <section className="py-10 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Keep It Real</h3>
            <ul className="space-y-2 text-gray-800">
              <li>• Face & Body Consistency Engine — identical features across every shot.</li>
              <li>• Detail-Guard Pipeline — AI detection + human eyes catch artifacts & misuse.</li>
              <li>• Resolution Up-Scaler — Clean 4K exports without pixelation.</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="py-10 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4 text-gray-800">
              <div>
                <p className="font-medium">What formats do you deliver?</p>
                <p className="text-gray-700">JPG or PNG up to 4K; custom ratios on request.</p>
              </div>
              <div>
                <p className="font-medium">Can I add brand props or logos?</p>
                <p className="text-gray-700">Yes — send reference assets and we’ll integrate them.</p>
              </div>
              <div>
                <p className="font-medium">Is 18+ content supported?</p>
                <p className="text-gray-700">Yes, opt-in only and always policy-compliant.</p>
              </div>
              <div>
                <p className="font-medium">How fast is the turnaround?</p>
                <p className="text-gray-700">Pilot pack (50–200 images) in ≤ 24 h; larger batches in 48–72 h.</p>
              </div>
              <p className="text-gray-700">More questions? <a className="text-blue-600 hover:underline" href="mailto:info@zencreator.pro">Talk to Support →</a></p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-10 border-t border-gray-200">
            <div className="bg-[#0F172A] text-white rounded-2xl p-8 border border-white/10 text-center">
              <h3 className="heading-3 mb-3">Ready to Shoot Your Next Campaign — Virtually?</h3>
              <p className="text-white/80 mb-6">Cut costs, skip logistics, and receive studio-quality images today.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="mailto:info@zencreator.pro?subject=Start%20Photo%20Shoots%20Project" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">Start a Project</a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20">Book a 15-Minute Demo</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


