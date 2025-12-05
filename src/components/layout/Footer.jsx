import React from 'react';
import { Sparkles, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { getText, text } = useLanguage();
  const footerText = text.app.FOOTER_TEXT || {}; 
  const t = (obj) => getText(obj) || '';

  return (
    <footer className="bg-[#111] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-500" />
              <span className="text-white font-bold text-xl tracking-tight">
                {getText(text.app.APP_NAME)}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {getText(text.app.FOOTER_TEXT?.DESCRIPTION)}
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm hover:text-blue-400 transition-colors cursor-pointer">
              <Mail className="w-4 h-4" />
              <span>{text.app.FOOTER_TEXT?.EMAIL}</span>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">{getText(text.app.FOOTER_TEXT?.COLUMNS?.LINKS?.TITLE)}</h3>
            <ul className="space-y-4">
              {text.app.FOOTER_TEXT?.COLUMNS?.LINKS?.ITEMS?.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                    {getText(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">{getText(text.app.FOOTER_TEXT?.COLUMNS?.RESOURCES?.TITLE)}</h3>
            <ul className="space-y-4">
              {text.app.FOOTER_TEXT?.COLUMNS?.RESOURCES?.ITEMS?.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                    {getText(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">{getText(text.app.FOOTER_TEXT?.COLUMNS?.COMPANY?.TITLE)}</h3>
            <ul className="space-y-4">
              {text.app.FOOTER_TEXT?.COLUMNS?.COMPANY?.ITEMS?.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                    {getText(item)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {getText(text.app.APP_NAME)}. {getText(text.app.FOOTER_TEXT?.COPYRIGHT)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
