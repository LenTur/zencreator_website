import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const PublishingInstagram: React.FC = () => {
  return (
    <PageLayout
      title="Publish on Instagram — Precision Posting at Scale"
      description="Upload or generate, and let ZenCreator handle captions, hashtags, location, music, and user tags."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Top CTA */}
          <section className="py-4">
            <div className="text-center">
              <a href="#connect-instagram" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Connect Instagram Account</a>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="heading-2 text-gray-900 mb-6">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[ 
                ['1 · Select Content', 'Choose any image, carousel, or video generated inside ZenCreator—or import from your library. Assets auto-checked for aspect ratio & quality.'],
                ['2 · Fill (or Auto-Fill) Details', 'Add caption, hashtags, location, music, and user tags—or enable Smart Publish to let AI handle it. All metadata saved as a draft.'],
                ['3 · Pick a Publish Mode', 'Post Now • Schedule • Smart Publish (first free slot). Item drops into the queue or publishes instantly.'],
                ['4 · Track & Iterate', 'View live status, edit or delete posts, and monitor engagement in the Instagram analytics tab.']
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
                <p className="text-gray-700">Direct, secure posting to Instagram, Facebook, and Threads via Meta’s Graph API — no work-arounds.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Detail-Level Controls</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Location tag, music tag, and user mentions</li>
                  <li>Post formats: single image, carousel (up to 10), video/Reel, and Story</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Three Publishing Modes</h3>
                <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                  <li>Post Now — Immediate push to feed or Story</li>
                  <li>Schedule — Exact date & time (timezone-aware)</li>
                  <li>Smart Publish — Define preferred windows; ZenCreator finds the next free slot and fills metadata automatically</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Unified Calendar & Feed View</h3>
                <p className="text-gray-700">Drag-and-drop rescheduling, colour-coded status, instant delete or edit.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Built-In Analytics</h3>
                <p className="text-gray-700">Reach, impressions, ER, saves, shares — compare Smart Publish vs. manual posts to refine windows and hooks.</p>
              </div>
            </div>
          </section>

          {/* Perfect For */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="heading-3 text-gray-900 mb-4">Perfect For Teams That Need to…</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Scale Reels & Stories without juggling multiple tools</li>
              <li>Keep content always on-brand with AI-assisted captions and hashtags</li>
              <li>Align influencer, brand, and UGC posts on one shared calendar</li>
            </ul>
            <div className="mt-6">
              <a href="#connect-instagram" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Connect Instagram Account</a>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-10 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">FAQ</h3>
            <div className="space-y-4 text-gray-800">
              <div>
                <p className="font-medium">Is it safe to connect my account?</p>
                <p className="text-gray-700">Yes — ZenCreator is an official Meta Tech Partner, operating solely through approved Graph API endpoints.</p>
              </div>
              <div>
                <p className="font-medium">Can I edit a scheduled post?</p>
                <p className="text-gray-700">Absolutely. Change caption, tags, date, or time right up until the publish moment.</p>
              </div>
              <div>
                <p className="font-medium">Can I cross-post to Facebook or Threads at the same time?</p>
                <p className="text-gray-700">Yes — tick the additional channels before confirming. Metadata auto-adapts for each platform.</p>
              </div>
              <p className="text-gray-700">Still have questions? <a className="text-blue-600 hover:underline" href="mailto:info@zencreator.pro">Contact support →</a></p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-10 border-t border-gray-200">
            <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
              <h3 className="heading-3 mb-2">Ready to post smarter, faster, and in full compliance?</h3>
              <p className="text-white/80 mb-6">Link your Instagram and schedule your first Smart Publish in under two minutes.</p>
              <a href="#connect-instagram" className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Connect Instagram</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


