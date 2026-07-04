// src/components/HelpDesk.js - Complete Help Desk with Working Navigation
import React, { useState } from 'react';

const HelpDesk = ({ onBack, navigateToPage }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);

  const helpOptions = [
    {
      id: 1,
      title: 'Live Chat',
      subtitle: 'Chat with support agent',
      icon: '💬',
      color: 'from-blue-500 to-blue-600',
      action: () => setShowChatbot(true)
    },
    {
      id: 2,
      title: 'Call Helpline',
      subtitle: 'Speak to our team',
      icon: '📞',
      color: 'from-red-500 to-red-600',
      action: () => window.open('tel:+911234567890')
    },
    {
      id: 3,
      title: 'Email Support',
      subtitle: 'Send us an email',
      icon: '✉️',
      color: 'from-green-500 to-green-600',
      action: () => window.open('mailto:support@raahi.com')
    },
    {
      id: 4,
      title: 'Getting Started',
      subtitle: 'App setup guide',
      icon: '🚀',
      color: 'from-purple-500 to-purple-600',
      action: () => navigateToPage('getting-started')
    },
    {
      id: 5,
      title: 'Map & Zones',
      subtitle: 'Safety zones guide',
      icon: '🗺️',
      color: 'from-orange-500 to-orange-600',
      action: () => navigateToPage('safety-zone-info')
    },
    {
      id: 6,
      title: 'Digital ID & Wallet',
      subtitle: 'Manage documents',
      icon: '🛡️',
      color: 'from-teal-500 to-teal-600',
      action: () => navigateToPage('my-wallet')
    },
    {
      id: 7,
      title: 'Offline Mode',
      subtitle: 'Work without internet',
      icon: '📡',
      color: 'from-indigo-500 to-indigo-600',
      action: () => navigateToPage('offline-mode')
    },
    {
      id: 8,
      title: 'SOS Features',
      subtitle: 'Emergency help',
      icon: '🆘',
      color: 'from-red-600 to-red-700',
      action: () => navigateToPage('help-sos')
    },
    {
      id: 9,
      title: 'Chat with Indira AI',
      subtitle: 'AI assistant help',
      icon: '🤖',
      color: 'from-cyan-500 to-cyan-600',
      action: () => navigateToPage('ai')
    },
    {
      id: 10,
      title: 'Community Guidelines',
      subtitle: 'Community rules',
      icon: '👥',
      color: 'from-pink-500 to-pink-600',
      action: () => navigateToPage('community-guidelines')
    },
    {
      id: 11,
      title: 'Blockchain Security',
      subtitle: 'Security features',
      icon: '🔐',
      color: 'from-violet-500 to-violet-600',
      action: () => navigateToPage('help-blockchain')
    },
    {
      id: 12,
      title: 'Safety Score',
      subtitle: 'Understanding scores',
      icon: '📊',
      color: 'from-emerald-500 to-emerald-600',
      action: () => navigateToPage('safety-score')
    }
  ];

  const filteredOptions = helpOptions.filter(option =>
    option.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    option.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderChatbot = () => (
    <div className="pb-24">
      <div className="bg-white rounded-lg shadow-lg">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">RAAHI Support</h3>
                <p className="text-white/80 text-sm">Online now</p>
              </div>
            </div>
            <button 
              onClick={() => setShowChatbot(false)}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-64 overflow-y-auto p-4 space-y-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">R</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-gray-800">Hello! I'm here to help you with RAAHI. What can I assist you with today?</p>
            </div>
          </div>
          
          <div className="flex gap-3 justify-end">
            <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[80%]">
              <p>Hi, I need help with setting up my profile.</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">R</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-gray-800">I'd be happy to help you set up your profile! You can access Profile Management from the hamburger menu on the home screen. Would you like me to guide you through the process?</p>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-2">
            <input 
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHelpOptions = () => (
    <div className="pb-24">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for help topics..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Quick Support Options */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Support Options</h3>
        <div className="grid grid-cols-1 gap-3">
          {filteredOptions.slice(0, 3).map((option) => (
            <button
              key={option.id}
              onClick={option.action}
              className={`w-full bg-gradient-to-r ${option.color} text-white p-4 rounded-lg flex items-center gap-4 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">
                {option.icon}
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-lg">{option.title}</h4>
                <p className="text-white/80">{option.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* All Help Topics */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Using the RAAHI App</h3>
        <div className="space-y-3">
          {filteredOptions.slice(3).map((option) => (
            <button
              key={option.id}
              onClick={option.action}
              className="w-full bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-300 transition-all flex items-center gap-3"
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${option.color} rounded-lg flex items-center justify-center text-white`}>
                {option.icon}
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-semibold text-gray-800">{option.title}</h4>
                <p className="text-gray-600 text-sm">{option.subtitle}</p>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L10.17 18 16.17 12 10.17 6 8.59 7.41 13.17 12z"/>
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-800 mb-3">Still Need Help?</h4>
        <div className="space-y-2 text-sm text-gray-600">
          <p>📧 Email: support@raahi.com</p>
          <p>📞 Phone: +91 123 456 7890</p>
          <p>🕒 Support Hours: 24/7</p>
          <p>💬 Average Response: Under 5 minutes</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full overflow-y-auto bg-gray-50" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] p-4 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => {
                if (showChatbot) setShowChatbot(false);
                else onBack();
              }}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
              </svg>
            </button>
            <div className="text-white">
              <h1 className="font-bold text-lg">{showChatbot ? 'Live Chat' : 'Help Desk'}</h1>
              <p className="text-white/80 text-sm">
                {showChatbot ? 'Chat with our support team' : 'Get help with RAAHI'}
              </p>
            </div>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {showChatbot ? renderChatbot() : renderHelpOptions()}
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
            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h2c0 .55-.45 1-1 1h-2v6H4z"/>
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

export default HelpDesk;
