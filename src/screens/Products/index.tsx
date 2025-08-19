import React, { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Link } from 'react-router-dom';
import { CreditCard, Shield, Zap, Users } from 'lucide-react';

export const Products = () => {
  type CreatorModuleKey = 'creator-hub' | 'publishing-hub' | 'account-management' | 'analytics-insights';
  type ZenComfyModuleKey = 'comfyui-cloud' | 'workflow-webapp' | 'serverless-autoscale' | 'private-models';
  interface ModuleDef { title: string; description: string; visual: string }

  const [activeModule, setActiveModule] = useState<CreatorModuleKey>('creator-hub');
  const [activeZenModule, setActiveZenModule] = useState<ZenComfyModuleKey>('comfyui-cloud');

  const creatorModules: Record<CreatorModuleKey, ModuleDef> = {
    'creator-hub': {
      title: 'Creator Hub',
      description: 'Face generation, photo shoots, upscaling, video & more—batch-ready.',
      visual: 'Creator Hub Preview'
    },
    'publishing-hub': {
      title: 'Publishing Hub', 
      description: 'Official APIs for Instagram, Threads, X, Facebook, TikTok & YouTube Shorts with Smart Publish windows.',
      visual: 'Publishing Hub Preview'
    },
    'account-management': {
      title: 'Account Management',
      description: 'Centralised profiles, token health, KPI goals per creator.',
      visual: 'Account Management Preview'
    },
    'analytics-insights': {
      title: 'Analytics & Insights',
      description: 'Drill from post-level to fleet-level metrics; AI highlights next steps.',
      visual: 'Analytics & Insights Preview'
    }
  };

  const zenComfyModules: Record<ZenComfyModuleKey, ModuleDef> = {
    'comfyui-cloud': {
      title: 'ComfyUI in the Cloud',
      description: 'One-click spin-up of dedicated GPU workspaces—pay only for runtime.',
      visual: 'ComfyUI Cloud Preview'
    },
    'workflow-webapp': {
      title: 'Workflow → Web App',
      description: 'Wrap any Comfy graph in a shareable, auth-protected web UI—zero code.',
      visual: 'Web App Builder Preview'
    },
    'serverless-autoscale': {
      title: 'Serverless Autoscale',
      description: 'Fleet of A100/H100 GPUs turns on only when jobs run.',
      visual: 'Autoscale Preview'
    },
    'private-models': {
      title: 'Private Models & Nodes',
      description: 'Upload checkpoints, LoRAs, custom Python in isolated containers.',
      visual: 'Private Models Preview'
    }
  };

  return (
    <PageLayout 
      title="ZenCreator Product Suite — Creator OS & ZenComfy" 
      description="Discover Creator OS for social-first AI content and ZenComfy for ComfyUI cloud workflows. Two solutions, one vision: create, deploy and scale visual content without friction."
    >
      <div className="container mx-auto px-4 pb-20" style={{ paddingTop: '140px' }}>
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="pt-24 pb-[40px] text-center">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">Our Products</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">One company, two powerful engines for creative scale.</p>
          </section>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Creator OS */}
          <section className="pt-[40px] pb-[40px]">
            <div className="bg-ink-900 rounded-3xl p-6 md:p-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Creator OS</h2>
                <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                  <strong>AI studio + omni-channel publishing + growth analytics</strong>
                </p>
              </div>
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Left side - Modules List */}
                <div className="lg:col-span-2">
                  <div className="space-y-4">
                    {Object.entries(creatorModules).map(([key, module]) => (
                      <button
                        key={key}
                        onClick={() => setActiveModule(key)}
                        className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                          activeModule === key 
                            ? 'bg-purple-600/20 border border-purple-400/30' 
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <h3 className="text-xl font-bold text-white mb-3">{module.title}</h3>
                        <p className="text-white/80 leading-relaxed">{module.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Right side - Visual */}
                <div className="lg:col-span-3 bg-white rounded-3xl p-4 min-h-[500px] flex items-center justify-center">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    {activeModule === 'creator-hub' && (
                      <img 
                        src="/CreatorHub.png" 
                        alt="Creator Hub Interface" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    )}
                    {activeModule === 'publishing-hub' && (
                      <img 
                        src="/PublishingHub.png" 
                        alt="Publishing Hub Interface" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    )}
                    {activeModule === 'analytics-insights' && (
                      <img 
                        src="/Analytics & Insights.png" 
                        alt="Analytics & Insights Interface" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    )}
                    {activeModule === 'account-management' && (
                      <img 
                        src="/AccountManagement.png" 
                        alt="Account Management Interface" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6 italic">
                Ideal for: Marketing teams, agencies, or studios running dozens-to-hundreds of social accounts and needing end-to-end control.
              </p>

              <div className="flex gap-4 justify-center">
                <Link to="/products/zencreator" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 transition-colors duration-200">
                  Explore Creator OS →
                </Link>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 hover:border-purple-400 hover:text-purple-900 transition-all duration-200">
                  Book a Demo
                </a>
              </div>
            </div>
          </section>

          {/* ZenComfy */}
          <section className="pt-[40px] pb-[150px]">
            <div className="bg-ink-900 rounded-3xl p-6 md:p-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8">ZenComfy</h2>
                <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                  <strong>ComfyUI in the cloud + workflow-to-web-app builder</strong>
                </p>
              </div>
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Left side - Modules List */}
                <div className="lg:col-span-2">
                  <div className="space-y-4">
                    {Object.entries(zenComfyModules).map(([key, module]) => (
                      <button
                        key={key}
                        onClick={() => setActiveZenModule(key)}
                        className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                          activeZenModule === key 
                            ? 'bg-purple-600/20 border border-purple-400/30' 
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <h3 className="text-xl font-bold text-white mb-3">{module.title}</h3>
                        <p className="text-white/80 leading-relaxed">{module.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Right side - Visual */}
                <div className="lg:col-span-3 bg-white rounded-3xl p-4 min-h-[500px] flex items-center justify-center">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    {activeZenModule === 'comfyui-cloud' && (
                      <img 
                        src="/images/zencomfy/ComfyUI in the Cloud.png" 
                        alt="ComfyUI in the Cloud Interface" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    )}
                    {activeZenModule === 'workflow-webapp' && (
                      <img 
                        src="/images/zencomfy/ComfyUI in the Cloud2.png" 
                        alt="Workflow Web App Interface" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    )}
                    {(activeZenModule === 'serverless-autoscale' || activeZenModule === 'private-models') && (
                      <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-6 w-full h-full flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 w-full max-w-lg text-center">
                          <div className="bg-white rounded-lg p-4 mb-4">
                            <div className="text-gray-900 font-semibold">{zenComfyModules[activeZenModule].title}</div>
                            <div className="text-sm text-gray-600">Preview Coming Soon</div>
                          </div>
                          <div className="text-white font-medium">{zenComfyModules[activeZenModule].visual}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6 italic">
                Ideal for: AI researchers, creative coders, enterprises that prototype or ship Stable Diffusion / AnimateDiff pipelines without DevOps overhead.
              </p>

              <div className="flex gap-4 justify-center">
                <Link to="/products/zencomfy" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 transition-colors duration-200">
                  Explore ZenComfy →
                </Link>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 hover:border-purple-400 hover:text-purple-900 transition-all duration-200">
                  Book a Demo
                </a>
              </div>
            </div>
          </section>



          {/* Which Product Fits You */}
          <section className="py-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Which Product Fits You?</h2>
            
            {/* Two Column Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* ZenCreator Column */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 h-full flex flex-col">
                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 self-start">
                  Best for Social & Content
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">ZenCreator</h3>
                <ul className="space-y-4 flex-grow mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">Run AI influencers and batch social content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">Publish across all major platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">Analytics and growth insights</span>
                  </li>
                </ul>
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-purple-600 transition-colors duration-200">
                  Get ZenCreator →
                </a>
              </div>

              {/* ZenComfy Column */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 h-full flex flex-col">
                <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 self-start">
                  Best for AI Workflows
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">ZenComfy</h3>
                <ul className="space-y-4 flex-grow mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">Host & share ComfyUI workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">Deploy AI image/video apps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">GPU cloud without DevOps</span>
                  </li>
                </ul>
                <Link to="/products/zencomfy" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-purple-600 transition-colors duration-200">
                  Get ZenComfy →
                </Link>
              </div>
            </div>

            {/* Full Width Both Option */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 text-center">
              <div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Complete Solution
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Both — ZenCreator + ZenComfy</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Create social assets <em>and</em> generate SDXL art in the cloud with shared SSO & billing</p>
              <a href="mailto:info@zencreator.pro?subject=ZenCreator%20%2B%20ZenComfy%20Bundle" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 transition-colors duration-200">
                Get Bundle Quote →
              </a>
            </div>
          </section>

          {/* Shared Advantages */}
          <section className="py-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Shared Advantages</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-ink-900 rounded-3xl p-6 border border-white/10 hover:shadow-xl hover:border-white/20 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-xl bg-gray-300/20 border border-gray-400/30 flex items-center justify-center mb-4 mx-auto">
                  <CreditCard className="w-6 h-6 text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Unified Billing</h3>
                <p className="text-white/80 text-sm leading-relaxed">One invoice, usage broken down by product.</p>
              </div>
              <div className="bg-ink-900 rounded-3xl p-6 border border-white/10 hover:shadow-xl hover:border-white/20 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-xl bg-gray-300/20 border border-gray-400/30 flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-6 h-6 text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">SOC-2 Infrastructure</h3>
                <p className="text-white/80 text-sm leading-relaxed">Same secure cloud backbone for both platforms.</p>
              </div>
              <div className="bg-ink-900 rounded-3xl p-6 border border-white/10 hover:shadow-xl hover:border-white/20 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-xl bg-gray-300/20 border border-gray-400/30 flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-6 h-6 text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Rapid Roadmap</h3>
                <p className="text-white/80 text-sm leading-relaxed">Monthly feature drops pushed automatically.</p>
              </div>
              <div className="bg-ink-900 rounded-3xl p-6 border border-white/10 hover:shadow-xl hover:border-white/20 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-xl bg-gray-300/20 border border-gray-400/30 flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-gray-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Dedicated Success Team</h3>
                <p className="text-white/80 text-sm leading-relaxed">Onboarding, best-practice workshops, 24×7 priority support on enterprise tiers.</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* FAQ - Full Width */}
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
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Can I start with one product and add the other later?</h4>
                  <p className="text-gray-600 leading-relaxed">Yes — workspaces upgrade seamlessly; user roles and credits carry over.</p>
                </div>
                <div className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Do the products integrate?</h4>
                  <p className="text-gray-600 leading-relaxed">ZenCreator can pull ZenComfy outputs via secure API, letting you push Comfy-generated art directly into Publishing pipelines.</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 flex items-center gap-4">
                <p className="text-gray-600">Still deciding?</p>
                <a href="mailto:info@zencreator.pro?subject=Product%20Consultation" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 hover:border-purple-400 hover:text-purple-900 transition-all duration-200">
                  Talk to Product Specialist →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Full Width */}
      <section className="relative overflow-hidden">
        <div className="bg-ink-900 text-white text-center py-24 relative rounded-3xl">
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
