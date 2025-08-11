export const PowerBehind = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-block bg-purple-100 text-purple-700 text-sm font-bold mb-4 px-4 py-1.5 rounded-full">
            advantages
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Create, publish, and analyze
            <br />
            content in a single workspace.
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-10 md:mb-12">
            One interface instead of seven tools.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Speed Card */}
          <div className="flex flex-col p-8 bg-[#0F172A] text-white rounded-3xl">
            <h3 className="text-4xl font-bold mb-4">Speed</h3>
            <p className="text-lg mb-6 flex-grow">
              Generate 100+ photos and 10+ videos in just 48 hours.
            </p>
            <div className="w-full rounded-xl overflow-hidden">
              <img
                src="/Speed.png"
                alt="Speed demonstration"
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* Consistency Card */}
          <div className="flex flex-col p-8 bg-[#0F172A] text-white rounded-3xl">
            <h3 className="text-4xl font-bold mb-4">Consistency</h3>
            <p className="text-lg mb-6 flex-grow">
              One character — everything built for them, photos, bios, and videos.
            </p>
            <div className="w-full rounded-xl overflow-hidden">
              <img
                src="/Consistency.png"
                alt="Consistency demonstration"
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* Customization Card */}
          <div className="flex flex-col p-8 bg-[#0F172A] text-white rounded-3xl">
            <h3 className="text-4xl font-bold mb-4">Customization</h3>
            <p className="text-lg mb-6 flex-grow">
              Create unique faces, bios, locations, and styles for any purpose.
            </p>
            <div className="w-full rounded-xl overflow-hidden">
              <img
                src="/Customization.png"
                alt="Customization demonstration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
