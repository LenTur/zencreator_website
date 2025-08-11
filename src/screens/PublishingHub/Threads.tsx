import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const PublishingThreads: React.FC = () => {
  return (
    <PageLayout
      title="Publish on Threads — Conversational Content at Startup Speed"
      description="Draft, schedule, or Smart Publish single posts or multi-reply threads with images, video, hashtags, and mentions."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Top CTA */}
          <section className="py-4">
            <div className="text-center">
              <a href="#connect-threads" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Connect Threads Account</a>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="heading-2 text-gray-900 mb-6">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[ 
                ['1 · Select Content', 'Pick any image, carousel (up to 10), or short video from your library. Auto-checks size & orientation limits.'],
                ['2 · Compose or Auto-Compose', 'Type a caption or let AI Caption add text, hashtags, and mentions. Copy saved as a draft.'],
                ['3 · Build a Thread (Optional)', 'Add 1–n follow-up replies; each can reuse media or pull new assets. Sequenced draft visible in preview.'],
                ['4 · Choose Publish Mode', 'Post Now · Schedule · Smart Publish (first free slot). Item enters queue or publishes instantly.'],
                ['5 · Track Performance', 'Likes, replies, reposts, follows — live in the Threads analytics tab. Feedback loops into Caption AI.']
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
            <h2 className="heading-2 text-gray-900 mb-6">Key Features</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Official Meta Tech Partner</h3>
                <p className="text-gray-700">Secure Graph-API posting to Threads, Instagram, and Facebook — no work-arounds or risky bots.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">AI Caption & Hashtags</h3>
                <p className="text-gray-700">Natural-language captions tuned for Threads; auto-inserts trending hashtags and mentions while preserving brand voice.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Three Publishing Modes</h3>
                <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                  <li>Post Now — Immediate push</li>
                  <li>Schedule — Exact date & time (timezone-aware)</li>
                  <li>Smart Publish — Define windows; ZenCreator finds the next free slot and fills missing metadata</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Unified Calendar</h3>
                <p className="text-gray-700">Threads posts appear alongside Instagram, TikTok, etc. Colour-coded status for scheduled, live, edited, deleted.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Built-In Analytics</h3>
                <p className="text-gray-700">Reach, likes, replies, reposts, follower delta. Compare Smart Publish vs. manual to refine timing and hooks.</p>
              </div>
            </div>
          </section>

          {/* Perfect For */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="heading-3 text-gray-900 mb-4">Perfect For Teams That Need to…</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Spark conversations around launches without babysitting the app</li>
              <li>Run multi-step story threads that auto-drop on schedule</li>
              <li>Cross-post high-performing Reels or images from Instagram in one click</li>
            </ul>
            <div className="mt-6">
              <a href="#connect-threads" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Connect Threads Account</a>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-10 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">FAQ</h3>
            <div className="space-y-4 text-gray-800">
              <div>
                <p className="font-medium">Is it safe to connect my Threads profile?</p>
                <p className="text-gray-700">Yes — ZenCreator is an official Meta Tech Partner; we post via approved Graph-API endpoints only.</p>
              </div>
              <div>
                <p className="font-medium">How many images can I attach?</p>
                <p className="text-gray-700">Up to 10 per Threads post — the platform’s current maximum.</p>
              </div>
              <div>
                <p className="font-medium">Can I edit a scheduled thread?</p>
                <p className="text-gray-700">Absolutely. Update text, media, or timing for any reply until the moment it publishes.</p>
              </div>
              <div>
                <p className="font-medium">Can I cross-post to Instagram or Facebook simultaneously?</p>
                <p className="text-gray-700">Yes — tick additional channels before confirming; ZenCreator adapts formatting automatically.</p>
              </div>
              <p className="text-gray-700">Still have questions? <a className="text-blue-600 hover:underline" href="mailto:info@zencreator.pro">Contact support →</a></p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-10 border-t border-gray-200">
            <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
              <h3 className="heading-3 mb-2">Ready to turn one idea into a full conversation?</h3>
              <p className="text-white/80 mb-6">Link your Threads account and schedule your first Smart Publish in under two minutes.</p>
              <a href="#connect-threads" className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Connect Threads</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


