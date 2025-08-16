import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
      title="AI-Generated Photo Shoots"
      description="Professional-grade photo sets without studios, schedules, or travel. ZenCreator turns two reference photos into an entire, fully consistent photo shoot — delivered in hours, not days."
    >
      <div className="container mx-auto px-4 pb-20" style={{ paddingTop: '140px' }}>
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section className="pt-24 pb-[40px] text-center">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">AI-Generated Photo Shoots</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Professional-grade photo sets without studios, schedules, or travel.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 hover:border-purple-400 hover:text-purple-900 transition-all duration-200">
                Get a Quote
              </a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200">
                Book a Demo
              </a>
            </div>
          </section>

          {/* The Real B2B Challenge */}
          <section className="py-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">The Real B2B Challenge</h2>
            <div className="bg-gray-50 p-8 rounded-3xl mb-12">
              <p className="text-xl text-gray-800 leading-relaxed max-w-4xl mx-auto text-center mb-8">
                Modern teams need <strong>large volumes of on-brand photos—fast and on budget</strong>. Traditional shoots can't keep up when you must:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Refresh thousands of existing user or product images without re-booking talent and studios.",
                "Give every employee a matching headshot after a rebrand—no matter where they work in the world.",
                "Seed a new dating or social platform with realistic, diverse profiles to solve the \"cold-start\" problem.",
                "Launch multi-market campaigns that call for the same model in region-specific scenes, outfits, or languages.",
                "Maintain strict brand and compliance standards while scaling visual output 100×."
              ].map((challenge, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">•</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 italic">The result? Bloated logistics, missed deadlines, inconsistent visuals, and spiraling costs.</p>
            </div>
          </section>

          {/* Turn 2 Photos */}
          <section className="py-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-center">Turn 2 Photos To Realistic High-Quality Photo Shoot</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
              ZenCreator turns <strong>two reference photos</strong> (one face, one full-body) into an entire, fully consistent photo shoot — delivered in hours, not days.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Manual QA', description: 'Every image passes a human review — no six-finger or warped props.' },
                { title: 'Ultra-Realistic Output', description: '4K resolution, flawless lighting, realistic or studio-quality detail.' },
                { title: '50+ Themes', description: 'Selfies, casual, spicy, holiday, travel, professions, weddings and more.' },
                { title: 'Custom Scenes', description: 'Provide mood boards or brand assets — we match them.' },
                { title: 'Any Format & Size', description: 'Square, portrait, landscape, banner ratios; PNG or JPG.' },
                { title: 'Exclusive License', description: 'Content is yours alone — never resold or recycled.' },
                { title: 'Massive Scale', description: '20000+ final-approved photos monthly today; ready to 100×.' }
              ].map((feature) => (
                <Card key={feature.title} className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="py-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Get Your Photo Shoot in Minutes—not Days</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Upload 2 Photos', description: 'Face + full-body (good details and lighting = best results).' },
                { step: '2', title: 'Pick Themes & Quantity', description: 'Select from 50+ prompt categories or request custom scenes.' },
                { step: '3', title: 'We Generate & QA', description: 'Our AI + human reviewers craft perfectly consistent images.' },
                { step: '4', title: 'Download Favorites', description: 'Approve, export, and post anywhere.' }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Theme Packs */}
          <section className="py-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Popular Theme Packs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {themePacks.map((pack) => (
                <div key={pack.name} className="bg-purple-50 p-6 rounded-2xl text-center">
                  <h3 className="text-lg font-bold text-purple-900 mb-2">{pack.name}</h3>
                  <p className="text-sm text-purple-700">{pack.prompts}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-600">Need something niche? We'll create it.</p>
            </div>
          </section>

          {/* How We Keep It Real */}
          <section className="py-[150px]">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">How We Keep It Real</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Face & Body Consistency Engine', description: 'Ensures identical features across every shot.' },
                { title: 'Detail-Guard Pipeline', description: 'AI detection + human eyes catch extra fingers, artifacts, logo misuse.' },
                { title: 'Resolution Up-Scaler', description: 'Clean 4K exports without pixelation.' }
              ].map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="bg-gray-100 p-6 rounded-2xl mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
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
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">Ready to Shoot Your Next Campaign — Virtually?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Cut costs, skip logistics, and receive studio-quality images today.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:info@zencreator.pro?subject=Start%20Photo%20Shoots%20Project" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200">
                Start a Project
              </a>
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 hover:border-purple-400 hover:text-purple-900 transition-all duration-200">
                Book a 15-Minute Demo
              </a>
            </div>
          </div>
        }
      />
    </PageLayout>
  );
};