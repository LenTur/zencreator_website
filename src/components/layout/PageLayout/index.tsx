import React from 'react';
import { Header } from '../Header';
import { FinalFooter } from '../FinalFooter';
// Breadcrumbs removed per request

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, title, description }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* White Navbar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9998 }}>
        <div className="w-full flex justify-center" style={{ margin: '0 40px' }}>
          <div style={{
            background: 'white',
            borderRadius: 24,
            padding: '24px 40px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            margin: '20px 0',
            border: '1px solid #e5e7eb'
          }}>
            <Header forceDark={true} />
          </div>
        </div>
      </div>

      {/* Content */}
      <main style={{ paddingTop: '140px' }}>
        {/* Breadcrumbs are intentionally removed */}
        {children}
      </main>

      {/* Footer */}
      <FinalFooter />
    </div>
  );
};
