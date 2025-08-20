
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
              Pricing<br />
              <span style={{background: 'linear-gradient(141deg, #D8B4FE -1.09%, #5A17CE 108.36%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}} className="text-2xl md:text-4xl">ZenCreator & ZenComfy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Simple credit packs for every ZenCreator tool, flat-rate add-ons for publishing & references, and transparent "book-a-call" enterprise tiers for ZenComfy and managed services.
            </p>
          </section>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">

          {/* Overview Cards - Full Width Scroll */}
          <section id="overview" className="pt-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">Pick the Plan That Fits Your Workflow</h2>
          </section>
        </div>
      </div>

      {/* Full Width Cards Carousel */}
      <div className="overflow-hidden">
        <style dangerouslySetInnerHTML={{
          __html: `
            .hide-scrollbar {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `
        }} />
        <div className="flex gap-6 px-6 overflow-x-auto pb-4 hide-scrollbar">
          {/* Credit Packs Card */}
          <div className="min-w-[350px] bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-blue-700">Content Creation</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Generate images, videos or profiles with ZenCreator tools
            </p>
            <a href="#credit-packs" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
              Credit Packs (pay-as-you-go)
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Publishing Hub Card */}
          <div className="min-w-[350px] bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-purple-700">Social Publishing</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Auto-publish across social channels
            </p>
            <a href="#publishing-hub" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors">
              Publishing Hub Add-On ($49/persona/month)
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Reference Feed Card */}
          <div className="min-w-[350px] bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-green-700">AI Training Data</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Pull real Instagram references for AI fine-tuning
            </p>
            <a href="#reference-feed" className="inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors">
              Reference Feed Add-On ($49/10 refs/month)
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* ZenComfy Card */}
          <div className="min-w-[350px] bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-orange-700">Cloud Infrastructure</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Run ComfyUI workflows in the cloud or as web apps
            </p>
            <a href="#zencomfy" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-800 transition-colors">
              ZenComfy Enterprise (from $1,000)
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Managed Services Card */}
          <div className="min-w-[350px] bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
              <h3 className="text-lg font-bold text-red-700">Full Service</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Fully managed content or influencer services
            </p>
            <a href="#managed-services" className="inline-flex items-center text-red-600 font-semibold hover:text-red-800 transition-colors">
              Pro Services (from $1,000)
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">

          {/* ZenCreator Credit Packs */}
          <section id="credit-packs" className="pt-24 pb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">ZenCreator Credit Packs</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Pay-as-you-go credits that never expire. Use across all ZenCreator tools.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                ['Starter','100','$ 9.99','$ 0.099', true],
                ['Builder','1 100','$ 99','$ 0.090', false],
                ['Pro','5 850','$ 499','$ 0.085', false],
                ['Scale','12 500','$ 999','$ 0.080', false]
              ].map(([name, credits, price, effective, highlight]) => (
                <Card key={name as string} className={`h-full transition-all duration-300 hover:shadow-xl hover:scale-105 ${highlight ? 'border-2 border-blue-400 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg' : 'hover:border-gray-300 border border-gray-200'}`}>
                  <CardHeader className="p-6 pb-4">
                    <CardTitle className={`text-gray-900 text-lg ${highlight ? 'text-blue-700' : ''}`}>{name as string}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-6 pb-6">
                    <div className="text-sm text-gray-600 mb-1">Credits</div>
                    <div className="text-xl font-bold text-gray-900 mb-4">{credits as string}</div>
                    <div className="text-sm text-gray-600 mb-1">Price</div>
                    <div className="text-xl font-bold text-gray-900 mb-4">{price as string}</div>
                    <div className="text-sm text-gray-600 mb-1">Effective /credit</div>
                    <div className={`text-lg font-semibold ${highlight ? 'text-blue-600' : 'text-gray-900'}`}>{effective as string}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12 border border-blue-200 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Good to know</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Credits <strong>never expire</strong>.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  One shared balance for <em>all</em> ZenCreator tools.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Buy packs any time; larger packs stack and lower blended cost.
                </li>
              </ul>
            </div>

            {/* Tool Cost Reference */}
            <h4 className="text-xl font-bold text-gray-900 mb-6">Tool Cost Reference</h4>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-8 shadow-lg">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="grid grid-cols-3 gap-4">
                  <h5 className="font-bold text-gray-900">Module</h5>
                  <h5 className="font-bold text-gray-900">Unit</h5>
                  <h5 className="font-bold text-gray-900">Credits</h5>
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
                  ['Photo Shoot','1 image','2'],
                  ['Dating Profile','1 moderated image','2'],
                  ['', '1 intro video','15']
                ].map(([module, unit, credits], idx) => (
                  <div key={idx} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="font-medium text-gray-900">{module}</div>
                      <div className="text-gray-600">{unit}</div>
                      <div className="text-gray-700 font-medium">{credits}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600 italic text-center">
              <em>(Dashboard shows remaining balance & per-task cost before you confirm.)</em>
            </p>
          </section>

          {/* Publishing Hub Add-On */}
          <section id="publishing-hub" className="py-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Publishing Hub Add-On</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Connect all major social platforms with smart scheduling and AI-powered optimization.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl overflow-hidden mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-4 border-b border-purple-200">
                <div className="grid grid-cols-2 gap-4">
                  <h4 className="font-bold text-gray-900">What's Included</h4>
                  <h4 className="font-bold text-gray-900">Price</h4>
                </div>
              </div>
              <div className="divide-y divide-purple-200">
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-700">Connect IG, Threads, X, Facebook, TikTok, YouTube</div>
                    <div className="text-gray-600">—</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-700">Smart Publish windows, AI captions & hashtags</div>
                    <div className="text-gray-600">—</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-700">Unified calendar & role-based approvals</div>
                    <div className="text-gray-600">—</div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gradient-to-r from-purple-100 to-pink-100 border-t-2 border-purple-300">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-bold text-gray-900">Price</div>
                    <div className="font-bold text-purple-700 text-xl">$49 / persona / month*</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              * A "persona" is one creator profile with any number of connected social accounts.
            </p>
          </section>

          {/* Reference Feed Add-On */}
          <section id="reference-feed" className="py-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Reference Feed Add-On</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Live Instagram inspiration boards for AI training and style consistency.</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-4 border-b border-green-200">
                <div className="grid grid-cols-2 gap-4">
                  <h4 className="font-bold text-gray-900">Feature</h4>
                  <h4 className="font-bold text-gray-900">Price</h4>
                </div>
              </div>
              <div className="divide-y divide-green-200">
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-700">10 live Instagram boards for style & pose inspiration</div>
                    <div className="font-bold text-green-700 text-lg">$49 / month</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-gray-700">Auto-refresh every 24 h, searchable in Creator Hub</div>
                    <div className="text-gray-600">—</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ZenComfy */}
          <section id="zencomfy" className="py-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">ZenComfy — ComfyUI in the Cloud</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Professional GPU cloud infrastructure for ComfyUI workflows and web app deployment.</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl overflow-hidden mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-4 border-b border-orange-200">
                <div className="grid grid-cols-3 gap-4">
                  <h4 className="font-bold text-gray-900">Plan</h4>
                  <h4 className="font-bold text-gray-900">Ideal For</h4>
                  <h4 className="font-bold text-gray-900">From</h4>
                </div>
              </div>
              <div className="divide-y divide-orange-200">
                <div className="px-6 py-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium text-gray-900">Team</div>
                    <div className="text-gray-700">Small R&D or creative teams</div>
                    <div className="font-bold text-orange-700 text-lg">$ 1 000 / month</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium text-gray-900">Enterprise</div>
                    <div className="text-gray-700">Dedicated GPU clusters, VPC, SSO, SLA</div>
                    <div className="text-gray-600">Custom</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 mb-8 border border-orange-300 shadow-lg">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Pay-for-runtime GPU billing (A100 / H100 / L4 options).
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Workflow → Web-App builder included.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Book a 30-min call; we size hardware and forecast cost.
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Talk to Sales →
              </a>
            </div>
          </section>

          {/* Managed Services */}
          <section id="managed-services" className="py-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Managed Services</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Full-service content creation and AI influencer management with dedicated teams.</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-2xl overflow-hidden mb-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-red-100 to-pink-100 px-6 py-4 border-b border-red-200">
                <div className="grid grid-cols-3 gap-4">
                  <h4 className="font-bold text-gray-900">Service</h4>
                  <h4 className="font-bold text-gray-900">From</h4>
                  <h4 className="font-bold text-gray-900">What's Covered</h4>
                </div>
              </div>
              <div className="divide-y divide-red-200">
                <div className="px-6 py-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium text-gray-900">AI Influencer Studio</div>
                    <div className="font-bold text-red-700 text-lg">$ 3 000 / month</div>
                    <div className="text-gray-700">Persona design, daily content, engagement loop</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium text-gray-900">Dating Profile Packs</div>
                    <div className="font-bold text-red-700 text-lg">$ 1 000</div>
                    <div className="text-gray-700">moderated profiles (bio + media)</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-medium text-gray-900">Photo Shoot Generation</div>
                    <div className="font-bold text-red-700 text-lg">$ 1 000</div>
                    <div className="text-gray-700">moderated images</div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8 text-center">All services include human QA and dedicated PM.</p>
            
            <div className="text-center">
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Book a Call →
              </a>
            </div>
          </section>

        </div>
      </div>

      {/* FAQ - Full Width with Gradient Background */}
      <section className="py-[150px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
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
                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Can I mix credit packs with the Publishing add-on?</h4>
                  <p className="text-gray-700 leading-relaxed">Yes. Credits cover generation; Publishing is a flat monthly fee per persona.</p>
                </div>
                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Do credits roll over?</h4>
                  <p className="text-gray-700 leading-relaxed">They never expire.</p>
                </div>
                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What happens if I run out mid-task?</h4>
                  <p className="text-gray-700 leading-relaxed">We warn you and auto-pause the queue until you top up.</p>
                </div>
                <div className="border-b border-gray-300 pb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Can I upgrade/downgrade ZenComfy?</h4>
                  <p className="text-gray-700 leading-relaxed">Plans adjust month-to-month based on actual GPU consumption.</p>
                </div>
                <div className="border-b border-gray-300 pb-6 last:border-b-0">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Do you offer volume discounts or agency bundles?</h4>
                  <p className="text-gray-700 leading-relaxed">Contact sales — bulk credits and multi-persona Publishing discounts are available.</p>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </section>

      {/* CTA Contact Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <section className="py-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
              <p className="text-xl text-gray-700">
                Still unsure? Email <span className="font-bold text-purple-600">sales@zencreator.pro</span> — we'll walk you through a cost model in 10 minutes.
              </p>
            </div>
          </section>
        </div>
      </div>

    </PageLayout>
  );
};