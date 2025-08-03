import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className="relative z-10 flex justify-center pt-6">
      <nav
        className="backdrop-blur-md rounded-2xl border border-white/10 mx-auto px-8 py-3 flex items-center justify-between w-full max-w-[1120px]"
        style={{ background: "rgba(255, 255, 255, 0.05)" }}
      >
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2 text-white text-2xl font-bold">
            <img src="/Logo.svg" alt="ZenCreator Logo" className="h-8 w-auto" />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Industries
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              AI Tools
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white/80 hover:text-white transition-colors px-4 py-2">
            Sign In
          </button>
          <Button className="bg-black/80 hover:bg-black text-white px-6 h-[40px] rounded-lg backdrop-blur-sm">
            Start Creating
          </Button>
        </div>
      </nav>
    </div>
  );
};
