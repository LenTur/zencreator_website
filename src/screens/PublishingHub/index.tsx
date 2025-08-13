import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const PublishingHub: React.FC = () => {
  return (
    <PageLayout
      title="Publishing — From Asset to Audience in One Click"
      description={
        "Every visual you create in ZenCreator can go live on five major social networks without ever leaving the platform."
      }
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Top CTA */}
          <section className="py-4">
            <div className="text-center">
              <a href="/products/zencreator/publishing-hub/instagram" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Connect Your First Channel</a>
            </div>
          </section>

          {/* Why Teams Choose */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Teams Choose the Publishing Hub</h3>
            <div className="space-y-6 text-gray-800">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Official API Integrations</h4>
                <p>Meta Tech-Partner (Instagram / Facebook / Threads), X OAuth v2, YouTube Data API — no scraping, no account risk.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Smart Publish Windows</h4>
                <p>Define posting windows; ZenCreator auto-slots the next free time and fills missing copy, hashtags, CTAs, and music.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Unified Calendar</h4>
                <p>Drag-and-drop across channels; colour-coded status (scheduled / live / edited / deleted).</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">AI Copy & Hashtags</h4>
                <p>Generates or compresses platform-perfect captions, titles, and tags while keeping your brand voice.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Smart Formatting</h4>
                <p>Auto-crop, resize, and bitrate-check assets so every post meets platform specs the first time.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Compliance Guardrails</h4>
                <p>Scans for banned keywords, over-texted images, copyright risk, and nudity mismatches before publishing.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Deep Analytics</h4>
                <p>Reach, ER, watch time, CTR, follower delta — compare Smart Publish vs. manual to refine strategy.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Role-Based Approvals (soon)</h4>
                <p>Draft → Manager Approval → Legal Sign-off workflow with full audit trail.</p>
              </div>
            </div>
          </section>

          {/* Supported Channels */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Supported Channels & Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[ 
                ['Instagram','Feed, Carousels (10), Stories, Reels. Location + music tags, user mentions.','/products/zencreator/publishing-hub/instagram'],
                ['Threads','Single posts & multi-reply chains. AI splitting, hashtag hints.','/products/zencreator/publishing-hub/threads'],
                ['X (Twitter)','Tweets, media threads, ≤ 2m 20 s video. Alt-text, GIF support, future polls.','/products/zencreator/publishing-hub/twitter'],
                ['Facebook Pages / Groups','Images, carousels, native video, link posts. CTA buttons, brand-content flag.','/products/zencreator/publishing-hub/facebook'],
                ['YouTube Shorts','≤ 60 s vertical video. Thumbnail grab, auto-#Shorts tags.','/products/zencreator/publishing-hub/youtube'],
                ['TikTok (soon)','9×16 vertical, up to 10 min video. Sounds library integration, cover selector.','#']
              ].map(([title,desc,href]) => (
                <a key={title as string} href={href as string}>
                  <Card className="h-full transition-all hover:shadow-lg hover:border-purple-200">
                    <CardHeader className="p-5">
                      <CardTitle className="text-gray-900 text-base">{title as string}</CardTitle>
                      <CardDescription className="text-gray-600 mt-1">{desc as string}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 pb-5 px-5">
                      <span className="inline-flex items-center text-sm font-medium text-purple-700">Learn More →</span>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-600 italic mt-3">(New networks become available soon)</p>
          </section>

          {/* End-to-End Workflow */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">End-to-End Workflow</h3>
            <ol className="space-y-3 list-decimal pl-6 text-gray-800">
              <li><strong>Generate</strong> – Create images, videos or entire sets in the Content Creation suite.</li>
              <li><strong>Push to Publishing</strong> – One click moves assets (and metadata) into the Publishing queue.</li>
              <li><strong>Set Strategy</strong> – Pick channels, fill or auto-generate copy, choose Now / Schedule / Smart Publish.</li>
              <li><strong>Approve & Launch</strong> – Role-based sign-off, then automatic posting with compliance checks.</li>
              <li><strong>Analyse & Iterate</strong> – Built-in dashboards surface winners; recycle or boost in seconds.</li>
            </ol>
          </section>

          {/* Batch & Scale */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Batch & Scale Without Bottlenecks</h3>
            <ul className="space-y-3 text-gray-800">
              <li>• <strong>Bulk Upload</strong> hundreds of assets, apply templates, and let Smart Publish drip content over days or weeks.</li>
              <li>• <strong>Parallel Posting</strong> engine pushes to multiple channels simultaneously — no rate-limit surprises.</li>
            </ul>
          </section>

          {/* Security & Compliance */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Security & Compliance</h3>
            <ul className="space-y-3 text-gray-800">
              <li>• OAuth only; revoke access anytime.</li>
              <li>• Zero retention of tokens outside encrypted vaults.</li>
              <li>• SOC-2 hosting, optional VPC peering for enterprise.</li>
            </ul>
          </section>

          {/* Final CTA */}
          <section className="py-12 border-t border-gray-200">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">Ready to Replace Six Dashboards With One?</h4>
                <p className="text-gray-700">Connect a channel and schedule your first Smart Publish in under <strong>two minutes</strong>.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                 <a href="/products/zencreator/publishing-hub/instagram" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try Smart Publishing</a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book a Demo</a>
              </div>
            </div>
            <p className="text-gray-700 mt-6">Questions? Email us at <a className="text-blue-600 hover:underline font-medium" href="mailto:info@zencreator.pro">info@zencreator.pro</a> — our team answers within a business day.</p>
          </section>

        </div>
      </div>
    </PageLayout>
  );
};


