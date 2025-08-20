import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

export const DataDeletion: React.FC = () => {
  return (
    <PageLayout
      title="Data Deletion Request - ZenCreator"
      description="Learn how to request deletion of your personal data from ZenCreator."
    >
      <div className="container mx-auto px-4 py-20" style={{ paddingTop: '180px' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Data Deletion Request</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Deletion Requests</h2>
              <p className="text-gray-700 mb-6">
                If you'd like us to permanently delete all personal data we hold about you, please send a message to <a href="mailto:info@zencreator.pro" className="text-purple-600 hover:text-purple-800">info@zencreator.pro</a> with the subject line "Data Deletion Request."
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">In your email, please include:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>The email address or username you use with our service</li>
                  <li>Any additional identifying details (e.g. full name, account ID)</li>
                </ul>
              </div>
              
              <p className="text-gray-700 mb-4">
                We aim to process all deletion requests within 30 days. If you have any questions or need assistance, please don't hesitate to contact us at <a href="mailto:info@zencreator.pro" className="text-purple-600 hover:text-purple-800">info@zencreator.pro</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
