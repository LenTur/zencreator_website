import React from 'react';
import { Link } from 'react-router-dom';

interface ToolCardProps {
  name: string;
  description: string;
  link: string;
  tryLink: string;
  children: React.ReactNode; // This will hold the visual part (BeforeAfter, Carousel, or mockup)
}

export const ToolCard: React.FC<ToolCardProps> = ({ name, description, link, tryLink, children }) => {
  return (
    <div className="rounded-3xl border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden flex flex-col bg-transparent">
      {/* Visual part wrapper */}
      <div className="relative w-full h-[450px]">
        {children}
      </div>
      
      {/* Content overlay at bottom */}
      <div className="relative z-10 bg-white p-6 rounded-b-3xl">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 h-12">{description}</p>
        <div className="flex justify-between items-center gap-3">
            <a 
              href={tryLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-2"
            >
              Try it now
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
            <Link 
              to={link} 
              className="text-gray-700 font-semibold hover:text-purple-600 transition-colors flex items-center gap-2"
            >
              Learn More
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
    </div>
  );
};
