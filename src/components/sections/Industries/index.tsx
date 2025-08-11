import React from 'react';
import * as LucideIcons from 'lucide-react';

export interface Superpower {
  name: string;
  description: string;
  icon: keyof typeof LucideIcons;
}

interface SharedSuperpowersProps {
  superpowers: Superpower[];
}

const SuperpowerCard = ({ superpower }: { superpower: Superpower }) => {
  const Icon = LucideIcons[superpower.icon] as React.ElementType;

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#0F172A] text-white rounded-3xl">
      <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-2xl bg-white/5 flex-shrink-0">
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
      </div>
      <div className="text-center">
        <p className="text-base sm:text-lg font-bold">{superpower.name}</p>
        <p className="text-xs sm:text-sm text-white/60 mt-2">{superpower.description}</p>
      </div>
    </div>
  );
};

export const SharedSuperpowers = ({ superpowers }: SharedSuperpowersProps) => {
  return (
    <section className="bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-block bg-purple-100 text-purple-700 text-sm font-bold mb-4 px-4 py-1.5 rounded-full">
            superpowers
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Shared Superpowers
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-10 md:mb-12">
            Built-in capabilities that enhance every workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {superpowers.map((superpower) => (
            <SuperpowerCard key={superpower.name} superpower={superpower} />
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
