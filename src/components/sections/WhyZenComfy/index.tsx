import { Cloud, Zap, Lock, Users } from 'lucide-react';

export const WhyZenComfy = () => {
  const benefits = [
    {
      icon: <Cloud className="w-6 h-6 text-purple-600" />,
      title: "One-click deployment",
      description: "No Docker, no drivers—upload .json, press Run."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "Serverless GPUs",
      description: "Pay only while a job is active; zero idle fees."
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-600" />,
      title: "Zero-Retention Data Policy",
      description: "All generations wiped by default; optional private buckets."
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Team workspaces",
      description: "Centralised models, versioned workflows, role-based access."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Why ZenComfy?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Build, iterate, and deploy ComfyUI workflows with enterprise-grade infrastructure
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
