import React from 'react';
import { Sparkles } from 'lucide-react';

const PageLoader = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[100px] animate-pulse animation-delay-2000"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative">
          <div className="absolute inset-0 w-24 h-24 border-4 border-purple-600/30 rounded-full animate-ping"></div>
          <div className="absolute inset-2 w-20 h-20 border-4 border-t-purple-600 border-r-pink-600 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-600/50 animate-pulse">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl font-bold text-white">Loading</h2>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full animate-loading-bar"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
