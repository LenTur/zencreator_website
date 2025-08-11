export const PublishingHub = () => {
  return (
    <section className="py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div 
            className="rounded-xl flex items-center justify-between overflow-hidden"
            style={{
              padding: '40px 60px',
              background: '#0F172A',
              gap: '40px'
            }}
          >
            
            {/* Left Content */}
            <div style={{ width: '495px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Header */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                
                <h2 style={{
                  color: 'white',
                  fontSize: '40px',
                  fontFamily: 'Inter',
                  fontWeight: '900',
                  lineHeight: '42.38px'
                }}>
                  Publishing Hub
                </h2>
              </div>
              
              {/* Features List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
                
                {/* Feature 1 */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ width: '12px', height: '18px', position: 'relative' }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      position: 'absolute',
                      top: '3px',
                      background: 'radial-gradient(ellipse 111.50% 111.50% at 26.68% 85.00%, #FF8FE1 0%, #FFDDFE 45%, #FF9DE5 100%)',
                      borderRadius: '50%'
                    }} />
                  </div>
                  <div style={{ width: '473px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{
                      color: 'white',
                      fontSize: '16px',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '16.95px'
                    }}>
                      Official APIs
                    </div>
                    <div style={{
                      width: '437px',
                      color: 'white',
                      fontSize: '14px',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '16.94px'
                    }}>
                      Meta Tech-Partner for IG/FB/Threads + X OAuth + YouTube Data + TikTok Content.
                    </div>
                  </div>
                </div>
                
                {/* Feature 2 */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ width: '12px', height: '18px', position: 'relative' }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      position: 'absolute',
                      top: '3px',
                      background: 'radial-gradient(ellipse 111.50% 111.50% at 26.68% 85.00%, #FF8FE1 0%, #FFDDFE 45%, #FF9DE5 100%)',
                      borderRadius: '50%'
                    }} />
                  </div>
                  <div style={{ width: '473px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{
                      color: 'white',
                      fontSize: '16px',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '16.95px'
                    }}>
                      Smart Publish
                    </div>
                    <div style={{
                      color: 'white',
                      fontSize: '14px',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '16.94px'
                    }}>
                      Define posting windows; AI fills captions, hashtags, music & CTAs.
                    </div>
                  </div>
                </div>
                
                {/* Feature 3 */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ width: '12px', height: '18px', position: 'relative' }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      position: 'absolute',
                      top: '3px',
                      background: 'radial-gradient(ellipse 111.50% 111.50% at 26.68% 85.00%, #FF8FE1 0%, #FFDDFE 45%, #FF9DE5 100%)',
                      borderRadius: '50%'
                    }} />
                  </div>
                  <div style={{ width: '473px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{
                      color: 'white',
                      fontSize: '16px',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '16.95px'
                    }}>
                      Unified Calendar
                    </div>
                    <div style={{
                      color: 'white',
                      fontSize: '14px',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '16.94px'
                    }}>
                      Drag-and-drop across six networks; colour-coded status.
                    </div>
                  </div>
                </div>
                
                {/* Feature 4 */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ width: '12px', height: '18px', position: 'relative' }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      position: 'absolute',
                      top: '3px',
                      background: 'radial-gradient(ellipse 111.50% 111.50% at 26.68% 85.00%, #FF8FE1 0%, #FFDDFE 45%, #FF9DE5 100%)',
                      borderRadius: '50%'
                    }} />
                  </div>
                  <div style={{ width: '473px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{
                      color: 'white',
                      fontSize: '16px',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '16.95px'
                    }}>
                      Compliance Guardrails
                    </div>
                    <div style={{
                      color: 'white',
                      fontSize: '14px',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '16.94px'
                    }}>
                      Dimensions, text density, copyright and policy checks before posting.
                    </div>
                  </div>
                </div>
                
              </div>
              
              {/* Button */}
              <button 
                className="inline-flex items-center justify-center gap-2 transition-colors hover:bg-gray-100"
                style={{
                  width: '300px',
                  height: '50px',
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  background: 'white',
                  borderRadius: '12px'
                }}
              >
                <div style={{
                  textAlign: 'center',
                  color: '#0F172A',
                  fontSize: '18px',
                  fontFamily: 'Inter',
                  fontWeight: '400',
                  lineHeight: '19.07px'
                }}>
                  See Publishing Hub →
                </div>
              </button>
              
            </div>
            
            {/* Right Visual - Publishing Hub Image */}
            <div style={{
              width: '500px',
              height: '400px',
              borderRadius: '20px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/PublishingHub.png"
                alt="Publishing Hub Interface"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
