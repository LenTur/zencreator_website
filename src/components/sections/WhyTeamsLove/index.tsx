import React from 'react';

export interface WhyTeamsCard {
  title: string;
  description: string;
  imageSrc?: string; // optional front image
}

interface WhyTeamsLoveProps {
  title?: string;
  items: WhyTeamsCard[];
}

// Flip-card grid used across pages
export const WhyTeamsLove: React.FC<WhyTeamsLoveProps> = ({ title = 'Why Teams Love the Suite', items }) => {
  return (
    <section className="pt-[150px] pb-[180px] bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">{title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="group [perspective:1000px] h-full">
                <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] min-h-[220px]">
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-3xl border border-gray-200 bg-white shadow-lg flex flex-col items-center justify-center p-6 text-center"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {item.imageSrc ? (
                      <img src={item.imageSrc} alt="" className="w-16 h-16 object-contain mb-4" />
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 mb-4" />
                    )}
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg p-6 flex items-center justify-center text-center [transform:rotateY(180deg)]"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <p className="text-gray-700 text-sm leading-relaxed max-w-xs">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
