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

          {/* Platform Interface Screenshot */}
          <div className="container mx-auto px-4" style={{ paddingTop: '0px' }}>
            <div className="max-w-6xl mx-auto">
              <img
                src="/images/zencomfy/ComfyUI in the Cloud.png"
                alt="ZenComfy Platform Interface"
                className="w-full h-auto rounded-3xl border border-gray-200"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.25), 0 25px 50px -12px rgba(168, 85, 247, 0.15)'
                }}
              />
            </div>
          </div>

          <div className="flex flex-col">
            {/* New structure like ZenCreator */}
            <div className="mt-[150px]">
              <WhyZenComfy />
            </div>
            
            <div className="mt-[150px]">
              <PlatformFeatures />
            </div>
            
            <div className="mt-[75px]">
              <WorkflowSteps />
            </div>
            
            <div className="mt-[75px]">
              <WorkflowTemplates />
            </div>
            
            <div className="mt-[150px]">
              <FAQAccordion />
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
                      Build, run, and deploy ComfyUI workflows at cloud scale — no setup, no DevOps, no wasted spend.
                    </p>
                    <div className="flex flex-wrap gap-6 justify-center">
                      <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200">
                        Book a Demo
                      </a>
                      <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200">
                        Try ZenComfy
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