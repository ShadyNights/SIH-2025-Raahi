// src/components/SettingsPage.js
import React from 'react';

const SettingsPage = ({ onBack }) => (
  <div className="h-full flex flex-col bg-gray-50">
    {/* AppBar/Header */}
    <div className="bg-gradient-to-r from-orange-400 to-orange-600 px-5 py-4 flex items-center gap-3 sticky top-0 z-10">
      <button
        onClick={onBack}
        className="w-9 h-9 flex items-center justify-center bg-white/30 rounded-full mr-2"
      >
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
      </button>
      <h2 className="text-white text-[22px] font-bold">Settings</h2>
    </div>

    {/* Settings Content */}
    <div className="flex-1 overflow-y-auto p-4 pb-24">
      {/* General */}
      <section className="bg-white rounded-lg mb-4 overflow-hidden shadow">
        <h3 className="text-[16px] font-bold px-5 pt-5 pb-2 text-gray-700">General</h3>
        <div className="px-5 pb-4 space-y-2">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-3">
              <span role="img" aria-label="language">🌐</span>
              <span className="text-gray-700 font-medium">Language</span>
            </div>
            <span className="text-gray-400">English</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-3">
              <span role="img" aria-label="currency">💱</span>
              <span className="text-gray-700 font-medium">Currency</span>
            </div>
            <span className="text-gray-400">INR</span>
          </div>
        </div>
      </section>
      
      {/* Notifications */}
      <section className="bg-white rounded-lg mb-4 overflow-hidden shadow">
        <h3 className="text-[16px] font-bold px-5 pt-5 pb-2 text-gray-700">Notifications</h3>
        <div className="px-5 pb-4 space-y-2">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-3">
              <span role="img" aria-label="push">🔔</span>
              <span className="text-gray-700 font-medium">Push Notifications</span>
            </div>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-3">
              <span role="img" aria-label="sound">🔊</span>
              <span className="text-gray-700 font-medium">Sound & Haptics</span>
            </div>
            <input type="checkbox" className="toggle" />
          </div>
        </div>
      </section>
      
      {/* Privacy */}
      <section className="bg-white rounded-lg mb-4 overflow-hidden shadow">
        <h3 className="text-[16px] font-bold px-5 pt-5 pb-2 text-gray-700">Privacy</h3>
        <div className="px-5 pb-4 space-y-2">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-3">
              <span role="img" aria-label="data">🔒</span>
              <span className="text-gray-700 font-medium">Data Sharing</span>
            </div>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-3">
              <span role="img" aria-label="linked">🔗</span>
              <span className="text-gray-700 font-medium">Linked Accounts</span>
            </div>
            <button className="text-gray-500 text-sm underline">Manage</button>
          </div>
        </div>
      </section>
      
      {/* Terms & Conditions */}
      <button className="w-full bg-white rounded-lg py-4 mt-2 font-semibold text-gray-700 shadow">Terms &amp; Conditions</button>
    </div>

    {/* Bottom nav can be included here, if it's unified across pages */}
  </div>
);

export default SettingsPage;
