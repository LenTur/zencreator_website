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
      <div className="bg-gray-900 pb-20" style={{ paddingTop: '140px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <section className="pt-24 pb-[40px] text-center">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">Run ComfyUI Workflows as Web Apps</h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                <strong>Turn your creative pipelines into production-ready AI apps — fast.</strong>
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mt-4 leading-relaxed">
                ZenComfy converts complex ComfyUI workflows into polished web applications that scale on demand in our serverless GPU cloud. No setup, engineering, or infrastructure headaches.
              </p>
              <div className="flex gap-4 justify-center mt-10">
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">Book a Demo</a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200">Talk to Sales</a>
              </div>
              <p className="text-white/70 mt-10">(Illustration: live app interface)</p>
            </section>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Trusted by */}
          <section className="py-[150px] bg-white text-center">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Trusted by 10,000+ creators worldwide</h3>
            <p className="text-gray-700">• 10 000 + creators worldwide &emsp;• 4.9 / 5 satisfaction &emsp;• 50 k + deployed workflows &emsp;• 99.9 % uptime</p>
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
            <ol className="list-decimal pl-6 space-y-3 text-gray-800 max-w-4xl mx-auto">
              <li><strong>Upload JSON</strong> – Drag-and-drop or paste your ComfyUI workflow.</li>
              <li><strong>Design App</strong> – Select inputs, set defaults, add tooltips, brand the UI.</li>
              <li><strong>Share & Scale</strong> – Send a link; ZenComfy allocates GPUs instantly as traffic grows.</li>
            </ol>
            <p className="text-gray-500 text-center mt-6">(Illustration: side-by-side of JSON import → live app interface)</p>
          </section>

          {/* Build Chains */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Build Complex Creative Chains—Visually</h3>
            <p className="text-gray-700 max-w-4xl mx-auto text-center">
              Merge simple tools into powerful pipelines: e.g., <strong>Reference-guided generation → Upscale → FaceSwap</strong>. Approve intermediate results manually or let the chain run fully automated. Full debug logs and step-by-step previews give you transparency without touching code.
            </p>
            <p className="text-gray-500 text-center mt-6">(Illustration: visual editor with multi-step node chain)</p>
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
                ['More Coming', 'Custom recipes & community contributions\n\nZero downloads. Zero config. Just click Deploy.'],
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
          </section>
        </div>
      </div>

      {/* Unified FAQ with CTA inside full-width background */}
      <FAQAccordion
        items={faqItems}
        title="Frequently Asked Questions"
        cta={(
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Ready to see your ComfyUI Workflow live?</h3>
            <p className="text-gray-700 mb-8 text-lg">Book a 15-minute demo and ship your first ComfyUI web app today.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors">Book a Demo</a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors">Talk to Sales</a>
            </div>
          </div>
        )}
      />
    </PageLayout>
  );
};


