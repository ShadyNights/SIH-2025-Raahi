import React, { useState } from 'react';

const ProfileManagement = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('main'); // 'main' or 'profile'

  const renderMainView = () => (
    <div className="pb-24">
      {/* Profile Header */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <div className="flex items-start gap-4">
          {/* Profile Picture & QR */}
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            
            {/* QR Code */}
            <div className="w-20 h-20 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center relative">
              <div className="grid grid-cols-6 gap-[1px] w-16 h-16">
                {/* QR Pattern */}
                {Array.from({ length: 36 }, (_, i) => (
                  <div 
                    key={i} 
                    className={`w-full h-full ${
                      [0,1,2,4,5,6,7,8,12,13,14,18,19,20,24,25,26,30,31,32,33,34,35].includes(i) 
                        ? 'bg-black' 
                        : 'bg-white'
                    }`}
                  />
                ))}
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">ID</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-bold text-gray-800">Hello Noone</h2>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">KYC Verified</span>
            </div>
            <p className="text-gray-600">Travel ID: trav2Steel</p>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <span className="text-gray-700">Date & Birth</span>
            </div>
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              </svg>
              <span className="text-gray-700">Nationality</span>
            </div>
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Documents */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Documents</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              <span className="text-gray-700 font-medium">Passport</span>
            </div>
            <button className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold">
              View
            </button>
          </div>

          <div className="text-center py-2">
            <p className="text-sm text-gray-500">Manage documents in Wallet</p>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="text-gray-700 font-medium">Mobile</span>
            </div>
            <button className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfileView = () => (
    <div className="pb-24">
      {/* Profile Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
      </div>

      {/* Basic Info */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
              </svg>
              <div>
                <p className="font-medium text-gray-800">Name</p>
                <p className="text-sm text-gray-600">Date | Birth</p>
              </div>
            </div>
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/>
              </svg>
              <div>
                <p className="font-medium text-gray-800">Passport</p>
                <p className="text-sm text-gray-600">Nationality</p>
              </div>
            </div>
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2Z"/>
              </svg>
              <span className="font-medium text-gray-800">Mobile</span>
            </div>
          </div>
        </div>
      </div>

      {/* Family & Health Details */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Family & Health Details</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2Z"/>
              </svg>
              <div>
                <p className="font-medium text-gray-800">Emergency Contact</p>
                <p className="text-sm text-gray-600">View/Add</p>
              </div>
            </div>
            <button className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold">
              View/Add
            </button>
          </div>

          <div className="flex items-center gap-3 py-2">
            <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,13H13V17H11V13H7V11H11V7H13V11H17V13Z"/>
            </svg>
            <div>
              <p className="font-medium text-gray-800">Blood Type</p>
              <p className="text-sm text-gray-600">Medical Conditions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="text-center">
        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">
          Logout
        </button>
      </div>
    </div>
  );

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
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
                </svg>
              </div>
              <span className="font-bold text-lg">RAAHI</span>
            </div>
          </div>
          <div className="flex flex-col justify-between w-6 h-4">
            <div className="w-full h-[2px] bg-white rounded-full"></div>
            <div className="w-full h-[2px] bg-white rounded-full"></div>
            <div className="w-full h-[2px] bg-white rounded-full"></div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentView('main')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentView === 'main'
                ? 'bg-white/25 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            Main Profile
          </button>
          <button
            onClick={() => setCurrentView('profile')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentView === 'profile'
                ? 'bg-white/25 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            Profile Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-t-[25px] px-4 pt-6 min-h-full">
        {currentView === 'main' ? renderMainView() : renderProfileView()}
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
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default ProfileManagement;
