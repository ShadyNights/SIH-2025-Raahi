import React from 'react';

const HamburgerMenu = ({ onClose, navigate }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-400 to-red-500 z-50 overflow-y-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-2xl font-bold">Menu</h2>
        <button
          onClick={onClose}
          className="text-white text-4xl font-bold"
          aria-label="Close menu"
        >
          &times;
        </button>
      </div>

      {/* Menu Items */}
      <div className="space-y-4 max-w-md mx-auto">
        <button
          className="block w-full text-left bg-white bg-opacity-20 rounded p-4 text-white text-lg font-semibold hover:bg-opacity-40 transition"
          onClick={() => { navigate('settings'); onClose(); }}
        >
          Settings
        </button>
        <button
          className="block w-full text-left bg-white bg-opacity-20 rounded p-4 text-white text-lg font-semibold hover:bg-opacity-40 transition"
          onClick={() => { navigate('profile-management'); onClose(); }}
        >
          Profile Management
        </button>
        <button
          className="block w-full text-left bg-white bg-opacity-20 rounded p-4 text-white text-lg font-semibold hover:bg-opacity-40 transition"
          onClick={() => { navigate('notifications'); onClose(); }}
        >
          Notifications
        </button>
        <button
          className="block w-full text-left bg-white bg-opacity-20 rounded p-4 text-white text-lg font-semibold hover:bg-opacity-40 transition"
          onClick={() => { navigate('safety-score'); onClose(); }}
        >
          Safety Score
        </button>
        <button
          className="block w-full text-left bg-white bg-opacity-20 rounded p-4 text-white text-lg font-semibold hover:bg-opacity-40 transition"
          onClick={() => { navigate('help-sos'); onClose(); }}
        >
          SOS Guide
        </button>
        {/* Add more menu items as needed */}
      </div>
    </div>
  );
};

export default HamburgerMenu;
