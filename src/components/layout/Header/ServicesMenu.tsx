import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { navigationMenu, MenuSection } from '@/config/menu';

interface ServicesMenuProps {
  onClose: () => void;
}

export const ServicesMenu: React.FC<ServicesMenuProps> = ({ onClose }) => {
  const root = navigationMenu.services;
  const level1 = root.children || [];
  const [active, setActive] = useState<MenuSection>(level1[0]);

  return (
    <div 
            className="fixed bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[9999] lg:block hidden"
      style={{
        width: '700px',
        height: '420px',
        top: '100px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        padding: '24px',
        gap: '40px',
        display: 'flex'
      }}
      onMouseLeave={onClose}
    >
      {/* Column 1: root services */}
      <div style={{ width: '280px', flexDirection: 'column', gap: '12px', display: 'flex', borderRight: '1px solid #E9D5FF', paddingRight: '16px', overflowY: 'auto' }}>
        {(level1 as MenuSection[]).map((s) => (
          <a
            key={s.title}
            href={s.href}
            onMouseEnter={() => setActive(s)}
            onFocus={() => setActive(s)}
            onClick={onClose}
            className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors duration-200 ${s.title===active?.title ? 'bg-purple-50 text-purple-900' : 'hover:bg-gray-50 hover:text-gray-900'}`}
          >
            <span className="text-gray-900 font-semibold">{s.title}</span>
            {(s.children && s.children.length > 0) ? (
              <ChevronRight className="h-4 w-4 text-gray-400" />
            ) : null}
          </a>
        ))}
      </div>

      {/* Column 2: children of active service */}
      <div style={{ width: '360px', flexDirection: 'column', gap: '12px', display: 'flex', overflowY: 'auto' }}>
        {(active?.children || []).map((c) => (
          <a
            key={c.title}
            href={c.href}
            onClick={onClose}
            className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
          >
            <span className="text-gray-900 font-medium">{c.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
