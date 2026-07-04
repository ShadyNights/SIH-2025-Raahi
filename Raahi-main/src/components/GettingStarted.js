import React from 'react';

const GettingStarted = ({ onBack }) => {
  const steps = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z"/>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" opacity="0.7"/>
        </svg>
      ),
      title: "Download & Register:",
      description: "Create your secure Digital ID"
    },
    {
      id: 2,
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" opacity="0.7"/>
        </svg>
      ),
      title: "Setup Profile & SOS:",
      description: "Add contacts & safe zones"
    },
    {
      id: 3,
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5z"/>
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" opacity="0.7"/>
        </svg>
      ),
      title: "Explore & Monitor:",
      description: "Use maps & AI safety"
    },
    {
      id: 4,
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c2.21 0 4 1.79 4 4 0 1.89-1.32 3.47-3.08 3.87L14.56 12H16c.55 0 1 .45 1 1s-.45 1-1 1h-2.44l1.64 2.13C15.68 16.53 17 15.11 17 14c0-.55.45-1 1-1s1 .45 1 1c0 2.21-1.79 4-4 4-1.11 0-2.11-.45-2.83-1.17L9.83 19.17c-.39.39-.9.58-1.41.58s-1.02-.19-1.41-.58L5.59 17.76c-.78-.78-.78-2.05 0-2.83l1.42-1.42c.39-.39.9-.58 1.41-.58s1.02.19 1.41.58L12 15.68V12H9.56l1.64-2.13C11.89 9.47 12 8.76 12 8c0-2.21 1.79-4 4-4z"/>
        </svg>
      ),
      title: "Connect & Share:",
      description: "Join traveler community"
    }
  ];

  return (
    <div className="h-full overflow-y-auto bg-white" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      
      {/* Header */}
      <div className="bg-gray-50 p-4 pt-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={onBack}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border"
          >
            <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold">RAAHI</span>
            <span className="text-gray-600">/</span>
            <span className="text-gray-600">Help Desk</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Getting Started</h1>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              {/* Icon Circle */}
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#FF8F00] to-[#FF6B35] rounded-full flex items-center justify-center border-4 border-orange-200">
                {step.icon}
              </div>
              
              {/* Step Content */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                  {step.id}. {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Get Started Button */}
        <div className="text-center mb-6">
          <button className="bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">
            Start Your Journey
          </button>
        </div>

        {/* Additional Help */}
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <h4 className="font-semibold text-gray-800 mb-2">Need Help?</h4>
          <p className="text-sm text-gray-600 mb-3">Contact our support team for assistance</p>
          <div className="flex gap-2 justify-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Live Chat
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Call Support
            </button>
          </div>
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
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
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

export default GettingStarted;
