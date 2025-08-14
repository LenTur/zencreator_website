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
                src="/comfyui-interface.png"
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
              <FAQAccordion
                cta={(
                  <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Ready to Create Without Limits?</h3>
                    <p className="text-gray-700 mb-8 text-lg">Build, run, and deploy ComfyUI workflows at cloud scale.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">Book a Demo</a>
                      <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors">Talk to Sales</a>
                    </div>
                  </div>
                )}
              />
            </div>
            
            {/* Footer comes from PageLayout */}
          </div>
        </main>
      </div>
    </PageLayout>
  );
};