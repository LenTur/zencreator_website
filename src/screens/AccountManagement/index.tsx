import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const AccountManagement: React.FC = () => {
  return (
    <PageLayout
      title="Account Management"
      description="Create and manage hundreds of AI personas from one dashboard. Store face & bio data, connect social accounts, set posting KPIs, monitor token health, and drill into content or analytics per character or category."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Lead */}
          <section className="py-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Account Management — Your Control Tower for AI Personas</h3>
            <p className="text-gray-700 mb-6"><strong>From first face upload to daily KPI tracking, everything about your creators’ lives in one, searchable workspace.</strong></p>
            <a href="/products/zencreator/account-management" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Add New Persona</a>
          </section>

          {/* How It Works */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Create a Persona</strong> — Upload face & body refs, write a bio, set home location, choose language, and drop inspiration links. A complete “creator profile” ready for content modules.</li>
              <li><strong>Connect Socials</strong> — OAuth-link Instagram, Threads, X, Facebook, TikTok, YouTube. API tokens stored; posting & analytics unlocked.</li>
              <li><strong>Set Content Sources</strong> — Pick reference galleries or hashtags for remix, or let AI auto-source.</li>
              <li><strong>Define KPI Goals</strong> — Daily/weekly targets for posts per network, follower growth, ER.
              </li>
              <li><strong>Generate → Publish → Analyse</strong> — All content, post history, and stats flow back into the persona record.</li>
            </ol>
          </section>

          {/* Key Features */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>Centralised Persona Profiles</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Core Data</strong>: face ID, bio, pronouns, location, brand voice.</li>
                    <li><strong>Gallery</strong>: every generated photo, video, Reel, or Story auto-tagged and searchable.</li>
                    <li><strong>Post History</strong>: filter by network, date, status (scheduled / live / failed).</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>Categories & Cohorts</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">Tag personas (e.g., Fitness, Fashion, Gen Z). Use tags to slice analytics or bulk-schedule themed campaigns.</CardContent>
              </Card>
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>Token Health & Alerts</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">Real-time badge shows Active, Needs Attention, or Expired. Email / Slack alert when a network requires re-login — click to refresh OAuth.</CardContent>
              </Card>
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>KPI Dashboard</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">Snapshot cards: daily posts, success vs. fail, posts by format. Traffic-light colours flag who’s on target.</CardContent>
              </Card>
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>Content Loop Integration</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">One click from profile to Generate Content. Direct push from Gallery to Publishing with persona metadata auto-injected.</CardContent>
              </Card>
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>Bulk Actions</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">Update bios, rotate profile pics, or refresh tokens for multiple personas at once. CSV import/export for enterprise migrations.</CardContent>
              </Card>
              <Card>
                <CardHeader className="p-5 pb-2"><CardTitle>Security & Roles</CardTitle></CardHeader>
                <CardContent className="pt-0 px-5 pb-5 text-gray-700">Workspace-level RBAC and audit log for every profile edit or token refresh.</CardContent>
              </Card>
            </div>
          </section>

          {/* Perfect For */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For Teams Who Need to…</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Run tens to hundreds of AI influencers without losing track of assets or auth tokens.</li>
              <li>Monitor posting discipline vs. KPI goals at a glance.</li>
              <li>Quickly find and reuse content for ads, A/B tests, or cross-platform pushes.</li>
            </ul>
            <div className="mt-6">
              <a href="/products/zencreator/account-management" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Add New Persona</a>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">FAQ</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-medium">How many personas can I create?</p>
                <p>Unlimited.</p>
              </div>
              <div>
                <p className="font-medium">What if a token expires during a scheduled post?</p>
                <p>ZenCreator retries, logs the fail, and notifies you to refresh credentials.</p>
              </div>
              <div>
                <p className="font-medium">Can I restrict who edits a persona?</p>
                <p>Yes — assign roles; only Managers or Admins can modify core data or tokens.</p>
              </div>
              <div>
                <p className="font-medium">Do categories affect analytics?</p>
                <p>Absolutely — filter dashboards by tag to benchmark categories side-by-side.</p>
              </div>
              <p>Still have questions? <a href="mailto:support@zencreator.pro" className="text-purple-600 hover:underline">Contact support →</a></p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to tame your creator fleet?</h3>
            <p className="text-gray-700 mb-6"><strong>Spin up a new persona and see the control tower in action in under five minutes.</strong></p>
            <div className="flex gap-3">
              <a href="/products/zencreator/account-management" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Add New Persona</a>
              <a href="mailto:info@zencreator.pro?subject=Demo" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book a demo</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


