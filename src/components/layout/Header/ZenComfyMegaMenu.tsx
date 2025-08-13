import React from 'react';
import { Cloud, BarChart3 } from 'lucide-react';

interface ZenComfyMegaMenuProps {
  onClose: () => void;
}

export const ZenComfyMegaMenu: React.FC<ZenComfyMegaMenuProps> = ({ onClose }) => {
  return (
    <div
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
      onMouseLeave={onClose}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 w-[500px]">
        {/* Header */}
        <div className="border-b border-purple-200 pb-4 mb-6">
          <a href="/products/zencomfy" onClick={onClose} className="block hover:opacity-80 transition-opacity">
            <h3 className="text-2xl font-semibold text-black mb-1">ZenComfy</h3>
            <p className="text-sm text-gray-500">ComfyUI in the cloud + workflow-to-web-app builder</p>
          </a>
        </div>

        {/* Menu Items */}
        <div className="space-y-6">
          <a href="/products/zencomfy/comfyui-cloud" onClick={onClose} className="block py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors group">
            <div className="flex items-center gap-3">
              <Cloud className="w-6 h-6 text-purple-400" />
              <h4 className="text-base font-semibold text-black group-hover:text-gray-900">ComfyUI in the Cloud</h4>
            </div>
          </a>
          
          <a href="/products/zencomfy/workflow-as-app" onClick={onClose} className="block py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors group">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-purple-400" />
              <h4 className="text-base font-semibold text-black group-hover:text-gray-900">ComfyUI Workflow as Web App</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
