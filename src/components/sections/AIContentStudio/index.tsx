export const AIContentStudio = () => {
  return (
    <section className="py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto" style={{ maxWidth: '1180px' }}>
          <div style={{
            padding: 30, 
            background: '#FFF', 
            borderRadius: 12,
            border: '1px solid #F3F4F6',
            boxShadow: '0 1.986px 2.979px -0.496px rgba(0, 0, 0, 0.10), 0 0.993px 1.986px -0.496px rgba(0, 0, 0, 0.06), 0 0 0 0.496px rgba(0, 0, 0, 0.05)',
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-start', 
            gap: 32, 
            display: 'flex'
          }}>
            <div style={{
              alignSelf: 'stretch', 
              height: 50, 
              paddingLeft: 24, 
              paddingRight: 24, 
              paddingTop: 12, 
              paddingBottom: 12, 
              background: 'radial-gradient(ellipse 111.50% 111.50% at 26.68% 85.00%, #FF8FE1 0%, #FFDDFE 45%, #FF9DE5 100%), white', 
              borderRadius: 12, 
              outline: '1px #F6EDFF solid', 
              outlineOffset: '-1px', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              display: 'flex'
            }}>
              <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex'}}>
                <div style={{color: '#0F172A', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', lineHeight: 33.91, wordWrap: 'break-word'}}>AI Content Studio</div>
              </div>
              <div style={{textAlign: 'center', color: '#0F172A', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16.95, wordWrap: 'break-word'}}>Image · Video · Face · Profile · Upscale</div>
            </div>
            
            <div style={{display: 'flex', gap: 24, width: '100%', alignItems: 'stretch'}}>
              {/* Left Content Block - 50% */}
              <div style={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                paddingRight: 12
              }}>
                {/* Title */}
                <h3 style={{
                  color: '#101729', 
                  fontSize: 24, 
                  fontFamily: 'Inter', 
                  fontWeight: '700', 
                  lineHeight: '25.43px',
                  margin: 0
                }}>
                  Creator Hub
                </h3>
                
                {/* Features List */}
                <div style={{display: 'flex', flexDirection: 'column'}} className="features-list">
                  <div style={{display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 24}}>
                    <div style={{
                      width: 12, 
                      height: 12, 
                      backgroundColor: '#101729', 
                      borderRadius: '50%',
                      marginTop: 6,
                      flexShrink: 0
                    }} />
                    <div>
                      <div style={{
                        color: '#101729', 
                        fontSize: 17, 
                        fontFamily: 'Inter', 
                        fontWeight: '600', 
                        lineHeight: '17.95px',
                        marginBottom: 4
                      }}>
                        Specialised tools
                      </div>
                      <div style={{
                        color: '#101729', 
                        fontSize: 15, 
                        fontFamily: 'Inter', 
                        fontWeight: '400', 
                        lineHeight: '17.94px'
                      }}>
                        Face Gen, Photo-Shoot, Prompt & Reference Generators, Face Swap, 4-mode Upscale, Video, Carousel, Dating-Profile Builder.
                      </div>
                    </div>
                  </div>
                  
                  <div style={{display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 24}}>
                    <div style={{
                      width: 12, 
                      height: 12, 
                      backgroundColor: '#101729', 
                      borderRadius: '50%',
                      marginTop: 6,
                      flexShrink: 0
                    }} />
                    <div>
                      <div style={{
                        color: '#101729', 
                        fontSize: 17, 
                        fontFamily: 'Inter', 
                        fontWeight: '600', 
                        lineHeight: '17.95px',
                        marginBottom: 4
                      }}>
                        Batch Mode Everywhere
                      </div>
                      <div style={{
                        color: '#101729', 
                        fontSize: 15, 
                        fontFamily: 'Inter', 
                        fontWeight: '400', 
                        lineHeight: '17.94px'
                      }}>
                        Spin up 1 or 10 000 assets; GPU clusters auto-scale.
                      </div>
                    </div>
                  </div>
                  
                  <div style={{display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 24}}>
                    <div style={{
                      width: 12, 
                      height: 12, 
                      backgroundColor: '#101729', 
                      borderRadius: '50%',
                      marginTop: 6,
                      flexShrink: 0
                    }} />
                    <div>
                      <div style={{
                        color: '#101729', 
                        fontSize: 17, 
                        fontFamily: 'Inter', 
                        fontWeight: '600', 
                        lineHeight: '17.95px',
                        marginBottom: 4
                      }}>
                        One-Click Pipelines
                      </div>
                      <div style={{
                        color: '#101729', 
                        fontSize: 15, 
                        fontFamily: 'Inter', 
                        fontWeight: '400', 
                        lineHeight: '17.94px'
                      }}>
                        Push any output to Upscale → Swap → Publish without downloads.
                      </div>
                    </div>
                  </div>
                  
                  <div style={{display: 'flex', gap: 8, alignItems: 'flex-start'}}>
                    <div style={{
                      width: 12, 
                      height: 12, 
                      backgroundColor: '#101729', 
                      borderRadius: '50%',
                      marginTop: 6,
                      flexShrink: 0
                    }} />
                    <div>
                      <div style={{
                        color: '#101729', 
                        fontSize: 17, 
                        fontFamily: 'Inter', 
                        fontWeight: '600', 
                        lineHeight: '17.95px',
                        marginBottom: 4
                      }}>
                        Identity Lock
                      </div>
                      <div style={{
                        color: '#101729', 
                        fontSize: 15, 
                        fontFamily: 'Inter', 
                        fontWeight: '400', 
                        lineHeight: '17.94px'
                      }}>
                        Keep the same face, outfit or product across angles and media.
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Button moved here */}
                <div style={{height: 50, paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#0F172A', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex', width: 'fit-content'}}>
                  <div style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', lineHeight: 19.07, wordWrap: 'break-word'}}>Explore Creator Hub →</div>
                </div>
              </div>
              
              {/* Right Image Block - 50% */}
              <div style={{
                width: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 12
              }}>
                <img 
                  src="/CreatorHub.png" 
                  alt="Creator Hub Interface"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
