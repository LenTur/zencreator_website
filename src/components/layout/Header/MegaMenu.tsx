import React from 'react';
import { Sparkles, Image, ArrowUp, MessageSquare, Hash, Play, LayoutGrid, Camera, Instagram, Twitter, Facebook, Youtube, BarChart3, Settings, Cloud, ChevronRight } from 'lucide-react';

const getMenuIcon = (title: string, size: string = "h-4 w-4") => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'FaceGenerator': <Sparkles className={`${size} text-purple-400`} />,
    'Face Swapping': <Image className={`${size} text-purple-400`} />,
    'Upscaling': <ArrowUp className={`${size} text-purple-400`} />,
    'Generation by Prompt': <MessageSquare className={`${size} text-purple-400`} />,
    'Generation by Reference': <Hash className={`${size} text-purple-400`} />,
    'Dating Profile Generation': <Sparkles className={`${size} text-purple-400`} />,
    'Video Generation': <Play className={`${size} text-purple-400`} />,
    'Carousel Generation': <LayoutGrid className={`${size} text-purple-400`} />,
    'Photo Shoot Generation': <Camera className={`${size} text-purple-400`} />,
    'on Instagram': <Instagram className={`${size} text-purple-400`} />,
    'on Threads': <MessageSquare className={`${size} text-purple-400`} />,
    'on Twitter (X)': <Twitter className={`${size} text-purple-400`} />,
    'on Facebook': <Facebook className={`${size} text-purple-400`} />,
    'on YouTube': <Youtube className={`${size} text-purple-400`} />,
  };
  return iconMap[title] || <Sparkles className={`${size} text-purple-400`} />;
};

interface MegaMenuProps { onClose: () => void }

