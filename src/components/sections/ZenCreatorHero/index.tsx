import { Button } from "@/components/ui/button";

export const ZenCreatorHero = () => {
  return (
    <section className="pt-24 pb-[40px] text-center">
      {/* Title - ZenCreator */}
      <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
        ZenCreator
      </h1>
      
      {/* Main Heading - 3 sizes smaller than ZenCreator */}
      <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 leading-tight">
        The only platform that lets growth teams<br />
        <span style={{background: 'linear-gradient(141deg, #D8B4FE -1.09%, #5A17CE 108.36%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>create, publish, manage, and measure</span><br />
        at enterprise scale
      </h2>
      
      <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
        Without piecing together six different apps.
      </p>
      
      <div className="flex flex-wrap gap-6 justify-center">
        <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl">
          Sign Up and Try
        </a>
        <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 hover:border-purple-400 hover:text-purple-900 transition-all duration-200">
          Book a Demo
        </a>
      </div>
    </section>
  );
};
