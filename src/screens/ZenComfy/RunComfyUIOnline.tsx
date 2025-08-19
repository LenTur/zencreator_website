import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

export const RunComfyUIOnline: React.FC = () => {
  return (
    <PageLayout
      title="Run ComfyUI in the Cloud"
      description="Share, run, and deploy complex ComfyUI workflows in minutes — no local GPU, no setup."
    >
      {/* Hero */}
      <div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
            <section className="pt-24 pb-[40px] text-center text-white w-full px-6">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Run ComfyUI in the Cloud
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                <strong>Share, run, and deploy complex ComfyUI workflows in minutes — no local GPU, no setup.</strong>
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mt-4 leading-relaxed">
                ZenComfy spins up high-performance GPUs only while your job is active, so you pay for compute time, not idle time.
              </p>
              <div className="flex gap-4 justify-center mt-10">
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Book a Demo
                </a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200">
                  Talk to Sales
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Trusted by — dark metric cards */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-10 text-center">Trusted by 10,000+ creators worldwide</h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                ['10,000+', 'creators worldwide'],
                ['4.9 / 5', 'satisfaction'],
                ['50k+', 'deployed workflows'],
                ['99.9 %', 'uptime'],
              ].map(([num, label]) => (
                <div key={label as string} className="bg-[#0F172A] text-white rounded-3xl p-8 border border-white/10 shadow-xl text-center">
                  <div className="text-4xl md:text-5xl font-black mb-2">{num as string}</div>
                  <div className="text-white/80">{label as string}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Unlock Full Power */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Unlock ComfyUI’s Full Power — Hassle-Free</h3>
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {[
                ['Import or Build from Scratch', 'Drag-and-drop any `.json` graph or start fresh in the built-in ComfyUI manager.'],
                ['One-Click GPU Selection', 'Choose from L4, A100 80 GB or H100 cards. We auto-scale VRAM and cores to match your workflow—it finishes in seconds, not minutes.'],
                ['Team-Wide Access, Anywhere', 'Invite teammates by email; all share the same workspace, models and history. No local installs required.'],
                ['Secure by Default', 'Zero-retention data policy. Need persistence? Plug in your S3, GCS or on-prem bucket.'],
                ['Bring Your Own Models & Nodes', 'Pull directly from Civitai, Hugging Face or your own storage at 25× typical upload speed. Models persist across sessions.'],
                ['Pay-Per-Second Billing', 'Stop burning money on forgotten instances. ZenComfy meters GPU seconds only while a workflow is running—truly serverless.'],
                ['Parallel Execution', 'Spin up multiple GPUs in parallel and iterate faster. Perfect for A/B prompts, batch jobs or heavy video chains.'],
              ].map(([title, desc]) => (
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
            
            {/* Highlighted phrase after template cards */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 border border-purple-200 max-w-4xl mx-auto">
                <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                  <strong>Zero downloads. Zero config. Just click Deploy.</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Built for Teams & Enterprises */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Built for Teams & Enterprises</h3>
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {[
                ['Single Workspace', 'Central hub for workflows, models and usage stats.'],
                ['Hardware Flexibility', 'From cost-efficient L4 to 144 GB B200s. Swap anytime.'],
                ['Instant Scale', 'Serverless fleet auto-matches demand—no DevOps.'],
                ['Custom UI Layers', 'Expose only the sliders your users need; hide the rest.'],
                ['SSO & RBAC', 'SAML 2.0, Google & Microsoft 365 logins; fine-grained roles.'],
                ['Consistent Environments', 'Version-locked containers keep nodes stable across updates.'],
              ].map(([title, desc]) => (
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

          {/* FAQ + Final CTA moved into global FAQAccordion below for full-width background */}
        </div>
      </div>

      {/* Unified FAQ with CTA inside — add top padding and dark section background */}
      <FAQAccordion
        items={[
          { question: 'What is ComfyUI?', answer: 'ComfyUI is a node-based interface for Stable Diffusion and beyond (SD1.x, SDXL, SD3, Flux.1, AnimateDiff, ControlNet, SVD and many more). It lets you design granular image or video pipelines without writing code.' },
          { question: 'Do I need a local GPU to use ZenComfy?', answer: 'No. All compute happens on ZenComfy’s cloud GPUs. You only need a browser.' },
          { question: 'Can I upload my own models, LoRAs or checkpoints?', answer: 'Yes — upload from your device or pull directly from Civitai, Hugging Face, Google Drive, S3, etc. They remain in your private storage between sessions.' },
          { question: 'Can I install custom nodes or Python dependencies?', answer: 'Absolutely. Use the built-in ComfyUI Manager or upload a `requirements.txt`. Each workspace is containerised and isolated.' },
          { question: 'How is billing calculated?', answer: 'Per-second GPU runtime plus optional persistent storage. No charges while you edit graphs or when instances are idle.' },
          { question: 'Is my data secure?', answer: 'We encrypt everything in transit and at rest. By default nothing is stored; persistent outputs are saved only to your connected bucket.' },
        ]}
        cta={(
          <div>
            {/* Contact Support */}
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-4">More questions?</p>
              <a href="mailto:info@zencreator.pro?subject=ComfyUI%20Cloud%20Support" className="text-purple-600 hover:text-purple-700 font-medium">
                Contact Support →
              </a>
            </div>
            {/* CTA Section */}
          <section className="pt-10 bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 text-center border border-white/10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4">Ready to Create Without Limits?</h3>
            <p className="text-white/80 mb-8">Join thousands of artists, devs, and studios running ComfyUI at cloud scale.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Book a Demo</a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Talk to Sales</a>
            </div>
          </section>
          </div>
        )}
      />
    </PageLayout>
  );
};


