import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const ZenComfy: React.FC = () => {
  return (
    <PageLayout
      title="ComfyUI in the Cloud — From Graph to Web App in One Click"
      description={
        "ZenComfy turns your ComfyUI workflows into production-ready AI apps — fast. Build, iterate, and deploy on our serverless GPU cloud with no install, no DevOps, and no wasted spend."
      }
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* CTA Buttons */}
          <section className="py-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-colors">Book a Demo</a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Talk to Sales</a>
            </div>
          </section>

          {/* Social Proof */}
          <section className="py-10 border-t border-gray-200">
            <h3 className="text-center text-gray-700 text-sm">
              • 10 000 + creators worldwide • 4.9 / 5 satisfaction • 50 k + deployed workflows • 99.9 % uptime
            </h3>
          </section>

          {/* Two Ways to Ship */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Two Ways to Ship — One Unified Platform</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['Full ComfyUI desktop experience in the browser','ComfyUI in the Cloud — spin up a dedicated GPU workspace, auto-install any node or model, invite collaborators.'],
                ['End-user-friendly interface for artists & clients','Workflow → Web App — wrap your graph in a custom UI, set queuing rules, share a URL.']
              ].map(([title, desc]) => (
                <Card key={title as string} className="h-full transition-all hover:shadow-lg hover:border-purple-200">
                  <CardHeader className="p-5">
                    <CardTitle className="text-gray-900 text-base">{title as string}</CardTitle>
                    <CardDescription className="text-gray-600 mt-1">{desc as string}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Why Teams Choose ZenComfy */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Teams Choose ZenComfy</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                ['One-click deployment','No Docker, no drivers—upload .json, press Run.'],
                ['Serverless GPUs','Pay only while a job is active; zero idle fees.'],
                ['Bring your own nodes & models','Pull from Civitai, Hugging Face or private storage at 25× local speed.'],
                ['Team workspaces','Centralised models, versioned workflows, role-based access.'],
                ['Zero-Retention Data Policy','All generations wiped by default; optional private buckets.'],
                ['Enterprise-grade security','SSO, VPC peering, audit logs and ISO-27001 hosting.']
              ].map(([title,desc]) => (
                <Card key={title as string} className="h-full bg-white border border-gray-200 transition-all hover:shadow-lg">
                  <CardHeader className="p-5 pb-3">
                    <CardTitle className="text-gray-900 text-base">{title as string}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-5 pb-5">
                    <p className="text-gray-700">{desc as string}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* From Workflow to Production in Three Steps */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">From Workflow to Production in Three Steps</h3>
            <ol className="space-y-4 list-decimal pl-6 text-gray-800">
              <li><strong>Import or Create</strong> – Drag-and-drop an existing workflow or build in the visual editor.</li>
              <li><strong>Select Hardware</strong> – Pick L4, A100 80 GB, H100 or let Auto-GPU choose.</li>
              <li><strong>Deploy</strong> – Run instantly or publish as a branded web app for clients.</li>
            </ol>
            <p className="text-sm text-gray-600 mt-4">(Illustration: JSON import → GPU select → live app)</p>
          </section>

          {/* Ready-to-Use Workflow Templates */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Ready-to-Use Workflow Templates</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['Image → Video','AnimateDiff • IPAdapter • ControlNet'],
                ['Text → Video','AnimateDiff • Prompt Travel'],
                ['Upscaling','Hires-Fix • UltraSharp • SUPIR • CCSR • APISR'],
                ['Style Transfer','IPAdapter • IC-Light']
              ].map(([title,desc]) => (
                <Card key={title as string} className="h-full transition-all hover:shadow-lg">
                  <CardHeader className="p-5">
                    <CardTitle className="text-gray-900 text-base">{title as string}</CardTitle>
                    <CardDescription className="text-gray-600 mt-1">{desc as string}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-gray-700">
              <p className="mb-2 font-medium">More Coming</p>
              <p>Custom recipes & community contributions</p>
              <p className="mt-3">Zero downloads. Zero config. Just click <strong>Deploy</strong>.</p>
            </div>
          </section>

          {/* Secure & Scalable by Design */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Secure & Scalable by Design</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-800">
              {[
                ['Serverless autoscaling','Handles 1 to 1 000 parallel runs without queuing.'],
                ['Custom hardware tiers','Swap GPUs on the fly to balance cost and VRAM.'],
                ['Consistent environments','Version-locked containers prevent node conflicts.'],
                ['SSO & RBAC','Google, Microsoft 365, SAML 2.0; fine-grained roles for teams.']
              ].map(([title,desc]) => (
                <Card key={title as string} className="h-full bg-white border border-gray-200">
                  <CardHeader className="p-5 pb-3">
                    <CardTitle className="text-gray-900 text-base">{title as string}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-5 pb-5">
                    <p className="text-gray-700">{desc as string}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="py-[150px]">
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Do I need to install anything locally?</h4>
                    <p className="text-gray-600 leading-relaxed">No — just open a browser. All compute runs in ZenComfy's cloud.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">How is pricing calculated?</h4>
                    <p className="text-gray-600 leading-relaxed">Per-second GPU runtime plus optional persistent storage. No charges while editing graphs.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Can I keep models private?</h4>
                    <p className="text-gray-600 leading-relaxed">Yes. Upload to a private bucket or let ZenComfy host them in an encrypted workspace.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Can I expose only certain sliders to end users?</h4>
                    <p className="text-gray-600 leading-relaxed">Absolutely. The Web App builder lets you pick which parameters appear in the UI.</p>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="mailto:support@zencreator.pro" className="text-purple-600 hover:text-purple-800 font-medium transition-colors">Contact Support →</a>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-12 border-t border-gray-200">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Ready to Create Without Limits?</h4>
              <p className="text-gray-700 mb-6">Join thousands of artists, studios and enterprises who ship faster with ZenComfy.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-colors">Book a Demo</a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Talk to Sales</a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
};


