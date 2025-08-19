import { Button } from "@/components/ui/button";

export const Cta = () => {
  return (
    <section className="bg-[#0F172A] text-white relative">
      <div className="container mx-auto px-4 pt-24 md:pt-28 pb-14">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block bg-purple-600/20 text-purple-300 text-sm font-bold mb-6 px-4 py-1.5 rounded-full">
            Level up your content game
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ready to see ZenCreator in action?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Book a live walk-through or start a free workspace and publish your first Smart-Scheduled post today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-white/50 bg-transparent text-white hover:bg-white/10 backdrop-blur-sm px-8 h-[50px] text-lg rounded-xl"
              >
                Book a Demo
              </Button>
            </a>
            <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 h-[50px] text-lg rounded-xl">
                Start Free
              </Button>
            </a>

          </div>
        </div>
      </div>
      <div className="w-full">
        <img
            className="w-full h-auto relative -right-10"
            alt="Decorative separator"
            src="/colorfull3.png"
        />
      </div>
    </section>
  );
};
