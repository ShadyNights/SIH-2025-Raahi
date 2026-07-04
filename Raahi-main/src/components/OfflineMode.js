// src/components/OfflineMode.js - Enhanced with 5 Detailed Indian City Maps
import React, { useState } from 'react';

const OfflineMode = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('main'); // 'main', 'map', 'city-map'
  const [selectedCity, setSelectedCity] = useState(null);

  const languages = [
    { code: 'hi', name: 'Hindi', native: 'हिंदी' },
    { code: 'bn', name: 'Bengali', native: 'বাংলা' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
    { code: 'mr', name: 'Marathi', native: 'मराठी' },
    { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
    { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
    { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ' },
    { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
    { code: 'as', name: 'Assamese', native: 'অসমীয়া' },
    { code: 'ur', name: 'Urdu', native: 'اردو' },
  ];

  // Detailed city maps with landmarks, safety zones, and attractions
  const cityMaps = {
    delhi: {
      name: 'Delhi',
      color: '#FF6B35',
      viewBox: '0 0 400 400',
      landmarks: [
        { id: 1, name: 'Red Fort', x: 220, y: 180, type: 'monument', safety: 'safe' },
        { id: 2, name: 'India Gate', x: 200, y: 200, type: 'monument', safety: 'safe' },
        { id: 3, name: 'Qutub Minar', x: 160, y: 280, type: 'monument', safety: 'safe' },
        { id: 4, name: 'Lotus Temple', x: 250, y: 260, type: 'temple', safety: 'safe' },
        { id: 5, name: 'Chandni Chowk', x: 210, y: 170, type: 'market', safety: 'caution' },
        { id: 6, name: 'Connaught Place', x: 200, y: 190, type: 'commercial', safety: 'safe' },
        { id: 7, name: 'Karol Bagh', x: 180, y: 200, type: 'market', safety: 'caution' },
        { id: 8, name: 'Paharganj', x: 190, y: 185, type: 'hotel', safety: 'caution' }
      ],
      safetyZones: [
        { type: 'safe', areas: ['Central Delhi', 'New Delhi', 'South Delhi'] },
        { type: 'caution', areas: ['Old Delhi', 'East Delhi'] },
        { type: 'avoid', areas: ['Outer Delhi (Night)'] }
      ]
    },
    mumbai: {
      name: 'Mumbai',
      color: '#1E90FF',
      viewBox: '0 0 400 400',
      landmarks: [
        { id: 1, name: 'Gateway of India', x: 180, y: 320, type: 'monument', safety: 'safe' },
        { id: 2, name: 'Marine Drive', x: 160, y: 280, type: 'waterfront', safety: 'safe' },
        { id: 3, name: 'Chhatrapati Shivaji Terminus', x: 190, y: 300, type: 'station', safety: 'caution' },
        { id: 4, name: 'Juhu Beach', x: 140, y: 220, type: 'beach', safety: 'safe' },
        { id: 5, name: 'Bandra-Worli Sea Link', x: 150, y: 260, type: 'bridge', safety: 'safe' },
        { id: 6, name: 'Colaba', x: 175, y: 315, type: 'area', safety: 'safe' },
        { id: 7, name: 'Dharavi', x: 180, y: 240, type: 'area', safety: 'avoid' },
        { id: 8, name: 'Bollywood Studios', x: 200, y: 200, type: 'entertainment', safety: 'safe' }
      ],
      safetyZones: [
        { type: 'safe', areas: ['South Mumbai', 'Bandra', 'Juhu', 'Powai'] },
        { type: 'caution', areas: ['Dadar', 'Kurla', 'Central Line Stations'] },
        { type: 'avoid', areas: ['Dharavi', 'Some Eastern Suburbs (Night)'] }
      ]
    },
    bangalore: {
      name: 'Bangalore',
      color: '#32CD32',
      viewBox: '0 0 400 400',
      landmarks: [
        { id: 1, name: 'Lalbagh Gardens', x: 180, y: 220, type: 'garden', safety: 'safe' },
        { id: 2, name: 'Bangalore Palace', x: 160, y: 180, type: 'palace', safety: 'safe' },
        { id: 3, name: 'Cubbon Park', x: 190, y: 200, type: 'park', safety: 'safe' },
        { id: 4, name: 'UB City Mall', x: 195, y: 205, type: 'mall', safety: 'safe' },
        { id: 5, name: 'Electronic City', x: 200, y: 280, type: 'tech', safety: 'safe' },
        { id: 6, name: 'Koramangala', x: 210, y: 230, type: 'area', safety: 'safe' },
        { id: 7, name: 'Indiranagar', x: 220, y: 210, type: 'area', safety: 'safe' },
        { id: 8, name: 'MG Road', x: 200, y: 200, type: 'commercial', safety: 'safe' }
      ],
      safetyZones: [
        { type: 'safe', areas: ['Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City'] },
        { type: 'caution', areas: ['Shivajinagar', 'Chickpet'] },
        { type: 'avoid', areas: ['Some Outer Areas (Late Night)'] }
      ]
    },
    kolkata: {
      name: 'Kolkata',
      color: '#FFD700',
      viewBox: '0 0 400 400',
      landmarks: [
        { id: 1, name: 'Victoria Memorial', x: 200, y: 250, type: 'monument', safety: 'safe' },
        { id: 2, name: 'Howrah Bridge', x: 180, y: 200, type: 'bridge', safety: 'safe' },
        { id: 3, name: 'Dakshineswar Temple', x: 190, y: 150, type: 'temple', safety: 'safe' },
        { id: 4, name: 'Park Street', x: 200, y: 230, type: 'commercial', safety: 'safe' },
        { id: 5, name: 'New Market', x: 195, y: 240, type: 'market', safety: 'caution' },
        { id: 6, name: 'Salt Lake', x: 230, y: 180, type: 'area', safety: 'safe' },
        { id: 7, name: 'Esplanade', x: 190, y: 220, type: 'area', safety: 'caution' },
        { id: 8, name: 'Kalighat Temple', x: 200, y: 270, type: 'temple', safety: 'safe' }
      ],
      safetyZones: [
        { type: 'safe', areas: ['Salt Lake', 'Park Street', 'Ballygunge'] },
        { type: 'caution', areas: ['Esplanade', 'Sealdah', 'Some Central Areas'] },
        { type: 'avoid', areas: ['Some Industrial Areas (Night)'] }
      ]
    },
    chennai: {
      name: 'Chennai',
      color: '#FF1493',
      viewBox: '0 0 400 400',
      landmarks: [
        { id: 1, name: 'Marina Beach', x: 220, y: 300, type: 'beach', safety: 'safe' },
        { id: 2, name: 'Kapaleeshwarar Temple', x: 200, y: 280, type: 'temple', safety: 'safe' },
        { id: 3, name: 'Fort St. George', x: 210, y: 290, type: 'fort', safety: 'safe' },
        { id: 4, name: 'Express Avenue Mall', x: 190, y: 260, type: 'mall', safety: 'safe' },
        { id: 5, name: 'T. Nagar', x: 180, y: 270, type: 'shopping', safety: 'caution' },
        { id: 6, name: 'Anna Nagar', x: 170, y: 220, type: 'residential', safety: 'safe' },
        { id: 7, name: 'Velachery', x: 190, y: 320, type: 'area', safety: 'safe' },
        { id: 8, name: 'OMR Road', x: 250, y: 320, type: 'tech', safety: 'safe' }
      ],
      safetyZones: [
        { type: 'safe', areas: ['Anna Nagar', 'Velachery', 'OMR', 'Adyar'] },
        { type: 'caution', areas: ['T. Nagar', 'Central Chennai', 'Some Beach Areas (Night)'] },
        { type: 'avoid', areas: ['Some Northern Suburbs (Late Night)'] }
      ]
    }
  };

  const offlineFeatures = [
    {
      id: 1,
      title: 'Emergency SOS',
      subtitle: 'One-Tap Local Alert',
      icon: '🚨',
      color: 'from-red-400 to-red-600'
    },
    {
      id: 2,
      title: 'Safety Handbook',
      subtitle: 'Read Guide',
      icon: '📖',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 3,
      title: 'My Vitals & Health Info',
      subtitle: 'Emergency Medical Data',
      icon: '🏥',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 4,
      title: 'Offline Language Guide',
      subtitle: '12+ Indian Languages',
      icon: '🗣️',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 5,
      title: 'Important Documents',
      subtitle: 'Passport, ID, Tickets',
      icon: '📄',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const renderCityMap = (cityKey) => {
    const city = cityMaps[cityKey];
    
    return (
      <div className="pb-24">
        {/* City Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{city.name} City Map</h2>
          <p className="text-gray-600">Offline detailed map with safety zones</p>
        </div>

        {/* Detailed City Map */}
        <div className="bg-white rounded-lg p-4 mb-6 shadow-lg">
          <div className="w-full h-80 bg-gradient-to-b from-blue-50 to-green-50 rounded-lg relative overflow-hidden">
            <svg viewBox={city.viewBox} className="w-full h-full">
              <defs>
                <linearGradient id={`${cityKey}Gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={city.color} stopOpacity="0.3"/>
                  <stop offset="100%" stopColor={city.color} stopOpacity="0.1"/>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* City Base Shape */}
              <rect x="50" y="50" width="300" height="300" rx="20" fill={`url(#${cityKey}Gradient)`} stroke={city.color} strokeWidth="2"/>
              
              {/* Major Roads */}
              <line x1="50" y1="200" x2="350" y2="200" stroke="#666" strokeWidth="3" opacity="0.7"/>
              <line x1="200" y1="50" x2="200" y2="350" stroke="#666" strokeWidth="3" opacity="0.7"/>
              <line x1="100" y1="100" x2="300" y2="300" stroke="#666" strokeWidth="2" opacity="0.5"/>
              <line x1="300" y1="100" x2="100" y2="300" stroke="#666" strokeWidth="2" opacity="0.5"/>
              
              {/* Safety Zones */}
              {city.landmarks.map((landmark) => (
                <g key={landmark.id}>
                  {/* Safety Zone Circle */}
                  <circle 
                    cx={landmark.x} 
                    cy={landmark.y} 
                    r="15" 
                    fill={landmark.safety === 'safe' ? '#10B981' : landmark.safety === 'caution' ? '#F59E0B' : '#EF4444'}
                    opacity="0.3"
                  />
                  
                  {/* Landmark Point */}
                  <circle 
                    cx={landmark.x} 
                    cy={landmark.y} 
                    r="4" 
                    fill={landmark.safety === 'safe' ? '#059669' : landmark.safety === 'caution' ? '#D97706' : '#DC2626'}
                    filter="url(#glow)"
                  />
                  
                  {/* Landmark Label */}
                  <text 
                    x={landmark.x} 
                    y={landmark.y - 20} 
                    className="text-xs font-semibold fill-gray-700" 
                    textAnchor="middle"
                  >
                    {landmark.name}
                  </text>
                </g>
              ))}

              {/* City Name */}
              <text x="200" y="30" className="text-xl font-bold fill-gray-800" textAnchor="middle">
                {city.name}
              </text>
            </svg>
          </div>

          {/* Map Legend */}
          <div className="flex justify-around mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>Safe Areas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span>Caution Areas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span>Avoid Areas</span>
            </div>
          </div>
        </div>

        {/* Landmarks List */}
        <div className="bg-white rounded-lg p-4 mb-6 shadow-lg">
          <h3 className="font-semibold text-gray-800 mb-4">Key Landmarks</h3>
          <div className="grid grid-cols-1 gap-3 max-h-48 overflow-y-auto">
            {city.landmarks.map((landmark) => (
              <div key={landmark.id} className="flex items-center gap-3 p-2 border border-gray-200 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${
                  landmark.safety === 'safe' ? 'bg-green-500' : 
                  landmark.safety === 'caution' ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{landmark.name}</div>
                  <div className="text-xs text-gray-600 capitalize">{landmark.type}</div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${
                  landmark.safety === 'safe' ? 'bg-green-100 text-green-800' : 
                  landmark.safety === 'caution' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                }`}>
                  {landmark.safety}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Information */}
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <h3 className="font-semibold text-gray-800 mb-3">Safety Zone Information</h3>
          {city.safetyZones.map((zone, index) => (
            <div key={index} className="mb-3">
              <div className={`flex items-center gap-2 mb-2 font-medium ${
                zone.type === 'safe' ? 'text-green-700' : 
                zone.type === 'caution' ? 'text-yellow-700' : 'text-red-700'
              }`}>
                <div className={`w-3 h-3 rounded-full ${
                  zone.type === 'safe' ? 'bg-green-500' : 
                  zone.type === 'caution' ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                <span className="capitalize">{zone.type} Areas</span>
              </div>
              <div className="text-sm text-gray-600 ml-5">
                {zone.areas.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderMainView = () => (
    <div className="pb-24">
      {/* Offline Status */}
      <div className="text-center mb-8">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <div className="w-full h-full border-4 border-dashed border-orange-300 rounded-full animate-pulse flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                <path d="M12 12l8-8m-8 8l8 8m-8-8H4m8 0v8" stroke="#fff" strokeWidth="1"/>
              </svg>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">You are offline.</h2>
        <p className="text-gray-600">Limited features available.</p>
      </div>

      {/* Main Features */}
      <div className="space-y-4 mb-8">
        <button 
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl flex items-center gap-4 shadow-lg"
          onClick={() => setCurrentView('map')}
        >
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            </svg>
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-lg">Offline Maps</h3>
            <p className="text-white/80 text-sm">India + 5 City Maps with Safety Zones</p>
          </div>
        </button>

        <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4 rounded-xl flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04z"/>
            </svg>
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-lg">Offline Language Guide</h3>
            <p className="text-white/80 text-sm">12+ Indian Languages</p>
          </div>
        </button>

        <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-xl flex items-center gap-4 shadow-lg">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/>
            </svg>
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-lg">Important Documents</h3>
            <p className="text-white/80 text-sm">Secure Offline Access</p>
          </div>
        </button>
      </div>

      {/* Additional Features Grid */}
      <div className="grid grid-cols-1 gap-4">
        {offlineFeatures.map((feature) => (
          <div key={feature.id} className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-100">
            <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center text-white text-xl`}>
              {feature.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMapView = () => (
    <div className="pb-24">
      {/* Map Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Offline India Maps</h2>
        <p className="text-gray-600">Works without internet connection</p>
      </div>

      {/* India Overview Map */}
      <div className="bg-white rounded-lg p-4 mb-6 shadow-lg">
        <h3 className="font-semibold text-gray-800 mb-3">India Overview</h3>
        <div className="w-full h-48 bg-gradient-to-b from-blue-50 to-green-50 rounded-lg relative overflow-hidden">
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#FF8F00" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#FFB347" stopOpacity="0.4"/>
              </linearGradient>
            </defs>
            
            {/* India Outline */}
            <path d="M 100 50 L 150 40 L 200 45 L 250 60 L 300 80 L 320 120 L 310 160 L 290 200 L 250 230 L 200 240 L 150 235 L 100 220 L 80 180 L 70 140 L 75 100 Z" 
                  fill="url(#mapGradient)" stroke="#FF6B35" strokeWidth="2"/>
            
            {/* Major Cities - Clickable */}
            <g className="cursor-pointer" onClick={() => { setSelectedCity('delhi'); setCurrentView('city-map'); }}>
              <circle cx="120" cy="100" r="6" fill="#FF0000" opacity="0.8"/>
              <text x="130" y="105" className="text-xs fill-gray-700">Delhi</text>
            </g>
            
            <g className="cursor-pointer" onClick={() => { setSelectedCity('mumbai'); setCurrentView('city-map'); }}>
              <circle cx="160" cy="140" r="6" fill="#1E90FF" opacity="0.8"/>
              <text x="170" y="145" className="text-xs fill-gray-700">Mumbai</text>
            </g>
            
            <g className="cursor-pointer" onClick={() => { setSelectedCity('bangalore'); setCurrentView('city-map'); }}>
              <circle cx="210" cy="180" r="6" fill="#32CD32" opacity="0.8"/>
              <text x="220" y="185" className="text-xs fill-gray-700">Bangalore</text>
            </g>
            
            <g className="cursor-pointer" onClick={() => { setSelectedCity('chennai'); setCurrentView('city-map'); }}>
              <circle cx="250" cy="160" r="6" fill="#FF1493" opacity="0.8"/>
              <text x="260" y="165" className="text-xs fill-gray-700">Chennai</text>
            </g>
            
            <g className="cursor-pointer" onClick={() => { setSelectedCity('kolkata'); setCurrentView('city-map'); }}>
              <circle cx="280" cy="120" r="6" fill="#FFD700" opacity="0.8"/>
              <text x="290" y="125" className="text-xs fill-gray-700">Kolkata</text>
            </g>
          </svg>
        </div>
        <p className="text-sm text-gray-600 mt-2">🎯 Click on any city for detailed map</p>
      </div>

      {/* City Selection Grid */}
      <div className="bg-white rounded-lg p-4 mb-6 shadow-lg">
        <h3 className="font-semibold text-gray-800 mb-4">Detailed City Maps</h3>
        <div className="grid grid-cols-1 gap-3">
          {Object.entries(cityMaps).map(([key, city]) => (
            <button
              key={key}
              onClick={() => { setSelectedCity(key); setCurrentView('city-map'); }}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors text-left flex items-center gap-3"
            >
              <div 
                className="w-4 h-4 rounded-full" 
                style={{backgroundColor: city.color}}
              ></div>
              <div>
                <div className="font-medium text-gray-800">{city.name}</div>
                <div className="text-sm text-gray-600">{city.landmarks.length} landmarks mapped</div>
              </div>
              <svg className="w-5 h-5 text-gray-400 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L10.17 18 16.17 12 10.17 6 8.59 7.41 13.17 12z"/>
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Language Selection */}
      <div className="bg-white rounded-lg p-4 mb-6 shadow-lg">
        <h3 className="font-semibold text-gray-800 mb-4">Choose Language</h3>
        <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto">
          {languages.map((lang) => (
            <button key={lang.code} className="p-3 border border-gray-200 rounded-lg hover:bg-orange-50 hover:border-orange-300 transition-colors text-left">
              <div className="font-medium text-gray-800">{lang.name}</div>
              <div className="text-sm text-gray-600">{lang.native}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Offline Guide */}
      <div className="bg-white rounded-lg p-4 shadow-lg">
        <h3 className="font-semibold text-gray-800 mb-3">Offline Travel Guide</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p>• 🚨 Emergency numbers work offline</p>
          <p>• 🗣️ Basic Hindi phrases available</p>
          <p>• 🛡️ Safety tips for each region</p>
          <p>• 📍 Important locations cached</p>
          <p>• 🏛️ Tourist attractions with details</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full overflow-y-auto bg-gray-50" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] p-4 pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => {
                if (currentView === 'city-map') {
                  setCurrentView('map');
                  setSelectedCity(null);
                } else if (currentView === 'map') {
                  setCurrentView('main');
                } else {
                  onBack();
                }
              }}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
              </svg>
            </button>
            <div className="text-white">
              <h1 className="font-bold text-lg">
                {currentView === 'city-map' && selectedCity ? 
                  `${cityMaps[selectedCity].name} Map` : 
                  'Offline Mode'
                }
              </h1>
              <p className="text-white/80 text-sm">
                {currentView === 'city-map' ? 'Detailed city map with landmarks' : 'Works without internet'}
              </p>
            </div>
          </div>
        </div>

        {/* View Toggle */}
        {currentView !== 'city-map' && (
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentView('main')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentView === 'main'
                  ? 'bg-white/25 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              Main Features
            </button>
            <button
              onClick={() => setCurrentView('map')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentView === 'map'
                  ? 'bg-white/25 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              Maps & Languages
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {currentView === 'city-map' && selectedCity ? 
          renderCityMap(selectedCity) :
          currentView === 'main' ? renderMainView() : renderMapView()
        }
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

export default OfflineMode;
