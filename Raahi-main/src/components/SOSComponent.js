// src/components/SOSComponent.js - Fixed unused variable warning
import React, { useState, useRef, useEffect } from 'react';

const SOSComponent = ({ onBack }) => {
  const [sosActivated, setSosActivated] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('Getting location...');
  const countdownRef = useRef(null);
  
  // Fixed: Removed setContacts since it's not used - contacts are static
  const contacts = [
    { id: 1, name: 'Emergency Helpline', number: '100', type: 'police' },
    { id: 2, name: 'Fire Brigade', number: '101', type: 'fire' },
    { id: 3, name: 'Ambulance', number: '102', type: 'medical' },
    { id: 4, name: 'Tourist Helpline', number: '1363', type: 'tourist' },
  ];

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation(`${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`);
        },
        () => {
          setCurrentLocation('Location unavailable');
        }
      );
    }

    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    };
  }, []);

  const handleSOSPress = () => {
    if (sosActivated) return;

    setSosActivated(true);
    setCountdown(10);
    setIsEmergencyMode(true);

    // Start countdown
    countdownRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownRef.current);
          triggerEmergency();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const cancelSOS = () => {
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
    }
    setSosActivated(false);
    setCountdown(null);
    setIsEmergencyMode(false);
  };

  const triggerEmergency = () => {
    setCountdown(0);
    // Simulate emergency services contact
    alert('🚨 EMERGENCY ALERT SENT!\n\n📍 Location shared with emergency services\n📞 Contacting emergency contacts\n🆘 Help is on the way!');
    
    // Reset after showing alert
    setTimeout(() => {
      setSosActivated(false);
      setIsEmergencyMode(false);
    }, 3000);
  };

  const callEmergency = (number) => {
    window.open(`tel:${number}`, '_self');
  };

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-red-500 to-red-600" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      
      {/* Header - Clean without hamburger menu */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 pt-6">
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
            <div className="text-white">
              <h1 className="font-bold text-lg">Emergency SOS</h1>
              <p className="text-white/80 text-sm">Tap for immediate help</p>
            </div>
          </div>
          {/* Emergency Icon Instead of Hamburger */}
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pb-24">

        {/* Current Status */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-3 h-3 rounded-full ${isEmergencyMode ? 'bg-red-400 animate-pulse' : 'bg-green-400'}`}></div>
            <span className="font-semibold">
              {isEmergencyMode ? 'EMERGENCY MODE ACTIVE' : 'Ready for Emergency'}
            </span>
          </div>
          <div className="text-sm opacity-80">
            📍 Location: {currentLocation}
          </div>
          <div className="text-sm opacity-80">
            🕒 {new Date().toLocaleTimeString()}
          </div>
        </div>

        {/* Main SOS Button */}
        <div className="text-center mb-8">
          <div className="relative">
            <button
              onClick={handleSOSPress}
              disabled={sosActivated}
              className={`relative w-48 h-48 mx-auto rounded-full text-white font-black text-3xl tracking-wider shadow-2xl transition-all duration-300 ${
                sosActivated 
                  ? 'bg-red-800 scale-110' 
                  : 'bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95'
              }`}
              style={{
                boxShadow: sosActivated 
                  ? '0 0 50px rgba(239, 68, 68, 0.8), 0 0 100px rgba(239, 68, 68, 0.4)' 
                  : '0 25px 50px -12px rgba(0, 0, 0, 0.8)'
              }}
            >
              {/* Pulsing Rings */}
              {sosActivated && (
                <>
                  <div className="absolute inset-0 w-full h-full border-4 border-red-300 rounded-full animate-ping"></div>
                  <div className="absolute -inset-4 w-[200px] h-[200px] border-4 border-red-200 rounded-full animate-ping animation-delay-500"></div>
                  <div className="absolute -inset-8 w-[208px] h-[208px] border-4 border-red-100 rounded-full animate-ping animation-delay-1000"></div>
                </>
              )}
              
              {/* Button Content */}
              <div className="relative z-10">
                {countdown !== null ? (
                  <div className="text-center">
                    <div className="text-5xl font-black mb-2">{countdown}</div>
                    <div className="text-sm font-medium">ACTIVATING</div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-4xl font-black mb-2">SOS</div>
                    <div className="text-sm font-medium">EMERGENCY</div>
                  </div>
                )}
              </div>
            </button>
          </div>

          {/* Cancel Button */}
          {sosActivated && (
            <button
              onClick={cancelSOS}
              className="mt-6 bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              CANCEL SOS
            </button>
          )}

          <p className="mt-4 text-white text-sm opacity-90">
            {sosActivated 
              ? 'Emergency services will be contacted automatically'
              : 'Hold to activate emergency alert'
            }
          </p>
        </div>

        {/* Emergency Instructions */}
        <div className="bg-white rounded-lg p-4 mb-6 shadow-lg">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-red-500">⚠️</span>
            Emergency Instructions
          </h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>1.</strong> Stay calm and find a safe location</p>
            <p><strong>2.</strong> If in immediate danger, call local emergency numbers</p>
            <p><strong>3.</strong> Share your location with trusted contacts</p>
            <p><strong>4.</strong> Follow local emergency procedures</p>
            <p><strong>5.</strong> Wait for help to arrive</p>
          </div>
        </div>

        {/* Quick Dial Emergency Contacts */}
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-blue-500">📞</span>
            Emergency Contacts
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {contacts.map((contact) => (
              <button
                key={contact.id}
                onClick={() => callEmergency(contact.number)}
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-blue-50 rounded-lg border hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    contact.type === 'police' ? 'bg-blue-100 text-blue-600' :
                    contact.type === 'fire' ? 'bg-red-100 text-red-600' :
                    contact.type === 'medical' ? 'bg-green-100 text-green-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    {contact.type === 'police' ? '👮' :
                     contact.type === 'fire' ? '🚒' :
                     contact.type === 'medical' ? '🚑' : '🏛️'}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">{contact.name}</div>
                    <div className="text-sm text-gray-600">{contact.number}</div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Safety Tips */}
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-4 mt-6 border border-orange-200">
          <h3 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
            <span>💡</span>
            Safety Tips
          </h3>
          <div className="space-y-2 text-sm text-orange-700">
            <p>• Keep your phone charged and carry a power bank</p>
            <p>• Share your travel itinerary with trusted contacts</p>
            <p>• Learn basic local emergency phrases</p>
            <p>• Keep important documents accessible</p>
            <p>• Stay in well-lit, populated areas when possible</p>
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
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default SOSComponent;
