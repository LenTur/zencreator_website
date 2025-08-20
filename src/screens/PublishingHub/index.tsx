import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Instagram, MessageSquare, Twitter, Facebook, Youtube, Music4 as TikTok, Shield, Lock, ShieldCheck, Ban, Scan, ClipboardCheck } from 'lucide-react';

export const PublishingHub: React.FC = () => {
  const whyItems = [
    {
      title: 'Official API Integrations',
      description:
        'Meta Tech-Partner (Instagram / Facebook / Threads), X OAuth v2, YouTube Data API — no scraping, no account risk.'
    },
    {
      title: 'Smart Publish Windows',
      description:
        'Define posting windows; ZenCreator auto-slots the next free time and fills missing copy, hashtags, CTAs, and music.'
    },
    {
      title: 'Unified Calendar',
      description:
        'Drag-and-drop across channels; colour-coded status (scheduled / live / edited / deleted).'
    },
    {
      title: 'AI Copy & Hashtags',
      description:
        'Generates or compresses platform-perfect captions, titles, and tags while keeping your brand voice.'
    },
    {
      title: 'Smart Formatting',
      description:
        'Auto-crop, resize, and bitrate-check assets so every post meets platform specs the first time.'
    },
    {
      title: 'Compliance Guardrails',
      description:
        'Scans for banned keywords, over-texted images, copyright risk, and nudity mismatches before publishing.'
    },
    {
      title: 'Deep Analytics',
      description:
        'Reach, ER, watch time, CTR, follower delta — compare Smart Publish vs. manual to refine strategy.'
    },
    {
      title: 'Role-Based Approvals (soon)',
      description:
        'Draft → Manager Approval → Legal Sign-off workflow with full audit trail.'
    }
  ];

  const channels = [
    ['Instagram','Feed, Carousels (10), Stories, Reels. Location + music tags, user mentions.','/products/zencreator/publishing-hub/instagram'],
    ['Threads','Single posts & multi-reply chains. AI splitting, hashtag hints.','/products/zencreator/publishing-hub/threads'],
    ['X (Twitter)','Tweets, media threads, ≤ 2m 20 s video. Alt-text, GIF support, future polls.','/products/zencreator/publishing-hub/twitter'],
    ['Facebook Pages / Groups','Images, carousels, native video, link posts. CTA buttons, brand-content flag.','/products/zencreator/publishing-hub/facebook'],
    ['YouTube Shorts','≤ 60 s vertical video. Thumbnail grab, auto-#Shorts tags.','/products/zencreator/publishing-hub/youtube'],
    ['TikTok (soon)','9×16 vertical, up to 10 min video. Sounds library integration, cover selector.','#']
  ];

  const getChannelIcon = (title: string) => {
    const cls = 'w-16 h-16 text-purple-600';
    if (title.toLowerCase().includes('instagram')) return <Instagram className={cls} />;
    if (title.toLowerCase().includes('threads')) return <MessageSquare className={cls} />;
    if (title.toLowerCase().includes('twitter') || title.includes('X (Twitter)')) return <Twitter className={cls} />;
    if (title.toLowerCase().includes('facebook')) return <Facebook className={cls} />;
    if (title.toLowerCase().includes('youtube')) return <Youtube className={cls} />;
    if (title.toLowerCase().includes('tiktok')) return <TikTok className={cls} />;
    return <Instagram className={cls} />;
  };

  const securityIconMap: Record<string, any> = { Shield, Lock, ShieldCheck, Ban, Scan, ClipboardCheck };

  return (
    <PageLayout
      title="Publishing — From Asset to Audience in One Click"
      description={
        'Every visual you create in ZenCreator can go live on five major social networks without ever leaving the platform.'
      }
    >
      {/* Hero */}
      <div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
            <section className="pt-24 pb-[40px] text-center text-white w-full px-6">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Publishing Hub<br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7BA1F8, #C084FC)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  className="text-2xl md:text-4xl"
                >
                  From Asset to Audience in One Click
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Every visual you create in ZenCreator can go live on five major social networks without ever leaving the platform.
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Connect Your First Channel
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Why Teams Choose — advanced cards like WorkflowTemplates */}
      <section className="py-[169px] bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">Why Teams Choose<br /> the Publishing Hub</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {whyItems.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative flex items-start gap-6 p-8 bg-white/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 min-h-[200px]">
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 group-hover:from-purple-200 group-hover:to-indigo-200 transition-all duration-500 flex-shrink-0 group-hover:rotate-3 group-hover:scale-110">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 text-purple-600 font-black text-xl">{String(idx + 1).padStart(2, '0')}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 group-hover:translate-x-1">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 font-medium">Draft → Manager Approval → Legal Sign-off workflow with full audit trail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Channels — modern cards */}
      <section className="py-[100px] bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">Supported Channels & Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {channels.map(([title, desc, href]) => (
                <div key={title as string} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative p-7 bg-white/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 flex items-center gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center h-full">
                      {getChannelIcon(title as string)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">{title as string}</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">{desc as string}</p>
                      <a href={href as string} onClick={(e)=>e.preventDefault()} className="inline-flex items-center text-sm font-medium text-gray-400 cursor-not-allowed">
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 italic mt-4 text-center">(New networks become available soon)</p>
          </div>
        </div>
      </section>

      {/* End-to-End Workflow — now 5 cards */}
      <section className="py-[100px] bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">End-to-End Workflow</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                ['Generate', 'Create images, videos or entire sets in the Content Creation suite.'],
                ['Set Strategy', 'Pick channels, fill or auto-generate copy, choose Now / Schedule / Smart Publish.'],
                ['Push to Publishing', 'One click moves assets (and metadata) into the Publishing queue.'],
                ['Approve & Launch', 'Role-based sign-off, then automatic posting with compliance checks.'],
                ['Analyse & Iterate', 'Built-in dashboards surface winners; recycle or boost in seconds.'],
              ].map(([title, desc], i) => (
                <div key={title as string} className="rounded-3xl p-6 border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-purple-600 font-black mb-2">{String(i + 1).padStart(2,'0')}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{title as string}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{desc as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Batch & Scale Without Bottlenecks */}
      <section className="py-[100px] bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">Batch & Scale<br />Without Bottlenecks</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md">
                <div className="h-40 bg-gray-100 rounded-xl mb-4"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Bulk Upload</h4>
                <p className="text-gray-700">Hundreds of assets, apply templates, and let Smart Publish drip content over days or weeks.</p>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md">
                <div className="h-40 bg-gray-100 rounded-xl mb-4"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Parallel Posting</h4>
                <p className="text-gray-700">Engine pushes to multiple channels simultaneously — no rate-limit surprises.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance — premium dark cards */}
      <section className="py-[100px] bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 text-center">Security & Compliance</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ['OAuth only; revoke access anytime.', Shield, 'from-indigo-400 to-purple-400'],
                ['Zero retention of tokens outside encrypted vaults.', Lock, 'from-emerald-400 to-teal-400'],
                ['SOC-2 hosting, optional VPC peering for enterprise.', ShieldCheck, 'from-sky-400 to-blue-400'],
              ].map(([desc, Icon, grad]) => (
                <div key={desc as string} className="bg-[#0F172A] rounded-3xl p-7 border border-white/10 shadow-xl text-white">
                  <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${grad as string} bg-opacity-20 flex items-center justify-center mb-4`}> 
                    {Icon ? (() => { const C = Icon as any; return <C className="w-5 h-5 text-white" />; })() : null}
                  </div>
                  <p className="text-white/80 leading-relaxed">{desc as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Replace Six Dashboards With One? */}
      <section className="py-[100px] bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 pt-[40px] text-center border border-white/10">
              <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                Start in minutes
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ready to Replace Six Dashboards <br className="hidden sm:block" /> With One?
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Connect a channel and schedule your first Smart Publish in under two minutes.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Try Smart Publishing</a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Book a Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Contact Section */}
      <section className="py-[100px] bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Questions?</h3>
            <p className="text-gray-600 text-lg mb-6">
              Email us at <a href="mailto:info@zencreator.pro" className="text-purple-600 hover:text-purple-700 font-semibold">info@zencreator.pro</a> — our team answers within a business day.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};


