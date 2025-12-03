import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, Lock } from 'lucide-react';
import { ROUTES } from '../constants/routes';
import { useLanguage } from '../context/LanguageContext';

const Login = () => {
  const { getText, text } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target Date: January 5, 2026
    const targetDate = new Date('January 5, 2026 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        // Handle expiration if needed
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Back Button */}
      <Link 
        to={ROUTES.HOME} 
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </Link>

      <div className="max-w-md w-full bg-[#111] border border-white/10 rounded-2xl p-8 shadow-2xl relative z-10 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-2">{getText(text.button.LOGIN)}</h2>
        <p className="text-gray-400 mb-8">Access to the Client Portal is currently restricted.</p>

        {/* Countdown Timer */}
        <div className="mb-10">
          <p className="text-sm text-purple-400 font-medium uppercase tracking-widest mb-4">Opening In</p>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-[#1a1a1a] rounded-lg p-3 border border-white/5">
              <span className="block text-2xl font-bold text-white">{timeLeft.days}</span>
              <span className="text-xs text-gray-500">Days</span>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-3 border border-white/5">
              <span className="block text-2xl font-bold text-white">{timeLeft.hours}</span>
              <span className="text-xs text-gray-500">Hours</span>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-3 border border-white/5">
              <span className="block text-2xl font-bold text-white">{timeLeft.minutes}</span>
              <span className="text-xs text-gray-500">Mins</span>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-3 border border-white/5">
              <span className="block text-2xl font-bold text-white">{timeLeft.seconds}</span>
              <span className="text-xs text-gray-500">Secs</span>
            </div>
          </div>
        </div>

        {/* Disabled Login Form */}
        <div className="space-y-4 opacity-50 pointer-events-none select-none relative">
            {/* Overlay Lock */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="bg-black/80 backdrop-blur-sm p-3 rounded-full border border-white/10">
                    <Lock className="w-6 h-6 text-gray-400" />
                </div>
            </div>

          <div>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none"
              disabled
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none"
              disabled
            />
          </div>
          <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
