import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const AIInfluencers: React.FC = () => {
  return (
    <PageLayout
      title="We Create the Future of Influence"
      description="We create and manage virtual influencers that audiences love. AI-driven, ultra-realistic, and engagement-focused."
    >
      {/* Hero Section */}
      <section className="py-[150px] text-center" style={{ paddingTop: '140px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              We Create the Future of Influence
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              We create and manage virtual influencers that audiences love. AI-driven, ultra-realistic, and engagement-focused.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200">
                Book a Demo
              </a>
              <a href="mailto:info@zencreator.pro?subject=AI%20Influencers%20Proposal" className="border border-gray-300 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200">
                Get a Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Market Research & Strategy */}
          <section className="mt-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
              Research → Strategy → Execution
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-black text-purple-600 mb-6">01</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Market Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  We analyze your market, competitors, audience behavior, and trending formats using our proprietary tools to understand what works.
                </p>
              </div>
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-black text-purple-600 mb-6">02</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                  4–8 week content strategy with topics, hook formulas, posting cadence, and brand integration based on data insights.
                </p>
              </div>
              <div className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-black text-purple-600 mb-6">03</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Platform Publishing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Auto-posting across Instagram, Threads, X (Twitter), Facebook, TikTok, and YouTube Shorts with smart scheduling.
                </p>
              </div>
            </div>
          </section>

          {/* Create your unique characters */}
          <section className="mt-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
              Create your unique characters
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                ['Grandma Brand-Story', 'Warm charisma + home tips; persuasive household product integrations.'],
                ['Brand Ambassador', 'A role model for your niche — from beauty to fintech. Native ads and product reviews.'],
                ['Gamer/Streamer', 'Gameplay, challenges, integrations with games and peripherals; creative video ads.'],
              ].map(([t, d]) => (
                <div key={t as string} className="rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t as string}</h3>
                  <p className="text-gray-600 leading-relaxed">{d as string}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8 text-lg">
              Video samples with product placement are included in the pilot (per brief).
            </p>
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
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20">Book a 15-Minute Demo</a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
};
