import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, User, FileCode, Rocket, Smartphone, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ShowcaseCarousel = () => {
  const { getText, text } = useLanguage();
  const [rotation, setRotation] = useState(0);
  const cards = text.app.SHOWCASE?.CARDS || [];
  const cardCount = cards.length;
  const theta = 360 / cardCount;
  const radius = 400; // Adjust radius for spacing

  const rotate = (direction) => {
    setRotation((prev) => direction === 'left' ? prev + theta : prev - theta);
  };

  // Auto-rotate effect (optional, can be removed if manual only is preferred)
  // useEffect(() => {
  //   const interval = setInterval(() => rotate('right'), 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {getText(text.app.SHOWCASE?.TITLE)}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {getText(text.app.SHOWCASE?.SUBTITLE)}
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-[300px] w-full flex items-center justify-center perspective-[1500px]">
          <div 
            className="relative w-[380px] h-[220px] preserve-3d transition-transform duration-1000 ease-out"
            style={{ transform: `rotateY(${rotation}deg)` }}
          >
            {cards.map((card, index) => {
              const angle = theta * index;
              return (
                <div 
                  key={card.id}
                  className="absolute top-0 left-0 w-full h-full backface-visible"
                  style={{ 
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  }}
                >
                  {/* Card Content */}
                  <div className="w-full h-full bg-[#111] rounded-2xl border border-white/5 overflow-hidden hover:border-yellow-500/30 transition-all duration-300 shadow-2xl p-1 group">
                    <div className="bg-[#1a1a1a] rounded-[12px] p-5 h-full flex flex-col justify-between relative overflow-hidden">
                      
                      {/* Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                            <User className="w-4 h-4 text-yellow-500" />
                          </div>
                          <div>
                            <h3 className="text-white font-bold text-base leading-tight">{getText(card.title)}</h3>
                            <p className="text-yellow-500/80 text-[10px]">{getText(card.subtitle)}</p>
                          </div>
                        </div>
                      </div>

                      {/* Comparison Section (Compact) */}
                      <div className="grid grid-cols-2 gap-2 flex-1">
                        {/* Left Side */}
                        <div className="bg-[#0a0a0a] rounded-lg p-2 border border-white/5 flex flex-col items-center justify-center gap-1">
                          <span className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold">{getText(card.leftLabel)}</span>
                          <div className="flex items-center gap-1 text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-xs">3 Months</span>
                          </div>
                        </div>

                        {/* Right Side */}
                        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 rounded-lg p-2 border border-yellow-500/20 flex flex-col items-center justify-center gap-1 relative overflow-hidden">
                          <span className="text-[9px] text-yellow-500 uppercase tracking-wider font-semibold flex items-center gap-1">
                            {getText(card.rightLabel)}
                          </span>
                          <div className="flex items-center gap-1 text-yellow-500 font-bold">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="text-xs">Live</span>
                          </div>
                          <div className="absolute inset-0 bg-yellow-500/5 blur-md -z-10"></div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="mt-3 pt-2 border-t border-white/5 flex items-center gap-2">
                        <Rocket className="w-3 h-3 text-green-500" />
                        <p className="text-gray-300 text-[10px] line-clamp-1">
                          {getText(card.description)}
                        </p>
                      </div>
                      
                      {/* Glass Reflection Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-[12px]"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-6 mt-8">
          <button 
            onClick={() => rotate('left')}
            className="p-4 rounded-full bg-white/5 hover:bg-yellow-500 text-white hover:text-black transition-all border border-white/10 hover:border-yellow-500 backdrop-blur-sm group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={() => rotate('right')}
            className="p-4 rounded-full bg-white/5 hover:bg-yellow-500 text-white hover:text-black transition-all border border-white/10 hover:border-yellow-500 backdrop-blur-sm group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </section>
  );
};

export default ShowcaseCarousel;
