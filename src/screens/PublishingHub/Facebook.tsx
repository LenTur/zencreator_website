import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const PublishingFacebook: React.FC = () => {
  return (
    <PageLayout
      title="Publish on Facebook Pages — Full-Funnel Posts in One Click"
      description="From quick photo updates to full video launches — precision controls and scheduling power without opening Business Suite."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Top CTA */}
          <section className="py-4">
            <div className="text-center">
              <a href="#connect-facebook" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Connect Facebook Page</a>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[ 
                ['1 · Pick Your Page', 'Connect Page through secure Meta OAuth.'],
                ['2 · Choose Content', 'Single image, carousel (up to 10), link post, or video (≤ 240 min, ≤ 10 GB). Compliance check runs instantly.'],
                ['3 · Fill (or Auto-Fill) Details', 'Caption, hashtags, location, CTA button (Shop Now, Learn More). AI Copy can generate or clean up text.'],
                ['4 · Select Publish Mode', 'Post Now · Schedule · Smart Publish (next free slot). Drops into queue or publishes instantly.'],
                ['5 · Track & Optimise', 'Reach, clicks, reactions, shares, watch-time — live in analytics; feedback to AI Copy for improvement.']
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
                <h3 className="font-semibold text-gray-900 mb-1">Official Meta Tech-Partner API</h3>
                <p className="text-gray-700">Same secure Graph endpoints used by Business Suite; cross-post toggle for Instagram & Threads in one step.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Rich Post Types</h3>
                <p className="text-gray-700">Single Image • Carousel • Link Preview • Native Video • Reel-to-Feed cross-share.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Three Publishing Modes</h3>
                <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                  <li>Post Now — Instant live</li>
                  <li>Schedule — Exact date & time (timezone aware)</li>
                  <li>Smart Publish — Define preferred windows; ZenCreator finds next slot and fills missing metadata</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Detail Controls & Compliance</h3>
                <p className="text-gray-700">Location tags, alt-text, mentions, branded content flag; checks for text-in-image, banned keywords, or music rights.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Unified Calendar & Deep Analytics</h3>
                <p className="text-gray-700">Drag-and-drop scheduling; metrics: reach, impressions, CTR, reactions breakdown, shares, watch-through %.</p>
              </div>
            </div>
          </section>

          {/* Perfect For */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Perfect For Teams Who Need to…</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Launch multi-asset campaigns across Facebook & Instagram without re-uploading</li>
              <li>Keep brand pages always-on with AI-assisted captions and CTAs</li>
              <li>Batch-schedule drops, lookbooks, and video series from one dashboard</li>
            </ul>
            <div className="mt-6">
              <a href="#connect-facebook" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Connect Facebook Page</a>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-10 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">FAQ</h3>
            <div className="space-y-4 text-gray-800">
              <div>
                <p className="font-medium">Is it safe to connect my Page?</p>
                <p className="text-gray-700">Yes — ZenCreator is an official Meta Tech Partner; we use secure OAuth and the latest Graph API permissions.</p>
              </div>
              <div>
                <p className="font-medium">Can I edit a scheduled post?</p>
                <p className="text-gray-700">Change caption, media, CTA, date, or time right up until publish.</p>
              </div>
              <p className="text-gray-700">Still have questions? <a className="text-blue-600 hover:underline" href="mailto:info@zencreator.pro">Contact support →</a></p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-10 border-t border-gray-200">
            <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Ready to make Facebook your full-service publishing engine?</h3>
              <p className="text-white/80 mb-6">Link your Page and schedule your first Smart Publish in under two minutes.</p>
              <a href="#connect-facebook" className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Connect Facebook</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


