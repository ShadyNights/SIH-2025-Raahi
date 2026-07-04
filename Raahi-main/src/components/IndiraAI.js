import React, { useState, useEffect, useRef } from 'react';

const IndiraAI = ({ onBack }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Namaste! How can I assist you on the journey?",
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Hide animation after 3 seconds
    const timer = setTimeout(() => setShowAnimation(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Gemini AI Integration
  const callGeminiAPI = async (userMessage) => {
    try {
      // Replace with your actual Gemini API key
      const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY || 'your-gemini-api-key';
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are Indira AI, a helpful Indian travel assistant. You help travelers with trip planning, safety tips, local information, and cultural guidance. Keep responses concise and helpful. User message: ${userMessage}`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      return data.candidates[0]?.content?.parts[0]?.text || "I'm here to help with your travel needs!";
    } catch (error) {
      console.error('Gemini API Error:', error);
      return "I'm experiencing some technical difficulties. How else can I assist you with your travel plans?";
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Call Gemini AI
    const aiResponse = await callGeminiAPI(inputText);

    const aiMessage = {
      id: messages.length + 2,
      sender: 'ai',
      text: aiResponse,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  const quickReplies = [
    "Suggest a temple itinerary",
    "Nearby temples",
    "Safety tips",
    "Local customs"
  ];

  if (showAnimation) {
    return (
      <div className="h-full overflow-y-auto bg-gradient-to-b from-[#FF6B35] to-[#FF8F00]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {/* Sticky Header */}
        <div className="sticky top-0 bg-gradient-to-b from-[#FF6B35] to-[#FF8F00] z-10 p-4 pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#FF6B35]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
                </svg>
              </div>
              <div>
                <span className="text-white font-bold text-lg">RAAHI</span>
                <span className="text-white/80 text-sm"> - Secure Journeys</span>
              </div>
            </div>
            <div className="flex flex-col justify-between w-6 h-4">
              <div className="w-full h-[2px] bg-white rounded-full"></div>
              <div className="w-full h-[2px] bg-white rounded-full"></div>
              <div className="w-full h-[2px] bg-white rounded-full"></div>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Chat with Indira AI</h1>
            <p className="text-white/80">(Opening Animation)</p>
          </div>
        </div>

        {/* Scrollable Animation Content */}
        <div className="px-8 pb-24">
          {/* Animated Indira Avatar */}
          <div className="flex-1 flex items-center justify-center py-8">
            <div className="relative">
              {/* Decorative Background Patterns */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                  <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1" fill="none" opacity="0.2"/>
                  <path d="M200,50 L220,70 L200,90 L180,70 Z" fill="white" opacity="0.3"/>
                  <path d="M350,200 L370,220 L350,240 L330,220 Z" fill="white" opacity="0.3"/>
                  <path d="M200,350 L220,370 L200,390 L180,370 Z" fill="white" opacity="0.3"/>
                  <path d="M50,200 L70,220 L50,240 L30,220 Z" fill="white" opacity="0.3"/>
                </svg>
              </div>

              {/* Indira Avatar */}
              <div className="relative w-64 h-64 mx-auto animate-pulse">
                {/* Main Circle Background */}
                <div className="w-full h-full rounded-full bg-gradient-to-b from-yellow-400 to-orange-500 p-4 shadow-2xl">
                  
                  {/* Avatar Illustration */}
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-orange-300 to-red-400 relative overflow-hidden">
                    
                    {/* Face */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-yellow-100 rounded-full"></div>
                    
                    {/* Hair/Crown */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gradient-to-b from-yellow-600 to-yellow-700 rounded-t-full"></div>
                    
                    {/* Eyes */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 flex gap-2">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    
                    {/* Traditional Dress */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-600 to-orange-500 rounded-b-full"></div>
                    
                    {/* Phone in Hand */}
                    <div className="absolute bottom-16 left-6 w-8 h-12 bg-gray-800 rounded-sm">
                      <div className="w-6 h-8 bg-blue-400 rounded-sm m-1"></div>
                    </div>
                    
                    {/* Shield */}
                    <div className="absolute bottom-16 right-6 w-8 h-10 bg-yellow-500 rounded-t-full"></div>
                    
                    {/* WiFi Signal */}
                    <div className="absolute top-16 right-8">
                      <div className="flex items-end gap-1">
                        <div className="w-1 h-2 bg-white rounded animate-bounce"></div>
                        <div className="w-1 h-3 bg-white rounded animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-1 h-4 bg-white rounded animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loading Message */}
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-4">
              <p className="text-white text-lg">Namaste! How can I assist you on the journey?</p>
            </div>
          </div>

          {/* Additional Animation Content */}
          <div className="mt-8 space-y-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">✨ What I can help you with:</h3>
              <ul className="text-white/90 text-sm space-y-1">
                <li>• Travel planning and itineraries</li>
                <li>• Local customs and traditions</li>
                <li>• Safety tips for tourists</li>
                <li>• Best places to visit in India</li>
              </ul>
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
              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
            </svg>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"/>
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
  }

  return (
    <div className="h-full overflow-hidden bg-gray-100 flex flex-col">
      {/* Fixed Header */}
      <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8F00] p-4 pt-6 shadow-lg flex-shrink-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#FF6B35]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.5c-1.5 0-2.8.7-3.6 1.8-.4.6-.4 1.4 0 2 .8 1.1 2.1 1.8 3.6 1.8s2.8-.7 3.6-1.8c.4-.6.4-1.4 0-2C14.8 3.2 13.5 2.5 12 2.5z"/>
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-lg">RAAHI</span>
              <span className="text-white/80 text-sm"> - Secure Journeys</span>
            </div>
          </div>
          <div className="flex flex-col justify-between w-6 h-4">
            <div className="w-full h-[2px] bg-white rounded-full"></div>
            <div className="w-full h-[2px] bg-white rounded-full"></div>
            <div className="w-full h-[2px] bg-white rounded-full"></div>
          </div>
        </div>
        
        <div className="text-center">
          <h1 className="text-xl font-bold text-white mb-1">Chat with Indira AI</h1>
          <p className="text-white/80 text-sm">(Conversation View)</p>
        </div>
      </div>

      {/* Scrollable Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
              message.sender === 'user' 
                ? 'bg-[#4FC3F7] text-white rounded-br-md' 
                : 'bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] text-white rounded-bl-md'
            }`}>
              {message.sender === 'ai' && (
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] rounded-full"></div>
                  </div>
                </div>
              )}
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">{message.time}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] text-white px-4 py-3 rounded-2xl rounded-bl-md">
              <div className="flex items-center gap-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                <span className="text-xs">Indira is typing...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />

        {/* Extra content for scrolling demo */}
        <div className="mt-8 space-y-4">
          <div className="bg-orange-50 rounded-lg p-4">
            <h3 className="text-orange-800 font-semibold mb-2">🏛️ Popular Destinations</h3>
            <ul className="text-orange-700 text-sm space-y-1">
              <li>• Taj Mahal, Agra</li>
              <li>• Red Fort, Delhi</li>
              <li>• Hawa Mahal, Jaipur</li>
              <li>• Kerala Backwaters</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-blue-800 font-semibold mb-2">🛡️ Safety Tips</h3>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Keep emergency contacts handy</li>
              <li>• Stay in well-lit areas</li>
              <li>• Follow local guidelines</li>
              <li>• Trust your instincts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fixed Quick Replies */}
      <div className="px-4 pb-2 bg-gray-100 flex-shrink-0">
        <div className="flex flex-wrap gap-2">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => setInputText(reply)}
              className="bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm hover:bg-gray-300 transition-colors flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              </svg>
              {reply}
            </button>
          ))}
        </div>
      </div>

      {/* Fixed Input Area */}
      <div className="bg-white p-4 border-t border-gray-200 flex-shrink-0">
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
            </svg>
          </button>
          
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me about travel, safety, or local customs..."
              className="w-full px-4 py-3 bg-gray-100 rounded-full border-none outline-none text-gray-700 placeholder-gray-500"
            />
          </div>

          <button 
            onClick={handleSendMessage}
            className="w-10 h-10 bg-gradient-to-r from-[#FF8F00] to-[#FF6B35] rounded-full flex items-center justify-center shadow-lg"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <nav className="bg-gradient-to-r from-[#FF9223] via-[#FF7635] to-[#FF6B35] h-[80px] flex justify-around items-center flex-shrink-0">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" onClick={onBack}>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"/>
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

export default IndiraAI;
