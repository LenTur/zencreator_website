import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ZenComfyHero } from '@/components/sections/ZenComfyHero';
import { WhyZenComfy } from '@/components/sections/WhyZenComfy';
import { PlatformFeatures } from '@/components/sections/PlatformFeatures';
import { WorkflowSteps } from '@/components/sections/WorkflowSteps';
import { WorkflowTemplates } from '@/components/sections/WorkflowTemplates';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
// import { FinalFooter } from '@/components/layout/FinalFooter';

export const ZenComfy: React.FC = () => {
  return (
    <PageLayout
      title="ComfyUI in the Cloud — From Graph to Web App in One Click"
      description={
        "ZenComfy turns your ComfyUI workflows into production-ready AI apps — fast. Build, iterate, and deploy on our serverless GPU cloud with no install, no DevOps, and no wasted spend."
      }
    >
      <div className="bg-white flex flex-col items-center w-full">
        <main className="w-full">
          
          {/* Hero Section */}
          <div className="container mx-auto px-4 pb-20" style={{ paddingTop: '140px' }}>
            <div className="max-w-6xl mx-auto">
              <ZenComfyHero />
            </div>
          </div>

          {/* Colorfull1.png - новая картинка на всю ширину */}
          <img src="/Colorfull1.png" alt="" className="w-full" />

          {/* Trusted by Section - перемещено сюда */}
          <div className="mt-[50px]">
            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
                    Trusted by 10,000+ creators worldwide
                  </h2>
                  <div className="grid grid-cols-4 gap-6">
                    <div className="bg-ink-900 rounded-3xl p-8 text-center">
                      <div className="text-3xl md:text-4xl font-black text-white mb-2">10,000+</div>
                      <div className="text-white/80 text-sm">creators worldwide</div>
                    </div>
                    <div className="bg-ink-900 rounded-3xl p-8 text-center">
                      <div className="text-3xl md:text-4xl font-black text-white mb-2">4.9/5</div>
                      <div className="text-white/80 text-sm">satisfaction</div>
                    </div>
                    <div className="bg-ink-900 rounded-3xl p-8 text-center">
                      <div className="text-3xl md:text-4xl font-black text-white mb-2">50K+</div>
                      <div className="text-white/80 text-sm">deployed workflows</div>
                    </div>
                    <div className="bg-ink-900 rounded-3xl p-8 text-center">
                      <div className="text-3xl md:text-4xl font-black text-white mb-2">99.9%</div>
                      <div className="text-white/80 text-sm">uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Platform Interface Screenshot */}
          <div className="container mx-auto px-4 hidden" style={{ paddingTop: '0px' }}>
            <div className="max-w-6xl mx-auto">
              <img
                src="/images/zencomfy/ComfyUI-webapp.png"
                alt="ZenComfy Platform Interface"
                className="w-full max-w-4xl mx-auto h-auto rounded-3xl border border-gray-200"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.25), 0 25px 50px -12px rgba(168, 85, 247, 0.15)'
                }}
              />
            </div>
          </div>

          <div className="flex flex-col">
            {/* New structure like ZenCreator */}
            <div className="mt-[150px]">
              <PlatformFeatures />
            </div>
            
            <div className="mt-[150px]">
              <WhyZenComfy />
            </div>
            
            <div className="mt-[75px]">
              <WorkflowSteps />
            </div>
            
            <div className="mt-[75px]">
              <WorkflowTemplates />
            </div>
            
            {/* Secure & Scalable by Design */}
            <div className="mt-[150px]">
              <section className="py-24">
                <div className="container mx-auto px-4">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
                        Secure & Scalable by Design
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Serverless autoscaling</h3>
                        <p className="text-gray-600 leading-relaxed">Handles 1 to 1 000 parallel runs without queuing.</p>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Custom hardware tiers</h3>
                        <p className="text-gray-600 leading-relaxed">Swap GPUs on the fly to balance cost and VRAM.</p>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Consistent environments</h3>
                        <p className="text-gray-600 leading-relaxed">Version-locked containers prevent node conflicts.</p>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">SSO & RBAC</h3>
                        <p className="text-gray-600 leading-relaxed">Google, Microsoft 365, SAML 2.0; fine-grained roles for teams.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            
            <div className="mt-[150px]">
              <FAQAccordion 
                items={[
                  { 
                    question: 'Do I need to install anything locally?', 
                    answer: 'No — just open a browser. All compute runs in ZenComfy\'s cloud.' 
                  },
                  { 
                    question: 'How is pricing calculated?', 
                    answer: 'Per-second GPU runtime plus optional persistent storage. No charges while editing graphs.' 
                  },
                  { 
                    question: 'Can I keep models private?', 
                    answer: 'Yes. Upload to a private bucket or let ZenComfy host them in an encrypted workspace.' 
                  },
                  { 
                    question: 'Can I expose only certain sliders to end users?', 
                    answer: 'Absolutely. The Web App builder lets you pick which parameters appear in the UI.' 
                  }
                ]}
              />
            </div>
            
            {/* Final CTA */}
            <section className="py-24 bg-gray-900">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="text-white rounded-3xl p-12 text-center" style={{background: 'linear-gradient(141deg, #D8B4FE -1.09%, #C084FC 18.52%, #A855F7 38.13%, #9333EA 57.74%, #7C3AED 77.35%, #5A17CE 108.36%)'}}>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                      Ready to Create Without Limits?
                    </h3>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                      Join thousands of artists, studios and enterprises who ship faster with ZenComfy.
                    </p>
                    <div className="flex flex-wrap gap-6 justify-center">
                      <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200">
                        Book a Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Footer comes from PageLayout */}
          </div>
        </main>
      </div>
    </PageLayout>
  );
};