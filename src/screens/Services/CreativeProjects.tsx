import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

export const CreativeProjects: React.FC = () => (
  <PageLayout title="Creative Influencer Projects" description="AI-powered storytelling, collaborations, and interactive campaigns that break engagement records.">
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="rounded-2xl border border-dashed border-gray-300 p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h2>
          <p className="text-gray-600 mb-6">This page is under construction. We’re preparing a selection of cases and formats.</p>
          <a href="mailto:info@zencreator.pro?subject=Creative%20Influencer%20Projects" className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">Contact us</a>
        </div>
      </div>
    </div>
  </PageLayout>
);


