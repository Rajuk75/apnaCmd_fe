import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dots-pattern opacity-30"></div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Back Button */}
      <Link 
        to={ROUTES.HOME} 
        className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </Link>

      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 shadow-soft-lg relative z-10 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-blue-glow">
            <span className="text-white font-display font-bold text-3xl">S</span>
          </div>
        </div>

        <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">{getText(text.button.LOGIN)}</h2>
        <p className="text-slate-500 mb-8">Access to the Client Portal is currently restricted.</p>

        {/* Countdown Timer */}
        <div className="mb-10">
          <p className="text-sm text-blue-600 font-medium uppercase tracking-widest mb-4">Opening In</p>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
              <span className="block text-2xl font-bold text-slate-900">{timeLeft.days}</span>
              <span className="text-xs text-slate-500">Days</span>
            </div>
            <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
              <span className="block text-2xl font-bold text-slate-900">{timeLeft.hours}</span>
              <span className="text-xs text-slate-500">Hours</span>
            </div>
            <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
              <span className="block text-2xl font-bold text-slate-900">{timeLeft.minutes}</span>
              <span className="text-xs text-slate-500">Mins</span>
            </div>
            <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
              <span className="block text-2xl font-bold text-slate-900">{timeLeft.seconds}</span>
              <span className="text-xs text-slate-500">Secs</span>
            </div>
          </div>
        </div>

        {/* Disabled Login Form */}
        <div className="space-y-4 opacity-50 pointer-events-none select-none relative">
          {/* Overlay Lock */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full border border-slate-200 shadow-soft">
              <Lock className="w-6 h-6 text-slate-400" />
            </div>
          </div>

          <div>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none"
              disabled
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none"
              disabled
            />
          </div>
          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
