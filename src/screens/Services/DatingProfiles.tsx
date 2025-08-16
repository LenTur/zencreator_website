import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

const faqItems = [
  {
    question: "Is the content unique to my product?",
    answer: "Yes. Every asset is generated for you and never recycled."
  },
  {
    question: "Can I request niche demographics (e.g., wheelchair users, tattoos, specific fashion)?",
    answer: "Yes, but it depends on the specific capabilities of our AI tools. We have successfully generated content with people in wheelchairs or with certain clothing styles, but some details (e.g. complex tattoos) may be limited by current technologies. Provide your requirements and we'll let you know what is feasible to implement."
  },
  {
    question: "How do you ensure compliance with app-store policies?",
    answer: "Our moderation pipeline flags nudity, minors, weapons, hate symbols and more; humans approve the final set."
  }
];

export const DatingProfilesService: React.FC = () => {
  return (
    <PageLayout
      title="AI-Generated Dating Profiles & Photos"
      description="Need content for a new dating app fast? ZenCreator auto-generates exclusive, human-quality dating profiles—photos, videos & bios—at scale. Manual QA, 100% consistency."
    >
      <div className="container mx-auto px-4 pb-20" style={{ paddingTop: '140px' }}>
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section className="pt-24 pb-[40px] text-center">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">AI-Generated Dating Profiles</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Launch a dating product with thousands of believable, on-brand profiles — without photo shoots, casting, or months of prep.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200">
                Book a Demo
              </a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 hover:border-purple-400 hover:text-purple-900 transition-all duration-200">
                Get a Quote
              </a>
            </div>
          </section>

          {/* Pain Point */}
          <section className="py-[75px]">
            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <p className="text-xl text-gray-800 leading-relaxed max-w-4xl mx-auto">
                A brand-new dating platform is an empty room: users arrive, see no matches, and churn. You need a critical mass of realistic profiles <strong>before</strong> launch — and you need them updated continuously.
              </p>
            </div>
          </section>

          {/* Trusted by */}
          <section className="py-[75px] text-center">
            <h3 className="text-sm tracking-wide text-gray-500 mb-8 uppercase">Trusted by Singles on</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
              {[
                { name: 'match.com', url: 'https://match.com' },
                { name: 'dating.com', url: 'https://dating.com' },
                { name: 'bumble', url: '#' },
                { name: 'tinder', url: '#' },
                { name: 'hinge', url: '#' },
                { name: 'okcupid', url: '#' }
              ].map((platform) => (
                <div key={platform.name} className="border border-gray-200 rounded-xl py-4 px-2 hover:shadow-md transition-shadow">
                  <span className="text-gray-600 font-medium">{platform.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Service Details */}
          <section className="py-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-center">Dating Profile Generation as a Service</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
              ZenCreator's <strong>Dating Profile Generation</strong> service delivers complete, ready-to-publish profiles in days.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Photos & Video',
                  description: '3–50 images + 1-10 short clips per profile — selfies, casual shots, "spicy" lingerie or swimwear (optional, 100% policy-compliant).'
                },
                {
                  title: 'Consistent Identity',
                  description: 'Same face, body, and style across all media — no odd fingers or mismatched eyes.'
                },
                {
                  title: 'Complete Bio',
                  description: 'Description, Age, Hobbies, Fun facts etc.'
                },
                {
                  title: 'Any Demographic',
                  description: 'Gender, age 18–85+, ethnicity & body type — fully customizable per order.'
                },
                {
                  title: 'Exclusive License',
                  description: 'Content belongs to you; never resold or reused.'
                },
                {
                  title: 'Manual QA',
                  description: 'Human moderation on every asset — no six-finger, rings, or policy violations.'
                }
              ].map((feature) => (
                <Card key={feature.title} className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Scale & Speed */}
          <section className="py-[75px]">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Scale & Speed</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h4 className="text-2xl font-black text-purple-900 mb-2">20,000+</h4>
                <p className="text-purple-800">production-ready images/month today</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h4 className="text-2xl font-black text-purple-900 mb-2">100× capacity</h4>
                <p className="text-purple-800">on standby — thanks to our GPU farm & workflow automation</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h4 className="text-2xl font-black text-purple-900 mb-2">48 hours</h4>
                <p className="text-purple-800">typical lead time for the first 100 profiles</p>
              </div>
            </div>
          </section>

          {/* Live Preview Widget */}
          <section className="py-[150px]">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Live Preview Widget</h3>
            <p className="text-lg text-gray-600 mb-8 text-center">Parameters your visitors can play with:</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: 'Gender', options: 'Male | Female' },
                { title: 'Age range', options: '18-25 | 25-35 | 35-45 | 45-55 | 55-65 | 65-75 | 75+' },
                { title: 'Ethnicity', options: 'Caucasian | Asian | Black | Indian | Latina | Mixed' }
              ].map((param) => (
                <Card key={param.title} className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">{param.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{param.options}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl">
              <p className="text-gray-700 mb-4">When a user toggles options, we instantly display:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• 6 sample images (2 selfies • 2 casual • 2 swim/lingerie)</li>
                <li>• 2 looping 5-10-second video clip</li>
                <li>• Auto-generated sample bio</li>
              </ul>
              <p className="text-gray-700">
                Examples: <a className="text-purple-600 hover:text-purple-800 font-medium transition-colors" href="https://compliantpix.com/" target="_blank" rel="noreferrer">compliantpix.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
      
      <FAQAccordion 
        items={faqItems} 
        title="Frequently Asked Questions"
        cta={
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">Ready to Fill Your Dating App with High-Quality Profiles?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Stop worrying about the "cold-start" problem and focus on acquiring real users.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:info@zencreator.pro?subject=Start%20Dating%20Profiles%20Project" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200">
                Start a Project
              </a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 hover:border-purple-400 hover:text-purple-900 transition-all duration-200">
                Book a 15-Minute Call
              </a>
            </div>
          </div>
        }
      />
    </PageLayout>
  );
};