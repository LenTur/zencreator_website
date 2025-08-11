import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const WorkflowAsWebApp: React.FC = () => {
  return (
    <PageLayout
      title="Run ComfyUI Workflows as Web Apps"
      description="Convert any ComfyUI workflow into a secure, share-ready web application in minutes — no code or DevOps. Auto-scaling GPUs, built-in auth, usage analytics, and 99.9% uptime with ZenComfy."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <section className="py-6">
            <p className="text-gray-700 mb-4"><strong>Turn your creative pipelines into production-ready AI apps — fast.</strong></p>
            <p className="text-gray-700 mb-6">ZenComfy converts complex ComfyUI workflows into polished web applications that scale on demand in our serverless GPU cloud. No setup, engineering, or infrastructure headaches.</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why ZenComfy</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[ 
                ['No-Code Builder','Point-and-click UI: import your JSON, expose only the fields you need, press Publish.'],
                ['Serverless GPUs','Pay-as-you-go VRAM that scales from 1 to 1 000 users automatically.'],
                ['Multi-Workflow Apps','Bundle several workflows into one app; switch via a simple drop-down.'],
                ['Built-in Auth & RBAC','Invite users via email; control roles without external plugins.'],
                ['Real-Time Analytics','Track per-user GPU minutes, runs, and spend inside one dashboard.'],
                ['IP Safe by Design','Workflows stay private—only team admins can open the ComfyUI graph.'],
              ].map(([title,desc]) => (
                <Card key={title as string}>
                  <CardHeader className="p-5 pb-2"><CardTitle>{title as string}</CardTitle></CardHeader>
                  <CardContent className="pt-0 px-5 pb-5 text-gray-700">{desc as string}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">From Prototype to Production in 3 Steps</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Upload JSON</strong> – Drag-and-drop or paste your ComfyUI workflow.</li>
              <li><strong>Design App</strong> – Select inputs, set defaults, add tooltips, brand the UI.</li>
              <li><strong>Share & Scale</strong> – Send a link; ZenComfy allocates GPUs instantly as traffic grows.</li>
            </ol>
          </section>

          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Build Complex Creative Chains—Visually</h3>
            <p className="text-gray-700">Merge simple tools into powerful pipelines: e.g., Reference-guided generation → Upscale → FaceSwap. Approve intermediate results manually or let the chain run fully automated. Full debug logs and step-by-step previews give you transparency without touching code.</p>
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
                <p className="font-medium">How is billing calculated?</p>
                <p>Per-minute GPU usage plus optional storage. No hidden tiers.</p>
              </div>
              <div>
                <p className="font-medium">Can I bring custom nodes or Python libs?</p>
                <p>Yes — upload them during import. They run in isolated containers with the correct dependencies.</p>
              </div>
              <div>
                <p className="font-medium">Is my data secure?</p>
                <p>We encrypt data in transit and at rest, retain nothing by default, and offer private VPC on request.</p>
              </div>
              <div>
                <p className="font-medium">What GPUs do you provide?</p>
                <p>A100 80 GB, H100, and L4 for lighter loads. We auto-select the best fit.</p>
              </div>
            </div>
          </section>

          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to see your ComfyUI Workflow live?</h3>
            <p className="text-gray-700 mb-6">Book a 15-minute demo and ship your first ComfyUI web app today.</p>
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


