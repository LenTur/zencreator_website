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
              <h4 className="text-base font-semibold text-black mb-4">Content Creation</h4>
            </div>
            
            <div className="space-y-4">
              <a href="/products/zencreator/content-creation/ai-face-generation" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-medium text-black">FaceGenerator</span>
              </a>
              
              <a href="/products/zencreator/content-creation/ai-face-swapping" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Image className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-medium text-black">Face Swapping</span>
              </a>
              
              <a href="/products/zencreator/content-creation/ai-upscaling" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                <ArrowUp className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-medium text-black">Upscaling</span>
              </a>
              
              <a href="/products/zencreator/content-creation/ai-generation-prompt" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                <MessageSquare className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-medium text-black">Generation by Prompt</span>
              </a>
              
              <a href="/products/zencreator/content-creation/ai-generation-reference" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Hash className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-medium text-black">Generation by Reference</span>
              </a>
              
              <a href="/products/zencreator/content-creation/dating-profiles" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Hash className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-medium text-black">Dating Profile Generation</span>
              </a>
              
              <a href="/products/zencreator/content-creation/video-generation" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Play className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-medium text-black">Video Generation</span>
              </a>
              
              <a href="/products/zencreator/content-creation/carousel-generation" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                <LayoutGrid className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-medium text-black">Carousel Generation</span>
              </a>
              
              <a href="/products/zencreator/content-creation/photo-shoot" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Camera className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-medium text-black">Photo Shoot Generation</span>
              </a>
            </div>
          </div>

          {/* Middle Column - Publishing Hub */}
          <div className="w-[179px]">
            <div className="mb-4">
              <h4 className="text-base font-semibold text-black mb-4">Publishing Hub</h4>
            </div>
            
            <div className="space-y-4">
              <a href="/products/zencreator/publishing-hub/instagram" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Instagram className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-medium text-black">on Instagram</span>
              </a>
              
              <a href="/products/zencreator/publishing-hub/threads" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                <MessageSquare className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-medium text-black">on Threads</span>
              </a>
              
              <a href="/products/zencreator/publishing-hub/twitter" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Twitter className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-medium text-black">on Twitter (X)</span>
              </a>
              
              <a href="/products/zencreator/publishing-hub/facebook" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Facebook className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-medium text-black">on Facebook</span>
              </a>
              
              <a href="/products/zencreator/publishing-hub/youtube" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Youtube className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-medium text-black">on YouTube</span>
              </a>
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
