import React from 'react';

const WelcomeOnboarding = ({ onBack }) => {
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-[#FF8F00] to-[#FF6B35]">
      
      {/* Hero Image Section */}
      <div className="flex-1 relative overflow-hidden">
        {/* Background Illustration */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-500">
          {/* Taj Mahal Silhouette */}
          <svg viewBox="0 0 400 600" className="w-full h-full absolute">
            {/* Sky Gradient */}
            <defs>
              <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFE4B5" stopOpacity="0.9"/>
                <stop offset="50%" stopColor="#FFB347" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.7"/>
              </linearGradient>
              <linearGradient id="monumentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B4513" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#654321" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
            
            {/* Sky */}
            <rect width="400" height="400" fill="url(#skyGradient)"/>
            
            {/* Sun */}
            <circle cx="300" cy="100" r="40" fill="#FFFF99" opacity="0.8"/>
            
            {/* Flying Birds */}
            <path d="M100 80 L105 85 L110 80 M115 82 L120 87 L125 82 M130 85 L135 90 L140 85" 
                  stroke="#8B4513" strokeWidth="2" fill="none" opacity="0.7"/>
            
            {/* Taj Mahal */}
            <rect x="160" y="300" width="80" height="150" fill="url(#monumentGradient)"/>
            <ellipse cx="200" cy="300" rx="25" ry="35" fill="url(#monumentGradient)"/>
            
            {/* Minarets */}
            <rect x="145" y="280" width="8" height="170" fill="url(#monumentGradient)"/>
            <rect x="247" y="280" width="8" height="170" fill="url(#monumentGradient)"/>
            <circle cx="149" cy="280" r="4" fill="url(#monumentGradient)"/>
            <circle cx="251" cy="280" r="4" fill="url(#monumentGradient)"/>
            
            {/* Mountains */}
            <path d="M0 350 L60 280 L120 320 L180 260 L240 300 L300 240 L360 280 L400 320 L400 450 L0 450 Z" 
                  fill="url(#monumentGradient)" opacity="0.5"/>
            
            {/* Path/Road */}
            <path d="M200 450 Q180 420 160 400 Q140 380 120 370 Q100 365 80 370 Q60 375 50 385 L50 450 Z" 
                  fill="#D2691E" opacity="0.6"/>
          </svg>
          
          {/* Traveler Figure */}
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-32 relative">
              {/* Backpack */}
              <div className="absolute top-2 left-6 w-8 h-12 bg-purple-800 rounded-lg opacity-80"></div>
              
              {/* Body */}
              <div className="absolute top-8 left-7 w-6 h-16 bg-orange-600 rounded-lg"></div>
              
              {/* Head */}
              <div className="absolute top-4 left-8 w-4 h-4 bg-amber-700 rounded-full"></div>
              
              {/* Hair */}
              <div className="absolute top-3 left-7 w-6 h-4 bg-black rounded-t-full opacity-80"></div>
              
              {/* Arms */}
              <div className="absolute top-12 left-5 w-3 h-8 bg-orange-600 rounded-lg transform -rotate-12"></div>
              <div className="absolute top-12 left-12 w-3 h-8 bg-orange-600 rounded-lg transform rotate-12"></div>
              
              {/* Legs */}
              <div className="absolute top-22 left-7 w-2 h-10 bg-blue-800 rounded-lg"></div>
              <div className="absolute top-22 left-11 w-2 h-10 bg-blue-800 rounded-lg"></div>
              
              {/* Phone in hand */}
              <div className="absolute top-16 left-13 w-2 h-3 bg-black rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-t-[30px] p-8 pb-24">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FF6B35] to-[#FF8F00] rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-2">RAAHI</h1>
          <p className="text-lg text-gray-600 font-medium">Secure Journeys</p>
          <p className="text-lg text-gray-600 font-medium mb-6">Secure Journeys, Enriched Experiences</p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={onBack}
            className="bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center mx-auto gap-2"
          >
            Embark on Your Adventure
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L10.17 18 16.17 12 10.17 6 8.59 7.41 13.17 12z"/>
            </svg>
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/>
              </svg>
            </div>
            <p className="text-xs font-medium text-gray-700">Safe Travel</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              </svg>
            </div>
            <p className="text-xs font-medium text-gray-700">Smart Maps</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h2c0 .55-.45 1-1 1h-2v6H4z"/>
              </svg>
            </div>
            <p className="text-xs font-medium text-gray-700">Community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOnboarding;
