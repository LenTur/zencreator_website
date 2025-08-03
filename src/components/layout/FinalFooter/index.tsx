import { cn } from "@/lib/utils";

interface FinalFooterProps {
    className?: string;
}

export const FinalFooter = ({ className }: FinalFooterProps) => {
  return (
    <footer className={cn("bg-[#0F172A] text-white", className)}>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <a href="#" className="flex items-center space-x-2 text-white text-2xl font-bold">
              <img src="/Logo.svg" alt="ZenCreator Logo" className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Industries</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Services</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">AI Tools</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Sign In</a>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} ZenCreator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
