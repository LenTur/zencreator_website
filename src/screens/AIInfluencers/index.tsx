import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const AIInfluencers: React.FC = () => {
  return (
    <PageLayout
      title="AI-Powered Virtual Influencers"
      description="Launch ultra-realistic virtual influencers in one week. Character design, AI-generated content, 24/7 publishing & data-driven growth — outperforming 94% of human creators."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Lead CTA */}
          <section className="py-6">
            <div className="flex flex-wrap gap-3">
              <a href="mailto:info@zencreator.pro?subject=AI%20Influencers%20Demo" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">Book a Demo</a>
              <a href="mailto:info@zencreator.pro?subject=AI%20Influencers%20Proposal" className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50">Get a Proposal</a>
            </div>
          </section>

          {/* Create your unique characters */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="heading-2 text-gray-900 mb-6">Create your unique characters</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                ['Grandma Brand-Story', 'Warm charisma + home tips; persuasive household product integrations.'],
                ['Brand Ambassador', 'A role model for your niche — from beauty to fintech. Native ads and product reviews.'],
                ['Gamer/Streamer', 'Gameplay, challenges, integrations with games and peripherals; creative video ads.'],
              ].map(([t, d]) => (
                <Card key={t as string}>
                  <CardHeader className="p-5 pb-3"><CardTitle className="text-base text-gray-900">{t as string}</CardTitle></CardHeader>
                  <CardContent className="pt-0 px-5 pb-5"><CardDescription className="text-gray-700">{d as string}</CardDescription></CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-3">Video samples with product placement are included in the pilot (per brief).</p>
          </section>

          {/* Our AI Influencers (portfolio short) */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="heading-2 text-gray-900 mb-6">Our AI Influencers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                ['Mila', 'Based in Barcelona, lifestyle/fitness, 150K followers.'],
                ['Kenji', 'Tokyo, techno-art and gadgets, 90K followers.'],
                ['Ava', 'London, beauty/fashion, 230K followers.'],
                ['Leo', 'Berlin, music/events, 120K followers.'],
                ['Sofia', 'Milan, luxury/editorial, 175K followers.'],
                ['Noah', 'New York, streetwear/skate, 110K followers.'],
              ].map(([name, desc]) => (
                <Card key={name as string} className="h-full">
                  <CardHeader className="p-5 pb-3"><CardTitle className="text-base text-gray-900">{name as string}</CardTitle></CardHeader>
                  <CardContent className="pt-0 px-5 pb-5"><CardDescription className="text-gray-700">{desc as string}</CardDescription></CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Publishing everywhere */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="heading-2 text-gray-900 mb-6">Publish to all social networks</h2>
            <p className="text-gray-800 mb-4">Auto‑posting and a unified calendar across Instagram, Threads, X (Twitter), Facebook, TikTok, and YouTube Shorts. Supports Now / Schedule / Smart Publish.</p>
          </section>

          {/* Research & Strategy */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="heading-2 text-gray-900 mb-4">Research → Strategy → Execution</h2>
            <ul className="space-y-2 text-gray-800">
              <li>• Market and competitive analysis by niche, audience, and formats.</li>
              <li>• 4–8 week content strategy with topics, hook formulas, and posting cadence.</li>
              <li>• Weekly reports, creative A/B tests, and data‑driven adjustments.</li>
            </ul>
          </section>

          {/* Subpages */}
          <section className="py-10 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">What we can run for you</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['Full Funnel Influencer Marketing','/services/full-funnel-marketing','Comprehensive AI-powered strategies that drive engagement, conversions, and long-term brand impact.'],
                ['Performance Marketing','/services/performance-marketing','We turn AI influencers into a measurable revenue channel, optimizing for ROI, CPA, and LTV.'],
                ['Experiential Influencer Marketing','/services/experiential-marketing','AI-driven brand activations and digital experiences designed for maximum interaction.'],
                ['Creative Influencer Projects','/services/creative-projects','Storytelling, collaborations, and interactive campaigns that break engagement records.'],
                ['Brand Ambassador Programs','/services/brand-ambassador','Long-term programs that build credibility, loyalty, and consistent engagement.'],
              ].map(([t, href, d]) => (
                <a key={t as string} href={href as string}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader className="p-5 pb-3"><CardTitle className="text-base text-gray-900">{t as string}</CardTitle></CardHeader>
                    <CardContent className="pt-0 px-5 pb-5"><CardDescription className="text-gray-700">{d as string}</CardDescription></CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-10 border-t border-gray-200">
            <div className="bg-[#0F172A] text-white rounded-2xl p-8 border border-white/10 text-center">
              <h3 className="heading-3 mb-3">Ready to launch your first AI Influencer?</h3>
              <p className="text-white/80 mb-6">From brief to first posts — in one week.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="mailto:info@zencreator.pro?subject=Start%20AI%20Influencer" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">Start a Project</a>
                <a href="mailto:info@zencreator.pro?subject=Book%20a%20Demo" className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20">Book a 15-Minute Demo</a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
};
