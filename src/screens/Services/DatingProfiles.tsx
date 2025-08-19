import React from 'react';
import { Heart, Users, CheckCircle, Camera, Clock, Shield } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
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
      title="Dating Profiles Generation — AI-Generated Dating Profiles & Photos"
      description="Need content for a new dating app fast? ZenCreator auto-generates exclusive, human-quality dating profiles—photos, videos & bios—at scale. Manual QA, 100% consistency."
    >
      {/* Hero */}
      <div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
            <section className="pt-24 pb-[40px] text-center text-white w-full px-6">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Dating Profiles Generation
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7BA1F8, #C084FC)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  className="text-2xl md:text-4xl"
                >
                  AI-Generated Dating Profiles & Photos
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Launch a dating product with thousands of believable, on-brand profiles — without photo shoots, casting, or months of prep.
              </p>
              <div className="flex gap-4 justify-center">
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Book a Demo
                </a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200">
                  Get a Quote
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Pain Point */}
          <section className="py-[150px] bg-white">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 border border-purple-200 max-w-5xl mx-auto">
                <p className="text-xl text-gray-800 leading-relaxed">
                  A brand-new dating platform is an empty room: users arrive, see no matches, and churn. You need a critical mass of realistic profiles <strong>before</strong> launch — and you need them updated continuously.
                </p>
              </div>
            </div>
          </section>

          {/* Trusted by */}
          <section className="py-[150px] bg-gray-50">
            <h3 className="text-sm tracking-wide text-gray-500 mb-12 uppercase text-center">Trusted by Singles on</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {[
                { name: 'match.com', url: 'https://match.com' },
                { name: 'dating.com', url: 'https://dating.com' },
                { name: 'bumble', url: '#' },
                { name: 'tinder', url: '#' },
                { name: 'hinge', url: '#' },
                { name: 'okcupid', url: '#' }
              ].map((platform) => (
                <div key={platform.name} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white rounded-xl py-6 px-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02] text-center">
                    <span className="text-gray-700 font-medium">{platform.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Service Details */}
          <section className="py-[150px] bg-white">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-center">Dating Profile Generation as a Service</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
              ZenCreator's <strong>Dating Profile Generation</strong> service delivers complete, ready-to-publish profiles in days.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Photos & Video',
                  description: '3–50 images + 1-10 short clips per profile — selfies, casual shots, "spicy" lingerie or swimwear (optional, 100% policy-compliant).',
                  icon: Camera
                },
                {
                  title: 'Consistent Identity',
                  description: 'Same face, body, and style across all media — no odd fingers or mismatched eyes.',
                  icon: Users
                },
                {
                  title: 'Complete Bio',
                  description: 'Description, Age, Hobbies, Fun facts etc.',
                  icon: Heart
                },
                {
                  title: 'Any Demographic',
                  description: 'Gender, age 18–85+, ethnicity & body type — fully customizable per order.',
                  icon: Users
                },
                {
                  title: 'Exclusive License',
                  description: 'Content belongs to you; never resold or reused.',
                  icon: Shield
                },
                {
                  title: 'Manual QA',
                  description: 'Human moderation on every asset — no six-finger, rings, or policy violations.',
                  icon: CheckCircle
                }
              ].map((feature) => (
                <div key={feature.title} className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Scale & Speed */}
          <section className="py-[150px] bg-gray-50">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Scale & Speed</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: '20,000+', description: 'production-ready images/month today' },
                { number: '100× capacity', description: 'on standby — thanks to our GPU farm & workflow automation' },
                { number: '48 hours', description: 'typical lead time for the first 100 profiles' }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6 mx-auto">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-3xl font-black text-purple-900 mb-4">{stat.number}</h4>
                    <p className="text-gray-700 leading-relaxed">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Live Preview Widget */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-center">Live Preview Widget</h3>
            <p className="text-lg text-gray-600 mb-12 text-center">Parameters your visitors can play with:</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: 'Gender', options: 'Male | Female' },
                { title: 'Age range', options: '18-25 | 25-35 | 35-45 | 45-55 | 55-65 | 65-75 | 75+' },
                { title: 'Ethnicity', options: 'Caucasian | Asian | Black | Indian | Latina | Mixed' }
              ].map((param) => (
                <div key={param.title} className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{param.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{param.options}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 border border-purple-200">
              <p className="text-gray-700 mb-4 font-semibold">When a user toggles options, we instantly display:</p>
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
          <section className="pt-10 bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 text-center border border-white/10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to Fill Your Dating App with High-Quality Profiles?</h3>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">Stop worrying about the "cold-start" problem and focus on acquiring real users.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Book a Demo</a>
              <a href="mailto:info@zencreator.pro?subject=Start%20Dating%20Profiles%20Project" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Start a Project</a>
            </div>
          </section>
        }
      />
    </PageLayout>
  );
};