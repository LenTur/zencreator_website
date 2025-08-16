export const UseCaseHighlights = () => {
  const useCases = [
    {
      title: 'Dating-App Launch',
      description: '5 000 exclusive profiles generated & published in < 48 h.',
      reverse: false
    },
    {
      title: 'E-Com Lookbook', 
      description: '300 photo shoot images → Upscale → IG & Twitter (X) rollout in one afternoon.',
      reverse: true
    },
    {
      title: 'Virtual-Influencer Studio',
      description: '120 AI models, 6 networks, 30 K scheduled posts/month—managed by a three-person team.',
      reverse: false
    }
  ];

  return (
    <section className="py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Use-Case Highlights
            </h2>
          </div>
          
          {/* Use Cases in Services Style */}
          <div className="flex flex-col gap-[60px]">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-12 md:p-16">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${useCase.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={useCase.reverse ? 'lg:col-start-2' : ''}>
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">{useCase.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{useCase.description}</p>
                  </div>
                  
                  {/* Visual */}
                  <div className={useCase.reverse ? 'lg:col-start-1' : ''}>
                    <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl p-8 min-h-80 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 w-full max-w-sm">
                        <div className="text-center">
                          <div className="bg-white rounded-lg p-4 mb-4">
                            <div className="text-gray-900 font-semibold">{useCase.title}</div>
                            <div className="text-sm text-gray-600">Case Study Preview</div>
                          </div>
                          <div className="text-white font-medium">Success Story</div>
                        </div>
                      </div>
                    </div>
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
