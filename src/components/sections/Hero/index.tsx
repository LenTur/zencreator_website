import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative container mx-auto px-4 z-10 flex-grow flex items-center justify-center">
      <div 
        className="backdrop-blur-md rounded-2xl border border-white/10 w-full max-w-[1120px] px-8 py-16 md:px-12 md:py-24"
        style={{ background: "rgba(255, 255, 255, 0.05)" }}
      >
        <div className="flex flex-col items-center text-center text-white">
          {/* Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center text-sm font-medium text-black bg-white rounded-full px-4 py-1">
              Level up your content game
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Create, publish, and analyze
            <br />
            content in a single workspace.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl mb-12 max-w-2xl opacity-90">
            AI products and services for creators — from creators.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/20 backdrop-blur-sm px-8 h-[50px] text-lg rounded-xl"
            >
              Book a Demo
            </Button>
            <Button className="bg-black/80 hover:bg-black px-8 h-[50px] text-lg rounded-xl">
              Start Creating
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
