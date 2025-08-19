import React from 'react';
import { Camera, CheckCircle, Shield, Clock, Zap, Image as ImageIcon, Users, Target } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

const faqItems = [
  {
    question: "What formats do you deliver?",
    answer: "JPG or PNG up to 4K; custom ratios on request."
  },
  {
    question: "Can I add brand props or logos?",
    answer: "Yes — send reference assets and we'll integrate them."
  },
  {
    question: "Is 18+ content supported?",
    answer: "Yes, opt-in only and always policy-compliant."
  },
  {
    question: "How fast is the turnaround?",
    answer: "Pilot pack (50-200 images) in ≤ 24 h; larger batches in 48-72 h."
  }
];

const themePacks = [
  { name: 'Selfies', prompts: '521 prompt inside' },
  { name: 'Casual / Street', prompts: '521 prompt inside' },
  { name: 'Spicy (PG-13)', prompts: '521 prompt inside' },
  { name: 'Beach & Pool', prompts: '521 prompt inside' },
  { name: 'Professional Roles', prompts: '521 prompt inside' },
  { name: 'Holidays (X-mas, Halloween)', prompts: '521 prompt inside' },
  { name: 'Travel Landmarks', prompts: '521 prompt inside' },
  { name: 'Glamour / Editorial', prompts: '521 prompt inside' },
  { name: 'Wedding', prompts: '521 prompt inside' },
  { name: 'And Many More', prompts: '521 prompt inside' }
];

export const PhotoShootsService: React.FC = () => {
  return (
    <PageLayout
      title="Photo Shoots Generation — AI-Generated Photo Shoots"
      description="Professional-grade photo sets without studios, schedules, or travel. ZenCreator turns two reference photos into an entire, fully consistent photo shoot — delivered in hours, not days."
    >
      {/* Hero */}
      <div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
            <section className="pt-24 pb-[40px] text-center text-white w-full px-6">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Photo Shoots Generation
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
                  AI-Generated Photo Shoots
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Professional-grade photo sets without studios, schedules, or travel.
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

          {/* The Real B2B Challenge */}
          <section className="py-[150px] bg-white">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">The Real B2B Challenge</h2>
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 border border-purple-200 mb-12">
              <p className="text-xl text-gray-800 leading-relaxed max-w-4xl mx-auto text-center mb-8">
                Modern teams need <strong>large volumes of on-brand photos—fast and on budget</strong>. Traditional shoots can't keep up when you must:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Refresh thousands of existing user or product images without re-booking talent and studios.",
                "Give every employee a matching headshot after a rebrand—no matter where they work in the world.",
                "Seed a new dating or social platform with realistic, diverse profiles to solve the \"cold-start\" problem.",
                "Launch multi-market campaigns that call for the same model in region-specific scenes, outfits, or languages.",
                "Maintain strict brand and compliance standards while scaling visual output 100×."
              ].map((challenge, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{challenge}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl p-6 border border-red-200 max-w-4xl mx-auto">
                <p className="text-lg text-gray-800 italic font-semibold">The result? Bloated logistics, missed deadlines, inconsistent visuals, and spiraling costs.</p>
              </div>
            </div>
          </section>

          {/* Turn 2 Photos */}
          <section className="py-[150px] bg-gray-50">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-center">Turn 2 Photos To Realistic High-Quality Photo Shoot</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
              ZenCreator turns <strong>two reference photos</strong> (one face, one full-body) into an entire, fully consistent photo shoot — delivered in hours, not days.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { title: 'Manual QA', description: 'Every image passes a human review — no six-finger or warped props.', icon: CheckCircle },
                { title: 'Ultra-Realistic Output', description: '4K resolution, flawless lighting, realistic or studio-quality detail.', icon: ImageIcon },
                { title: '50+ Themes', description: 'Selfies, casual, spicy, holiday, travel, professions, weddings and more.', icon: Camera },
                { title: 'Custom Scenes', description: 'Provide mood boards or brand assets — we match them.', icon: Target },
                { title: 'Any Format & Size', description: 'Square, portrait, landscape, banner ratios; PNG or JPG.', icon: Zap },
                { title: 'Exclusive License', description: 'Content is yours alone — never resold or recycled.', icon: Shield },
                { title: 'Massive Scale', description: '20000+ final-approved photos monthly today; ready to 100×.', icon: Users }
              ].map((feature) => (
                <div key={feature.title} className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="py-[150px] bg-white">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Get Your Photo Shoot in Minutes—not Days</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Upload 2 Photos', description: 'Face + full-body (good details and lighting = best results).' },
                { step: '2', title: 'Pick Themes & Quantity', description: 'Select from 50+ prompt categories or request custom scenes.' },
                { step: '3', title: 'We Generate & QA', description: 'Our AI + human reviewers craft perfectly consistent images.' },
                { step: '4', title: 'Download Favorites', description: 'Approve, export, and post anywhere.' }
              ].map((item) => (
                <div key={item.step} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Theme Packs */}
          <section className="py-[150px] bg-gray-50">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Popular Theme Packs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {themePacks.map((pack) => (
                <div key={pack.name} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] text-center">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-4 mx-auto">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{pack.name}</h3>
                    <p className="text-sm text-gray-600">{pack.prompts}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 border border-purple-200 max-w-2xl mx-auto">
                <p className="text-lg text-gray-800 font-semibold">Need something niche? We'll create it.</p>
              </div>
            </div>
          </section>

          {/* How We Keep It Real */}
          <section className="py-[150px] bg-white">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">How We Keep It Real</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Face & Body Consistency Engine', description: 'Ensures identical features across every shot.', icon: Users },
                { title: 'Detail-Guard Pipeline', description: 'AI detection + human eyes catch extra fingers, artifacts, logo misuse.', icon: Shield },
                { title: 'Resolution Up-Scaler', description: 'Clean 4K exports without pixelation.', icon: Zap }
              ].map((feature) => (
                <div key={feature.title} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6 mx-auto">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
      
      <FAQAccordion 
        items={faqItems} 
        title="Frequently Asked Questions"
        cta={
          <section className="pt-10 bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 text-center border border-white/10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to Shoot Your Next Campaign — Virtually?</h3>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">Cut costs, skip logistics, and receive studio-quality images today.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Book a Demo</a>
              <a href="mailto:info@zencreator.pro?subject=Start%20Photo%20Shoots%20Project" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Start a Project</a>
            </div>
          </section>
        }
      />
    </PageLayout>
  );
};