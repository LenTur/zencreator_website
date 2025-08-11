
import { useState } from 'react';

interface Module {
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

export const PlatformSnapshot = () => {
  const [activeModule, setActiveModule] = useState<number>(0);

  const modules: Module[] = [
    {
      title: "Creator Hub",
      description: "Face generation, photo-shoots, upscaling, video & more—batch-ready.",
      features: [
        {
          title: "Specialised tools",
          description: "Face Gen, Photo-Shoot, Prompt & Reference Generators, Face Swap, 4-mode Upscale, Video, Carousel, Dating-Profile Builder."
        },
        {
          title: "Batch Mode Everywhere",
          description: "Spin up 1 or 10 000 assets; GPU clusters auto-scale."
        },
        {
          title: "One-Click Pipelines",
          description: "Push any output to Upscale → Swap → Publish without downloads."
        },
        {
          title: "Identity Lock",
          description: "Keep the same face, outfit or product across angles and media."
        }
      ],
      buttonText: "Explore Creator Hub →",
      buttonLink: "/products/zencreator/content-creation",
      visual: "/CreatorHub.png"
    },
    {
      title: "Publishing Hub",
      description: "Official APIs for Instagram, Threads, X, Facebook, TikTok & YouTube Shorts with Smart Publish windows.",
      features: [
        {
          title: "Official APIs",
          description: "Meta Tech-Partner for IG/FB/Threads + X OAuth + YouTube Data + TikTok Content."
        },
        {
          title: "Smart Publish",
          description: "Define posting windows; AI fills captions, hashtags, music & CTAs."
        },
        {
          title: "Unified Calendar",
          description: "Drag-and-drop across six networks; colour-coded status."
        },
        {
          title: "Compliance Guardrails",
          description: "Dimensions, text density, copyright and policy checks before posting."
        }
      ],
      buttonText: "See Publishing Hub →",
      buttonLink: "/products/zencreator/publishing",
      visual: "/PublishingHub.png"
    },
    {
      title: "Account Management",
      description: "Centralised profiles, token health, KPI goals per creator.",
      features: [
        {
          title: "Centralised Profiles",
          description: "Store face, bio, style refs, token status and full media gallery."
        },
        {
          title: "Role-Based KPIs",
          description: "Set daily/weekly goals per creator and monitor hit/miss."
        },
        {
          title: "Category Tags",
          description: "Group 1 or 100 creators (e.g., Fitness, Fashion) for bulk actions & analytics."
        },
        {
          title: "Token Health Alerts",
          description: "Slack/email ping when a network needs re-auth; one-click refresh."
        }
      ],
      buttonText: "Manage Accounts →",
      buttonLink: "/products/zencreator/accounts",
      visual: "/AccountManagement.png"
    },
    {
      title: "Analytics & Insights",
      description: "Drill from post-level to fleet-level metrics; AI highlights next steps.",
      features: [
        {
          title: "Zoom In / Zoom Out",
          description: "Post-level drill-downs or portfolio roll-ups across hundreds of models."
        },
        {
          title: "AI Recommendations",
          description: "Best posting windows, hook lines, under-served formats surfaced daily."
        },
        {
          title: "Export & Share",
          description: "CSV, PDF or live link; schedule auto-reports for stakeholders."
        },
        {
          title: "Attribution Ready",
          description: "GA4, Meta Pixel, TikTok Pixel & Shopify connectors tie posts to revenue."
        }
      ],
      buttonText: "Open Analytics →",
      buttonLink: "/products/zencreator/analytics",
      visual: "/Analytics & Insights.png"
    }
  ];

  return (
    <div className="w-full bg-ink-900 py-[150px]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Platform Snapshot
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Every module is powerful alone; together they form a closed growth loop.
          </p>
        </div>

        {/* Interactive Tabs with Horizontal Arrows */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 mb-12">
          {/* Creator Hub Tab */}
          <button
            onClick={() => setActiveModule(0)}
            className={`w-full lg:w-48 p-4 text-center rounded-2xl transition-all duration-300 font-medium ${
              activeModule === 0
                ? 'bg-purple-600/20 border border-purple-400/30 text-white'
                : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            Creator Hub
          </button>

          {/* Arrow 1 */}
          <div className="hidden lg:flex items-center">
            <div className="flex flex-col items-center">
              <div className="text-white text-lg">→</div>
              <div className="text-white/60 text-xs mt-1 text-center">push with metadata</div>
            </div>
          </div>

          {/* Publishing Hub Tab */}
          <button
            onClick={() => setActiveModule(1)}
            className={`w-full lg:w-48 p-4 text-center rounded-2xl transition-all duration-300 font-medium ${
              activeModule === 1
                ? 'bg-purple-600/20 border border-purple-400/30 text-white'
                : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            Publishing Hub
          </button>

          {/* Arrow 2 */}
          <div className="hidden lg:flex items-center">
            <div className="flex flex-col items-center">
              <div className="text-white text-lg">→</div>
              <div className="text-white/60 text-xs mt-1 text-center">auto-logs</div>
            </div>
          </div>

          {/* Analytics Tab */}
          <button
            onClick={() => setActiveModule(3)}
            className={`w-full lg:w-48 p-4 text-center rounded-2xl transition-all duration-300 font-medium ${
              activeModule === 3
                ? 'bg-purple-600/20 border border-purple-400/30 text-white'
                : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            Analytics & Insights
          </button>

          {/* Arrow 3 (back) */}
          <div className="hidden lg:flex items-center">
            <div className="flex flex-col items-center">
              <div className="text-white text-lg">←</div>
              <div className="text-white/60 text-xs mt-1 text-center">KPI feedback</div>
            </div>
          </div>

          {/* Account Management Tab */}
          <button
            onClick={() => setActiveModule(2)}
            className={`w-full lg:w-48 p-4 text-center rounded-2xl transition-all duration-300 font-medium ${
              activeModule === 2
                ? 'bg-purple-600/20 border border-purple-400/30 text-white'
                : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            Account Management
          </button>
        </div>

        {/* Active Module Header */}
        <div className="text-center mb-12">
          {/* Active Module Description - above title */}
          <div className="text-sm text-white/60 mb-2">
            {activeModule === 0 && "🎨 Image · Video · Face · Profile · Upscale"}
            {activeModule === 1 && "🚀 Now · Schedule · Smart Publish"}
            {activeModule === 2 && "👥 Tokens · Goals · Galleries"}
            {activeModule === 3 && "📊 Post → Model → Network → Portfolio"}
          </div>
          
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            {modules[activeModule].title}
          </h3>
          <p className="text-xl text-white/80">
            {modules[activeModule].description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Content - Features */}
          <div className="lg:col-span-2">
            <div className="space-y-6 mb-8">
              {modules[activeModule].features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </div>
                    <div className="text-white/80 leading-relaxed">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href={modules[activeModule].buttonLink} 
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-200 inline-block"
            >
              {modules[activeModule].buttonText}
            </a>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <div className="w-full max-w-lg">
              <img 
                src={modules[activeModule].visual}
                alt={`${modules[activeModule].title} Interface`}
                className="w-full h-auto rounded-2xl min-h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
