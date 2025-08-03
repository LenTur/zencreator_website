import React from 'react';
import * as LucideIcons from 'lucide-react';

interface Industry {
  name: string;
  description: string;
  icon: keyof typeof LucideIcons;
}

interface IndustriesProps {
  industries: Industry[];
}

const IndustryCard = ({ industry }: { industry: Industry }) => {
  const Icon = LucideIcons[industry.icon] as React.ElementType;

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#0F172A] text-white rounded-3xl">
      <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-2xl bg-white/5 flex-shrink-0">
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
      </div>
      <div className="text-center">
        <p className="text-base sm:text-lg font-bold">{industry.name}</p>
        <p className="text-xs sm:text-sm text-white/60 mt-2">{industry.description}</p>
      </div>
    </div>
  );
};

export const Industries = ({ industries }: IndustriesProps) => {
  return (
    <section className="bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-700 text-sm font-bold mb-4 px-4 py-1.5 rounded-full">
            Industries
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            For Creators Across All Fields
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Powerful tools adapted to the needs of your industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {industries.map((industry) => (
            <IndustryCard key={industry.name} industry={industry} />
          ))}
        </div>

      </div>
      <img
        className="absolute bottom-[-90px] left-0 w-full h-auto z-0"
        alt="Decorative separator"
        src="/Colorfull1.png"
      />
    </section>
  );
};
