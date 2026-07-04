import React from 'react';

const HelpDeskSOS = ({ onBack }) => {
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
          How SOS works?
        </h1>

        {/* SOS Illustration */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <div className="flex justify-center mb-6">
            {/* Emergency Bell */}
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
            </div>
          </div>
          
          {/* Communication Flow */}
          <div className="flex justify-between items-center">
            {/* Satellite Dish */}
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z"/>
                </svg>
              </div>
            </div>
            
            {/* Location Pin */}
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
            </div>
            
            {/* Location Marker */}
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="space-y-6">
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-red-600 font-bold text-sm">1.</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Tap & Hold for 3 Seconds</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Press and hold the SOS button on your app for 3 seconds to activate emergency mode.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-blue-600 font-bold text-sm">2.</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Auto-sends Location & Pre-typed Message</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your current location and a pre-configured help message are automatically sent to emergency contacts.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-green-600 font-bold text-sm">3.</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Notifies Nerarby Authorities & Community</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Local police, medical services, and nearby RAAHI community members are alerted instantly.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-orange-600 font-bold text-sm">4.</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Medical Emergency? Call Ambulance (Offline Supported)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                For medical emergencies, ambulance services are contacted automatically. Works even without internet connectivity.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Safety Information */}
        <div className="mt-8 space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-2">🚨 Emergency Contacts</h3>
            <p className="text-sm text-red-700">Make sure to add trusted emergency contacts in your profile for faster response.</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">📍 Location Services</h3>
            <p className="text-sm text-blue-700">Keep location services enabled for accurate emergency response coordination.</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">🏥 Medical Information</h3>
            <p className="text-sm text-green-700">Add your medical conditions and allergies for better emergency medical care.</p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-semibold text-orange-800 mb-2">📱 Offline Mode</h3>
            <p className="text-sm text-orange-700">SOS functionality works even without internet using satellite connectivity and SMS.</p>
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

export default HelpDeskSOS;