// src/App.js - Complete with Full-Page Hamburger Menu
import React, { useState } from 'react';
import './App.css';

// Import all components
import SOSComponent from './components/SOSComponent';
import IndiraAI from './components/IndiraAI';
import ZoneMap from './components/ZoneMap';
import Settings from './components/Settings';
import Notifications from './components/Notifications';
import CommunityNearby from './components/CommunityNearby';
import HelpDeskBlockchain from './components/HelpDeskBlockchain';
import HelpDeskSOS from './components/HelpDeskSOS';
import SafetyScore from './components/SafetyScore';
import HelpDesk from './components/HelpDesk';
import MyPlanner from './components/MyPlanner';
import OfflineMode from './components/OfflineMode';
import MyWallet from './components/MyWallet';
import GettingStarted from './components/GettingStarted';
import WelcomeOnboarding from './components/WelcomeOnboarding';
import SafetyZoneInfo from './components/SafetyZoneInfo';
import CommunityGuidelines from './components/CommunityGuidelines';
import ProfileManagement from './components/ProfileManagement';
import LiveTranslator from './components/LiveTranslator';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeTab, setActiveTab] = useState('home');
  const [showPlanner, setShowPlanner] = useState(false);
  const [showSOS, setShowSOS] = useState(false);
  const [showZone, setShowZone] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [pageHistory, setPageHistory] = useState(['home']);

  const handleSOS = () => {
    setShowSOS(true);
    navigateToPage('sos');
  };

  const handlePlanner = () => {
    setShowPlanner(true);
    navigateToPage('my-planner');
    setTimeout(() => setShowPlanner(false), 2000);
  };

  const handleZone = () => {
    setShowZone(true);
    navigateToPage('map');
  };

  // Enhanced navigation with history
  const navigateToPage = (page) => {
    if (page !== currentPage) {
      setPageHistory(prev => [...prev, page]);
      setCurrentPage(page);
      setShowHamburgerMenu(false);
    }
  };

  // Back button functionality
  const handleBackButton = () => {
    if (pageHistory.length > 1) {
      const newHistory = [...pageHistory];
      newHistory.pop();
      const previousPage = newHistory[newHistory.length - 1];
      setPageHistory(newHistory);
      setCurrentPage(previousPage);
      setActiveTab(previousPage === 'home' ? 'home' : activeTab);
    }
  };

  // Handle hamburger menu
  const handleHamburgerClick = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const closeHamburgerMenu = () => {
    setShowHamburgerMenu(false);
  };

  const renderUniversalNavbar = () => (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[390px] h-[80px] bg-gradient-to-r from-[#FF9223] via-[#FF7635] to-[#FF6B35] rounded-t-[25px] flex justify-around items-center shadow-2xl z-50">
      
      {/* 1. Home */}
      <div 
        className={`flex flex-col items-center justify-center cursor-pointer transition-all p-2 rounded-lg ${activeTab === 'home' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'}`}
        onClick={() => { setActiveTab('home'); navigateToPage('home'); }}
      >
        <svg className="w-6 h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
        <span className="text-white text-xs font-medium">Home</span>
      </div>

      {/* 2. Community */}
      <div 
        className={`flex flex-col items-center justify-center cursor-pointer transition-all p-2 rounded-lg ${activeTab === 'community' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'}`}
        onClick={() => { setActiveTab('community'); navigateToPage('community'); }}
      >
        <svg className="w-6 h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h2c0 .55-.45 1-1 1h-2v6H4z"/>
        </svg>
        <span className="text-white text-xs font-medium">Community</span>
      </div>

      {/* 3. Offline Mode (Center) */}
      <div 
        className={`flex flex-col items-center justify-center cursor-pointer transition-all p-2 rounded-lg ${activeTab === 'offline' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'}`}
        onClick={() => { setActiveTab('offline'); navigateToPage('offline-mode'); }}
      >
        <svg className="w-6 h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
          <circle cx="12" cy="12" r="2" fill="#FF6B35"/>
        </svg>
        <span className="text-white text-xs font-medium">Offline</span>
      </div>

      {/* 4. Wallet */}
      <div 
        className={`flex flex-col items-center justify-center cursor-pointer transition-all p-2 rounded-lg ${activeTab === 'wallet' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'}`}
        onClick={() => { setActiveTab('wallet'); navigateToPage('my-wallet'); }}
      >
        <svg className="w-6 h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
        <span className="text-white text-xs font-medium">Wallet</span>
      </div>

      {/* 5. Live Translator */}
      <div 
        className={`flex flex-col items-center justify-center cursor-pointer transition-all p-2 rounded-lg ${activeTab === 'translator' ? 'bg-white/25 backdrop-blur-sm' : 'hover:bg-white/15'}`}
        onClick={() => { setActiveTab('translator'); navigateToPage('live-translator'); }}
      >
        <svg className="w-6 h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04z"/>
        </svg>
        <span className="text-white text-xs font-medium">Translator</span>
      </div>
    </nav>
  );

  // Full-Page Hamburger Menu Component
  const renderFullPageHamburgerMenu = () => (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-400 to-red-500 z-[100] animate-slide-in">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={closeHamburgerMenu}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <div className="text-white">
              <h1 className="font-bold text-lg">RAAHI Menu</h1>
              <p className="text-white/80 text-sm">Choose your destination</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pb-24 h-full overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        
        {/* Main Categories */}
        <div className="mb-8">
          <h2 className="text-white text-lg font-bold mb-4">Main Features</h2>
          <div className="grid grid-cols-1 gap-4">
            
            <button
              onClick={() => navigateToPage('settings')}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-lg">Settings</h3>
                <p className="text-white/70 text-sm">App preferences & configuration</p>
              </div>
              <svg className="w-5 h-5 text-white/60 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>

            <button
              onClick={() => navigateToPage('profile-management')}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-lg">Profile Management</h3>
                <p className="text-white/70 text-sm">Your personal travel profile</p>
              </div>
              <svg className="w-5 h-5 text-white/60 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>

            <button
              onClick={() => navigateToPage('safety-score')}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold text-lg">Safety Score</h3>
                <p className="text-white/70 text-sm">Your current safety rating</p>
              </div>
              <svg className="w-5 h-5 text-white/60 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Help & Support */}
        <div className="mb-8">
          <h2 className="text-white text-lg font-bold mb-4">Help & Support</h2>
          <div className="grid grid-cols-1 gap-4">
            
            <button
              onClick={() => navigateToPage('help-sos')}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🆘</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold">SOS Guide</h3>
                <p className="text-white/70 text-sm">Emergency help instructions</p>
              </div>
              <svg className="w-5 h-5 text-white/60 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>

            <button
              onClick={() => navigateToPage('help-blockchain')}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔐</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold">Blockchain Security</h3>
                <p className="text-white/70 text-sm">Advanced security features</p>
              </div>
              <svg className="w-5 h-5 text-white/60 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>

            <button
              onClick={() => navigateToPage('help-desk')}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">❓</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold">Help Desk</h3>
                <p className="text-white/70 text-sm">General support & FAQs</p>
              </div>
              <svg className="w-5 h-5 text-white/60 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Community & Guidelines */}
        <div className="mb-8">
          <h2 className="text-white text-lg font-bold mb-4">Community</h2>
          <div className="grid grid-cols-1 gap-4">
            
            <button
              onClick={() => navigateToPage('community')}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold">Community</h3>
                <p className="text-white/70 text-sm">Connect with fellow travelers</p>
              </div>
              <svg className="w-5 h-5 text-white/60 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>

            <button
              onClick={() => navigateToPage('community-guidelines')}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold">Community Guidelines</h3>
                <p className="text-white/70 text-sm">Rules & best practices</p>
              </div>
              <svg className="w-5 h-5 text-white/60 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mb-8">
          <h2 className="text-white text-lg font-bold mb-4">Getting Started</h2>
          <div className="grid grid-cols-1 gap-4">
            
            <button
              onClick={() => navigateToPage('getting-started')}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold">Getting Started</h3>
                <p className="text-white/70 text-sm">App tutorial & first steps</p>
              </div>
              <svg className="w-5 h-5 text-white/60 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>

            <button
              onClick={() => navigateToPage('welcome')}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold">Welcome Guide</h3>
                <p className="text-white/70 text-sm">Introduction to India travel</p>
              </div>
              <svg className="w-5 h-5 text-white/60 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>

            <button
              onClick={() => navigateToPage('safety-zone-info')}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold">Safety Zone Info</h3>
                <p className="text-white/70 text-sm">Safety information & zones</p>
              </div>
              <svg className="w-5 h-5 text-white/60 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* About & Contact */}
        <div className="mb-8">
          <h2 className="text-white text-lg font-bold mb-4">About</h2>
          <div className="grid grid-cols-1 gap-4">
            
            <button
              onClick={() => alert(`RAAHI Travel App v2.0.0

Your trusted companion for safe travel in India.

Developed with ❤️ for travelers worldwide.`)}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">ℹ️</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold">About RAAHI</h3>
                <p className="text-white/70 text-sm">App info & version details</p>
              </div>
              <svg className="w-5 h-5 text-white/60 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>

            <button
              onClick={() => alert(`Contact RAAHI Support

📧 Email: support@raahi.com
📞 Phone: +91-1800-RAAHI
🌐 Website: www.raahi.com

We're here to help 24/7!`)}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-semibold">Contact Support</h3>
                <p className="text-white/70 text-sm">Get help from our team</p>
              </div>
              <svg className="w-5 h-5 text-white/60 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Same as main app */}
      {renderUniversalNavbar()}
    </div>
  );

  const renderPage = () => {
    // Show full-page hamburger menu if active
    if (showHamburgerMenu) {
      return renderFullPageHamburgerMenu();
    }

    switch (currentPage) {
      case 'sos':
        return <SOSComponent onBack={handleBackButton} />;
      case 'ai':
        return <IndiraAI onBack={handleBackButton} />;
      case 'map':
        return <ZoneMap onBack={handleBackButton} />;
      case 'settings':
        return <Settings onBack={handleBackButton} />;
      case 'notifications':
        return <Notifications onBack={handleBackButton} />;
      case 'community':
        return <CommunityNearby onBack={handleBackButton} />;
      case 'help-blockchain':
        return <HelpDeskBlockchain onBack={handleBackButton} />;
      case 'help-sos':
        return <HelpDeskSOS onBack={handleBackButton} />;
      case 'safety-score':
        return <SafetyScore onBack={handleBackButton} />;
      case 'help-desk':
        return <HelpDesk onBack={handleBackButton} navigateToPage={navigateToPage} />;
      case 'my-planner':
        return <MyPlanner onBack={handleBackButton} />;
      case 'offline-mode':
        return <OfflineMode onBack={handleBackButton} />;
      case 'my-wallet':
        return <MyWallet onBack={handleBackButton} />;
      case 'getting-started':
        return <GettingStarted onBack={handleBackButton} />;
      case 'welcome':
        return <WelcomeOnboarding onBack={handleBackButton} />;
      case 'safety-zone-info':
        return <SafetyZoneInfo onBack={handleBackButton} />;
      case 'community-guidelines':
        return <CommunityGuidelines onBack={handleBackButton} />;
      case 'profile-management':
        return <ProfileManagement onBack={handleBackButton} />;
      case 'live-translator':
        return <LiveTranslator onBack={handleBackButton} />;
      default:
        return (
          <div className="h-full overflow-y-auto pb-[90px]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            {/* Home Header Section */}
            <header className="relative h-[320px] bg-gradient-to-b from-[#FFF8E7] via-[#FFF5E1] to-[#FFE8C8] overflow-hidden">
              
              {/* Taj Mahal Silhouette Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,182,146,0.2)] to-[rgba(255,182,146,0.4)]">
                <svg viewBox="0 0 390 320" className="w-full h-full absolute bottom-0">
                  <defs>
                    <linearGradient id="palaceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6"/>
                      <stop offset="50%" stopColor="#B8860B" stopOpacity="0.7"/>
                      <stop offset="100%" stopColor="#996515" stopOpacity="0.8"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Central Taj Mahal */}
                  <rect x="155" y="80" width="80" height="240" fill="url(#palaceGradient)" opacity="0.8"/>
                  <ellipse cx="195" cy="80" rx="25" ry="35" fill="url(#palaceGradient)" opacity="0.9"/>
                  
                  {/* Central Minarets */}
                  <rect x="140" y="60" width="8" height="260" fill="url(#palaceGradient)" opacity="0.7"/>
                  <rect x="242" y="60" width="8" height="260" fill="url(#palaceGradient)" opacity="0.7"/>
                  <circle cx="144" cy="60" r="5" fill="url(#palaceGradient)" opacity="0.7"/>
                  <circle cx="246" cy="60" r="5" fill="url(#palaceGradient)" opacity="0.7"/>
                  
                  {/* Side Buildings */}
                  <rect x="120" y="120" width="20" height="200" fill="url(#palaceGradient)" opacity="0.6"/>
                  <rect x="250" y="120" width="20" height="200" fill="url(#palaceGradient)" opacity="0.6"/>
                </svg>
              </div>

              {/* Top Section - Logo and Controls */}
              <div className="relative z-20 flex justify-between items-start px-5 pt-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8F00] flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
                    </svg>
                  </div>
                  
                  {/* Brand Text */}
                  <div className="leading-none">
                    <h1 className="text-[36px] font-black text-[#FF6B35] tracking-[2px] leading-[0.85] mb-1">RAHHI</h1>
                    <p className="text-[11px] font-bold text-[#FF6B35] tracking-[1px] leading-tight">WELCOME TO INDIA</p>
                  </div>
                </div>

                {/* Right Controls - Only on Home Page */}
                <div className="flex items-center gap-4">
                  {/* Notification Bell */}
                  <div className="relative">
                    <div 
                      className="w-11 h-11 bg-gradient-to-br from-[#FF6B35] to-[#FF4500] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer"
                      onClick={() => navigateToPage('notifications')}
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-[#FF0000] to-[#DC143C] rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white text-[10px] font-bold">1</span>
                    </div>
                  </div>
                  
                  {/* Hamburger Menu Button - Opens Full Page */}
                  <div 
                    className="flex flex-col justify-between w-7 h-5 cursor-pointer hover:scale-105 transition-transform"
                    onClick={handleHamburgerClick}
                  >
                    <div className="w-full h-[3px] bg-gradient-to-r from-[#FF6B35] to-[#FF8F00] rounded-full"></div>
                    <div className="w-full h-[3px] bg-gradient-to-r from-[#FF6B35] to-[#FF8F00] rounded-full"></div>
                    <div className="w-full h-[3px] bg-gradient-to-r from-[#FF6B35] to-[#FF8F00] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Indira AI Button */}
              <div 
                className="absolute bottom-6 left-5 bg-white/95 backdrop-blur-sm rounded-[25px] px-6 py-3 flex items-center gap-3 shadow-xl border-2 border-[#FF6B35]/30 hover:scale-105 transition-transform cursor-pointer"
                onClick={() => navigateToPage('ai')}
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8F00] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
                  </svg>
                </div>
                <span className="text-[15px] font-semibold text-[#FF6B35] tracking-wide">indira AI</span>
              </div>
            </header>

            {/* Main Content - Rest of home page content */}
            <main className="px-5 py-6 bg-gradient-to-b from-white to-[#FFFBF7] relative">
              
              {/* User Greeting */}
              <div className="mb-4">
                <h2 className="text-[32px] font-bold text-gray-800 mb-1 leading-tight">Hello Noone</h2>
                <p className="text-[16px] text-gray-600 font-medium">Travel id - trav2Steel</p>
              </div>

              {/* Safety Score */}
              <div className="absolute top-4 right-6 text-center cursor-pointer" onClick={() => navigateToPage('safety-score')}>
                <div className="relative w-[90px] h-[90px] mb-2 hover:scale-105 transition-transform">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 90 90">
                    <circle cx="45" cy="45" r="35" stroke="#E8E8E8" strokeWidth="8" fill="none"/>
                    <circle 
                      cx="45" 
                      cy="45" 
                      r="35" 
                      stroke="url(#scoreGradient)" 
                      strokeWidth="8" 
                      fill="none"
                      strokeDasharray={`${50 * 2.2} ${100 * 2.2}`} 
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF6B35"/>
                        <stop offset="100%" stopColor="#FF8F00"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[20px] font-bold text-gray-800">50%</span>
                  </div>
                </div>
                <div className="text-[12px] font-semibold text-[#8B4513] text-center leading-tight">Safety Score</div>
              </div>

              {/* Feature Buttons */}
              <div className="flex justify-between items-start px-8 mb-8 mt-8">
                
                {/* Planner */}
                <div className="flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-transform mt-4" 
                     onClick={handlePlanner}>
                  <div className={`w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#00BFFF] to-[#1E90FF] flex items-center justify-center shadow-xl ${showPlanner ? 'animate-bounce' : ''}`}>
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  </div>
                  <span className="text-[14px] font-semibold text-gray-800">Planner</span>
                </div>

                {/* SOS */}
                <div className="flex flex-col items-center gap-4 cursor-pointer -mt-2" onClick={handleSOS}>
                  <div className={`relative w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#FF0000] to-[#DC143C] flex items-center justify-center shadow-xl ${showSOS ? 'animate-pulse' : ''}`}>
                    <div className="absolute w-[85px] h-[85px] border-4 border-red-300/60 rounded-full animate-ping"></div>
                    <div className="absolute w-[100px] h-[100px] border-3 border-red-200/40 rounded-full animate-ping animation-delay-500"></div>
                    <span className="text-[16px] font-black text-white z-10 tracking-wider">SOS</span>
                  </div>
                  <span className="text-[16px] font-bold text-[#FF0000]">SOS</span>
                </div>

                {/* Zone */}
                <div className="flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-transform mt-4" 
                     onClick={handleZone}>
                  <div className={`w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#00FF7F] to-[#32CD32] flex items-center justify-center shadow-xl ${showZone ? 'animate-spin' : ''}`}>
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" opacity="0.8"/>
                    </svg>
                  </div>
                  <span className="text-[14px] font-semibold text-gray-800">Zone</span>
                </div>
              </div>

              {/* Travel History */}
              <div className="bg-white rounded-[25px] border-3 border-[#FF6B35] p-6 shadow-lg mb-6 mt-6">
                <h3 className="text-[20px] font-bold text-gray-800 text-center mb-6">Travel History</h3>
                
                <div className="space-y-4">
                  
                  {/* Waterfall Entry */}
                  <div className="flex items-center py-4 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-3 transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mr-4 shadow-md">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                        <path d="M10 16l2-3 2 3-2 3z" opacity="0.7"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-[17px] font-semibold text-gray-800 mb-1">Waterfall</div>
                      <div className="text-[13px] text-gray-500">Beautiful cascade in the mountains</div>
                    </div>
                    <div className="text-[13px] text-gray-600 font-medium">Today - 2:20 PM</div>
                  </div>

                  {/* Temple Entry */}
                  <div className="flex items-center py-4 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-3 transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mr-4 shadow-md">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 3.5l6 6V19h-2v-6H8v6H6v-8.5l6-6z"/>
                        <circle cx="12" cy="8" r="1.5" fill="white" opacity="0.8"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-[17px] font-semibold text-gray-800 mb-1">Temple</div>
                      <div className="text-[13px] text-gray-500">Sacred heritage site visit</div>
                    </div>
                    <div className="text-[13px] text-gray-600 font-medium">July 13 - 2:23 PM</div>
                  </div>

                  {/* Hotel Entry */}
                  <div className="flex items-center py-4 hover:bg-gray-50 rounded-lg px-3 transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mr-4 shadow-md">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
                        <rect x="14" y="10" width="2" height="2" fill="white" opacity="0.8"/>
                        <rect x="17" y="10" width="2" height="2" fill="white" opacity="0.8"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-[17px] font-semibold text-gray-800 mb-1">Hotel</div>
                      <div className="text-[13px] text-gray-500">Luxury accommodation stay</div>
                    </div>
                    <div className="text-[13px] text-gray-600 font-medium">July 27 - 9:20 PM</div>
                  </div>
                </div>
              </div>

              {/* Trip Summary */}
              <div className="bg-white/50 rounded-[20px] p-6 mb-6">
                <h4 className="text-[18px] font-semibold text-gray-800 mb-4">Trip Summary</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                    <div className="text-[24px] font-bold text-blue-600 mb-1">3</div>
                    <p className="text-[12px] font-medium text-gray-700">Places Visited</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg text-center">
                    <div className="text-[24px] font-bold text-green-600 mb-1">50%</div>
                    <p className="text-[12px] font-medium text-gray-700">Safety Rating</p>
                  </div>
                </div>
              </div>

              {/* Quick Access Menu */}
              <div className="bg-white rounded-[20px] p-6 mb-6 shadow-lg">
                <h4 className="text-[18px] font-semibold text-gray-800 mb-4">Quick Access</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    onClick={() => navigateToPage('community')}
                  >
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h2c0 .55-.45 1-1 1h-2v6H4z"/>
                    </svg>
                    <span className="text-sm font-medium text-blue-800">Community</span>
                  </button>
                  
                  <button 
                    className="flex items-center gap-3 p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
                    onClick={() => navigateToPage('help-desk')}
                  >
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
                    </svg>
                    <span className="text-sm font-medium text-orange-800">Help</span>
                  </button>
                </div>
              </div>

              {/* Footer spacing */}
              <div className="h-4"></div>
            </main>
          </div>
        );
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#FFF8E7] to-[#FFFFFF] flex items-center justify-center">
      <div className="w-[390px] h-screen bg-gradient-to-b from-[#FFF8E7] to-[#FFFFFF] relative overflow-hidden shadow-2xl">
        
        {renderPage()}
        
        {/* Universal Navigation - Always render unless hamburger menu is active */}
        {!showHamburgerMenu && renderUniversalNavbar()}
      </div>
    </div>
  );
};

export default App;
