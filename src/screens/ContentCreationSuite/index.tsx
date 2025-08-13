import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const ContentCreationSuite: React.FC = () => {
  return (
    <PageLayout
      title="Content Creation — Your All-in-One AI Studio"
      description="Generate, refine, and repurpose visual content at scale—without leaving a single dashboard."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Primary CTA */}
          <section className="py-4">
            <div className="text-center">
              <a href="/products/zencreator/content-creation/ai-face-generation" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-colors">Try Creation Suite</a>
            </div>
          </section>

          {/* What You Can Do */}
          <section className="py-12 border-t border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">What You Can Do Here</h3>
              <span className="hidden md:inline-block text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700">Updated monthly</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                ['Face Generation','Four realistic faces per click—dial in gender, age, ethnicity, more.','/products/zencreator/content-creation/ai-face-generation'],
                ['Face Swapping','Ultra-seamless swaps for images & video, bulk-ready.','/products/zencreator/content-creation/ai-face-swapping'],
                ['Upscaling','Four specialised models up to 4K+ (Basic, Face‑Safe, Textured, Full Restored).','/products/zencreator/content-creation/ai-upscaling'],
                ['Prompt Generation','Flux or SDXL images from prompts; LoRa physique tuning; uncensored option.','/products/zencreator/content-creation/ai-generation-prompt'],
                ['Reference Generation','Re‑imagine any photo into new scenes while preserving identity.','/products/zencreator/content-creation/ai-generation-reference'],
                ['Photo-Shoot Generator','Full themed sets from one face + body reference.','/products/zencreator/content-creation/photo-shoot'],
                ['Dating-Profile Generator','Complete bios + photo/video packs, JSON export.','/products/zencreator/content-creation/dating-profiles'],
                ['Video Generation','5–10 s clips via Kling 1.6 / 2.0 or WAN (uncensored).','/products/zencreator/content-creation/video-generation'],
                ['Carousel Generator','Multi‑angle sets for social carousels & catalogs.','/products/zencreator/content-creation/carousel-generation']
              ].map(([title, desc, href]) => (
                <a key={title as string} href={href as string}>
                  <Card className="group h-full transition-all hover:shadow-lg hover:border-purple-200">
                    <CardHeader className="p-5">
                      <CardTitle className="text-gray-900 text-base">{title as string}</CardTitle>
                      <CardDescription className="text-gray-600 mt-1">{desc as string}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 pb-5 px-5">
                      <span className="inline-flex items-center text-sm font-medium text-purple-700 group-hover:text-purple-800">
                        Open →
                      </span>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-600 italic mt-4">New tools land every month—your dashboard updates automatically.</p>
          </section>

          {/* Shared Power Features */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Shared Power Features</h3>
            <div className="space-y-6 text-gray-800">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Batch Mode Everywhere</h4>
                <p>Spin up 1 or 1 000 assets; ZenCreator fans out GPU jobs and shows live progress.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">One-Click Pipelines</h4>
                <p>Any output can jump straight into Upscale → Face Swap → Video → Publishing—no downloads, no re-uploads.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Instant Publishing</h4>
                <p>Post directly to Instagram, TikTok, YouTube Shorts, Threads, X, or Facebook without leaving the suite.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Parallel Processing</h4>
                <p>Serverless GPU clusters handle tasks concurrently — minutes, not hours.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Unified Credit Billing</h4>
                <p>One pay-as-you-go balance for every module; no surprise line items.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Secure & Compliant</h4>
                <p>Zero-retention by default, encrypted storage, SOC-2 hosting, optional VPC peering.</p>
              </div>
            </div>
          </section>

          {/* Why Teams Love the Suite */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Teams Love the Suite</h3>
            <ul className="space-y-3 text-gray-800">
              <li>• <strong>Speed to Market</strong> — Prototype, iterate, and launch creative in a single afternoon.</li>
              <li>• <strong>Consistent Quality</strong> — Identity locking keeps faces, tones, and styles aligned across every asset.</li>
              <li>• <strong>Lower Cost</strong> — Replace multiple subscriptions, studio fees, and manual labour with an integrated workflow.</li>
              <li>• <strong>Scales With You</strong> — From a solo marketer to enterprise volumes—same UI, bigger backend.</li>
            </ul>
          </section>

          {/* Get Started */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started in Three Steps</h3>
            <ol className="space-y-3 list-decimal pl-6 text-gray-800">
              <li><strong>Pick a Module</strong> – Face Gen, Photo-Shoot, Video…</li>
              <li><strong>Generate & Refine</strong> – Batch, review, approve.</li>
              <li><strong>Publish or Pipeline</strong> – One click to social channels, or send downstream for further magic.</li>
            </ol>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="/products/zencreator/content-creation/ai-face-generation" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-colors">Try Creation Suite</a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book a 15-Minute Demo</a>
            </div>
          </section>

          {/* Contact */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Have questions or need a custom workflow?</h3>
            <p className="text-gray-800">Contact us at <a href="mailto:info@zencreator.pro" className="text-blue-600 hover:underline font-medium">info@zencreator.pro</a> — we’ll design the perfect content pipeline for your team.</p>
          </section>

        </div>
      </div>
    </PageLayout>
  );
};


