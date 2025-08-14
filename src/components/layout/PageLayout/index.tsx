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
      {/* Fixed Header (single source of truth) */}
      <Header forceDark={true} />

      {/* Content */}
      <main>
        {/* Breadcrumbs are intentionally removed */}
        {children}
      </main>

      {/* Footer */}
      <FinalFooter />
    </div>
  );
};
