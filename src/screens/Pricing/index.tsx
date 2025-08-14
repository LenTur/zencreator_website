import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Pricing = () => {
  return (
    <PageLayout 
      title="Pricing" 
      description="Simple credit packs for every ZenCreator tool, flat-rate add-ons for publishing & references, and transparent 'book-a-call' enterprise tiers for ZenComfy and managed services."
    >
      {/* Hero Section */}
      <div className="container mx-auto px-4 pb-20" style={{ paddingTop: '140px' }}>
        <div className="max-w-6xl mx-auto">
          <section className="pt-24 pb-[40px] text-center">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Pricing<br />Creator OS & ZenComfy
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Simple credit packs for every Creator OS tool, flat-rate add-ons for publishing & references, and transparent "book-a-call" enterprise tiers for ZenComfy and managed services.
            </p>
          </section>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">

          {/* Overview Table */}
          <section className="py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pick the Plan That Fits Your Workflow</h2>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-16">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <h4 className="font-semibold text-gray-900">You Need To…</h4>
                  <h4 className="font-semibold text-gray-900">Start Here</h4>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-600">Generate images, videos or profiles with ZenCreator tools</div>
                    <div className="font-medium text-blue-600">Credit Packs (pay-as-you-go)</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-600">Auto-publish across social channels</div>
                    <div className="font-medium text-purple-600">Publishing Hub Add-On ($49/persona/month)</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-600">Pull real Instagram references for AI fine-tuning</div>
                    <div className="font-medium text-green-600">Reference Feed Add-On ($49/10 refs/month)</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-600">Run ComfyUI workflows in the cloud or as web apps</div>
                    <div className="font-medium text-orange-600">ZenComfy Enterprise (from $1,000)</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-600">Fully managed content or influencer services</div>
                    <div className="font-medium text-red-600">Pro Services (from $1,000)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 1. ZenCreator Credit Packs */}
          <section className="py-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">1 | ZenCreator Credit Packs</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                ['Starter','100','$ 9.99','$ 0.099', true],
                ['Builder','1 100','$ 99','$ 0.090', false],
                ['Pro','5 850','$ 499','$ 0.085', false],
                ['Scale','12 500','$ 999','$ 0.080', false]
              ].map(([name, credits, price, effective, highlight]) => (
                <Card key={name as string} className={`h-full transition-all hover:shadow-lg ${highlight ? 'border-blue-300' : ''}`}>
                  <CardHeader className="p-5 pb-3">
                    <CardTitle className="text-gray-900 text-base">{name as string}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-5 pb-5">
                    <div className="text-sm text-gray-600">Credits</div>
                    <div className="text-lg font-semibold text-gray-900">{credits as string}</div>
                    <div className="mt-3 text-sm text-gray-600">Price</div>
                    <div className="text-lg font-semibold text-gray-900">{price as string}</div>
                    <div className="mt-3 text-sm text-gray-600">Effective /credit</div>
                    <div className={`text-lg ${highlight ? 'font-semibold text-blue-600' : 'text-gray-900'}`}>{effective as string}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Good to know</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Credits <strong>never expire</strong>.</li>
                <li>• One shared balance for <em>all</em> ZenCreator tools.</li>
                <li>• Buy packs any time; larger packs stack and lower blended cost.</li>
              </ul>
            </div>

            {/* Tool Cost Reference */}
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Tool Cost Reference</h4>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <div className="grid grid-cols-3 gap-4">
                  <h5 className="font-semibold text-gray-900">Module</h5>
                  <h5 className="font-semibold text-gray-900">Unit</h5>
                  <h5 className="font-semibold text-gray-900">Credits</h5>
                </div>
              </div>
              <div className="divide-y divide-gray-200 text-sm">
                {[
                  ['Face Generation','1 task = 4 faces','2'],
                  ['Face Swap','1 image','2'],
                  ['', '1 s video','3'],
                  ['Upscale','v1 / v2 / v3 / v4','2 / 3 / 4 / 5'],
                  ['Prompt Gen (SDXL or Flux)','1 image','2'],
                  ['Reference Gen (SDXL or Flux)','1 image','2'],
                  ['Video Gen','Kling 1.6 5 s / 10 s','2 / 4'],
                  ['', 'Kling 2.0 5 s / 10 s','2 / 4'],
                  ['', 'WAN 5 s','5'],
                  ['Carousel','1 angle','2'],
                  ['Photo-Shoot','1 image','2'],
                  ['Dating Profile','1 moderated image','2'],
                  ['', '1 intro video','15']
                ].map(([module, unit, credits], idx) => (
                  <div key={idx} className="px-6 py-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="font-medium text-gray-900">{module}</div>
                      <div className="text-gray-600">{unit}</div>
                      <div className="text-gray-600">{credits}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600 italic text-center">
              <em>(Dashboard shows remaining balance & per-task cost before you confirm.)</em>
            </p>
          </section>

          {/* 2. Publishing Hub Add-On */}
          <section className="py-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">2 | Publishing Hub Add-On</h3>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <h4 className="font-semibold text-gray-900">What's Included</h4>
                  <h4 className="font-semibold text-gray-900">Price</h4>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-600">Connect IG, Threads, X, Facebook, TikTok, YouTube</div>
                    <div className="text-gray-600">—</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-600">Smart Publish windows, AI captions & hashtags</div>
                    <div className="text-gray-600">—</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-600">Unified calendar & role-based approvals</div>
                    <div className="text-gray-600">—</div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-purple-50">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium text-gray-900">Price</div>
                    <div className="font-bold text-purple-600 text-lg">$49 / persona / month*</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              * A "persona" is one creator profile with any number of connected social accounts.
            </p>
          </section>

          {/* 3. Reference Feed Add-On */}
          <section className="py-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">3 | Reference Feed Add-On</h3>
            
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <h4 className="font-semibold text-gray-900">Feature</h4>
                  <h4 className="font-semibold text-gray-900">Price</h4>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-600">10 live Instagram boards for style & pose inspiration</div>
                    <div className="font-bold text-green-600">$49 / month</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-600">Auto-refresh every 24 h, searchable in Creator Hub</div>
                    <div className="text-gray-600">—</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. ZenComfy */}
          <section className="py-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">4 | ZenComfy — ComfyUI in the Cloud</h3>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <div className="grid grid-cols-3 gap-4">
                  <h4 className="font-semibold text-gray-900">Plan</h4>
                  <h4 className="font-semibold text-gray-900">Ideal For</h4>
                  <h4 className="font-semibold text-gray-900">From</h4>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="px-6 py-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium text-gray-900">Team</div>
                    <div className="text-gray-600">Small R&D or creative teams</div>
                    <div className="font-bold text-orange-600">$ 1 000 / month</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium text-gray-900">Enterprise</div>
                    <div className="text-gray-600">Dedicated GPU clusters, VPC, SSO, SLA</div>
                    <div className="text-gray-600">Custom</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-6 mb-6">
              <ul className="space-y-2 text-gray-700">
                <li>• Pay-for-runtime GPU billing (A100 / H100 / L4 options).</li>
                <li>• Workflow → Web-App builder included.</li>
                <li>• Book a 30-min call; we size hardware and forecast cost.</li>
              </ul>
            </div>
            
            <div className="text-center">
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                Talk to Sales →
              </a>
            </div>
          </section>

          {/* 5. Managed Services */}
          <section className="py-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">5 | Managed Services</h3>
            
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <div className="grid grid-cols-3 gap-4">
                  <h4 className="font-semibold text-gray-900">Service</h4>
                  <h4 className="font-semibold text-gray-900">From</h4>
                  <h4 className="font-semibold text-gray-900">What's Covered</h4>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="px-6 py-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium text-gray-900">AI Influencer Studio</div>
                    <div className="font-bold text-red-600">$ 3 000 / month</div>
                    <div className="text-gray-600">Persona design, daily content, engagement loop</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium text-gray-900">Dating Profile Packs</div>
                    <div className="font-bold text-red-600">$ 1 000</div>
                    <div className="text-gray-600">moderated profiles (bio + media)</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium text-gray-900">Photo-Shoot Generation</div>
                    <div className="font-bold text-red-600">$ 1 000</div>
                    <div className="text-gray-600">moderated images</div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">All services include human QA and dedicated PM.</p>
            
            <div className="text-center">
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                Book a Call →
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-[150px]">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Left side - Title */}
              <div className="lg:col-span-2">
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  Frequently asked questions
                </h3>
              </div>
              
              {/* Right side - FAQ Items */}
              <div className="lg:col-span-3">
                <div className="space-y-8">
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Can I mix credit packs with the Publishing add-on?</h4>
                    <p className="text-gray-600 leading-relaxed">Yes. Credits cover generation; Publishing is a flat monthly fee per persona.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do credits roll over?</h4>
                    <p className="text-gray-600 leading-relaxed">They never expire.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What happens if I run out mid-task?</h4>
                    <p className="text-gray-600 leading-relaxed">We warn you and auto-pause the queue until you top up.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Can I upgrade/downgrade ZenComfy?</h4>
                    <p className="text-gray-600 leading-relaxed">Plans adjust month-to-month based on actual GPU consumption.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you offer volume discounts or agency bundles?</h4>
                    <p className="text-gray-600 leading-relaxed">Contact sales — bulk credits and multi-persona Publishing discounts are available.</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-gray-600">
                    Still unsure? <strong>Email</strong>{' '}
                    <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium transition-colors">
                      sales@zencreator.pro
                    </a>{' '}
                    — we'll walk you through a cost model in 10 minutes.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
};
