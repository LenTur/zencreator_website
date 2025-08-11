export const SocialProof = () => {
  return (
    <section className="py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 md:mb-16">
            <div className="inline-block bg-pink-100 text-pink-700 text-sm font-bold mb-4 px-4 py-1.5 rounded-full">
              social proof
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Social Proof
            </h2>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div style={{
                  color: '#0F172A',
                  fontSize: '24px',
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  marginBottom: '8px'
                }}>
                  1 000+
                </div>
                <div style={{
                  color: '#6B7280',
                  fontSize: '14px',
                  fontFamily: 'Inter',
                  fontWeight: '400'
                }}>
                  QC-approved assets/day
                </div>
              </div>
              
              <div className="text-center">
                <div style={{
                  color: '#0F172A',
                  fontSize: '24px',
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  marginBottom: '8px'
                }}>
                  240K+
                </div>
                <div style={{
                  color: '#6B7280',
                  fontSize: '14px',
                  fontFamily: 'Inter',
                  fontWeight: '400'
                }}>
                  dating images/year
                </div>
              </div>
              
              <div className="text-center">
                <div style={{
                  color: '#0F172A',
                  fontSize: '24px',
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  marginBottom: '8px'
                }}>
                  98%
                </div>
                <div style={{
                  color: '#6B7280',
                  fontSize: '14px',
                  fontFamily: 'Inter',
                  fontWeight: '400'
                }}>
                  first-pass QA
                </div>
              </div>
              
              <div className="text-center">
                <div style={{
                  color: '#0F172A',
                  fontSize: '24px',
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  marginBottom: '8px'
                }}>
                  10K+
                </div>
                <div style={{
                  color: '#6B7280',
                  fontSize: '14px',
                  fontFamily: 'Inter',
                  fontWeight: '400'
                }}>
                  campaigns delivered
                </div>
              </div>
            </div>
            
            {/* Trust Statement */}
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Trusted by growth teams in SaaS, e-commerce, gaming and agencies on{' '}
              <span style={{ fontWeight: '700', color: '#0F172A' }}>five continents</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
