import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

export const AccountManagement: React.FC = () => {
  return (
    <PageLayout
      title="Account Management"
      description="Create and manage hundreds of AI personas from one dashboard. Store face & bio data, connect social accounts, set posting KPIs, monitor token health, and drill into content or analytics per character or category."
    >
      {/* Hero */}
      <div className="bg-gray-900 pb-20" style={{ paddingTop: '140px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <section className="pt-24 pb-[40px] text-center">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
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
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">How It Works</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-800 max-w-4xl mx-auto">
              <li><strong>Create a Persona</strong> — Upload face & body refs, write a bio, set home location, choose language, and drop inspiration links. A complete “creator profile” ready for content modules.</li>
              <li><strong>Connect Socials</strong> — OAuth-link Instagram, Threads, X, Facebook, TikTok, YouTube. API tokens stored; posting & analytics unlocked.</li>
              <li><strong>Set Content Sources</strong> — Pick reference galleries or hashtags for remix, or let AI auto-source.</li>
              <li><strong>Define KPI Goals</strong> — Daily/weekly targets for posts per network, follower growth, ER.</li>
              <li><strong>Generate → Publish → Analyse</strong> — All content, post history, and stats flow back into the persona record.</li>
            </ol>
          </section>

          {/* Key Features */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {[
                ['Centralised Persona Profiles', (
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Core Data</strong>: face ID, bio, pronouns, location, brand voice.</li>
                    <li><strong>Gallery</strong>: every generated photo, video, Reel, or Story auto-tagged and searchable.</li>
                    <li><strong>Post History</strong>: filter by network, date, status (scheduled / live / failed).</li>
                  </ul>
                )],
                ['Categories & Cohorts', (
                  <p className="text-gray-700">Tag personas (e.g., Fitness, Fashion, Gen Z). Use tags to slice analytics or bulk-schedule themed campaigns.</p>
                )],
                ['Token Health & Alerts', (
                  <p className="text-gray-700">Real-time badge shows Active, Needs Attention, or Expired. Email / Slack alert when a network requires re-login — click to refresh OAuth.</p>
                )],
                ['KPI Dashboard', (
                  <p className="text-gray-700">Snapshot cards: daily posts, success vs. fail, posts by format. Traffic-light colours flag who’s on target.</p>
                )],
                ['Content Loop Integration', (
                  <p className="text-gray-700">One click from profile to Generate Content. Direct push from Gallery to Publishing with persona metadata auto-injected.</p>
                )],
                ['Bulk Actions', (
                  <p className="text-gray-700">Update bios, rotate profile pics, or refresh tokens for multiple personas at once. CSV import/export for enterprise migrations.</p>
                )],
                ['Security & Roles', (
                  <p className="text-gray-700">Workspace-level RBAC and audit log for every profile edit or token refresh.</p>
                )]
              ].map(([title, content]) => (
                <div key={title as string} className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{title as string}</h4>
                    {content as React.ReactNode}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Perfect For */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Perfect For Teams Who Need to…</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-4xl mx-auto">
              <li>Run tens to hundreds of AI influencers without losing track of assets or auth tokens.</li>
              <li>Monitor posting discipline vs. KPI goals at a glance.</li>
              <li>Quickly find and reuse content for ads, A/B tests, or cross-platform pushes.</li>
            </ul>
            <div className="mt-8 flex justify-center gap-4">
              <a href="/products/zencreator/account-management" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">Add New Persona</a>
            </div>
          </section>

        </div>
      </div>

      {/* Unified FAQ with CTA on the same full-width background up to footer */}
      <FAQAccordion
        cta={(
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Ready to tame your creator fleet?</h3>
            <p className="text-gray-700 mb-8 text-lg"><strong>Spin up a new persona and see the control tower in action in under five minutes.</strong></p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/products/zencreator/account-management" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">Add New Persona</a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors">Book a demo</a>
            </div>
          </div>
        )}
      />
    </PageLayout>
  );
};


