export const FAQ = () => {
  return (
    <section className="py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Ready to see ZenCreator in action?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-10 md:mb-12 leading-relaxed">
              Book a live walk-through or start a free workspace and publish your first Smart-Scheduled post today.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors">
                Start Free
              </button>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors">
                Book Demo
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
