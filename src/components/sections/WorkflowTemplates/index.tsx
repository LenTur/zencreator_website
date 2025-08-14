import { Film, Image, ArrowUp, Palette } from 'lucide-react';

export const WorkflowTemplates = () => {
  const templates = [
    {
      icon: <Film className="w-6 h-6 text-purple-600" />,
      title: 'Image → Video',
      description: 'Transform static images into dynamic videos with advanced AI animation.',
      tools: 'AnimateDiff • IPAdapter • ControlNet'
    },
    {
      icon: <Film className="w-6 h-6 text-purple-600" />,
      title: 'Text → Video', 
      description: 'Generate videos directly from text prompts with smooth transitions.',
      tools: 'AnimateDiff • Prompt Travel'
    },
    {
      icon: <ArrowUp className="w-6 h-6 text-purple-600" />,
      title: 'Upscaling',
      description: 'Enhance image quality and resolution with state-of-the-art AI.',
      tools: 'Hires-Fix • UltraSharp • SUPIR • CCSR • APISR'
    },
    {
      icon: <Palette className="w-6 h-6 text-purple-600" />,
      title: 'Style Transfer',
      description: 'Apply artistic styles and lighting effects to any image.',
      tools: 'IPAdapter • IC-Light'
    }
  ];

  return (
    <section className="py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Ready-to-Use Workflow Templates
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Production-ready workflows that work out of the box
            </p>
          </div>
          
          {/* Template Grid - Advanced Styling */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {templates.map((template, index) => (
              <div key={index} className="relative group">
                {/* Background gradient that changes on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                
                {/* Main card */}
                <div className="relative flex items-start gap-6 p-8 bg-white/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50">
                  {/* Animated icon container */}
                  <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 group-hover:from-purple-200 group-hover:to-indigo-200 transition-all duration-500 flex-shrink-0 group-hover:rotate-3 group-hover:scale-110">
                    {/* Glow effect behind icon */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                      {template.icon}
                    </div>
                  </div>
                  
                  {/* Text Content Block with enhanced styling */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 group-hover:translate-x-1">
                      {template.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {template.description}
                    </p>
                    
                    {/* Tools with enhanced styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:to-indigo-700 transition-all duration-300 p-2">
                        {template.tools}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional info with advanced styling */}
          <div className="text-center">
            <div className="relative group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-indigo-600/10 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
              
              {/* Main info card */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100/50 backdrop-blur-sm rounded-3xl p-10 border border-gray-200/50 shadow-lg group-hover:shadow-xl transition-all duration-500">
                <div className="space-y-4">
                  <div className="relative">
                    <h4 className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      More Coming
                    </h4>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <p className="text-gray-600 text-lg">Custom recipes & community contributions</p>
                  
                  <div className="relative mt-6 p-4 bg-white/60 rounded-2xl border border-purple-200/30">
                    <p className="text-purple-700 font-bold text-lg">
                      Zero downloads. Zero config. Just click{' '}
                      <span className="relative">
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-black">
                          Deploy
                        </span>
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-50"></div>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
