import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

export const CookiesPolicy: React.FC = () => {
  return (
    <PageLayout
      title="Cookies Policy - ZenCreator"
      description="Learn about how ZenCreator uses cookies and similar technologies."
    >
      <div className="container mx-auto px-4 py-20" style={{ paddingTop: '180px' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Cookies Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              ZenCreator LLC ("Company," "we," "us," or "our") uses cookies and similar tracking technologies to improve user experience, analyze website traffic, and support marketing efforts. This Cookies Policy explains how we use cookies, what types we collect, and how you can manage them.
            </p>
            <p className="text-gray-700 mb-8">
              By using zencreator.pro, you consent to the use of cookies as described in this policy.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700 mb-3">Cookies are small text files stored on your device when you visit a website. They help us:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Improve website functionality</li>
                <li>Recognize returning visitors</li>
                <li>Analyze traffic and user behavior</li>
                <li>Personalize content and ads</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Cookies do not contain personally identifiable information, but they can be linked to other data you provide to us.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
              <p className="text-gray-700 mb-4">
                We use different types of cookies to enhance website performance, improve user experience, and support marketing campaigns.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1. Essential Cookies (Strictly Necessary)</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Ensure website functionality and security</li>
                <li>Enable login authentication and session management</li>
                <li>Cannot be disabled</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2. Performance & Analytics Cookies</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Track user behavior and interactions</li>
                <li>Help optimize website structure and design</li>
                <li>Used by services like Google Analytics</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3. Functional Cookies</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Remember user preferences (language, region, etc.)</li>
                <li>Improve customization and personalization</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.4. Advertising & Marketing Cookies</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Deliver targeted ads based on user behavior</li>
                <li>Track ad performance and retarget users</li>
                <li>Used by services like Facebook Pixel, Google Ads, and LinkedIn Ads</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.5. Third-Party Cookies</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Set by external services embedded in our site (e.g., YouTube, social media buttons)</li>
                <li>Allow content sharing, video playback, and integration with other platforms</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Cookies</h2>
              <p className="text-gray-700 mb-3">We use cookies for:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Website functionality:</strong> Keeping the site operational and secure</li>
                <li><strong>User experience:</strong> Remembering preferences and improving usability</li>
                <li><strong>Analytics:</strong> Understanding how visitors interact with our site</li>
                <li><strong>Marketing:</strong> Delivering relevant ads and promotions</li>
              </ul>
              <p className="text-gray-700 mb-4">
                These cookies allow us to optimize our services and tailor our offerings based on user behavior.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How to Manage Cookies</h2>
              <p className="text-gray-700 mb-3">You can control or disable cookies through:</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1. Browser Settings</h3>
              <p className="text-gray-700 mb-3">Most browsers allow you to block or delete cookies:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Google Chrome: Manage Cookies</li>
                <li>Mozilla Firefox: Manage Cookies</li>
                <li>Microsoft Edge: Manage Cookies</li>
                <li>Safari: Manage Cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2. Cookie Consent Banner</h3>
              <p className="text-gray-700 mb-4">
                When visiting our site, you can accept, reject, or customize cookie preferences through the pop-up banner.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3. Opt-Out of Third-Party Tracking</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Google Analytics: Opt-Out Tool</li>
                <li>Facebook Ads: Ad Preferences</li>
                <li>LinkedIn Ads: Ad Settings</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Services and Cookies</h2>
              <p className="text-gray-700 mb-3">Our website may use third-party tools and integrations that set their own cookies:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>📌 <strong>Google Analytics</strong> – Tracks website traffic and user behavior</li>
                <li>📌 <strong>Meta Pixel (Facebook Ads)</strong> – Retargeting and ad optimization</li>
                <li>📌 <strong>LinkedIn Ads</strong> – User engagement and professional targeting</li>
                <li>📌 <strong>YouTube Embedded Videos</strong> – Video playback tracking</li>
                <li>📌 <strong>Twitter/X Buttons</strong> – Social sharing cookies</li>
              </ul>
              <p className="text-gray-700 mb-4">
                We do not control third-party cookies, so please refer to their privacy policies for details.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Storage and Security</h2>
              <p className="text-gray-700 mb-3">We store cookie data securely and do not share personally identifiable information with advertisers or third-party services without consent.</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>We comply with GDPR, CCPA, and other privacy regulations</li>
                <li>We use secure encryption for any user-related data stored</li>
                <li>We never sell your personal data</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookies Policy to reflect new legal requirements, technologies, or changes in our services. If significant changes occur, we will notify users via our website.
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
