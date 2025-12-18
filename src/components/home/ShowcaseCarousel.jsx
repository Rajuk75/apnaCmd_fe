import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Calendar, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ShowcaseCarousel = () => {
  const { getText, text } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = text.app.SHOWCASE?.CARDS || [];
  const cardCount = cards.length;

  const navigate = (direction) => {
    if (direction === 'left') {
      setActiveIndex((prev) => (prev === 0 ? cardCount - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === cardCount - 1 ? 0 : prev + 1));
    }
  };

  const getCardPosition = (index) => {
    const diff = index - activeIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(cardCount - 1)) return 'right';
    if (diff === -1 || diff === cardCount - 1) return 'left';
    return 'hidden';
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 dots-pattern opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono tracking-widest text-blue-600 uppercase mb-6">
            Our Work
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
            {getText(text.app.SHOWCASE?.TITLE)}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            {getText(text.app.SHOWCASE?.SUBTITLE)}
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative h-[450px] flex items-center justify-center perspective-1500 mb-12">
          {cards.map((card, index) => {
            const position = getCardPosition(index);
            
            return (
              <div 
                key={card.id}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-full max-w-md cursor-pointer transition-all duration-700 ease-out ${
                  position === 'center' 
                    ? 'z-30 scale-100 opacity-100 translate-x-0' 
                    : position === 'left'
                    ? 'z-20 scale-90 opacity-40 -translate-x-[60%]'
                    : position === 'right'
                    ? 'z-20 scale-90 opacity-40 translate-x-[60%]'
                    : 'z-10 scale-75 opacity-0'
                }`}
                style={{
                  transform: position === 'left' 
                    ? 'translateX(-60%) scale(0.9) rotateY(15deg)' 
                    : position === 'right'
                    ? 'translateX(60%) scale(0.9) rotateY(-15deg)'
                    : position === 'center'
                    ? 'translateX(0) scale(1) rotateY(0)'
                    : 'translateX(0) scale(0.75) rotateY(0)'
                }}
              >
                {/* Card */}
                <div className={`bg-white border rounded-2xl overflow-hidden transition-all duration-500 ${
                  position === 'center' 
                    ? 'border-blue-200 shadow-soft-lg' 
                    : 'border-slate-200'
                }`}>
                  {/* Card Header */}
                  <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-blue-50/50 to-transparent">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Case Study #{index + 1}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-mono text-green-600">Live</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                      {getText(card.title)}
                    </h3>
                    <p className="text-slate-500 text-sm">
                      {getText(card.subtitle)}
                    </p>
                  </div>

                  {/* Card Stats */}
                  <div className="grid grid-cols-2 gap-px bg-slate-100">
                    <div className="bg-white p-5">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs font-mono uppercase">{getText(card.leftLabel)}</span>
                      </div>
                      <p className="text-slate-900 font-bold">3 Months</p>
                    </div>
                    <div className="bg-white p-5">
                      <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-mono uppercase">{getText(card.rightLabel)}</span>
                      </div>
                      <p className="text-blue-600 font-bold flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Delivered
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 border-t border-slate-100">
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                      {getText(card.description)}
                    </p>
                    <button className="group flex items-center gap-2 text-blue-600 text-sm font-medium hover:gap-3 transition-all">
                      View Project
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6">
          <button 
            onClick={() => navigate('left')}
            className="group w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 shadow-soft"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-blue-500' 
                    : 'w-2 bg-slate-300 hover:bg-blue-300'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={() => navigate('right')}
            className="group w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 shadow-soft"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseCarousel;
