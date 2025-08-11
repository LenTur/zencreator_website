import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const Analytics: React.FC = () => {
  return (
    <PageLayout
      title="Analytics & Insights"
      description="Track every view, click, and follow across Instagram, Threads, X, Facebook, YouTube, and TikTok in a single dashboard. Drill down to post-level details or zoom out to cross-channel KPIs. AI highlights what’s working — so you scale wins, not guesses."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Lead section */}
          <section className="py-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Analytics & Insights — One Truth for Every Channel</h3>
            <p className="text-gray-700 mb-6"><strong>From big-picture growth to frame-by-frame performance, ZenCreator turns raw data into decisions you can act on.</strong></p>
            <a href="/products/zencreator" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try ZenCreator</a>
          </section>

          {/* What You Get */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Get</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>Cross-Channel Overview</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">
                  Total followers, reach, views, impressions, engagement rate, watch time, CTR. Big-number tiles & trend lines
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>Channel Deep Dive</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">
                  Platform-specific KPI sets (e.g., Saves & Shares on Instagram, Retention Curve on YouTube Shorts). Tabbed dashboards
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>Post-Level Drill-Down</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">
                  Views, likes, comments, ER, watch-through %, clicks, top commenters. Click-through modal or table export
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
              <li><strong>Secure API Pulls</strong> — Official APIs fetch fresh data every 10 minutes.</li>
              <li><strong>Unified Taxonomy</strong> — ZenCreator normalises KPIs across platforms; “Engagement” means the same everywhere.</li>
              <li><strong>AI Insight Engine</strong> — Flags spikes, drops, best-time windows, and under-performing formats; surfaces next-step suggestions.</li>
              <li><strong>Custom Dashboards & Alerts</strong> — Drag-and-drop widgets; send Slack / email alerts when KPIs cross thresholds.</li>
              <li><strong>Export & Share</strong> — CSV, PDF, or live link for stakeholders; schedule weekly or monthly reports automatically.</li>
            </ol>
          </section>

          {/* Key Features */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>Granular to Global</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Toggle from “All Channels • Last 90 Days” to “This Reel • Last 24 h” in two clicks.</li>
                    <li>Save any filter combo as a reusable view.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>AI Recommendations</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">
                  Picks winning hooks, optimal posting windows, and repeat-worthy formats. Suggests under-served audience segments based on hashtag & geo data.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>Campaign Tags & Filters</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">
                  Group posts by campaign, product line, or creator. Compare A/B variants at a glance.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>Privacy & Security</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">
                  OAuth tokens stored in encrypted vaults. SOC-2 infrastructure; optional VPC peering for enterprise.
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Multi-Model Workspaces */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Multi-Model Workspaces — Built for Fleets of Creators</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>Per-Model Dashboard</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">Only the channels that belong to that specific creator—followers, reach, ER, content mix. Fine-tune posting cadence, catch format fatigue early.</CardContent>
              </Card>
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>Cross-Model Roll-Up</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">Aggregated metrics across all selected creators (or a subset you pick). Board-level reporting for “Total Network” growth, reach, or revenue.</CardContent>
              </Card>
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>Segment Groups</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">Tag models into cohorts (e.g., “Fitness”, “Gaming”, “Gen Z”), then compare KPI averages side-by-side. Spot category leaders and under-performers in seconds.</CardContent>
              </Card>
            </div>
            <p className="text-gray-700 mt-4">Instant toggles let you jump from “Mila.AI on Instagram last 7 days” to “All models • All channels • QTD” with two clicks. Every insight — AI recommendations, alerts, exports — works at any level you choose.</p>
            <blockquote className="mt-4 italic text-gray-700 border-l-4 border-gray-200 pl-4">Result: One platform, crystal-clear answers—from an individual Reel to the collective impact of your entire influencer studio.</blockquote>
          </section>

          {/* Perfect for */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For Teams That Need to…</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Replace fractured spreadsheets</strong> with a single source of truth.</li>
              <li><strong>Prove ROI</strong> to execs with conversion & revenue tie-ins.</li>
              <li><strong>Iterate content quickly</strong> using real-time feedback loops and AI tips.</li>
              <li><strong>Collaborate across roles</strong> — creatives, growth, and leadership see tailored views.</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="/products/zencreator" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try ZenCreator</a>
              <a href="mailto:info@zencreator.pro?subject=Demo" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book a Demo</a>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">FAQ</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-medium">How fresh is the data?</p>
                <p>API sync runs every 10 minutes; YouTube metrics every hour (API limit).</p>
              </div>
              <p>Still have questions? <a href="mailto:support@zencreator.pro" className="text-purple-600 hover:underline">Contact support →</a></p>
          </div>
          </section>

          {/* Final CTA */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to turn data into action—without another analytics tab?</h3>
            <p className="text-gray-700 mb-6"><strong>Connect your channels and see insights populate in under five minutes.</strong></p>
            <div className="flex gap-3">
              <a href="/products/zencreator" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Try ZenCreator</a>
              <a href="mailto:info@zencreator.pro?subject=Demo" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book a Demo</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


