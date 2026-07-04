import React, { useState } from 'react';

const Notifications = ({ onBack }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [notifications] = useState([
    {
      id: 1,
      type: 'emergency',
      title: 'EMERGENCY ALERT: High-Risk Zone',
      subtitle: 'Detected Near Your Location',
      time: 'Just now',
      icon: '🚨',
      priority: true
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message:',
      subtitle: 'Reminder to upload travel insurance',
      time: '5m ago',
      icon: '🔔',
      priority: false
    },
    {
      id: 3,
      type: 'message',
      title: 'New Mesdate:',
      subtitle: 'You entered travel Zone',
      time: '5h ago',
      icon: '🔔',
      priority: false
    },
    {
      id: 4,
      type: 'activity',
      title: 'Activity Update:',
      subtitle: 'You entered a four a Safe Zone',
      time: '2h ago',
      icon: '🔔',
      priority: false
    },
    {
      id: 5,
      type: 'system',
      title: 'System Update:',
      subtitle: 'New features added!',
      time: 'Yesterday',
      icon: '⚙️',
      priority: false
    },
    {
      id: 6,
      type: 'community',
      title: 'Community',
      subtitle: '',
      time: 'Just now',
      icon: '👤',
      priority: false
    },
    {
      id: 7,
      type: 'community',
      title: 'Community:',
      subtitle: 'Rohan Verma is near you',
      time: 'Yeh ago',
      icon: '👤',
      priority: false
    },
    {
      id: 8,
      type: 'planner',
      title: 'Planner',
      subtitle: 'Your Agme e1te time',
      time: 'July 20',
      icon: '👤',
      priority: false
    },
    {
      id: 9,
      type: 'planner',
      title: 'Planner:',
      subtitle: 'Review your Agra trip itentiary',
      time: 'July 20',
      icon: '📅',
      priority: false
    },
    {
      id: 10,
      type: 'welcome',
      title: 'Welcome Guide:',
      subtitle: 'Your app ready!',
      time: 'July 15',
      icon: '💬',
      priority: false
    }
  ]);

  const filterOptions = ['All', 'Emergency', 'Messages'];

  const filteredNotifications = notifications.filter(notification => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Emergency') return notification.type === 'emergency';
    if (activeFilter === 'Messages') return ['message', 'community', 'planner', 'welcome'].includes(notification.type);
    return true;
  });

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
              <p className="text-white/80 text-sm">Secure Journeys, Enriched Experiences</p>
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
      <div className="bg-gray-100 rounded-t-[25px] px-4 pt-6 pb-24 min-h-full">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Notifications</h1>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {filterOptions.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-[#FF6B35] text-white'
                  : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg shadow-sm transition-colors cursor-pointer ${
                notification.priority
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              {notification.priority ? (
                // Emergency Alert Layout
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{notification.title}</h3>
                    <p className="text-white/90 text-sm mt-1">{notification.subtitle}</p>
                  </div>
                  <span className="text-white/80 text-xs">{notification.time}</span>
                </div>
              ) : (
                // Regular Notification Layout
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-semibold text-gray-800">{notification.title}</span>
                        {notification.subtitle && (
                          <span className="text-gray-600 ml-1">{notification.subtitle}</span>
                        )}
                      </div>
                      <span className="text-gray-500 text-xs ml-2 flex-shrink-0">{notification.time}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Special Sections */}
          <div className="mt-4 text-gray-500 text-sm">
            <p>Eomd Imam</p>
          </div>

          <div className="mt-4 text-gray-500 text-sm">
            <p>Flint dmlau</p>
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
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
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

export default Notifications;
