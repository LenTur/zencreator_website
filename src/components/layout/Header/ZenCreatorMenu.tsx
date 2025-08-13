import React from 'react';
import { Sparkles, Image, ArrowUp, MessageSquare, Hash, Play, LayoutGrid, Camera, Instagram, Twitter, Facebook, Youtube, BarChart3, Settings } from 'lucide-react';

const getMenuIcon = (title: string, size: string = "h-5 w-5") => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'Content Creation': <Sparkles className={`${size} text-purple-500`} />,
    'Publishing Hub': <MessageSquare className={`${size} text-green-500`} />,
    'Analytics and Insights': <BarChart3 className={`${size} text-orange-500`} />,
    'Account Management': <Settings className={`${size} text-gray-500`} />,
    'AI Face Generation': <Sparkles className={`${size} text-purple-400`} />,
    'AI Face Swapping': <Image className={`${size} text-purple-400`} />,
    'AI Upscaling': <ArrowUp className={`${size} text-purple-400`} />,
    'AI Generation by Prompt': <MessageSquare className={`${size} text-purple-400`} />,
    'AI Generation by Reference': <Hash className={`${size} text-purple-400`} />,
    'AI Video Generation': <Play className={`${size} text-purple-400`} />,
    'AI Carousel Generation': <LayoutGrid className={`${size} text-purple-400`} />,
    'AI Photo Shoot Generation': <Camera className={`${size} text-purple-400`} />,
    'on Instagram': <Instagram className={`${size} text-pink-500`} />,
    'on Threads': <MessageSquare className={`${size} text-gray-600`} />,
    'on Twitter (X)': <Twitter className={`${size} text-blue-500`} />,
    'on Facebook': <Facebook className={`${size} text-blue-600`} />,
    'on YouTube': <Youtube className={`${size} text-red-500`} />,
  };
  return iconMap[title] || <Sparkles className={`${size} text-gray-400`} />;
};

interface ZenCreatorMenuProps { 
  onClose: () => void;
}

export const ZenCreatorMenu: React.FC<ZenCreatorMenuProps> = ({ onClose }) => {
  return (
    <div
      className="fixed bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[9999] lg:block hidden"
      style={{
        width: '800px',
        top: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
      onMouseLeave={onClose}
    >
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <a href="/products/zencreator" onClick={onClose} className="block group">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 mb-2">ZenCreator</h3>
            <p className="text-sm text-gray-500">AI-powered content creation and publishing platform</p>
          </a>
        </div>

        {/* Main Sections Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Content Creation */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {getMenuIcon('Content Creation')}
              <a 
                href="/products/zencreator/content-creation" 
                onClick={onClose}
                className="text-lg font-semibold text-gray-900 hover:text-purple-600 transition-colors"
              >
                Content Creation
              </a>
            </div>
            <div className="space-y-2 ml-8">
              <a href="/products/zencreator/content-creation/ai-face-generation" onClick={onClose} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group">
                {getMenuIcon('AI Face Generation', 'h-4 w-4')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Face Generation</span>
              </a>
              <a href="/products/zencreator/content-creation/ai-face-swapping" onClick={onClose} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group">
                {getMenuIcon('AI Face Swapping', 'h-4 w-4')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Face Swapping</span>
              </a>
              <a href="/products/zencreator/content-creation/ai-upscaling" onClick={onClose} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group">
                {getMenuIcon('AI Upscaling', 'h-4 w-4')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Upscaling</span>
              </a>
              <a href="/products/zencreator/content-creation/ai-generation-prompt" onClick={onClose} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group">
                {getMenuIcon('AI Generation by Prompt', 'h-4 w-4')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Generation by Prompt</span>
              </a>
              <a href="/products/zencreator/content-creation/ai-generation-reference" onClick={onClose} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group">
                {getMenuIcon('AI Generation by Reference', 'h-4 w-4')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Generation by Reference</span>
              </a>
            </div>
          </div>

          {/* Publishing Hub */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {getMenuIcon('Publishing Hub')}
              <a 
                href="/products/zencreator/publishing-hub" 
                onClick={onClose}
                className="text-lg font-semibold text-gray-900 hover:text-purple-600 transition-colors"
              >
                Publishing Hub
              </a>
            </div>
            <div className="space-y-2 ml-8">
              <a href="/products/zencreator/publishing-hub/instagram" onClick={onClose} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group">
                {getMenuIcon('on Instagram', 'h-4 w-4')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Instagram</span>
              </a>
              <a href="/products/zencreator/publishing-hub/threads" onClick={onClose} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group">
                {getMenuIcon('on Threads', 'h-4 w-4')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Threads</span>
              </a>
              <a href="/products/zencreator/publishing-hub/twitter" onClick={onClose} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group">
                {getMenuIcon('on Twitter (X)', 'h-4 w-4')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Twitter (X)</span>
              </a>
              <a href="/products/zencreator/publishing-hub/facebook" onClick={onClose} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group">
                {getMenuIcon('on Facebook', 'h-4 w-4')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Facebook</span>
              </a>
              <a href="/products/zencreator/publishing-hub/youtube" onClick={onClose} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group">
                {getMenuIcon('on YouTube', 'h-4 w-4')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-100">
          <a href="/products/zencreator/analytics" onClick={onClose} className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors group">
            {getMenuIcon('Analytics and Insights')}
            <div>
              <div className="text-sm font-medium text-gray-900 group-hover:text-purple-600">Analytics and Insights</div>
              <div className="text-xs text-gray-500">Track performance across platforms</div>
            </div>
          </a>
          <a href="/products/zencreator/account-management" onClick={onClose} className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors group">
            {getMenuIcon('Account Management')}
            <div>
              <div className="text-sm font-medium text-gray-900 group-hover:text-purple-600">Account Management</div>
              <div className="text-xs text-gray-500">Connect and manage accounts</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
