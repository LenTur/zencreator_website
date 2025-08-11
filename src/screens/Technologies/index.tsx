import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

export const Technologies = () => {
  return (
    <PageLayout 
      title="Technologies" 
      description="From a serverless GPU fleet to proprietary orchestration on top of ComfyUI, see how ZenCreator’s R&D team turns today’s best AI, cloud and social-platform APIs into production-ready content systems."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Built on the Best — Perfected In-House */}
          <section className="py-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Built on the Best — Perfected In-House</h2>
            <p className="text-gray-700 mb-4">
              Our 20-person R&D unit stress-tests every new model, API and infrastructure pattern against one question: <strong>“Will this move a real business metric today?”</strong>
            </p>
            <p className="text-gray-700">
              The results power <strong>ZenCreator</strong>, <strong>ZenComfy</strong>, and the fully-managed services our clients rely on.
            </p>
          </section>

          {/* Core Architecture */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Architecture</h3>
            <ol className="space-y-8 list-decimal pl-6">
              <li>
                <h4 className="font-semibold text-gray-900 mb-2">Model Layer</h4>
                <p className="text-gray-700"><em>SDXL, Flux, AnimateDiff, Kling 2.0, ElevenLabs, Grok, OpenAI GPT-4o</em> — containerised with reproducible checkpoints.</p>
              </li>
              <li>
                <h4 className="font-semibold text-gray-900 mb-2">Orchestration Layer</h4>
                <p className="text-gray-700"><strong>ComfyUI + our Python micro-framework</strong> wrap nodes into version-locked modules; YAML manifests declare inputs & GPU specs.</p>
              </li>
              <li>
                <h4 className="font-semibold text-gray-900 mb-2">Serverless GPU Fleet</h4>
                <p className="text-gray-700">Auto-scaled A100, H100, L4 machines across <strong>AWS</strong>, <strong>Azure</strong> & <strong>GCP</strong>. Jobs spin up in &lt; 5 s; you pay only for runtime.</p>
              </li>
              <li>
                <h4 className="font-semibold text-gray-900 mb-2">Data & Storage</h4>
                <p className="text-gray-700">Encrypted S3/GCS buckets with optional VPC peering; Postgres + Timescale for events; Redpanda streams for low-latency KPI fire-hoses.</p>
              </li>
              <li>
                <h4 className="font-semibold text-gray-900 mb-2">Application Layer</h4>
                <ul className="text-gray-700 list-disc pl-5 space-y-1">
                  <li><strong>Creator Hub</strong> (React + Tailwind)</li>
                  <li><strong>Publishing Hub</strong> (Next.js + GraphQL)</li>
                  <li><strong>Account Manager & Analytics</strong> (Apache Superset + custom chops)</li>
                </ul>
              </li>
              <li>
                <h4 className="font-semibold text-gray-900 mb-2">Edge & Compliance</h4>
                <p className="text-gray-700">CloudFront + Fastly CDN, WAF rules, image-moderation ensemble (AWS Rekognition, Google Vision, internal nudity classifier). All tokens stored in HashiCorp Vault; SOC-2 attested hosting.</p>
              </li>
            </ol>
          </section>

          {/* R&D Velocity */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">R&D Velocity &gt; Buzz-Word Bingo</h3>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 bg-gray-50 px-6 py-3 border-b border-gray-200">
                <div className="font-semibold text-gray-900">Last 9 Months</div>
                <div className="font-semibold text-gray-900">Shipped to Production</div>
              </div>
              <div className="divide-y divide-gray-200 text-gray-700">
                {[
                  ['New image models tested','46'],
                  ['Models that passed ROI gates','11'],
                  ['Video engines trialed','7'],
                  ['Avg. lab-to-product time','21 days'],
                  ['Weekly experimental runs','250 +']
                ].map(([k,v]) => (
                  <div key={k} className="grid grid-cols-2 px-6 py-3">
                    <div>{k}</div>
                    <div className="font-semibold">{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <blockquote className="mt-4 text-gray-600 italic">We keep the hype in the lab — only rollout what pays its keep.</blockquote>
          </section>

          {/* Partners */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trusted Technology Partners</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'ComfyUI','Amazon Web Services','Microsoft Azure','Google Cloud','NVIDIA','KlingAI','Runway','ElevenLabs','OpenAI','Grok','Meta Graph API','YouTube Data API','TikTok Content API','X (Twitter) API'
              ].map(p => (
                <span key={p} className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">{p}</span>
              ))}
            </div>
          </section>

          {/* What This Means for You */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What This Means for You</h3>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 bg-gray-50 px-6 py-3 border-b border-gray-200">
                <div className="font-semibold text-gray-900">Pillar</div>
                <div className="font-semibold text-gray-900">Real-World Benefit</div>
              </div>
              <div className="divide-y divide-gray-200 text-gray-700">
                {[
                  ['Poly-Cloud GPU Fleet','Lowest spot price wins — no single-vendor outages.'],
                  ['Official Platform APIs','Zero “shadow-ban” risk; full feature parity on day-one rollouts.'],
                  ['Zero-Retention Default','We delete generated assets unless you route them to your bucket.'],
                  ['One-Click Upgrades','New models appear in your dashboard automatically — no DevOps required.'],
                  ['Enterprise-Grade Security','SOC-2, GDPR, CCPA, HIPAA (image-only) ready; optional on-prem key management.']
                ].map(([k,v]) => (
                  <div key={k} className="grid grid-cols-2 px-6 py-3">
                    <div className="font-medium text-gray-900">{k}</div>
                    <div>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section className="py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Always Shipping Something New</h3>
            <ul className="space-y-3 text-gray-800">
              <li><strong>2024 Q4</strong> — Created closed alfa version ZenCreator and tested it with 100+ personas</li>
              <li><strong>2025 Q1</strong> — Created ZenComfy</li>
              <li><strong>2025 Q2</strong> — Launch ZenCreator to public beta</li>
            </ul>
            <p className="text-gray-600 mt-4">Stay in the loop: <em>engineering changelog pushed every Friday in the app.</em></p>
          </section>

          {/* CTA */}
          <section className="py-12 border-t border-gray-200">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Ready to Build on Top of Our Stack?</h4>
              <div className="flex justify-center gap-4">
                <a href="mailto:info@zencreator.pro?subject=Engineering%20Call" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Book an Engineering Call</a>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="py-8 border-t border-gray-200">
            <div className="text-center text-gray-700">
              <p className="mb-2 italic">Questions?</p>
              <a href="mailto:info@zencreator.pro" className="text-blue-600 hover:underline font-medium">info@zencreator.pro</a>
            </div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
};
