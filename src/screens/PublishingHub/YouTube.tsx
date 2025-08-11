import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const PublishingYouTube: React.FC = () => {
  return (
    <PageLayout
      title="Publish on YouTube Shorts — Verticals at Viral Speed"
      description="Turn every 9×16 clip you create in ZenCreator into a fully-optimised Short — without opening YouTube Studio."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Top CTA */}
          <section className="py-4">
            <div className="text-center">
              <a href="#connect-youtube" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Connect YouTube Channel</a>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[ 
                ['1 · Select Your Clip', 'Pick any vertical video ≤ 60 s (or let ZenCreator auto-crop a landscape source). File is scanned for length, aspect ratio, and size.'],
                ['2 · Add (or Auto-Add) Details', 'Title, description, #Shorts hashtags, category, language, custom thumbnail (upload or frame-grab). AI Assist can generate or refine text.'],
                ['3 · Choose a Publish Mode', 'Post Now · Schedule · Smart Publish. Video enters queue or goes live instantly.'],
                ['4 · Track Results', 'Views, likes, retention, subs gained — updated every few minutes. Insights feed back to AI Title & Tags.']
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
                <h3 className="font-semibold text-gray-900 mb-1">Official YouTube Data API</h3>
                <p className="text-gray-700">Secure OAuth; complies with YouTube’s latest Shorts, music rights, and policy guidelines.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">AI Title, Description & Tags</h3>
                <p className="text-gray-700">Condenses long copy into a 100-character hook. Suggests trending #Shorts tags and keywords.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Thumbnail Selector & Generator</h3>
                <p className="text-gray-700">Scrub video to grab a frame or upload a custom JPEG; AI can add text overlays that stay within the 20% rule.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Three Publishing Modes</h3>
                <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                  <li>Post Now — Live in seconds</li>
                  <li>Schedule — Exact date & time (channel-timezone aware)</li>
                  <li>Smart Publish — Define preferred windows; ZenCreator finds the next open slot, fills missing metadata, and publishes</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Cross-Platform Handoff</h3>
                <p className="text-gray-700">Repurpose to TikTok or Instagram Reels with auto-adjusted captions and music credits.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Unified Calendar & Built-in Analytics</h3>
                <p className="text-gray-700">Drag-and-drop scheduling; metrics: views, avg watch duration, retention curve, subscriber delta.</p>
              </div>
            </div>
          </section>

          {/* Perfect For */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Perfect For Teams That Need to…</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Feed always-on vertical video without juggling multiple dashboards</li>
              <li>Optimise Titles & Tags automatically while staying on-brand</li>
              <li>Cross-post high-performing Shorts to other vertical platforms in one click</li>
            </ul>
            <div className="mt-6">
              <a href="#connect-youtube" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Connect YouTube Channel</a>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-10 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">FAQ</h3>
            <div className="space-y-4 text-gray-800">
              <div>
                <p className="font-medium">Is it safe to connect my channel?</p>
                <p className="text-gray-700">Yes — ZenCreator uses the official YouTube Data API via secure OAuth. You can revoke access anytime.</p>
              </div>
              <div>
                <p className="font-medium">What happens if my video is longer than 60 s?</p>
                <p className="text-gray-700">ZenCreator flags it and offers to trim, speed-ramp, or move to the long-form YouTube workflow.</p>
              </div>
              <div>
                <p className="font-medium">Can I edit a scheduled Short?</p>
                <p className="text-gray-700">Absolutely — change title, description, tags, thumbnail, or timing until it publishes.</p>
              </div>
              <p className="text-gray-700">Still have questions? <a className="text-blue-600 hover:underline" href="mailto:info@zencreator.pro">Contact support →</a></p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-10 border-t border-gray-200">
            <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Ready to launch your next viral Short without leaving ZenCreator?</h3>
              <p className="text-white/80 mb-6">Link your YouTube channel and schedule your first Smart Publish in under two minutes.</p>
              <a href="#connect-youtube" className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Connect YouTube</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


