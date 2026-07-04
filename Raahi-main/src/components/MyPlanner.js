import React, { useState } from 'react';

const MyPlanner = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('overview'); // 'overview' or 'scrollable'

  const upcomingTrips = [
    {
      id: 1,
      image: '/api/placeholder/300/200',
      title: 'Agra & Delhi',
      dates: 'Nov 15 - 20, 2024',
      type: 'AI Crafted',
      status: 'Manual'
    }
  ];

  // Only define pastTrips when it's actually used (for overview view)
  const overviewPastTrips = [
    {
      id: 1,
      image: '/api/placeholder/300/200',
      title: 'Leh Ladakh',
      subtitle: 'Adventure',
      type: 'Manual',
      dates: 'Jul 01 - 10, 2025'
    }
  ];

  // Past trips for scrollable view
  const scrollablePastTrips = [
    {
      id: 1,
      image: '/api/placeholder/300/200',
      title: 'Jaipor',
      dates: 'Jul 01 - 10, 2025'
    },
    {
      id: 2,
      image: '/api/placeholder/300/200',
      title: 'Jaipor Heritage',
      dates: 'Jul 01 - 10, 2025'
    }
  ];

  const manualPlans = [
    {
      id: 1,
      title: 'New Delhi City Walk',
      dates: 'Jul 01 - 10, 2025',
      icon: '🚶‍♂️'
    },
    {
      id: 2,
      title: 'Ambitar Golden Temple',
      subtitle: 'Varaana Ghats & Ganga',
      dates: 'Jul 01 - 10, 2025',
      icon: '🏛️'
    }
  ];

  const renderOverview = () => (
    <div className="pb-24">
      {/* Plan New Trip Button */}
      <div className="mb-6">
        <button className="w-full bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] text-white p-4 rounded-lg flex items-center gap-3 shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
          </svg>
          <span className="font-semibold">Plan a New Trip with Indira AI</span>
        </button>
      </div>

      {/* Upcoming Plans */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Plans</h2>
        
        {upcomingTrips.map((trip) => (
          <div key={trip.id} className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
            <div className="flex">
              <div className="w-24 h-24 bg-gray-200 rounded-lg m-3">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23e5e7eb'/%3E%3Cpath d='M150 50h80v100h-80V50z' fill='%23d4af37' opacity='0.8'/%3E%3Ccircle cx='190' cy='50' r='15' fill='%23d4af37' opacity='0.9'/%3E%3C/svg%3E"
                  alt="Taj Mahal"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{trip.type}</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{trip.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{trip.dates}</p>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">{trip.status}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Past Trips */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Past Trips</h2>
        
        {overviewPastTrips.map((trip) => (
          <div key={trip.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg m-3">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%236366f1'/%3E%3Cpath d='M50 150l50-30 50-20 50-10 50-20v60H50z' fill='%234f46e5' opacity='0.8'/%3E%3Cpath d='M100 100l30-20 40-10 30-15v45l-30 15-40 10-30 20z' fill='%23fff' opacity='0.3'/%3E%3C/svg%3E"
                  alt="Mountains"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">{trip.type}</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{trip.title}</h3>
                <p className="text-sm text-gray-600">{trip.subtitle}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">{trip.type}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderScrollable = () => (
    <div className="pb-24">
      {/* Plan New Trip Button */}
      <div className="mb-6">
        <button className="w-full bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] text-white p-4 rounded-lg flex items-center gap-3 shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
          </svg>
          <span className="font-semibold">Plan a New Trip with Indira AI</span>
        </button>
      </div>

      {/* Past Trips Grid */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Past Trips</h2>
        
        <div className="grid grid-cols-2 gap-4">
          {scrollablePastTrips.map((trip) => (
            <div key={trip.id} className="bg-amber-100 rounded-lg overflow-hidden">
              <div className="h-24 bg-gradient-to-br from-amber-400 to-orange-500 relative">
                <img 
                  src={trip.id === 1 
                    ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23f59e0b'/%3E%3Crect x='70' y='40' width='60' height='70' fill='%23d97706' opacity='0.8'/%3E%3Ccircle cx='100' cy='40' r='15' fill='%23d97706' opacity='0.9'/%3E%3C/svg%3E"
                    : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23f59e0b'/%3E%3Crect x='60' y='30' width='80' height='90' fill='%23d97706' opacity='0.8'/%3E%3Ccircle cx='100' cy='30' r='20' fill='%23d97706' opacity='0.9'/%3E%3C/svg%3E"
                  }
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-800 text-sm">{trip.title}</h3>
                <p className="text-xs text-gray-600">{trip.dates}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plan Manually */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Plan Manually</h2>
        
        <div className="space-y-3">
          {manualPlans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg">{plan.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">{plan.title}</h3>
                  {plan.subtitle && (
                    <p className="text-xs text-gray-600">{plan.subtitle}</p>
                  )}
                  <p className="text-xs text-gray-500">{plan.dates}</p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] text-white px-4 py-2 rounded-full text-xs font-semibold">
                Start Plan
              </button>
            </div>
          ))}
        </div>
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
            <div>
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6-.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
              </svg>
              <div>
                <span className="text-white font-bold text-lg">RAAHI</span>
                <p className="text-white/80 text-sm">Secure Journeys, Enriched Experiences</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
            </div>
            <div className="flex flex-col justify-between w-6 h-4">
              <div className="w-full h-[2px] bg-white rounded-full"></div>
              <div className="w-full h-[2px] bg-white rounded-full"></div>
              <div className="w-full h-[2px] bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentView('overview')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentView === 'overview'
                ? 'bg-white/25 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            My Planner (Overview)
          </button>
          <button
            onClick={() => setCurrentView('scrollable')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentView === 'scrollable'
                ? 'bg-white/25 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            My Planner (Scrollable View)
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-t-[25px] px-4 pt-6 min-h-full">
        {currentView === 'overview' ? renderOverview() : renderScrollable()}
      </div>

      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[390px] h-[80px] bg-gradient-to-r from-[#FF9223] via-[#FF7635] to-[#FF6B35] rounded-t-[25px] flex justify-around items-center shadow-2xl z-50">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" onClick={onBack}>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
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

export default MyPlanner;
