import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, ArrowUp } from 'lucide-react';
import { navigationMenu, MenuSection } from '@/config/menu';
import { MegaMenu } from './MegaMenu';
import { ServicesMegaMenu } from './ServicesMegaMenu';



interface NavItemProps {
  item: MenuSection;
  isDark: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ item, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    if (item.children) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 150);
    setTimeoutId(id);
  };

  const closeMenu = () => {
    setIsOpen(false);
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Special handling for Products — use mega menu
  if (item.children && item.title === 'Products') {
    return (
      <div
        ref={itemRef}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a 
          href={item.href}
          className={`font-medium transition-all duration-200 px-3 py-2 rounded-lg flex items-center space-x-1 ${
            isDark 
              ? `text-gray-900 ${isOpen ? 'bg-gray-100' : 'hover:bg-gray-50 hover:text-gray-900'}`
              : `text-white ${isOpen ? 'bg-white/20' : 'hover:bg-white/10 hover:text-white/90'}`
          }`}
        >
          <span>{item.title}</span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </a>
        
        {isOpen && (
          <>
            {/* Desktop Mega Menu */}
            <MegaMenu onClose={closeMenu} />
            
            {/* Mobile Simple Menu for Products */}
            <div className="lg:hidden absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 min-w-64">
              <div className="py-2">
                <a href="/products/zencreator" onClick={closeMenu} className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors font-medium">ZenCreator</a>
                <a href="/products/zencomfy" onClick={closeMenu} className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors font-medium">ZenComfy</a>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // Special handling for Services — use mega menu
  if (item.children && item.title === 'Services') {
    return (
      <div
        ref={itemRef}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a 
          href={item.href}
          className={`font-medium transition-all duration-200 px-3 py-2 rounded-lg flex items-center space-x-1 ${
            isDark 
              ? `text-gray-900 ${isOpen ? 'bg-gray-100' : 'hover:bg-gray-50 hover:text-gray-900'}`
              : `text-white ${isOpen ? 'bg-white/20' : 'hover:bg-white/10 hover:text-white/90'}`
          }`}
        >
          <span>{item.title}</span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </a>
        
        {isOpen && (
          <>
            {/* Desktop Services Mega Menu */}
            <ServicesMegaMenu onClose={closeMenu} />
            
            {/* Mobile Simple Menu for Services */}
            <div className="lg:hidden absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 min-w-64">
              <div className="py-2">
                <a href="/services/ai-influencers" onClick={closeMenu} className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors font-medium">AI Influencers</a>
                <a href="/services/dating-profiles-generation" onClick={closeMenu} className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors font-medium">Dating Profiles</a>
                <a href="/services/photo-shoots-generation" onClick={closeMenu} className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors font-medium">Photo Shoots</a>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // Default menu for other sections
  if (item.children) {
    return (
      <div
        ref={itemRef}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a 
          href={item.href}
          className={`font-medium transition-all duration-200 px-3 py-2 rounded-lg flex items-center space-x-1 ${
            isDark 
              ? `text-gray-900 ${isOpen ? 'bg-gray-100' : 'hover:bg-gray-50 hover:text-gray-900'}`
              : `text-white ${isOpen ? 'bg-white/20' : 'hover:bg-white/10 hover:text-white/90'}`
          }`}
        >
          <span>{item.title}</span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </a>
        
        {isOpen && item.children && (
          <div className="absolute top-full left-0 mt-2 bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/60 overflow-hidden z-50 min-w-64">
            <div className="py-2">
              {item.children.map((child) => (
                <a
                  key={child.title}
                  href={child.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  {child.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={item.href}
      className={`font-medium transition-colors px-3 py-2 rounded-lg ${
        isDark 
          ? 'text-gray-900 hover:text-gray-900 hover:bg-gray-50'
          : 'text-white hover:text-white/90 hover:bg-white/10'
      }`}
    >
      {item.title}
    </a>
  );
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionTitle: string) => {
    setOpenSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const renderMobileItem = (item: MenuSection, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openSections.includes(item.title);
    const paddingLeft = depth * 16;

    return (
      <div key={item.title}>
        {hasChildren ? (
          <button
            onClick={() => toggleSection(item.title)}
            className="w-full flex items-center justify-between py-3 text-left transition-colors text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            style={{ paddingLeft: `${paddingLeft + 16}px` }}
          >
            <span className="font-medium">{item.title}</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        ) : (
          <div
            className="block py-3 text-gray-700"
            style={{ paddingLeft: `${paddingLeft + 16}px` }}
          >
            <a
              href={item.href}
              onClick={onClose}
              className="hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              {item.title}
            </a>
          </div>
        )}
        
        {hasChildren && isOpen && (
          <div className="bg-gray-50">
            {item.children?.map(child => renderMobileItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      {/* Menu */}
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="overflow-y-auto h-full pb-20">
          {/* Custom mobile menu items */}
          <div className="py-2">
            {renderMobileItem(navigationMenu.products)}
            {renderMobileItem(navigationMenu.services)}
            {renderMobileItem(navigationMenu.pricing)}
            {renderMobileItem(navigationMenu.about)}
          </div>
          
          <div className="border-t mt-4 pt-4 px-4 space-y-2">
            <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-black text-white">
                Start Creating
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Header = ({ forceDark = false }: { forceDark?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-5'
      }`}>
        <div className="flex justify-center px-4">
          <nav
            className={`backdrop-blur-xl mx-auto flex items-center justify-between transition-all duration-300 w-full px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 rounded-2xl md:rounded-3xl ${
              isScrolled 
                ? 'bg-white/60 border border-white/60' 
                : 'bg-white/20 border border-white/60 shadow-2xl shadow-purple-200/100'
            }`}
            style={{ maxWidth: '1200px' }}
          >
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className={`flex items-center space-x-2 text-2xl font-bold transition-colors ${
                (isScrolled || forceDark) ? 'text-gray-900' : 'text-white'
              }`}>
                <img 
                  src={(isScrolled || forceDark) ? "/Logo-dark.svg" : "/Logo.svg"} 
                  alt="ZenCreator Logo" 
                  className="h-8 w-auto transition-all duration-300" 
                />
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Combined Products with MegaMenu */}
              <NavItem item={navigationMenu.products} isDark={isScrolled || forceDark} />

              <NavItem item={navigationMenu.services} isDark={isScrolled || forceDark} />
              <NavItem item={navigationMenu.pricing} isDark={isScrolled || forceDark} />
              <NavItem item={navigationMenu.about} isDark={isScrolled || forceDark} />
            </div>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-6">
              <a href="https://app.zencreator.pro/" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-block">
                <Button className="bg-black hover:bg-gray-800 text-white px-6 h-10 rounded-lg">
                  Start Creating
                </Button>
              </a>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  (isScrolled || forceDark) 
                    ? 'text-gray-600 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
};