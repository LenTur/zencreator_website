import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

export const AboutUs: React.FC = () => {
  return (
    <PageLayout
      title="About ZenCreator | Your Trusted Partner in AI-Driven Content & Influence"
      description="ZenCreator combines deep product experience with cutting-edge AI to deliver scalable virtual influencers, photo shoots, and profile content. Discover our mission, values, and global team."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* About ZenCreator */}
          <section className="py-6">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">About ZenCreator</h2>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Experience-backed. Resource-rich. Focused on your growth.</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              ZenCreator is an AI company that turns real-world content bottlenecks into scalable solutions for marketing, social, and e-commerce teams.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We blend more than a decade of product-building expertise with a global roster of AI researchers, creators, and growth specialists—so you get dependable results, not experiments.
            </p>
          </section>

          {/* Mission */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-900 font-semibold leading-relaxed">
              Help businesses create authentic, on-brand visuals and influence at the speed of opportunity — without the cost, delay, or risk of traditional production.
            </p>
          </section>

          {/* What Sets Us Apart */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">What Sets Us Apart</h2>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-900 mb-1">Proven Track Record</p>
                <p className="text-gray-700">We’ve launched and scaled multiple social & mar-tech products since 2012; every ZenCreator service is rooted in real operational know-how.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Quality at Scale</p>
                <p className="text-gray-700">AI handles volume, but every asset passes a human QA gate — ensuring consistency, compliance, and brand safety.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Full-Stack Capability</p>
                <p className="text-gray-700">From concept to analytics, our in-house tech (ZenCreator) covers ideation, generation, scheduling, and performance tuning.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Partnership Mindset</p>
                <p className="text-gray-700">Your KPIs are our roadmap. We iterate quickly and share data transparently, acting as an extension of your team.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Global Presence</p>
                <p className="text-gray-700">Offices in the US, Cyprus, and Israel provide around-the-clock support and access to diverse talent pools.</p>
              </div>
            </div>
          </section>

          {/* Numbers */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Today — ZenCreator in Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-black text-gray-900">1 000+</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">240 000+ exclusive dating-profile images produced over the last year</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">98%+ first-pass approval rate from human moderators</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">20 specialists across AI, design, growth, and product, collaborating across three time zones</p>
              </div>
            </div>
          </section>

          {/* Core Services */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Core Services</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li><span className="font-semibold">AI Influencers</span> – End-to-end creation and management of virtual creators who post, engage, and convert 24/7.</li>
              <li><span className="font-semibold">Dating Profile Generation</span> – Thousands of realistic, exclusive profiles to solve the “cold-start” challenge for new platforms.</li>
              <li><span className="font-semibold">AI Photo Shoot Generator</span> – Studio-quality images from just two reference photos, ready in hours.</li>
              <li><span className="font-semibold">ZenCreator Platform</span> – The engine that powers it all, unifying generation, scheduling, and analytics in one dashboard.</li>
            </ol>
          </section>

          {/* Values */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><span className="font-semibold">Problem-First Thinking</span> – We build tools we wish we’d had; if it doesn’t solve a pain point, we won’t ship it.</li>
              <li><span className="font-semibold">Reliability Over Hype</span> – Cutting-edge tech, tempered by rigorous QA and compliance checks.</li>
              <li><span className="font-semibold">Data-Driven Decisions</span> – Creative is only as good as the metrics it moves.</li>
              <li><span className="font-semibold">Transparency & Trust</span> – Clear timelines, open communication, predictable costs.</li>
              <li><span className="font-semibold">Continuous Improvement</span> – Rapid iteration cycles keep you ahead of platform trends and algorithm shifts.</li>
            </ul>
          </section>

          {/* Where We Work */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Where We Work</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Head Office – USA</p>
                <p>131 Continental Dr, Suite 305, Newark, DE 19713</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Branch – Cyprus</p>
                <p>Limassol</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Branch – Israel</p>
                <p>Ramat HaSharon</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 border-t border-gray-200">
            <div className="bg-[#0F172A] text-white rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-3">Let’s Build the Future of Content Together</h3>
              <p className="text-white/80 mb-6">Ready to remove production bottlenecks and scale visual impact? We’d love to talk.</p>
              <div className="space-y-2 mb-6">
                <p><span className="font-semibold">Email</span> — <a className="underline" href="mailto:info@zencreator.pro">info@zencreator.pro</a></p>
                <p><span className="font-semibold">Phone</span> — <a className="underline" href="tel:+13254137454">+1 325 413 7454</a></p>
                <p><span className="font-semibold">Follow Us</span> — <a className="underline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></p>
              </div>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">Book a 15-Minute Call</a>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;


