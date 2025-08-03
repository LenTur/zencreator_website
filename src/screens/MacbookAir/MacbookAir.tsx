import { Cta } from "@/components/sections/Cta";
import { Services } from "@/components/sections/Services";
import { Hero } from "@/components/sections/Hero";
import { Header } from "@/components/layout/Header";
import React from "react";
import { PowerBehind } from "@/components/sections/PowerBehind";
import { Industries } from "@/components/sections/Industries";
import { FinalFooter } from "@/components/layout/FinalFooter";
import { Gallery } from "@/components/sections/Gallery";

export const MacbookAir = (): JSX.Element => {
  // Data for the Industries section
  const industries = [
    { name: 'Dating', description: 'Content for profiles, stories, AI avatars.', icon: 'Heart' },
    { name: 'OnlyFans / NSFW', description: 'Premium content, private sets, pay-per-view.', icon: 'Camera' },
    { name: 'Marketing Agencies', description: 'Custom mascots, ad visuals.', icon: 'Target' },
    { name: 'E-commerce / Brands', description: 'Content for products, campaigns.', icon: 'ShoppingCart' },
    { name: 'Gaming', description: 'Characters, virtual influencers.', icon: 'Gamepad2' },
    { name: 'Beauty & Fashion', description: 'Models, looks, campaigns.', icon: 'Shirt' },
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
        <div className="relative w-full bg-cover bg-center flex flex-col min-h-screen" style={{ backgroundImage: "url('/HeroBG.png')" }}>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
          <Header />
          <Hero />
        </div>

        <div className="flex flex-col">
          <div className="mt-[150px]">
            <PowerBehind />
          </div>
          <div className="mt-[150px]">
            <Industries industries={industries} />
          </div>
          <div className="mt-[150px]">
            <Services services={services} />
          </div>
          <div className="mt-[150px]">
            <Gallery />
          </div>
          <div className="mt-[105px]">
            <Cta />
          </div>
          {/* This wrapper provides the dark background for the spacing */}
          <div className="bg-[#0F172A] pt-[250px]">
            <FinalFooter />
          </div>
        </div>
      </main>
    </div>
  );
};
