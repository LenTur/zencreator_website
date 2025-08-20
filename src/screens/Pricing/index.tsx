
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


export const Pricing = () => {
  return (
    <PageLayout 
      title="Pricing" 
      description="Simple credit packs for every ZenCreator tool, flat-rate add-ons for publishing & references, and transparent book-a-call enterprise tiers for ZenComfy and managed services."
    >
      {/* Hero Section - Enhanced */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        <div className="container mx-auto px-4 pb-20 relative" style={{ paddingTop: '140px' }}>
          <div className="max-w-6xl mx-auto">
            <section className="pt-24 pb-[40px] text-center relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-10 blur-3xl"></div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Pricing<br />
                <span style={{background: 'linear-gradient(141deg, #D8B4FE -1.09%, #5A17CE 108.36%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}} className="text-2xl md:text-4xl">ZenCreator & ZenComfy</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                Simple credit packs for every ZenCreator tool, flat-rate add-ons for publishing & references, and transparent <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">Book a Call</a> enterprise tiers for ZenComfy and managed services.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Enhanced Cards - 2 Rows Layout */}
      <div className="bg-gradient-to-br from-gray-50 to-white relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/20 via-transparent to-blue-50/20"></div>
        <style dangerouslySetInnerHTML={{
          __html: `
            .pricing-card {
              background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255,255,255,0.2);
            }
            .pricing-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
            }
          `
        }} />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Pick the Plan That Fits Your Workflow */}
            <div className="text-center mb-16 relative">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-16 relative">
                Pick the Plan That Fits Your Workflow
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"></div>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              
              {/* Credit Packs Card */}
              <a 
                href="#credit-packs" 
                className="pricing-card rounded-3xl p-6 transition-all duration-500 relative overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('credit-packs')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full -mr-12 -mt-12"></div>
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4 relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 shadow-lg"></div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Content Creation</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm relative flex-1">
                    Generate images, videos or profiles with ZenCreator tools
                  </p>
                  <div className="text-left font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent text-sm mt-auto">
                    Credit Packs (pay-as-you-go)
                  </div>
                </div>
              </a>

              {/* Publishing Hub Card */}
              <a 
                href="#publishing-hub" 
                className="pricing-card rounded-3xl p-6 transition-all duration-500 relative overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('publishing-hub')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full -mr-12 -mt-12"></div>
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4 relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-3 shadow-lg"></div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">Social Publishing</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm relative flex-1">
                    Auto-publish across social channels
                  </p>
                  <div className="text-left font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent text-sm mt-auto">
                    Publishing Hub Add-On ($49/persona/month)
                  </div>
                </div>
              </a>

              {/* Reference Feed Card */}
              <a 
                href="#reference-feed" 
                className="pricing-card rounded-3xl p-6 transition-all duration-500 relative overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('reference-feed')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/10 to-transparent rounded-full -mr-12 -mt-12"></div>
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4 relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3 shadow-lg"></div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">AI Training Data</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm relative flex-1">
                    Pull real Instagram references for AI fine-tuning
                  </p>
                  <div className="text-left font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent text-sm mt-auto">
                    Reference Feed Add-On ($49/10 refs/month)
                  </div>
                </div>
              </a>

              {/* ZenComfy Card */}
              <a 
                href="#zencomfy" 
                className="pricing-card rounded-3xl p-6 transition-all duration-500 relative overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('zencomfy')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full -mr-12 -mt-12"></div>
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4 relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-3 shadow-lg"></div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">Cloud Infrastructure</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm relative flex-1">
                    Run ComfyUI workflows in the cloud or as web apps
                  </p>
                  <div className="text-left font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent text-sm mt-auto">
                    ZenComfy Enterprise (from $1,000)
                  </div>
                </div>
              </a>

              {/* Managed Services Card */}
              <a 
                href="#managed-services" 
                className="pricing-card rounded-3xl p-6 transition-all duration-500 relative overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('managed-services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-400/10 to-transparent rounded-full -mr-12 -mt-12"></div>
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4 relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-3 shadow-lg"></div>
                    <h3 className="text-lg font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Full Service</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm relative flex-1">
                    Fully managed content or influencer services
                  </p>
                  <div className="text-left font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent text-sm mt-auto">
                    Pro Services (from $1,000)
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* ZenCreator Credit Packs */}
      <section id="credit-packs" className="mb-24 relative">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">ZenCreator Credit Packs</h3>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative background elements */}
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 shadow-2xl overflow-hidden">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 px-8 py-6 border-b border-gray-200/50">
              <div className="grid grid-cols-4 gap-8">
                <div className="text-left font-bold text-gray-900 text-lg">Pack</div>
                <div className="text-left font-bold text-gray-900 text-lg">Credits</div>
                <div className="text-left font-bold text-gray-900 text-lg">Price</div>
                <div className="text-left font-bold text-gray-900 text-lg">Effective /credit</div>
              </div>
            </div>
            
            {/* Table Rows */}
            <div className="divide-y divide-gray-100">
              {/* Starter Row */}
              <div className="px-8 py-6 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent transition-all duration-300 group">
                <div className="grid grid-cols-4 gap-8 items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-900 font-semibold text-lg">Starter</span>
                  </div>
                  <div className="text-gray-700 font-medium text-lg">100</div>
                  <div className="text-gray-700 font-medium text-lg">$ 9.99</div>
                  <div className="text-gray-600 font-medium text-lg">$ 0.099</div>
                </div>
              </div>
              
              {/* Builder Row */}
              <div className="px-8 py-6 hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-transparent transition-all duration-300 group">
                <div className="grid grid-cols-4 gap-8 items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-900 font-semibold text-lg">Builder</span>
                  </div>
                  <div className="text-gray-700 font-medium text-lg">1 100</div>
                  <div className="text-gray-700 font-medium text-lg">$ 99</div>
                  <div className="text-gray-600 font-medium text-lg">$ 0.090</div>
                </div>
              </div>
              
              {/* Pro Row - Highlighted */}
              <div className="px-8 py-6 via-emerald-50/50 to-teal-50/30 hover:from-green-100/70 hover:via-emerald-100/50 hover:to-teal-100/30 transition-all duration-300 group relative">
                <div className="absolute -left-1 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-r-full"></div>
                <div className="grid grid-cols-4 gap-8 items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-900 font-bold text-lg">Pro</span>
                  </div>
                  <div className="text-gray-700 font-semibold text-lg">5 850</div>
                  <div className="text-gray-700 font-semibold text-lg">$ 499</div>
                  <div className="text-gray-700 font-semibold text-lg">$ 0.085</div>
                </div>
              </div>
              
              {/* Scale Row */}
              <div className="px-8 py-6 hover:bg-gradient-to-r hover:from-orange-50/50 hover:to-transparent transition-all duration-300 group">
                <div className="grid grid-cols-4 gap-8 items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-900 font-semibold text-lg">Scale</span>
                  </div>
                  <div className="text-gray-700 font-medium text-lg">12 500</div>
                  <div className="text-gray-700 font-medium text-lg">$ 999</div>
                  <div className="text-gray-600 font-medium text-lg">$ 0.080</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Good to know */}
        <div className="max-w-4xl mx-auto pt-12">
          <div className="bg-gradient-to-r from-blue-50 via-white to-cyan-50 rounded-3xl p-8 border border-blue-100 shadow-lg">
            <h4 className="font-bold text-gray-900 mb-6 text-xl">Good to know</h4>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="break-words">Credits <strong>never expire</strong>.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="break-words">One shared balance for <em>all</em> ZenCreator tools.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="break-words">Buy packs any time; larger packs stack and lower blended cost.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Publishing Hub Add-On */}
      <section id="publishing-hub" className="mb-24 relative">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Publishing Hub Add-On</h3>
        </div>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            
            {/* What's Included Section */}
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-white px-8 py-8 border-b border-purple-100/50">
              <h4 className="font-black text-gray-900 text-xl mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3"></div>
                What's Included
              </h4>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-200"></div>
                  <span className="text-gray-700 font-medium leading-relaxed">Connect IG, Threads, X, Facebook, TikTok, YouTube</span>
                </div>
                <div className="flex items-start group">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-200"></div>
                  <span className="text-gray-700 font-medium leading-relaxed">Smart Publish windows, AI captions & hashtags</span>
                </div>
                <div className="flex items-start group">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-200"></div>
                  <span className="text-gray-700 font-medium leading-relaxed">Unified calendar & role-based approvals</span>
                </div>
              </div>
            </div>
            
            {/* Price Section */}
            <div className="px-8 py-10 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"></div>
              <h4 className="font-black text-gray-900 text-xl mb-4">Price</h4>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-black text-4xl mb-2">
                $ 49 / persona / month *
              </div>
            </div>
          </div>
          
          {/* Footnote */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm italic font-medium">
              * A "persona" is one creator profile with any number of connected social accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Reference Feed Add-On */}
      <section id="reference-feed" className="mb-24 relative">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Reference Feed Add-On</h3>
        </div>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            
            {/* Features Section */}
            <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-white px-8 py-8 border-b border-green-100/50">
              <h4 className="font-black text-gray-900 text-xl mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-3"></div>
                Features
              </h4>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-200"></div>
                  <span className="text-gray-700 font-medium leading-relaxed">10 live Instagram boards for style & pose inspiration</span>
                </div>
                <div className="flex items-start group">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-200"></div>
                  <span className="text-gray-700 font-medium leading-relaxed">Auto-refresh every 24 h, searchable in Creator Hub</span>
                </div>
              </div>
            </div>
            
            {/* Price Section */}
            <div className="px-8 py-10 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30 text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"></div>
              <h4 className="font-black text-gray-900 text-xl mb-4">Price</h4>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 font-black text-4xl">
                $ 49 / month
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZenComfy — ComfyUI in the Cloud */}
      <section id="zencomfy" className="mb-24 relative">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">ZenComfy — ComfyUI in the Cloud</h3>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            
            {/* Plans Section */}
            <div className="bg-gradient-to-br from-orange-50 via-red-50 to-white px-8 py-8 border-b border-orange-100/50">
              <h4 className="font-black text-gray-900 text-xl mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-3"></div>
                Plans
              </h4>
              <div className="space-y-6">
                {/* Team Plan */}
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-orange-100 group hover:border-orange-200 transition-colors duration-200">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-200"></div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Team</div>
                      <div className="text-gray-600 text-sm">Small R&D or creative teams</div>
                    </div>
                  </div>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 font-black text-xl">
                    $ 1 000 / month
                  </div>
                </div>
                
                {/* Enterprise Plan */}
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-orange-100 group hover:border-orange-200 transition-colors duration-200">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-200"></div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Enterprise</div>
                      <div className="text-gray-600 text-sm">Dedicated GPU clusters, VPC, SSO, SLA</div>
                    </div>
                  </div>
                  <div className="text-gray-700 font-bold text-xl">
                    Custom
                  </div>
                </div>
              </div>
            </div>
            
            {/* Details & CTA Section */}
            <div className="px-8 py-8 bg-gradient-to-br from-white via-orange-50/30 to-red-50/30">
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700 font-medium leading-relaxed">Pay-for-runtime GPU billing (A100 / H100 / L4 options).</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700 font-medium leading-relaxed">Workflow → Web-App builder included.</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700 font-medium leading-relaxed">Book a 30-min call; we size hardware and forecast cost.</span>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="mailto:sales@zencreator.pro" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Talk to Sales →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Services */}
      <section id="managed-services" className="mb-24 relative">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Managed Services</h3>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            
            {/* Services Section */}
            <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-white px-8 py-8 border-b border-indigo-100/50">
              <h4 className="font-black text-gray-900 text-xl mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full mr-3"></div>
                Services
              </h4>
              <div className="space-y-6">
                {/* AI Influencer Studio */}
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-indigo-100 group hover:border-indigo-200 transition-colors duration-200">
                  <div className="flex items-center flex-1">
                    <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-200"></div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-lg">AI Influencer Studio</div>
                      <div className="text-gray-600 text-sm">Persona design, daily content, engagement loop</div>
                    </div>
                  </div>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 font-black text-xl ml-4">
                    $ 3 000 / month
                  </div>
                </div>
                
                {/* Dating Profile Packs */}
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-indigo-100 group hover:border-indigo-200 transition-colors duration-200">
                  <div className="flex items-center flex-1">
                    <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-200"></div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-lg">Dating Profile Packs</div>
                      <div className="text-gray-600 text-sm">moderated profiles (bio + media)</div>
                    </div>
                  </div>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 font-black text-xl ml-4">
                    $ 1 000
                  </div>
                </div>
                
                {/* Photo-Shoot Generation */}
                <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-indigo-100 group hover:border-indigo-200 transition-colors duration-200">
                  <div className="flex items-center flex-1">
                    <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-200"></div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-lg">Photo-Shoot Generation</div>
                      <div className="text-gray-600 text-sm">moderated images</div>
                    </div>
                  </div>
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 font-black text-xl ml-4">
                    $ 1 000
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer Note */}
            <div className="px-8 py-6 bg-gradient-to-br from-white via-indigo-50/30 to-blue-50/30 text-center">
              <p className="text-gray-700 font-medium">
                All services include <strong>human QA</strong> and <strong>dedicated PM</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>












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

      {/* CTA - Full Width */}
      <section className="relative overflow-hidden">
        <div className="bg-ink-900 text-white text-center py-24 relative">
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Level up your content game
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to accelerate your creative pipeline?</h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Pick your starting point and see results today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-600 hover:text-white transition-colors duration-200">
                Get ZenCreator
              </a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors duration-200">
                Request Custom Quote
              </a>
            </div>
            <div className="border-t border-white/20 pt-8">
              <p className="text-white/90 mb-2"><strong>Need something custom?</strong></p>
              <p className="text-white/80">
                Email <a href="mailto:info@zencreator.pro" className="text-white hover:underline font-medium">info@zencreator.pro</a> — we're happy to architect the perfect mix.
              </p>
            </div>
          </div>
          {/* Gradient bars at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32">
            <div className="absolute bottom-0 left-0 w-1/4 h-6 bg-gradient-to-r from-red-500 to-orange-500"></div>
            <div className="absolute bottom-0 left-1/4 w-1/4 h-12 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <div className="absolute bottom-0 left-2/4 w-1/4 h-8 bg-gradient-to-r from-green-500 to-teal-500"></div>
            <div className="absolute bottom-0 left-3/4 w-1/4 h-16 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};



