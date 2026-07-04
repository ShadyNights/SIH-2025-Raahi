import React from 'react';

const HelpDeskBlockchain = ({ onBack }) => {
  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-[#FF8F00] to-[#FF6B35]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      
      {/* Sticky Header */}
      <div className="sticky top-0 bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] z-10 p-4 pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={onBack}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
              </svg>
            </button>
            <div>
              <span className="text-white font-bold text-lg">RAAHI</span>
              <p className="text-white/80 text-sm">Help Desk</p>
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
      <div className="bg-white rounded-t-[25px] px-6 pt-8 pb-24 min-h-full">
        
        {/* Question Title */}
        <h1 className="text-[28px] font-bold text-gray-800 mb-8 leading-tight">
          Is my data secure on blockchain?
        </h1>

        {/* Blockchain Security Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32 bg-gradient-to-br from-orange-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            {/* Blockchain Network Visualization */}
            <div className="relative w-24 h-24">
              {/* Central Shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V16H8V11H9.2V10C9.2,8.6 10.6,7 12,7Z"/>
                  </svg>
                </div>
              </div>
              
              {/* Connected Nodes */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute top-2 right-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute bottom-2 left-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 96 96">
                <line x1="48" y1="12" x2="48" y2="36" stroke="white" strokeWidth="1" opacity="0.6"/>
                <line x1="48" y1="60" x2="48" y2="84" stroke="white" strokeWidth="1" opacity="0.6"/>
                <line x1="12" y1="48" x2="36" y2="48" stroke="white" strokeWidth="1" opacity="0.6"/>
                <line x1="60" y1="48" x2="84" y2="48" stroke="white" strokeWidth="1" opacity="0.6"/>
                <line x1="20" y1="20" x2="36" y2="36" stroke="white" strokeWidth="1" opacity="0.6"/>
                <line x1="76" y1="76" x2="60" y2="60" stroke="white" strokeWidth="1" opacity="0.6"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Security Features List */}
        <div className="space-y-6">
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-blue-600 font-bold text-sm">1.</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Decenclzized Ledger:</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your data distributed, not stored or one place.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-green-600 font-bold text-sm">2.</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Encryption:</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All personal information, securely encrypted.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-purple-600 font-bold text-sm">4.</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Immuttble Records:</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transactions & IDS are tamper-proof
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-orange-600 font-bold text-sm">5.</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Transparency:</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Verify own & manage acegrity without revealing details
              </p>
            </div>
          </div>
        </div>

        {/* Additional Security Information */}
        <div className="mt-8 space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">🔐 Advanced Encryption</h3>
            <p className="text-sm text-blue-700">Your personal data is protected using military-grade encryption standards.</p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">🛡️ Zero Knowledge Proofs</h3>
            <p className="text-sm text-green-700">Verify your identity without exposing sensitive information.</p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-purple-800 mb-2">⚡ Smart Contracts</h3>
            <p className="text-sm text-purple-700">Automated security protocols ensure data integrity at all times.</p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[390px] h-[80px] bg-gradient-to-r from-[#FF9223] via-[#FF7635] to-[#FF6B35] rounded-t-[25px] flex justify-around items-center shadow-2xl z-50">
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
          <span className="text-white text-xs ml-1">Home</span>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          </svg>
          <span className="text-white text-xs ml-1">Map</span>
        </div>
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span className="text-white text-xs ml-1">Offline Mode</span>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
          </svg>
          <span className="text-white text-xs ml-1">Ssattende</span>
        </div>
      </nav>
    </div>
  );
};

export default HelpDeskBlockchain;