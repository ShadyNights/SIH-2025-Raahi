import React from 'react';

const SafetyZoneInfo = ({ onBack }) => {
  return (
    <div className="h-full overflow-y-auto bg-gray-800" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] p-4 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
              </svg>
            </button>
            <div className="flex items-center gap-2 text-white">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">R</span>
              </div>
              <span className="font-semibold">RAAHI / Help Desk</span>
            </div>
          </div>
          <div className="flex flex-col justify-between w-6 h-4">
            <div className="w-full h-[2px] bg-white rounded-full"></div>
            <div className="w-full h-[2px] bg-white rounded-full"></div>
            <div className="w-full h-[2px] bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-white">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-8">What is Safety Zone?</h1>

        {/* Safety Zone Visual */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-48">
            {/* Outer Circle */}
            <div className="absolute inset-0 border-4 border-gray-600 rounded-full"></div>
            
            {/* Safety Zones */}
            <div className="absolute inset-4 rounded-full overflow-hidden">
              {/* Green Zone (Safe) */}
              <div className="absolute bottom-2 right-2 w-16 h-16 bg-green-500 rounded-full opacity-80"></div>
              
              {/* Yellow Zone (Caution) */}
              <div className="absolute top-4 right-8 w-20 h-20 bg-yellow-500 rounded-full opacity-80"></div>
              
              {/* Red Zone (Danger) */}
              <div className="absolute top-8 left-4 w-18 h-18 bg-red-500 rounded-full opacity-80"></div>
              
              {/* Zone Labels */}
              <div className="absolute bottom-0 right-0 text-xs bg-black/50 px-2 py-1 rounded text-white">Safe Zone</div>
              <div className="absolute top-2 right-4 text-xs bg-black/50 px-2 py-1 rounded text-white">Caution Zone</div>
              <div className="absolute top-4 left-0 text-xs bg-black/50 px-2 py-1 rounded text-white">Septic Zone</div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-4 text-left">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm font-bold">1</span>
            </div>
            <p className="text-gray-300 leading-relaxed">Uses real-time data & local reports</p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm font-bold">2</span>
            </div>
            <p className="text-gray-300 leading-relaxed">Green: Safe & Recommended Areas</p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm font-bold">3</span>
            </div>
            <p className="text-gray-300 leading-relaxed">Yellow: Caution - Monitor Surroundings</p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm font-bold">4</span>
            </div>
            <p className="text-gray-300 leading-relaxed">Red: High-Risk - Avoid Entry</p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm font-bold">5</span>
            </div>
            <p className="text-gray-300 leading-relaxed">Updates dynamically based on conditions</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-700 rounded-lg p-4 mt-8">
          <h3 className="font-semibold mb-2 text-orange-400">How it Works:</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Our AI analyzes crime data, weather conditions, local events, and community reports 
            to provide real-time safety assessments for every location you visit.
          </p>
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[390px] h-[80px] bg-gradient-to-r from-[#FF9223] via-[#FF7635] to-[#FF6B35] rounded-t-[25px] flex justify-around items-center shadow-2xl z-50">
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg" onClick={onBack}>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default SafetyZoneInfo;
