import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ROUTES } from '../../constants/routes';

const Footer = () => {
  const { getText, text } = useLanguage();

  const footerLinks = [
    {
      title: getText(text.app.FOOTER_TEXT?.COLUMNS?.LINKS?.TITLE) || 'Services',
      links: [
        { name: getText(text.app.FOOTER_TEXT?.COLUMNS?.LINKS?.ITEMS?.[0]) || 'Web Development', path: ROUTES.WEB_DEVELOPMENT },
        { name: getText(text.app.FOOTER_TEXT?.COLUMNS?.LINKS?.ITEMS?.[1]) || 'App Development', path: ROUTES.APP_DEVELOPMENT },
        { name: getText(text.app.FOOTER_TEXT?.COLUMNS?.LINKS?.ITEMS?.[2]) || 'Cloud Services', path: ROUTES.CLOUD_SERVICES },
      ]
    },
    {
      title: getText(text.app.FOOTER_TEXT?.COLUMNS?.RESOURCES?.TITLE) || 'Company',
      links: [
        { name: getText(text.app.FOOTER_TEXT?.COLUMNS?.RESOURCES?.ITEMS?.[0]) || 'About', path: ROUTES.ABOUT },
        { name: getText(text.app.FOOTER_TEXT?.COLUMNS?.RESOURCES?.ITEMS?.[1]) || 'Careers', path: ROUTES.CAREERS },
        { name: getText(text.app.FOOTER_TEXT?.COLUMNS?.RESOURCES?.ITEMS?.[2]) || 'Contact', path: ROUTES.CONTACT },
      ]
    },
    {
      title: getText(text.app.FOOTER_TEXT?.COLUMNS?.COMPANY?.TITLE) || 'Legal',
      links: [
        { name: getText(text.app.FOOTER_TEXT?.COLUMNS?.COMPANY?.ITEMS?.[0]) || 'Privacy', path: ROUTES.PRIVACY },
        { name: getText(text.app.FOOTER_TEXT?.COLUMNS?.COMPANY?.ITEMS?.[1]) || 'Terms', path: ROUTES.TERMS },
        { name: getText(text.app.FOOTER_TEXT?.COLUMNS?.COMPANY?.ITEMS?.[2]) || 'Refund', path: ROUTES.REFUND },
        { name: getText(text.app.FOOTER_TEXT?.COLUMNS?.COMPANY?.ITEMS?.[3]) || 'GDPR', path: ROUTES.GDPR },
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to={ROUTES.HOME} className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-blue-glow">
                <span className="text-white font-display font-bold text-2xl">S</span>
              </div>
              <span className="text-white font-display font-semibold text-2xl tracking-tight">
                {getText(text.app.APP_NAME)}
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              {getText(text.app.FOOTER_TEXT?.DESCRIPTION)}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <a href={`mailto:${text.app.FOOTER_TEXT?.EMAIL}`} className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group">
                <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
                  <Mail className="w-4 h-4 group-hover:text-white" />
                </div>
                <span className="text-sm">{text.app.FOOTER_TEXT?.EMAIL}</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx} className="lg:col-span-2">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      to={link.path} 
                      className="group inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
              Newsletter
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Stay updated with our latest news and updates.
            </p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-bold text-sm hover:shadow-blue-glow transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-mono">
            &copy; {new Date().getFullYear()} {getText(text.app.APP_NAME)}. {getText(text.app.FOOTER_TEXT?.COPYRIGHT)}
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="text-slate-500 hover:text-blue-400 transition-colors text-sm font-mono"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <p className="text-[20vw] font-display font-bold text-white/[0.02] leading-none whitespace-nowrap -mb-[0.1em]">
          {getText(text.app.APP_NAME)}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
