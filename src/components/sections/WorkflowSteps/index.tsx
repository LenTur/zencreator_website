import { Upload, Settings, Rocket } from 'lucide-react';

export const WorkflowSteps = () => {
  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-purple-600" />,
      title: 'Import or Create',
      description: 'Drag-and-drop an existing workflow or build in the visual editor.'
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: 'Select Hardware',
      description: 'Pick L4, A100 80 GB, H100 or let Auto-GPU choose.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
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
          
          {/* 3 Cards in 1 Row */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group p-8 text-center">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300 mx-auto mb-6">
                  {step.icon}
                </div>
                
                {/* Step Number */}
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm mx-auto mb-4">
                  {index + 1}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
