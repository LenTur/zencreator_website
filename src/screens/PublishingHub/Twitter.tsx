import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const PublishingTwitter: React.FC = () => {
  return (
    <PageLayout
      title="Publish on X — Precision Tweets, Zero Tab-Hopping"
      description="Compose, schedule, or Smart-Publish Tweets and threads with images, GIFs, or video — fully compliant with X’s API."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Top CTA */}
          <section className="py-4">
            <div className="text-center">
              <a href="#connect-x" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Connect X Account</a>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[ 
                ['1 · Select Assets', 'Choose up to 4 images, a GIF, or a video ≤ 2 m 20 s from your library. Auto-checks ratio & size limits.'],
                ['2 · Write or AI-Write', 'Draft up to 280 chars — or let AI Copy condense text & add hashtags and @mentions. Saved as draft.'],
                ['3 · Build a Thread (Optional)', 'Auto-split long copy or add replies manually; reorder with drag-and-drop. Preview shows entire chain.'],
                ['4 · Choose Publish Mode', 'Tweet Now · Schedule · Smart Publish (first open slot). Enters queue or posts instantly.'],
                ['5 · Track Performance', 'Likes, reposts, quotes, clicks, profile visits — live in X analytics. Feedback improves AI Copy.']
              ].map(([title, desc]) => (
                <Card key={title as string}>
                  <CardHeader className="p-5 pb-3">
                    <CardTitle className="text-base text-gray-900">{title as string}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-5 pb-5">
                    <CardDescription className="text-gray-700">{desc as string}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Official X (Twitter) API Integration</h3>
                <p className="text-gray-700">Secure OAuth connection — no browser automation or account-risking bots. Supports images, GIFs, native video, threads.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">AI Copy & Hashtags</h3>
                <p className="text-gray-700">Compresses long-form text to 280 characters without losing punch. Suggests trending hashtags and auto-detects @handles.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Three Publishing Modes</h3>
                <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                  <li>Tweet Now — Real-time publishing</li>
                  <li>Schedule — Exact date & time (timezone-aware)</li>
                  <li>Smart Publish — Define windows; ZenCreator finds the next free slot and fills missing metadata</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Alt-Text & Compliance Check</h3>
                <p className="text-gray-700">Add descriptive alt-text; automated scans for banned content, link repeats, or policy keywords.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Unified Calendar & Analytics</h3>
                <p className="text-gray-700">X posts appear alongside other channels. Metrics: impressions, ER, link clicks, follower delta.</p>
              </div>
            </div>
          </section>

          {/* Perfect For */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Perfect For Teams That Need to…</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Ship real-time updates or campaign threads without living in social dashboards</li>
              <li>Keep Tweets on-brand and under 280 characters using AI Copy</li>
              <li>Manage multi-channel calendars from one view and cross-post high performers</li>
            </ul>
            <div className="mt-6">
              <a href="#connect-x" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Connect X Account</a>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-10 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">FAQ</h3>
            <div className="space-y-4 text-gray-800">
              <div>
                <p className="font-medium">Is it safe to connect my Twitter/X profile?</p>
                <p className="text-gray-700">Yes — ZenCreator uses the official X API with secure OAuth; you can revoke access anytime.</p>
              </div>
              <div>
                <p className="font-medium">How many images can I attach?</p>
                <p className="text-gray-700">Up to four per Tweet, following X’s size limits.</p>
              </div>
              <div>
                <p className="font-medium">Can I edit a scheduled Tweet?</p>
                <p className="text-gray-700">Yes — modify text, media, or timing until it posts.</p>
              </div>
              <div>
                <p className="font-medium">Do you support polls?</p>
                <p className="text-gray-700">Polls are available as soon as X exposes them in the public API — already on our roadmap.</p>
              </div>
              <p className="text-gray-700">Still have questions? <a className="text-blue-600 hover:underline" href="mailto:info@zencreator.pro">Contact support →</a></p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-10 border-t border-gray-200">
            <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Ready to tweet smarter, faster, and in full compliance?</h3>
              <p className="text-white/80 mb-6">Link your X account and launch your first Smart Publish in under two minutes.</p>
              <a href="#connect-x" className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Connect X</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


