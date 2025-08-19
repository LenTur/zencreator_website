import { useState } from 'react';
import { ArrowRight, Link2, Drama, Zap, HelpCircle, Target, Lock, TrendingUp, ArrowDown } from 'lucide-react';

interface PainSolution {
  id: number;
  painIcon: React.ReactNode;
  painText: string;
  solutionIcon: React.ReactNode;
  solutionText: string;
  highlight: string;
}

export const WhyZenCreator = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "One workspace",
      description: "Generate, approve, publish and analyse in a single flow."
    },
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      title: "Identity-locked AI",
      description: "Keeps faces, tones and styles identical everywhere."
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-600" />,
      title: "Official integrations",
      description: "Meta (Facebook, Instagram, Threads), X, YouTube, TikTok with token-health monitoring."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      title: "Cross-channel analytics",
      description: "Tie every post to reach, CTR, revenue and LTV."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Why ZenCreator?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Transform chaos into streamlined productivity with our unified platform
          </p>
        </div>

        {/* Full Width Grid - 2 cards per row */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-6 p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Icon with light background */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300 flex-shrink-0">
                {benefit.icon}
              </div>
              
              {/* Text Content Block */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
