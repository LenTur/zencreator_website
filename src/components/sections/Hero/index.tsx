import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="pt-24 pb-[40px] text-center">
      <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
        The only platform that lets growth teams <span style={{background: 'linear-gradient(141deg, #D8B4FE -1.09%, #5A17CE 108.36%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>create, publish, manage, and measure</span> at enterprise scale
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
        Without piecing together six different apps.
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        <Link to="/products/zencreator" className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl">
          Sign Up and Try
        </Link>
        <Link to="/about-us#book-call" className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 hover:border-purple-400 hover:text-purple-900 transition-all duration-200">
          Book a Demo
        </Link>
      </div>
    </section>
  );
};
