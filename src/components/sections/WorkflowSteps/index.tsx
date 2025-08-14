export const WorkflowSteps = () => {
  const steps = [
    {
      title: 'Import or Create',
      description: 'Drag-and-drop an existing workflow or build in the visual editor.'
    },
    {
      title: 'Select Hardware',
      description: 'Pick L4, A100 80 GB, H100 or let Auto-GPU choose.'
    },
    {
      title: 'Deploy',
      description: 'Run instantly or publish as a branded web app for clients.'
    }
  ];

  return (
    <section className="py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              From Workflow to Production in Three Steps
            </h2>
          </div>
          
          {/* Steps in Services Style */}
          <div className="flex flex-col gap-[60px]">
            {steps.map((step, index) => (
              <div key={index} className="p-12 md:p-16">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl">
                        {index + 1}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl p-8 min-h-80 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 w-full max-w-sm">
                        <div className="text-center">
                          <div className="bg-white rounded-lg p-4 mb-4">
                            <div className="text-gray-900 font-semibold">Step {index + 1}</div>
                            <div className="text-sm text-gray-600">{step.title}</div>
                          </div>
                          <div className="text-white font-medium">Process Preview</div>
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
