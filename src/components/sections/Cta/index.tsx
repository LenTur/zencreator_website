import { Button } from "@/components/ui/button";

export const Cta = () => {
  return (
    <section className="bg-[#0F172A] text-white relative">
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block bg-purple-600/20 text-purple-300 text-sm font-bold mb-6 px-4 py-1.5 rounded-full">
            Level up your content game
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-12">
            Your AI-powered creative journey
            <br />
            starts here.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white/10 backdrop-blur-sm px-8 h-[50px] text-lg rounded-xl"
            >
              Book a Demo
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 h-[50px] text-lg rounded-xl">
              Start Creating
            </Button>
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
