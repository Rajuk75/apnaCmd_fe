import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { FAQ_TEXT } from '../../constants/text';

const FAQSection = () => {
  const { getText } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {getText(FAQ_TEXT.TITLE)}
        </h2>

        <div className="space-y-4">
          {FAQ_TEXT.ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#111] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/10"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="text-gray-200 font-medium text-lg group-hover:text-white transition-colors">
                  {getText(item.question)}
                </span>
                <div className={`p-1 rounded-full border border-white/10 transition-colors ${openIndex === index ? 'bg-white/10 text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {getText(item.answer)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
