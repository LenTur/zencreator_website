import { Cta } from "@/components/sections/Cta";
import { ZenCreatorHero } from "@/components/sections/ZenCreatorHero";
import { SharedSuperpowers, Superpower } from "@/components/sections/Industries";
import { FinalFooter } from "@/components/layout/FinalFooter";
import { WhyZenCreator } from "@/components/sections/WhyZenCreator";
import { PlatformSnapshot } from "@/components/sections/PlatformSnapshot";

import { SocialProof } from "@/components/sections/SocialProof";
import { UseCaseHighlights } from "@/components/sections/UseCaseHighlights";
import { FAQAccordion } from "@/components/sections/FAQAccordion";




export const MacbookAir = (): JSX.Element => {
  // Data for the Shared Superpowers section
  const superpowers: Superpower[] = [
    { name: 'Smart Formatting', description: 'Auto-crop, bitrate & size checks—zero manual tweaks.', icon: 'Zap' },
    { name: 'Human-in-Loop QA', description: 'Optional moderators ensure 99% artefact-free assets.', icon: 'UserCheck' },
    { name: 'Unified Credits', description: 'One pay-as-you-go balance for generating, editing, publishing.', icon: 'CreditCard' },
    { name: 'SOC-2 Infrastructure', description: 'Encrypted tokens, VPC option, audit logs.', icon: 'Shield' },
    { name: 'Rapid Roadmap', description: 'New content tools & network APIs ship every month—no extra cost.', icon: 'Rocket' },
  ];

  // Data for the Services section
  const services = [
    {
      title: "AI Dating Profiles",
      description: "Photos, videos, bios for dating (SFW/NSFW, with or without bio).",
      image: "/DatingProfiles.png" // Added image path
    },
    {
      title: "SVF Profiles",
      description: "Virtual characters (SFW)."
    },
    {
      title: "OnlyFans Content Factory",
      description: "Generation of private photo and video content."
    },
    {
      title: "AutoPreQ",
      description: "Multi-language voiceover, subtitles, lip sync, AI scripts."
    },
    {
      title: "AI Content Factory",
      description: "Scalable photo and video production."
    },
    {
      title: "Reels Factory",
      description: "Scalable video production, from idea to video."
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center w-full">
      <main className="w-full">
        
        <div className="container mx-auto px-4 pb-20" style={{ paddingTop: '140px' }}>
          <div className="max-w-6xl mx-auto">
            <ZenCreatorHero />
          </div>
        </div>

        {/* Platform Interface Screenshot */}
        <div className="container mx-auto px-4" style={{ paddingTop: '0px' }}>
          <div className="max-w-6xl mx-auto">
            <img 
              src="/platform-interface.png" 
              alt="ZenCreator Platform Interface" 
              className="w-full h-auto rounded-3xl border border-gray-200"
              style={{
                boxShadow: '0 25px 50px -12px rgba(147, 51, 234, 0.25), 0 25px 50px -12px rgba(168, 85, 247, 0.15)'
              }}
            />
          </div>
        </div>

        <div className="flex flex-col">
          {/* New structure */}
          <div className="mt-[150px]">
            <WhyZenCreator />
          </div>
          <div className="mt-[150px]">
            <PlatformSnapshot />
          </div>

          <div className="mt-[150px]">
            <SharedSuperpowers superpowers={superpowers} />
          </div>
          <div className="mt-[150px]">
            <SocialProof />
          </div>
          <div className="mt-[75px]">
            <UseCaseHighlights />
          </div>
          <div className="mt-[150px]">
            <FAQAccordion />
          </div>
          <div className="mt-[0px]">
            <Cta />
          </div>
          
          {/* Old sections below — temporarily hidden */}
          {/* <div className="mt-[150px]">
            <PowerBehind />
          </div>
          <div className="mt-[150px]">
            <Services services={services} />
          </div>
          <div className="mt-[150px]">
            <Gallery />
          </div> */}
          
          {/* Footer comes from PageLayout */}
        </div>
      </main>
    </div>
  );
};
