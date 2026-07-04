// App.jsx
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="w-[961px] h-[1491px] mx-auto bg-gradient-to-b from-[#FFF8E7] to-[#FFFFFF] relative overflow-hidden font-inter">
      
      {/* Header Section - Exact Match */}
      <header className="relative h-[390px] bg-gradient-to-b from-[#FFF8E7] via-[#FFF5E1] to-[#FFE8C8] overflow-hidden">
        
        {/* Taj Mahal Silhouette Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,182,146,0.2)] to-[rgba(255,182,146,0.4)]">
          <svg viewBox="0 0 961 390" className="w-full h-full absolute bottom-0">
            {/* Background Palace Silhouette */}
            <defs>
              <linearGradient id="palaceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6"/>
                <stop offset="50%" stopColor="#B8860B" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#996515" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
            
            {/* Left Palace Complex */}
            <rect x="50" y="180" width="120" height="210" fill="url(#palaceGradient)" opacity="0.7"/>
            <rect x="70" y="160" width="80" height="30" fill="url(#palaceGradient)" opacity="0.6"/>
            <circle cx="110" cy="160" r="20" fill="url(#palaceGradient)" opacity="0.6"/>
            
            {/* Left Minarets */}
            <rect x="40" y="140" width="15" height="250" fill="url(#palaceGradient)" opacity="0.5"/>
            <rect x="175" y="140" width="15" height="250" fill="url(#palaceGradient)" opacity="0.5"/>
            <circle cx="47" cy="140" r="8" fill="url(#palaceGradient)" opacity="0.5"/>
            <circle cx="182" cy="140" r="8" fill="url(#palaceGradient)" opacity="0.5"/>
            
            {/* Central Taj Mahal */}
            <rect x="380" y="120" width="200" height="270" fill="url(#palaceGradient)" opacity="0.8"/>
            <ellipse cx="480" cy="120" rx="60" ry="80" fill="url(#palaceGradient)" opacity="0.9"/>
            
            {/* Central Minarets */}
            <rect x="350" y="100" width="20" height="290" fill="url(#palaceGradient)" opacity="0.7"/>
            <rect x="590" y="100" width="20" height="290" fill="url(#palaceGradient)" opacity="0.7"/>
            <circle cx="360" cy="100" r="12" fill="url(#palaceGradient)" opacity="0.7"/>
            <circle cx="600" cy="100" r="12" fill="url(#palaceGradient)" opacity="0.7"/>
            
            {/* Side Buildings */}
            <rect x="300" y="160" width="50" height="230" fill="url(#palaceGradient)" opacity="0.6"/>
            <rect x="610" y="160" width="50" height="230" fill="url(#palaceGradient)" opacity="0.6"/>
            
            {/* Right Palace Complex */}
            <rect x="700" y="180" width="150" height="210" fill="url(#palaceGradient)" opacity="0.7"/>
            <rect x="720" y="160" width="110" height="30" fill="url(#palaceGradient)" opacity="0.6"/>
            <circle cx="775" cy="160" r="25" fill="url(#palaceGradient)" opacity="0.6"/>
            
            {/* Right Minarets */}
            <rect x="690" y="140" width="15" height="250" fill="url(#palaceGradient)" opacity="0.5"/>
            <rect x="860" y="140" width="15" height="250" fill="url(#palaceGradient)" opacity="0.5"/>
            <circle cx="697" cy="140" r="8" fill="url(#palaceGradient)" opacity="0.5"/>
            <circle cx="867" cy="140" r="8" fill="url(#palaceGradient)" opacity="0.5"/>
          </svg>
        </div>

        {/* Top Navigation Bar */}
        <div className="relative z-20 flex justify-between items-start px-6 pt-6">
          
          {/* Left - Logo and Brand */}
          <div className="flex items-center gap-4">
            {/* Lotus Logo */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8F00] flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 2 7 6 7 12C7 16.97 9.03 19 12 19C14.97 19 17 16.97 17 12C17 6 12 2 12 2Z"/>
                <path d="M12 2C12 2 17 6 17 12C17 16.97 14.97 19 12 19C9.03 19 7 16.97 7 12C7 6 12 2 12 2Z" opacity="0.7"/>
                <path d="M12 4C12 4 8.5 7 8.5 11.5C8.5 15.47 10.53 17.5 12 17.5C13.47 17.5 15.5 15.47 15.5 11.5C15.5 7 12 4 12 4Z" opacity="0.5"/>
              </svg>
            </div>
            
            {/* Brand Text */}
            <div className="leading-none">
              <h1 className="text-[52px] font-black text-[#FF6B35] tracking-[3px] leading-[0.8] mb-1">RAHHI</h1>
              <p className="text-[15px] font-bold text-[#FF6B35] tracking-[2px] leading-tight">WELCOME TO INDIA</p>
            </div>
          </div>

          {/* Right - Notification and Menu */}
          <div className="flex items-center gap-5">
            {/* Notification Bell */}
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF4500] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                </svg>
              </div>
              {/* Red Notification Badge */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#FF0000] to-[#DC143C] rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-[11px] font-bold">1</span>
              </div>
            </div>
            
            {/* Hamburger Menu */}
            <div className="flex flex-col justify-between w-8 h-6">
              <div className="w-full h-[3px] bg-gradient-to-r from-[#FF6B35] to-[#FF8F00] rounded-full"></div>
              <div className="w-full h-[3px] bg-gradient-to-r from-[#FF6B35] to-[#FF8F00] rounded-full"></div>
              <div className="w-full h-[3px] bg-gradient-to-r from-[#FF6B35] to-[#FF8F00] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* QR Code - Top Right */}
        <div className="absolute top-[140px] right-6 w-[130px] h-[130px] bg-white border-2 border-gray-300 rounded-xl p-3 shadow-lg">
          <div className="w-full h-full bg-black rounded-md grid grid-cols-10 gap-[1px] p-1">
            {/* QR Pattern */}
            {Array.from({length: 100}, (_, i) => (
              <div 
                key={i}
                className={`${
                  [0,1,2,7,8,9,10,11,12,17,18,19,20,21,27,28,29,70,71,72,77,78,79,80,81,82,87,88,89,90,91,92,97,98,99].includes(i) 
                    ? 'bg-black' : 'bg-white'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Indira AI Button - Bottom Left */}
        <div className="absolute bottom-8 left-6 bg-white/95 backdrop-blur-sm rounded-[30px] px-7 py-4 flex items-center gap-3 shadow-xl border-2 border-[#FF6B35]/30">
          {/* Lotus Icon */}
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8F00] flex items-center justify-center">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 7 6 7 12C7 16.97 9.03 19 12 19C14.97 19 17 16.97 17 12C17 6 12 2 12 2Z"/>
            </svg>
          </div>
          <span className="text-[17px] font-semibold text-[#FF6B35] tracking-wide">indira AI</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8 bg-gradient-to-b from-white to-[#FFFBF7] relative">
        
        {/* User Greeting */}
        <div className="mb-10">
          <h2 className="text-[38px] font-bold text-gray-800 mb-2 leading-tight">Hello Noone</h2>
          <p className="text-[17px] text-gray-600 font-medium">Travel id - trav2Steel</p>
        </div>

        {/* Safety Score - Top Right */}
        <div className="absolute top-10 right-12 text-center">
          <div className="relative w-[110px] h-[110px] mb-3">
            {/* Outer Ring */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 110 110">
              <circle cx="55" cy="55" r="45" stroke="#E8E8E8" strokeWidth="10" fill="none"/>
              <circle 
                cx="55" 
                cy="55" 
                r="45" 
                stroke="url(#scoreGradient)" 
                strokeWidth="10" 
                fill="none"
                strokeDasharray={`${50 * 2.83} ${100 * 2.83}`} 
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF6B35"/>
                  <stop offset="100%" stopColor="#FF8F00"/>
                </linearGradient>
              </defs>
            </svg>
            {/* Score Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[26px] font-bold text-gray-800">50%</span>
            </div>
          </div>
          <div className="text-[15px] font-semibold text-[#8B4513]">Safety Score</div>
        </div>

        {/* Feature Buttons */}
        <div className="flex justify-between items-center px-10 mb-14 mt-8">
          
          {/* Planner */}
          <div className="flex flex-col items-center gap-5">
            <div className="w-[85px] h-[85px] rounded-full bg-gradient-to-br from-[#00BFFF] to-[#1E90FF] flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
              </svg>
            </div>
            <span className="text-[17px] font-semibold text-gray-800">Planner</span>
          </div>

          {/* SOS */}
          <div className="flex flex-col items-center gap-5">
            <div className="relative w-[85px] h-[85px] rounded-full bg-gradient-to-br from-[#FF0000] to-[#DC143C] flex items-center justify-center shadow-xl">
              {/* Pulsing Rings */}
              <div className="absolute w-[105px] h-[105px] border-4 border-red-300/60 rounded-full animate-ping"></div>
              <div className="absolute w-[125px] h-[125px] border-3 border-red-200/40 rounded-full animate-ping animation-delay-500"></div>
              {/* SOS Text */}
              <span className="text-[19px] font-black text-white z-10 tracking-wider">SOS</span>
            </div>
            <span className="text-[19px] font-bold text-[#FF0000]">SOS</span>
          </div>

          {/* Zone */}
          <div className="flex flex-col items-center gap-5">
            <div className="w-[85px] h-[85px] rounded-full bg-gradient-to-br from-[#00FF7F] to-[#32CD32] flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform">
              <svg className="w-11 h-11 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            </div>
            <span className="text-[17px] font-semibold text-gray-800">Zone</span>
          </div>
        </div>

        {/* Travel History */}
        <div className="bg-white rounded-[25px] border-3 border-[#FF6B35] p-7 shadow-lg">
          <h3 className="text-[24px] font-bold text-gray-800 text-center mb-8">Travel History</h3>
          
          <div className="space-y-5">
            
            {/* Waterfall Entry */}
            <div className="flex items-center py-4 border-b border-gray-100 last:border-b-0">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mr-5 shadow-md">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[19px] font-semibold text-gray-800 mb-1">Waterfall</div>
                <div className="text-[15px] text-gray-500">xxxxxxxxxxxx</div>
              </div>
              <div className="text-[15px] text-gray-600 font-medium">Today - 2:20 PM</div>
            </div>

            {/* Temple Entry */}
            <div className="flex items-center py-4 border-b border-gray-100 last:border-b-0">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mr-5 shadow-md">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L8 5v4H4v2h1v9h3v-6h4v6h3v-9h1V9h-4V5L12 1z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[19px] font-semibold text-gray-800 mb-1">Temple</div>
                <div className="text-[15px] text-gray-500">xxxxxxxxxxxx</div>
              </div>
              <div className="text-[15px] text-gray-600 font-medium">July 13 - 2:23 PM</div>
            </div>

            {/* Hotel Entry */}
            <div className="flex items-center py-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mr-5 shadow-md">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[19px] font-semibold text-gray-800 mb-1">Hotel</div>
                <div className="text-[15px] text-gray-500">xxxxxxxxxxxx</div>
              </div>
              <div className="text-[15px] text-gray-600 font-medium">July 27 - 9:20 PM</div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 h-[110px] bg-gradient-to-r from-[#FF9223] via-[#FF7635] to-[#FF6B35] rounded-t-[30px] flex justify-around items-center shadow-2xl">
        
        {/* Home - Active */}
        <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>

        {/* Map */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center">
          <svg className="w-9 h-9 text-white/90" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>

        {/* WiFi */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center">
          <svg className="w-9 h-9 text-white/90" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
          </svg>
        </div>

        {/* Profile */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center">
          <svg className="w-9 h-9 text-white/90" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default App;
