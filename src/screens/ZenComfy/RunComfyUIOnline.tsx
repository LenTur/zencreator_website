import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const RunComfyUIOnline: React.FC = () => {
  return (
    <PageLayout
      title="Run ComfyUI in the Cloud"
      description="Launch, edit, and share ComfyUI workflows on ZenComfy’s serverless GPU cloud. Zero install, pay-per-second billing, enterprise-grade security, and 99.9% uptime."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <section className="py-6">
            <p className="text-gray-700 mb-4"><strong>Share, run, and deploy complex ComfyUI workflows in minutes — no local GPU, no setup.</strong></p>
            <p className="text-gray-700 mb-6">ZenComfy spins up high-performance GPUs only while your job is active, so you pay for compute time, not idle time.</p>
            <div className="flex gap-3">
              <a href="mailto:info@zencreator.pro?subject=Demo" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Book a Demo</a>
              <a href="mailto:info@zencreator.pro?subject=Sales" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Talk to Sales</a>
            </div>
          </section>

          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trusted by 10,000+ creators worldwide</h3>
            <p className="text-gray-700">10 000+ creators worldwide • 4.9 / 5 satisfaction • 50k+ deployed workflows • 99.9% uptime</p>
          </section>

          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Unlock ComfyUI’s Full Power — Hassle-Free</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[ 
                ['Import or Build from Scratch','Drag-and-drop any .json graph or start fresh in the built-in ComfyUI manager.'],
                ['One-Click GPU Selection','Choose from L4, A100 80 GB or H100 cards. We auto-scale VRAM and cores to match your workflow.'],
                ['Team-Wide Access, Anywhere','Invite teammates; shared workspace, models and history. No local installs.'],
                ['Secure by Default','Zero-retention data policy. Or plug S3/GCS for persistence.'],
                ['Bring Your Own Models & Nodes','Pull from Civitai, Hugging Face or your storage at 25× typical speed.'],
                ['Pay-Per-Second Billing','Only pay while a workflow is running — truly serverless.'],
                ['Parallel Execution','Run multiple GPUs in parallel for A/B or batch jobs.'],
              ].map(([title,desc]) => (
                <Card key={title as string}>
                  <CardHeader className="p-5 pb-2"><CardTitle>{title as string}</CardTitle></CardHeader>
                  <CardContent className="pt-0 px-5 pb-5 text-gray-700">{desc as string}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready-to-Use Workflow Templates</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[ 
                ['Image → Video','AnimateDiff • IPAdapter • ControlNet'],
                ['Text → Video','AnimateDiff • Prompt Travel'],
                ['Upscaling','Hires-Fix • UltraSharp • SUPIR • CCSR • APISR'],
                ['Style Transfer','IPAdapter • IC-Light'],
                ['More Coming','Custom recipes & community contributions. Zero downloads. Zero config. Just click Deploy.']
              ].map(([title,desc]) => (
                <Card key={title as string}>
                  <CardHeader className="p-5 pb-2"><CardTitle>{title as string}</CardTitle></CardHeader>
                  <CardContent className="pt-0 px-5 pb-5 text-gray-700">{desc as string}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-medium">What is ComfyUI?</p>
                <p>ComfyUI is a node-based interface for Stable Diffusion and beyond. Design granular image or video pipelines without code.</p>
              </div>
              <div>
                <p className="font-medium">Do I need a local GPU to use ZenComfy?</p>
                <p>No. All compute happens on ZenComfy’s cloud GPUs. You only need a browser.</p>
              </div>
              <div>
                <p className="font-medium">Can I upload my own models, LoRAs or checkpoints?</p>
                <p>Yes — upload or pull directly from Civitai, Hugging Face, Google Drive, S3, etc.</p>
              </div>
              <div>
                <p className="font-medium">Can I install custom nodes or Python dependencies?</p>
                <p>Absolutely. Use the built-in ComfyUI Manager or upload a requirements.txt.</p>
              </div>
              <div>
                <p className="font-medium">How is billing calculated?</p>
                <p>Per-second GPU runtime plus optional persistent storage. No charges while you edit graphs.</p>
              </div>
              <div>
                <p className="font-medium">Is my data secure?</p>
                <p>Encrypted in transit and at rest. By default nothing is stored; outputs saved only to your connected bucket.</p>
              </div>
            </div>
          </section>

          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Create Without Limits?</h3>
            <p className="text-gray-700 mb-6">Join thousands of artists, devs, and studios running ComfyUI at cloud scale.</p>
            <div className="flex gap-3">
              <a href="mailto:info@zencreator.pro?subject=Demo" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Book a Demo</a>
              <a href="mailto:info@zencreator.pro?subject=Sales" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Talk to Sales</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


