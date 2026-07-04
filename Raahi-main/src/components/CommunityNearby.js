import React, { useState } from 'react';

const CommunityNearby = ({ onBack }) => {
  const [searchText, setSearchText] = useState('');
  const [travelers] = useState([
    { id: 1, name: 'Rohan Verma', distance: '2.5 km away', avatar: '🟢', online: true },
    { id: 2, name: 'Priya Sharma', distance: '2.5 km away', avatar: '🟠', online: true },
    { id: 3, name: 'Amit Sharma', distance: '2.5 km away', avatar: '🔴', online: true },
    { id: 4, name: 'Amit Patel', distance: '2.5 km away', avatar: '🟡', online: true },
    { id: 5, name: 'Sneha Reddy', distance: '2.5 km away', avatar: '🟢', online: true },
    { id: 6, name: 'Sneha Reddy', distance: '1.5 km away', avatar: '🔵', online: true },
    { id: 7, name: 'Rohan Verma', distance: '3.0 km away', avatar: '🟤', online: true },
    { id: 8, name: 'Kavya Singh', distance: '1.8 km away', avatar: '🟣', online: true },
  ]);

  const filteredTravelers = travelers.filter(traveler =>
    traveler.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-[#FF8F00] to-[#FF6B35]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      
      {/* Sticky Header */}
      <div className="sticky top-0 bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] z-10 p-4 pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
            </svg>
            <div>
              <span className="text-white font-bold text-lg">RAAHI</span>
              <p className="text-white/80 text-sm">Secure Journeys</p>
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
      <div className="bg-white rounded-t-[25px] px-4 pt-6 pb-24 min-h-full">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Travelers Nearby</h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Travelers"
            className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Travelers List */}
        <div className="space-y-3">
          {filteredTravelers.map((traveler) => (
            <div
              key={traveler.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {/* Avatar with colorful pattern */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-sm"></div>
                  <div className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-sm"></div>
                  <div className="absolute bottom-1 left-1 w-2 h-2 bg-yellow-400 rounded-sm"></div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800">{traveler.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>{traveler.distance}</span>
                  </div>
                </div>
              </div>
              
              {/* Online Status */}
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content for Better Scrolling */}
        <div className="mt-8 space-y-4">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-semibold text-orange-800 mb-2">🤝 Connect with Travelers</h3>
            <p className="text-sm text-orange-700">Find fellow travelers nearby and share your journey experiences safely.</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">🛡️ Privacy First</h3>
            <p className="text-sm text-blue-700">Your location is shared securely and only with verified travelers.</p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[390px] h-[80px] bg-gradient-to-r from-[#FF9223] via-[#FF7635] to-[#FF6B35] rounded-t-[25px] flex justify-around items-center shadow-2xl z-50">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" onClick={onBack}>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">Offline Mode</span>
        </div>
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h2c0 .55-.45 1-1 1h-2v6H4z"/>
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

export default CommunityNearby;
