export const AccountManagement = () => {
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
                  Account Management
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
                      Centralised Profiles
                    </div>
                    <div style={{
                      width: '437px',
                      color: 'white',
                      fontSize: '14px',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '16.94px'
                    }}>
                      Store face, bio, style refs, token status and full media gallery.
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
                      Role-Based KPIs
                    </div>
                    <div style={{
                      color: 'white',
                      fontSize: '14px',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '16.94px'
                    }}>
                      Set daily/weekly goals per creator and monitor hit/miss.
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
                      Category Tags
                    </div>
                    <div style={{
                      color: 'white',
                      fontSize: '14px',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '16.94px'
                    }}>
                      Group 1 or 100 creators (e.g., Fitness, Fashion) for bulk actions & analytics.
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
                      Token Health Alerts
                    </div>
                    <div style={{
                      color: 'white',
                      fontSize: '14px',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      lineHeight: '16.94px'
                    }}>
                      Slack/email ping when a network needs re-auth; one-click refresh.
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
                  Manage Accounts →
                </div>
              </button>
              
            </div>
            
            {/* Right Visual - Account Management Image */}
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
                src="/AccountManagement.png"
                alt="Account Management Interface"
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
