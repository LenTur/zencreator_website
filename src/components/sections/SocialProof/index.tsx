export const SocialProof = () => {
  const stats = [
    {
      number: "1 000+",
      description: "QC-approved assets/day"
    },
    {
      number: "240K+", 
      description: "dating images/year"
    },
    {
      number: "98%",
      description: "first-pass QA"
    },
    {
      number: "10K+",
      description: "campaigns delivered"
    }
  ];

  return (
    <section className="py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Social Proof
            </h2>
          </div>
          
          {/* Standard spacing before cards */}
          <div className="mt-16">
            {/* 4 Light Cards in One Line - Full Width */}
            <div className="grid grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="aspect-[4/3] bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-6 group hover:scale-105 border border-gray-200">
                  <div className="text-2xl md:text-3xl font-black text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-center leading-relaxed font-medium text-sm">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Subtitle under cards */}
            <div className="text-center mt-12">
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Trusted by growth teams in SaaS, e-commerce, gaming and agencies on{' '}
                <span style={{ fontWeight: '700', color: '#0F172A' }}>five continents</span>.
              </p>
            </div>
            
            {/* Photo Gallery in One Row - Like Hero Gallery */}
            <div className="mt-16 overflow-hidden w-full">
              <div className="flex space-x-8 justify-center">
                <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                  <img src="/Colorfull1.png" alt="Gallery 1" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                  <img src="/Colorfull2.png" alt="Gallery 2" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                  <img src="/colorfull3.png" alt="Gallery 3" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                  <img src="/DatingProfiles.png" alt="Gallery 4" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                  <img src="/Speed.png" alt="Gallery 5" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="w-48 h-64 bg-gray-100 rounded-xl flex items-center justify-center">
                  <img src="/Consistency.png" alt="Gallery 6" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
