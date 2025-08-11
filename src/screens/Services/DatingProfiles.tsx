import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const DatingProfilesService: React.FC = () => {
  return (
    <PageLayout
      title="AI-Generated Dating Profiles & Photos"
      description="Need content for a new dating app fast? ZenCreator auto-generates exclusive, human-quality dating profiles—photos, videos & bios—at scale. Manual QA, 100% consistency."
    >
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Lead */}
          <section className="py-6">
            <p className="text-lg text-gray-800 mb-6">
              Launch a dating product with thousands of believable, on-brand profiles — without photoshoots, casting, or months of prep.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:info@zencreator.pro?subject=Dating%20Profiles%20Demo" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">Book a Demo</a>
              <a href="mailto:info@zencreator.pro?subject=Dating%20Profiles%20Quote" className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50">Get a Quote</a>
            </div>
          </section>

          {/* Pain */}
          <section className="py-10 border-t border-gray-200">
            <p className="text-gray-800">
              A brand-new dating platform is an empty room: users arrive, see no matches, and churn. You need a critical mass of realistic profiles before launch — and you need them updated continuously.
            </p>
          </section>

          {/* Logos placeholder */}
          <section className="py-10 border-t border-gray-200">
            <h3 className="text-sm tracking-wide text-gray-500 mb-3">TRUSTED BY SINGLES ON</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center text-gray-500">
              {['match.com','dating.com','bumble','tinder','hinge','okcupid'].map((l) => (
                <div key={l} className="border border-gray-200 rounded-lg py-3">{l}</div>
              ))}
            </div>
          </section>

          {/* Service Details */}
          <section className="py-10 border-t border-gray-200">
            <h2 className="heading-2 text-gray-900 mb-6">Dating Profile Generation as a Service</h2>
            <p className="text-gray-800 mb-6">ZenCreator’s Dating Profile Generation service delivers complete, ready-to-publish profiles in days.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[ 
                ['Photos & Video', '3–50 images + 1–10 short clips per profile — selfies, casual shots, “spicy” lingerie or swimwear (optional, policy-compliant).'],
                ['Consistent Identity', 'Same face, body, and style across all media — no odd fingers or mismatched eyes.'],
                ['Complete Bio', 'Description, Age, Hobbies, Fun facts etc.'],
                ['Any Demographic', 'Gender, age 18–85+, ethnicity & body type — fully customizable per order.'],
                ['Exclusive License', 'Content belongs to you; never resold or reused.'],
                ['Manual QA', 'Human moderation on every asset — no six-finger, rings, or policy violations.'],
              ].map(([t,d]) => (
                <Card key={t as string}>
                  <CardHeader className="p-5 pb-3"><CardTitle className="text-base text-gray-900">{t as string}</CardTitle></CardHeader>
                  <CardContent className="pt-0 px-5 pb-5"><CardDescription className="text-gray-700">{d as string}</CardDescription></CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Scale & Speed */}
          <section className="py-10 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Scale & Speed</h3>
            <ul className="space-y-2 text-gray-800">
              <li>• 20,000+ production-ready images/month today</li>
              <li>• 100× capacity on standby — thanks to our GPU farm & workflow automation</li>
              <li>• Typical lead time: 48 hours for the first 100 profiles</li>
            </ul>
          </section>

          {/* Live Preview Widget */}
          <section className="py-10 border-t border-gray-200">
            <h3 className="heading-3 text-gray-900 mb-4">Live Preview Widget</h3>
            <p className="text-gray-700 mb-4">Parameters your visitors can play with:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                ['Gender', 'Male • Female'],
                ['Age range', '18–25 • 25–35 • 35–45 • 45–55 • 55–65 • 65–75 • 75+'],
                ['Ethnicity', 'Caucasian • Asian • Black • Indian • Latina • Mixed'],
              ].map(([t, d]) => (
                <Card key={t as string}>
                  <CardHeader className="p-5 pb-3"><CardTitle className="text-base text-gray-900">{t as string}</CardTitle></CardHeader>
                  <CardContent className="pt-0 px-5 pb-5"><CardDescription className="text-gray-700">{d as string}</CardDescription></CardContent>
                </Card>
              ))}
            </div>
            <p className="text-gray-700">When a user toggles options, we instantly display: 6 sample images (2 selfies • 2 casual • 2 swim/lingerie), 2 looping 5–10 s video clip, and an auto-generated sample bio.</p>
            <p className="text-gray-700 mt-2">Examples: <a className="text-purple-600 hover:underline" href="https://compliantpix.com/" target="_blank" rel="noreferrer">compliantpix.com</a></p>
          </section>

          {/* FAQ */}
          <section className="py-[150px]">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Left side - Title */}
              <div className="lg:col-span-2">
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  Frequently asked questions
                </h3>
              </div>
              
              {/* Right side - FAQ Items */}
              <div className="lg:col-span-3">
                <div className="space-y-8">
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Is the content unique to my product?</h4>
                    <p className="text-gray-600 leading-relaxed">Yes. Every asset is generated for you and never recycled.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Can I request niche demographics (e.g., wheelchair users, tattoos, specific fashion)?</h4>
                    <p className="text-gray-600 leading-relaxed">Yes, but capabilities vary by tool. Share requirements — we'll confirm what's feasible.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">How do you ensure compliance with app-store policies?</h4>
                    <p className="text-gray-600 leading-relaxed">Our moderation pipeline flags nudity, minors, weapons, hate symbols and more; humans approve the final set.</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="text-gray-600">More questions? <a className="text-purple-600 hover:text-purple-800 font-medium transition-colors" href="mailto:info@zencreator.pro">Talk to our team →</a></p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-10 border-t border-gray-200">
            <div className="bg-ink-900 text-white rounded-2xl p-8 border border-white/10 text-center">
              <h3 className="heading-3 mb-3">Ready to Fill Your Dating App with High-Quality Profiles?</h3>
              <p className="text-white/80 mb-6">Stop worrying about the cold-start problem and focus on acquiring real users.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="mailto:info@zencreator.pro?subject=Start%20Dating%20Profiles%20Project" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">Start a Project</a>
                <a href="mailto:info@zencreator.pro?subject=Book%20a%20Call" className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20">Book a 15-Minute Call</a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
};