export const MegaMenu: React.FC<MegaMenuProps> = ({ onClose }) => {
  return (
    <div
      className="fixed bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[9999] lg:block hidden"
      style={{
        width: '900px',
        top: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-3 h-full min-h-[500px]">
        {/* Left Column - ZenCreator */}
        <div className="border-r border-gray-100 p-6">
          {/* ZenCreator Header */}
          <div className="border-b border-gray-200 pb-4 mb-6">
            <a href="/products/zencreator" onClick={onClose} className="block group">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 mb-1">ZenCreator</h3>
              <p className="text-sm text-gray-500">Описание продукта</p>
            </a>
          </div>

          {/* Content Creation Section */}
          <div className="mb-6">
            <a 
              href="/products/zencreator/content-creation" 
              onClick={onClose}
              className="flex items-center justify-between py-2 px-2 rounded hover:bg-gray-50 transition-colors group mb-3"
            >
              <span className="text-sm font-medium text-gray-900 group-hover:text-purple-600">Content Creation</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </a>
            
            {/* Content Creation Tools */}
            <div className="space-y-1 ml-2">
              <a href="/products/zencreator/content-creation/ai-face-generation" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-gray-50 transition-colors group">
                {getMenuIcon('FaceGenerator')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">FaceGenerator</span>
              </a>
              <a href="/products/zencreator/content-creation/ai-face-swapping" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-gray-50 transition-colors group">
                {getMenuIcon('Face Swapping')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Face Swapping</span>
              </a>
              <a href="/products/zencreator/content-creation/ai-upscaling" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-gray-50 transition-colors group">
                {getMenuIcon('Upscaling')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Upscaling</span>
              </a>
              <a href="/products/zencreator/content-creation/ai-generation-prompt" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-gray-50 transition-colors group">
                {getMenuIcon('Generation by Prompt')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Generation by Prompt</span>
              </a>
              <a href="/products/zencreator/content-creation/ai-generation-reference" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-gray-50 transition-colors group">
                {getMenuIcon('Generation by Reference')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Generation by Reference</span>
              </a>
              <a href="/services/dating-profiles-generation" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-gray-50 transition-colors group">
                {getMenuIcon('Dating Profile Generation')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Dating Profile Generation</span>
              </a>
              <a href="/products/zencreator/content-creation/video-generation" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-gray-50 transition-colors group">
                {getMenuIcon('Video Generation')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Video Generation</span>
              </a>
              <a href="/products/zencreator/content-creation/carousel-generation" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-gray-50 transition-colors group">
                {getMenuIcon('Carousel Generation')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Carousel Generation</span>
              </a>
              <a href="/services/photo-shoots-generation" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-gray-50 transition-colors group">
                {getMenuIcon('Photo Shoot Generation')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Photo Shoot Generation</span>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Column - Publishing Hub + Analytics + Account */}
        <div className="border-r border-gray-100 p-6">
          {/* Publishing Hub Section */}
          <div className="mb-6">
            <a 
              href="/products/zencreator/publishing-hub" 
              onClick={onClose}
              className="flex items-center justify-between py-2 px-2 rounded hover:bg-gray-50 transition-colors group mb-3"
            >
              <span className="text-sm font-medium text-gray-900 group-hover:text-purple-600">Publishing Hub</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </a>
            
            {/* Publishing Platforms */}
            <div className="space-y-1 ml-2 mb-6">
              <a href="/products/zencreator/publishing-hub/instagram" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-gray-50 transition-colors group">
                {getMenuIcon('on Instagram')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">on Instagram</span>
              </a>
              <a href="/products/zencreator/publishing-hub/threads" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-gray-50 transition-colors group">
                {getMenuIcon('on Threads')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">on Threads</span>
              </a>
              <a href="/products/zencreator/publishing-hub/twitter" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-gray-50 transition-colors group">
                {getMenuIcon('on Twitter (X)')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">on Twitter (X)</span>
              </a>
              <a href="/products/zencreator/publishing-hub/facebook" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-gray-50 transition-colors group">
                {getMenuIcon('on Facebook')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">on Facebook</span>
              </a>
              <a href="/products/zencreator/publishing-hub/youtube" onClick={onClose} className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-gray-50 transition-colors group">
                {getMenuIcon('on YouTube')}
                <span className="text-sm text-gray-700 group-hover:text-gray-900">on YouTube</span>
              </a>
            </div>
          </div>

          {/* Analytics and Insights */}
          <a 
            href="/products/zencreator/analytics" 
            onClick={onClose}
            className="flex items-center justify-between py-2 px-2 rounded hover:bg-gray-50 transition-colors group mb-3"
          >
            <span className="text-sm font-medium text-gray-900 group-hover:text-purple-600">Analytics and Insights</span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </a>

          {/* Account Management */}
          <a 
            href="/products/zencreator/account-management" 
            onClick={onClose}
            className="flex items-center justify-between py-2 px-2 rounded hover:bg-gray-50 transition-colors group"
          >
            <span className="text-sm font-medium text-gray-900 group-hover:text-purple-600">Account Management</span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </a>
        </div>

        {/* Right Column - ZenComfy */}
        <div className="p-6">
          {/* ZenComfy Header */}
          <div className="border-b border-gray-200 pb-4 mb-6">
            <a href="/products/zencomfy" onClick={onClose} className="block group">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 mb-1">ZenComfy</h3>
              <p className="text-sm text-gray-500">Описание продукта</p>
            </a>
          </div>

          {/* ComfyUI in the Cloud */}
          <a 
            href="/products/zencomfy/comfyui-cloud" 
            onClick={onClose}
            className="flex items-center justify-between py-2 px-2 rounded hover:bg-gray-50 transition-colors group mb-3"
          >
            <span className="text-sm font-medium text-gray-900 group-hover:text-purple-600">ComfyUI in the Cloud</span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </a>

          {/* Analytics and Insights */}
          <a 
            href="/products/zencomfy/analytics" 
            onClick={onClose}
            className="flex items-center justify-between py-2 px-2 rounded hover:bg-gray-50 transition-colors group"
          >
            <span className="text-sm font-medium text-gray-900 group-hover:text-purple-600">Analytics and Insights</span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  );
};