import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';

const LiveTranslator = ({ onBack }) => {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('hi');
  const [isTranslating, setIsTranslating] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState('');

  const recognition = useRef(null);
  const synthesis = useRef(window.speechSynthesis);

  // Memoize the languages array so it's stable across renders
  const languages = useMemo(() => ([
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'bn', name: 'Bengali', flag: '🇧🇩' },
    { code: 'te', name: 'Telugu', flag: '🏴' },
    { code: 'ta', name: 'Tamil', flag: '🏴' },
    { code: 'mr', name: 'Marathi', flag: '🏴' },
    { code: 'gu', name: 'Gujarati', flag: '🏴' },
    { code: 'kn', name: 'Kannada', flag: '🏴' },
    { code: 'ml', name: 'Malayalam', flag: '🏴' },
    { code: 'pa', name: 'Punjabi', flag: '🏴' },
    { code: 'ur', name: 'Urdu', flag: '🇵🇰' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
  ]), []);

  // Memoized helper for language name
  const getLanguageName = useCallback((code) => {
    return languages.find(lang => lang.code === code)?.name || 'English';
  }, [languages]);

  // Memoized basic translations fallback
  const getBasicTranslation = useCallback((text, from, to) => {
    const basicTranslations = {
      'en-hi': {
        'hello': 'नमस्ते',
        'thank you': 'धन्यवाद',
        'please': 'कृपया',
        'sorry': 'माफ़ करें',
        'yes': 'हाँ',
        'no': 'नहीं',
        'help': 'मदद',
        'emergency': 'आपातकाल'
      },
      'hi-en': {
        'नमस्ते': 'hello',
        'धन्यवाद': 'thank you',
        'कृपया': 'please',
        'माफ़ करें': 'sorry',
        'हाँ': 'yes',
        'नहीं': 'no',
        'मदद': 'help',
        'आपातकाल': 'emergency'
      }
    };

    const key = `${from}-${to}`;
    return basicTranslations[key]?.[text.toLowerCase()] || `[Translation: ${text}]`;
  }, []);

  const translateText = useCallback(async (text) => {
    if (!text.trim()) return;

    setIsTranslating(true);
    setError('');

    try {
      const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY || 'your-gemini-api-key-here';
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Translate the following text from ${getLanguageName(sourceLang)} to ${getLanguageName(targetLang)}. Only provide the translation, no additional text: "${text}"`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error('Translation failed');
      }

      const data = await response.json();
      const translation = data.candidates[0]?.content?.parts[0]?.text?.trim() || 'Translation failed';
      
      setTranslatedText(translation);
    } catch (error) {
      setError('Translation failed. Please check your internet connection.');
      setTranslatedText(getBasicTranslation(text, sourceLang, targetLang));
    } finally {
      setIsTranslating(false);
    }
  }, [sourceLang, targetLang, getLanguageName, getBasicTranslation]);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;
      recognition.current.lang = sourceLang === 'en' ? 'en-US' : `${sourceLang}-IN`;

      recognition.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSourceText(transcript);
        setIsListening(false);
        translateText(transcript);
      };

      recognition.current.onerror = () => {
        setIsListening(false);
        setError('Voice recognition failed. Please try again.');
      };

      recognition.current.onend = () => {
        setIsListening(false);
      };
    }
  }, [sourceLang, translateText]);

  const startListening = () => {
    if (recognition.current) {
      setIsListening(true);
      setError('');
      recognition.current.lang = sourceLang === 'en' ? 'en-US' : `${sourceLang}-IN`;
      recognition.current.start();
    }
  };

  const speakText = (text, lang) => {
    if (synthesis.current && text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === 'en' ? 'en-US' : `${lang}-IN`;
      synthesis.current.speak(utterance);
    }
  };

  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return (
    <div className="h-full overflow-y-auto bg-gradient-to-b from-teal-400 to-cyan-500" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 pt-6">
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
              <h1 className="font-bold text-lg">Live Translator</h1>
              <p className="text-white/80 text-sm">Powered by Gemini AI</p>
            </div>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="p-4 pb-24">
        <div className="bg-white rounded-lg p-4 mb-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700 mb-2 block">From</label>
              <select 
                value={sourceLang}
                onChange={(e) => setSourceLang(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <button 
              onClick={swapLanguages}
              className="mx-4 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center hover:bg-teal-200 transition-colors"
            >
              <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
              </svg>
            </button>

            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700 mb-2 block">To</label>
              <select 
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium text-gray-700">
              {languages.find(l => l.code === sourceLang)?.flag} {getLanguageName(sourceLang)}
            </span>
            <div className="flex gap-2">
              <button 
                onClick={startListening}
                disabled={isListening}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                </svg>
              </button>
              <button 
                onClick={() => speakText(sourceText, sourceLang)}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
              </button>
            </div>
          </div>
          <textarea
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            placeholder="Type or speak to translate..."
            className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            rows="3"
          />
          <button 
            onClick={() => translateText(sourceText)}
            disabled={isTranslating || !sourceText.trim()}
            className="w-full mt-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isTranslating ? 'Translating...' : 'Translate'}
          </button>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium text-gray-700">
              {languages.find(l => l.code === targetLang)?.flag} {getLanguageName(targetLang)}
            </span>
            <button 
              onClick={() => speakText(translatedText, targetLang)}
              disabled={!translatedText}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            </button>
          </div>
          <div className="min-h-[80px] p-3 bg-gray-50 border border-gray-200 rounded-lg">
            {translatedText ? (
              <p className="text-gray-800">{translatedText}</p>
            ) : (
              <p className="text-gray-400 italic">Translation will appear here...</p>
            )}
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded-lg mt-4">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg p-4 mt-4 shadow-lg">
          <h3 className="font-semibold text-gray-800 mb-3">Quick Phrases</h3>
          <div className="grid grid-cols-1 gap-2">
            {['Hello', 'Thank you', 'Please help me', 'Where is...?', 'How much?', 'Emergency!'].map((phrase) => (
              <button
                key={phrase}
                onClick={() => {
                  setSourceText(phrase);
                  translateText(phrase);
                }}
                className="text-left p-2 bg-gray-50 hover:bg-teal-50 rounded border hover:border-teal-300 transition-colors"
              >
                {phrase}
              </button>
            ))}
          </div>
        </div>
      </div>

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
        <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04z"/>
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default LiveTranslator;