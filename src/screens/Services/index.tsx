import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const Services: React.FC = () => {
  return (
    <PageLayout
      title="ZenCreator Services"
      description="Explore ZenCreator’s full suite of AI-driven services — from virtual influencers and performance campaigns to scalable dating-profile and photo-shoot generation. One partner, limitless creative scale."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto">

          {/* Subpages */}
          <section className="py-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Subpages</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <a className="text-purple-600 hover:underline font-medium" href="https://www.notion.so/AI-Influencers-24398d8a3c9b805d9385c2f5008af7be?pvs=21" target="_blank" rel="noreferrer">AI Influencers</a>
              </li>
              <li>
                <a className="text-purple-600 hover:underline font-medium" href="https://www.notion.so/Dating-Profiles-Generation-24398d8a3c9b80ad8328d8c950e8d4af?pvs=21" target="_blank" rel="noreferrer">Dating Profiles Generation</a>
              </li>
              <li>
                <a className="text-purple-600 hover:underline font-medium" href="https://www.notion.so/Photo-Shoots-Generation-24398d8a3c9b80b884f5e399e7ee1a5b?pvs=21" target="_blank" rel="noreferrer">Photo Shoots Generation</a>
              </li>
            </ul>
          </section>

          {/* Lead */}
          <section className="pt-6 pb-10 border-t border-gray-200">
            <p className="text-lg text-gray-800 font-medium mb-6">
              AI solutions that create, scale and optimize visual content and influence — so you meet growth targets faster.
            </p>
            <div>
              <a href="#consult" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Book a 15-Minute Consultation</a>
            </div>
          </section>

          {/* 1 | AI Influencers */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="heading-3 text-gray-900 mb-2">1 | AI Influencers</h3>
            <p className="italic text-gray-700 mb-6">Launch ultra-realistic virtual talent, then drive measurable results across the entire funnel.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                ['Bespoke persona','Unique look, voice, back-story and values aligned to your brand brief.'],
                ['24/7 content engine','Daily photos, Reels, Shorts, Stories auto-generated and scheduled on major platforms.'],
                ['Data-driven growth loop','Real-time analytics refine hooks, hashtags and timing for max ER & follower velocity.'],
                ['Paid-media packs','Weekly A/B creative sets that keep CPMs low and ROAS high.'],
                ['Experiential add-ons','Livestream takeovers, virtual meet-and-greets, AR try-on filters.'],
                ['Brand-safe & exclusive','Human QA on every post; you own all IP and audience data.']
              ].map(([title,desc]) => (
                <Card key={title as string} className="h-full">
                  <CardHeader className="p-5 pb-3">
                    <CardTitle className="text-gray-900 text-base">{title as string}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-5 pb-5"><p className="text-gray-700">{desc as string}</p></CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <a href="/services/ai-influencers" className="text-purple-600 hover:underline font-medium">Learn more →</a>
            </div>
          </section>

          {/* 2 | Dating Profiles Generation */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="heading-3 text-gray-900 mb-2">2 | Dating Profiles Generation</h3>
            <p className="italic text-gray-700 mb-6">Fill new dating or social platforms with realistic, compliant and exclusive user profiles.</p>
            <ul className="space-y-3 text-gray-700">
              <li>3–50 consistent images + 1-10 short video per profile</li>
              <li>Gender, age (18-85 +), ethnicity and style fully customizable</li>
              <li>Manual QA on every asset; 20 K+ production-ready photos/month—scalable to 100 ×</li>
            </ul>
            <div className="mt-6">
              <a href="https://www.notion.so/services/dating-profiles" target="_blank" rel="noreferrer" className="text-purple-600 hover:underline font-medium">Explore the service →</a>
            </div>
          </section>

          {/* 3 | Photo Shoots Generation */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="heading-3 text-gray-900 mb-2">3 | Photo Shoots Generation</h3>
            <p className="italic text-gray-700 mb-6">Realistic or Studio-quality shoots from just two reference images — delivered in hours, not days.</p>
            <ul className="space-y-3 text-gray-700">
              <li>10 000 + themed prompts (selfie, casual, seasonal, profession, travel, etc.)</li>
              <li>Ultra-realistic 4K output, any ratio or format</li>
              <li>Human moderation for flawless consistency and brand safety</li>
            </ul>
            <div className="mt-6">
              <a href="/services/photo-shoots-generation" className="text-purple-600 hover:underline font-medium">See how it works →</a>
            </div>
          </section>

          {/* Why Brands Choose ZenCreator */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="heading-4 text-gray-900 mb-6">Why Brands Choose ZenCreator</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['Shrinking budgets & timelines','AI workflows slash production cost and lead time by > 80 %.'],
                ['Brand-safe scale','Human QA + policy filters ensure every asset meets compliance.'],
                ['Global campaign consistency','One source of truth for visuals across regions, languages & seasons.'],
                ['Performance accountability','Real-time analytics and ROAS dashboards baked into every engagement.']
              ].map(([title,desc]) => (
                <Card key={title as string} className="bg-white border border-gray-200">
                  <CardHeader className="p-5 pb-3"><CardTitle className="text-gray-900 text-base">{title as string}</CardTitle></CardHeader>
                  <CardContent className="pt-0 px-5 pb-5"><p className="text-gray-700">{desc as string}</p></CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section id="consult" className="py-12 border-t border-gray-200">
            <div className="bg-ink-900 text-white rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="heading-3 mb-3">Ready to Accelerate Your Content & Influence?</h3>
              <p className="text-white/80 mb-6">Tell us your growth goal — we’ll map the AI service stack that gets you there fastest.</p>
              <a href="mailto:info@zencreator.pro?subject=Consultation" className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Book a 15-Minute Consultation</a>
            </div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
};


