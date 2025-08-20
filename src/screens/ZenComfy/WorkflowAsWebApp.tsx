import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { FAQAccordion, FAQItem } from '@/components/sections/FAQAccordion';

export const WorkflowAsWebApp: React.FC = () => {
  const whyItems = [
    ['No-Code Builder', 'Point-and-click UI: import your JSON, expose only the fields you need, press Publish.'],
    ['Serverless GPUs', 'Pay-as-you-go VRAM that scales from 1 to 1 000 users automatically.'],
    ['Multi-Workflow Apps', 'Bundle several workflows into one app; switch via a simple drop-down.'],
    ['Built-in Auth & RBAC', 'Invite users via email; control roles without external plugins.'],
    ['Real-Time Analytics', 'Track per-user GPU minutes, runs, and spend inside one dashboard.'],
    ['IP Safe by Design', 'Workflows stay private—only team admins can open the ComfyUI graph.'],
  ];

  const faqItems: FAQItem[] = [
    { question: 'How is billing calculated?', answer: 'Per-minute GPU usage plus optional storage. No hidden tiers.' },
    { question: 'Can I bring custom nodes or Python libs?', answer: 'Yes — upload them during import. They run in isolated containers with the correct dependencies.' },
    { question: 'Is my data secure?', answer: 'We encrypt data in transit and at rest, retain nothing by default, and offer private VPC on request.' },
    { question: 'What GPUs do you provide?', answer: 'Current fleet: A100 80 GB, H100, and L4 for lighter loads. We auto-select the best fit.' },
  ];

  return (
    <PageLayout
      title="Run ComfyUI Workflows as Web Apps"
      description="Turn your creative pipelines into production-ready AI apps — fast."
    >
      {/* Hero */}
      <div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
            <section className="pt-24 pb-[40px] text-center text-white w-full px-6">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Run ComfyUI Workflows as Web Apps</h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                <strong>Turn your creative pipelines into production-ready AI apps — fast.</strong>
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mt-4 leading-relaxed">
                ZenComfy converts complex ComfyUI workflows into polished web applications that scale on demand in our serverless GPU cloud. No setup, engineering, or infrastructure headaches.
              </p>
              <div className="flex gap-4 justify-center mt-10">
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-2xl">Book a Demo</a>
                <a href="mailto:info@zencreator.pro?subject=ComfyUI%20Workflow%20Web%20App%20Inquiry" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200">Talk to Sales</a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Trusted by */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-10 text-center">Trusted by 10,000+ creators worldwide</h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                ['10,000+', 'creators worldwide'],
                ['4.9/5', 'satisfaction'],
                ['50K+', 'deployed workflows'],
                ['99.9%', 'uptime'],
              ].map(([num, label]) => (
                <div key={label as string} className="bg-[#0F172A] text-white rounded-3xl p-8 border border-white/10 shadow-xl text-center">
                  <div className="text-4xl md:text-5xl font-black mb-2">{num as string}</div>
                  <div className="text-white/80">{label as string}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Why ZenComfy */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Why ZenComfy</h3>
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {whyItems.map(([title, desc]) => (
                <div key={title as string} className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{title as string}</h4>
                    <p className="text-gray-700">{desc as string}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3 Steps */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">From Prototype to Production in 3 Steps</h3>
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {[
                ['Upload JSON', 'Drag-and-drop or paste your ComfyUI workflow.'],
                ['Design App', 'Select inputs, set defaults, add tooltips, brand the UI.'],
                ['Share & Scale', 'Send a link; ZenComfy allocates GPUs instantly as traffic grows.'],
              ].map(([title, desc], index) => (
                <div key={title as string} className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                    <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mb-4">{index + 1}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{title as string}</h4>
                    <p className="text-gray-700">{desc as string}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Build Chains */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Build Complex Creative Chains—Visually</h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50">
                  <p className="text-gray-700 text-center leading-relaxed">
                    Merge simple tools into powerful pipelines: e.g., <strong>Reference-guided generation → Upscale → FaceSwap</strong>. Approve intermediate results manually or let the chain run fully automated. Full debug logs and step-by-step previews give you transparency without touching code.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Templates */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Ready-to-Use Workflow Templates</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {[
                ['Image → Video', 'AnimateDiff • IPAdapter • ControlNet'],
                ['Text → Video', 'AnimateDiff • Prompt Travel'],
                ['Upscaling', 'Hires-Fix • UltraSharp • SUPIR • CCSR • APISR'],
                ['Style Transfer', 'IPAdapter • IC-Light'],
                ['More Coming', 'Custom recipes & community contributions'],
              ].map(([title, desc]) => (
                <div key={title as string} className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative p-7 bg-white/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{title as string}</h4>
                    <p className="text-gray-700 whitespace-pre-line">{desc as string}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Highlighted phrase after template cards */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 border border-purple-200 max-w-4xl mx-auto">
                <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                  <strong>Zero downloads. Zero config. Just click Deploy.</strong>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Unified FAQ with CTA inside full-width background */}
      <FAQAccordion
        items={faqItems}
        title="Frequently Asked Questions"
        cta={(
          <div>
            {/* Contact Support */}
            <div className="text-center mb-8">
              <p className="text-gray-600">More questions? <a href="mailto:info@zencreator.pro?subject=ComfyUI%20Workflow%20Web%20App%20Support" className="text-purple-600 hover:text-purple-700 font-medium">Contact support →</a></p>
            </div>
            {/* CTA Section */}
            <section className="pt-10 bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 text-center border border-white/10">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4">Ready to see your ComfyUI Workflow live?</h3>
              <p className="text-white/80 mb-8 text-lg">Book a 15-minute demo and ship your first ComfyUI web app today.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Book a Demo</a>
                <a href="mailto:info@zencreator.pro?subject=ComfyUI%20Workflow%20Web%20App%20Sales%20Inquiry" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Talk to Sales</a>
              </div>
            </section>
          </div>
        )}
      />
    </PageLayout>
  );
};


