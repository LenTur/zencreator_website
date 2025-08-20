import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

export const PrivacyPolicy: React.FC = () => {
  return (
    <PageLayout
      title="Privacy Policy - ZenCreator"
      description="Learn how ZenCreator collects, uses, and protects your personal information."
    >
      <div className="container mx-auto px-4 py-20" style={{ paddingTop: '180px' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              ZenCreator LLC ("Company," "we," "us," or "our") respects your privacy and is committed to protecting it through this Privacy Policy. This document outlines how we collect, use, disclose, and safeguard your information when you visit our website zencreator.pro and use our services.
            </p>
            <p className="text-gray-700 mb-8">
              By using our website and services, you agree to the collection and use of your information in accordance with this Privacy Policy.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect different types of information, including:</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1. Personal Information</h3>
              <p className="text-gray-700 mb-3">When you interact with us, we may collect personal information, including but not limited to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Payment details (for services)</li>
                <li>Any other information you provide when contacting us or signing up for services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2. Automatically Collected Information</h3>
              <p className="text-gray-700 mb-3">When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages you visit and the time spent on them</li>
                <li>Device type and operating system</li>
                <li>Cookies and tracking data (see Section 6)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3. Information from Third Parties</h3>
              <p className="text-gray-700 mb-3">We may receive information from:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Social media platforms (if you interact with our pages)</li>
                <li>Analytics providers (Google Analytics, etc.)</li>
                <li>Payment processors</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-3">We use the collected information to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide, operate, and improve our services</li>
                <li>Process transactions and send invoices</li>
                <li>Respond to inquiries and customer support requests</li>
                <li>Send marketing and promotional materials (you can opt-out anytime)</li>
                <li>Detect and prevent fraudulent activities</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-gray-700 mb-4">We do not sell your personal data to third parties.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing Your Information</h2>
              <p className="text-gray-700 mb-3">We may share your information in the following cases:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Service Providers:</strong> We may share data with third-party vendors who help us run our business (e.g., payment processors, cloud hosting, analytics providers)</li>
                <li><strong>Legal Compliance:</strong> If required by law, we may disclose information to comply with legal processes or enforce our agreements</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your data may be transferred</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Retention</h2>
              <p className="text-gray-700 mb-3">We keep your personal data only as long as necessary for the purposes outlined in this Privacy Policy.</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Account and service-related data:</strong> Until you request deletion</li>
                <li><strong>Payment records:</strong> Retained for compliance with financial regulations</li>
                <li><strong>Marketing data:</strong> Retained until you opt-out</li>
              </ul>
              <p className="text-gray-700 mb-4">You can request data deletion at any time (see Section 7).</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Security of Your Information</h2>
              <p className="text-gray-700 mb-4">
                We take reasonable security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of online transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies & Tracking Technologies</h2>
              <p className="text-gray-700 mb-3">We use cookies and similar tracking technologies to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Analyze site performance and user behavior</li>
                <li>Provide personalized experiences</li>
                <li>Improve our website and services</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Managing Cookies:</strong> You can manage or disable cookies in your browser settings. However, some website features may not function properly if cookies are disabled.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights & Choices</h2>
              <p className="text-gray-700 mb-3">Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Access & Correction:</strong> You can request to view or edit your data</li>
                <li><strong>Deletion:</strong> You can request that we delete your personal information</li>
                <li><strong>Opt-Out:</strong> You can unsubscribe from marketing emails at any time</li>
                <li><strong>Restrict Processing:</strong> You may have the right to restrict how we process your data</li>
              </ul>
              <p className="text-gray-700 mb-4">
                📩 To exercise your rights, contact us at: <a href="mailto:info@zencreator.pro" className="text-purple-600 hover:text-purple-800">info@zencreator.pro</a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links & Services</h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites. We are not responsible for their privacy policies or practices. Please review their policies before providing any personal information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                If you are accessing our website from outside the United States, your data may be transferred and stored in the United States or other countries where we operate.
              </p>
              <p className="text-gray-700 mb-4">
                By using our services, you consent to this transfer and understand that different data protection laws may apply.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our website and services are not intended for children under 13, and we do not knowingly collect their data. If we learn that we have collected personal information from a child under 13, we will delete it immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. If we make significant changes, we will notify you by posting the updated policy on our website.
              </p>
            </section>

            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <p className="text-gray-700 font-semibold">
                📅 Last Updated: February 17, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
