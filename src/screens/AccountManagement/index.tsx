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
          {/* How It Works — pyramid layout with numbers & image slots */}
          <section className="py-[100px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {[
                { title: 'Create a Persona', desc: 'Upload face & body refs, write a bio, set home location, choose language, and drop inspiration links. A complete “creator profile” ready for content modules.', img: '' },
                { title: 'Connect Socials', desc: 'OAuth-link Instagram, Threads, X, Facebook, TikTok, YouTube. API tokens stored; posting & analytics unlocked.', img: '' },
                { title: 'Set Content Sources', desc: 'Pick reference galleries or hashtags for remix, or let AI auto-source.', img: '' },
                { title: 'Define KPI Goals', desc: 'Daily/weekly targets for posts per network, follower growth, ER.', img: '' },
                { title: 'Generate → Publish → Analyse', desc: 'All content, post history, and stats flow back into the persona record.', img: '' },
              ].map((item, i) => {
                const pos = i;
                const positionClass =
                  pos === 0 ? 'lg:col-span-2 lg:col-start-1' :
                  pos === 1 ? 'lg:col-span-2 lg:col-start-3' :
                  pos === 2 ? 'lg:col-span-2 lg:col-start-5' :
                  pos === 3 ? 'lg:col-span-2 lg:col-start-2' :
                  'lg:col-span-2 lg:col-start-4';
                return (
                  <div key={item.title} className={`${positionClass}`}>
                    <div className="relative rounded-3xl p-6 border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold shadow-md">{i+1}</div>
                      <div className="mb-4 rounded-2xl overflow-hidden">
                        {item.img ? (
                          <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                        ) : (
                          <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200" />
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Key Features — same style as Analytics */}
          <section className="py-[100px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '📁', title: 'Centralised Persona Profiles', bullets: [
                  'Core Data: face ID, bio, pronouns, location, brand voice.',
                  'Gallery: every generated photo, video, Reel, or Story auto-tagged and searchable.',
                  'Post History: filter by network, date, status (scheduled / live / failed).',
                ]},
                { icon: '🏷️', title: 'Categories & Cohorts', bullets: [
                  'Tag personas (e.g., Fitness, Fashion, Gen Z).',
                  'Use tags to slice analytics or bulk-schedule themed campaigns.',
                ]},
                { icon: '🔔', title: 'Token Health & Alerts', bullets: [
                  'Real-time badge shows Active, Needs Attention, or Expired.',
                  'Email / Slack alert when a network requires re-login — click to refresh OAuth.',
                ]},
                { icon: '📊', title: 'KPI Dashboard', bullets: [
                  'Snapshot cards: daily posts, success vs. fail, posts by format.',
                  'Traffic-light colours flag who’s on target.',
                ]},
                { icon: '🔁', title: 'Content Loop Integration', bullets: [
                  'One click from profile to Generate Content.',
                  'Direct push from Gallery to Publishing with persona metadata auto-injected.',
                ]},
                { icon: '🛠️', title: 'Bulk Actions', bullets: [
                  'Update bios, rotate profile pics, or refresh tokens for multiple personas at once.',
                  'CSV import/export for enterprise migrations.',
                ]},
                { icon: '🔒', title: 'Security & Roles', bullets: [
                  'Workspace-level RBAC and audit log for every profile edit or token refresh.',
                ]},
              ].map((card) => (
                <div key={card.title} className="relative bg-[#0F172A] rounded-3xl p-8 border border-white/10 shadow-xl text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-4">
                    <span>{card.icon}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{card.title}</h4>
                  <ul className="list-disc list-inside text-white/80 space-y-2">
                    {card.bullets.map((b) => (<li key={b}>{b}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Perfect For — three cards */}
          <section className="py-[100px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">Perfect For Teams Who Need to…</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                'Run tens to hundreds of AI influencers without losing track of assets or auth tokens.',
                'Monitor posting discipline vs. KPI goals at a glance.',
                'Quickly find and reuse content for ads, A/B tests, or cross-platform pushes.',
              ].map((text, i) => (
                <div key={i} className="rounded-3xl p-8 bg-white border border-gray-200 shadow-md">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center mb-4">{i+1}</div>
                  <p className="text-gray-800">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center gap-4">
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

      {/* Separate Final CTA — full-width light gradient like FAQ */}
      <section className="py-[150px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 text-center border border-white/10">
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


