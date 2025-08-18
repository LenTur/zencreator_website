import React from 'react';
import { CreditCard, ShieldCheck, Rocket, Headset } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

export const AccountManagement: React.FC = () => {
  return (
    <PageLayout
      title="Account Management"
      description="Create and manage hundreds of AI personas from one dashboard. Store face & bio data, connect social accounts, set posting KPIs, monitor token health, and drill into content or analytics per character or category."
    >
      {/* Hero */}
      <div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
            <section className="pt-24 pb-[40px] text-center text-white w-full px-6">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Account Management<br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7BA1F8, #C084FC)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  className="text-2xl md:text-4xl"
                >
                  Your Control Tower for AI Personas
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                From first face upload to daily KPI tracking, everything about your creators’ lives in one, searchable workspace.
              </p>
              <div className="flex justify-center">
                <a href="/products/zencreator/account-management" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Add New Persona
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* How It Works */}
          <section className="py-[100px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                ['Create a Persona','Upload face & body refs, write a bio, set home location, choose language, and drop inspiration links. A complete “creator profile” ready for content modules.'],
                ['Connect Socials','OAuth-link Instagram, Threads, X, Facebook, TikTok, YouTube. API tokens stored; posting & analytics unlocked.'],
                ['Set Content Sources','Pick reference galleries or hashtags for remix, or let AI auto-source.'],
                ['Define KPI Goals','Daily/weekly targets for posts per network, follower growth, ER.'],
                ['Generate → Publish → Analyse','All content, post history, and stats flow back into the persona record.'],
              ].map(([title, desc], i) => (
                <div key={title as string} className="rounded-3xl p-6 border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-purple-600 font-black mb-2">{String(i+1).padStart(2,'0')}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{title as string}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{desc as string}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="py-[100px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {[
                ['Centralised Persona Profiles', (
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li><strong>Core Data</strong>: face ID, bio, pronouns, location, brand voice.</li>
                    <li><strong>Gallery</strong>: every generated photo, video, Reel, or Story auto-tagged and searchable.</li>
                    <li><strong>Post History</strong>: filter by network, date, status (scheduled / live / failed).</li>
                  </ul>
                )],
                ['Categories & Cohorts', (
                  <p className="text-white/80">Tag personas (e.g., Fitness, Fashion, Gen Z). Use tags to slice analytics or bulk-schedule themed campaigns.</p>
                )],
                ['Token Health & Alerts', (
                  <p className="text-white/80">Real-time badge shows Active, Needs Attention, or Expired. Email / Slack alert when a network requires re-login — click to refresh OAuth.</p>
                )],
                ['KPI Dashboard', (
                  <p className="text-white/80">Snapshot cards: daily posts, success vs. fail, posts by format. Traffic-light colours flag who’s on target.</p>
                )],
                ['Content Loop Integration', (
                  <p className="text-white/80">One click from profile to Generate Content. Direct push from Gallery to Publishing with persona metadata auto-injected.</p>
                )],
                ['Bulk Actions', (
                  <p className="text-white/80">Update bios, rotate profile pics, or refresh tokens for multiple personas at once. CSV import/export for enterprise migrations.</p>
                )],
                ['Security & Roles', (
                  <p className="text-white/80">Workspace-level RBAC and audit log for every profile edit or token refresh.</p>
                )]
              ].map(([title, content]) => (
                <div key={title as string} className="bg-[#0F172A] rounded-3xl p-8 border border-white/10 shadow-xl h-full">
                  <div className="bg-white rounded-2xl p-3 border border-gray-200 shadow-inner mb-6">
                    <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{title as string}</h4>
                  {content as React.ReactNode}
                </div>
              ))}
            </div>
          </section>

          {/* Perfect For */}
          <section className="py-[100px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">Perfect For Teams Who Need to…</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-4xl mx-auto">
              <li>Run tens to hundreds of AI influencers without losing track of assets or auth tokens.</li>
              <li>Monitor posting discipline vs. KPI goals at a glance.</li>
              <li>Quickly find and reuse content for ads, A/B tests, or cross-platform pushes.</li>
            </ul>
            <div className="mt-8 flex justify-center gap-4">
              <a href="/products/zencreator/account-management" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">Add New Persona</a>
            </div>
          </section>

          {/* Shared Advantages */}
          <section className="py-[100px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">Shared Advantages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {([
                ['Unified Billing','One invoice, usage broken down by product.', CreditCard],
                ['SOC-2 Infrastructure','Same secure cloud backbone for both platforms.', ShieldCheck],
                ['Rapid Roadmap','Monthly feature drops pushed automatically.', Rocket],
                ['Dedicated Success Team','Onboarding, best‑practice workshops, 24×7 priority support on enterprise tiers.', Headset],
              ] as const).map(([title, desc, Icon]) => (
                <div key={title} className="bg-[#0F172A] rounded-3xl p-7 border border-white/10 shadow-xl text-white">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-purple-700" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{title}</h4>
                  <p className="text-white/80 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* FAQ alone */}
      <FAQAccordion />

      {/* Separate Final CTA */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 pt-[40px] text-center border border-white/10">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to tame your creator fleet?</h3>
              <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"><strong>Spin up a new persona and see the control tower in action in under five minutes.</strong></p>
              <div className="flex flex-wrap gap-4 justify-center mb-2">
                <a href="/products/zencreator/account-management" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Add New Persona</a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Book a demo</a>
                <a href="mailto:info@zencreator.pro?subject=Account%20Management%20question" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};


