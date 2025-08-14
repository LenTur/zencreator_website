import React from 'react';
import { Sparkles, Image, ArrowUp, MessageSquare, Hash, Play, LayoutGrid, Camera, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const getMenuIcon = (title: string, size: string = "h-5 w-5") => {
  const iconCls = `${size} text-gray-500`;
  const iconMap: { [key: string]: React.ReactNode } = {
    'Face Generation': <Sparkles className={iconCls} />,
    'FaceGenerator': <Sparkles className={iconCls} />,
    'Face Swapping': <Image className={iconCls} />,
    'Upscaling': <ArrowUp className={iconCls} />,
    'Generation by Prompt': <MessageSquare className={iconCls} />,
    'Generation by Reference': <Hash className={iconCls} />,
    'Dating Profile Generation': <Sparkles className={iconCls} />,
    'Video Generation': <Play className={iconCls} />,
    'Carousel Generation': <LayoutGrid className={iconCls} />,
    'Photo Shoot Generation': <Camera className={iconCls} />,
    'on Instagram': <Instagram className={iconCls} />,
    'on Threads': <MessageSquare className={iconCls} />,
    'on Twitter (X)': <Twitter className={iconCls} />,
    'on Facebook': <Facebook className={iconCls} />,
    'on YouTube': <Youtube className={iconCls} />,
  };
  return iconMap[title] || <Sparkles className={iconCls} />;
};

interface MegaMenuProps { onClose: () => void }

export const MegaMenu: React.FC<MegaMenuProps> = ({ onClose }) => {
  return (
    <div
      className="fixed bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-[9999] lg:block hidden"
      style={{
        width: '1200px',
        top: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.08), 0 10px 10px -5px rgba(0,0,0,0.04)'
      }}
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-12 gap-8 p-8 text-left">
        {/* Col 1: Products */}
        <div className="col-span-12 lg:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#D8B4FE] mb-3">Products</div>
          <div className="space-y-1.5">
            <a href="/products/zencreator" onClick={onClose} className="block rounded-xl p-3 hover:bg-gray-50 transition">
              <div className="text-gray-900 font-semibold">ZenCreator</div>
            </a>
            <a href="/products/zencomfy" onClick={onClose} className="block rounded-xl p-3 hover:bg-gray-50 transition">
              <div className="text-gray-900 font-semibold">ZenComfy</div>
            </a>
          </div>
        </div>

        {/* Col 2: Deep Dives (ZenCreator + ZenComfy) */}
        <div className="col-span-12 lg:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#D8B4FE] mb-3">Deep Dives ZenCreator</div>
          <div className="space-y-1.5 mb-6">
            <a href="/products/zencreator/content-creation" onClick={onClose} className="block rounded-xl p-3 hover:bg-gray-50 transition">
              <div className="text-gray-900 font-semibold">Content Creation</div>
            </a>
            <a href="/products/zencreator/publishing-hub" onClick={onClose} className="block rounded-xl p-3 hover:bg-gray-50 transition">
              <div className="text-gray-900 font-semibold">Publishing Hub</div>
            </a>
            <a href="/products/zencreator/analytics" onClick={onClose} className="block rounded-xl p-3 hover:bg-gray-50 transition">
              <div className="text-gray-900 font-semibold">Analytics and Insights</div>
            </a>
            <a href="/products/zencreator/account-management" onClick={onClose} className="block rounded-xl p-3 hover:bg-gray-50 transition">
              <div className="text-gray-900 font-semibold">Account Management</div>
            </a>
          </div>
          <div className="text-xs font-semibold uppercase tracking-wide text-[#D8B4FE] mb-3">Deep Dives ZenComfy</div>
          <div className="space-y-1.5">
            <a href="/products/zencomfy/comfy-ui-cloud" onClick={onClose} className="block rounded-xl p-3 hover:bg-gray-50 transition">
              <div className="text-gray-900 font-semibold">ComfyUI in the Cloud</div>
            </a>
            <a href="/products/zencomfy/analytics" onClick={onClose} className="block rounded-xl p-3 hover:bg-gray-50 transition">
              <div className="text-gray-900 font-semibold">Analytics and Insights</div>
            </a>
          </div>
        </div>

        {/* Col 3: Content Creation Tools */}
        <div className="col-span-12 lg:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#D8B4FE] mb-3">Content Creation Tools</div>
          <div className="space-y-1.5">
            {[
              { title: 'Face Generation', href: '/products/zencreator/content-creation/ai-face-generation' },
              { title: 'Face Swapping', href: '/products/zencreator/content-creation/ai-face-swapping' },
              { title: 'Upscaling', href: '/products/zencreator/content-creation/ai-upscaling' },
              { title: 'Generation by Prompt', href: '/products/zencreator/content-creation/ai-generation-prompt' },
              { title: 'Generation by Reference', href: '/products/zencreator/content-creation/ai-generation-reference' },
              { title: 'Dating Profile Generation', href: '/products/zencreator/content-creation/dating-profiles' },
              { title: 'Video Generation', href: '/products/zencreator/content-creation/video-generation' },
              { title: 'Carousel Generation', href: '/products/zencreator/content-creation/carousel-generation' },
              { title: 'Photo Shoot Generation', href: '/products/zencreator/content-creation/photo-shoot' },
            ].map((item) => (
              <a key={item.title} href={item.href} onClick={onClose} className="flex items-center gap-3 rounded-xl p-3 hover:bg-gray-50 transition">
                {getMenuIcon(item.title)}
                <span className="text-gray-900 font-medium">{item.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Col 4: Content Publishing Tools */}
        <div className="col-span-12 lg:col-span-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#D8B4FE] mb-3">Content Publishing Tools</div>
          <div className="space-y-1.5">
            {[
              { title: 'on Instagram', href: '/products/zencreator/publishing-hub/instagram' },
              { title: 'on Threads', href: '/products/zencreator/publishing-hub/threads' },
              { title: 'on Twitter (X)', href: '/products/zencreator/publishing-hub/twitter' },
              { title: 'on Facebook', href: '/products/zencreator/publishing-hub/facebook' },
              { title: 'on YouTube', href: '/products/zencreator/publishing-hub/youtube' },
            ].map((item) => (
              <a key={item.title} href={item.href} onClick={onClose} className="flex items-center gap-3 rounded-xl p-3 hover:bg-gray-50 transition">
                {getMenuIcon(item.title)}
                <span className="text-gray-900 font-medium">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};