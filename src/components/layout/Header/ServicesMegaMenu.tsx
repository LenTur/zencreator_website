import React from 'react';

interface ServicesMegaMenuProps { 
  onClose: () => void;
}

export const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({ onClose }) => {
  return (
    <div
      className="fixed bg-white rounded-b-2xl shadow-2xl overflow-hidden z-[9999] lg:block hidden"
      style={{
        width: '100%',
        maxWidth: '1200px',
        top: '90px',
        left: '50%',
        transform: 'translateX(-50%)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-2 gap-8 p-8">
        {/* Left Column: Services List */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-[#D8B4FE] mb-4">Our Services</div>
          <div className="space-y-2">
            <a href="/services/ai-influencers" onClick={onClose} className="block rounded-xl p-3 hover:bg-gray-50 transition">
              <div className="text-gray-900 font-semibold">AI Influencers</div>
            </a>
            <a href="/services/dating-profiles-generation" onClick={onClose} className="block rounded-xl p-3 hover:bg-gray-50 transition">
              <div className="text-gray-900 font-semibold">Dating Profiles</div>
            </a>
            <a href="/services/photo-shoots-generation" onClick={onClose} className="block rounded-xl p-3 hover:bg-gray-50 transition">
              <div className="text-gray-900 font-semibold">Photo Shoots</div>
            </a>
          </div>
        </div>

        {/* Right Column: Get Started */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-[#D8B4FE] mb-4">Get Started</div>
          <div className="space-y-3">
            <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" onClick={onClose} className="block rounded-xl p-4 bg-gray-900 text-white hover:bg-purple-600 transition">
              <div className="font-semibold mb-1">Book Consultation</div>
              <div className="text-gray-300 text-sm">15-minute strategy call</div>
            </a>
            <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" onClick={onClose} className="block rounded-xl p-4 bg-purple-100 text-purple-900 hover:bg-purple-200 transition">
              <div className="font-semibold mb-1">Book Demo</div>
              <div className="text-purple-700 text-sm">See our services in action</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
