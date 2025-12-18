import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { FAQ_TEXT } from '../../constants/text';

const FAQSection = () => {
  const { getText } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dots-pattern opacity-30"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono tracking-widest text-blue-600 uppercase mb-6">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
            {getText(FAQ_TEXT.TITLE)}
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_TEXT.ITEMS.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-500 bg-white ${
                openIndex === index 
                  ? 'border-blue-200 shadow-soft-lg' 
                  : 'border-slate-200 hover:border-blue-200 shadow-soft'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-sm transition-colors ${
                    openIndex === index ? 'text-blue-500' : 'text-slate-400'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`font-medium text-lg transition-colors ${
                    openIndex === index ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                  }`}>
                    {getText(item.question)}
                  </span>
                </div>
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-blue-500 border-blue-500 text-white rotate-0' 
                    : 'bg-white border-slate-200 text-slate-500 group-hover:border-blue-300 group-hover:text-blue-500'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pl-16">
                  <p className="text-slate-500 leading-relaxed">
                    {getText(item.answer)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">Still have questions?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-blue-glow-lg hover:scale-105 group"
          >
            Get in Touch
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
