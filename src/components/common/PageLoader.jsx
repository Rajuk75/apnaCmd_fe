import React from 'react';

const PageLoader = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      {/* Dots Pattern */}
      <div className="absolute inset-0 dots-pattern opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Spinner */}
        <div className="relative">
          {/* Outer Ping */}
          <div className="absolute inset-0 w-24 h-24 border border-blue-200 rounded-full animate-ping"></div>
          
          {/* Spinning Ring */}
          <div className="absolute inset-2 w-20 h-20 border-2 border-t-blue-500 border-r-blue-300 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          
          {/* Center Logo */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-blue-glow">
              <span className="text-white font-display font-bold text-2xl">S</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-display font-bold text-slate-900 tracking-tight">Loading</h2>
          
          {/* Animated Dots */}
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-[2px] bg-blue-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;

