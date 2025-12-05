import React from 'react';
import { Sparkles, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ROUTES } from '../../constants/routes';

const Footer = () => {
  const { getText, text } = useLanguage();
  const footerText = text.app.FOOTER_TEXT || {}; 
  const t = (obj) => getText(obj) || '';

  return (
    <footer className="bg-[#111] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6 col-span-2 lg:col-span-1">
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
               <li><Link to={ROUTES.WEB_DEVELOPMENT} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">{getText(text.app.FOOTER_TEXT?.COLUMNS?.LINKS?.ITEMS?.[0])}</Link></li>
               <li><Link to={ROUTES.APP_DEVELOPMENT} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">{getText(text.app.FOOTER_TEXT?.COLUMNS?.LINKS?.ITEMS?.[1])}</Link></li>
               <li><Link to={ROUTES.CLOUD_SERVICES} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">{getText(text.app.FOOTER_TEXT?.COLUMNS?.LINKS?.ITEMS?.[2])}</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">{getText(text.app.FOOTER_TEXT?.COLUMNS?.RESOURCES?.TITLE)}</h3>
            <ul className="space-y-4">
               <li><Link to={ROUTES.ABOUT} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">{getText(text.app.FOOTER_TEXT?.COLUMNS?.RESOURCES?.ITEMS?.[0])}</Link></li>
               <li><Link to={ROUTES.CAREERS} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">{getText(text.app.FOOTER_TEXT?.COLUMNS?.RESOURCES?.ITEMS?.[1])}</Link></li>
               <li><Link to={ROUTES.CONTACT} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">{getText(text.app.FOOTER_TEXT?.COLUMNS?.RESOURCES?.ITEMS?.[2])}</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">{getText(text.app.FOOTER_TEXT?.COLUMNS?.COMPANY?.TITLE)}</h3>
            <ul className="space-y-4">
               <li><Link to={ROUTES.PRIVACY} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">{getText(text.app.FOOTER_TEXT?.COLUMNS?.COMPANY?.ITEMS?.[0])}</Link></li>
               <li><Link to={ROUTES.TERMS} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">{getText(text.app.FOOTER_TEXT?.COLUMNS?.COMPANY?.ITEMS?.[1])}</Link></li>
               <li><Link to={ROUTES.REFUND} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">{getText(text.app.FOOTER_TEXT?.COLUMNS?.COMPANY?.ITEMS?.[2])}</Link></li>
               <li><Link to={ROUTES.GDPR} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">{getText(text.app.FOOTER_TEXT?.COLUMNS?.COMPANY?.ITEMS?.[3])}</Link></li>
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
