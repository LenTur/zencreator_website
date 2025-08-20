import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

export const TermsAndConditions: React.FC = () => {
  return (
    <PageLayout
      title="Terms and Conditions - ZenCreator"
      description="Read our terms and conditions for using ZenCreator services."
    >
      <div className="container mx-auto px-4 py-20" style={{ paddingTop: '180px' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Welcome to ZenCreator LLC ("Company," "we," "us," or "our"). These Terms and Conditions govern your use of our website zencreator.pro and the services provided by ZenCreator LLC.
            </p>
            <p className="text-gray-700 mb-8">
              By accessing or using our website and services, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Definitions</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>"Company," "we," "us," or "our"</strong> – Refers to ZenCreator LLC, headquartered at 131 Continental Dr, Suite 305, Newark, DE 19713, United States.</li>
                <li><strong>"Services"</strong> – Includes AI-driven influencer marketing, content creation, social media management, and related offerings.</li>
                <li><strong>"User," "you," or "your"</strong> – Refers to any individual or entity accessing or using our services.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
              <p className="text-gray-700 mb-3">By using our services, you confirm that you:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Are at least 18 years old or have parental/legal guardian consent.</li>
                <li>Have the legal capacity to enter into this agreement.</li>
                <li>Will comply with all applicable laws and regulations.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                If you use our services on behalf of a company or entity, you confirm that you have the authority to bind that entity to these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Services and Modifications</h2>
              <p className="text-gray-700 mb-3">We offer AI-driven influencer marketing services, including:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>AI-powered influencer creation and management.</li>
                <li>Social media content generation and automation.</li>
                <li>Performance-based marketing strategies.</li>
                <li>Custom AI-generated influencer campaigns.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                🔹 We reserve the right to modify or discontinue any part of our services at any time without prior notice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Obligations</h2>
              <p className="text-gray-700 mb-3">By using our services, you agree that you will NOT:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>❌ Use our services for unlawful, fraudulent, or deceptive purposes.</li>
                <li>❌ Copy, modify, distribute, or sell any part of our services without permission.</li>
                <li>❌ Attempt to access or interfere with our systems, servers, or security.</li>
                <li>❌ Use automated systems (e.g., bots, scrapers) to access our services.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We reserve the right to suspend or terminate any user account that violates these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All content, trademarks, logos, and AI-generated materials on our platform are owned by ZenCreator LLC or licensed to us.</li>
                <li>Users may not use, copy, or distribute our content without prior written consent.</li>
                <li>Any content created using our AI technology remains the property of ZenCreator LLC, unless otherwise agreed in writing.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payments and Billing</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Our services may require payment, which will be clearly indicated before purchase.</li>
                <li>Payments are processed securely through third-party providers.</li>
                <li>By making a purchase, you agree to provide accurate payment information.</li>
                <li>Refunds may be issued at our sole discretion, depending on the nature of the service.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                For payment-related inquiries, contact us at <a href="mailto:info@zencreator.pro" className="text-purple-600 hover:text-purple-800">info@zencreator.pro</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>🔹 ZenCreator LLC is not liable for any indirect, incidental, or consequential damages arising from the use of our services.</li>
                <li>🔹 We do not guarantee specific results from AI-generated influencer campaigns.</li>
                <li>🔹 Our services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, our total liability will not exceed the amount you paid for our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 mb-3">We reserve the right to suspend or terminate access to our services at any time, without notice, if:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>You violate these Terms.</li>
                <li>Your actions harm or threaten the integrity of our platform.</li>
                <li>We are required to do so by law or regulatory authority.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Upon termination, your access to services will be revoked, and any outstanding obligations remain enforceable.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links & Services</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Our website may contain links to third-party sites. We are not responsible for their content, policies, or services.</li>
                <li>Users should review third-party terms before engaging with their services.</li>
                <li>We do not endorse or guarantee the security of third-party platforms.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacy & Data Usage</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Your use of our services is also governed by our Privacy Policy.</li>
                <li>We collect and process user data in accordance with GDPR, CCPA, and other applicable privacy laws.</li>
                <li>We use cookies and tracking technologies as described in our Cookies Policy.</li>
                <li>You can request data deletion or modify preferences by contacting <a href="mailto:info@zencreator.pro" className="text-purple-600 hover:text-purple-800">info@zencreator.pro</a>.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law & Dispute Resolution</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>✔ These Terms are governed by the laws of the State of Delaware, USA.</li>
                <li>Any disputes will first be attempted to be resolved amicably through direct negotiation.</li>
                <li>If unresolved, disputes shall be settled through binding arbitration in Delaware.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Updates to These Terms</h2>
              <p className="text-gray-700 mb-4">
                We may update these Terms from time to time. If significant changes are made, we will notify users via our website.
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
