import React from 'react';
import { Zap, Settings, User, CheckCircle, Heart, Camera } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { MoreMagicTools } from '@/components/sections/MoreMagicTools';

export const AIDatingProfiles: React.FC = () => {
  return (
    <PageLayout
      title="AI Dating Profile Generation — Perfect Matches in Minutes"
      description="Generate compelling dating profiles with professional photos and optimized descriptions."
    >
      {/* Hero Section */}
      <section className="w-full py-[180px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 text-center border border-white/10">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                AI Dating Profile Generation
              </h1>
              <p className="text-xl md:text-2xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                Perfect Matches in Minutes
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Create compelling dating profiles with professional photos and optimized descriptions that attract quality matches.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Try Dating Profile Generator</a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Book a demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* How It Works */}
          <section className="py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">How It Works</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              From basic info to perfect profile in three simple steps
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  icon: Camera,
                  title: "Upload Photos",
                  description: "Upload 2-3 casual photos. Our AI will enhance and create professional variations."
                },
                {
                  step: "2", 
                  icon: Settings,
                  title: "Set Preferences",
                  description: "Choose your style, interests, and what you're looking for in a match."
                },
                {
                  step: "3",
                  icon: Heart,
                  title: "Get Perfect Profile",
                  description: "Receive optimized photos and descriptions proven to get more quality matches."
                }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 mb-6 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                    <item.icon className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-24 border-t border-gray-200">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "What photo quality do I need?",
                    answer: "Any decent smartphone photo works. We recommend well-lit, front-facing photos for best results. Our AI will enhance quality automatically."
                  },
                  {
                    question: "How many profile variations can I create?", 
                    answer: "Unlimited! Create as many variations as you need for different platforms or target audiences."
                  },
                  {
                    question: "Is my data secure and private?",
                    answer: "Absolutely. All photos and personal information are encrypted and never shared. You can delete your data anytime."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-purple-200 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-8">Still have questions? <a href="mailto:support@zencreator.pro" className="text-purple-600 hover:underline">Contact support →</a></p>
            </div>
          </section>

        </div>
      </div>

      {/* More Magic Tools */}
      <MoreMagicTools />
      
      {/* Final CTA */}
      <section className="w-full py-[150px] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 text-center border border-white/10">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to create profiles that get noticed?</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Try Dating Profile Generator</a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Book a demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
