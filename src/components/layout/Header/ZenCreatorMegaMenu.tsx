import React from 'react';
import { Sparkles, Image, ArrowUp, MessageSquare, Hash, Play, LayoutGrid, Camera, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

interface ZenCreatorMegaMenuProps {
  onClose: () => void;
}

export const ZenCreatorMegaMenu: React.FC<ZenCreatorMegaMenuProps> = ({ onClose }) => {
  return (
    <div
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
      onMouseLeave={onClose}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 w-[900px]">
        {/* Header */}
        <div className="border-b border-purple-200 pb-4 mb-3">
          <a href="/products/zencreator" onClick={onClose} className="block hover:opacity-80 transition-opacity">
            <h3 className="text-2xl font-semibold text-black mb-1">ZenCreator</h3>
            <p className="text-sm text-gray-500">AI studio + omni-channel publishing + growth analytics</p>
          </a>
        </div>

        {/* Three Column Layout */}
        <div className="flex gap-10">
          {/* Left Column - Content Creation */}
          <div className="w-[265px]">
            <div className="mb-4">
              <a href="/products/zencreator/content-creation" onClick={onClose} className="block hover:opacity-80 transition-opacity">
                <h4 className="text-base font-semibold text-black mb-4">Content Creation</h4>
              </a>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 py-1.5 px-2 opacity-50 cursor-not-allowed">
                <Sparkles className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">FaceGenerator</span>
              </div>
              
              <div className="flex items-center gap-3 py-1.5 px-2 opacity-50 cursor-not-allowed">
                <Image className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">Face Swapping</span>
              </div>
              
              <div className="flex items-center gap-3 py-1.5 px-2 opacity-50 cursor-not-allowed">
                <ArrowUp className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">Upscaling</span>
              </div>
              
              <div className="flex items-center gap-3 py-1.5 px-2 opacity-50 cursor-not-allowed">
                <MessageSquare className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">Generation by Prompt</span>
              </div>
              
              <div className="flex items-center gap-3 py-1.5 px-2 opacity-50 cursor-not-allowed">
                <Hash className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">Generation by Reference</span>
              </div>
              
              <div className="flex items-center gap-3 py-1.5 px-2 opacity-50 cursor-not-allowed">
                <Hash className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">Dating Profile Generation</span>
              </div>
              
              <div className="flex items-center gap-3 py-1.5 px-2 opacity-50 cursor-not-allowed">
                <Play className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">Video Generation</span>
              </div>
              
              <div className="flex items-center gap-3 py-1.5 px-2 opacity-50 cursor-not-allowed">
                <LayoutGrid className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">Carousel Generation</span>
              </div>
              
              <div className="flex items-center gap-3 py-1.5 px-2 opacity-50 cursor-not-allowed">
                <Camera className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">Photo Shoot Generation</span>
              </div>
            </div>
          </div>

          {/* Middle Column - Publishing Hub */}
          <div className="w-[179px]">
            <div className="mb-4">
              <a href="/products/zencreator/publishing-hub" onClick={onClose} className="block hover:opacity-80 transition-opacity">
                <h4 className="text-base font-semibold text-black mb-4">Publishing Hub</h4>
              </a>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 py-1.5 px-2 opacity-50 cursor-not-allowed">
                <Instagram className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">on Instagram</span>
              </div>
              
              <div className="flex items-center gap-3 py-1.5 px-2 opacity-50 cursor-not-allowed">
                <MessageSquare className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">on Threads</span>
              </div>
              
              <div className="flex items-center gap-3 py-1.5 px-2 opacity-50 cursor-not-allowed">
                <Twitter className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">on Twitter (X)</span>
              </div>
              
              <div className="flex items-center gap-3 py-1.5 px-2 opacity-50 cursor-not-allowed">
                <Facebook className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">on Facebook</span>
              </div>
              
              <div className="flex items-center gap-3 py-1.5 px-2 opacity-50 cursor-not-allowed">
                <Youtube className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-medium text-gray-400">on YouTube</span>
              </div>
            </div>
          </div>

          {/* Right Column - Account Management & Analytics */}
          <div className="w-[185px]">
            <div className="space-y-6">
              <a href="/products/zencreator/account-management" onClick={onClose} className="block py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors group">
                <h4 className="text-base font-semibold text-black group-hover:text-gray-900 whitespace-nowrap">Account Management</h4>
              </a>
              
              <a href="/products/zencreator/analytics" onClick={onClose} className="block py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors group">
                <h4 className="text-base font-semibold text-black group-hover:text-gray-900 whitespace-nowrap">Analytics and Insights</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
