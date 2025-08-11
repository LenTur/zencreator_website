import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

const SubTabs: React.FC = () => {
  const items = [
    { title: 'Content Creation', href: '/products/zencreator/content-creation' },
    { title: 'Publishing Hub', href: '/products/zencreator/publishing-hub' },
    { title: 'Analytics & Insights', href: '/products/zencreator/analytics' },
    { title: 'Account Management', href: '/products/zencreator/account-management' },
  ];
  return (
    <div className="sticky top-[92px] z-[9950] bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 py-3">
          {items.map((i) => (
            <a key={i.title} href={i.href} className="px-3 py-1.5 text-sm rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700">
              {i.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CreatorOS: React.FC = () => {
  return (
    <PageLayout
      title="ZenCreator"
      description="AI studio for content generation, omni‑channel publishing, and growth analytics — in one workspace."
    >
      <SubTabs />
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Modules overview */}
          <section className="py-12">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <h4 className="font-semibold text-gray-900">Module</h4>
                  <h4 className="font-semibold text-gray-900">Description</h4>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium text-gray-900">Content Creation</div>
                    <div className="text-gray-600">Face generation, swapping, upscaling, carousels, video, and photo shoots.</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium text-gray-900">Publishing Hub</div>
                    <div className="text-gray-600">Publishing to Instagram, Threads, X, Facebook, YouTube with Smart Publish windows.</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium text-gray-900">Account Management</div>
                    <div className="text-gray-600">Profiles, access, tokens, and roles.</div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="font-medium text-gray-900">Analytics & Insights</div>
                    <div className="text-gray-600">Metrics from post to portfolio; AI suggests next steps.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 border-t border-gray-200">
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-6">Ready to accelerate your content pipeline?</p>
              <div className="flex justify-center gap-4">
                <a href="/products/zencreator/content-creation" className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">Open ZenCreator</a>
                <a href="mailto:info@zencreator.pro?subject=Demo" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book a demo</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};


