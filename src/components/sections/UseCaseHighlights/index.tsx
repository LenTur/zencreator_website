export const UseCaseHighlights = () => {
  return (
    <section className="py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 md:mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-700 text-sm font-bold mb-4 px-4 py-1.5 rounded-full">
              use cases
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Use-Case Highlights
            </h2>
          </div>
          
          {/* Use Cases */}
          <div className="space-y-8 max-w-4xl mx-auto">
            
            {/* Use Case 1 */}
            <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 style={{
                  color: '#0F172A',
                  fontSize: '18px',
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  marginBottom: '8px'
                }}>
                  Dating-App Launch
                </h3>
                <p style={{
                  color: '#6B7280',
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  lineHeight: '1.5'
                }}>
                  5 000 exclusive profiles generated & published in &lt; 48 h.
                </p>
              </div>
            </div>
            
            {/* Use Case 2 */}
            <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 style={{
                  color: '#0F172A',
                  fontSize: '18px',
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  marginBottom: '8px'
                }}>
                  E-Com Lookbook
                </h3>
                <p style={{
                  color: '#6B7280',
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  lineHeight: '1.5'
                }}>
                  300 photo-shoot images → Upscale → IG & Twitter (X) rollout in one afternoon.
                </p>
              </div>
            </div>
            
            {/* Use Case 3 */}
            <div className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 style={{
                  color: '#0F172A',
                  fontSize: '18px',
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  marginBottom: '8px'
                }}>
                  Virtual-Influencer Studio
                </h3>
                <p style={{
                  color: '#6B7280',
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  lineHeight: '1.5'
                }}>
                  120 AI models, 6 networks, 30 K scheduled posts/month—managed by a three-person team.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
