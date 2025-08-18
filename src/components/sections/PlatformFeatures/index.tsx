interface Feature {
  title: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  buttonText: string;
  buttonLink: string;
  visual: string;
}

export const PlatformFeatures = () => {
  const features: Feature[] = [
    {
      title: "ComfyUI in the Cloud",
      description: "Full ComfyUI desktop experience in the browser with auto-install any node or model.",
      features: [
        {
          title: "Browser-based ComfyUI",
          description: "Full desktop experience without local installation."
        },
        {
          title: "Auto-install nodes & models",
          description: "Pull from Civitai, Hugging Face at 25× local speed."
        },
        {
          title: "Dedicated GPU workspace",
          description: "Spin up L4, A100, H100 or let Auto-GPU choose."
        },
        {
          title: "Team collaboration",
          description: "Invite collaborators to shared workspaces."
        }
      ],
      buttonText: "Try ComfyUI Cloud →",
      buttonLink: "/products/zencomfy/comfyui-cloud",
      visual: "/images/zencomfy/ComfyUI in the Cloud2.png"
    },
    {
      title: "Workflow → Web App",
      description: "Wrap your graph in a custom UI, set queuing rules, share a URL.",
      features: [
        {
          title: "Custom UI builder",
          description: "Pick which parameters appear in the end-user interface."
        },
        {
          title: "Branded web apps",
          description: "Deploy workflows as client-friendly applications."
        },
        {
          title: "Queuing & scaling",
          description: "Handle 1 to 1000 parallel runs without queuing."
        },
        {
          title: "URL sharing",
          description: "Share workflows with simple web links."
        }
      ],
      buttonText: "Build Web Apps →",
      buttonLink: "/products/zencomfy/workflow-as-app",
      visual: "/WorkflowWebApp.png"
    }
  ];

  return (
    <div className="w-full bg-ink-900 py-[150px]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Two Ways to Ship
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            One unified platform for ComfyUI workflows and production apps.
          </p>
        </div>

        {/* Flow Schema with Equal Height Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 mb-16">
          {/* ComfyUI Cloud */}
          <div className="w-full lg:w-48 h-24 p-4 text-center rounded-2xl bg-purple-600/20 border border-purple-400/30 text-white flex items-center justify-center">
            <span className="font-medium">ComfyUI Cloud</span>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center">
            <div className="flex flex-col items-center">
              <div className="text-white text-lg">→</div>
              <div className="text-white/60 text-xs mt-1 text-center">deploy as</div>
            </div>
          </div>

          {/* Web App */}
          <div className="w-full lg:w-48 h-24 p-4 text-center rounded-2xl bg-purple-600/20 border border-purple-400/30 text-white flex items-center justify-center">
            <span className="font-medium">Web App</span>
          </div>
        </div>

        {/* All Features - Sequential Display */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10">
              {/* Feature Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-xl text-white/80">
                  {feature.description}
                </p>
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Left Content - Features */}
                <div className="lg:col-span-2">
                  <div className="space-y-6 mb-8">
                    {feature.features.map((featureItem, featureIndex) => (
                      <div key={featureIndex} className="flex gap-4 items-start">
                        <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <div className="text-lg font-bold text-white mb-2">
                            {featureItem.title}
                          </div>
                          <div className="text-white/80 leading-relaxed">
                            {featureItem.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={feature.buttonLink} 
                    className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-200 inline-block"
                  >
                    {feature.buttonText}
                  </a>
                </div>

                {/* Right Visual */}
                <div className="lg:col-span-3 flex items-center justify-center">
                  <div className="w-full max-w-lg">
                    <img 
                      src={feature.visual} 
                      alt={feature.title} 
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
