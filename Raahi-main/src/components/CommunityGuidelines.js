import React from 'react';

const CommunityGuidelines = ({ onBack }) => {
  const guidelines = [
    {
      id: 1,
      title: "Be Respectful & Helpful",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20,2H4C2.89,2 2,2.89 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"/>
        </svg>
      ),
      rightIcon: (
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Ensure Safety First",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,11H7v2h2v-2zm4,0h-2v2h2v-2zm4,0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5C3.11,4 2.3,4.84 2.03,6H1v2h1.03C2.3,9.16 3.11,10 5,10h1v2h2v-2h8v2h2v-2h1c1.89,0 2.7-.84 2.97-2H23V6h-1.03C21.7,4.84 20.89,4 19,4z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Respect Privacy",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,11H7v2h2v-2zm4,0h-2v2h2v-2zm4,0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5C3.11,4 2.3,4.84 2.03,6H1v2h1.03C2.3,9.16 3.11,10 5,10h1v2h2v-2h8v2h2v-2h1c1.89,0 2.7-.84 2.97-2H23V6h-1.03C21.7,4.84 20.89,4 19,4z"/>
        </svg>
      ),
      rightIcon: (
        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "No Spam or Promotions",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,11H7v2h2v-2zm4,0h-2v2h2v-2zm4,0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5C3.11,4 2.3,4.84 2.03,6H1v2h1.03C2.3,9.16 3.11,10 5,10h1v2h2v-2h8v2h2v-2h1c1.89,0 2.7-.84 2.97-2H23V6h-1.03C21.7,4.84 20.89,4 19,4z"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Report Concerns",
      icon: (
        <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">5</span>
        </div>
      )
    }
  ];

  return (
    <div className="h-full overflow-y-auto bg-white" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      
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
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
                </svg>
              </div>
              <span className="font-semibold">Community Guidelines</span>
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
      <div className="p-6 pb-24">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Community Guidelines</h1>

        {/* Guidelines List */}
        <div className="space-y-4">
          {guidelines.map((guideline) => (
            <div 
              key={guideline.id} 
              className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                {/* Number Badge */}
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  {guideline.id === 5 ? (
                    <span className="text-white text-sm font-bold">5</span>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                    </svg>
                  )}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                  {guideline.icon}
                </div>

                {/* Title */}
                <span className="font-semibold text-gray-800">{guideline.title}</span>
              </div>

              {/* Right Icon */}
              {guideline.rightIcon && (
                <div className="flex-shrink-0">
                  {guideline.rightIcon}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h3 className="font-semibold text-orange-800 mb-2">Why These Guidelines Matter</h3>
          <p className="text-sm text-orange-700 leading-relaxed">
            Our community guidelines ensure a safe, respectful, and helpful environment for all travelers. 
            By following these guidelines, we create a trusted space where everyone can share experiences 
            and get reliable travel advice.
          </p>
        </div>

        <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">Reporting Issues</h3>
          <p className="text-sm text-blue-700 leading-relaxed">
            If you encounter any behavior that violates these guidelines, please use the report function 
            or contact our support team. We review all reports promptly and take appropriate action.
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
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default CommunityGuidelines;