import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Eye } from "lucide-react";

export const MacbookAir = (): JSX.Element => {
  // Feature cards data
  const featureCards = [
    {
      title: "AI Dating Profiles",
      description: "One interface instead of multiple tools.",
      top: "top-[2470px]",
    },
    {
      title: "OnlyFans\nContent Factory",
      description: "One interface instead of multiple tools.",
      top: "top-[2963px]",
      multiline: true,
    },
    {
      title: "SVF / NSVF Characters",
      description: "One interface instead of multiple tools.",
      top: "top-[3456px]",
    },
    {
      title: "AutoPreQ",
      description: "One interface instead of multiple tools.",
      top: "top-[3949px]",
    },
    {
      title: "AI Content Factory",
      description: "One interface instead of multiple tools.",
      top: "top-[4442px]",
    },
  ];

  // Small feature boxes data
  const smallFeatures = Array(5).fill({
    className: "relative w-[193px] h-[171px] bg-[#020817] rounded-3xl",
  });

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full h-[6857px] relative">
        {/* Hero section */}
        <div className="h-[840px] top-0 absolute w-full left-0 bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 overflow-hidden">
          {/* Background image overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{
              backgroundImage: "url('/public/image xx13.png')"
            }}
          />
          
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.5px]" />
          
          {/* Navigation with glass effect */}
          <div className="relative z-10 flex justify-center pt-6">
            <nav className="backdrop-blur-sm rounded-2xl border border-white/15 mx-20 px-8 py-4 flex items-center justify-between w-full max-w-[1120px]" style={{background: 'rgba(255, 255, 255, 0.12)'}}>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <img 
                    src="/Frame 63 copy copy.svg" 
                    alt="Logo" 
                    className="h-8 w-auto"
                  />
                </div>
                <div className="hidden md:flex items-center space-x-6">
                  <a href="#" className="text-white/90 hover:text-white transition-colors">Industries</a>
                  <a href="#" className="text-white/90 hover:text-white transition-colors">Services</a>
                  <a href="#" className="text-white/90 hover:text-white transition-colors">AI Tools</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-white/90 hover:text-white transition-colors">Sign In</button>
                <Button className="bg-black/80 hover:bg-black text-white px-6 h-[50px] rounded-xl backdrop-blur-sm">
                  Start Creating
                </Button>
              </div>
            </nav>
          </div>
          
          {/* Hero content container */}
          <div className="relative z-10 flex items-center justify-center px-20" style={{marginTop: '60px'}}>
            <div className="backdrop-blur-sm rounded-3xl border border-white/15 p-12 max-w-[1120px] w-full text-center h-[600px] flex flex-col justify-center" style={{background: 'rgba(255, 255, 255, 0.12)'}}>
              {/* Badge */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center justify-center" style={{
                height: '20px',
                padding: '2px 10px',
                borderRadius: '10px',
                background: '#FFF'
                }}>
                  <span className="text-black text-sm font-medium">Level up your content game</span>
                </div>
              </div>
              
              {/* Main heading */}
              <h1 className="text-white text-5xl md:text-6xl font-black leading-tight mb-6">
                Create, publish, and analyze<br />
                content in a single workspace.
              </h1>
              
              {/* Subheading */}
              <p className="text-white/90 text-xl mb-12">
                One interface instead of multiple tools.
              </p>
              
              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  variant="outline" 
                  className="border-white/25 text-white hover:bg-white/15 backdrop-blur-sm px-8 h-[50px] text-lg rounded-xl"
                  style={{background: 'rgba(255, 255, 255, 0.12)'}}
                >
                  Book a Demo
                </Button>
                <Button className="bg-black/80 hover:bg-black text-white px-8 h-[50px] text-lg rounded-xl">
                  Start Creating
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        {featureCards.map((feature, index) => (
          <Card
            key={`feature-${index}`}
            className={`flex w-[1200px] h-[413px] items-center gap-20 px-20 py-0 absolute ${feature.top} left-1/2 transform -translate-x-1/2 bg-[#020817] rounded-xl overflow-hidden border-none`}
          >
            <CardContent className="flex flex-col w-[360px] items-start gap-3 relative p-0">
              <img
                className="relative h-5"
                alt="Component video"
                src="/component-2-video-generator-2.svg"
              />
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-black text-white text-[40px] tracking-[0] leading-[42.4px]">
                {feature.multiline
                  ? feature.title.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < feature.title.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))
                  : feature.title}
              </div>
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[28.8px] whitespace-nowrap">
                {feature.description}
              </div>
            </CardContent>
            <div className="relative flex-1 self-stretch grow h-[297px] rounded-xl shadow-[0px_0px_0px_0.5px_#0000000d,0px_0.99px_1.99px_-0.5px_#0000000f,0px_1.99px_2.98px_-0.5px_#0000001a] bg-[linear-gradient(180deg,rgba(216,180,254,1)_0%,rgba(180,87,224,1)_100%)]" />
          </Card>
        ))}

        {/* Bottom section with CTA */}
        <div className="h-[1299px] top-[5558px] absolute w-full left-0 flex flex-col items-center">
          <img
            className="absolute w-[1280px] h-[583px] top-[716px] left-1/2 transform -translate-x-1/2"
            alt="Container"
            src="/container-1.svg"
          />
          <img
            className="absolute w-[1280px] h-[360px] top-[402px] left-1/2 transform -translate-x-1/2"
            alt="Group"
            src="/group-3.png"
          />
          <Card className="flex flex-col w-[1181px] h-[507px] items-center justify-center gap-[29px] absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#020817] rounded-xl overflow-hidden border-none">
            <CardContent className="flex flex-col items-center gap-3 p-0">
              <img
                className="relative h-5"
                alt="Component video"
                src="/component-2-video-generator.svg"
              />
              <div className="relative w-[727px] [font-family:'Inter',Helvetica] font-black text-white text-[40px] text-center tracking-[0] leading-[42.4px]">
                Create, publish, and analyze content in a single workspace.
              </div>
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[28.8px] whitespace-nowrap">
                One interface instead of multiple tools.
              </div>
            </CardContent>
            <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
              <Button
                variant="outline"
                className="w-[168px] h-[50px] text-white border-white rounded-xl"
              >
                <span className="[font-family:'Inter',Helvetica] font-normal text-lg text-center tracking-[0] leading-[19.1px] whitespace-nowrap">
                  Book a Demo
                </span>
              </Button>
              <Button className="w-[168px] h-[50px] bg-white text-[#020817] rounded-xl">
                <span className="[font-family:'Inter',Helvetica] font-normal text-lg text-center tracking-[0] leading-[19.1px] whitespace-nowrap">
                  Start Creating
                </span>
              </Button>
            </div>
          </Card>
        </div>

        <img
          className="absolute w-full h-[129px] top-[1500px] left-0 z-0"
          alt="Group"
          src="/group-4.png"
        />

        {/* First feature section */}
        <div className="flex flex-col w-[1220px] items-center gap-[29px] absolute top-[980px] left-1/2 transform -translate-x-1/2 relative z-10">
          <div className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto]">
            <img
              className="relative h-5"
              alt="Component video"
              src="/component-2-video-generator-1.svg"
            />
            <div className="relative w-[727px] [font-family:'Inter',Helvetica] font-black text-[#020817] text-[40px] text-center tracking-[0] leading-[42.4px]">
              The Power Behind Your Content
            </div>
            <div className="relative w-[800px] [font-family:'Inter',Helvetica] font-normal text-[#020817] text-xl tracking-[0] leading-[28.8px] text-center">
              Create high‑quality content faster, with full customization and consistent results.
            </div>
          </div>
          <div className="flex items-start gap-[46px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex p-[40px_20px] flex-col items-center gap-10 flex-1 rounded-[40px] bg-[#020817]">
              <div className="text-white font-black text-[40px] leading-[105.961%]">
                Speed
              </div>
              <div className="w-[344px] text-white text-center text-xl font-normal leading-[28.8px]">
                Generate 100+ photos and 10+ videos in just 48 hours.
              </div>
              <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl border-2 border-dashed border-gray-300 w-full">
                <div className="flex h-[297px] p-3 flex-col items-start gap-3 self-stretch rounded-lg overflow-hidden">
                  <img
                    src="/image.png"
                    alt="Speed demonstration"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
            <div className="flex p-[40px_20px] flex-col items-center gap-10 flex-1 rounded-[40px] bg-[#020817]">
              <div className="text-white font-black text-[40px] leading-[105.961%]">
                Consistency
              </div>
              <div className="w-[344px] text-white text-center text-xl font-normal leading-[28.8px]">
                One character — everything built for them, photos, bios, and videos.
              </div>
              <div className="flex h-[297px] p-3 flex-col items-start gap-3 self-stretch bg-gray-200 rounded-lg">
                <img
                  src="/Frame 36775.png"
                  alt="Consistency demonstration"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
            <div className="flex p-[40px_20px] flex-col items-center gap-10 flex-1 rounded-[40px] bg-[#020817]">
              <div className="text-white font-black text-[40px] leading-[105.961%]">
                Customization
              </div>
              <div className="w-[344px] text-white text-center text-xl font-normal leading-[28.8px]">
                Create unique faces, bios, locations, and styles for any purpose.
              </div>
              <div className="flex h-[297px] p-3 flex-col items-start gap-3 self-stretch bg-gray-200 rounded-lg">
                {/* Placeholder for image content */}
              </div>
            </div>
          </div>
        </div>

        {/* Second feature section with small boxes */}
        <div className="flex flex-col w-[1181px] items-center gap-[61px] absolute top-[1928px] left-1/2 transform -translate-x-1/2">
          <div className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto]">
            <img
              className="relative h-5"
              alt="Component video"
              src="/component-2-video-generator-1.svg"
            />
            <div className="relative w-[727px] [font-family:'Inter',Helvetica] font-black text-[#020817] text-[40px] text-center tracking-[0] leading-[42.4px]">
              Create, publish, and analyze content in a single workspace.
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#020817] text-xl tracking-[0] leading-[28.8px] whitespace-nowrap">
              One interface instead of multiple tools.
            </div>
          </div>
          <div className="flex items-center gap-[54px] relative self-stretch w-full flex-[0_0_auto]">
            {smallFeatures.map((feature, index) => (
              <div
                key={`small-feature-${index}`}
                className={feature.className}
              />
            ))}
          </div>
        </div>

        {/* Bottom cards row */}
        <div className="inline-flex items-center gap-[46px] absolute top-[5000px] left-1/2 transform -translate-x-1/2">
          <div className="relative w-[326px] h-[413px] bg-[#020817] rounded-xl" />
          <img
            className="relative w-[326px] h-[413px]"
            alt="Container"
            src="/container.svg"
          />
          <div className="relative w-[326px] h-[413px] bg-[#020817] rounded-xl" />
          <div className="relative w-[326px] h-[413px] bg-[#020817] rounded-xl" />
        </div>
      </div>
    </div>
  );
};