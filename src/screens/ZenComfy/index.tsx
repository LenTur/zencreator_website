import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ZenComfyHero } from '@/components/sections/ZenComfyHero';
import { WhyZenComfy } from '@/components/sections/WhyZenComfy';
import { PlatformFeatures } from '@/components/sections/PlatformFeatures';
import { WorkflowSteps } from '@/components/sections/WorkflowSteps';
import { WorkflowTemplates } from '@/components/sections/WorkflowTemplates';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { Cta } from '@/components/sections/Cta';
import { FinalFooter } from '@/components/layout/FinalFooter';

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
              <FAQAccordion />
            </div>
            
            <div className="mt-[0px]">
              <Cta />
            </div>
            
            {/* Footer comes from PageLayout */}
          </div>
        </main>
      </div>
    </PageLayout>
  );
};