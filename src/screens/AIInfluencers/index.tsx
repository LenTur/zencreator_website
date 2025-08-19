import React from 'react';
import { Users, BarChart3, Target, Play, CheckCircle, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';

export const AIInfluencers: React.FC = () => {
  return (
    <PageLayout
      title="AI Influencers — We Create the Future of Influence"
      description="We create and manage virtual influencers that audiences love. AI-driven, ultra-realistic, and engagement-focused."
    >
      {/* Hero */}
      <div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
            <section className="pt-24 pb-[40px] text-center text-white w-full px-6">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                AI Influencers
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7BA1F8, #C084FC)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  className="text-2xl md:text-4xl"
                >
                  We Create the Future of Influence
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                We create and manage virtual influencers that audiences love. AI-driven, ultra-realistic, and engagement-focused.
              </p>
              <div className="flex gap-4 justify-center">
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Book a Demo
                </a>
                <a href="mailto:info@zencreator.pro?subject=AI%20Influencers%20Proposal" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200">
                  Get a Proposal
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Research Strategy Execution */}
          <section className="py-[150px] bg-white">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
              Research → Strategy → Execution
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: '01',
                  title: 'Market Analysis',
                  description: 'We analyze your market, competitors, audience behavior, and trending formats using our proprietary tools to understand what works.',
                  icon: BarChart3
                },
                {
                  number: '02', 
                  title: 'Strategic Planning',
                  description: '4–8 week content strategy with topics, hook formulas, posting cadence, and brand integration based on data insights.',
                  icon: Target
                },
                {
                  number: '03',
                  title: 'Multi-Platform Publishing', 
                  description: 'Auto-posting across Instagram, Threads, X (Twitter), Facebook, TikTok, and YouTube Shorts with smart scheduling.',
                  icon: Play
                }
              ].map((item) => (
                <div key={item.number} className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-4xl font-black text-purple-600 mb-4">{item.number}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Create your unique characters */}
          <section className="py-[150px] bg-white">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
              Create your unique characters
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                ['Grandma Brand-Story', 'Warm charisma + home tips; persuasive household product integrations.'],
                ['Brand Ambassador', 'A role model for your niche — from beauty to fintech. Native ads and product reviews.'],
                ['Gamer/Streamer', 'Gameplay, challenges, integrations with games and peripherals; creative video ads.'],
              ].map(([title, description]) => (
                <div key={title as string} className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{title as string}</h3>
                    <p className="text-gray-600 leading-relaxed">{description as string}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 border border-purple-200 max-w-4xl mx-auto">
                <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                  Video samples with product placement are included in the pilot (per brief).
                </p>
              </div>
            </div>
          </section>

          {/* Our AI Influencers */}
          <section className="py-[150px] bg-white">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Our AI Influencers</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ['Mila', 'Based in Barcelona, lifestyle/fitness, 150K followers.'],
                ['Kenji', 'Tokyo, techno-art and gadgets, 90K followers.'],
                ['Ava', 'London, beauty/fashion, 230K followers.'],
                ['Leo', 'Berlin, music/events, 120K followers.'],
                ['Sofia', 'Milan, luxury/editorial, 175K followers.'],
                ['Noah', 'New York, streetwear/skate, 110K followers.'],
              ].map(([name, description]) => (
                <div key={name as string} className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{name as string}</h3>
                    <p className="text-gray-600 leading-relaxed">{description as string}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Publishing everywhere */}
          <section className="py-[150px] bg-gray-50">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Publish to all social networks</h2>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Auto‑posting and a unified calendar across Instagram, Threads, X (Twitter), Facebook, TikTok, and YouTube Shorts. Supports Now / Schedule / Smart Publish.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What we can run for you */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">What we can run for you</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                ['Full Funnel Influencer Marketing','/services/full-funnel-marketing','Comprehensive AI-powered strategies that drive engagement, conversions, and long-term brand impact.'],
                ['Performance Marketing','/services/performance-marketing','We turn AI influencers into a measurable revenue channel, optimizing for ROI, CPA, and LTV.'],
                ['Experiential Influencer Marketing','/services/experiential-marketing','AI-driven brand activations and digital experiences designed for maximum interaction.'],
                ['Creative Influencer Projects','/services/creative-projects','Storytelling, collaborations, and interactive campaigns that break engagement records.'],
                ['Brand Ambassador Programs','/services/brand-ambassador','Long-term programs that build credibility, loyalty, and consistent engagement.'],
              ].map(([title, href, description]) => (
                <a key={title as string} href={href as string} className="block group">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                    <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-bold text-gray-900">{title as string}</h4>
                        <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{description as string}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Final CTA */}
      <section className="py-[150px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 text-center border border-white/10">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to launch your first AI Influencer?</h3>
              <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">From brief to first posts — in one week.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Book a Demo</a>
                <a href="mailto:info@zencreator.pro?subject=Start%20AI%20Influencer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Start a Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
