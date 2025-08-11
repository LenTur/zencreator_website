import React, { useMemo, useState } from 'react';
import { ChevronRight, Sparkles, Image, ArrowUp, MessageSquare, Hash, Heart, Play, LayoutGrid, Camera, Instagram, Twitter, Facebook, Youtube, BarChart3, Settings, Cloud } from 'lucide-react';
import { navigationMenu, MenuSection } from '@/config/menu';

const getMenuIcon = (title: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'AI Face Generation': <Sparkles className="h-5 w-5 text-purple-500" />,
    'AI Face Swapping': <Image className="h-5 w-5 text-purple-500" />,
    'AI Upscaling': <ArrowUp className="h-5 w-5 text-purple-500" />,
    'AI Generation by Prompt': <MessageSquare className="h-5 w-5 text-purple-500" />,
    'AI Generation by Reference': <Hash className="h-5 w-5 text-purple-500" />,
    'AI Dating Profile Generation': <Heart className="h-5 w-5 text-purple-500" />,
    'AI Video Generation': <Play className="h-5 w-5 text-purple-500" />,
    'AI Carousel Generation': <LayoutGrid className="h-5 w-5 text-purple-500" />,
    'AI Photo Shoot Generation': <Camera className="h-5 w-5 text-purple-500" />,
    'on Instagram': <Instagram className="h-5 w-5 text-purple-500" />,
    'on Threads': <MessageSquare className="h-5 w-5 text-purple-500" />,
    'on Twitter (X)': <Twitter className="h-5 w-5 text-purple-500" />,
    'on Facebook': <Facebook className="h-5 w-5 text-purple-500" />,
    'on YouTube': <Youtube className="h-5 w-5 text-purple-500" />,
    'Analytics and Insights': <BarChart3 className="h-5 w-5 text-purple-500" />,
    'Account Management': <Settings className="h-5 w-5 text-purple-500" />,
    'ComfyUI in the Cloud': <Cloud className="h-5 w-5 text-purple-500" />,
  };
  return iconMap[title] || <Sparkles className="h-5 w-5 text-purple-500" />;
};

interface MegaMenuProps { onClose: () => void }

export const MegaMenu: React.FC<MegaMenuProps> = ({ onClose }) => {
  const products = navigationMenu.products.children || [];
  const [activeProduct, setActiveProduct] = useState<MenuSection>(products[0]);
  const level2 = activeProduct?.children || [];
  const [activeSection, setActiveSection] = useState<MenuSection>(level2[0]);

  // Ensure activeSection follows activeProduct changes
  React.useEffect(() => {
    if (level2.length > 0) setActiveSection(level2[0]);
  }, [activeProduct]);

  const rightItems = useMemo(() => activeSection?.children || [], [activeSection]);

  return (
    <div 
      className="fixed bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[9999] lg:block hidden"
      style={{ 
        width: '900px',
        height: '480px',
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
      {/* Three-column layout */}
      <div style={{ width: '1100px', display: 'grid', gridTemplateColumns: '240px 320px 540px', gap: '24px', height: '100%' }}>
        {/* Column 1: Products */}
        <div className="pr-4" style={{ borderRight: '1px solid #E9D5FF', overflowY: 'auto' }}>
          {(products as MenuSection[]).map((p) => (
            <a
              key={p.title}
              href={p.href}
              onMouseEnter={() => setActiveProduct(p)}
              onFocus={() => setActiveProduct(p)}
              onClick={onClose}
              className={`flex items-center justify-between px-3 py-2 rounded-lg mb-2 transition-colors duration-200 ${p.title===activeProduct?.title ? 'bg-purple-50 text-purple-900' : 'hover:bg-gray-50 hover:text-gray-900'}`}
            >
              <span className="text-gray-900 font-semibold">{p.title}</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </a>
          ))}
        </div>

        {/* Column 2: Sections of selected product */}
        <div className="pr-4" style={{ borderRight: '1px solid #E9D5FF', overflowY: 'auto' }}>
          {(level2 as MenuSection[]).map((s) => (
            <a
              key={s.title}
              href={s.href}
              onMouseEnter={() => setActiveSection(s)}
              onFocus={() => setActiveSection(s)}
              onClick={onClose}
              className={`flex items-center justify-between px-3 py-2 rounded-lg mb-2 transition-colors duration-200 ${s.title===activeSection?.title ? 'bg-purple-50 text-purple-900' : 'hover:bg-gray-50 hover:text-gray-900'}`}
            >
              <span className="text-gray-900 font-semibold">{s.title}</span>
              {(s.children && s.children.length > 0) ? (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              ) : null}
            </a>
          ))}
        </div>

        {/* Column 3: Items of selected section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
          {(rightItems as MenuSection[]).map((it) => (
            <a
              key={it.title}
              href={it.href}
              onClick={onClose}
              className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                {getMenuIcon(it.title)}
                <span className="text-gray-900 font-medium whitespace-nowrap">{it.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Right side removed: handled in 3rd column above */}
    </div>
  );
};