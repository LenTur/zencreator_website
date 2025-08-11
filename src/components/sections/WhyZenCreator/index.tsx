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
  const [hoveredPair, setHoveredPair] = useState<number | null>(null);

  const painSolutions: PainSolution[] = [
    {
      id: 0,
      painIcon: <Link2 className="w-5 h-5 text-gray-500" />,
      painText: "Fractured tool chain adds hours of copy-paste",
      solutionIcon: <Zap className="w-5 h-5 text-white" />,
      solutionText: "generate, approve, publish and analyse in a single flow.",
      highlight: "One workspace"
    },
    {
      id: 1,
      painIcon: <Drama className="w-5 h-5 text-gray-500" />,
      painText: "Inconsistent brand look & feel across creators",
      solutionIcon: <Target className="w-5 h-5 text-white" />,
      solutionText: "keeps faces, tones and styles identical everywhere.",
      highlight: "Identity-locked AI"
    },
    {
      id: 2,
      painIcon: <Zap className="w-5 h-5 text-gray-500" />,
      painText: "API headaches & account bans",
      solutionIcon: <Lock className="w-5 h-5 text-white" />,
      solutionText: "(Meta, X, YouTube, TikTok) with token-health monitoring.",
      highlight: "Official integrations"
    },
    {
      id: 3,
      painIcon: <HelpCircle className="w-5 h-5 text-gray-500" />,
      painText: "No clear ROI storytelling",
      solutionIcon: <TrendingUp className="w-5 h-5 text-white" />,
      solutionText: "tie every post to reach, CTR, revenue and LTV.",
      highlight: "Cross-channel analytics"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Why ZenCreator?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform chaos into streamlined productivity with our unified platform
          </p>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left Column Header */}
            <div className="col-span-5">
              <div className="text-center mb-8">
                <div className="inline-block bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold text-lg">
                  🟣 Pain You Know
                </div>
              </div>
            </div>

            {/* Center Arrow Space */}
            <div className="col-span-2"></div>

            {/* Right Column Header */}
            <div className="col-span-5">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-purple-400 to-blue-400 text-white px-6 py-3 rounded-xl font-bold text-lg">
                  🟢 How ZenCreator Fixes It
                </div>
              </div>
            </div>

            {/* Interactive Pairs */}
            {painSolutions.map((pair) => (
              <div key={pair.id} className="col-span-12 grid grid-cols-12 gap-8 items-center mb-6">
                {/* Pain Card */}
                <div className="col-span-5">
                  <div
                    className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 border shadow-sm transition-all duration-300 cursor-pointer ${
                      hoveredPair === pair.id 
                        ? 'border-gray-300 shadow-lg bg-gray-50 scale-[1.02]' 
                        : 'border-gray-200'
                    }`}
                    onMouseEnter={() => setHoveredPair(pair.id)}
                    onMouseLeave={() => setHoveredPair(null)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        {pair.painIcon}
                        {/* Flying Icon Animation */}
                        {hoveredPair === pair.id && (
                          <div className="absolute animate-ping">
                            <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center opacity-75">
                              {pair.painIcon}
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed">
                        {pair.painText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Animated Arrow */}
                <div className="col-span-2 flex justify-center">
                  <div className={`transition-all duration-300 ${
                    hoveredPair === pair.id 
                      ? 'scale-125 text-purple-600' 
                      : 'text-gray-400'
                  }`}>
                    <ArrowRight className="w-8 h-8" />
                  </div>
                </div>

                {/* Solution Card */}
                <div className="col-span-5">
                  <div
                    className={`bg-gradient-to-r from-purple-400 to-blue-500 rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                      hoveredPair === pair.id 
                        ? 'shadow-xl scale-105' 
                        : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        {pair.solutionIcon}
                      </div>
                      <p className="text-white font-medium leading-relaxed">
                        <span className="font-bold">{pair.highlight}</span> — {pair.solutionText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Stacked Pairs */}
        <div className="lg:hidden space-y-8">
          {painSolutions.map((pair) => (
            <div key={pair.id} className="space-y-4">
              {/* Pain Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    {pair.painIcon}
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {pair.painText}
                  </p>
                </div>
              </div>

              {/* Down Arrow */}
              <div className="flex justify-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <ArrowDown className="w-5 h-5 text-purple-600" />
                </div>
              </div>

              {/* Solution Card */}
              <div className="bg-gradient-to-r from-purple-400 to-blue-500 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    {pair.solutionIcon}
                  </div>
                  <p className="text-white font-medium leading-relaxed">
                    <span className="font-bold">{pair.highlight}</span> — {pair.solutionText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
